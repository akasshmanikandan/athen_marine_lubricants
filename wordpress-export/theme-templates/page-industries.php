<?php /* Template Name: Industries */ ?>
<?php
/**
 * Industries / Vessels We Support page template for Athen Marine.
 */

get_header();
?>

<main id="main-content">

	<!-- ============================= INDUSTRIES HERO ============================= -->
	<section class="am-svc-hero">
		<div class="am-svc-hero__accent-line"></div>
		<span class="am-svc-hero__watermark">07</span>

		<div class="am-svc-hero__content">
			<span class="am-svc-hero__label"><?php esc_html_e( 'Who We Serve', 'athen-marine' ); ?></span>
			<h1 class="am-svc-hero__title"><?php esc_html_e( 'Industries & Vessels We Support', 'athen-marine' ); ?></h1>
			<p class="am-svc-hero__subtitle"><?php esc_html_e( "Athen Marine's products and technical capabilities support a broad range of maritime applications.", 'athen-marine' ); ?></p>
		</div>
	</section>

	<!-- ============================= INDUSTRIES GRID ============================= -->
	<section class="am-about-values">
		<span class="am-about-values__label"><?php esc_html_e( 'Vessels We Support', 'athen-marine' ); ?></span>
		<h2 class="am-about-values__title"><?php esc_html_e( 'Built for Every Kind of Operation', 'athen-marine' ); ?></h2>

		<div class="am-about-values__grid">
			<div class="am-about-value-card">
				<h3 class="am-about-value-card__title"><?php esc_html_e( 'Commercial Shipping', 'athen-marine' ); ?></h3>
				<p class="am-about-value-card__desc"><?php esc_html_e( 'Reliable lubrication solutions for commercial vessel operations.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-about-value-card">
				<h3 class="am-about-value-card__title"><?php esc_html_e( 'Tankers', 'athen-marine' ); ?></h3>
				<p class="am-about-value-card__desc"><?php esc_html_e( 'Lubrication support for demanding tanker operations.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-about-value-card">
				<h3 class="am-about-value-card__title"><?php esc_html_e( 'Bulk Carriers', 'athen-marine' ); ?></h3>
				<p class="am-about-value-card__desc"><?php esc_html_e( 'Solutions supporting the operational requirements of bulk carrier fleets.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-about-value-card">
				<h3 class="am-about-value-card__title"><?php esc_html_e( 'Container Vessels', 'athen-marine' ); ?></h3>
				<p class="am-about-value-card__desc"><?php esc_html_e( 'Marine lubrication solutions designed around container shipping requirements.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-about-value-card">
				<h3 class="am-about-value-card__title"><?php esc_html_e( 'Offshore Support Vessels', 'athen-marine' ); ?></h3>
				<p class="am-about-value-card__desc"><?php esc_html_e( 'Reliable lubrication and technical support for offshore marine operations.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-about-value-card">
				<h3 class="am-about-value-card__title"><?php esc_html_e( 'Marine Service Operators', 'athen-marine' ); ?></h3>
				<p class="am-about-value-card__desc"><?php esc_html_e( 'Flexible supply and technical support for marine service providers.', 'athen-marine' ); ?></p>
			</div>
		</div>
	</section>

	<!-- ============================= CTA ============================= -->
	<section class="am-cta">
		<h2 class="am-cta__title"><?php esc_html_e( 'Discuss Your Requirements', 'athen-marine' ); ?></h2>
		<p class="am-cta__sub"><?php esc_html_e( 'Tell us about your fleet and operating conditions — we\'ll recommend the right lubrication solution.', 'athen-marine' ); ?></p>
		<div class="am-cta__actions">
			<a href="/#quote" class="am-btn am-btn--offwhite" style="background:var(--offwhite);color:var(--pine);"><?php esc_html_e( 'Request a Quote', 'athen-marine' ); ?></a>
			<a href="/contact/" class="am-btn am-btn--ghost"><?php esc_html_e( 'Contact Our Experts', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
