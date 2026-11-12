<?php
/**
 * The footer for the Athen Marine theme.
 */
?>
	<footer class="am-footer" id="contact">
		<div class="am-footer__inner">
			<div class="am-footer__col">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="am-logo">ATHEN<span>MARINE</span></a>
				<p class="am-footer__tagline"><?php esc_html_e( 'Marine lubricant solutions and technical support for the global maritime industry, across 20+ countries and 200+ ports.', 'athen-marine' ); ?></p>
			</div>

			<div class="am-footer__col">
				<h4><?php esc_html_e( 'NAVIGATION', 'athen-marine' ); ?></h4>
				<ul>
					<li><a href="/"><?php esc_html_e( 'Home', 'athen-marine' ); ?></a></li>
					<li><a href="/about-us"><?php esc_html_e( 'About Us', 'athen-marine' ); ?></a></li>
					<li><a href="/services"><?php esc_html_e( 'Services', 'athen-marine' ); ?></a></li>
					<li><a href="/products"><?php esc_html_e( 'Products', 'athen-marine' ); ?></a></li>
					<li><a href="/delivery-network"><?php esc_html_e( 'Delivery Network', 'athen-marine' ); ?></a></li>
					<?php /* Hidden until Egypt page is ready to show: <li><a href="/egypt"><?php esc_html_e( 'Egypt', 'athen-marine' ); ?></a></li> */ ?>
					<li><a href="/contact"><?php esc_html_e( 'Contact', 'athen-marine' ); ?></a></li>
					<li><a href="/blog"><?php esc_html_e( 'Blog', 'athen-marine' ); ?></a></li>
				</ul>
			</div>

			<div class="am-footer__col">
				<h4><?php esc_html_e( 'PRODUCTS & RESOURCES', 'athen-marine' ); ?></h4>
				<ul>
					<li><a href="/products/#main-grades"><?php esc_html_e( 'Main Grades', 'athen-marine' ); ?></a></li>
					<li><a href="/products/#secondary-grades"><?php esc_html_e( 'Secondary Grades', 'athen-marine' ); ?></a></li>
					<li><a href="/products/#synthetics"><?php esc_html_e( 'Synthetics', 'athen-marine' ); ?></a></li>
					<li><a href="/products/#eal"><?php esc_html_e( 'EAL', 'athen-marine' ); ?></a></li>
					<li><a href="/products/#greases"><?php esc_html_e( 'Greases', 'athen-marine' ); ?></a></li>
					<li><a href="/industries"><?php esc_html_e( 'Industries We Support', 'athen-marine' ); ?></a></li>
					<li><a href="/glossary"><?php esc_html_e( 'Glossary', 'athen-marine' ); ?></a></li>
				</ul>
			</div>

			<div class="am-footer__col">
				<h4><?php esc_html_e( 'CONTACT US', 'athen-marine' ); ?></h4>
				<address>
					Dubai, United Arab Emirates<br>
					<a href="tel:+971502106852">+971 50 210 6852</a><br>
					<a href="mailto:support@athenmarine.com">support@athenmarine.com</a>
				</address>
				<div class="am-footer__social">
					<a href="https://www.linkedin.com/company/almatr-marine-lubricants-llc" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<span>&middot;</span>
					<a href="https://www.instagram.com/athen_marine/" target="_blank" rel="noopener noreferrer">Instagram</a>
					<span>&middot;</span>
					<a href="https://www.facebook.com/profile.php?id=61574498562214" target="_blank" rel="noopener noreferrer">Facebook</a>
				</div>
			</div>
		</div>

		<div class="am-footer__bottom">
			<span>&copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?> Athen Marine Lubricants L.L.C. <?php esc_html_e( 'All rights reserved.', 'athen-marine' ); ?></span>
			<span><a href="/privacy-policy/"><?php esc_html_e( 'Privacy Policy', 'athen-marine' ); ?></a></span>
			<span><a href="/terms-and-conditions/"><?php esc_html_e( 'Terms & Conditions', 'athen-marine' ); ?></a></span>
			<span><?php esc_html_e( 'Crafted for maritime excellence.', 'athen-marine' ); ?></span>
		</div>
	</footer>

<?php wp_footer(); ?>
</body>
</html>
