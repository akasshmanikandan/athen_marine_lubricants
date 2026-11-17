<?php /* Template Name: Services */ ?>
<?php
/**
 * Services page template for Athen Marine.
 */

get_header();
?>

<main id="main-content">

	<!-- ============================= SERVICES HERO ============================= -->
	<section class="am-svc-hero">
		<div class="am-svc-hero__photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/svc-hero-oil-lab.jpg" alt="<?php esc_attr_e( 'Oil sample testing in a lab overlooking a container port', 'athen-marine' ); ?>" class="am-img-cover am-svc-hero__photo-img"></div>
		<div class="am-svc-hero__accent-line"></div>
		<span class="am-svc-hero__watermark">03</span>
		<span class="am-svc-hero__diamond am-svc-hero__diamond--1">&#9670;</span>
		<span class="am-svc-hero__diamond am-svc-hero__diamond--2">&#9670;</span>
		<span class="am-svc-hero__diamond am-svc-hero__diamond--3">&#9670;</span>

		<div class="am-svc-hero__content">
			<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo-assure.png" alt="<?php esc_attr_e( 'Athen Assure', 'athen-marine' ); ?>" class="am-svc-hero__logo">
			<h1 class="am-svc-hero__title"><?php esc_html_e( 'Assurance at Every Voyage', 'athen-marine' ); ?><br><?php esc_html_e( 'A Commitment Beyond Supply', 'athen-marine' ); ?></h1>
			<p class="am-svc-hero__tagline"><?php esc_html_e( 'Intellectual Engineering. Delivering Trust.', 'athen-marine' ); ?></p>
			<p class="am-svc-hero__subtitle"><?php esc_html_e( 'Athen Assure represents our commitment beyond the product and delivery. Combining technical expertise, condition-based guidance, and responsive support, we help customers make informed lubrication decisions, optimize equipment performance, and navigate every voyage with confidence.', 'athen-marine' ); ?></p>
		</div>
	</section>

	<!-- ============================= WHAT WE OFFER STRIP ============================= -->
	<section class="am-svc-strip">
		<span class="am-svc-strip__label"><?php esc_html_e( 'What We Offer:', 'athen-marine' ); ?></span>
		<div class="am-svc-strip__tags">
			<span class="am-svc-strip__tag"><?php esc_html_e( 'Lubricant Selection', 'athen-marine' ); ?></span>
			<span class="am-svc-strip__tag"><?php esc_html_e( 'OEM Guidance', 'athen-marine' ); ?></span>
			<span class="am-svc-strip__tag"><?php esc_html_e( 'Onboard Inspection', 'athen-marine' ); ?></span>
			<span class="am-svc-strip__tag"><?php esc_html_e( 'Equipment Evaluation', 'athen-marine' ); ?></span>
			<span class="am-svc-strip__tag"><?php esc_html_e( 'Equivalent Product Charts', 'athen-marine' ); ?></span>
			<span class="am-svc-strip__tag"><?php esc_html_e( 'Compatibility Assessment', 'athen-marine' ); ?></span>
			<span class="am-svc-strip__tag"><?php esc_html_e( 'Oil Health Analysis', 'athen-marine' ); ?></span>
			<span class="am-svc-strip__tag"><?php esc_html_e( 'Contamination Detection', 'athen-marine' ); ?></span>
		</div>
	</section>

	<!-- ============================= SERVICES GRID ============================= -->
	<section class="am-svc-grid-section">
		<span class="am-svc-grid-section__label am-about-section-label--lg"><?php esc_html_e( 'Our Services', 'athen-marine' ); ?></span>
		<h2 class="am-svc-grid-section__title"><?php esc_html_e( 'How We Help You', 'athen-marine' ); ?></h2>

		<div class="am-svc-cards">
			<?php $am_services = include get_template_directory() . '/parts/services-data.php'; foreach ( $am_services as $sv ) : ?>
			<div class="am-svc-card" id="<?php echo esc_attr( $sv['id'] ); ?>">
				<span class="am-svc-card__num"><?php echo esc_html( $sv['num'] ); ?></span>
				<div class="am-svc-card__icon"><?php echo $sv['icon']; ?></div>
				<h3 class="am-svc-card__title"><?php echo esc_html( $sv['title'] ); ?></h3>
				<p class="am-svc-card__desc"><?php echo esc_html( $sv['desc'] ); ?></p>
				<div class="am-svc-card__tags">
					<?php foreach ( $sv['tags'] as $tg ) : ?><span class="am-svc-card__tag"><?php echo esc_html( $tg ); ?></span><?php endforeach; ?>
				</div>
				<hr class="am-svc-card__divider">
				<div class="am-svc-card__links">
					<a href="/services/<?php echo esc_attr( $sv['slug'] ); ?>/" class="am-svc-card__link"><?php esc_html_e( 'Learn More →', 'athen-marine' ); ?></a>
					<a href="/contact/" class="am-svc-card__link"><?php esc_html_e( 'Enquire Now →', 'athen-marine' ); ?></a>
				</div>
			</div>
			<?php endforeach; ?>
		</div>
	</section>

	<?php include get_template_directory() . '/parts/services-process.php'; ?>

	<!-- ============================= CTA ============================= -->
	<section class="am-svc-cta">
		<h2 class="am-svc-cta__title"><?php esc_html_e( 'Request Technical Support', 'athen-marine' ); ?></h2>
		<p class="am-svc-cta__sub"><?php esc_html_e( 'Connect with our technical team for tailored lubrication solutions.', 'athen-marine' ); ?></p>
		<a href="/contact/" class="am-svc-cta__btn"><?php esc_html_e( 'Get In Touch', 'athen-marine' ); ?></a>
	</section>

</main>

<?php
get_footer();
