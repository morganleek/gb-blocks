<?php

	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	// Register
	function gb_blocks_map_init() {
		register_block_type( 'gb/block-map', array(
			'api_version' => 2,
			'style'         => 'gb-blocks-style-css',
			'editor_script' => 'gb-blocks-block-js',
			'editor_style'  => 'gb-blocks-block-editor-css',
			'render_callback' => 'gb_blocks_map_render_callback',
			'attributes' => array(
				'key' => array(
					'type' => 'string',
					'default' => ''
				),
				'zoom' => array(
					'type' => 'string',
					'default' => '12'
				),
				'lat' => array(
					'type' => 'string',
					'default' => '', 
				),
				'lng' => array(
					'type' => 'string',
					'default' => ''
				)
			)
		) );
	}

	add_action( 'init', 'gb_blocks_map_init', 55 );

	function gb_blocks_map_render_callback( $block_attributes, $content ) {
		$html = '';

		$html .= '<div class="wp-block wp-block-gb-map">';
			$html .= '<div id="map"></div>';
			$html .= '<pre>Add code to load map if attrs are present</pre>';
		$html .= '</div>';

		return $html;		
	}