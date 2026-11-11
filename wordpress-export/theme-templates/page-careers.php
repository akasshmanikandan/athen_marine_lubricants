<?php
/* Template Name: Careers */

$applied = false;

if ( $_SERVER['REQUEST_METHOD'] === 'POST' && isset( $_POST['am_careers_nonce'] ) ) {
	if ( wp_verify_nonce( $_POST['am_careers_nonce'], 'am_careers_form' ) ) {
		$full_name = sanitize_text_field( $_POST['full_name'] );
		$email     = sanitize_email( $_POST['email'] );
		$message   = sanitize_textarea_field( $_POST['message'] );

		$attachments = array();
		$tmp_cv_path = '';

		if ( isset( $_FILES['cv'] ) && $_FILES['cv']['error'] === UPLOAD_ERR_OK ) {
			$upload_dir = wp_upload_dir();
			$safe_name  = sanitize_file_name( $_FILES['cv']['name'] );
			$tmp_cv_path = $upload_dir['basedir'] . '/careers-cv-' . time() . '-' . $safe_name;
			if ( move_uploaded_file( $_FILES['cv']['tmp_name'], $tmp_cv_path ) ) {
				$attachments[] = $tmp_cv_path;
			}
		}

		wp_mail(
			'support@athenmarine.com',
			'New Careers Application - Athen Marine',
			"Full Name: $full_name\nEmail: $email\n\nMessage:\n$message",
			array( 'Reply-To: ' . $email ),
			$attachments
		);

		if ( $tmp_cv_path && file_exists( $tmp_cv_path ) ) {
			wp_delete_file( $tmp_cv_path );
		}

		$applied = true;
	}
}

get_header();
?>

