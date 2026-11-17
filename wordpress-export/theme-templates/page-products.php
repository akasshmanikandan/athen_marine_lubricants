<?php /* Template Name: Products */ ?>
<?php
/**
 * Products page template for Athen Marine.
 */

get_header();
?>

<main id="main-content">


	<!-- ============================= PRODUCTS HERO ============================= -->
	<section class="am-prod-hero">
		<div class="am-prod-hero__photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/svc-hero-ecr.jpg" alt="<?php esc_attr_e( 'Ship engine control room with technical monitoring panels', 'athen-marine' ); ?>" class="am-img-cover am-prod-hero__photo-img"></div>
		<div class="am-prod-hero__accent-line"></div>
		<span class="am-prod-hero__watermark">02</span>

		<div class="am-prod-hero__content">
			<span class="am-prod-hero__label am-about-section-label--lg"><?php esc_html_e( 'Our Products', 'athen-marine' ); ?></span>
			<h1 class="am-prod-hero__title"><?php esc_html_e( 'Engineered for Performance', 'athen-marine' ); ?><br><?php esc_html_e( 'Trusted at Sea', 'athen-marine' ); ?></h1>
			<p class="am-prod-hero__tagline"><?php esc_html_e( 'Intellectual Engineering. Delivering Trust.', 'athen-marine' ); ?></p>
			<p class="am-prod-hero__subtitle"><?php esc_html_e( 'A comprehensive portfolio of OEM-approved marine lubrication solutions designed to protect critical equipment, optimize performance, and support reliable vessel operations across every voyage.', 'athen-marine' ); ?></p>
		</div>
	</section>

	<?php $am_current = ''; include get_template_directory() . '/parts/products-links.php'; ?>

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
