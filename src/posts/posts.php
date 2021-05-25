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
				)
			)
		) );
	}

	add_action( 'init', 'gb_blocks_posts_init', 55 );

	function gb_blocks_posts_render_callback( $block_attributes, $content ) {
		$html = '';

		$html .= '<div class="wp-block wp-block-gb-posts">';
			$html .= '<p>Hello posts</p>';
		$html .= '</div>';

		return $html;		
	}