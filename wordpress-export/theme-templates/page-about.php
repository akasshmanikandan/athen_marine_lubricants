<?php /* Template Name: About Us */ ?>
<?php
/**
 * About Us page template for Athen Marine.
 */

get_header();
?>

<main id="main-content">

	<!-- ============================= ABOUT HERO ============================= -->
	<section class="am-about-hero">
		<div class="am-about-hero__photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/about-hero-sunset.jpg" alt="<?php esc_attr_e( 'Athen Marine crew member watching the sunset aboard a container vessel', 'athen-marine' ); ?>" class="am-img-cover am-about-hero__photo-img"></div>
	</section>

	<!-- ============================= OUR VISION ============================= -->
	<section class="am-about-statement am-about-statement--light" id="vision">
		<span class="am-about-statement__label am-about-section-label--lg"><?php esc_html_e( 'Our Vision', 'athen-marine' ); ?></span>
		<h2 class="am-about-statement__title am-about-statement__title--xl"><?php esc_html_e( 'To Become the Most Trusted International Marine Lubricant Brand', 'athen-marine' ); ?></h2>
		<p class="am-about-statement__desc"><?php esc_html_e( 'Recognized globally for technical excellence, dependable supply, and customer relationships that go beyond products.', 'athen-marine' ); ?></p>
	</section>

	<!-- ============================= OUR MISSION ============================= -->
	<section class="am-about-statement am-about-statement--pine" id="mission">
		<span class="am-about-statement__label am-about-section-label--lg"><?php esc_html_e( 'Our Mission', 'athen-marine' ); ?></span>
		<h2 class="am-about-statement__title"><?php esc_html_e( 'To Empower the Global Maritime Industry Through Reliable Lubrication Solutions', 'athen-marine' ); ?></h2>
		<p class="am-about-statement__desc"><?php esc_html_e( 'A trusted partner delivering assurance, expertise, and dependable support across every port and voyage.', 'athen-marine' ); ?></p>
	</section>

	<!-- ============================= OUR VALUES ============================= -->
	<section class="am-about-values" id="values">
		<span class="am-about-values__label am-about-section-label--lg"><?php esc_html_e( 'Our Values', 'athen-marine' ); ?></span>
		<h2 class="am-about-values__title"><?php esc_html_e( 'What Guides Every Decision', 'athen-marine' ); ?></h2>

		<div class="am-trust__grid">
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-agility.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Agility', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'We adapt and execute with speed.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-growth.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Growth', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'Ambitious, driven and continuously raising the bar.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-trust.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Trust', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'We do what we say with integrity.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-partnership.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Partnership', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'We build lasting relationships through trust, responsiveness and shared growth.', 'athen-marine' ); ?></p>
			</div>
		</div>
	</section>

	<!-- ============================= ABOUT US ============================= -->
	<section class="am-about-story" id="story">
		<span class="am-about-values__label am-about-section-label--lg"><?php esc_html_e( 'About Us', 'athen-marine' ); ?></span>
		<h2 class="am-about-values__title"><?php esc_html_e( 'Athen Marine — Global Marine Lubricant Brand', 'athen-marine' ); ?></h2>

		<div class="am-about-block am-about-block--last">
			<div class="am-about-block__media">
				<div class="am-about-block__image"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/about-barrels.jpg" alt="<?php esc_attr_e( 'IFZA Towers, Athen Marine office in Dubai Silicon Oasis', 'athen-marine' ); ?>" class="am-img-cover"></div>
				<p class="am-about-block__caption"><?php esc_html_e( 'Athen Marine Lubricants LLC, IFZA Towers, 1802 & 2201, Silicon Oasis, Dubai, UAE', 'athen-marine' ); ?></p>
				<div class="am-about-people-boxes">
					<div class="am-about-people-box">
						<h3 class="am-about-people-box__title"><?php esc_html_e( 'Our Value Proposition', 'athen-marine' ); ?></h3>
						<p class="am-about-people-box__desc am-about-people-box__desc--icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-expertise2.png" alt="" class="am-about-people-box__icon"><?php esc_html_e( 'Technical Expertise', 'athen-marine' ); ?></p>
						<p class="am-about-people-box__desc am-about-people-box__desc--icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-supply2.png" alt="" class="am-about-people-box__icon"><?php esc_html_e( 'Reliable Supply', 'athen-marine' ); ?></p>
						<p class="am-about-people-box__desc am-about-people-box__desc--icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-support2.png" alt="" class="am-about-people-box__icon"><?php esc_html_e( 'Personalized Support', 'athen-marine' ); ?></p>
						<p class="am-about-people-box__desc am-about-people-box__desc--icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-partnership2.png" alt="" class="am-about-people-box__icon"><?php esc_html_e( 'Trusted Partnership', 'athen-marine' ); ?></p>
					</div>
					<div class="am-about-people-box am-about-people-box--people">
						<h3 class="am-about-people-box__title"><?php esc_html_e( 'Our People', 'athen-marine' ); ?></h3>
						<p class="am-about-people-box__desc"><?php esc_html_e( 'Talented professionals backed by industry veterans, combining fresh thinking with decades of maritime expertise.', 'athen-marine' ); ?></p>
						<p class="am-about-people-box__desc"><?php esc_html_e( 'People are at the heart of Athen Marine. Driven by Agility, Growth, Trust and Partnership, we work as one team to create value for our customers, and support their success wherever they operate.', 'athen-marine' ); ?></p>
					</div>
				</div>
			</div>
			<div class="am-about-block__text">
				<h3 class="am-about-block__heading"><?php esc_html_e( 'Our Story', 'athen-marine' ); ?></h3>
				<p><?php esc_html_e( 'The maritime industry moves on trust.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Trust that a vessel will perform. Trust that a critical delivery will arrive on time. Trust that the partner standing behind a product will be there when it matters most.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Athen Marine was built on that principle.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( "We saw an opportunity to create a different kind of marine lubricant company. One that combines deep technical expertise with operational reliability. One that values long-term partnerships over transactions. And one that understands that every product delivered ultimately carries our customer's reputation with it.", 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Today, Athen Marine delivers marine lubrication solutions to customers across global maritime markets, supported by an expanding international network and a strategic alliance with industry leading supply chain organizations and strong local partners in key maritime hubs. Our portfolio is backed by technical knowledge, dependable supply capabilities, and a commitment to supporting vessel operators wherever their journeys take them.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Yet our ambition extends beyond products and port coverage.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'We are building a company defined by expertise, integrity, and the confidence our customers place in us every day. A company that continually raises standards, challenges convention, and creates lasting value for the global maritime community.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Because in our industry, trust is not given. It is engineered, earned, and delivered.', 'athen-marine' ); ?></p>
				<p class="am-about-block__signature"><strong><?php esc_html_e( 'Athen Marine', 'athen-marine' ); ?></strong><br><em><?php esc_html_e( 'Intellectual Engineering. Delivering Trust.', 'athen-marine' ); ?></em></p>
			</div>
		</div>
	</section>

	<!-- ============================= OUR JOURNEY ============================= -->
	<section class="am-about-journey" id="journey">
		<span class="am-about-values__label am-about-section-label--lg"><?php esc_html_e( 'Our Journey', 'athen-marine' ); ?></span>
		<h2 class="am-about-values__title"><?php esc_html_e( 'Evolution', 'athen-marine' ); ?></h2>

		<div class="am-journey2">
			<div class="am-journey2__line"></div>

			<div class="am-journey2__item am-journey2__item--up">
				<div class="am-journey2__content">
					<span class="am-journey2__year">2020</span>
					<h3 class="am-journey2__title"><?php esc_html_e( 'The Beginning', 'athen-marine' ); ?></h3>
					<p class="am-journey2__desc"><?php esc_html_e( 'Athen Marine is born.', 'athen-marine' ); ?></p>
				</div>
				<div class="am-journey2__stem"></div>
				<div class="am-journey2__dot-wrap"><div class="am-journey2__dot"></div></div>
			</div>

			<div class="am-journey2__item am-journey2__item--down">
				<div class="am-journey2__dot-wrap"><div class="am-journey2__dot"></div></div>
				<div class="am-journey2__stem"></div>
				<div class="am-journey2__content">
					<span class="am-journey2__year">2021–22</span>
					<h3 class="am-journey2__title"><?php esc_html_e( 'Building Credibility', 'athen-marine' ); ?></h3>
					<p class="am-journey2__desc"><?php esc_html_e( 'Secured first OE approvals.', 'athen-marine' ); ?></p>
				</div>
			</div>

			<div class="am-journey2__item am-journey2__item--up">
				<div class="am-journey2__content">
					<span class="am-journey2__year">2023–24</span>
					<h3 class="am-journey2__title"><?php esc_html_e( 'Complete Portfolio Launch', 'athen-marine' ); ?></h3>
					<p class="am-journey2__desc"><?php esc_html_e( 'Introduced full range of marine lubricant solutions.', 'athen-marine' ); ?></p>
				</div>
				<div class="am-journey2__stem"></div>
				<div class="am-journey2__dot-wrap"><div class="am-journey2__dot"></div></div>
			</div>

			<div class="am-journey2__item am-journey2__item--down">
				<div class="am-journey2__dot-wrap"><div class="am-journey2__dot"></div></div>
				<div class="am-journey2__stem"></div>
				<div class="am-journey2__content">
					<span class="am-journey2__year">2025–26</span>
					<h3 class="am-journey2__title"><?php esc_html_e( 'Scaling Globally', 'athen-marine' ); ?></h3>
					<ul class="am-journey2__list">
						<li><?php esc_html_e( '5,000+ vessels serviced across 200+ ports', 'athen-marine' ); ?></li>
						<li><?php esc_html_e( 'Strategic Partnership with Legero', 'athen-marine' ); ?></li>
					</ul>
				</div>
			</div>

			<div class="am-journey2__item am-journey2__item--up">
				<div class="am-journey2__content">
					<span class="am-journey2__year">2027–28</span>
					<h3 class="am-journey2__title"><?php esc_html_e( 'Industry Recognition', 'athen-marine' ); ?></h3>
					<ul class="am-journey2__list">
						<li><?php esc_html_e( '100% OEM approved product portfolio', 'athen-marine' ); ?></li>
						<li><?php esc_html_e( 'Port coverage - 200+', 'athen-marine' ); ?></li>
					</ul>
				</div>
				<div class="am-journey2__stem"></div>
				<div class="am-journey2__dot-wrap"><div class="am-journey2__dot"></div></div>
			</div>
		</div>

		<div class="am-journey2__goal"><?php esc_html_e( 'By 2030 – A Global Force, 10% of Global Fleet Powered by Athen', 'athen-marine' ); ?></div>
	</section>

	<!-- ============================= BOARD MEMBERS ============================= -->
	<section class="am-about-values am-about-leadership" id="board">
		<span class="am-about-values__label am-about-section-label--lg"><?php esc_html_e( 'Board Members', 'athen-marine' ); ?></span>
		<h2 class="am-about-values__title"><?php esc_html_e( 'Architects of Growth', 'athen-marine' ); ?></h2>
		<p class="am-about-leadership__intro"><?php esc_html_e( 'Visionary entrepreneurs, investors and strategic partners to Athen Marine.', 'athen-marine' ); ?></p>

		<div class="am-about-values__grid am-about-leadership__grid am-about-leadership__grid--duo">
			<div class="am-about-leader am-about-leader--duo am-about-leader--duo-a">
				<div class="am-about-leader__photos">
					<img class="am-about-leader__avatar" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/leader-plune-duo.jpg" alt="<?php esc_attr_e( 'Gerrie Plune and Robert Plune', 'athen-marine' ); ?>">
				</div>
				<div class="am-about-value-card">
					<h3 class="am-about-value-card__title"><?php esc_html_e( 'Gerrie Plune & Robert Plune', 'athen-marine' ); ?></h3>
					<p class="am-about-value-card__desc"><?php esc_html_e( "Esteemed brothers and business leaders behind a leading global marine logistics enterprise, playing a pivotal role as Athen Marine's strategic partners, investors and logistics backbone.", 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-about-leader am-about-leader--duo am-about-leader--duo-b">
				<div class="am-about-leader__photos">
					<img class="am-about-leader__avatar" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/leader-jackcraig.jpg" alt="<?php esc_attr_e( 'Jack Craig', 'athen-marine' ); ?>">
				</div>
				<div class="am-about-value-card">
					<h3 class="am-about-value-card__title"><?php esc_html_e( 'Jack Craig', 'athen-marine' ); ?></h3>
					<span class="am-about-leader-card__role"><?php esc_html_e( 'Visionary Leader in Marine Lubrication Technology', 'athen-marine' ); ?></span>
					<p class="am-about-value-card__desc"><?php esc_html_e( 'Respected industry leader with extensive C-suite experience across global multinational organizations and deep technical expertise in marine lubricants.', 'athen-marine' ); ?></p>
				</div>
			</div>
		</div>
	</section>

	<?php /* ============================= LEADERSHIP COUNCIL (hidden for now) =============================
	<section class="am-about-values am-about-leadership" id="leadership">
		<span class="am-about-values__label am-about-section-label--lg"><?php esc_html_e( 'Leadership Council', 'athen-marine' ); ?></span>
		<h2 class="am-about-values__title"><?php esc_html_e( 'The Driving Force', 'athen-marine' ); ?></h2>

		<div class="am-about-values__grid am-about-values__grid--4">
			<div class="am-about-leader am-about-leader--round">
				<div class="am-about-leader__photos">
					<img class="am-about-leader__avatar" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/leader-santosh.jpg" alt="<?php esc_attr_e( 'Santosh Menon', 'athen-marine' ); ?>">
				</div>
				<div class="am-about-value-card">
					<h3 class="am-about-value-card__title"><?php esc_html_e( 'Santosh Menon', 'athen-marine' ); ?></h3>
					<span class="am-about-role-badge"><?php esc_html_e( 'CEO', 'athen-marine' ); ?></span>
					<p class="am-about-value-card__desc"><?php esc_html_e( 'A visionary leader with deep industry expertise and a trusted global network, influence and relationship across the marine community.', 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-about-leader am-about-leader--round">
				<div class="am-about-leader__photos">
					<img class="am-about-leader__avatar" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/leader-girlie.jpg" alt="<?php esc_attr_e( 'Girlie Ventura', 'athen-marine' ); ?>">
				</div>
				<div class="am-about-value-card">
					<h3 class="am-about-value-card__title"><?php esc_html_e( 'Girlie Ventura', 'athen-marine' ); ?></h3>
					<span class="am-about-role-badge"><?php esc_html_e( 'Finance', 'athen-marine' ); ?></span>
					<p class="am-about-value-card__desc"><?php esc_html_e( 'Seasoned finance professional with high energy and a passion for driving sustainable growth.', 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-about-leader am-about-leader--round">
				<div class="am-about-leader__photos">
					<img class="am-about-leader__avatar" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/leader-sathya.jpg" alt="<?php esc_attr_e( 'Sathya Prasad', 'athen-marine' ); ?>">
				</div>
				<div class="am-about-value-card">
					<h3 class="am-about-value-card__title"><?php esc_html_e( 'Sathya Prasad', 'athen-marine' ); ?></h3>
					<span class="am-about-role-badge"><?php esc_html_e( 'Sales & Marketing', 'athen-marine' ); ?></span>
					<p class="am-about-value-card__desc"><?php esc_html_e( 'A proven growth leader with extensive global experience, recognized for driving innovation, market expansion and business transformation.', 'athen-marine' ); ?></p>
				</div>
			</div>
			<div class="am-about-leader am-about-leader--round">
				<div class="am-about-leader__photos">
					<img class="am-about-leader__avatar" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/leader-liji.jpg" alt="<?php esc_attr_e( 'Liji Suresh', 'athen-marine' ); ?>">
				</div>
				<div class="am-about-value-card">
					<h3 class="am-about-value-card__title"><?php esc_html_e( 'Liji Suresh', 'athen-marine' ); ?></h3>
					<span class="am-about-role-badge"><?php esc_html_e( 'Operations', 'athen-marine' ); ?></span>
					<p class="am-about-value-card__desc"><?php esc_html_e( 'A seasoned marine lubricant operations leader bringing deep operational expertise and customer-centric leadership gained from leading global marine lubricant organizations.', 'athen-marine' ); ?></p>
				</div>
			</div>
		</div>
	</section>
	========================================================================= */ ?>

	<!-- ============================= CTA ============================= -->
	<section class="am-cta">
		<h2 class="am-cta__title"><?php esc_html_e( 'Partner With Athen Marine', 'athen-marine' ); ?></h2>
		<p class="am-cta__sub"><?php esc_html_e( 'Reliable lubrication solutions and dependable support, built for every port and voyage.', 'athen-marine' ); ?></p>
		<div class="am-cta__actions">
			<a href="/partner-with-us/" class="am-btn am-btn--offwhite" style="background:var(--offwhite);color:var(--pine);"><?php esc_html_e( 'Partner With Us', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
