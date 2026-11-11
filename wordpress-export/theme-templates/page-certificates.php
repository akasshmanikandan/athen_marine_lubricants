<?php /* Template Name: Certificates */ ?>
<?php
/**
 * Certificates page template for Athen Marine.
 * Not linked from main nav or footer — accessible only via the Products mega menu.
 */

get_header();

$am_certs = array(
	array(
		'title' => __( 'ISO 9001', 'athen-marine' ),
		'desc'  => __( 'Quality Management System certification.', 'athen-marine' ),
		'href'  => get_template_directory_uri() . '/pdfs/certificates/athen-marine-iso-9001.pdf',
	),
	array(
		'title' => __( 'ISO 14001', 'athen-marine' ),
		'desc'  => __( 'Environmental Management System certification.', 'athen-marine' ),
		'href'  => get_template_directory_uri() . '/pdfs/certificates/athen-marine-iso-14001.pdf',
	),
	array(
		'title' => __( 'ISO 45001', 'athen-marine' ),
		'desc'  => __( 'Occupational Health & Safety Management System certification.', 'athen-marine' ),
		'href'  => get_template_directory_uri() . '/pdfs/certificates/athen-marine-iso-45001.pdf',
	),
);
?>

<main id="main-content">

	<!-- ============================= CERTIFICATES HERO ============================= -->
	<section class="am-svc-hero">
		<div class="am-svc-hero__accent-line"></div>
		<span class="am-svc-hero__watermark">13</span>

		<div class="am-svc-hero__content">
			<span class="am-svc-hero__label"><?php esc_html_e( 'Resources', 'athen-marine' ); ?></span>
			<h1 class="am-svc-hero__title"><?php esc_html_e( 'Certificates', 'athen-marine' ); ?></h1>
			<p class="am-svc-hero__subtitle"><?php esc_html_e( 'Athen Marine is certified to internationally recognized quality, environmental, and occupational health & safety standards.', 'athen-marine' ); ?></p>
		</div>
	</section>

	<!-- ============================= ISO CERTIFICATION ============================= -->
	<section class="am-terms">
		<div class="am-terms__wrap">
			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'ISO Certification', 'athen-marine' ); ?></h2>
				<div class="am-doc-grid">
					<?php foreach ( $am_certs as $cert ) : ?>
					<div class="am-doc-card">
						<h3 class="am-doc-card__title"><?php echo esc_html( $cert['title'] ); ?></h3>
						<p class="am-doc-card__desc"><?php echo esc_html( $cert['desc'] ); ?></p>
						<a href="<?php echo esc_url( $cert['href'] ); ?>" class="am-btn am-btn--pine" target="_blank" rel="noopener" download><?php esc_html_e( 'Download Certificate', 'athen-marine' ); ?> <span aria-hidden="true">&darr;</span></a>
					</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================= CTA ============================= -->
	<section class="am-cta">
		<h2 class="am-cta__title"><?php esc_html_e( 'Have a Question About Our Certifications?', 'athen-marine' ); ?></h2>
		<p class="am-cta__sub"><?php esc_html_e( 'Our team is available to provide additional documentation for your audits or vendor approvals.', 'athen-marine' ); ?></p>
		<div class="am-cta__actions">
			<a href="/contact/" class="am-btn am-btn--offwhite" style="background:var(--offwhite);color:var(--pine);"><?php esc_html_e( 'Contact Our Team', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
