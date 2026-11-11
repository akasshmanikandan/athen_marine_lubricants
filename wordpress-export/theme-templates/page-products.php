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

	<!-- ============================= QUICK NAV TABS ============================= -->
	<nav class="am-prod-tabs">
		<a href="#main-grades" class="am-prod-tab is-active"><?php esc_html_e( 'Main Grades', 'athen-marine' ); ?></a>
		<a href="#secondary-grades" class="am-prod-tab"><?php esc_html_e( 'Secondary Grades', 'athen-marine' ); ?></a>
		<a href="#synthetics" class="am-prod-tab"><?php esc_html_e( 'Synthetics', 'athen-marine' ); ?></a>
		<a href="#greases" class="am-prod-tab"><?php esc_html_e( 'Greases', 'athen-marine' ); ?></a>
		<a href="#eal" class="am-prod-tab"><?php esc_html_e( 'EAL', 'athen-marine' ); ?></a>
	</nav>

	<!-- ============================= MAIN GRADES ============================= -->
	<section class="am-prod-section am-prod-section--light am-prod-section--bordered" id="main-grades">
		<h2 class="am-prod-section__title am-prod-section__title--black"><?php esc_html_e( 'Main Grades', 'athen-marine' ); ?></h2>
		<p class="am-prod-section__desc"><?php esc_html_e( 'Our Main Grades cover the core lubrication needs of marine diesel engines — including cylinder oils and system oils for slow-speed two-stroke engines and trunk piston engine oils (TPEO) for medium-speed engines. Formulated for thermal and oxidation stability, strong detergency/dispersancy, and compliance with MARPOL Annex VI sulphur limits and OEM specifications.', 'athen-marine' ); ?></p>

		<div class="am-prod-grid am-prod-grid--2">
			<div class="am-prod-split__col">
				<div class="am-prod-card">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Applications', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Main propulsion engines, diesel generator sets, two-stroke cylinder oils, medium-speed trunk piston engines.', 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-prod-split__col">
				<div class="am-prod-card">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Benefits & Compliance', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Provides thermal stability and strong detergency. Fully compliant with MARPOL Annex VI, IMO Tier II, and OEM approvals.', 'athen-marine' ); ?></p>
				</div>
			</div>
		</div>

		<div class="am-prod-catalog">
			<h3 class="am-prod-subcat" id="cylinder-oils">Cylinder Oils</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE CYL OIL 5025</h4>
					<p class="am-prod-item__desc">Main propulsion engines and diesel generator sets operating on marine fuels requiring a BN 25 cylinder lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-5025-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-5025-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE CYL OIL 5040</h4>
					<p class="am-prod-item__desc">Main propulsion engines and diesel generator sets operating on marine fuels requiring a BN 40 cylinder lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-5040-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-5040-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE CYL OIL 5055</h4>
					<p class="am-prod-item__desc">Main propulsion engines and diesel generator sets operating on marine fuels requiring a BN 55 cylinder lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-5055-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-5055-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE CYL OIL 5070</h4>
					<p class="am-prod-item__desc">Main propulsion engines and diesel generator sets operating on marine fuels requiring a BN 70 cylinder lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-5070-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-5070-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE CYL OIL 50100</h4>
					<p class="am-prod-item__desc">Main propulsion engines and diesel generator sets operating on high-sulphur fuels requiring a BN 100 cylinder lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-50100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-50100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE CYL OIL 50140</h4>
					<p class="am-prod-item__desc">Main propulsion engines operating on high-sulphur fuels requiring a BN 140 cylinder lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-50140-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/cyl-oil-50140-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="system-oils">System Oils</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE SYS OIL 3005</h4>
					<p class="am-prod-item__desc">Crosshead lubrication and camshaft/rocker gear systems of low-speed two-stroke marine diesel engines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/sys-oil-3005-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/sys-oil-3005-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE SYS OIL 3006</h4>
					<p class="am-prod-item__desc">Crosshead lubrication and camshaft/rocker gear systems of low-speed two-stroke marine diesel engines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/sys-oil-3006-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/sys-oil-3006-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="tpeo">TPEO</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 3012</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 12 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3012-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3012-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 3015</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 15 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3015-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3015-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 3020</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 20 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3020-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3020-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 3030</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 30 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3030-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3030-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 3040</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 40 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3040-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3040-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 3055</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 55 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3055-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-3055-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 4012</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 12 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4012-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4012-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 4015</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 15 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4015-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4015-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 4020</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 20 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4020-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4020-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 4030</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 30 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4030-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4030-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 4040</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 40 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4040-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4040-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE MSDO 4055</h4>
					<p class="am-prod-item__desc">Trunk piston engine oil for medium-speed diesel engines requiring a BN 55 lubricant.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4055-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/main-grades/msdo-4055-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================= SECONDARY GRADES ============================= -->
	<section class="am-prod-section am-prod-section--dark" id="secondary-grades">
		<h2 class="am-prod-section__title am-prod-section__title--offwhite"><?php esc_html_e( 'Secondary Grades', 'athen-marine' ); ?></h2>
		<p class="am-prod-section__desc"><?php esc_html_e( 'Secondary Grades support auxiliary systems and equipment that fall outside main engine lubrication — including gear oils, hydraulic oils, and system oils formulated for marine-specific operating conditions.', 'athen-marine' ); ?></p>

		<div class="am-prod-grid am-prod-grid--2">
			<div class="am-prod-split__col">
				<div class="am-prod-card am-prod-card--dark">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Applications', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Gearboxes, hydraulic systems, and auxiliary machinery operating under marine conditions.', 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-prod-split__col">
				<div class="am-prod-card am-prod-card--dark">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Benefits & Compliance', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Delivers consistent protection across auxiliary systems to reduce unplanned maintenance. Meets major gear & hydraulic OEM standards.', 'athen-marine' ); ?></p>
				</div>
			</div>
		</div>

		<div class="am-prod-catalog">
			<h3 class="am-prod-subcat" id="hydraulic-oil-aw">Hydraulic Oil (AW)</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD AW 15</h4>
					<p class="am-prod-item__desc">Anti-wear hydraulic fluid for mobile and stationary high-pressure hydraulic systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-15-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-15-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD AW 22</h4>
					<p class="am-prod-item__desc">Anti-wear hydraulic fluid for mobile and stationary high-pressure hydraulic systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-22-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-22-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD AW 32</h4>
					<p class="am-prod-item__desc">Anti-wear hydraulic fluid for mobile and stationary high-pressure hydraulic systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-32-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-32-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD AW 46</h4>
					<p class="am-prod-item__desc">Anti-wear hydraulic fluid for mobile and stationary high-pressure hydraulic systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-46-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-46-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD AW 68</h4>
					<p class="am-prod-item__desc">Anti-wear hydraulic fluid for mobile and stationary high-pressure hydraulic systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD AW 100</h4>
					<p class="am-prod-item__desc">Anti-wear hydraulic fluid for mobile and stationary high-pressure hydraulic systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD AW 150</h4>
					<p class="am-prod-item__desc">Anti-wear hydraulic fluid for mobile and stationary high-pressure hydraulic systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-aw-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="hydraulic-oil-hvi">Hydraulic Oil (HVI)</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD HVI 15</h4>
					<p class="am-prod-item__desc">Premium high viscosity index anti-wear hydraulic oil for systems operating under wide temperature variations.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-15-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-15-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD HVI 22</h4>
					<p class="am-prod-item__desc">Premium high viscosity index anti-wear hydraulic oil for systems operating under wide temperature variations.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-22-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-22-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD HVI 32</h4>
					<p class="am-prod-item__desc">Premium high viscosity index anti-wear hydraulic oil for systems operating under wide temperature variations.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-32-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-32-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD HVI 46</h4>
					<p class="am-prod-item__desc">Premium high viscosity index anti-wear hydraulic oil for systems operating under wide temperature variations.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-46-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-46-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD HVI 68</h4>
					<p class="am-prod-item__desc">Premium high viscosity index anti-wear hydraulic oil for systems operating under wide temperature variations.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD HVI 100</h4>
					<p class="am-prod-item__desc">Premium high viscosity index anti-wear hydraulic oil for systems operating under wide temperature variations.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD HVI 150</h4>
					<p class="am-prod-item__desc">Premium high viscosity index anti-wear hydraulic oil for systems operating under wide temperature variations.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/hyd-hvi-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="gear-oil">Gear Oil</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR 68</h4>
					<p class="am-prod-item__desc">Extra high performance gear oil with outstanding extreme pressure and load-carrying properties for enclosed gear drives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR 100</h4>
					<p class="am-prod-item__desc">Extra high performance gear oil with outstanding extreme pressure and load-carrying properties for enclosed gear drives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR 150</h4>
					<p class="am-prod-item__desc">Extra high performance gear oil with outstanding extreme pressure and load-carrying properties for enclosed gear drives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR 220</h4>
					<p class="am-prod-item__desc">Extra high performance gear oil with outstanding extreme pressure and load-carrying properties for enclosed gear drives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-220-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-220-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR 320</h4>
					<p class="am-prod-item__desc">Extra high performance gear oil with outstanding extreme pressure and load-carrying properties for enclosed gear drives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-320-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-320-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR 460</h4>
					<p class="am-prod-item__desc">Extra high performance gear oil with outstanding extreme pressure and load-carrying properties for enclosed gear drives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-460-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-460-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR 680</h4>
					<p class="am-prod-item__desc">Extra high performance gear oil with outstanding extreme pressure and load-carrying properties for enclosed gear drives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-680-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-680-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR 80W-90</h4>
					<p class="am-prod-item__desc">Multi-purpose automotive gear oil for manual transmissions and differentials.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-80w-90-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/gear-80w-90-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE ATF DXIII</h4>
					<p class="am-prod-item__desc">Automatic transmission fluid formulated to Dexron III specification.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/atf-dxiii-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/atf-dxiii-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE UTTO 80W</h4>
					<p class="am-prod-item__desc">Universal tractor transmission oil for combined transmission, hydraulic and wet-brake systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/utto-80w-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/utto-80w-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="turbine-oil">Turbine Oil</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE TURBINE 32</h4>
					<p class="am-prod-item__desc">High-performance, premium-quality mineral-based turbine lubricant for marine propulsion turbines and power generation gas turbines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/turbine-32-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/turbine-32-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE TURBINE 46</h4>
					<p class="am-prod-item__desc">High-performance, premium-quality mineral-based turbine lubricant for marine propulsion turbines and power generation gas turbines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/turbine-46-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/turbine-46-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE TURBINE 68</h4>
					<p class="am-prod-item__desc">High-performance, premium-quality mineral-based turbine lubricant for marine propulsion turbines and power generation gas turbines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/turbine-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/turbine-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE TURBINE 100</h4>
					<p class="am-prod-item__desc">High-performance, premium-quality mineral-based turbine lubricant for marine propulsion turbines and power generation gas turbines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/turbine-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/turbine-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="compressor-oil">Compressor Oil</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP 46</h4>
					<p class="am-prod-item__desc">Premium-grade air compressor lubricant formulated with high-quality mineral base stocks and oxidation-resistant additives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/comp-46-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/comp-46-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP 68</h4>
					<p class="am-prod-item__desc">Premium-grade air compressor lubricant formulated with high-quality mineral base stocks and oxidation-resistant additives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/comp-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/comp-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP 100</h4>
					<p class="am-prod-item__desc">Premium-grade air compressor lubricant formulated with high-quality mineral base stocks and oxidation-resistant additives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/comp-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/comp-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP 150</h4>
					<p class="am-prod-item__desc">Premium-grade air compressor lubricant formulated with high-quality mineral base stocks and oxidation-resistant additives.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/comp-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/comp-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="heat-transfer-coolant">Heat Transfer & Coolant</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE THERMAL 32</h4>
					<p class="am-prod-item__desc">Premium-quality heat transfer oil for closed indirect heating systems with excellent oxidation stability.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/thermal-32-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/thermal-32-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COOLANT 50</h4>
					<p class="am-prod-item__desc">Premium-quality coolant concentrate for marine engine cooling systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/coolant-50-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/coolant-50-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COOLANT 100</h4>
					<p class="am-prod-item__desc">Premium-quality coolant concentrate for marine engine cooling systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/coolant-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/coolant-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="refrigeration-oil">Refrigeration Oil</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF N COOL OIL 32</h4>
					<p class="am-prod-item__desc">High-quality naphthenic refrigeration compressor oil for ammonia-based systems with excellent low-temperature performance.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/ref-n-cool-oil-32-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/ref-n-cool-oil-32-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF N COOL OIL 68</h4>
					<p class="am-prod-item__desc">High-quality naphthenic refrigeration compressor oil for ammonia-based systems with excellent low-temperature performance.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/ref-n-cool-oil-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/ref-n-cool-oil-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="engine-oil">Engine Oil</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE 15W-40</h4>
					<p class="am-prod-item__desc">Multigrade diesel engine oil for auxiliary and land-based diesel engines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/15w-40-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/15w-40-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE 10W-30</h4>
					<p class="am-prod-item__desc">Multigrade diesel engine oil for auxiliary and land-based diesel engines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/10w-30-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/10w-30-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE 10W-40</h4>
					<p class="am-prod-item__desc">Multigrade diesel engine oil for auxiliary and land-based diesel engines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/10w-40-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/10w-40-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE 20W-50</h4>
					<p class="am-prod-item__desc">Multigrade diesel engine oil for auxiliary and land-based diesel engines.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/20w-50-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/20w-50-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE DD 30</h4>
					<p class="am-prod-item__desc">Monograde diesel engine oil for older auxiliary diesel engine designs.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/dd-30-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/dd-30-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE DD 40</h4>
					<p class="am-prod-item__desc">Monograde diesel engine oil for older auxiliary diesel engine designs.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/dd-40-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/dd-40-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE Outboard 2T</h4>
					<p class="am-prod-item__desc">Two-stroke outboard engine oil for marine outboard motors.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/outboard-2t-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/secondary-grades/outboard-2t-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================= SYNTHETICS ============================= -->
	<section class="am-prod-section am-prod-section--light" id="synthetics">
		<h2 class="am-prod-section__title am-prod-section__title--black"><?php esc_html_e( 'Synthetics', 'athen-marine' ); ?></h2>
		<p class="am-prod-section__desc"><?php esc_html_e( 'Our synthetic range is engineered for demanding operating conditions where extended drain intervals, higher thermal stability, or specialized OEM requirements call for more than a conventional mineral-based oil.', 'athen-marine' ); ?></p>

		<div class="am-prod-grid am-prod-grid--2">
			<div class="am-prod-split__col">
				<div class="am-prod-card">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Applications', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Turbines, compressors, high-load, and high-temperature systems requiring premium oils.', 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-prod-split__col">
				<div class="am-prod-card">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Benefits & Compliance', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Engineered for extended drain intervals, higher thermal stability, and specialized OEM requirements beyond mineral oils.', 'athen-marine' ); ?></p>
				</div>
			</div>
		</div>

		<div class="am-prod-catalog">
			<h3 class="am-prod-subcat">Synthetic Compressor Oil</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP SYN PAO 46</h4>
					<p class="am-prod-item__desc">Fully synthetic PAO-based air compressor lubricant for rotary, reciprocating and centrifugal compressors.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-pao-46-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-pao-46-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP SYN PAO 68</h4>
					<p class="am-prod-item__desc">Fully synthetic PAO-based air compressor lubricant for rotary, reciprocating and centrifugal compressors.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-pao-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-pao-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP SYN PAO 100</h4>
					<p class="am-prod-item__desc">Fully synthetic PAO-based air compressor lubricant for rotary, reciprocating and centrifugal compressors.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-pao-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-pao-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP SYN PAO 150</h4>
					<p class="am-prod-item__desc">Fully synthetic PAO-based air compressor lubricant for rotary, reciprocating and centrifugal compressors.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-pao-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-pao-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP SYN DE 68</h4>
					<p class="am-prod-item__desc">Premium synthetic diester-based compressor oil for high-temperature, heavy-duty marine and industrial air compressors.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-de-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-de-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP SYN DE 100</h4>
					<p class="am-prod-item__desc">Premium synthetic diester-based compressor oil for high-temperature, heavy-duty marine and industrial air compressors.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-de-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-de-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP SYN DE 150</h4>
					<p class="am-prod-item__desc">Premium synthetic diester-based compressor oil for high-temperature, heavy-duty marine and industrial air compressors.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-de-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-de-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE COMP SYN LPG 150</h4>
					<p class="am-prod-item__desc">Premium synthetic diester-based compressor oil for LPG compressor duty in demanding marine and industrial applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-lpg-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/comp-syn-lpg-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat">Synthetic Refrigeration Oil</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF SYN POE 32</h4>
					<p class="am-prod-item__desc">Fully synthetic POE-based oil engineered for modern ozone-friendly HFC refrigerants such as R-134a, R-404A and R-507.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-32-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-32-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF SYN POE 46</h4>
					<p class="am-prod-item__desc">Fully synthetic POE-based oil engineered for modern ozone-friendly HFC refrigerants such as R-134a, R-404A and R-507.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-46-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-46-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF SYN POE 68</h4>
					<p class="am-prod-item__desc">Fully synthetic POE-based oil engineered for modern ozone-friendly HFC refrigerants such as R-134a, R-404A and R-507.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF SYN POE 100</h4>
					<p class="am-prod-item__desc">Fully synthetic POE-based oil engineered for modern ozone-friendly HFC refrigerants such as R-134a, R-404A and R-507.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF SYN POE 150</h4>
					<p class="am-prod-item__desc">Fully synthetic POE-based oil engineered for modern ozone-friendly HFC refrigerants such as R-134a, R-404A and R-507.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-poe-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF SYN DAB 55</h4>
					<p class="am-prod-item__desc">Fully synthetic refrigeration oil engineered for modern ozone-friendly refrigerant systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-dab-55-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-dab-55-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF SYN DAB 68</h4>
					<p class="am-prod-item__desc">Fully synthetic refrigeration oil engineered for modern ozone-friendly refrigerant systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-dab-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-dab-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE REF SYN DAB 100</h4>
					<p class="am-prod-item__desc">Fully synthetic refrigeration oil engineered for modern ozone-friendly refrigerant systems.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-dab-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/ref-syn-dab-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat">Synthetic Gear Oil</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAO 46</h4>
					<p class="am-prod-item__desc">Premium fully-synthetic PAO-based marine gear and bearing oil for deck machinery and heavy-duty gearboxes.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-46-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-46-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAO 68</h4>
					<p class="am-prod-item__desc">Premium fully-synthetic PAO-based marine gear and bearing oil for deck machinery and heavy-duty gearboxes.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAO 100</h4>
					<p class="am-prod-item__desc">Premium fully-synthetic PAO-based marine gear and bearing oil for deck machinery and heavy-duty gearboxes.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAO 150</h4>
					<p class="am-prod-item__desc">Premium fully-synthetic PAO-based marine gear and bearing oil for deck machinery and heavy-duty gearboxes.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAO 220</h4>
					<p class="am-prod-item__desc">Premium fully-synthetic PAO-based marine gear and bearing oil for deck machinery and heavy-duty gearboxes.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-220-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-220-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAO 320</h4>
					<p class="am-prod-item__desc">Premium fully-synthetic PAO-based marine gear and bearing oil for deck machinery and heavy-duty gearboxes.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-320-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-320-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAO 460</h4>
					<p class="am-prod-item__desc">Premium fully-synthetic PAO-based marine gear and bearing oil for deck machinery and heavy-duty gearboxes.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-460-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-460-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAO 680</h4>
					<p class="am-prod-item__desc">Premium fully-synthetic PAO-based marine gear and bearing oil for deck machinery and heavy-duty gearboxes.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-680-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pao-680-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR SYN PAG 220</h4>
					<p class="am-prod-item__desc">Fully-synthetic PAG-based gear oil for heavy-duty worm gear and high-friction gearbox applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pag-220-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/synthetics/gear-syn-pag-220-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================= EAL ============================= -->
	<section class="am-prod-section am-prod-section--dark" id="eal">
		<h2 class="am-prod-section__title am-prod-section__title--offwhite"><?php esc_html_e( 'EAL - Environmentally Acceptable Lubricants', 'athen-marine' ); ?></h2>
		<p class="am-prod-section__desc"><?php esc_html_e( 'Our EAL range is formulated for vessels operating under environmental discharge regulations such as the U.S. EPA Vessel General Permit (VGP), supporting stern tubes, thrusters, and other oil-to-sea interfaces.', 'athen-marine' ); ?></p>

		<div class="am-prod-grid am-prod-grid--2">
			<div class="am-prod-split__col">
				<div class="am-prod-card am-prod-card--dark">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Applications', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Stern tube seals, thrusters, controllable pitch propellers, and oil-to-sea interface equipment.', 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-prod-split__col">
				<div class="am-prod-card am-prod-card--dark">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Benefits & Compliance', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Formulated for vessels under discharge regulations. Fully compliant with U.S. EPA Vessel General Permit (VGP) standards.', 'athen-marine' ); ?></p>
				</div>
			</div>
		</div>

		<div class="am-prod-catalog">
			<h3 class="am-prod-subcat" id="eal-hydraulic-fluids">EAL Hydraulic Fluids</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD EAL 32</h4>
					<p class="am-prod-item__desc">High-performance Environmentally Acceptable Hydraulic Fluid formulated with biodegradable synthetic esters for marine and offshore applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/hyd-eal-32-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/hyd-eal-32-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD EAL 46</h4>
					<p class="am-prod-item__desc">High-performance Environmentally Acceptable Hydraulic Fluid formulated with biodegradable synthetic esters for marine and offshore applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/hyd-eal-46-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/hyd-eal-46-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD EAL 68</h4>
					<p class="am-prod-item__desc">High-performance Environmentally Acceptable Hydraulic Fluid formulated with biodegradable synthetic esters for marine and offshore applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/hyd-eal-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/hyd-eal-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE HYD EAL 100</h4>
					<p class="am-prod-item__desc">High-performance Environmentally Acceptable Hydraulic Fluid formulated with biodegradable synthetic esters for marine and offshore applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/hyd-eal-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/hyd-eal-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="eal-sterntube-oils">EAL Sterntube Oils</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE STERN EAL 68</h4>
					<p class="am-prod-item__desc">Environmentally sensitive lubricant formulated from natural and renewable esters for sterntube running gear.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/stern-eal-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/stern-eal-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE STERN EAL 100</h4>
					<p class="am-prod-item__desc">Environmentally sensitive lubricant formulated from natural and renewable esters for sterntube running gear.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/stern-eal-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/stern-eal-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE STERN EAL 220</h4>
					<p class="am-prod-item__desc">Environmentally sensitive lubricant formulated from natural and renewable esters for sterntube running gear.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/stern-eal-220-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/stern-eal-220-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="eal-gear-oils">EAL Gear Oils</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR EAL 68</h4>
					<p class="am-prod-item__desc">Environmentally sensitive, high-performance extreme-pressure gear oil formulated from fully saturated esters for marine thruster and CPP applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/gear-eal-68-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/gear-eal-68-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR EAL 100</h4>
					<p class="am-prod-item__desc">Environmentally sensitive, high-performance extreme-pressure gear oil formulated from fully saturated esters for marine thruster and CPP applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/gear-eal-100-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/gear-eal-100-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR EAL 150</h4>
					<p class="am-prod-item__desc">Environmentally sensitive, high-performance extreme-pressure gear oil formulated from fully saturated esters for marine thruster and CPP applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/gear-eal-150-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/gear-eal-150-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GEAR EAL 220</h4>
					<p class="am-prod-item__desc">Environmentally sensitive, high-performance extreme-pressure gear oil formulated from fully saturated esters for marine thruster and CPP applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/gear-eal-220-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/gear-eal-220-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="eal-grease">EAL Grease</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GREASE EAL</h4>
					<p class="am-prod-item__desc">High-performance, biodegradable synthetic grease for marine applications where environmental sensitivity is a priority.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/grease-eal-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/eal/grease-eal-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================= GREASES ============================= -->
	<section class="am-prod-section am-prod-section--light" id="greases">
		<h2 class="am-prod-section__title am-prod-section__title--black"><?php esc_html_e( 'Grease', 'athen-marine' ); ?></h2>
		<p class="am-prod-section__desc"><?php esc_html_e( 'Our grease range is designed to protect marine deck equipment, winches, and machinery operating in harsh, saltwater-exposed conditions, providing resistance to water washout and corrosion.', 'athen-marine' ); ?></p>

		<div class="am-prod-grid am-prod-grid--2">
			<div class="am-prod-split__col">
				<div class="am-prod-card">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Applications', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Winches, cranes, deck machinery, and wire ropes exposed to harsh marine environments.', 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-prod-split__col">
				<div class="am-prod-card">
					<h3 class="am-prod-card__name"><?php esc_html_e( 'Benefits & Compliance', 'athen-marine' ); ?></h3>
					<p class="am-prod-card__desc"><?php esc_html_e( 'Extends equipment life with maximum resistance to saltwater washout and severe corrosion protection.', 'athen-marine' ); ?></p>
				</div>
			</div>
		</div>

		<div class="am-prod-catalog">
			<h3 class="am-prod-subcat" id="calcium-sulfonate-complex">Calcium Sulfonate Complex</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GREASE CS WR</h4>
					<p class="am-prod-item__desc">Heavy-duty calcium sulfonate complex soap-based grease for a wide range of marine, industrial and automotive applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-cs-wr-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-cs-wr-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GREASE CS EP 2</h4>
					<p class="am-prod-item__desc">Heavy-duty, multipurpose calcium sulfonate complex soap-based grease used across marine, industrial and automotive applications.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-cs-ep-2-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-cs-ep-2-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="lithium-complex">Lithium Complex</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GREASE LC HT EP2</h4>
					<p class="am-prod-item__desc">Premium lithium/calcium grease designed for high-temperature, high-load and marine exposure environments.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-lc-ht-ep2-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-lc-ht-ep2-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GREASE LC HT EP3</h4>
					<p class="am-prod-item__desc">Premium lithium/calcium grease designed for high-temperature, high-load and marine exposure environments.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-lc-ht-ep3-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-lc-ht-ep3-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
			<h3 class="am-prod-subcat" id="lithium">Lithium</h3>
			<div class="am-prod-items">
				<div class="am-prod-item">
					<h4 class="am-prod-item__name">ATHEN MARINE GREASE LI EP2</h4>
					<p class="am-prod-item__desc">General-purpose lithium hydroxystearate grease formulated to protect against wear, corrosion and water washout.</p>
					<div class="am-prod-item__docs">
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-li-ep2-pds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; PDS</a>
						<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/greases/grease-li-ep2-msds.pdf" class="am-doc-btn" target="_blank" rel="noopener">&#128196; MSDS</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================= CTA ============================= -->
	<section class="am-prod-cta">
		<h2 class="am-prod-cta__title"><?php esc_html_e( 'Speak to Our Product Specialists', 'athen-marine' ); ?></h2>
		<p class="am-prod-cta__sub"><?php esc_html_e( 'Tell us your vessel type, engine specification and operating route — we\'ll recommend the right grade.', 'athen-marine' ); ?></p>
		<div class="am-prod-cta__actions">
			<a href="/#quote" class="am-prod-cta__btn am-prod-cta__btn--solid"><?php esc_html_e( 'Request a Quote', 'athen-marine' ); ?></a>
			<a href="/contact/" class="am-prod-cta__btn am-prod-cta__btn--outline"><?php esc_html_e( 'Contact Our Experts', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
