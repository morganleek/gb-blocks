<?php
/**
 * Plugin Name: Good Bones Blocks
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: Extra blocks
 * Author: Morgan Leek
 * Author URI: https://morganleek.me/
 * Version: 1.0.17
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package GB
 */

	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	// Plugin Data
	require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
	$plugin_data = get_plugin_data( __FILE__ );
	
	// Paths
	define( 'GB_BLOCK__PLUGIN_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
	define( 'GB_BLOCK__PLUGIN_URL', plugin_dir_url( __FILE__ ) );
	define( 'GB_BLOCK__VERSION', $plugin_data['Version'] );

	// Init
	require_once GB_BLOCK__PLUGIN_DIR . 'src/init.php';

	// Blocks
	require_once GB_BLOCK__PLUGIN_DIR . 'src/menu/menu.php';
	require_once GB_BLOCK__PLUGIN_DIR . 'src/map/map.php';
	require_once GB_BLOCK__PLUGIN_DIR . 'src/posts/posts.php';
	require_once GB_BLOCK__PLUGIN_DIR . 'src/terms/terms.php';

	// require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
