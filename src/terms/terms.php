<?php
	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	// Register
	function gb_blocks_terms_init() {
		register_block_type( 'gb/block-terms', array(
			'api_version' => 2,
			'style'         => 'gb-blocks-style-css',
			'editor_script' => 'gb-blocks-block-js',
			'editor_style'  => 'gb-blocks-block-editor-css',
			'render_callback' => 'gb_blocks_terms_render_callback',
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
				),
				'orderBy' => array(
					'type' => 'string'
				),
				'order' => array(
					'type' => 'string'
				),
				'hideEmpty' => array(
					'type' => 'boolean'
				),	
			)
		) );
	}

	add_action( 'init', 'gb_blocks_terms_init', 55 );

	function gb_blocks_terms_render_callback( $block_attributes, $content ) {
		
		$html = '';

		$block_attributes = apply_filters( 'gb_terms_before_attributes', $block_attributes );
		
		// return '<pre>' . print_r( $block_attributes, true ) . '</pre>';
		$class_names = array(
			'wp-block',
			'wp-block-gb-block-terms'
		);
		if( isset( $block_attributes['className'] ) ) {
			$class_names[] = $block_attributes['className'];
		}
		
		$terms = '';
		if( isset( $block_attributes['postType'] ) && isset( $block_attributes['taxonomy'] ) ) {
			if( function_exists( $block_attributes['callbackFunction'] ) ) {
				$term_query = array(
					'taxonomy' => $block_attributes['taxonomy'],
					'hide_empty' => isset( $block_attributes['hideEmpty'] ) ? $block_attributes['hideEmpty'] : true,
					'orderby' => isset( $block_attributes['orderBy'] ) ? $block_attributes['orderBy'] : 'name',
					'order' => isset( $block_attributes['order'] ) ? $block_attributes['order'] : 'ASC'
				);

				// Fetch term ID from slug
				if( isset( $block_attributes['termSlug'] ) ) {
					if( $term_parent = get_term_by( 'slug', $block_attributes['termSlug'], $block_attributes['taxonomy'] ) ) {
						$term_query['parent'] = $term_parent->term_id;
					}
				}
				
				$term_query = apply_filters( 'gb_terms_before_query', $term_query, $block_attributes );
				
				if( $terms_list = get_terms( $term_query ) ) {
					// $terms .= apply_filters( 'gb_terms_before_list', $term_query, $block_attributes );
					$terms .= '<ul class="terms-list terms-list-' . $block_attributes['taxonomy'] . ' terms-found-' . sizeof($terms_list) . '">';
						foreach ( $terms_list as $term ) {
							$terms .= '<li class="gb-term-list-item gb-term-id-' . $term->term_id . '">';
								// $terms .= '<p>' . $term->name . '</p>';
								$terms .= call_user_func( $block_attributes['callbackFunction'], $term );
							$terms .= '</li>';
						}
					$terms .= '</ul>';
					// $terms .= apply_filters( 'gb_terms_after_list', $term_query, $block_attributes );
				}
				else {
					$terms = "<p class='gb-terms-empty-result'>No terms found</p>";
				}
			}
			else {
				$terms .= apply_filters( 'gb_terms_message_no_callback_function', '<p>Callback function either not set or doesn\'t exist</p>' );
				$class_names[] = 'no-callback-found';
			}
		}
		else {
			$terms .= apply_filters( 'gb_terms_message_no_post_type_set', '<p>No post type or taxonomy set</p>' );
			$class_names[] = 'no-post-type-set';
		}
	
		$html .= '<div class="' . implode(' ', $class_names ) . '">';
			$html .= $terms;
		$html .= '</div>';

		return apply_filters( 'gb_before_terms_render', $html );
	}

	// function gb_blocks_terms_enqueue_if_present() {
	// 	if( has_block( 'gb/block-terms' ) ) {
	// 		wp_enqueue_script( 'gb_block_terms', GB_BLOCK__PLUGIN_URL . 'src/terms/_terms-frontend.js', array(), '1.0.0' );
	// 	}
	// }

	// add_action( 'enqueue_block_assets', 'gb_blocks_terms_enqueue_if_present' );