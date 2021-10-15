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
		
		$posts = '';
		if( isset( $block_attributes['postType'] ) ) {
			if( function_exists( $block_attributes['callbackFunction'] ) ) {
				$args = array( 
					'post_type' => $block_attributes['postType'],
				);
				if( isset( $block_attributes['limit'] ) ) {
					$args['posts_per_page'] = $block_attributes['limit'];
				}

				if( isset( $block_attributes['taxonomy'] ) && $block_attributes['taxonomy'] != "All taxonomies" ) {
					$args['category_name'] = $block_attributes['taxonomy'];
				}
				$args['tax_query'] = array();
				if( !empty( $block_attributes['taxonomy'] ) && !empty( $block_attributes['termSlug'] ) ) {
					// Remove category if there is a term
					unset( $args['category_name'] );
					// Search by term
					array_push( $args['tax_query'], array(
							'taxonomy' => $block_attributes['taxonomy'],
							'field'    => 'slug',
							'terms'    => $block_attributes['termSlug']
						)
					);
				}
				// Check for URL defined taxonomy 
				if( isset( $_REQUEST['gb-taxonomy'] ) && isset( $_REQUEST['gb-term'] ) ) {
					// $block_attributes['taxonomy'] = $_REQUEST['gb-taxonomy'];
					// $block_attributes['termSlug'] = $_REQUEST['gb-term'];
					array_push( $args['tax_query'], array(
							'taxonomy' => $_REQUEST['gb-taxonomy'],
							'field'    => 'slug',
							'terms'    => $_REQUEST['gb-term']
						)
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
							if( !( $term_slug['visible'] === false || $term_slug['visible'] === 'false' ) ) {
								$filter = '';
								$terms_args = apply_filters( 'gb-posts-before-filters-query', array( 'taxonomy' => $term_slug['value'] ) );
								$taxonomy = get_taxonomy( $term_slug['value'] );
								
								$terms = get_terms( $terms_args );
								if( $terms ) {
									$filter .= '<select class="terms-filter" data-taxonomy="' . $term_slug['value'] . '">';
										$filter .= '<option value="" data-slug="*" class="current-filter">Show All ' . $taxonomy->label . '</option>';
										foreach( $terms as $term ) {
											$selected = ( ( $term_slug['value'] == $_REQUEST['gb-taxonomy'] ) &&  ( $_REQUEST['gb-term'] == $term->slug ) ) ? 'selected' : '';
											$filter .= '<option value="' . $term->slug . '" ' . $selected . '>' . $term->name . '</option>';
										}
									$filter .= '</select>';
									$filters[] = $filter;
								}
							}
						}
						
						if( !empty( $filters ) ) {
							$posts .= '<div class="filters-wrapper">';
								foreach( $filters as $filter ) {
									$posts .= '<div class="filters-filter">';
										$posts .= apply_filters( 'gb_blocks_posts_filters_wrapper', $filter );
									$posts .= '</div>';
								}
							$posts .= '</div>';
						}
					}
					
					
					$posts .= '<ul class="posts-list posts-found-' . $posts_query->found_posts . '">';
						while ( $posts_query->have_posts() ) {
							$posts_query->the_post();

							// Categories for filtering
							$categories = [];
							if( $terms = get_the_terms( get_the_ID(), 'category' ) ) {
								foreach( $terms as $term ) {
									$categories[] = 'category-' . $term->slug;
								}
							}

							$posts .= '<li class="gb-post-list-item gb-post-id-' . get_the_ID() . '" ';
								$posts .= ( !empty( $categories ) ) ? 'data-categories="' . implode( " ", $categories ) . '" ' : '';
							$posts .= '>';
								$posts .= call_user_func( $block_attributes['callbackFunction'] );
							$posts .= '</li>';
						}
					$posts .= '</ul>';

					if( isset( $block_attributes['paginate'] ) && $block_attributes['paginate'] ) {
						if( $posts_query->max_num_pages > 1 ) {
							$total_pages = $posts_query->max_num_pages;
							$current = ( $posts_query->query_vars['paged'] == 0 ) ? 1 : $posts_query->query_vars['paged'];

							$posts .= '<ul class="gb-post-pagination" >';
								$posts .= '<li class="prev">';
									$posts .= ( $current == 1 ) ? '<span>Previous</span>' : '<a href="?gb-page=' . ( $current - 1) . '">Previous</a>';
								$posts .= '</li>';
								$posts .= '<li class="next">';
									$posts .= ( $current == $total_pages ) ? '<span>Next</span>' : '<a href="?gb-page=' . ( $current + 1) . '">Next</a>';
								$posts .= '</li>';
							$posts .= '</ul>';
							
						}
					}
					
				} 
				else {
					$posts .= apply_filters( 'gb_posts_message_no_posts_found', '<p>No posts found</p>' );
					$class_names[] = 'no-posts-found';
				}
				wp_reset_postdata();
			}
			else {
				$posts .= apply_filters( 'gb_posts_message_no_callback_function', '<p>Callback function either not set or doesn\'t exist</p>' );
				$class_names[] = 'no-callback-found';
			}
		}
		else {
			$posts .= apply_filters( 'gb_posts_message_no_post_type_set', '<p>No post type set</p>' );
			$class_names[] = 'no-post-type-set';
		}
	
		$html .= '<div class="' . implode(' ', $class_names ) . '">';
			$html .= $posts;
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