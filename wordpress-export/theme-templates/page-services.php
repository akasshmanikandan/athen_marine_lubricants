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
			<div class="am-svc-card" id="consultation">
				<span class="am-svc-card__num">01</span>
				<div class="am-svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
				<h3 class="am-svc-card__title"><?php esc_html_e( 'Technical Consultation & Advisory', 'athen-marine' ); ?></h3>
				<p class="am-svc-card__desc"><?php esc_html_e( 'Expert guidance to help customers identify the right marine lubrication solution for their operational requirements.', 'athen-marine' ); ?></p>
				<div class="am-svc-card__tags">
					<span class="am-svc-card__tag"><?php esc_html_e( 'Lubricant Selection', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Technical Recommendations', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Performance Optimization', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'OEM Guidance', 'athen-marine' ); ?></span>
				</div>
				<hr class="am-svc-card__divider">
				<a href="/contact/" class="am-svc-card__link"><?php esc_html_e( 'Enquire Now →', 'athen-marine' ); ?></a>
			</div>

			<div class="am-svc-card" id="oil-analysis">
				<span class="am-svc-card__num">02</span>
				<div class="am-svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6L4.5 17a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L15 8V2"/><path d="M9 2h6"/><path d="M7.5 14h9"/></svg></div>
				<h3 class="am-svc-card__title"><?php esc_html_e( 'Lube Oil Analysis & Condition Monitoring', 'athen-marine' ); ?></h3>
				<p class="am-svc-card__desc"><?php esc_html_e( 'Laboratory-backed analysis designed to evaluate lubricant condition and flag potential issues before they affect equipment performance.', 'athen-marine' ); ?></p>
				<div class="am-svc-card__tags">
					<span class="am-svc-card__tag"><?php esc_html_e( 'Oil Health Analysis', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Contamination Detection', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Performance Evaluation', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Preventive Maintenance Support', 'athen-marine' ); ?></span>
				</div>
				<hr class="am-svc-card__divider">
				<a href="/contact/" class="am-svc-card__link"><?php esc_html_e( 'Enquire Now →', 'athen-marine' ); ?></a>
			</div>

			<div class="am-svc-card" id="compatibility">
				<span class="am-svc-card__num">03</span>
				<div class="am-svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="6.5"/><circle cx="15" cy="12" r="6.5"/></svg></div>
				<h3 class="am-svc-card__title"><?php esc_html_e( 'Lube Oil Compatibility & Equivalent Solutions', 'athen-marine' ); ?></h3>
				<p class="am-svc-card__desc"><?php esc_html_e( 'Compatibility assessments and equivalent lubricant recommendations to help customers identify suitable alternatives without compromising engine warranty or performance.', 'athen-marine' ); ?></p>
				<div class="am-svc-card__tags">
					<span class="am-svc-card__tag"><?php esc_html_e( 'Equivalent Product Charts', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Compatibility Assessment', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'OEM Compliance', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Product Recommendations', 'athen-marine' ); ?></span>
				</div>
				<hr class="am-svc-card__divider">
				<a href="/contact/" class="am-svc-card__link"><?php esc_html_e( 'Enquire Now →', 'athen-marine' ); ?></a>
			</div>

			<div class="am-svc-card" id="inspections">
				<span class="am-svc-card__num">04</span>
				<div class="am-svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v13"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M7 12h10"/></svg></div>
				<h3 class="am-svc-card__title"><?php esc_html_e( 'Onboard Inspections & Ship Visits', 'athen-marine' ); ?></h3>
				<p class="am-svc-card__desc"><?php esc_html_e( 'Practical onboard support to assess lubrication systems and equipment and identify areas requiring attention.', 'athen-marine' ); ?></p>
				<div class="am-svc-card__tags">
					<span class="am-svc-card__tag"><?php esc_html_e( 'Onboard Inspection', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Lubrication System Assessment', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Equipment Evaluation', 'athen-marine' ); ?></span>
					<span class="am-svc-card__tag"><?php esc_html_e( 'Maintenance Recommendations', 'athen-marine' ); ?></span>
				</div>
				<hr class="am-svc-card__divider">
				<a href="/contact/" class="am-svc-card__link"><?php esc_html_e( 'Enquire Now →', 'athen-marine' ); ?></a>
			</div>
		</div>
	</section>

	<!-- ============================= PROCESS ============================= -->
	<section class="am-svc-process">
		<span class="am-svc-process__label am-about-section-label--lg"><?php esc_html_e( 'How It Works', 'athen-marine' ); ?></span>
		<h2 class="am-svc-process__title"><?php esc_html_e( 'Simple. Fast. Reliable.', 'athen-marine' ); ?></h2>

		<div class="am-svc-process__steps">
			<div class="am-svc-step">
				<div class="am-svc-step__num">1</div>
				<h3 class="am-svc-step__title"><?php esc_html_e( 'Connect With Us', 'athen-marine' ); ?></h3>
				<p class="am-svc-step__desc"><?php esc_html_e( 'Share your vessel requirements with our team.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-svc-step">
				<div class="am-svc-step__num">2</div>
				<h3 class="am-svc-step__title"><?php esc_html_e( 'Technical Evaluation', 'athen-marine' ); ?></h3>
				<p class="am-svc-step__desc"><?php esc_html_e( 'Review of lubricant requirements, applications & recommend Athen equivalents', 'athen-marine' ); ?></p>
			</div>
			<div class="am-svc-step">
				<div class="am-svc-step__num">3</div>
				<h3 class="am-svc-step__title"><?php esc_html_e( 'Commercial Proposal', 'athen-marine' ); ?></h3>
				<p class="am-svc-step__desc"><?php esc_html_e( 'Detailed offer with competitive pricing and recommended solutions.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-svc-step">
				<div class="am-svc-step__num">4</div>
				<h3 class="am-svc-step__title"><?php esc_html_e( 'Purchase Confirmation', 'athen-marine' ); ?></h3>
				<p class="am-svc-step__desc"><?php esc_html_e( 'Order acknowledged and processed for execution.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-svc-step">
				<div class="am-svc-step__num">5</div>
				<h3 class="am-svc-step__title"><?php esc_html_e( 'Supply Execution', 'athen-marine' ); ?></h3>
				<p class="am-svc-step__desc"><?php esc_html_e( 'Timely delivery as per vessel schedule supported by our global supply network', 'athen-marine' ); ?></p>
			</div>
		</div>
	</section>

	<!-- ============================= CTA ============================= -->
	<section class="am-svc-cta">
		<h2 class="am-svc-cta__title"><?php esc_html_e( 'Request Technical Support', 'athen-marine' ); ?></h2>
		<p class="am-svc-cta__sub"><?php esc_html_e( 'Connect with our technical team for tailored lubrication solutions.', 'athen-marine' ); ?></p>
		<a href="/contact/" class="am-svc-cta__btn"><?php esc_html_e( 'Get In Touch', 'athen-marine' ); ?></a>
	</section>

</main>

<?php
get_footer();
