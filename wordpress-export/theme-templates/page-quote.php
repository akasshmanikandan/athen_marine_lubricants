<?php
/* Template Name: Request Quote */

$sent = false;

if ( $_SERVER['REQUEST_METHOD'] === 'POST' && isset( $_POST['am_quote_nonce'] ) ) {
	if ( wp_verify_nonce( $_POST['am_quote_nonce'], 'am_quote_form' ) ) {
		$company_name   = sanitize_text_field( $_POST['company_name'] );
		$contact_person = sanitize_text_field( $_POST['contact_person'] );
		$email          = sanitize_email( $_POST['email'] );
		$phone          = sanitize_text_field( $_POST['phone'] );
		$ports          = sanitize_text_field( $_POST['ports'] );
		$products       = isset( $_POST['products'] ) ? array_map( 'sanitize_text_field', (array) $_POST['products'] ) : array();
		$message        = sanitize_textarea_field( $_POST['message'] );

		wp_mail(
			'support@athenmarine.com',
			'New Quote Request - Athen Marine',
			"Company Name: $company_name\nContact Person: $contact_person\nEmail: $email\nContact Number: $phone\nPort/s: $ports\nProducts Needed: " . implode( ', ', $products ) . "\n\nMessage:\n$message",
			array( 'Reply-To: ' . $email )
		);
		$sent = true;
	}
}

get_header();
?>

<main id="main-content">

	<!-- ============================= QUOTE HERO + FORM ============================= -->
	<section class="am-contact-hero">
		<div class="am-contact-hero__accent-line"></div>
		<span class="am-contact-hero__watermark">11</span>

		<div class="am-contact-hero__grid">
			<div class="am-contact-hero__content">
				<span class="am-contact-hero__label"><?php esc_html_e( 'Get Started', 'athen-marine' ); ?></span>
				<h1 class="am-contact-hero__title"><?php esc_html_e( 'Request a Quote', 'athen-marine' ); ?></h1>
				<p class="am-contact-hero__subtitle"><?php esc_html_e( 'Tell us about your fleet and lubrication needs, and our team will prepare a tailored quote — backed by OEM-approved products and dependable supply across 20+ countries.', 'athen-marine' ); ?></p>

				<div class="am-contact-hero__quickinfo">
					<span class="am-contact-info__label"><?php esc_html_e( 'Chat or Email', 'athen-marine' ); ?></span>
					<p class="am-contact-info__primary"><a class="am-wa-chat" href="https://wa.me/971502106852" aria-label="Chat with our support on WhatsApp" title="Chat with our support on WhatsApp" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.4 15.1L2 22l5.05-1.6A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.25.7-1.45 1.35-2 1.4-.55.1-1.2.15-3.9-.9-3.3-1.3-5.4-4.6-5.55-4.8-.15-.2-1.3-1.7-1.3-3.3s.85-2.35 1.15-2.7c.3-.3.65-.4.85-.4h.6c.2 0 .45-.05.7.55.25.65.85 2.25.95 2.4.1.15.15.35.05.55-.1.2-.15.35-.3.55l-.45.5c-.15.15-.3.3-.15.6.15.3.7 1.15 1.5 1.85 1.05.9 1.9 1.2 2.2 1.3.3.15.45.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.25.65-.15.3.1 1.7.8 2 .95.3.15.5.2.55.3.1.1.1.65-.15 1.35z"/></svg><span><?php esc_html_e( 'Chat with our support', 'athen-marine' ); ?></span></a></p>
					<p class="am-contact-info__secondary am-contact-line"><a href="tel:+971502106852"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/></svg><span>+971 50 210 6852</span></a></p>
					<p class="am-contact-info__secondary am-contact-line"><a href="mailto:support@athenmarine.com"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.2"/><path d="m3.5 7 8.5 6.5L20.5 7"/></svg><span>support@athenmarine.com</span></a></p>
				</div>
			</div>

			<div class="am-contact-card">

				<?php if ( $sent ) : ?>
					<p class="am-contact-success"><?php esc_html_e( 'Thank you! Your quote request has been received — our team will get back to you shortly.', 'athen-marine' ); ?></p>
				<?php endif; ?>

				<form class="am-contact-form" method="post" action="">
					<?php wp_nonce_field( 'am_quote_form', 'am_quote_nonce' ); ?>

					<span class="am-contact-card__label"><?php esc_html_e( 'Quote Request', 'athen-marine' ); ?></span>
					<p class="am-contact-card__intro"><?php esc_html_e( 'Share a few details about what you need and we\'ll follow up with pricing and availability.', 'athen-marine' ); ?></p>

					<div class="am-contact-card__row">
						<input type="text" name="company_name" class="am-contact-input" placeholder="<?php esc_attr_e( 'Company Name *', 'athen-marine' ); ?>" required>
						<input type="text" name="contact_person" class="am-contact-input" placeholder="<?php esc_attr_e( 'Contact Person *', 'athen-marine' ); ?>" required>
					</div>
					<div class="am-contact-card__row">
						<input type="email" name="email" class="am-contact-input" placeholder="<?php esc_attr_e( 'Email Address *', 'athen-marine' ); ?>" required>
						<input type="tel" name="phone" class="am-contact-input" placeholder="<?php esc_attr_e( 'Contact Number *', 'athen-marine' ); ?>" required>
					</div>
					<input type="text" name="ports" class="am-contact-input" placeholder="<?php esc_attr_e( 'Port/s *', 'athen-marine' ); ?>" required>

					<span class="am-contact-card__label" style="margin-top:8px;"><?php esc_html_e( 'Products Needed', 'athen-marine' ); ?></span>
					<div class="am-quote-products">
						<label class="am-contact-checkbox-row"><input type="checkbox" name="products[]" value="Main Grades" class="am-contact-checkbox"><span><?php esc_html_e( 'Main Grades', 'athen-marine' ); ?></span></label>
						<label class="am-contact-checkbox-row"><input type="checkbox" name="products[]" value="Secondary Grades" class="am-contact-checkbox"><span><?php esc_html_e( 'Secondary Grades', 'athen-marine' ); ?></span></label>
						<label class="am-contact-checkbox-row"><input type="checkbox" name="products[]" value="Synthetics" class="am-contact-checkbox"><span><?php esc_html_e( 'Synthetics', 'athen-marine' ); ?></span></label>
						<label class="am-contact-checkbox-row"><input type="checkbox" name="products[]" value="Greases" class="am-contact-checkbox"><span><?php esc_html_e( 'Greases', 'athen-marine' ); ?></span></label>
						<label class="am-contact-checkbox-row"><input type="checkbox" name="products[]" value="EALs" class="am-contact-checkbox"><span><?php esc_html_e( 'EALs (Environmentally Acceptable Lubricants)', 'athen-marine' ); ?></span></label>
					</div>

					<textarea name="message" class="am-contact-textarea" placeholder="<?php esc_attr_e( 'Message *', 'athen-marine' ); ?>" required></textarea>

					<div class="am-contact-card__footer">
						<p class="am-contact-privacy"><?php esc_html_e( '* Mandatory fields. This site is protected and your data is safe with Athen Marine.', 'athen-marine' ); ?></p>
						<button type="submit" class="am-contact-submit"><?php esc_html_e( 'Send Message', 'athen-marine' ); ?> <span aria-hidden="true">&rarr;</span></button>
					</div>
				</form>
			</div>
		</div>
	</section>

</main>

<?php
get_footer();
