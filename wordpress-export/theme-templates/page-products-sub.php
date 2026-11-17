<?php /* Template Name: Products Sub-page */ ?>
<?php
/**
 * One product grade per page (Main Grades, Secondary Grades, Synthetics, Greases, EAL).
 */
get_header();

$am_slug  = basename( rtrim( parse_url( $_SERVER['REQUEST_URI'], PHP_URL_PATH ), '/' ) );
$am_pages = array(
	'main-grades'      => 'Main Grades',
	'secondary-grades' => 'Secondary Grades',
	'synthetics'       => 'Synthetics',
	'greases'          => 'Greases',
	'eal'              => 'EAL',
);
if ( ! isset( $am_pages[ $am_slug ] ) ) { $am_slug = 'main-grades'; }
$am_current = $am_slug;
?>

<main id="main-content" class="am-sub-page">

	<section class="am-sub-hero">
		<nav class="am-sub-hero__crumbs" aria-label="Breadcrumb"><a href="/products/"><?php esc_html_e( 'Products', 'athen-marine' ); ?></a><span>/</span><span><?php echo esc_html( $am_pages[ $am_slug ] ); ?></span></nav>
		<h1 class="am-sub-hero__title"><?php echo esc_html( $am_pages[ $am_slug ] ); ?></h1>
		<p class="am-sub-hero__sub"><?php esc_html_e( 'OEM-approved marine lubrication solutions. Intellectual Engineering. Delivering Trust.', 'athen-marine' ); ?></p>
	</section>

	<?php include get_template_directory() . '/parts/products-' . $am_slug . '.php'; ?>

	<?php include get_template_directory() . '/parts/products-links.php'; ?>

	<!-- ============================= CTA ============================= -->
	<section class="am-prod-cta">
		<h2 class="am-prod-cta__title"><?php esc_html_e( 'Speak to Our Product Specialists', 'athen-marine' ); ?></h2>
		<p class="am-prod-cta__sub"><?php esc_html_e( 'Tell us your vessel type, engine specification and operating route — we\'ll recommend the right grade.', 'athen-marine' ); ?></p>
		<div class="am-prod-cta__actions">
			<a href="/contact/" class="am-prod-cta__btn am-prod-cta__btn--outline"><?php esc_html_e( 'Contact Our Experts', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
