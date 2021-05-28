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
				),
				'title' => array(
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
			if( $block_attributes['key'] !== 'Key' &&
					isset( $block_attributes['zoom'] ) &&
					isset( $block_attributes['lat'] ) &&
					isset( $block_attributes['lng'] ) 
			) {
				
				// $id = get_the_ID();
				$html .= '<div id="map"></div>';

				$html .= '<script type="text/javascript">
					function initMap() {
						const center = {lat: ' . $block_attributes['lat'] . ', lng: ' . $block_attributes['lng'] . '};
						map = new google.maps.Map(document.getElementById(\'map\'), {
							center: center,
							zoom: ' . $block_attributes['zoom'] . '
						});

						new google.maps.Marker({
							position: center,
							map,
							label: "' . $block_attributes['title'] . '",
						});
					}
				</script>';
				$html .= '<script src="https://maps.googleapis.com/maps/api/js?key=' . $block_attributes['key'] . '&callback=initMap&libraries=&v=weekly" async ></script>';
				
			}
			else {
				$html .= '<p>Please enter all required parameters</p>';
			}
		$html .= '</div>';

		return $html;		
	}