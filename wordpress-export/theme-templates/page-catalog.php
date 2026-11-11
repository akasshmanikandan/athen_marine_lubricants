<?php /* Template Name: Product Catalog */ ?>
<?php
/**
 * Product Catalog page template for Athen Marine.
 * Not linked from main nav or footer — accessible only via the Products mega menu.
 */

get_header();

$am_catalog_docs = array(
	array(
		'title' => __( 'Company Profile', 'athen-marine' ),
		'desc'  => __( 'An overview of Athen Marine — our capabilities, global reach, and commitment to the maritime industry.', 'athen-marine' ),
		'href'  => get_template_directory_uri() . '/pdfs/athen-marine-company-profile.pdf',
	),
	array(
		'title' => __( 'Full Product Catalog', 'athen-marine' ),
		'desc'  => __( 'Our complete range of marine lubricants, greases, and environmentally acceptable lubricants in a single document.', 'athen-marine' ),
		'href'  => get_template_directory_uri() . '/pdfs/athen-marine-product-catalog.pdf',
	),
);

$am_category_docs = array(
	array( 'title' => __( 'Main Grades', 'athen-marine' ), 'href' => get_template_directory_uri() . '/pdfs/athen-marine-main-grades-catalogue.pdf' ),
	array( 'title' => __( 'Secondary Grades', 'athen-marine' ), 'href' => get_template_directory_uri() . '/pdfs/athen-marine-secondary-grades-catalogue.pdf' ),
	array( 'title' => __( 'Synthetics', 'athen-marine' ), 'href' => get_template_directory_uri() . '/pdfs/athen-marine-synthetics-catalogue.pdf' ),
	array( 'title' => __( 'EAL', 'athen-marine' ), 'href' => get_template_directory_uri() . '/pdfs/athen-marine-eal-catalogue.pdf' ),
	array( 'title' => __( 'Greases', 'athen-marine' ), 'href' => get_template_directory_uri() . '/pdfs/athen-marine-greases-catalogue.pdf' ),
);
?>

<main id="main-content">

	<!-- ============================= CATALOG HERO ============================= -->
	<section class="am-svc-hero">
		<div class="am-svc-hero__accent-line"></div>
		<span class="am-svc-hero__watermark">12</span>

		<div class="am-svc-hero__content">
			<span class="am-svc-hero__label"><?php esc_html_e( 'Resources', 'athen-marine' ); ?></span>
			<h1 class="am-svc-hero__title"><?php esc_html_e( 'Product Catalog', 'athen-marine' ); ?></h1>
			<p class="am-svc-hero__subtitle"><?php esc_html_e( 'Download our company profile and full product catalog, or jump straight to the catalogue for a specific product category.', 'athen-marine' ); ?></p>
		</div>
	</section>

	<!-- ============================= COMPANY DOCUMENTS ============================= -->
	<section class="am-terms">
		<div class="am-terms__wrap">
			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Company Documents', 'athen-marine' ); ?></h2>
				<div class="am-doc-grid">
					<?php foreach ( $am_catalog_docs as $doc ) : ?>
					<div class="am-doc-card">
						<h3 class="am-doc-card__title"><?php echo esc_html( $doc['title'] ); ?></h3>
						<p class="am-doc-card__desc"><?php echo esc_html( $doc['desc'] ); ?></p>
						<a href="<?php echo esc_url( $doc['href'] ); ?>" class="am-btn am-btn--pine" target="_blank" rel="noopener" download><?php esc_html_e( 'Download PDF', 'athen-marine' ); ?> <span aria-hidden="true">&darr;</span></a>
					</div>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Catalogues by Category', 'athen-marine' ); ?></h2>
				<div class="am-doc-grid am-doc-grid--compact">
					<?php foreach ( $am_category_docs as $doc ) : ?>
					<div class="am-doc-card am-doc-card--compact">
						<h3 class="am-doc-card__title"><?php echo esc_html( $doc['title'] ); ?></h3>
						<a href="<?php echo esc_url( $doc['href'] ); ?>" class="am-btn am-btn--pine" target="_blank" rel="noopener" download><?php esc_html_e( 'Download PDF', 'athen-marine' ); ?> <span aria-hidden="true">&darr;</span></a>
					</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================= CTA ============================= -->
	<section class="am-cta">
		<h2 class="am-cta__title"><?php esc_html_e( 'Need Help Choosing the Right Product?', 'athen-marine' ); ?></h2>
		<p class="am-cta__sub"><?php esc_html_e( 'Our technical team can recommend the right grade for your fleet and operating conditions.', 'athen-marine' ); ?></p>
		<div class="am-cta__actions">
			<a href="/request-quote/" class="am-btn am-btn--offwhite" style="background:var(--offwhite);color:var(--pine);"><?php esc_html_e( 'Request a Quote', 'athen-marine' ); ?></a>
			<a href="/contact/" class="am-btn am-btn--ghost"><?php esc_html_e( 'Contact Our Team', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
