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
				'post_type' => array(
					'type' => 'string',
					'default' => 'post'
				),
				'limit' => array(
					'type' => 'string',
					'default' => '10'
				),
				'taxonomy' => array(
					'type' => 'string', 
					'default' => 'category'
				),
				'term_slug' => array(
					'type' => 'string', 
					'default' => 'uncategorized'
				),
				'callback_function' => array(
					'type' => 'string',
					'default' => ''
				)
			)
		) );
	}

	add_action( 'init', 'gb_blocks_posts_init', 55 );

	function gb_blocks_posts_render_callback( $block_attributes, $content ) {
		$html = '';

		$html .= '<div class="wp-block wp-block-gb-block-posts">';
			if( isset( $block_attributes['post_type'] ) ) {

				if( function_exists( $block_attributes['callback_function'] ) ) {

					$args = array( 
						'post_type' => $block_attributes['post_type']
					);
					if( isset( $block_attributes['limit'] ) ) {
						$args['posts_per_page'] = $block_attributes['limit'];
					}
					if( isset( $block_attributes['taxonomy'] ) ) {
						$args['category_name'] = $block_attributes['taxonomy'];
					}
					if( isset( $block_attributes['taxonomy'] ) && isset( $block_attributes['term_slug'] ) ) {
						// Remove category if there is a term
						unset( $args['category_name'] );
						// Search by term
						$args['tax_query'] = array(
							array(
								'taxonomy' => $block_attributes['taxonomy'],
								'field'    => 'slug',
								'terms'    => $block_attributes['term_slug']
							),
						);
					}

					$posts_query = new WP_Query( $args );
					if ( $posts_query->have_posts() ) {
						$html .= '<ul>';
							while ( $posts_query->have_posts() ) {
								$posts_query->the_post();
								$html .= '<li>';
									$html .= call_user_func( $block_attributes['callback_function'] );
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