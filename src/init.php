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

		// register_block_type( 'gb/block-gb-menu', array(
		// 	'style'         => 'gb-blocks-style-css',
		// 	'editor_script' => 'gb-blocks-block-js',
		// 	'editor_style'  => 'gb-blocks-block-editor-css',
		// 	'render_callback' => 'gb_blocks_menu_render_callback',
		// 	'api_version' => 2
		// ) );


		register_block_type( 'gb/block-gb-menu', array(
			'api_version' => 2,
			'editor_script' => 'gb-blocks-block-js',
			'render_callback' => 'gutenberg_examples_dynamic_render_callback'
		) );
	}

	// Hook: Block assets
	add_action( 'init', 'gb_blocks_block_assets' );

	// Dynamic menu render
	// function gb_blocks_menu_render_callback( $block_attributes, $content ) {
	// 	return '<div class="gb-menus-wrapper"><pre>' . print_r( $block_attributes, true ) . '</pre></div>';
	// }

	function gutenberg_examples_dynamic_render_callback( $block_attributes, $content ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => 1,
        'post_status' => 'publish',
    ) );
    if ( count( $recent_posts ) === 0 ) {
        return 'No posts';
    }
    $post = $recent_posts[ 0 ];
    $post_id = $post['ID'];
    return sprintf(
        '<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
        esc_url( get_permalink( $post_id ) ),
        esc_html( get_the_title( $post_id ) )
    );
	}