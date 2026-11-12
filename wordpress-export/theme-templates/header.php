<?php
/**
 * The header for the Athen Marine theme.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script>
	if ( window.location.hash ) {
		document.documentElement.style.scrollBehavior = 'auto';
		window.addEventListener( 'load', function () {
			window.setTimeout( function () {
				document.documentElement.style.scrollBehavior = '';
			}, 100 );
		} );
	}
	</script>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?> id="top">
<?php wp_body_open(); ?>

<div class="am-topbar">
	<div class="am-topbar__inner">
		<div class="am-topbar__contact">
			<a href="mailto:support@athenmarine.com">support@athenmarine.com</a>
			<span class="am-dot">&middot;</span>
			<a href="tel:+971502106852">+971 50 210 6852</a>
		</div>
		<div class="am-topbar__social">
			<a href="https://www.linkedin.com/company/almatr-marine-lubricants-llc" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<span>&middot;</span>
			<a href="https://www.instagram.com/athen_marine/" target="_blank" rel="noopener noreferrer">Instagram</a>
			<span>&middot;</span>
			<a href="https://www.facebook.com/profile.php?id=61574498562214" target="_blank" rel="noopener noreferrer">Facebook</a>
		</div>
	</div>
</div>

<div class="am-ticker">
	<div class="am-ticker__badge">
		<span class="am-ticker__dot"></span>
		LIVE
	</div>
	<div class="am-ticker__track">
		<div class="am-ticker__content">
			<span>LIVE SHIPPING &amp; ENERGY NEWS &#9733; Technical support available through Athen Assure &#9733; 20+ countries, 200+ ports served worldwide &#9733; Strategic partnership with Legero International Group B.V. &#9733;</span>
			<span>LIVE SHIPPING &amp; ENERGY NEWS &#9733; Technical support available through Athen Assure &#9733; 20+ countries, 200+ ports served worldwide &#9733; Strategic partnership with Legero International Group B.V. &#9733;</span>
		</div>
	</div>
</div>

<header class="am-nav" id="am-nav">
	<div class="am-nav__inner">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="am-logo">
			<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" alt="<?php esc_attr_e( 'Athen Marine', 'athen-marine' ); ?>" class="am-logo__img">
		</a>

		<?php
		$am_current_url = $_SERVER['REQUEST_URI'];
		$am_nav_items   = array(
			array(
				'label'  => __( 'Home', 'athen-marine' ),
				'url'    => '/',
				'active' => ( $am_current_url === '/' ),
				'mega'   => array(
					array( 'label' => __( 'Find Your Lubricant', 'athen-marine' ), 'url' => '/#finder' ),
					array( 'label' => __( 'Products Overview', 'athen-marine' ), 'url' => '/#products' ),
					array( 'label' => __( 'Why Choose Athen', 'athen-marine' ), 'url' => '/#vision' ),
					array( 'label' => __( 'FAQs', 'athen-marine' ), 'url' => '/#faq' ),
				),
			),
			array(
				'label'  => __( 'About Us', 'athen-marine' ),
				'url'    => '/about-us',
				'active' => ( strpos( $am_current_url, 'about' ) !== false ),
				'mega'   => array(
					array( 'label' => __( 'Our Vision', 'athen-marine' ), 'url' => '/about-us/#vision' ),
					array( 'label' => __( 'Our Mission', 'athen-marine' ), 'url' => '/about-us/#mission' ),
					array( 'label' => __( 'Our Values', 'athen-marine' ), 'url' => '/about-us/#values' ),
					array( 'label' => __( 'Our Story', 'athen-marine' ), 'url' => '/about-us/#story' ),
					array( 'label' => __( 'Our Journey', 'athen-marine' ), 'url' => '/about-us/#journey' ),
					array( 'label' => __( 'Board Members', 'athen-marine' ), 'url' => '/about-us/#board' ),
				),
			),
			array(
				'label'  => __( 'Services', 'athen-marine' ),
				'url'    => '/services',
				'active' => ( strpos( $am_current_url, 'services' ) !== false ),
				'mega'   => array(
					array( 'label' => __( 'Technical Consultation & Advisory', 'athen-marine' ), 'url' => '/services/#consultation' ),
					array( 'label' => __( 'Lube Oil Analysis & Condition Monitoring', 'athen-marine' ), 'url' => '/services/#oil-analysis' ),
					array( 'label' => __( 'Lube Oil Compatibility & Equivalent Solutions', 'athen-marine' ), 'url' => '/services/#compatibility' ),
					array( 'label' => __( 'Onboard Inspections & Ship Visits', 'athen-marine' ), 'url' => '/services/#inspections' ),
				),
			),
			array(
				'label'  => __( 'Products', 'athen-marine' ),
				'url'    => '/products/',
				'active' => ( strpos( $am_current_url, 'products' ) !== false ),
				'mega'   => array(
					array( 'label' => __( 'Main Grades', 'athen-marine' ), 'url' => '/products/#main-grades' ),
					array( 'label' => __( 'Secondary Grades', 'athen-marine' ), 'url' => '/products/#secondary-grades' ),
					array( 'label' => __( 'Synthetics', 'athen-marine' ), 'url' => '/products/#synthetics' ),
					array( 'label' => __( 'Greases', 'athen-marine' ), 'url' => '/products/#greases' ),
					array( 'label' => __( 'EAL', 'athen-marine' ), 'url' => '/products/#eal' ),
					array( 'label' => __( 'Product Catalog', 'athen-marine' ), 'url' => '/product-catalog/' ),
					array( 'label' => __( 'Certificates', 'athen-marine' ), 'url' => '/certificates/' ),
				),
			),
			array(
				'label'  => __( 'Delivery Network', 'athen-marine' ),
				'url'    => '/delivery-network',
				'active' => ( strpos( $am_current_url, 'delivery' ) !== false ),
				'mega'   => array(
					array( 'label' => __( 'Our Reach', 'athen-marine' ), 'url' => '/delivery-network/#reach' ),
					array( 'label' => __( 'World Map & Ports', 'athen-marine' ), 'url' => '/delivery-network/#map' ),
					array( 'label' => __( 'Global Locations', 'athen-marine' ), 'url' => '/delivery-network/#locations' ),
					// Hidden until Egypt page is ready to show: array( 'label' => __( 'Egypt Coverage', 'athen-marine' ), 'url' => '/egypt/' ),
				),
			),
			array(
				'label'  => __( 'Contact', 'athen-marine' ),
				'url'    => '/contact',
				'active' => ( strpos( $am_current_url, 'contact' ) !== false ),
				'mega'   => null,
			),
			array(
				'label'  => __( 'Careers', 'athen-marine' ),
				'url'    => '/careers/',
				'active' => ( strpos( $am_current_url, 'careers' ) !== false ),
				'mega'   => null,
			),
			array(
				'label'  => __( 'Blog', 'athen-marine' ),
				'url'    => '/blog/',
				'active' => ( strpos( $am_current_url, 'blog' ) !== false ),
				'mega'   => null,
			),
		);
		?>
		<ul id="am-nav-links" class="am-nav__links">
			<?php foreach ( $am_nav_items as $am_item ) : ?>
				<li class="am-nav__item<?php echo $am_item['mega'] ? ' am-nav__item--has-mega' : ''; ?>">
					<a href="<?php echo esc_url( $am_item['url'] ); ?>" <?php echo $am_item['active'] ? 'class="is-active"' : ''; ?>><?php echo esc_html( $am_item['label'] ); ?></a>
					<?php if ( $am_item['mega'] ) : ?>
						<div class="am-mega">
							<ul class="am-mega__list">
								<?php foreach ( $am_item['mega'] as $am_sub ) : ?>
									<li><a href="<?php echo esc_url( $am_sub['url'] ); ?>" class="am-mega__link"><?php echo esc_html( $am_sub['label'] ); ?></a></li>
								<?php endforeach; ?>
							</ul>
						</div>
					<?php endif; ?>
				</li>
			<?php endforeach; ?>
		</ul>

		<a href="/request-quote/" class="am-btn am-btn--pine am-nav__cta"><?php esc_html_e( 'Request Quote', 'athen-marine' ); ?></a>

		<button class="am-hamburger" id="am-hamburger" aria-label="<?php esc_attr_e( 'Toggle menu', 'athen-marine' ); ?>" aria-expanded="false" aria-controls="am-nav-links">
			<span></span><span></span><span></span>
		</button>
	</div>
</header>
