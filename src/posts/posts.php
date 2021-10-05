<?php
	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	// Register
	function gb_blocks_posts_init() {
		register_block_type( 'gb/block-posts', array(
			'api_version' => 2,
			'style'         => 'gb-blocks-style-css',
			'editor_script' => 'gb-blocks-block-js',
			'editor_style'  => 'gb-blocks-block-editor-css',
			'render_callback' => 'gb_blocks_posts_render_callback',
			'attributes' => array(
				'isInPostFetch' => array(
					'type' => 'string'
				),
				'postType' => array(
					'type' => 'string'
				),
				'postTypesAvailable' => array(
					'type' => 'array'
				),
				'limit' => array(
					'type' => 'string'
				),
				'paginate' => array(
					'type' => 'boolean'
				),
				'taxonomy' => array(
					'type' => 'string'
				),
				'taxonomyFilter' => array(
					'type' => 'string'
				),
				'taxonomyFilterActive' => array(
					'type' => 'array'
				),
				'taxonomiesAvailable' => array(
					'type' => 'array'
				),
				'termSlug' => array(
					'type' => 'string'
				),
				'callbackFunction' => array(
					'type' => 'string'
				),
				'className' => array(
					'type' => 'string'
				)
			)
		) );
	}

	add_action( 'init', 'gb_blocks_posts_init', 55 );

	function gb_blocks_posts_render_callback( $block_attributes, $content ) {
		
		$html = '';

		$block_attributes = apply_filters( 'gb-posts-before-attributes', $block_attributes );
		
		// return '<pre>' . print_r( $block_attributes, true ) . '</pre>';
		$class_names = array(
			'wp-block',
			'wp-block-gb-block-posts'
		);
		if( isset( $block_attributes['className'] ) ) {
			$class_names[] = $block_attributes['className'];
		}
		
		// $html .= '<pre>' . print_r( $block_attributes, true ) . '</pre>';
	
		$html .= '<div class="' . implode(' ', $class_names ) . '">';
		if( isset( $block_attributes['postType'] ) ) {
			if( function_exists( $block_attributes['callbackFunction'] ) ) {
					$args = array( 
						'post_type' => $block_attributes['postType'],
					);
					if( isset( $block_attributes['limit'] ) ) {
						$args['posts_per_page'] = $block_attributes['limit'];
					}
					// Check for URL defined taxonomy 
					if( isset( $_REQUEST['gb-taxonomy'] ) && isset( $_REQUEST['gb-term'] ) ) {
						$block_attributes['taxonomy'] = $_REQUEST['gb-taxonomy'];
						$block_attributes['termSlug'] = $_REQUEST['gb-term'];
					}

					if( isset( $block_attributes['taxonomy'] ) && $block_attributes['taxonomy'] != "All taxonomies" ) {
						$args['category_name'] = $block_attributes['taxonomy'];
					}
					if( !empty( $block_attributes['taxonomy'] ) && !empty( $block_attributes['termSlug'] ) ) {
						// Remove category if there is a term
						unset( $args['category_name'] );
						// Search by term
						$args['tax_query'] = array(
							array(
								'taxonomy' => $block_attributes['taxonomy'],
								'field'    => 'slug',
								'terms'    => $block_attributes['termSlug']
							),
						);
					}
					if( isset( $_REQUEST['gb-page'] ) ) {
						$args['paged'] = intval( $_REQUEST['gb-page'] );
					}

					$args = apply_filters( 'gb-posts-before-query', $args, $block_attributes );
					
					$posts_query = new WP_Query( $args );
					if ( $posts_query->have_posts() ) {
						if( !empty( $block_attributes['taxonomyFilterActive'] ) ) {
							// Filter query out to devs
							$filters = [];
							foreach( $block_attributes['taxonomyFilterActive'] as $term_slug ) {
								if( $term_slug['visible'] == true ) {
									$filter = '';
									$terms_args = apply_filters( 'gb-posts-before-filters-query', array( 'taxonomy' => $term_slug['value'] ) );
									$taxonomy = get_taxonomy( $term_slug['value'] );
									
									$terms = get_terms( $terms_args );
									if( $terms ) {
										$filter .= '<select class="terms-filter" data-taxonomy="' . $term_slug['value'] . '">';
											$filter .= '<option value="" data-slug="*" class="current-filter">Show All ' . $taxonomy->label . '</option>';
											foreach( $terms as $term ) {
												$filter .= '<option value="' . $term->slug . '">' . $term->name . '</option>';
											}
										$filter .= '</select>';
										$filters[] = $filter;
									}
								}
							}

							if( !empty( $filters ) ) {
								$html .= '<div class="filters-wrapper">';
									foreach( $filters as $filter ) {
										$html .= '<div clas="filters-filter">';
											$html .= apply_filters( 'gb-blocks-posts-filters-wrapper', $filter );
										$html .= '</div>';
									}
								$html .= '</div>';
							}
						}
						
						if( $posts_query->have_posts() ) {
							$html .= '<ul class="posts-list posts-found-' . $posts_query->found_posts . '">';
								while ( $posts_query->have_posts() ) {
									$posts_query->the_post();
	
									// Categories for filtering
									$categories = [];
									if( $terms = get_the_terms( get_the_ID(), 'category' ) ) {
										foreach( $terms as $term ) {
											$categories[] = 'category-' . $term->slug;
										}
									}
	
									$html .= '<li class="gb-post-list-item gb-post-id-' . get_the_ID() . '" ';
										$html .= ( !empty( $categories ) ) ? 'data-categories="' . implode( " ", $categories ) . '" ' : '';
									$html .= '>';
										$html .= call_user_func( $block_attributes['callbackFunction'] );
									$html .= '</li>';
								}
							$html .= '</ul>';

							if( isset( $block_attributes['paginate'] ) && $block_attributes['paginate'] ) {
								if( $posts_query->max_num_pages > 1 ) {
									$total_pages = $posts_query->max_num_pages;
									$current = ( $posts_query->query_vars['paged'] == 0 ) ? 1 : $posts_query->query_vars['paged'];

									$html .= '<ul class="gb-post-pagination" >';
										$html .= '<li class="prev">';
											$html .= ( $current == 1 ) ? '<span>Previous</span>' : '<a href="?gb-page=' . ( $current - 1) . '">Previous</a>';
										$html .= '</li>';
										$html .= '<li class="next">';
											$html .= ( $current == $total_pages ) ? '<span>Next</span>' : '<a href="?gb-page=' . ( $current + 1) . '">Next</a>';
										$html .= '</li>';
									$html .= '</ul>';
									
								}
							}
						}
					} 
					wp_reset_postdata();
				}
				else {
					$html .= '<p>Callback function either not set or doesn\'t exist</p>';
				}
			}
			else {
				$html .= '<p>No post type set</p>';
			}
			// $html .= ___( $block_attributes, true );
		$html .= '</div>';

		$html = apply_filters( 'gb-before-render', $html );

		return $html;		
	}

	function gb_blocks_posts_enqueue_if_present() {
		if( has_block( 'gb/block-posts' ) ) {
			wp_enqueue_script( 'gb_block_posts', GB_BLOCK__PLUGIN_URL . 'src/posts/_posts-frontend.js', array(), '1.0.0' );
		}
	}

	add_action( 'enqueue_block_assets', 'gb_blocks_posts_enqueue_if_present' );