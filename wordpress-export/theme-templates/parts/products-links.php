<?php
// Cards linking to each product grade page. Set $am_current (slug) to hide the current one.
$am_prod_items = array(
	array( 'slug' => 'main-grades',      'label' => 'Main Grades',      'blurb' => 'Cylinder oils, system oils and trunk piston engine oils for main engines.' ),
	array( 'slug' => 'secondary-grades', 'label' => 'Secondary Grades', 'blurb' => 'Gear, hydraulic, compressor, turbine, refrigeration and other auxiliary lubricants.' ),
	array( 'slug' => 'synthetics',       'label' => 'Synthetics',       'blurb' => 'Synthetic lubricants for demanding marine applications.' ),
	array( 'slug' => 'greases',          'label' => 'Greases',          'blurb' => 'Lithium, lithium complex and calcium sulfonate complex greases.' ),
	array( 'slug' => 'eal',              'label' => 'EAL',              'blurb' => 'Environmentally acceptable lubricants: hydraulic fluids, gear oils, sterntube oils and grease.' ),
);
$am_current = isset( $am_current ) ? $am_current : '';
?>
<section class="am-sub-hub">
	<span class="am-sub-hub__label"><?php echo $am_current ? esc_html__( 'Other Product Grades', 'athen-marine' ) : esc_html__( 'Our Product Grades', 'athen-marine' ); ?></span>
	<div class="am-sub-hub__grid">
		<?php foreach ( $am_prod_items as $it ) : if ( $it['slug'] === $am_current ) { continue; } ?>
		<a class="am-sub-hub__card" href="/products/<?php echo esc_attr( $it['slug'] ); ?>/">
			<h3 class="am-sub-hub__title"><?php echo esc_html( $it['label'] ); ?></h3>
			<p class="am-sub-hub__blurb"><?php echo esc_html( $it['blurb'] ); ?></p>
			<span class="am-sub-hub__go"><?php esc_html_e( 'View products →', 'athen-marine' ); ?></span>
		</a>
		<?php endforeach; ?>
	</div>
</section>
