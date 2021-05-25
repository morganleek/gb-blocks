<?php

	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}


	function gb_blocks_block_assets() { 
		
		wp_register_style(
			'gb-blocks-style-css', GB_BLOCK__PLUGIN_URL . 'dist/blocks.style.build.css', is_admin() ? array( 'wp-editor' ) : null, null 
		);

		wp_register_script( 'gb-blocks-block-js', GB_BLOCK__PLUGIN_URL . '/dist/blocks.build.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), null, true );
		wp_register_style( 'gb-blocks-block-editor-css', GB_BLOCK__PLUGIN_URL . 'dist/blocks.editor.build.css', array( 'wp-edit-blocks' ), null );

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
	}

	// Hook: Block assets
	add_action( 'init', 'gb_blocks_block_assets', 50 );