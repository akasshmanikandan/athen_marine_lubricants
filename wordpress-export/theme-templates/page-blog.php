<?php /* Template Name: Blog */ ?>
<?php
/**
 * Blog page template for Athen Marine.
 */

get_header();

$am_blog_query = new WP_Query( array(
	'post_type'      => 'post',
	'posts_per_page' => -1,
	'orderby'        => 'date',
	'order'          => 'DESC',
) );
$am_blog_posts = $am_blog_query->posts;
$am_featured   = ! empty( $am_blog_posts ) ? array_shift( $am_blog_posts ) : null;
?>

<main id="main-content">

	<!-- ============================= BLOG HERO ============================= -->
	<section class="am-blog-hero">
		<span class="am-blog-hero__label"><?php esc_html_e( 'Insights & News', 'athen-marine' ); ?></span>
		<h1 class="am-blog-hero__title"><?php esc_html_e( 'Our Industry Expert Blog', 'athen-marine' ); ?></h1>
		<span class="am-blog-pill"><?php esc_html_e( 'Latest Articles', 'athen-marine' ); ?></span>
	</section>

	<?php if ( $am_featured ) : ?>
	<!-- ============================= FEATURED ARTICLE ============================= -->
	<section class="am-blog-featured-wrap">
		<a href="<?php echo esc_url( get_permalink( $am_featured ) ); ?>" class="am-blog-featured">
			<div class="am-blog-featured__image">
				<?php if ( has_post_thumbnail( $am_featured ) ) : ?>
					<?php echo get_the_post_thumbnail( $am_featured, 'large', array( 'alt' => esc_attr( get_the_title( $am_featured ) ) ) ); ?>
				<?php else : ?>
					<?php esc_html_e( '[Featured Image]', 'athen-marine' ); ?>
				<?php endif; ?>
			</div>
			<div class="am-blog-featured__body">
				<h2 class="am-blog-featured__title"><?php echo esc_html( get_the_title( $am_featured ) ); ?></h2>
				<p class="am-blog-featured__excerpt"><?php echo esc_html( get_the_excerpt( $am_featured ) ); ?></p>
				<span class="am-blog-featured__meta"><?php echo esc_html( get_the_date( 'F Y', $am_featured ) ); ?></span>
				<span class="am-blog-featured__link"><?php esc_html_e( 'Read Article →', 'athen-marine' ); ?></span>
			</div>
		</a>
	</section>
	<?php endif; ?>

	<!-- ============================= ARTICLES GRID ============================= -->
	<section class="am-blog-grid">
		<?php foreach ( $am_blog_posts as $am_post ) : ?>
		<article class="am-blog-card">
			<a href="<?php echo esc_url( get_permalink( $am_post ) ); ?>" class="am-blog-card__image">
				<?php if ( has_post_thumbnail( $am_post ) ) : ?>
					<?php echo get_the_post_thumbnail( $am_post, 'medium_large', array( 'alt' => esc_attr( get_the_title( $am_post ) ) ) ); ?>
				<?php else : ?>
					<?php esc_html_e( '[Article Image]', 'athen-marine' ); ?>
				<?php endif; ?>
			</a>
			<div class="am-blog-card__body">
				<h3 class="am-blog-card__title"><a href="<?php echo esc_url( get_permalink( $am_post ) ); ?>"><?php echo esc_html( get_the_title( $am_post ) ); ?></a></h3>
				<p class="am-blog-card__excerpt"><?php echo esc_html( get_the_excerpt( $am_post ) ); ?></p>
				<div class="am-blog-card__footer">
					<span class="am-blog-card__date"><?php echo esc_html( get_the_date( 'F Y', $am_post ) ); ?></span>
					<a href="<?php echo esc_url( get_permalink( $am_post ) ); ?>" class="am-blog-card__link"><?php esc_html_e( 'Read →', 'athen-marine' ); ?></a>
				</div>
			</div>
		</article>
		<?php endforeach; ?>
	</section>

	<!-- ============================= NEWSLETTER ============================= -->
	<section class="am-blog-newsletter">
		<div class="am-blog-newsletter__text">
			<h2 class="am-blog-newsletter__title"><?php esc_html_e( 'Stay ahead of maritime lubrication insights.', 'athen-marine' ); ?></h2>
			<p class="am-blog-newsletter__sub"><?php esc_html_e( 'Monthly updates on products, regulations and fleet tips.', 'athen-marine' ); ?></p>
		</div>
		<form class="am-blog-newsletter__form" method="post" action="">
			<input type="email" class="am-blog-newsletter__input" placeholder="<?php esc_attr_e( 'Enter your email address', 'athen-marine' ); ?>" required>
			<button type="submit" class="am-blog-newsletter__btn"><?php esc_html_e( 'Subscribe', 'athen-marine' ); ?></button>
		</form>
	</section>

</main>

<?php
get_footer();
