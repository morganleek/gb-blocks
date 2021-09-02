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
			// 'render_callback' => 'gb_blocks_map_render_callback',
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
				),
				'title' => array(
					'type' => 'string',
					'default' => ''
				),
				'mediaUrl' => array(
					'type' => 'string',
					'default' => ''
				),
				'iconWidth' => array(
					'type' => 'string',
					'default' => ''
				),
				'iconHeight' => array(
					'type' => 'string',
					'default' => ''
				)
			)
		) );
	}

	add_action( 'init', 'gb_blocks_map_init', 55 );

	// function gb_blocks_map_render_callback( $block_attributes, $content ) {
	// 	$html = '';
		
	// 	$html .= '<div class="wp-block wp-block-gb-map">';
	// 		if( $block_attributes['key'] !== 'Key' &&
	// 				isset( $block_attributes['zoom'] ) &&
	// 				isset( $block_attributes['lat'] ) &&
	// 				isset( $block_attributes['lng'] ) 
	// 		) {
				
	// 			$media_url = isset( $block_attributes['mediaUrl'] ) ? ' data-media-url="' . $block_attributes['mediaUrl'] . '"' : '';
	// 			$icon_width = isset( $block_attributes['iconWidth'] ) ? ' data-icon-width="' . $block_attributes['iconWidth'] . '"' : '';
	// 			$icon_height = isset( $block_attributes['iconHeight'] ) ? ' data-icon-height="' . $block_attributes['iconHeight'] . '"' : '';
	// 			$html .= '<pre>' . print_r( $block_attributes, true ) . '</pre>';
	// 			$html .= '<div id="map"
	// 				data-key="' . $block_attributes['key'] . '"
	// 				data-lat="' . $block_attributes['lat'] . '"
	// 				data-lng="' . $block_attributes['lng'] . '"
	// 				data-zoom="' . $block_attributes['zoom'] . '"
	// 				data-title="' . $block_attributes['title'] . '"
	// 				' . $media_url . '
	// 				' . $icon_width . '
	// 				' . $icon_height . '
	// 				></div>';
	// 		}
	// 		else {
	// 			$html .= '<p>Please enter all required parameters</p>';
	// 		}
	// 	$html .= '</div>';

	// 	return $html;		
	// }

	function gb_blocks_map_enqueue_if_present() {
		if( has_block( 'gb/block-map' ) ) {
			wp_enqueue_script( 'gb_block_map', GB_BLOCK__PLUGIN_URL . 'src/map/_maps-frontend.js', array(), '1.0.4' );
		}
	}

	add_action( 'enqueue_block_assets', 'gb_blocks_map_enqueue_if_present' );