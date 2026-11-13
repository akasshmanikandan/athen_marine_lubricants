<?php
/* Template Name: Contact */

$sent = false;

if ( $_SERVER['REQUEST_METHOD'] === 'POST' && isset( $_POST['am_contact_nonce'] ) ) {
	if ( wp_verify_nonce( $_POST['am_contact_nonce'], 'am_contact_form' ) ) {
		$company_name   = sanitize_text_field( $_POST['company_name'] );
		$contact_person = sanitize_text_field( $_POST['contact_person'] );
		$phone          = sanitize_text_field( $_POST['phone'] );
		$email          = sanitize_email( $_POST['email'] );
		$vessel_count   = sanitize_text_field( $_POST['vessel_count'] );
		$imo            = sanitize_text_field( $_POST['imo'] );
		$ports          = sanitize_text_field( $_POST['ports'] );
		$current_brand  = sanitize_text_field( $_POST['current_brand'] );
		$purchase_type  = sanitize_text_field( $_POST['purchase_type'] );
		$message        = sanitize_textarea_field( $_POST['message'] );

		wp_mail(
			'support@athenmarine.com',
			'New Contact Form Submission - Athen Marine',
			"Company Name: $company_name\nContact Person: $contact_person\nPhone: $phone\nEmail: $email\nNumber of Vessel/s: $vessel_count\nIMO: $imo\nPort/s: $ports\nCurrent Brand of Lubricant: $current_brand\nPurchase Type: $purchase_type\n\nAdditional Details:\n$message",
			array( 'Reply-To: ' . $email )
		);
		$sent = true;
	}
}

get_header();
?>

