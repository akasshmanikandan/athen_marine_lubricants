<?php
/**
 * Standalone maintenance-mode page.
 * Rendered directly by athen_marine_maintenance_mode() in functions.php —
 * intentionally does not call get_header()/get_footer() or enqueue the
 * theme stylesheet, so it has zero dependency on the rest of the site.
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="noindex, follow">
	<title>Athen Marine — Site Update in Progress</title>
	<style>
		*{margin:0;padding:0;box-sizing:border-box;}
		html,body{height:100%;}
		body{
			background:#0D0D0D;
			color:#EDEBE4;
			font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
			display:flex;
			align-items:center;
			justify-content:center;
			min-height:100vh;
			text-align:center;
			padding:24px;
		}
		.am-mnt{
			max-width:560px;
		}
		.am-mnt__logo{
			width:180px;
			max-width:60vw;
			margin:0 auto 40px;
			display:block;
		}
		.am-mnt__eyebrow{
			color:#40916C;
			font-size:13px;
			font-weight:700;
			letter-spacing:0.12em;
			text-transform:uppercase;
			margin-bottom:16px;
		}
		.am-mnt__title{
			font-size:clamp(28px,5vw,42px);
			font-weight:800;
			line-height:1.25;
			margin-bottom:18px;
			color:#F5F3EC;
		}
		.am-mnt__body{
			font-size:16px;
			line-height:1.7;
			color:#D4D0C8;
			margin-bottom:36px;
		}
		.am-mnt__contact{
			border-top:1px solid rgba(237,235,228,0.15);
			padding-top:28px;
			font-size:15px;
			color:#D4D0C8;
		}
		.am-mnt__contact a{
			color:#EDEBE4;
			text-decoration:none;
			font-weight:600;
		}
		.am-mnt__contact a:hover{
			color:#40916C;
		}
		.am-mnt__contact-line{
			margin-bottom:6px;
		}
	</style>
</head>
<body>
	<div class="am-mnt">
		<img class="am-mnt__logo" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo-white.png" alt="Athen Marine">
		<div class="am-mnt__eyebrow">Site Update in Progress</div>
		<h1 class="am-mnt__title">We&rsquo;re making some improvements</h1>
		<p class="am-mnt__body">Our website is temporarily offline while we make a few updates. We&rsquo;ll be back online shortly &mdash; thank you for your patience.</p>
		<div class="am-mnt__contact">
			<div class="am-mnt__contact-line">For urgent inquiries, reach us directly:</div>
			<div class="am-mnt__contact-line"><a href="mailto:support@athenmarine.com">support@athenmarine.com</a></div>
			<div class="am-mnt__contact-line"><a href="tel:+971502106852">+971 50 210 6852</a></div>
		</div>
	</div>
</body>
</html>
