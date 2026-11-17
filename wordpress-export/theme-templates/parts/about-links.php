<?php
// "Explore" cards linking to the About sub-pages. Set $am_current (slug) to hide the current page.
$am_about_items = array(
	array( 'slug' => 'vision',        'label' => 'Our Vision',     'blurb' => 'To become the most trusted international marine lubricant brand.' ),
	array( 'slug' => 'mission',       'label' => 'Our Mission',    'blurb' => 'To empower the global maritime industry through reliable lubrication solutions.' ),
	array( 'slug' => 'values',        'label' => 'Our Values',     'blurb' => 'What guides every decision we make.' ),
	array( 'slug' => 'our-journey',   'label' => 'Our Journey',    'blurb' => 'The milestones behind Athen Marine and where we are headed.' ),
	array( 'slug' => 'board-members', 'label' => 'Board Members',  'blurb' => 'The leaders and partners behind Athen Marine.' ),
);
$am_current = isset( $am_current ) ? $am_current : '';
?>
<section class="am-sub-hub">
	<span class="am-sub-hub__label"><?php esc_html_e( 'Explore About Us', 'athen-marine' ); ?></span>
	<div class="am-sub-hub__grid">
		<?php foreach ( $am_about_items as $it ) : if ( $it['slug'] === $am_current ) { continue; } ?>
		<a class="am-sub-hub__card" href="/about-us/<?php echo esc_attr( $it['slug'] ); ?>/">
			<h3 class="am-sub-hub__title"><?php echo esc_html( $it['label'] ); ?></h3>
			<p class="am-sub-hub__blurb"><?php echo esc_html( $it['blurb'] ); ?></p>
			<span class="am-sub-hub__go"><?php esc_html_e( 'Read more →', 'athen-marine' ); ?></span>
		</a>
		<?php endforeach; ?>
	</div>
</section>
