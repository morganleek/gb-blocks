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
				'postType' => array(
					'type' => 'string'
				),
				'limit' => array(
					'type' => 'string'
				),
				'taxonomy' => array(
					'type' => 'string'
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

		// $html .= '<pre>' . print_r( $block_attributes,  true ) . '</pre>';
		$html .= '<div class="wp-block wp-block-gb-block-posts">';
			if( isset( $block_attributes['postType'] ) ) {
				if( function_exists( $block_attributes['callbackFunction'] ) ) {
					
					$args = array( 
						'post_type' => $block_attributes['postType']
					);
					if( isset( $block_attributes['limit'] ) ) {
						$args['posts_per_page'] = $block_attributes['limit'];
					}
					if( isset( $block_attributes['taxonomy'] ) ) {
						$args['category_name'] = $block_attributes['taxonomy'];
					}
					if( isset( $block_attributes['taxonomy'] ) && isset( $block_attributes['termSlug'] ) ) {
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

					$posts_query = new WP_Query( $args );
					if ( $posts_query->have_posts() ) {
						$html .= '<ul>';
							while ( $posts_query->have_posts() ) {
								$posts_query->the_post();
								$html .= '<li>';
									$html .= call_user_func( $block_attributes['callbackFunction'] );
								$html .= '</li>';
							}
						$html .= '</ul>';
					} 
					wp_reset_postdata();
				}
				else {
					$html .= '<p>No post type set</p>';
				}
			}
			else {
				$html .= '<p>Callback function either not set or doesn\'t exist</p>';
			}
			// $html .= ___( $block_attributes, true );
		$html .= '</div>';

		return $html;		
	}