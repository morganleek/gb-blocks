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
				'taxonomy' => array(
					'type' => 'string'
				),
				'taxonomyFilter' => array(
					'type' => 'string'
				),
				'taxonomiesAvailable' => array(
					'type' => 'array'
				),
				'termSlug' => array(
					'type' => 'string'
				),
				'callbackFunction' => array(
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

		$html .= '<div class="wp-block wp-block-gb-block-posts">';
		if( isset( $block_attributes['postType'] ) ) {
			if( function_exists( $block_attributes['callbackFunction'] ) ) {
					$args = array( 
						'post_type' => $block_attributes['postType'],
					);
					if( isset( $block_attributes['limit'] ) ) {
						$args['posts_per_page'] = $block_attributes['limit'];
					}
					if( isset( $block_attributes['taxonomy'] ) ) {
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

					$args = apply_filters( 'gb-posts-before-query', $args, $block_attributes );
					
					$posts_query = new WP_Query( $args );
					if ( $posts_query->have_posts() ) {
						if( !empty( $block_attributes['taxonomyFilter'] ) ) {
							$terms_args = apply_filters( 'gb-posts-before-filters-query', array( 'taxonomy' => $block_attributes['taxonomyFilter'] ) );
							
							$terms = get_terms( $terms_args );
							if( $terms ) {
								$html .= '<ul class="terms-filter">';
									$html .= '<li data-slug="*" class="current-filter"><a href="#">Show All</a></li>';
									foreach( $terms as $term ) {
										$html .= '<li data-slug="' . $term->slug . '">';
											$html .= '<a href="#">' . $term->name . '</a>';
										$html .= '</li>';
									}
								$html .= '</ul>';
							}
						}

						$html .= '<ul>';
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