<main id="main-content">

	<!-- ============================= CONTACT HERO + FORM ============================= -->
	<section class="am-contact-hero">
		<div class="am-contact-hero__accent-line"></div>
		<span class="am-contact-hero__watermark">06</span>

		<div class="am-contact-hero__grid">
			<div class="am-contact-hero__content">
				<span class="am-contact-hero__label"><?php esc_html_e( 'Enquire Now', 'athen-marine' ); ?></span>
				<h1 class="am-contact-hero__title"><?php esc_html_e( "Let's Navigate Success Together", 'athen-marine' ); ?></h1>
				<p class="am-contact-hero__subtitle"><?php esc_html_e( 'From marine lubricant orders to technical consultation, our team responds quickly — wherever your vessel is calling next.', 'athen-marine' ); ?></p>

				<div class="am-contact-hero__quickinfo">
					<span class="am-contact-info__label"><?php esc_html_e( 'Chat or Email', 'athen-marine' ); ?></span>
					<p class="am-contact-info__primary"><a class="am-wa-chat" href="https://wa.me/971502106852" aria-label="Chat with our support on WhatsApp" title="Chat with our support on WhatsApp" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.4 15.1L2 22l5.05-1.6A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.25.7-1.45 1.35-2 1.4-.55.1-1.2.15-3.9-.9-3.3-1.3-5.4-4.6-5.55-4.8-.15-.2-1.3-1.7-1.3-3.3s.85-2.35 1.15-2.7c.3-.3.65-.4.85-.4h.6c.2 0 .45-.05.7.55.25.65.85 2.25.95 2.4.1.15.15.35.05.55-.1.2-.15.35-.3.55l-.45.5c-.15.15-.3.3-.15.6.15.3.7 1.15 1.5 1.85 1.05.9 1.9 1.2 2.2 1.3.3.15.45.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.25.65-.15.3.1 1.7.8 2 .95.3.15.5.2.55.3.1.1.1.65-.15 1.35z"/></svg><span><?php esc_html_e( 'Chat with our support', 'athen-marine' ); ?></span></a></p>
					<p class="am-contact-info__secondary am-contact-line"><a href="tel:+971502106852"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/></svg><span>+971 50 210 6852</span></a></p>
					<p class="am-contact-info__secondary am-contact-line"><a href="mailto:support@athenmarine.com"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.2"/><path d="m3.5 7 8.5 6.5L20.5 7"/></svg><span>support@athenmarine.com</span></a></p>
					<p class="am-contact-info__secondary am-contact-line"><a href="mailto:info@athenmarine.com"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.2"/><path d="m3.5 7 8.5 6.5L20.5 7"/></svg><span>info@athenmarine.com</span></a></p>
				</div>
			</div>

			<div class="am-contact-card">

				<?php if ( $sent ) : ?>
					<p class="am-contact-success"><?php esc_html_e( "Thank you! Our team will get back to you shortly.", 'athen-marine' ); ?></p>
				<?php endif; ?>

				<form class="am-contact-form" method="post" action="">
					<?php wp_nonce_field( 'am_contact_form', 'am_contact_nonce' ); ?>

					<span class="am-contact-card__label"><?php esc_html_e( 'Send a Message', 'athen-marine' ); ?></span>
					<p class="am-contact-card__intro"><?php esc_html_e( 'Tell us what you need — lubricant supply, technical consultation, oil analysis, or compatibility support — and the right person on our team will follow up.', 'athen-marine' ); ?></p>

					<div class="am-contact-card__row">
						<input type="text" name="company_name" class="am-contact-input" placeholder="<?php esc_attr_e( 'Name of the Company *', 'athen-marine' ); ?>" required>
						<input type="text" name="contact_person" class="am-contact-input" placeholder="<?php esc_attr_e( 'Contact Person *', 'athen-marine' ); ?>" required>
					</div>
					<div class="am-contact-card__row">
						<input type="tel" name="phone" class="am-contact-input" placeholder="<?php esc_attr_e( 'Phone Number', 'athen-marine' ); ?>">
						<input type="email" name="email" class="am-contact-input" placeholder="<?php esc_attr_e( 'Email ID *', 'athen-marine' ); ?>" required>
					</div>
					<div class="am-contact-card__row">
						<input type="number" min="1" name="vessel_count" class="am-contact-input" placeholder="<?php esc_attr_e( 'Number of Vessel/s', 'athen-marine' ); ?>">
						<input type="text" name="imo" class="am-contact-input" placeholder="<?php esc_attr_e( 'IMO (at least one vessel)', 'athen-marine' ); ?>">
					</div>
					<input type="text" name="ports" class="am-contact-input" placeholder="<?php esc_attr_e( 'Port/s (separate multiple ports with a comma)', 'athen-marine' ); ?>">
					<div class="am-contact-card__row">
						<select name="current_brand" class="am-contact-input am-contact-select">
							<option value="" selected disabled><?php esc_html_e( 'Current Brand of Lubricant Used', 'athen-marine' ); ?></option>
							<option value="Gulf Oil"><?php esc_html_e( 'Gulf Oil', 'athen-marine' ); ?></option>
							<option value="Chevron"><?php esc_html_e( 'Chevron', 'athen-marine' ); ?></option>
							<option value="Total"><?php esc_html_e( 'Total', 'athen-marine' ); ?></option>
							<option value="Castrol"><?php esc_html_e( 'Castrol', 'athen-marine' ); ?></option>
							<option value="ExxonMobil"><?php esc_html_e( 'ExxonMobil', 'athen-marine' ); ?></option>
							<option value="Shell"><?php esc_html_e( 'Shell', 'athen-marine' ); ?></option>
							<option value="Lukoil"><?php esc_html_e( 'Lukoil', 'athen-marine' ); ?></option>
							<option value="ENOC"><?php esc_html_e( 'ENOC', 'athen-marine' ); ?></option>
							<option value="Petro Gulf"><?php esc_html_e( 'Petro Gulf', 'athen-marine' ); ?></option>
							<option value="Other"><?php esc_html_e( 'Other', 'athen-marine' ); ?></option>
						</select>
						<select name="purchase_type" class="am-contact-input am-contact-select">
							<option value="" selected disabled><?php esc_html_e( 'Purchase', 'athen-marine' ); ?></option>
							<option value="Contract"><?php esc_html_e( 'Contract', 'athen-marine' ); ?></option>
							<option value="Spot"><?php esc_html_e( 'Spot', 'athen-marine' ); ?></option>
						</select>
					</div>
					<textarea name="message" class="am-contact-textarea" placeholder="<?php esc_attr_e( 'Additional Details', 'athen-marine' ); ?>"></textarea>

					<label class="am-contact-checkbox-row">
						<input type="checkbox" name="consent" class="am-contact-checkbox">
						<span><?php esc_html_e( 'I agree to receive communications from Athen Marine using the contact details provided above.', 'athen-marine' ); ?></span>
					</label>

				<div class="am-contact-card__footer">
					<p class="am-contact-privacy"><?php esc_html_e( '* Mandatory fields. This site is protected and your data is safe with Athen Marine.', 'athen-marine' ); ?></p>
					<button type="submit" class="am-contact-submit"><?php esc_html_e( 'Send', 'athen-marine' ); ?> <span aria-hidden="true">&rarr;</span></button>
				</div>
			</form>
			</div>
		</div>
	</section>

	<!-- ============================= CONTACT INFO ============================= -->
	<section class="am-contact-info">

		<div class="am-contact-info__col">
			<span class="am-contact-info__label"><?php esc_html_e( 'Head Office', 'athen-marine' ); ?></span>
			<p class="am-contact-info__primary"><?php esc_html_e( 'Dubai, United Arab Emirates', 'athen-marine' ); ?></p>
			<p class="am-contact-info__secondary"><?php esc_html_e( 'Serving 200+ ports across 20+ countries', 'athen-marine' ); ?></p>
			<p class="am-contact-info__secondary"><?php esc_html_e( '4 global offices worldwide', 'athen-marine' ); ?></p>
		</div>

		<div class="am-contact-info__col">
			<span class="am-contact-info__label"><?php esc_html_e( 'Technical Support', 'athen-marine' ); ?></span>
			<p class="am-contact-info__primary"><?php esc_html_e( 'Athen Assure', 'athen-marine' ); ?></p>
			<p class="am-contact-info__secondary"><?php esc_html_e( 'Technical consultation & advisory', 'athen-marine' ); ?></p>
			<p class="am-contact-info__secondary"><?php esc_html_e( 'Onboard inspections, oil analysis & compatibility support', 'athen-marine' ); ?></p>
		</div>
	</section>

	<!-- ============================= REGIONAL CONTACTS ============================= -->
	<section class="am-contact-regional">
		<span class="am-contact-regional__label"><?php esc_html_e( 'Regional Contacts', 'athen-marine' ); ?></span>
		<div class="am-contact-regional__grid">
			<div class="am-contact-regional-card">
				<h3 class="am-contact-regional-card__title"><?php esc_html_e( 'India Sales Contact', 'athen-marine' ); ?></h3>
				<p class="am-contact-regional-card__name"><?php esc_html_e( 'Mr. Jay Sagar', 'athen-marine' ); ?></p>
				<p class="am-contact-regional-card__org"><?php esc_html_e( 'Athen Marine India (P) Ltd.', 'athen-marine' ); ?></p>
				<p class="am-contact-regional-card__detail"><a href="tel:+919521349669"><?php esc_html_e( 'Mobile: +91 95213 49669', 'athen-marine' ); ?></a></p>
			</div>
		</div>
	</section>

	<!-- ============================= WHY CONTACT US STRIP ============================= -->
	<section class="am-contact-strip">
		<span class="am-contact-strip__item">&#10003; <?php esc_html_e( '20+ Countries Served', 'athen-marine' ); ?></span>
		<span class="am-contact-strip__item">&#10003; <?php esc_html_e( '200+ Ports Covered', 'athen-marine' ); ?></span>
		<span class="am-contact-strip__item">&#10003; <?php esc_html_e( 'Technical Support via Athen Assure', 'athen-marine' ); ?></span>
		<span class="am-contact-strip__item">&#10003; <?php esc_html_e( 'Trusted Long-Term Partnerships', 'athen-marine' ); ?></span>
	</section>

</main>

<?php
get_footer();
