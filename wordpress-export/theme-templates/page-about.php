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

	<!-- ============================= WHO WE ARE ============================= -->
	<?php include get_template_directory() . '/parts/about-story.php'; ?>

	<?php $am_current = ''; include get_template_directory() . '/parts/about-links.php'; ?>

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