<main id="main-content">

	<!-- ============================= CAREERS HERO ============================= -->
	<section class="am-careers-hero">
		<div class="am-careers-hero__content">
			<span class="am-careers-hero__label"><?php esc_html_e( 'Careers at Athen Marine', 'athen-marine' ); ?></span>
			<h1 class="am-careers-hero__title"><?php esc_html_e( "Let's Shape the Future of Maritime", 'athen-marine' ); ?></h1>
			<p><?php esc_html_e( 'At Athen Marine, we believe great companies are built by great people.', 'athen-marine' ); ?></p>
			<p><?php esc_html_e( 'We are more than a marine lubricant company. We are a team of ambitious thinkers, problem-solvers, and industry professionals united by a shared purpose: delivering trust, creating value, and supporting the global maritime industry through expertise, innovation, and partnership.', 'athen-marine' ); ?></p>
			<p><?php esc_html_e( 'As we continue to expand across international markets, we are looking for people who are passionate about growth, energized by challenges, and committed to making a meaningful impact.', 'athen-marine' ); ?></p>
		</div>
		<div class="am-careers-hero__photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/careers-team-thumbsup-1.jpg" alt="<?php esc_attr_e( 'Athen Marine team celebrating together in the office', 'athen-marine' ); ?>" class="am-img-cover"></div>
	</section>

	<!-- ============================= WHY JOIN ============================= -->
	<section class="am-careers-why">
		<span class="am-about-section-label--lg" style="color:var(--pine); display:block; text-align:center; margin-bottom:12px;"><?php esc_html_e( 'Why Join Athen Marine?', 'athen-marine' ); ?></span>

		<div class="am-careers-why__grid">
			<div class="am-card">
				<h3 class="am-card__title"><?php esc_html_e( 'Growing Global Brand', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'Join an organization that is redefining what customers expect from a marine lubricant partner.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-card">
				<h3 class="am-card__title"><?php esc_html_e( 'Turn Ideas into Impact', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'Every team member has the opportunity to influence decisions, create solutions, and contribute to our growth journey.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-card">
				<h3 class="am-card__title"><?php esc_html_e( 'Unlock Your Full Potential', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'We believe in empowering our people through continuous learning, development and exposure to global markets.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-card">
				<h3 class="am-card__title"><?php esc_html_e( 'Work with Purpose', 'athen-marine' ); ?></h3>
				<p class="am-card__desc"><?php esc_html_e( 'Every role contributes to supporting global trade and keeping vessels moving around the world. The work we do matters.', 'athen-marine' ); ?></p>
			</div>
		</div>
	</section>

	<!-- ============================= OUR VALUES ============================= -->
	<section class="am-about-values">
		<span class="am-about-values__label am-about-section-label--lg"><?php esc_html_e( 'Our Values', 'athen-marine' ); ?></span>
		<h2 class="am-about-values__title"><?php esc_html_e( 'What Guides Every Decision', 'athen-marine' ); ?></h2>

		<div class="am-trust__grid">
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-agility.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Agility', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'We adapt and execute with speed.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-growth.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Growth', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'Ambitious, driven and continuously raising the bar.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-trust.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Trust', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'We do what we say with integrity.', 'athen-marine' ); ?></p>
			</div>
			<div class="am-trust__card">
				<div class="am-trust__icon-ring">
					<div class="am-trust__icon"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/value-icon-partnership.png" alt=""></div>
				</div>
				<h3 class="am-trust__card-title"><?php esc_html_e( 'Partnership', 'athen-marine' ); ?></h3>
				<p class="am-trust__card-desc"><?php esc_html_e( 'We build lasting relationships through trust, responsiveness and shared growth.', 'athen-marine' ); ?></p>
			</div>
		</div>
	</section>

	<!-- ============================= LIFE AT ATHEN MARINE ============================= -->
	<section class="am-careers-life">
		<span class="am-about-section-label--lg" style="color:var(--accent); display:block; text-align:center; margin-bottom:12px;"><?php esc_html_e( 'Life at Athen Marine', 'athen-marine' ); ?></span>
		<h2 class="am-careers-life__title"><?php esc_html_e( 'Moments From Our Team', 'athen-marine' ); ?></h2>

		<div class="am-careers-life__grid">
			<div class="am-careers-life__video">
				<video controls playsinline preload="metadata" poster="<?php echo esc_url( get_template_directory_uri() ); ?>/images/careers-video-poster.jpg">
					<source src="<?php echo esc_url( get_template_directory_uri() ); ?>/videos/careers-life-at-athen.mp4" type="video/mp4">
				</video>
			</div>
			<div class="am-careers-life__photos">
				<div class="am-careers-life__photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/careers-team-dinner.jpg" alt="<?php esc_attr_e( 'Athen Marine team at a dinner gathering', 'athen-marine' ); ?>" class="am-img-cover"></div>
				<div class="am-careers-life__photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/careers-birthday-cake.jpg" alt="<?php esc_attr_e( 'Athen Marine team celebrating a birthday in the office', 'athen-marine' ); ?>" class="am-img-cover"></div>
				<div class="am-careers-life__photo"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/careers-team-thumbsup-2.jpg" alt="<?php esc_attr_e( 'Athen Marine team posing together in the office', 'athen-marine' ); ?>" class="am-img-cover"></div>
			</div>
		</div>
	</section>

	<!-- ============================= WHO WE LOOK FOR ============================= -->
	<section class="am-careers-looking">
		<span class="am-about-section-label--lg" style="color:var(--pine); display:block; margin-bottom:12px;"><?php esc_html_e( 'Who We Look For', 'athen-marine' ); ?></span>
		<h2 class="am-careers-looking__title"><?php esc_html_e( 'The Kind of People Who Thrive Here', 'athen-marine' ); ?></h2>

		<ul class="am-checklist am-careers-looking__list">
			<li><span class="am-checklist__dot">&#10003;</span> <?php esc_html_e( 'Put customers first', 'athen-marine' ); ?></li>
			<li><span class="am-checklist__dot">&#10003;</span> <?php esc_html_e( 'Take ownership of outcomes', 'athen-marine' ); ?></li>
			<li><span class="am-checklist__dot">&#10003;</span> <?php esc_html_e( 'Thrive in dynamic environments', 'athen-marine' ); ?></li>
			<li><span class="am-checklist__dot">&#10003;</span> <?php esc_html_e( 'Value teamwork and collaboration', 'athen-marine' ); ?></li>
			<li><span class="am-checklist__dot">&#10003;</span> <?php esc_html_e( 'Demonstrate curiosity and continuous learning', 'athen-marine' ); ?></li>
			<li><span class="am-checklist__dot">&#10003;</span> <?php esc_html_e( 'Act with integrity and professionalism', 'athen-marine' ); ?></li>
			<li><span class="am-checklist__dot">&#10003;</span> <?php esc_html_e( 'Aspire to grow alongside a fast-evolving global organization', 'athen-marine' ); ?></li>
		</ul>
	</section>

	<!-- ============================= JOIN OUR JOURNEY ============================= -->
	<section class="am-cta">
		<h2 class="am-cta__title"><?php esc_html_e( 'Join Our Journey', 'athen-marine' ); ?></h2>
		<p class="am-careers-journey__desc"><?php esc_html_e( 'We are building more than a company. We are building a trusted global maritime brand powered by passionate people, technical expertise, and an unwavering commitment to excellence.', 'athen-marine' ); ?></p>
	</section>

	<!-- ============================= APPLY FORM ============================= -->
	<section class="am-careers-apply">
		<div class="am-contact-card am-careers-apply__card">

			<?php if ( $applied ) : ?>
				<p class="am-contact-success"><?php esc_html_e( 'Thank you! Your application has been received — our team will be in touch if there is a match.', 'athen-marine' ); ?></p>
			<?php endif; ?>

			<span class="am-contact-card__label"><?php esc_html_e( 'Apply Now', 'athen-marine' ); ?></span>
			<p class="am-contact-card__intro"><?php esc_html_e( "Think you're a fit for the Athen Marine team? Share your details and CV below.", 'athen-marine' ); ?></p>

			<form class="am-contact-form" method="post" action="" enctype="multipart/form-data">
				<?php wp_nonce_field( 'am_careers_form', 'am_careers_nonce' ); ?>

				<div class="am-contact-card__row">
					<input type="text" name="full_name" class="am-contact-input" placeholder="<?php esc_attr_e( 'Full Name *', 'athen-marine' ); ?>" required>
					<input type="email" name="email" class="am-contact-input" placeholder="<?php esc_attr_e( 'Email ID *', 'athen-marine' ); ?>" required>
				</div>

				<label class="am-careers-apply__upload">
					<span><?php esc_html_e( 'Upload CV (PDF or Word)', 'athen-marine' ); ?></span>
					<input type="file" name="cv" accept=".pdf,.doc,.docx">
				</label>

				<textarea name="message" class="am-contact-textarea" placeholder="<?php esc_attr_e( 'Tell us about yourself', 'athen-marine' ); ?>"></textarea>

				<div class="am-contact-card__footer">
					<p class="am-contact-privacy"><?php esc_html_e( '* Mandatory fields. This site is protected and your data is safe with Athen Marine.', 'athen-marine' ); ?></p>
					<button type="submit" class="am-contact-submit"><?php esc_html_e( 'Submit Application', 'athen-marine' ); ?> <span aria-hidden="true">&rarr;</span></button>
				</div>
			</form>
		</div>
	</section>

</main>

<?php
get_footer();
