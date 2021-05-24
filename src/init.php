<?php

	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	function gb_blocks_block_assets() { 
		
		wp_register_style(
			'gb-blocks-style-css', plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), is_admin() ? array( 'wp-editor' ) : null, null 
		);

		wp_register_script( 'gb-blocks-block-js', plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), null, true );
		wp_register_style( 'gb-blocks-block-editor-css', plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), array( 'wp-edit-blocks' ), null );

		// Menus for scripts
		$keyValueMenus = [];
		foreach( get_registered_nav_menus() as $key => $value ) {
			$keyValueMenus[] = array( 'value' => $key, 'label' => $value );
		}

		// 
		wp_localize_script( 'gb-blocks-block-js', 'gbGlobal', 
			[
				'pluginDirPath' => plugin_dir_path( __DIR__ ),
				'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
				'siteMenus' => $keyValueMenus
			]
		);

		register_block_type( 'gb/block-gb-menu', array(
			'api_version' => 2,
			'style'         => 'gb-blocks-style-css',
			'editor_script' => 'gb-blocks-block-js',
			'editor_style'  => 'gb-blocks-block-editor-css',
			'render_callback' => 'gb_blocks_menu_render_callback',
			'attributes' => array(
				'menu' => array(
					'type' => 'string',
					'default' => ''
				),
				'className' => array(
					'type' => 'string',
					'default' => ''
				)
			)
		) );
	}

	// Hook: Block assets
	add_action( 'init', 'gb_blocks_block_assets' );

	// Dynamic menu render
	function gb_blocks_menu_render_callback( $block_attributes, $content ) {
		$html = '';

		if( isset( $block_attributes['menu'] ) && !empty( $block_attributes['menu'] ) ) {
			// Render menu
			$html .= '<nav class="wp-block wp-block-gb-menu">';
				$html .= gb_blocks_menu_nav( array ( 
					'theme_location' => $block_attributes['menu'],
					'echo' => false
				) );
			$html .= '<nav class="wp-block-gb-menu">';
		}
		
		return $html;
		// return '<pre>Hello World</pre>';
	}

	// Render menu with args
	function gb_blocks_menu_nav( $args = array() ) {
    $defaults = array(
      'theme_location'  => 'header-menu',
      'menu'            => '',
      'container'       => false,
      'container_class' => 'menu-container',
      'container_id'    => '',
      'menu_class'      => 'menu',
      'menu_id'         => '',
      'echo'            => true,
      'fallback_cb'     => 'wp_page_menu',
      'before'          => '',
      'after'           => '',
      'link_before'     => '',
      'link_after'      => '<span class="mobile-only expander"></span>',
      'items_wrap'      => '<ul>%3$s</ul>',
      'depth'           => 2,
      'walker'          => ''
    );

    // merge args
    $_args = wp_parse_args($args, $defaults);

    // generate menu
    if( $_args['echo'] === false ) {
      return wp_nav_menu( $_args );
    }
    wp_nav_menu( $_args );
  }