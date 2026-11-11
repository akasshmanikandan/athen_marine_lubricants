<?php
/**
 * Fallback template (required by WordPress for a standalone theme).
 * Used for anything that isn't the front page: single posts, pages,
 * archives, search results, and 404s.
 */

get_header();
?>

<main id="main-content" class="am-generic">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post();

		if ( is_singular( 'post' ) ) :
	?>

	<!-- ============================= POST HERO ============================= -->
	<section class="am-post-hero">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'full', array( 'class' => 'am-post-hero__img', 'alt' => esc_attr( get_the_title() ) ) ); ?>
		<?php endif; ?>
		<div class="am-post-hero__overlay"></div>
		<div class="am-post-hero__content">
			<h1 class="am-post-hero__title"><?php the_title(); ?></h1>
		</div>
	</section>

	<div class="am-container am-post-layout">
		<article <?php post_class( 'am-post-main' ); ?>>
			<a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>" class="am-generic__back">&larr; <?php esc_html_e( 'Back to Insights', 'athen-marine' ); ?></a>
			<p class="am-generic__meta">
				<span class="am-generic__meta-date"><?php echo esc_html( get_the_date( 'F j, Y' ) ); ?></span>
			</p>
			<div class="am-generic__content">
				<?php the_content(); ?>
			</div>
			<div class="am-post-share">
				<span class="am-post-share__label"><?php esc_html_e( 'Share this article', 'athen-marine' ); ?></span>
				<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo rawurlencode( get_permalink() ); ?>" target="_blank" rel="noopener noreferrer" class="am-post-share__btn" aria-label="Facebook">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>
				</a>
				<a href="https://twitter.com/intent/tweet?url=<?php echo rawurlencode( get_permalink() ); ?>&amp;text=<?php echo rawurlencode( get_the_title() ); ?>" target="_blank" rel="noopener noreferrer" class="am-post-share__btn" aria-label="X / Twitter">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.68L23 22h-6.9l-5.4-6.76L4.4 22H1.3l8.1-9.27L1 2h7.1l4.9 6.2L18.9 2zm-1.2 18h1.7L7.4 4H5.6l12.1 16z"/></svg>
				</a>
				<a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo rawurlencode( get_permalink() ); ?>" target="_blank" rel="noopener noreferrer" class="am-post-share__btn" aria-label="LinkedIn">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z"/></svg>
				</a>
			</div>
		</article>

		<aside class="am-post-sidebar">
			<h3 class="am-post-sidebar__title"><?php esc_html_e( 'Recent Posts', 'athen-marine' ); ?></h3>
			<?php
			$am_recent = new WP_Query( array(
				'post_type'      => 'post',
				'posts_per_page' => 4,
				'post__not_in'   => array( get_the_ID() ),
				'orderby'        => 'date',
				'order'          => 'DESC',
			) );
			if ( $am_recent->have_posts() ) :
				while ( $am_recent->have_posts() ) : $am_recent->the_post();
			?>
			<a href="<?php the_permalink(); ?>" class="am-post-sidebar__item">
				<?php if ( has_post_thumbnail() ) : ?>
				<div class="am-post-sidebar__thumb"><?php the_post_thumbnail( 'thumbnail' ); ?></div>
				<?php endif; ?>
				<div class="am-post-sidebar__body">
					<span class="am-post-sidebar__item-title"><?php the_title(); ?></span>
					<span class="am-post-sidebar__date"><?php echo esc_html( get_the_date( 'F j, Y' ) ); ?></span>
				</div>
			</a>
			<?php
				endwhile;
				wp_reset_postdata();
			endif;
			?>
		</aside>
	</div>

	<?php else : ?>

	<div class="am-container am-generic__inner">
		<article <?php post_class( 'am-generic__article' ); ?>>
			<h1 class="am-generic__title"><?php the_title(); ?></h1>
			<div class="am-generic__content">
				<?php the_content(); ?>
			</div>
		</article>
	</div>

	<?php endif; ?>

	<?php endwhile; else : ?>

	<div class="am-container am-generic__inner">
		<h1 class="am-generic__title"><?php esc_html_e( 'Nothing Found', 'athen-marine' ); ?></h1>
		<p><?php esc_html_e( 'The page you are looking for could not be found.', 'athen-marine' ); ?></p>
	</div>

	<?php endif; ?>
</main>

<?php
get_footer();
