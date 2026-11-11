<?php /* Template Name: Terms and Conditions */ ?>
<?php
/**
 * Terms and Conditions page template for Athen Marine.
 */

get_header();
?>

<main id="main-content">

	<!-- ============================= TERMS HERO ============================= -->
	<section class="am-svc-hero">
		<div class="am-svc-hero__accent-line"></div>
		<span class="am-svc-hero__watermark">09</span>

		<div class="am-svc-hero__content">
			<span class="am-svc-hero__label"><?php esc_html_e( 'Reference', 'athen-marine' ); ?></span>
			<h1 class="am-svc-hero__title"><?php esc_html_e( 'General Terms and Conditions of Sale', 'athen-marine' ); ?></h1>
			<p class="am-svc-hero__subtitle"><?php esc_html_e( 'These Terms and Conditions apply to all quotations, orders, sales, and deliveries of marine lubricants, greases, and related products supplied by Athen Marine.', 'athen-marine' ); ?></p>
			<div style="margin-top:28px;">
				<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/athen-marine-terms-and-conditions.pdf" class="am-btn am-btn--offwhite" style="background:var(--offwhite);color:var(--pine);" download><?php esc_html_e( 'Download as PDF', 'athen-marine' ); ?> <span aria-hidden="true">&darr;</span></a>
			</div>
		</div>
	</section>

	<!-- ============================= TERMS CONTENT ============================= -->
	<section class="am-terms">
		<div class="am-terms__wrap">

			<p class="am-terms__meta">
				<span><?php esc_html_e( 'Date: 01.08.2026', 'athen-marine' ); ?></span>
				<span><?php esc_html_e( 'Ref: AM/T&C/0003', 'athen-marine' ); ?></span>
			</p>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Scope', 'athen-marine' ); ?></h2>
				<p><?php esc_html_e( 'These Terms and Conditions shall apply to all quotations, orders, sales, and deliveries of marine lubricants, greases, and related products ("Products") supplied by ATHEN MARINE ("Seller") to any customer, ship owner, manager, operator, charterer, trader, or agent ("Buyer"). Placement of an order by the Buyer shall constitute acceptance of these Terms.', 'athen-marine' ); ?></p>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Definitions', 'athen-marine' ); ?></h2>
				<p><?php esc_html_e( 'In these Terms and Conditions, unless the context otherwise requires, the following definitions shall apply:', 'athen-marine' ); ?></p>
				<p><strong><?php esc_html_e( '"Seller"', 'athen-marine' ); ?></strong> <?php esc_html_e( 'means Athen Marine Lubricants LLC and its associates and, as the context may require, its employees, servants, agents, representatives, affiliates, assigns, subcontractors, suppliers, delivery partners, and any other persons acting under the Seller\'s instructions in fulfillment, compliance, or observance of any sale agreement.', 'athen-marine' ); ?></p>
				<p><strong><?php esc_html_e( '"Buyer"', 'athen-marine' ); ?></strong> <?php esc_html_e( 'means the person, company, vessel owner, operator, manager, charterer, trader, agent or other entity purchasing Products from the Seller.', 'athen-marine' ); ?></p>
				<p><strong><?php esc_html_e( '"Confirmation"', 'athen-marine' ); ?></strong> <?php esc_html_e( 'means any written acceptance, confirmation, acknowledgment or approval of a Nomination issued by the Seller.', 'athen-marine' ); ?></p>
				<p><strong><?php esc_html_e( '"Nomination(s)"', 'athen-marine' ); ?></strong> <?php esc_html_e( 'means any order, request or instruction placed by the Buyer for the purchase and delivery of Products.', 'athen-marine' ); ?></p>
				<p><strong><?php esc_html_e( '"Products"', 'athen-marine' ); ?></strong> <?php esc_html_e( 'means ATHEN Marine Lubricants marine lubricants, greases, specialty fluids and any other products supplied by the Seller in accordance with these Terms and Conditions.', 'athen-marine' ); ?></p>
				<p><strong><?php esc_html_e( '"Quotation"', 'athen-marine' ); ?></strong> <?php esc_html_e( 'means any offer, proposal or indication of price and availability issued by the Seller following an inquiry made by the Buyer.', 'athen-marine' ); ?></p>
				<p><strong><?php esc_html_e( '"Supplier"', 'athen-marine' ); ?></strong> <?php esc_html_e( 'means any company, contractor, manufacturer, distributor, terminal operator, barge operator, truck operator or service provider engaged in the physical supply, handling, storage or delivery of the Products.', 'athen-marine' ); ?></p>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Delivery Terms', 'athen-marine' ); ?></h2>
				<ol>
					<li><?php esc_html_e( 'Minimum Order Quantity (MOQ) requirements shall apply and may vary depending on the delivery port.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'The quotation price is based on the quantity specified in the inquiry and order confirmation. Any variation in quantity may result in a revision of the quoted price.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( "Unless otherwise agreed, packed product deliveries shall be arranged through the vessel's nominated agent, while bulk deliveries shall be conducted by barge where available.", 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Delivery lead time is estimated at three (3) to ten (10) working days from order confirmation and is subject to product availability, port conditions, and operational requirements at the delivery location.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Delivery is subject to prevailing weather conditions, port regulations, local authority requirements, and operational restrictions at the port of delivery.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( "The Buyer and/or its nominated agent shall arrange, at the Buyer's expense, all permits, approvals, and documentation required for delivery, including but not limited to BOE, NOC, EHS approvals, port permissions, gate passes, customs clearances, and any other applicable regulatory requirements.", 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'The Buyer and/or its nominated agent shall provide all relevant port regulations, restrictions, berth limitations, anchorage requirements, operational constraints, and vessel-specific requirements to the Seller in a timely manner.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'The Buyer and/or its nominated agent shall ensure vessel readiness for delivery, including the availability of suitable receiving facilities, cranes, hoses, connections, and any other equipment necessary for the safe and efficient receipt of the Product.', 'athen-marine' ); ?></li>
				</ol>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Operational Conditions', 'athen-marine' ); ?></h2>
				<ol>
					<li><?php esc_html_e( "The Buyer and/or its nominated agent shall promptly inform the Seller of the vessel's confirmed berthing schedule and any operational requirements that may affect delivery execution.", 'athen-marine' ); ?></li>
					<li><?php esc_html_e( "The Seller shall not be liable for delays, disruptions, shortages, contamination, leakage, spillage, or any other delivery-related issues arising from vessel-side conditions, receiving arrangements, equipment failures, or circumstances beyond the Seller's reasonable control.", 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'The Seller shall not be responsible for waiting time, delays, detention, demurrage, or additional operational expenses resulting from acts, omissions, or delays attributable to the Buyer, vessel, agent, terminal, or port authorities.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Delivery shall be deemed completed upon transfer of the Product to the vessel or designated receiving facility and issuance of the relevant delivery documentation.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Signed delivery documentation, including but not limited to Delivery Receipts, Trade Declarations, or other agreed delivery records, shall constitute conclusive evidence of quantity delivered and acceptance of the Product by the Buyer.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Following completion of delivery, responsibility for the handling, storage, and use of the Product shall pass to the vessel and/or Buyer in accordance with the agreed delivery terms.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( "Any request for product return shall be subject to the Seller's prior written approval, inspection, and quality verification. Returned Products shall only be accepted where the Product quality, condition, packaging, seals, and storage history meet the Seller's acceptance criteria.", 'athen-marine' ); ?></li>
				</ol>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Additional Charges', 'athen-marine' ); ?></h2>
				<ol>
					<li><?php esc_html_e( "Any charges imposed after order confirmation by ports, terminals, customs authorities, regulatory bodies, suppliers, logistics providers, or other third parties shall be for the Buyer's account unless otherwise agreed in writing.", 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Port charges, wharfage fees, terminal handling charges, security charges, escort fees, gate pass fees, customs clearance charges, and any other port-related costs shall be invoiced separately where applicable.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'The Buyer shall bear all barging costs associated with delivery, including any increases in actual barging costs exceeding preliminary estimates or quotations provided by the Seller.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'The Buyer shall be responsible for all pumping charges, hose connection charges, special handling costs, equipment hire charges, and any additional delivery support services required for execution of the delivery.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( "Additional operational charges, including but not limited to truck or barge waiting charges, overtime charges, after-hours delivery charges, weekend or public holiday delivery charges, re-delivery costs, and cancellation fees, shall be for the Buyer's account where applicable.", 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Any variation requested or caused after order confirmation, including changes to the vessel schedule, delivery location, quantity, delivery method, agent instructions, or customer requirements, which results in additional costs, shall be charged separately and invoiced in addition to the agreed price.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Packaging charges shall apply as specified in the relevant quotation or order confirmation.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Any taxes, duties, levies, governmental fees, or other regulatory charges imposed after the quotation date and relating to the supply or delivery of the product shall be charged to the Buyer in addition to the agreed price.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( "Any cancellation of a confirmed order shall be subject to the recovery of all costs incurred by the Seller, including applicable cancellation and restocking charges.", 'athen-marine' ); ?></li>
				</ol>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Inspection and Quality Claims', 'athen-marine' ); ?></h2>
				<p><?php esc_html_e( 'The Buyer shall inspect Products immediately upon delivery.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Any claim regarding quality, contamination, or specification compliance must be submitted in writing:', 'athen-marine' ); ?></p>
				<ul>
					<li><?php esc_html_e( 'Include supporting documentation.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Be supported by independent laboratory testing.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'To be received by Seller within seven (7) days of delivery.', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Samples used for analysis must originate from the delivery source and be jointly witnessed whenever practicable.', 'athen-marine' ); ?></li>
				</ul>
				<p><?php esc_html_e( 'Seller reserves the right to participate in all testing and investigations.', 'athen-marine' ); ?></p>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Payment Terms and Conditions', 'athen-marine' ); ?></h2>
				<p><?php esc_html_e( 'Invoices shall be paid in full within the agreed credit period stated on the invoice or contract. Payment shall be made without deduction, withholding, set-off, counterclaim, or dispute.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Seller may, at any time:', 'athen-marine' ); ?></p>
				<ul>
					<li><?php esc_html_e( 'Reduce or withdraw credit facilities;', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Request advance payment;', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Request a bank guarantee;', 'athen-marine' ); ?></li>
					<li><?php esc_html_e( 'Suspend further deliveries.', 'athen-marine' ); ?></li>
				</ul>
				<p><?php esc_html_e( 'Late payments shall accrue interest at the rate of 1.5% per month or the highest rate permitted by applicable law, whichever is lower. The Buyer shall reimburse Seller for all costs incurred in recovering overdue amounts, including legal and collection expenses.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Where Products are supplied to a vessel, Seller supplies the Products relying upon the credit of that vessel, as well as its owners, operators, managers, and charterers. The Buyer warrants that it possesses authority to bind the vessel and its interests for payment obligations arising from the supply. Where legally permissible, Seller reserves all rights to assert maritime liens or equivalent security rights arising from the supply.', 'athen-marine' ); ?></p>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Limitation of Liability', 'athen-marine' ); ?></h2>
				<p><?php esc_html_e( "Seller's aggregate liability arising from any supply/quality of Products shall not exceed the invoiced value of the affected Product(s). Under no circumstances shall Seller be liable for any indirect, consequential, special, incidental, punitive, or economic losses, including loss of profit, loss of hire, loss of charter, or business interruption, irrespective of the legal basis of the claim.", 'athen-marine' ); ?></p>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Confidentiality', 'athen-marine' ); ?></h2>
				<p><?php esc_html_e( 'All commercial information, pricing, technical data, reports, formulations, and business information exchanged between the parties shall be treated as confidential.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( "The Buyer shall not disclose such information to third parties without Seller's prior written consent unless required by law.", 'athen-marine' ); ?></p>
			</div>

			<div class="am-terms__section">
				<h2 class="am-terms__heading"><?php esc_html_e( 'Governing Law and Dispute Resolution', 'athen-marine' ); ?></h2>
				<p><?php esc_html_e( 'These Terms and all transactions between Seller and the Buyer shall be governed by the laws of the United Arab Emirates.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Any dispute arising out of or in connection with these Terms shall be submitted exclusively to the competent courts of Dubai, United Arab Emirates.', 'athen-marine' ); ?></p>
				<p><?php esc_html_e( 'Seller reserves the right to seek interim relief, arrest of vessels, security for debt, or enforcement proceedings in any jurisdiction where assets may be located.', 'athen-marine' ); ?></p>
			</div>

		</div>
	</section>

	<!-- ============================= CTA ============================= -->
	<section class="am-cta">
		<h2 class="am-cta__title"><?php esc_html_e( 'Have a Question About These Terms?', 'athen-marine' ); ?></h2>
		<p class="am-cta__sub"><?php esc_html_e( 'Our team is available to clarify anything before you confirm an order.', 'athen-marine' ); ?></p>
		<div class="am-cta__actions">
			<a href="/contact/" class="am-btn am-btn--offwhite" style="background:var(--offwhite);color:var(--pine);"><?php esc_html_e( 'Contact Our Team', 'athen-marine' ); ?></a>
			<a href="<?php echo esc_url( get_template_directory_uri() ); ?>/pdfs/athen-marine-terms-and-conditions.pdf" class="am-btn am-btn--ghost" download><?php esc_html_e( 'Download as PDF', 'athen-marine' ); ?></a>
		</div>
	</section>

</main>

<?php
get_footer();
