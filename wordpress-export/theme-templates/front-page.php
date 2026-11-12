<?php
/**
 * Front page template for Athen Marine.
 */

get_header();
?>

<main id="main-content">

	<!-- ============================= HERO ============================= -->
	<div class="am-stack-wrap">
	<section class="am-hero stack-section am-hero--z4" style="--stack-z: 1;" id="am-hero-carousel" data-images-base="<?php echo esc_url( get_template_directory_uri() ); ?>/images/">
		<div class="am-hero__photo-wedge"><img id="am-hero-slide-img" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/hero-tanker-aerial.jpg" alt="<?php esc_attr_e( 'Aerial view of a red tanker vessel docked at an offshore terminal', 'athen-marine' ); ?>" class="am-img-cover" style="object-position: center top;"></div>
		<div class="am-hero__accent-sliver"></div>
		<div class="am-hero__strip-bg"></div>

		<div class="am-hero__content">
			<div class="am-hero__eyebrow">
				<span class="am-hero__eyebrow-line"></span>
				<span class="am-hero__eyebrow-text am-about-section-label--lg" id="am-hero-slide-eyebrow"><?php esc_html_e( 'An Almatr Energy Group Company', 'athen-marine' ); ?></span>
			</div>
			<h1 class="am-hero__title" id="am-hero-slide-title"><?php esc_html_e( 'Beyond Lubricants.', 'athen-marine' ); ?><br><em><?php esc_html_e( 'A Trusted Maritime Partner.', 'athen-marine' ); ?></em></h1>
			<p class="am-hero__tagline" id="am-hero-slide-tagline"><?php esc_html_e( 'Intellectual Engineering. Delivering Trust.', 'athen-marine' ); ?></p>
			<p class="am-hero__desc" id="am-hero-slide-desc"><?php esc_html_e( 'Athen Marine delivers OEM-approved marine lubrication solutions backed by technical expertise, dependable global supply, and trusted support across 20+ countries and 200+ ports worldwide.', 'athen-marine' ); ?></p>
		</div>

		<div class="am-hero__actions-row">
			<div class="am-hero__actions">
				<a href="/about-us/" id="am-hero-slide-cta" class="am-btn am-hero__cta-primary"><?php esc_html_e( 'Know More', 'athen-marine' ); ?></a>
			</div>
			<div class="am-hero__dots" id="am-hero-dots" role="tablist" aria-label="<?php esc_attr_e( 'Hero slides', 'athen-marine' ); ?>">
				<button type="button" class="am-hero__dot is-active" role="tab" data-slide="0" aria-selected="true" aria-label="<?php esc_attr_e( 'Slide 1', 'athen-marine' ); ?>"></button>
				<button type="button" class="am-hero__dot" role="tab" data-slide="1" aria-selected="false" aria-label="<?php esc_attr_e( 'Slide 2', 'athen-marine' ); ?>"></button>
				<button type="button" class="am-hero__dot" role="tab" data-slide="2" aria-selected="false" aria-label="<?php esc_attr_e( 'Slide 3', 'athen-marine' ); ?>"></button>
				<button type="button" class="am-hero__dot" role="tab" data-slide="3" aria-selected="false" aria-label="<?php esc_attr_e( 'Slide 4', 'athen-marine' ); ?>"></button>
			</div>
		</div>
	</section>
	</div>

	<!-- ======================= QUICK QUOTE STRIP ======================= -->
	<section class="am-quote-strip" id="quote">
		<div class="am-quote-strip__text"><?php esc_html_e( 'Get a tailored marine lubricant quote →', 'athen-marine' ); ?></div>
		<form class="am-quote-strip__form" id="am-quick-quote-form">
			<input type="email" class="am-quote-strip__input" id="am-quick-quote-email" placeholder="<?php esc_attr_e( 'Enter your email address', 'athen-marine' ); ?>" required>
			<button type="submit" class="am-btn am-btn--dark"><?php esc_html_e( 'Get Quote Now', 'athen-marine' ); ?></button>
		</form>
		<div class="am-quote-strip__note">&#128274; <?php esc_html_e( 'Secure · No spam · Fast response', 'athen-marine' ); ?></div>
	</section>

	<!-- ============================= OEM BAR ============================= -->
	<section class="am-oem-bar">
		<div class="am-oem-bar__label"><?php esc_html_e( 'Compatible With:', 'athen-marine' ); ?></div>
		<div class="am-oem-bar__divider"></div>
		<ul class="am-oem-bar__list">
			<li>MAN B&amp;W</li>
			<li>W&Auml;RTSIL&Auml;</li>
			<li>CATERPILLAR</li>
			<li>MTU</li>
			<li>BERGEN ENGINES</li>
			<li>MAK</li>
			<li>YANMAR</li>
			<li>VOLVO PENTA</li>
		</ul>
	</section>

	<!-- ============================= STATS ============================= -->
	<div class="am-stack-wrap">
	<section class="am-stats stack-section" style="--stack-z: 2;">
		<div class="am-stat">
			<div class="am-stat__dot"></div>
			<div class="am-stat__num">20+</div>
			<div class="am-stat__label"><?php esc_html_e( 'Countries Served', 'athen-marine' ); ?></div>
		</div>
		<div class="am-stat">
			<div class="am-stat__dot"></div>
			<div class="am-stat__num">200+</div>
			<div class="am-stat__label"><?php esc_html_e( 'Ports Covered', 'athen-marine' ); ?></div>
		</div>
		<div class="am-stat">
			<div class="am-stat__dot"></div>
			<div class="am-stat__num">04</div>
			<div class="am-stat__label"><?php esc_html_e( 'Global Offices', 'athen-marine' ); ?></div>
		</div>
		<div class="am-stat">
			<div class="am-stat__dot"></div>
			<div class="am-stat__num">75+</div>
			<div class="am-stat__label"><?php esc_html_e( 'Direct and Indirect Staffs', 'athen-marine' ); ?></div>
		</div>
	</section>
	</div>

	<!-- ==================== SMART PRODUCT FINDER ==================== -->
	<section class="am-finder" id="finder">
		<div class="am-finder__head">
			<span class="am-eyebrow am-about-section-label--lg"><?php esc_html_e( 'Smart Product Finder', 'athen-marine' ); ?></span>
			<h2 class="am-finder__title"><?php esc_html_e( 'Find Your Exact Lubricant in 30 Seconds', 'athen-marine' ); ?></h2>
			<p class="am-finder__sub"><?php esc_html_e( 'Tell us about your engine and fuel, we\'ll match you with the right grade instantly.', 'athen-marine' ); ?></p>
		</div>

		<form class="am-finder__form" id="am-finder-form">
			<div class="am-finder__field">
				<label for="am-engine-type"><?php esc_html_e( 'Engine Type', 'athen-marine' ); ?></label>
				<select id="am-engine-type" name="engine_type">
					<option value="2-stroke"><?php esc_html_e( '2-Stroke Crosshead', 'athen-marine' ); ?></option>
					<option value="4-stroke-medium"><?php esc_html_e( '4-Stroke Medium Speed', 'athen-marine' ); ?></option>
					<option value="4-stroke-high"><?php esc_html_e( '4-Stroke High Speed', 'athen-marine' ); ?></option>
					<option value="auxiliary"><?php esc_html_e( 'Auxiliary', 'athen-marine' ); ?></option>
				</select>
			</div>
			<div class="am-finder__field">
				<label for="am-fuel-grade"><?php esc_html_e( 'Fuel Grade', 'athen-marine' ); ?></label>
				<select id="am-fuel-grade" name="fuel_grade">
					<option value="hfo"><?php esc_html_e( 'HFO', 'athen-marine' ); ?></option>
					<option value="vlsfo"><?php esc_html_e( 'VLSFO', 'athen-marine' ); ?></option>
					<option value="ulsfo"><?php esc_html_e( 'ULSFO', 'athen-marine' ); ?></option>
					<option value="mgo"><?php esc_html_e( 'MGO', 'athen-marine' ); ?></option>
				</select>
			</div>
			<div class="am-finder__field">
				<label for="am-sulfur-content"><?php esc_html_e( 'Sulfur Content', 'athen-marine' ); ?></label>
				<select id="am-sulfur-content" name="sulfur_content">
					<option value="0.1">0.1%</option>
					<option value="0.5">0.5%</option>
					<option value="1.0">1.0%</option>
					<option value="2.0">2.0%</option>
					<option value="3.5">3.5%+</option>
				</select>
			</div>
			<button type="submit" class="am-btn am-btn--pine am-finder__submit"><?php esc_html_e( 'Find My Lubricant', 'athen-marine' ); ?></button>
		</form>

		<div class="am-finder__result" id="am-finder-result">
			<div>
				<span class="am-finder__result-tag"><?php esc_html_e( 'Recommended For You', 'athen-marine' ); ?></span>
				<div class="am-finder__result-title" id="am-finder-result-title">&mdash;</div>
				<p class="am-finder__result-desc" id="am-finder-result-desc"></p>
			</div>
			<a href="#quote" class="am-btn am-btn--pine"><?php esc_html_e( 'Request This Grade', 'athen-marine' ); ?></a>
		</div>
	</section>

	<!-- ========================= PRODUCTS BENTO ========================= -->
	<div class="am-stack-wrap">
	<section class="am-products stack-section" id="products" style="--stack-z: 3;">
		<div class="am-products__head">
			<div>
				<span class="am-eyebrow am-about-section-label--lg" style="color:var(--pine);"><?php esc_html_e( 'Our Product Range', 'athen-marine' ); ?></span>
				<h2 class="am-products__title"><?php esc_html_e( 'Marine Lubricants for Every Voyage', 'athen-marine' ); ?></h2>
				<p class="am-products__desc"><?php esc_html_e( 'Our product range covers the full spectrum of marine lubrication needs — from Main Grades, Secondary Grades, Environmentally Acceptable Lubricants (EALs) and Greases.', 'athen-marine' ); ?></p>
			</div>
			<a href="/products/" class="am-products__link"><?php esc_html_e( 'Explore Our Products →', 'athen-marine' ); ?></a>
		</div>

		<div class="am-products__icongrid am-products__icongrid--five">
			<div class="am-trust__card am-products__iconcard">
				<div class="am-products__icon-photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/icon-main-grades.jpg" alt=""></div>
				<h3 class="am-card__title"><?php esc_html_e( 'Main Grades', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'High-performance lubricants for main propulsion and trunk piston engines, protecting against wear, deposits, and corrosion.', 'athen-marine' ); ?></p>
				<div class="am-card__actions">
					<a href="/products/" class="am-card__link"><?php esc_html_e( 'Learn More →', 'athen-marine' ); ?></a>
					<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/athen-marine-main-grades-catalogue.pdf" class="am-card__download" target="_blank" rel="noopener"><?php esc_html_e( 'Catalogue', 'athen-marine' ); ?></a>
				</div>
			</div>
			<div class="am-trust__card am-products__iconcard">
				<div class="am-products__icon-photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/icon-secondary-grades.jpg" alt=""></div>
				<h3 class="am-card__title"><?php esc_html_e( 'Secondary Grades', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'Advanced lubricants for auxiliary engines and onboard machinery, including other critical equipments.', 'athen-marine' ); ?></p>
				<div class="am-card__actions">
					<a href="/products/" class="am-card__link"><?php esc_html_e( 'Learn More →', 'athen-marine' ); ?></a>
					<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/athen-marine-secondary-grades-catalogue.pdf" class="am-card__download" target="_blank" rel="noopener"><?php esc_html_e( 'Catalogue', 'athen-marine' ); ?></a>
				</div>
			</div>
			<div class="am-trust__card am-products__iconcard">
				<div class="am-products__icon-photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/icon-synthetics.jpg" alt=""></div>
				<h3 class="am-card__title"><?php esc_html_e( 'Synthetics', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'Advanced synthetic lubricants engineered for extended performance in the most demanding operating conditions.', 'athen-marine' ); ?></p>
				<div class="am-card__actions">
					<a href="/products/" class="am-card__link"><?php esc_html_e( 'Learn More →', 'athen-marine' ); ?></a>
					<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/athen-marine-synthetics-catalogue.pdf" class="am-card__download" target="_blank" rel="noopener"><?php esc_html_e( 'Catalogue', 'athen-marine' ); ?></a>
				</div>
			</div>
			<div class="am-trust__card am-products__iconcard">
				<div class="am-products__icon-photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/icon-grease.jpg" alt=""></div>
				<h3 class="am-card__title"><?php esc_html_e( 'Greases', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'High-performance marine greases engineered for superior load protection, water resistance, and corrosion control.', 'athen-marine' ); ?></p>
				<div class="am-card__actions">
					<a href="/products/" class="am-card__link"><?php esc_html_e( 'Learn More →', 'athen-marine' ); ?></a>
					<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/athen-marine-greases-catalogue.pdf" class="am-card__download" target="_blank" rel="noopener"><?php esc_html_e( 'Catalogue', 'athen-marine' ); ?></a>
				</div>
			</div>
			<div class="am-trust__card am-products__iconcard">
				<div class="am-products__icon-photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/icon-eal.jpg" alt=""></div>
				<h3 class="am-card__title"><?php esc_html_e( 'EALs - Environmentally Acceptable Lubricants', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'Advanced EALs for oil-to-sea interface applications, combining equipment protection with environmental compliance.', 'athen-marine' ); ?></p>
				<div class="am-card__actions">
					<a href="/products/" class="am-card__link"><?php esc_html_e( 'Learn More →', 'athen-marine' ); ?></a>
					<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/athen-marine-eal-catalogue.pdf" class="am-card__download" target="_blank" rel="noopener"><?php esc_html_e( 'Catalogue', 'athen-marine' ); ?></a>
				</div>
			</div>
		</div>
	</section>
	</div>

	<?php /* ========================= OIL COMPARISON (hidden for now) =========================
	<div class="am-stack-wrap">
	<section class="am-comparison stack-section" id="comparison" style="--stack-z: 4;">
		<div class="am-comparison__head">
			<h2 class="am-comparison__title"><?php esc_html_e( 'Discover Your Athen Equivalent', 'athen-marine' ); ?></h2>
			<p class="am-comparison__sub"><?php esc_html_e( 'Find the Athen equivalent by selecting a competitor.', 'athen-marine' ); ?></p>
		</div>

		<div class="am-cmp-tabs" id="am-cmp-tabs" role="tablist">
			<button class="am-cmp-tab is-active" data-category="mainGrades"><?php esc_html_e( 'Main Grades', 'athen-marine' ); ?></button>
			<button class="am-cmp-tab" data-category="secondaryGrades"><?php esc_html_e( 'Secondary Grades', 'athen-marine' ); ?></button>
			<button class="am-cmp-tab" data-category="eal"><?php esc_html_e( 'EAL', 'athen-marine' ); ?></button>
			<button class="am-cmp-tab" data-category="greases"><?php esc_html_e( 'Greases', 'athen-marine' ); ?></button>
		</div>

		<div class="am-cmp-subcats" id="am-cmp-subcats"></div>

		<div class="am-cmp-table-wrap">
			<table class="am-cmp-table">
				<thead>
					<tr>
						<th class="am-cmp-th am-cmp-th--category"><?php esc_html_e( 'Category', 'athen-marine' ); ?></th>
						<th class="am-cmp-th am-cmp-th--select">
							<select class="am-cmp-brand-select" id="am-cmp-brand-1" aria-label="<?php esc_attr_e( 'Select Brand 1', 'athen-marine' ); ?>"></select>
						</th>
						<th class="am-cmp-th am-cmp-th--select">
							<select class="am-cmp-brand-select" id="am-cmp-brand-2" aria-label="<?php esc_attr_e( 'Select Brand 2', 'athen-marine' ); ?>"></select>
						</th>
						<th class="am-cmp-th am-cmp-th--athen"><?php esc_html_e( 'Athen Marine Equivalent', 'athen-marine' ); ?></th>
					</tr>
				</thead>
				<tbody id="am-cmp-tbody">
					<tr><td colspan="4" class="am-cmp-empty"><?php esc_html_e( 'Loading comparison data…', 'athen-marine' ); ?></td></tr>
				</tbody>
			</table>
		</div>

	</section>
	</div>
	========================================================================= */ ?>

	<!-- =========================== PORT TICKER =========================== -->
	<section class="am-port-ticker">
		<div class="am-port-ticker__badge">
			<span class="am-port-ticker__badge-dot"></span>
			<?php esc_html_e( 'Available Now', 'athen-marine' ); ?>
		</div>
		<div class="am-port-ticker__track">
			<div class="am-port-ticker__content">
				<span>
					<span>Greece <span class="am-check">&#10003;</span></span>
					<span>Rotterdam, Netherlands <span class="am-check">&#10003;</span></span>
					<span>India <span class="am-check">&#10003;</span></span>
				</span>
				<span>
					<span>Greece <span class="am-check">&#10003;</span></span>
					<span>Rotterdam, Netherlands <span class="am-check">&#10003;</span></span>
					<span>India <span class="am-check">&#10003;</span></span>
				</span>
			</div>
		</div>
	</section>

	<!-- ============================== WHY CUSTOMERS CHOOSE ATHEN ============================== -->
	<section class="am-trust" id="vision">
		<span class="am-trust__label"><?php esc_html_e( 'Why Customers Choose Athen', 'athen-marine' ); ?></span>
		<h2 class="am-trust__title"><?php esc_html_e( 'Built to Earn Your Trust', 'athen-marine' ); ?></h2>

		<div class="am-trust__grid">
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/trust-icon-expertise.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Technical Expertise', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'Engineering driven solutions that support optimal vessel performance.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/trust-icon-reliable.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Reliable Supply', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'Consistent product availability across ports.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/trust-icon-support.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Personalized Support', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'Responsive, human connect to customer needs.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/trust-icon-partnership.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Trusted Partnership', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'We work alongside our customers to create long-term value.', 'athen-marine' ); ?></p>
			</div>
		</div>
	</section>

	<!-- ============================= FAQ ============================= -->
	<section class="am-faq" id="faq">
		<span class="am-faq__label"><?php esc_html_e( 'Frequently Asked Questions', 'athen-marine' ); ?></span>
		<h2 class="am-faq__title"><?php esc_html_e( 'Have a Question?', 'athen-marine' ); ?></h2>

		<div class="am-faq__list">
			<div class="am-faq-item is-open">
				<button type="button" class="am-faq-item__question" aria-expanded="true">
					<span><?php esc_html_e( 'What does Athen Marine supply?', 'athen-marine' ); ?></span>
					<span class="am-faq-item__icon" aria-hidden="true"></span>
				</button>
				<div class="am-faq-item__answer">
					<p><?php esc_html_e( 'Athen Marine supplies marine lubricants including cylinder oils, trunk piston engine oils, synthetics, greases, and Environmentally Acceptable Lubricants (EALs).', 'athen-marine' ); ?></p>
				</div>
			</div>

			<div class="am-faq-item">
				<button type="button" class="am-faq-item__question" aria-expanded="false">
					<span><?php esc_html_e( 'How many countries and ports does Athen Marine serve?', 'athen-marine' ); ?></span>
					<span class="am-faq-item__icon" aria-hidden="true"></span>
				</button>
				<div class="am-faq-item__answer">
					<p><?php esc_html_e( 'Athen Marine currently serves 20+ countries and 200+ ports, supporting more than 5,000 vessels worldwide.', 'athen-marine' ); ?></p>
				</div>
			</div>

			<?php /* Hidden until Egypt page is ready to show:
			<div class="am-faq-item">
				<button type="button" class="am-faq-item__question" aria-expanded="false">
					<span><?php esc_html_e( 'Is Athen Marine available in Egypt?', 'athen-marine' ); ?></span>
					<span class="am-faq-item__icon" aria-hidden="true"></span>
				</button>
				<div class="am-faq-item__answer">
					<p>
						<?php
						printf(
							esc_html__( 'Yes. Athen Marine lubricants are available to vessels calling at Egyptian ports and transiting the Suez Canal. See our %s for details.', 'athen-marine' ),
							'<a href="/egypt/">' . esc_html__( 'Egypt page', 'athen-marine' ) . '</a>'
						);
						?>
					</p>
				</div>
			</div>
			*/ ?>

			<div class="am-faq-item">
				<button type="button" class="am-faq-item__question" aria-expanded="false">
					<span><?php esc_html_e( "Who is Athen Marine's strategic partner?", 'athen-marine' ); ?></span>
					<span class="am-faq-item__icon" aria-hidden="true"></span>
				</button>
				<div class="am-faq-item__answer">
					<p><?php esc_html_e( 'Athen Marine works with strategic partner Legero International Group B.V. to deliver marine lubricant solutions and technical support internationally.', 'athen-marine' ); ?></p>
				</div>
			</div>

			<div class="am-faq-item">
				<button type="button" class="am-faq-item__question" aria-expanded="false">
					<span><?php esc_html_e( 'Are Athen Marine lubricants OEM approved?', 'athen-marine' ); ?></span>
					<span class="am-faq-item__icon" aria-hidden="true"></span>
				</button>
				<div class="am-faq-item__answer">
					<p><?php esc_html_e( "Yes. Athen Marine's product portfolio is 100% OEM approved, providing confidence in the suitability and performance of our lubricants for applicable marine engine and equipment requirements.", 'athen-marine' ); ?></p>
				</div>
			</div>
		</div>
	</section>

	<!-- ============================= CTA STRIP ============================= -->
	<section class="am-cta">
		<h2 class="am-cta__title"><?php esc_html_e( 'Keep Your Fleet Moving With Confidence', 'athen-marine' ); ?></h2>
		<p class="am-cta__sub"><?php esc_html_e( 'From premium marine lubricants to technical expertise and dependable global supply, Athen Marine is built around one purpose: to empower the global maritime industry through reliable lubrication solutions.', 'athen-marine' ); ?></p>
		<div class="am-cta__actions">
			<a href="/request-quote/" class="am-btn am-btn--offwhite" style="background:var(--offwhite);color:var(--pine);"><?php esc_html_e( 'Request a Quote', 'athen-marine' ); ?></a>
			<a href="/contact/" class="am-btn am-btn--ghost"><?php esc_html_e( 'Contact Our Experts', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
