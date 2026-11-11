<?php /* Template Name: Delivery Network */ ?>
<?php
/**
 * Delivery Network page template for Athen Marine.
 */

get_header();
?>

<main id="main-content">

	<!-- ============================= DELIVERY HERO ============================= -->
	<section class="am-dlv-hero">
		<div class="am-dlv-hero__photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/dlv-hero-port.jpg" alt="<?php esc_attr_e( 'Aerial view of a busy container port with cranes and cargo vessels', 'athen-marine' ); ?>" class="am-img-cover am-dlv-hero__photo-img"></div>
		<span class="am-dlv-hero__watermark">05</span>

		<div class="am-dlv-hero__grid">
			<div class="am-dlv-hero__content">
				<span class="am-dlv-hero__label am-about-section-label--lg"><?php esc_html_e( 'Our Reach', 'athen-marine' ); ?></span>
				<h1 class="am-dlv-hero__title"><?php esc_html_e( 'Confidence at Every Port', 'athen-marine' ); ?><br><?php esc_html_e( 'Global Reach, Local Commitment', 'athen-marine' ); ?></h1>
				<p class="am-dlv-hero__tagline"><?php esc_html_e( 'Intellectual Engineering. Delivering Trust.', 'athen-marine' ); ?></p>
				<p class="am-dlv-hero__subtitle"><?php esc_html_e( "Athen Marine's expanding global network is built on a simple commitment: ensuring dependable access to marine lubrication solutions wherever and whenever they are needed. Through a growing presence across 20+ countries and 200+ ports, we help vessel operators navigate every voyage with confidence.", 'athen-marine' ); ?></p>
			</div>
		</div>
	</section>

	<!-- ============================= STATS CARDS ============================= -->
	<section class="am-dlv-stats" id="reach">
		<div class="am-dlv-stats__row">
			<div class="am-dlv-stat-card">
				<span class="am-dlv-stat-card__label"><?php esc_html_e( 'Countries Served', 'athen-marine' ); ?></span>
				<span class="am-dlv-stat-card__num">20+</span>
			</div>
			<div class="am-dlv-stat-card">
				<span class="am-dlv-stat-card__label"><?php esc_html_e( 'Ports Covered', 'athen-marine' ); ?></span>
				<span class="am-dlv-stat-card__num">200+</span>
			</div>
			<div class="am-dlv-stat-card">
				<span class="am-dlv-stat-card__label"><?php esc_html_e( 'Global Offices', 'athen-marine' ); ?></span>
				<span class="am-dlv-stat-card__num">04</span>
			</div>
			<div class="am-dlv-stat-card">
				<span class="am-dlv-stat-card__label"><?php esc_html_e( 'Team Members', 'athen-marine' ); ?></span>
				<span class="am-dlv-stat-card__num">100+</span>
			</div>
		</div>
	</section>

	<!-- ============================= WORLD MAP ============================= -->
	<section class="am-dlv-map" id="map">
		<h2 class="am-dlv-map__title"><?php esc_html_e( 'Trusted Across Every Ocean', 'athen-marine' ); ?></h2>

		<div class="am-dlv-map__search">
			<input type="text" id="am-port-search" class="am-dlv-map__search-input" placeholder="<?php esc_attr_e( 'Search a country…', 'athen-marine' ); ?>" autocomplete="off">
			<div id="am-port-search-results" class="am-dlv-map__search-results"></div>
		</div>

		<div class="am-dlv-map__layout">
			<div class="am-dlv-map__stage">
				<img src="<?php echo esc_url( get_template_directory_uri() . '/images/world-map.png?v=' . filemtime( get_template_directory() . '/images/world-map.png' ) ); ?>" alt="<?php esc_attr_e( 'World map marking the countries and ports Athen Marine delivers to', 'athen-marine' ); ?>" class="am-dlv-map__img">
				<div id="am-dlv-map-pins" class="am-dlv-map__pins"></div>

				<div id="am-dlv-port-panel" class="am-dlv-port-panel" hidden>
					<button type="button" class="am-dlv-port-panel__close" id="am-dlv-port-panel-close" aria-label="<?php esc_attr_e( 'Close', 'athen-marine' ); ?>">&times;</button>
					<span class="am-dlv-port-panel__eyebrow"><?php esc_html_e( 'Country', 'athen-marine' ); ?></span>
					<h3 id="am-dlv-port-panel-title" class="am-dlv-port-panel__title"></h3>
					<span class="am-dlv-port-panel__eyebrow"><?php esc_html_e( 'Port', 'athen-marine' ); ?></span>
					<ul id="am-dlv-port-panel-list" class="am-dlv-port-panel__list"></ul>
				</div>
			</div>

			<aside class="am-dlv-map__sidebar">
				<h3 class="am-dlv-map__sidebar-title"><?php esc_html_e( 'Filter by Region', 'athen-marine' ); ?></h3>
				<div class="am-dlv-map__regions">
					<select id="am-dlv-map-regions" class="am-dlv-map__region-select">
						<option value="all"><?php esc_html_e( 'All Regions', 'athen-marine' ); ?></option>
						<option value="africa"><?php esc_html_e( 'Africa', 'athen-marine' ); ?></option>
						<option value="asia"><?php esc_html_e( 'Asia', 'athen-marine' ); ?></option>
						<option value="europe"><?php esc_html_e( 'Europe', 'athen-marine' ); ?></option>
						<option value="americas"><?php esc_html_e( 'Americas', 'athen-marine' ); ?></option>
						<option value="middle-east"><?php esc_html_e( 'Middle East', 'athen-marine' ); ?></option>
					</select>
				</div>
			</aside>
		</div>

		<div class="am-dlv-map__legend">
			<span class="am-dlv-map__legend-item"><span class="am-dlv-legend-dot"></span> <?php esc_html_e( 'Port Location — click a pin or search a country', 'athen-marine' ); ?></span>
		</div>
	</section>

	<!-- ============================= LOCATIONS ============================= -->
	<section class="am-dlv-ports" id="locations">
		<h2 class="am-dlv-ports__title"><?php esc_html_e( 'Global Reach. Dependable Supply. Responsive Support.', 'athen-marine' ); ?></h2>

		<div class="am-dlv-location-grid">
			<div class="am-dlv-location-card">
				<h3 class="am-dlv-location-card__name"><?php esc_html_e( 'Greece', 'athen-marine' ); ?></h3>
				<p class="am-dlv-location-card__desc"><?php esc_html_e( 'Blending operations strengthening our European supply capabilities. Every batch is blended and quality-checked before it leaves the facility, supporting consistent product performance across the region.', 'athen-marine' ); ?></p>
				<span class="am-dlv-location-card__note"><?php esc_html_e( 'Facility capacity and certifications to be published once confirmed.', 'athen-marine' ); ?></span>
			</div>
			<div class="am-dlv-location-card">
				<h3 class="am-dlv-location-card__name"><?php esc_html_e( 'Rotterdam', 'athen-marine' ); ?></h3>
				<p class="am-dlv-location-card__desc"><?php esc_html_e( 'Marine supply and barge operations within a major European maritime hub.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-dlv-location-card">
				<h3 class="am-dlv-location-card__name"><?php esc_html_e( 'India', 'athen-marine' ); ?></h3>
				<p class="am-dlv-location-card__desc"><?php esc_html_e( 'Available through strategic partnership with ZEST Marine.', 'athen-marine' ); ?></p>
			</div>
		</div>
	</section>

	<!-- ============================= CTA ============================= -->
	<section class="am-dlv-cta">
		<h2 class="am-dlv-cta__title"><?php esc_html_e( 'Check Availability', 'athen-marine' ); ?></h2>
		<p class="am-dlv-cta__sub"><?php esc_html_e( 'Tell us your port and vessel schedule — we\'ll confirm supply availability.', 'athen-marine' ); ?></p>
		<a href="/contact/" class="am-dlv-cta__btn"><?php esc_html_e( 'Request Delivery Quote', 'athen-marine' ); ?></a>
	</section>

</main>

<?php
get_footer();
