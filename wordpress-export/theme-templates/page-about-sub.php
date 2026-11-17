<?php /* Template Name: About Sub-page */ ?>
<?php
/**
 * One About Us option per page (Vision, Mission, Values, Journey, Board Members).
 */
get_header();

$am_slug = basename( rtrim( parse_url( $_SERVER['REQUEST_URI'], PHP_URL_PATH ), '/' ) );
$am_pages = array(
	'vision' => array( 'title' => 'Our Vision', 'sub' => "Where we're headed", 'part' => 'vision',
		'lead' => 'Recognized globally for', 'points' => array( 'Technical Excellence', 'Dependable Supply', 'Customer relationships that go beyond products' ) ),
	'mission' => array( 'title' => 'Our Mission', 'sub' => 'Why we exist', 'part' => 'mission',
		'lead' => 'Being a trusted partner that delivers', 'points' => array( 'Assurance', 'Expertise', 'Dependable support across every port and voyage' ) ),
	'values' => array( 'title' => 'Our Values', 'sub' => 'What guides every decision', 'part' => 'values' ),
	'our-journey' => array( 'title' => 'Our Journey', 'sub' => '', 'part' => 'journey' ),
	'board-members' => array( 'title' => 'Board Members', 'sub' => 'Architects of Growth', 'part' => 'board' ),
);
$am_p = isset( $am_pages[ $am_slug ] ) ? $am_pages[ $am_slug ] : $am_pages['vision'];
$am_current = $am_slug;
?>

<main id="main-content" class="am-sub-page">

	<section class="am-sub-hero">
		<nav class="am-sub-hero__crumbs" aria-label="Breadcrumb"><a href="/about-us/"><?php esc_html_e( 'About Us', 'athen-marine' ); ?></a><span>/</span><span><?php echo esc_html( $am_p['title'] ); ?></span></nav>
		<h1 class="am-sub-hero__title"><?php echo esc_html( $am_p['title'] ); ?></h1>
		<?php if ( $am_p['sub'] ) : ?><p class="am-sub-hero__sub"><?php echo esc_html( $am_p['sub'] ); ?></p><?php endif; ?>
	</section>

	<?php include get_template_directory() . '/parts/about-' . $am_p['part'] . '.php'; ?>

	<?php if ( ! empty( $am_p['points'] ) ) : ?>
	<section class="am-sub-points">
		<h2 class="am-sub-points__lead"><?php echo esc_html( $am_p['lead'] ); ?></h2>
		<ul class="am-sub-points__list">
			<?php foreach ( $am_p['points'] as $pt ) : ?><li><?php echo esc_html( $pt ); ?></li><?php endforeach; ?>
		</ul>
	</section>
	<?php endif; ?>

	<?php include get_template_directory() . '/parts/about-links.php'; ?>

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
