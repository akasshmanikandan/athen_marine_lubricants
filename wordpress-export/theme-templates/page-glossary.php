<?php /* Template Name: Glossary */ ?>
<?php
/**
 * Glossary of marine lubrication terms page template for Athen Marine.
 */

get_header();
?>

<main id="main-content">

	<!-- ============================= GLOSSARY HERO ============================= -->
	<section class="am-svc-hero">
		<div class="am-svc-hero__accent-line"></div>
		<span class="am-svc-hero__watermark">08</span>

		<div class="am-svc-hero__content">
			<span class="am-svc-hero__label"><?php esc_html_e( 'Reference', 'athen-marine' ); ?></span>
			<h1 class="am-svc-hero__title"><?php esc_html_e( 'Glossary of Marine Lubrication Terms', 'athen-marine' ); ?></h1>
			<p class="am-svc-hero__subtitle"><?php esc_html_e( 'Short, direct-answer definitions of common marine lubrication terms.', 'athen-marine' ); ?></p>
		</div>
	</section>

	<!-- ============================= TERMS ============================= -->
	<section class="am-glossary">
		<dl class="am-glossary__list">
			<div class="am-glossary__item">
				<dt class="am-glossary__term"><?php esc_html_e( 'BN (Base Number)', 'athen-marine' ); ?></dt>
				<dd class="am-glossary__def"><?php esc_html_e( "A measure of a lubricant's ability to neutralize acidic combustion by-products, expressed in mg KOH/g. Higher BN oils are typically used with higher-sulphur fuels.", 'athen-marine' ); ?></dd>
			</div>
			<div class="am-glossary__item">
				<dt class="am-glossary__term"><?php esc_html_e( 'TBN (Total Base Number)', 'athen-marine' ); ?></dt>
				<dd class="am-glossary__def"><?php esc_html_e( 'Another term for Base Number, used interchangeably in marine lubricant specifications.', 'athen-marine' ); ?></dd>
			</div>
			<div class="am-glossary__item">
				<dt class="am-glossary__term"><?php esc_html_e( 'TPEO (Trunk Piston Engine Oil)', 'athen-marine' ); ?></dt>
				<dd class="am-glossary__def"><?php esc_html_e( 'A lubricant designed for medium-speed trunk piston diesel engines, used in generators and some propulsion systems.', 'athen-marine' ); ?></dd>
			</div>
			<div class="am-glossary__item">
				<dt class="am-glossary__term"><?php esc_html_e( 'EAL (Environmentally Acceptable Lubricant)', 'athen-marine' ); ?></dt>
				<dd class="am-glossary__def"><?php esc_html_e( 'A lubricant formulated to be biodegradable and minimally toxic, used at oil-to-sea interfaces such as stern tubes to meet environmental discharge regulations.', 'athen-marine' ); ?></dd>
			</div>
			<div class="am-glossary__item">
				<dt class="am-glossary__term"><?php esc_html_e( 'MARPOL Annex VI', 'athen-marine' ); ?></dt>
				<dd class="am-glossary__def"><?php esc_html_e( 'The International Maritime Organization (IMO) regulation limiting air pollution from ships, including sulphur oxide emissions, which directly affects lubricant selection.', 'athen-marine' ); ?></dd>
			</div>
			<div class="am-glossary__item">
				<dt class="am-glossary__term"><?php esc_html_e( 'IMO Tier II/III', 'athen-marine' ); ?></dt>
				<dd class="am-glossary__def"><?php esc_html_e( 'Emission standards set by the IMO for marine diesel engines, influencing which lubricants are compatible with newer, lower-emission engine designs.', 'athen-marine' ); ?></dd>
			</div>
			<div class="am-glossary__item am-glossary__item--last">
				<dt class="am-glossary__term"><?php esc_html_e( 'Viscosity Grade (SAE/ISO)', 'athen-marine' ); ?></dt>
				<dd class="am-glossary__def"><?php esc_html_e( "A classification indicating a lubricant's thickness and flow characteristics at specific temperatures, used to match oil to engine and equipment requirements.", 'athen-marine' ); ?></dd>
			</div>
		</dl>
	</section>

	<!-- ============================= CTA ============================= -->
	<section class="am-cta">
		<h2 class="am-cta__title"><?php esc_html_e( 'Have a Technical Question?', 'athen-marine' ); ?></h2>
		<p class="am-cta__sub"><?php esc_html_e( 'Our team can walk you through any spec, standard or grade selection.', 'athen-marine' ); ?></p>
		<div class="am-cta__actions">
			<a href="/contact/" class="am-btn am-btn--offwhite" style="background:var(--offwhite);color:var(--pine);"><?php esc_html_e( 'Contact Our Experts', 'athen-marine' ); ?></a>
			<a href="/products/" class="am-btn am-btn--ghost"><?php esc_html_e( 'View Products', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
