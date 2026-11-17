<?php /* Template Name: Service Sub-page */ ?>
<?php
/**
 * One Athen Assure service per page.
 */
get_header();

$am_slug     = basename( rtrim( parse_url( $_SERVER['REQUEST_URI'], PHP_URL_PATH ), '/' ) );
$am_services = include get_template_directory() . '/parts/services-data.php';
$am_sv       = $am_services[0];
foreach ( $am_services as $sv ) { if ( $sv['slug'] === $am_slug ) { $am_sv = $sv; } }
?>

<main id="main-content" class="am-sub-page">

	<section class="am-sub-hero">
		<nav class="am-sub-hero__crumbs" aria-label="Breadcrumb"><a href="/services/"><?php esc_html_e( 'Services', 'athen-marine' ); ?></a><span>/</span><span><?php echo esc_html( $am_sv['title'] ); ?></span></nav>
		<div class="am-sub-hero__icon"><?php echo $am_sv['icon']; ?></div>
		<h1 class="am-sub-hero__title"><?php echo esc_html( $am_sv['title'] ); ?></h1>
		<p class="am-sub-hero__sub"><?php echo esc_html( $am_sv['desc'] ); ?></p>
	</section>

	<section class="am-sub-points">
		<h2 class="am-sub-points__lead"><?php esc_html_e( 'What this service covers', 'athen-marine' ); ?></h2>
		<ul class="am-sub-points__list">
			<?php foreach ( $am_sv['tags'] as $tg ) : ?><li><?php echo esc_html( $tg ); ?></li><?php endforeach; ?>
		</ul>
		<a href="/contact/" class="am-btn am-btn--pine am-sub-points__cta"><?php esc_html_e( 'Enquire About This Service', 'athen-marine' ); ?></a>
	</section>

	<?php include get_template_directory() . '/parts/services-process.php'; ?>

	<section class="am-sub-hub">
		<span class="am-sub-hub__label"><?php esc_html_e( 'Other Athen Assure Services', 'athen-marine' ); ?></span>
		<div class="am-sub-hub__grid">
			<?php foreach ( $am_services as $sv ) : if ( $sv['slug'] === $am_sv['slug'] ) { continue; } ?>
			<a class="am-sub-hub__card" href="/services/<?php echo esc_attr( $sv['slug'] ); ?>/">
				<h3 class="am-sub-hub__title"><?php echo esc_html( $sv['title'] ); ?></h3>
				<p class="am-sub-hub__blurb"><?php echo esc_html( $sv['desc'] ); ?></p>
				<span class="am-sub-hub__go"><?php esc_html_e( 'Read more →', 'athen-marine' ); ?></span>
			</a>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="am-svc-cta">
		<h2 class="am-svc-cta__title"><?php esc_html_e( 'Request Technical Support', 'athen-marine' ); ?></h2>
		<p class="am-svc-cta__sub"><?php esc_html_e( 'Connect with our technical team for tailored lubrication solutions.', 'athen-marine' ); ?></p>
		<a href="/contact/" class="am-svc-cta__btn"><?php esc_html_e( 'Get In Touch', 'athen-marine' ); ?></a>
	</section>

</main>

<?php
get_footer();
