<?php
/**
 * Athen Marine theme functions.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'ATHEN_MARINE_VERSION', '1.1.5' );

/**
 * Theme setup.
 */
function athen_marine_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
	add_theme_support( 'automatic-feed-links' );
}
add_action( 'after_setup_theme', 'athen_marine_setup' );

/**
 * Enqueue styles and scripts.
 */
function athen_marine_scripts() {
	wp_enqueue_style(
		'athen-marine-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'athen-marine-style',
		get_stylesheet_uri(),
		array( 'athen-marine-fonts' ),
		ATHEN_MARINE_VERSION
	);

	$main_deps = array();

	if ( is_page_template( 'page-delivery.php' ) ) {
		wp_enqueue_style(
			'leaflet',
			'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
			array(),
			'1.9.4'
		);
		wp_enqueue_script(
			'leaflet',
			'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
			array(),
			'1.9.4',
			true
		);
		$main_deps = array( 'leaflet' );
	}

	wp_enqueue_script(
		'athen-marine-main',
		get_template_directory_uri() . '/js/main.js',
		$main_deps,
		ATHEN_MARINE_VERSION,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'athen_marine_scripts' );

/**
 * Maintenance mode.
 *
 * Toggle with: wp option update am_maintenance_mode 1   (on)
 *              wp option update am_maintenance_mode 0   (off)
 * Logged-in admins (manage_options) still see the real site so work can
 * continue while the public sees the maintenance page. Returns 503 (not
 * 200) so search engines treat this as temporary, not a real page.
 */
function athen_marine_maintenance_mode() {
	if ( ! get_option( 'am_maintenance_mode' ) ) {
		return;
	}
	if ( current_user_can( 'manage_options' ) ) {
		return;
	}
	status_header( 503 );
	header( 'Retry-After: 3600' );
	include get_template_directory() . '/maintenance.php';
	exit;
}
add_action( 'template_redirect', 'athen_marine_maintenance_mode' );
