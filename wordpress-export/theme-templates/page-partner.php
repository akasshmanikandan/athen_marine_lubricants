<?php
/* Template Name: Partner With Us */

$sent = false;

if ( $_SERVER['REQUEST_METHOD'] === 'POST' && isset( $_POST['am_partner_nonce'] ) ) {
	if ( wp_verify_nonce( $_POST['am_partner_nonce'], 'am_partner_form' ) ) {
		$company_name = sanitize_text_field( $_POST['company_name'] );
		$contact_person = sanitize_text_field( $_POST['contact_person'] );
		$phone = sanitize_text_field( $_POST['phone'] );
		$email = sanitize_email( $_POST['email'] );
		$partnership_interest = sanitize_text_field( $_POST['partnership_interest'] );
		$business_activity = sanitize_text_field( $_POST['business_activity'] );
		$message = sanitize_textarea_field( $_POST['message'] );

		wp_mail(
			'support@athenmarine.com',
			'New Partner With Us Submission - Athen Marine',
			"Company Name: $company_name\nContact Person: $contact_person\nPhone: $phone\nEmail: $email\nPreferred Partnership Interest: $partnership_interest\nCurrent Business Activity: $business_activity\n\nDetails of Current Business:\n$message",
			array( 'Reply-To: ' . $email )
		);
		$sent = true;
	}
}

get_header();
?>

<main id="main-content">

	<!-- ============================= PARTNER HERO + FORM ============================= -->
	<section class="am-contact-hero">
		<div class="am-contact-hero__accent-line"></div>
		<span class="am-contact-hero__watermark">07</span>

		<div class="am-contact-hero__grid">
			<div class="am-contact-hero__content">
				<span class="am-contact-hero__label"><?php esc_html_e( 'Partner With Us', 'athen-marine' ); ?></span>
				<h1 class="am-contact-hero__title"><?php esc_html_e( 'Grown With', 'athen-marine' ); ?><br><?php esc_html_e( 'Athen Marine', 'athen-marine' ); ?></h1>
				<p class="am-contact-hero__subtitle"><?php esc_html_e( 'From distribution to strategic collaboration, tell us how you\'d like to partner with Athen Marine and our team will follow up.', 'athen-marine' ); ?></p>
			</div>

			<div class="am-contact-card">

				<?php if ( $sent ) : ?>
					<p class="am-contact-success"><?php esc_html_e( "Thank you! Our partnerships team will get back to you shortly.", 'athen-marine' ); ?></p>
				<?php endif; ?>

				<form class="am-contact-form" method="post" action="">
					<?php wp_nonce_field( 'am_partner_form', 'am_partner_nonce' ); ?>

					<span class="am-contact-card__label"><?php esc_html_e( 'Partnership Enquiry', 'athen-marine' ); ?></span>
					<p class="am-contact-card__intro"><?php esc_html_e( 'Share a few details about your company and the kind of partnership you\'re looking for, and the right person on our team will follow up.', 'athen-marine' ); ?></p>

					<div class="am-contact-card__row">
						<input type="text" name="company_name" class="am-contact-input" placeholder="<?php esc_attr_e( 'Name of the Company *', 'athen-marine' ); ?>" required>
						<input type="text" name="contact_person" class="am-contact-input" placeholder="<?php esc_attr_e( 'Contact Person *', 'athen-marine' ); ?>" required>
					</div>
					<div class="am-contact-card__row">
						<input type="tel" name="phone" class="am-contact-input" placeholder="<?php esc_attr_e( 'Phone Number', 'athen-marine' ); ?>">
						<input type="email" name="email" class="am-contact-input" placeholder="<?php esc_attr_e( 'Email ID *', 'athen-marine' ); ?>" required>
					</div>
					<div class="am-contact-card__row">
						<select name="partnership_interest" class="am-contact-input am-contact-select" required>
							<option value="" selected disabled><?php esc_html_e( 'Preferred Partnership Interest *', 'athen-marine' ); ?></option>
							<option value="Distribution Partner"><?php esc_html_e( 'Distribution Partner', 'athen-marine' ); ?></option>
							<option value="Supply Chain Partner"><?php esc_html_e( 'Supply Chain Partner', 'athen-marine' ); ?></option>
							<option value="Outsourcing Partner"><?php esc_html_e( 'Outsourcing Partner', 'athen-marine' ); ?></option>
							<option value="Strategic Partner"><?php esc_html_e( 'Strategic Partner', 'athen-marine' ); ?></option>
							<option value="Vendor"><?php esc_html_e( 'Vendor', 'athen-marine' ); ?></option>
							<option value="Others"><?php esc_html_e( 'Others', 'athen-marine' ); ?></option>
						</select>
						<input type="text" name="business_activity" class="am-contact-input" placeholder="<?php esc_attr_e( 'Current Business Activity (e.g. Retail, Distribution, Trading)', 'athen-marine' ); ?>">
					</div>
					<textarea name="message" class="am-contact-textarea" placeholder="<?php esc_attr_e( 'Details of your Current Business', 'athen-marine' ); ?>"></textarea>

					<label class="am-contact-checkbox-row">
						<input type="checkbox" name="consent" class="am-contact-checkbox">
						<span><?php esc_html_e( 'I agree to receive communications from Athen Marine using the contact details provided above.', 'athen-marine' ); ?></span>
					</label>

				<div class="am-contact-card__footer">
					<p class="am-contact-privacy"><?php esc_html_e( '* Mandatory fields. This site is protected and your data is safe with Athen Marine.', 'athen-marine' ); ?></p>
					<button type="submit" class="am-contact-submit"><?php esc_html_e( 'Submit', 'athen-marine' ); ?> <span aria-hidden="true">&rarr;</span></button>
				</div>
			</form>
			</div>
		</div>
	</section>

</main>

<?php
get_footer();
