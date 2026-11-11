/**
 * Athen Marine theme scripts.
 */
( function () {
	'use strict';

	document.addEventListener( 'DOMContentLoaded', function () {
		initStickyNav();
		initMobileMenu();
		initOilComparison();
		initProductFinder();
		initQuickQuote();
		initFaqAccordion();
		initHeroCarousel();
		initDeliveryMap();
		initProductTabs();
		initEmailPrefill();
	} );

	/* ---------------------------------------------------------------- */
	/* FAQ accordion                                                      */
	/* ---------------------------------------------------------------- */
	function initFaqAccordion() {
		var items = document.querySelectorAll( '.am-faq-item' );
		if ( ! items.length ) {
			return;
		}

		items.forEach( function ( item ) {
			var question = item.querySelector( '.am-faq-item__question' );
			if ( ! question ) {
				return;
			}

			question.addEventListener( 'click', function () {
				var isOpen = item.classList.contains( 'is-open' );

				items.forEach( function ( other ) {
					other.classList.remove( 'is-open' );
					var otherQuestion = other.querySelector( '.am-faq-item__question' );
					if ( otherQuestion ) {
						otherQuestion.setAttribute( 'aria-expanded', 'false' );
					}
				} );

				if ( ! isOpen ) {
					item.classList.add( 'is-open' );
					question.setAttribute( 'aria-expanded', 'true' );
				}
			} );
		} );
	}

	/* ---------------------------------------------------------------- */
	/* Products page: quick-nav tabs active-state tracking               */
	/* ---------------------------------------------------------------- */
	function initProductTabs() {
		var tabs = Array.prototype.slice.call( document.querySelectorAll( '.am-prod-tab' ) );
		if ( ! tabs.length ) {
			return;
		}

		var sections = tabs.map( function ( tab ) {
			var id = tab.getAttribute( 'href' ).replace( '#', '' );
			return document.getElementById( id );
		} ).filter( Boolean );

		function setActive( id ) {
			tabs.forEach( function ( tab ) {
				tab.classList.toggle( 'is-active', tab.getAttribute( 'href' ) === '#' + id );
			} );
		}

		tabs.forEach( function ( tab ) {
			tab.addEventListener( 'click', function () {
				setActive( tab.getAttribute( 'href' ).replace( '#', '' ) );
			} );
		} );

		if ( ! sections.length || typeof IntersectionObserver === 'undefined' ) {
			return;
		}

		var observer = new IntersectionObserver( function ( entries ) {
			entries.forEach( function ( entry ) {
				if ( entry.isIntersecting ) {
					setActive( entry.target.id );
				}
			} );
		}, {
			rootMargin: '-152px 0px -70% 0px',
			threshold: 0
		} );

		sections.forEach( function ( section ) {
			observer.observe( section );
		} );
	}

	/* ---------------------------------------------------------------- */
	/* Delivery Network page: flat world map with pinned ports           */
	/* ---------------------------------------------------------------- */
	var PORTS_DATA = {
		'Bangladesh': [ 'Chittagong', 'Mongla' ],
		'Brazil': [ 'Manaus', 'Rio Grande', 'Others' ],
		'China': [ 'Zhoushan', 'Shanghai', 'Dalian', 'Dongjiakou', 'Ghuangzaou Shipyard', 'Guangzou', 'Longkou', 'Mahzi', 'Shidongkou', 'Xiazhimen', 'Xinya Shipyard', 'Others' ],
		'Curacao': [ 'Curacao', 'Others' ],
		'Denmark': [ 'Skagen', 'Others' ],
		'Egypt': [ 'Suez Canal', 'Port Said', 'Alexandria', 'Safaga' ],
		'Gibraltar': [ 'Gibraltar', 'Others' ],
		'Greece': [ 'Piraeus', 'Lavrio', 'Vatika', 'Chios', 'Kalamata', 'Others' ],
		'Hong Kong': [ 'Hong Kong', 'Others' ],
		'India': [ 'Chennai', 'Cochin', 'Goa', 'Kandla', 'Karwar', 'Krishnapatnam', 'Mangalore', 'Mumbai', 'Mundra', 'Others' ],
		'Indonesia': [ 'Batam', 'Port Klang', 'Jakarta', 'Others' ],
		'Malaysia': [ 'Port Klang', 'Tanjung Pelepas', 'Others' ],
		'Malta': [ 'Malta' ],
		'Netherlands': [ 'Amsterdam' ],
		'Oman': [ 'Salalah', 'Duqm', 'Sohar', 'Muscat' ],
		'Pakistan': [ 'Bin Qasim', 'Karachi', 'Others' ],
		'Panama': [ 'Cristobal', 'Balboa', 'Colon', 'Manzanillo' ],
		'Saudi Arabia': [ 'Jeddah', 'Dammam', 'Yanbu' ],
		'Senegal': [ 'Dakar', 'Others' ],
		'Singapore': [ 'Singapore Port' ],
		'South Africa': [ 'Durban', 'Port Elizabeth', 'Capetown', 'Richards Bay' ],
		'South Korea': [ 'Yeosu', 'Others' ],
		'Spain': [ 'Algeciras', 'Barcelona', 'Las Palmas', 'Others' ],
		'Sri Lanka': [ 'Galle', 'Colombo' ],
		'Estonia': [ 'Tallinn', 'Others' ],
		'Turkey': [ 'Istanbul', 'Desan', 'Iskenderun', 'Sinop', 'Trabzon', 'Others' ],
		'UAE': [ 'Fujairah', 'Khor Fakkan', 'Hamriya/Sharjah', 'Hamriya/Dubai', 'Khalid', 'Mina Saqr', 'RMC Port', 'RAK Maritime', 'Al Jaseera Port', 'Jebel Ali', 'Dubai Dry Dock', 'DMC', 'Damen Shipyard', 'Mina Zayed-AUH', 'Khalifa', 'Mussafah', 'Kalba' ],
		'USA': [ 'New Orleans', 'Others' ],
		'Vietnam': [ 'Ho Chi Minh', 'Others' ]
	};

	/* Pin positions as percentages — each pin sits at the geometric center
	   of that country's own landmass as drawn in world-map.png (computed
	   via border-bounded flood fill / local centroid, then snapped to the
	   nearest solid land pixel), not at a specific port's coordinates. */
	var COUNTRY_PINS = {
		'Bangladesh': { left: 75.77, top: 60.50 },
		'Brazil': { left: 35.25, top: 75.72 },
		'China': { left: 78.87, top: 53.45 },
		'Curacao': { left: 30.00, top: 62.55 },
		'Denmark': { left: 54.17, top: 41.83 },
		'Egypt': { left: 58.25, top: 59.06 },
		'Gibraltar': { left: 48.50, top: 53.63 },
		'Greece': { left: 56.83, top: 51.54 },
		'Hong Kong': { left: 81.62, top: 60.45 },
		'India': { left: 71.74, top: 60.75 },
		'Indonesia': { left: 78.05, top: 71.60 },
		'Malaysia': { left: 77.79, top: 67.56 },
		'Malta': { left: 54.03, top: 54.15 },
		'Netherlands': { left: 51.88, top: 44.08 },
		'Oman': { left: 65.56, top: 61.84 },
		'Pakistan': { left: 69.28, top: 57.31 },
		'Panama': { left: 27.71, top: 67.12 },
		'Saudi Arabia': { left: 62.35, top: 60.14 },
		'Senegal': { left: 45.99, top: 64.60 },
		'Singapore': { left: 79.97, top: 74.13 },
		'South Africa': { left: 56.94, top: 83.95 },
		'South Korea': { left: 85.86, top: 54.52 },
		'Spain': { left: 49.88, top: 52.83 },
		'Sri Lanka': { left: 72.29, top: 68.02 },
		'Estonia': { left: 57.78, top: 43.56 },
		'Turkey': { left: 58.13, top: 49.16 },
		'UAE': { left: 65.46, top: 59.65 },
		'USA': { left: 22.33, top: 52.04 },
		'Vietnam': { left: 79.67, top: 65.77 }
	};

	/* Region grouping for the filter buttons above the map. */
	var COUNTRY_REGION = {
		'USA': 'americas',
		'Panama': 'americas',
		'Curacao': 'americas',
		'Brazil': 'americas',
		'Spain': 'europe',
		'Gibraltar': 'europe',
		'Netherlands': 'europe',
		'Denmark': 'europe',
		'Estonia': 'europe',
		'Greece': 'europe',
		'Malta': 'europe',
		'Senegal': 'africa',
		'South Africa': 'africa',
		'Saudi Arabia': 'middle-east',
		'UAE': 'middle-east',
		'Oman': 'middle-east',
		'Turkey': 'middle-east',
		'Egypt': 'middle-east',
		'Pakistan': 'asia',
		'India': 'asia',
		'Sri Lanka': 'asia',
		'Bangladesh': 'asia',
		'Malaysia': 'asia',
		'Singapore': 'asia',
		'Indonesia': 'asia',
		'Vietnam': 'asia',
		'China': 'asia',
		'Hong Kong': 'asia',
		'South Korea': 'asia'
	};

	function initDeliveryMap() {
		var stage = document.querySelector( '.am-dlv-map__stage' );
		var pinsEl = document.getElementById( 'am-dlv-map-pins' );
		var searchInput = document.getElementById( 'am-port-search' );
		var resultsEl = document.getElementById( 'am-port-search-results' );
		var panel = document.getElementById( 'am-dlv-port-panel' );
		var panelTitle = document.getElementById( 'am-dlv-port-panel-title' );
		var panelList = document.getElementById( 'am-dlv-port-panel-list' );
		var panelClose = document.getElementById( 'am-dlv-port-panel-close' );
		var regionsEl = document.getElementById( 'am-dlv-map-regions' );

		if ( ! stage || ! pinsEl || ! searchInput ) {
			return;
		}

		var countries = Object.keys( PORTS_DATA );
		var pinEls = {};

		countries.forEach( function ( country ) {
			var pos = COUNTRY_PINS[ country ];
			if ( ! pos ) {
				return;
			}

			var left = pos.left;
			var top = pos.top;

			var pin = document.createElement( 'button' );
			pin.type = 'button';
			pin.className = 'am-dlv-map__pin';
			pin.style.left = left + '%';
			pin.style.top = top + '%';
			pin.setAttribute( 'aria-label', country );

			var label = document.createElement( 'span' );
			label.className = 'am-dlv-map__pin-label';
			label.textContent = country;
			pin.appendChild( label );

			pin.addEventListener( 'click', function () {
				showCountry( country );
			} );

			pinsEl.appendChild( pin );
			pinEls[ country ] = pin;
		} );

		function setActivePin( country ) {
			countries.forEach( function ( c ) {
				if ( pinEls[ c ] ) {
					pinEls[ c ].classList.toggle( 'is-active', c === country );
				}
			} );
		}

		function showCountry( country ) {
			var ports = PORTS_DATA[ country ];
			if ( ! ports || ! panel ) {
				return;
			}

			panelTitle.textContent = country;
			panelList.innerHTML = '';
			ports.forEach( function ( port ) {
				var li = document.createElement( 'li' );
				li.textContent = port;
				panelList.appendChild( li );
			} );

			panel.hidden = false;
			setActivePin( country );
			searchInput.value = country;
			closeResults();
		}

		function closeResults() {
			resultsEl.classList.remove( 'is-open' );
			resultsEl.innerHTML = '';
		}

		if ( panelClose ) {
			panelClose.addEventListener( 'click', function () {
				panel.hidden = true;
				setActivePin( null );
			} );
		}

		searchInput.addEventListener( 'input', function () {
			var query = searchInput.value.trim().toLowerCase();
			resultsEl.innerHTML = '';

			if ( ! query ) {
				closeResults();
				return;
			}

			var matches = countries.filter( function ( c ) {
				return c.toLowerCase().indexOf( query ) !== -1;
			} );

			if ( ! matches.length ) {
				var empty = document.createElement( 'div' );
				empty.className = 'am-dlv-map__search-empty';
				empty.textContent = 'No country found';
				resultsEl.appendChild( empty );
				resultsEl.classList.add( 'is-open' );
				return;
			}

			matches.forEach( function ( country ) {
				var btn = document.createElement( 'button' );
				btn.type = 'button';
				btn.className = 'am-dlv-map__search-result';
				btn.textContent = country;
				btn.addEventListener( 'click', function () {
					showCountry( country );
				} );
				resultsEl.appendChild( btn );
			} );

			resultsEl.classList.add( 'is-open' );
		} );

		document.addEventListener( 'click', function ( e ) {
			if ( ! e.target.closest( '.am-dlv-map__search' ) ) {
				closeResults();
			}
		} );

		if ( regionsEl ) {
			regionsEl.addEventListener( 'change', function () {
				var region = regionsEl.value;

				countries.forEach( function ( c ) {
					var pin = pinEls[ c ];
					if ( ! pin ) {
						return;
					}
					var matches = region === 'all' || COUNTRY_REGION[ c ] === region;
					pin.classList.toggle( 'is-dimmed', ! matches );
				} );

				panel.hidden = true;
				setActivePin( null );
			} );
		}
	}

	/* ---------------------------------------------------------------- */
	/* Sticky nav shadow on scroll                                       */
	/* ---------------------------------------------------------------- */
	function initStickyNav() {
		var nav = document.getElementById( 'am-nav' );
		if ( ! nav ) {
			return;
		}

		function onScroll() {
			if ( window.scrollY > 8 ) {
				nav.classList.add( 'is-scrolled' );
			} else {
				nav.classList.remove( 'is-scrolled' );
			}
		}

		window.addEventListener( 'scroll', onScroll, { passive: true } );
		onScroll();
	}

	/* ---------------------------------------------------------------- */
	/* Mobile hamburger menu                                             */
	/* ---------------------------------------------------------------- */
	function initMobileMenu() {
		var toggle = document.getElementById( 'am-hamburger' );
		var links = document.getElementById( 'am-nav-links' );
		if ( ! toggle || ! links ) {
			return;
		}

		toggle.addEventListener( 'click', function () {
			var isOpen = links.classList.toggle( 'is-open' );
			toggle.classList.toggle( 'is-active', isOpen );
			toggle.setAttribute( 'aria-expanded', isOpen ? 'true' : 'false' );
		} );

		links.querySelectorAll( 'a' ).forEach( function ( link ) {
			link.addEventListener( 'click', function () {
				links.classList.remove( 'is-open' );
				toggle.classList.remove( 'is-active' );
				toggle.setAttribute( 'aria-expanded', 'false' );
			} );
		} );
	}

	/* ---------------------------------------------------------------- */
	/* Oil comparison: category tabs, product pills, comparison table    */
	/* ---------------------------------------------------------------- */
	var COMPARE_BRANDS = {
		gulf: 'Gulf Oil',
		chevron: 'Chevron',
		total: 'Total',
		castrol: 'Castrol',
		exxonmobil: 'ExxonMobil',
		shell: 'Shell',
		lukoil: 'Lukoil',
		enoc: 'ENOC',
		petrogulf: 'Petro Gulf'
	};

	function b( gulf, chevron, total, castrol, exxonmobil, shell, lukoil, enoc, petrogulf ) {
		return { gulf: gulf, chevron: chevron, total: total, castrol: castrol, exxonmobil: exxonmobil, shell: shell, lukoil: lukoil, enoc: enoc, petrogulf: petrogulf };
	}

	var COMPARE_CATEGORIES = {
		mainGrades: {
			label: 'Main Grades',
			defaultIndex: 1,
			products: [
				{ code: 'CYL OIL 5025', subcategory: 'Cylinder Oils', brands: b( 'CYLCARE ECA 50', 'TARO SPECIAL HT LF', 'TALUSIA LS 25', 'CYLTECH ACT', 'MOBILGARD 525', 'ALEXIA 25/ALEXIA S3', 'NAVIGO MCL ULTRA', 'STRATA CYL 525', 'N.A' ) },
				{ code: 'CYL OIL 5040', subcategory: 'Cylinder Oils', brands: b( 'CYLCARE DCA 5040', 'TARO SPECIAL HT LS 40/TARO ULTRA 40', 'TALUSIA LS 40', 'CYLTECH 40SX', 'MOBILGARD 540', 'ALEXIA 40', 'NAVIGO 40 MCL/NAVIGO MCL EXTRA', 'STRATA CYL 40', 'CYLINDER OIL 5040' ) },
				{ code: 'CYL OIL 5055', subcategory: 'Cylinder Oils', brands: b( 'CYLCARE EHP 5055', 'TARO SPECIAL HT 55', 'TALUSIA UNIVERSAL', 'N.A', 'MOBILGARD 560 VS', 'ALEXIA S4', 'NAVIGO 50 MCL', 'N.A', 'CYLINDER OIL 5055' ) },
				{ code: 'CYL OIL 5070', subcategory: 'Cylinder Oils', brands: b( 'CYLCARE DCA 5070', 'TARO SPECIAL HT 70/TARO ULTRA 70', 'TALUSIA HR 70', 'CYLTECH 70', 'MOBILGARD 570', 'ALEXIA 70/ALEXIA 50', 'NAVIGO 70 MCL/NAVIGO 70 MCL AW', 'STRATA CYL 70', 'CYLINDER OIL 5070' ) },
				{ code: 'CYL OIL 50100', subcategory: 'Cylinder Oils', brands: b( 'CYLCARE DCA 50100', 'TARO SPECIAL HT 100', 'TALUSIA UNIVERSAL 100', 'CYLTECH 100', 'MOBILGARD 5100', 'ALEXIA 100/ALEXIA S6', 'NAVIGO 100 MCL', 'STRATA CYL 100', 'CYLINDER OIL 50100' ) },
				{ code: 'CYL OIL 50140', subcategory: 'Cylinder Oils', brands: b( 'CYLCARE DCA 50140', 'TARO SPECIAL HT ULTRA/TARO ULTRA 140', 'TALUSIA HR 140', 'CYLTECH 140', 'MOBILGARD 5145', 'ALEXIA 140', 'NAVIGO 140 MCL', 'N.A', 'N.A' ) },
				{ code: 'SYS OIL 3005', subcategory: 'System Oils', brands: b( 'N.A', 'VERITAS 800 MARINE 30', 'ATLANTA MARINE D 3005', 'N.A', 'N.A', 'N.A', 'N.A', 'STRATA SMO 30', 'N.A' ) },
				{ code: 'SYS OIL 3006', subcategory: 'System Oils', brands: b( 'SUPERBEAR 3006', 'N.A', 'N.A', 'CDX 30', 'MOBILGARD 300', 'MELINA S 30', 'NAVIGO 6SO/NAVIGO 6CO', 'N.A', 'MARINE SYSTEM OIL 3006' ) },
				{ code: 'MSDO 3030', subcategory: 'TPEO', brands: b( 'POWER 3030', 'TARO 30 DP 30', 'AURELIA TI 3030', 'TLX PLUS 303/TLX XTRA 303', 'MOBILGARD M330', 'ARGINA S3 30/ARGINA T30', 'NAVIGO TPEO 30/30', 'STRATA MSDO 330', 'MARINE TPEO 3030' ) },
				{ code: 'MSDO 3040', subcategory: 'TPEO', brands: b( 'POWER 3040', 'N.A', 'AURELIA TI 3040', 'N.A', 'MOBILGARD M340', 'N.A', 'N.A', 'STRATA MSDO 340', 'MARINE TPEO 3040' ) },
				{ code: 'MSDO 3055', subcategory: 'TPEO', brands: b( 'POWER 3055', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'STRATA MSDO 355', 'MARINE TPEO 3055' ) },
				{ code: 'MSDO 4030', subcategory: 'TPEO', brands: b( 'POWER 4030', 'TARO 30 DP 40', 'AURELIA TI 4030', 'TLX PLUS 304/TLX XTRA 304', 'MOBILGARD M430', 'ARGINA T40/ARGINA S3 40', 'NAVIGO TPEO 30/40', 'STRATA MSDO 430', 'MARINE TPEO 4030' ) },
				{ code: 'MSDO 4040', subcategory: 'TPEO', brands: b( 'POWER 4040', 'TARO 40 XL 40', 'AURELIA TI 4040', 'TLX PLUS 404', 'MOBILGARD M440', 'ARGINA S4 40', 'NAVIGO TPEO 40/40', 'STRATA MSDO 440', 'MARINE TPEO 4040' ) },
				{ code: 'MSDO 4055', subcategory: 'TPEO', brands: b( 'POWER 4055', 'TARO 50 XL 40', 'AURELIA TI 4055', 'TLX PLUS 504', 'MOBILGARD M50', 'ARGINA S5 40', 'NAVIGO TPEO 55/40', 'STRATA MSDO 455', 'MARINE TPEO 4055' ) },
				{ code: 'MSDO 3012', subcategory: 'TPEO', brands: b( 'POWER MDO 3012', 'N.A', 'DISOLA M 3012', 'N.A', 'MOBILGARD 312', 'GADINA AL 30', 'NAVIGO TPEO 15/30', 'STRATA LSF 312', 'MARINE MDO 3012' ) },
				{ code: 'MSDO 3015', subcategory: 'TPEO', brands: b( 'POWER MDO 3015', 'DELO 1000 MARINE 30', 'DISOLA M 3015', 'MHP 153', 'MOBILGARD 315', 'GADINIA 30', 'N.A', 'STRATA LSF 315', 'MARINE MDO 3015' ) },
				{ code: 'MSDO 3020', subcategory: 'TPEO', brands: b( 'POWER MDO 3020', 'TARO 20 DP 30', 'AURELIA TI 3020', 'TLX PLUS 203', 'N.A', 'N.A', 'NAVIGO TPEO 20/30', 'STRATA LSF 320', 'MARINE MDO 3020' ) },
				{ code: 'MSDO 4012', subcategory: 'TPEO', brands: b( 'POWER MDO 4012', 'DELO 1000 MARINE 40', 'DISOLA M 4012', 'CASTROL MLC 40', 'MOBILGARD ADL 40', 'GADINIA S3 40', 'NAVIGO TPEO 12/40', 'STRATA LSF 412', 'MARINE MDO 4012' ) },
				{ code: 'MSDO 4015', subcategory: 'TPEO', brands: b( 'POWER MDO 4015', 'DELO 1000 MARINE 40', 'DISOLA M 4015', 'MHP 154', 'MOBILGARD 412', 'GADINIA S3 40', 'NAVIGO TPEO 15/40', 'STRATA LSF 415', 'MARINE MDO 4015' ) },
				{ code: 'MSDO 4020', subcategory: 'TPEO', brands: b( 'POWER MDO 4020', 'TARO 20 DP 40', 'AURELIA TI 4020', 'TLX XTRA 204', 'MOBILGARD 420', 'ARGINA S2 40', 'NAVIGO TPEO 20/40', 'STRATA LSF 420', 'MARINE MDO 4020' ) }
			]
		},
		secondaryGrades: {
			label: 'Secondary Grades',
			defaultIndex: 0,
			products: [
				{ code: 'HYD AW 15', subcategory: 'Hydraulic Oil (AW)', brands: b( 'HARMONY AW 15', 'RANDO HDZ 15', 'VISGA 15', 'HYSPIN AWH-M 15', 'MOBIL DTE 10 EXCEL 15', 'TELLUS S2 VX 15/TELLUS S2 V15', 'RENOLIN B HVI 15', 'HYDRAULIC HVI 15', 'HYDRAULIC HVI 15' ) },
				{ code: 'HYD AW 22', subcategory: 'Hydraulic Oil (AW)', brands: b( 'HARMONY AW 22', 'RANDO HDZ 22', 'VISGA 22', 'N.A', 'MOBIL DTE 10 EXCEL 22', 'TELLUS S2 VX 22/TELLUS S2 V22', 'RENOLIN B HVI 22', 'HYDRAULIC HVI 22', 'HYDRAULIC HVI 22' ) },
				{ code: 'HYD AW 32', subcategory: 'Hydraulic Oil (AW)', brands: b( 'HARMONY AW 32', 'RANDO HDZ 32', 'VISGA 32', 'HYSPIN AWH-M 32', 'MOBIL DTE 10 EXCEL 32', 'TELLUS S2 VX 32/TELLUS S2 V32', 'RENOLIN B HVI 32', 'HYDRAULIC HVI 32', 'HYDRAULIC HVI 32' ) },
				{ code: 'HYD AW 46', subcategory: 'Hydraulic Oil (AW)', brands: b( 'HARMONY AW 46', 'RANDO HDZ 46', 'VISGA 46', 'HYSPIN AWH-M 46', 'MOBIL DTE 10 EXCEL 46', 'TELLUS S2 VX 46/TELLUS S2 V46', 'RENOLIN B HVI 46', 'HYDRAULIC HVI 46', 'HYDRAULIC HVI 46' ) },
				{ code: 'HYD AW 68', subcategory: 'Hydraulic Oil (AW)', brands: b( 'HARMONY AW 68', 'RANDO HDZ 68', 'VISGA 68', 'HYSPIN AWH-M 68', 'MOBIL DTE 10 EXCEL 68', 'TELLUS S2 VX 68/TELLUS S2 V68', 'RENOLIN B HVI 68', 'HYDRAULIC HVI 68', 'HYDRAULIC HVI 68' ) },
				{ code: 'HYD AW 100', subcategory: 'Hydraulic Oil (AW)', brands: b( 'HARMONY AW 100', 'RANDO HDZ 100', 'VISGA 100', 'HYSPIN AWH-M 100', 'MOBIL DTE 10 EXCEL 100', 'TELLUS S2 VX 100/TELLUS S2 V100', 'RENOLIN B HVI 100', 'HYDRAULIC HVI 100', 'HYDRAULIC HVI 100' ) },
				{ code: 'HYD AW 150', subcategory: 'Hydraulic Oil (AW)', brands: b( 'HARMONY AW 150', 'N.A', 'VISGA 150', 'HYSPIN AWH-M 150', 'MOBIL DTE 10 EXCEL 150', 'N.A', 'RENOLIN B HVI 150', 'HYDRAULIC HVI 150', 'HYDRAULIC HVI 150' ) },
				{ code: 'HYD HVI 15', subcategory: 'Hydraulic Oil (HVI)', brands: b( 'Hydraulic HVI Plus 15', 'RANDO HDZ 15', 'VISGA 15', 'HYSPIN AWH-M 15', 'MOBIL DTE 10 EXCEL 15', 'TELLUS S2 VX 15/TELLUS S2 V15', 'RENOLIN B HVI 15', 'HYDRAULIC HVI 15', 'HYDRAULIC HVI 15' ) },
				{ code: 'HYD HVI 22', subcategory: 'Hydraulic Oil (HVI)', brands: b( 'Hydraulic HVI Plus 22', 'RANDO HDZ 22', 'VISGA 22', 'N.A', 'MOBIL DTE 10 EXCEL 22', 'TELLUS S2 VX 22/TELLUS S2 V22', 'RENOLIN B HVI 22', 'HYDRAULIC HVI 22', 'HYDRAULIC HVI 22' ) },
				{ code: 'HYD HVI 32', subcategory: 'Hydraulic Oil (HVI)', brands: b( 'Hydraulic HVI Plus 32', 'RANDO HDZ 32', 'VISGA 32', 'HYSPIN AWH-M 32', 'MOBIL DTE 10 EXCEL 32', 'TELLUS S2 VX 32/TELLUS S2 V32', 'RENOLIN B HVI 32', 'HYDRAULIC HVI 32', 'HYDRAULIC HVI 32' ) },
				{ code: 'HYD HVI 46', subcategory: 'Hydraulic Oil (HVI)', brands: b( 'Hydraulic HVI Plus 46', 'RANDO HDZ 46', 'VISGA 46', 'HYSPIN AWH-M 46', 'MOBIL DTE 10 EXCEL 46', 'TELLUS S2 VX 46/TELLUS S2 V46', 'RENOLIN B HVI 46', 'HYDRAULIC HVI 46', 'HYDRAULIC HVI 46' ) },
				{ code: 'HYD HVI 68', subcategory: 'Hydraulic Oil (HVI)', brands: b( 'Hydraulic HVI Plus 68', 'RANDO HDZ 68', 'VISGA 68', 'HYSPIN AWH-M 68', 'MOBIL DTE 10 EXCEL 68', 'TELLUS S2 VX 68/TELLUS S2 V68', 'RENOLIN B HVI 68', 'HYDRAULIC HVI 68', 'HYDRAULIC HVI 68' ) },
				{ code: 'HYD HVI 100', subcategory: 'Hydraulic Oil (HVI)', brands: b( 'Hydraulic HVI Plus 100', 'RANDO HDZ 100', 'VISGA 100', 'HYSPIN AWH-M 100', 'MOBIL DTE 10 EXCEL 100', 'TELLUS S2 VX 100/TELLUS S2 V100', 'RENOLIN B HVI 100', 'HYDRAULIC HVI 100', 'HYDRAULIC HVI 100' ) },
				{ code: 'HYD HVI 150', subcategory: 'Hydraulic Oil (HVI)', brands: b( 'Hydraulic HVI Plus 150', 'N.A', 'VISGA 150', 'HYSPIN AWH-M 150', 'MOBIL DTE 10 EXCEL 150', 'N.A', 'RENOLIN B HVI 150', 'HYDRAULIC HVI 150', 'HYDRAULIC HVI 150' ) },
				{ code: 'GEAR 68', subcategory: 'Gear Oil', brands: b( 'GEAR OIL 68', 'MEROPA 68', 'EPONA Z 68', 'ALPHA SP 68', 'MOBILGEAR 600 XP 68', 'OMALA S2 GX 68/OMALA S2 G 68', 'RENOLIN CLP 68', 'GEAR OIL 68', 'GEAR OIL 68' ) },
				{ code: 'GEAR 100', subcategory: 'Gear Oil', brands: b( 'GEAR OIL 100', 'MEROPA 100', 'EPONA Z 100', 'ALPHA SP 100', 'MOBILGEAR 600 XP 100', 'OMALA S2 GX 100/OMALA S2 G 100', 'RENOLIN CLP 100', 'GEAR OIL 100', 'GEAR OIL 100' ) },
				{ code: 'GEAR 150', subcategory: 'Gear Oil', brands: b( 'GEAR OIL 150', 'MEROPA 150', 'EPONA Z 150', 'ALPHA SP 150', 'MOBILGEAR 600 XP 150', 'OMALA S2 GX 150/OMALA S2 G 150', 'RENOLIN CLP 150', 'GEAR OIL 150', 'GEAR OIL 150' ) },
				{ code: 'GEAR 220', subcategory: 'Gear Oil', brands: b( 'GEAR OIL 220', 'MEROPA 220', 'EPONA Z 220', 'ALPHA SP 220', 'MOBILGEAR 600 XP 220', 'OMALA S2 GX 220/OMALA S2 G 220', 'RENOLIN CLP 220', 'GEAR OIL 220', 'GEAR OIL 220' ) },
				{ code: 'GEAR 320', subcategory: 'Gear Oil', brands: b( 'GEAR OIL 320', 'MEROPA 320', 'EPONA Z 320', 'ALPHA SP 320', 'MOBILGEAR 600 XP 320', 'OMALA S2 GX 320/OMALA S2 G 320', 'RENOLIN CLP 320', 'GEAR OIL 320', 'GEAR OIL 320' ) },
				{ code: 'GEAR 460', subcategory: 'Gear Oil', brands: b( 'GEAR OIL 460', 'MEROPA 460', 'EPONA Z 460', 'ALPHA SP 460', 'MOBILGEAR 600 XP 460', 'OMALA S2 GX 460/OMALA S2 G 460', 'RENOLIN CLP 460', 'GEAR OIL 460', 'GEAR OIL 460' ) },
				{ code: 'GEAR 680', subcategory: 'Gear Oil', brands: b( 'GEAR OIL 680', 'MEROPA 680', 'N.A', 'ALPHA SP 680', 'MOBILGEAR 600 XP 680', 'OMALA S2 GX 680/OMALA S2 G 680', 'RENOLIN CLP 680', 'GEAR OIL 680', 'GEAR OIL 680' ) },
				{ code: 'ATF DX III', subcategory: 'Gear Oil', brands: b( 'SEA ATF III', 'Havoline ATF III-H', 'N.A', 'CASTROL TRANSMAX', 'N.A', 'Spirax S4 ATF HDX', 'TITAN ATF 4000', 'ENOC ACTIVE VVM', 'N.A' ) },
				{ code: 'UTTO 80W', subcategory: 'Gear Oil', brands: b( 'SEA UTTO 80W', '1000 THF', 'N.A', 'Agri Trans Plus 80W', 'Mobil fluid 424', 'Shell Spirax S4 TXM', 'N.A', 'ENOC TRACTOR UTF', 'N.A' ) },
				{ code: 'GEAR 80W-90', subcategory: 'Gear Oil', brands: b( 'SEA GEAR 80W-90', 'Delo Gear EP-5 SAE 80W-90', 'N.A', 'N.A', 'N.A', 'Spirax S3 AX 80W-90', 'N.A', 'ZENON ULTRA PLUS 80W-90', 'N.A' ) },
				{ code: 'TURBINE 32', subcategory: 'Turbine Oil', brands: b( 'TURBINE OIL 32', 'REGAL R&O 32', 'PRESLIA 32', 'PERFECTO T 32', 'MOBIL DTE LIGHT', 'TURBO T 32', 'RENOLIN ETERNA 32', 'Turbine GT-32', 'Turbine Oil 32' ) },
				{ code: 'TURBINE 46', subcategory: 'Turbine Oil', brands: b( 'TURBINE OIL 46', 'REGAL R&O 46', 'PRESLIA 46', 'PERFECTO T 46', 'MOBIL DTE MEDIUM', 'TURBO T 46', 'RENOLIN ETERNA 46', 'Turbine GT-46', 'Turbine Oil 46' ) },
				{ code: 'TURBINE 68', subcategory: 'Turbine Oil', brands: b( 'TURBINE OIL 68', 'REGAL R&O 68', 'PRESLIA 68', 'PERFECTO T 68', 'MOBIL DTE HEAVY MEDIUM', 'TURBO T 68', 'RENOLIN ETERNA 68', 'Turbine GT-68', 'Turbine Oil 68' ) },
				{ code: 'TURBINE 100', subcategory: 'Turbine Oil', brands: b( 'TURBINE OIL 100', 'N.A', 'PRESLIA 100', 'PERFECTO T 100', 'MOBIL DTE HEAVY', 'TURBO T 100', 'RENOLIN ETERNA 100', 'Turbine GT-100', 'Turbine Oil 100' ) },
				{ code: 'COMP 46', subcategory: 'Compressor Oil', brands: b( 'N.A', 'COMPRESSOR OIL EP VDL 46', 'DACNIS 46', 'AIRCOL PD 46', 'MOBIL RARUS 425', 'Corena S3 R 46', 'RENOLIN 503', 'N.A', 'N.A' ) },
				{ code: 'COMP 68', subcategory: 'Compressor Oil', brands: b( 'N.A', 'COMPRESSOR OIL EP VDL 68', 'DACNIS 68', 'AIRCOL PD 68', 'MOBIL RARUS 426', 'Corena S3 R 68', 'N.A', 'N.A', 'N.A' ) },
				{ code: 'COMP 100', subcategory: 'Compressor Oil', brands: b( 'COMPRESSOR OIL 100', 'COMPRESSOR OIL EP VDL 100', 'DACNIS 100', 'AIRCOL PD 100', 'MOBIL RARUS 427', 'Corena S2 P 100', 'RENOLIN 504', 'COMPRESSOR H 100', 'COMPRESSOR 100' ) },
				{ code: 'COMP 150', subcategory: 'Compressor Oil', brands: b( 'COMPRESSOR OIL 150', 'COMPRESSOR OIL EP VDL 150', 'DACNIS 150', 'AIRCOL PD 150', 'MOBIL RARUS 429', 'Corena S2 P 150', 'RENOLIN 505', 'COMPRESSOR H 150', 'N.A' ) },
				{ code: 'THERMAL 32', subcategory: 'Heat Transfer & Coolant', brands: b( 'HT OIL 32', 'TEXATHERM 32', 'SERIOLA ETA 32', 'PERFECTO HT 5', 'MOBILTHERM 605', 'HEAT TRANSFER OIL S2', 'ASSISTO THERM 5', 'HEAT TRANSFER SPECIAL 32', 'THERMAL OIL 32' ) },
				{ code: 'COOLANT 50', subcategory: 'Heat Transfer & Coolant', brands: b( 'Gulf Eurocool 50% Coolant', 'HDAX Prediluted 50/50 Coolant', 'TotalEnergies HDLL COOLANT 50/50', 'Radicool', 'Mobil Heavy Duty 50/50 Prediluted Coolant', 'Shell Premium Engine Coolant NF RTU 50/50', 'LUKOIL ANTIFREEZE LONG LIFE 50', 'EN-Cool OAT Extra Long Life 50%', 'N.A' ) },
				{ code: 'COOLANT 100', subcategory: 'Heat Transfer & Coolant', brands: b( 'Gulf Eurocool 100% Coolant', 'N.A', 'N.A', 'N.A', 'Mobil Heavy Duty SCA', 'Shell Premium Engine Coolant NF RTU', 'LUKOIL ANTIFREEZE LONG LIFE CONCENTRATE', 'EN-Cool OAT Extra Long Life', 'N.A' ) },
				{ code: 'REF N COOL OIL 32', subcategory: 'Refrigeration Oil', brands: b( 'N.A', 'CAPELLA WF 6832', 'LUNARIA FR 32', 'N.A', 'GARGOYLE ARTIC OIL 155', 'N.A', 'RENISO KC 32', 'N.A', 'N.A' ) },
				{ code: 'REF N COOL OIL 68', subcategory: 'Refrigeration Oil', brands: b( 'N COOLOIL 68', 'CAPELLA WF 68', 'LUNARIA FR 68', 'AIRCOL 299', 'GARGOYLE ARTIC OIL 300', 'N.A', 'RENISO KC 68', 'REFRIGERATION N 68', 'N.A' ) },
				{ code: '15W-40', subcategory: 'Engine Oil', brands: b( 'POWER MX 15W-40', 'URSA MARINE 15W40', 'DISOLA W', 'Tection Global 15W-40', 'MOBIL DELVAC MX 15W40', 'RIMULA R4 X 15W40', 'AVANTGARDE ULTRA 15W40', 'STRATA HSDB 15W-40', 'Marine power X 15w-40' ) },
				{ code: '10W-30', subcategory: 'Engine Oil', brands: b( 'POWERFLEET 10W-30', 'DELO 600 ADF 10W-30', 'QUARTZ 7000 DIESEL CI-4 10W-30', 'MAGNATEC Professional Diesel 10W-30', 'Mobil Delvac Extreme 10W30', 'SHELL HX7 DIESEL 10W-30', 'AVANTGARDE ULTRA 10W-30', 'VULCAN 770X ENERGY 10W-30', 'N.A' ) },
				{ code: '10W-40', subcategory: 'Engine Oil', brands: b( 'POWERFLEET 10W-40', 'N.A', 'QUARTZ 7000 DIESEL CI-4 10W-40', 'MAGNATEC Professional Diesel 10W-40', 'Mobil Delvac Extreme 10W40', 'SHELL HX7 DIESEL 10W-40', 'AVANTGARDE ULTRA 10W-40', 'VULCAN 800X 10W-40', 'N.A' ) },
				{ code: '20W-50', subcategory: 'Engine Oil', brands: b( 'Gulf Superfleet Supreme 20W-50', 'Delo Gold Plus 20W-50', 'TotalEnergies RUBIA TIR 7400 20W-50', 'CRB Multi 20W-50 CI-4', 'MOBILGARD HSD 20W-50 CI-4', 'Shell Helix HX5 20W-50', 'AVANTGARDE ULTRA SAE 20W50 API CI-4/SL', 'enoc protec premium sae 20w-50', 'N.A' ) },
				{ code: 'DD 30', subcategory: 'Engine Oil', brands: b( 'DIESEL DD 30', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A' ) },
				{ code: 'DD 40', subcategory: 'Engine Oil', brands: b( 'DIESEL DD 40', 'DELO 100 MOTOR OIL SAE 40', 'RUBIA CF-2 40', 'Tection DD Monograde 40', 'N.A', 'Rotella DD+ 40', 'NAVIGO DD 40', 'STRATA DD 40', 'N.A' ) },
				{ code: 'Outboard 2T', subcategory: 'Engine Oil', brands: b( 'OUTBOARD 3', 'Havoline Outboard 2T', 'N.A', 'Outboard 2T', 'Mobile Outboard Plus', 'Nautilus Premium Outboard', 'TITAN 2T 100S', 'Protec 2T Super Outboard', 'N.A' ) },
				{ code: 'COMP SYN PAO 46', subcategory: 'Synthetic Compressor Oil', brands: b( 'SYNTH COMPRESSOR OIL 46', 'CETUS PAO 46', 'BARELF SM 46', 'AIRCOL SR 46', 'MOBIL RARUS SHC 1025', 'CORENA S4 R 46', 'RENOLIN UNISYN OL 46', 'COMPRESSOR PA 46', 'SYNTH COMPRESSOR OIL 46' ) },
				{ code: 'COMP SYN PAO 68', subcategory: 'Synthetic Compressor Oil', brands: b( 'SYNTH COMPRESSOR OIL 68', 'CETUS PAO 68', 'BARELF SM 68', 'AIRCOL SR 68', 'MOBIL RARUS SHC 1026', 'CORENA S4 R 68', 'RENOLIN UNISYN OL 68', 'COMPRESSOR PA 68', 'SYNTH COMPRESSOR OIL 68' ) },
				{ code: 'COMP SYN PAO 100', subcategory: 'Synthetic Compressor Oil', brands: b( 'N.A', 'CETUS DE 100', 'BARELF CH 100', 'AIRCOL SN 100', 'MOBIL RARUS 827', 'CORENA S4 P 100', 'RENOLIN SE 100', 'COMPRESSOR SE 100', 'DE COMPRESSOR OIL 100' ) },
				{ code: 'COMP SYN PAO 150', subcategory: 'Synthetic Compressor Oil', brands: b( 'N.A', 'CETUS DE 150', 'N.A', 'AIRCOL SN 150', 'MOBIL RARUS 829', 'N.A', 'NAVISYN DE 150', 'N.A', 'N.A' ) },
				{ code: 'COMP SYN DE 100', subcategory: 'Synthetic Compressor Oil', brands: b( 'GulfSea DE Compressor Oil 100', 'Cetus DE 100', 'Barelf CH 100', 'Aircol SN 100', 'Rarus 827', 'Corena S4 P 100', 'NAVISYN DE 100', 'STRATA MARINE COMPRESSOR SE 100', 'Marine DE Compressor Oil 100' ) },
				{ code: 'COMP SYN DE 150', subcategory: 'Synthetic Compressor Oil', brands: b( 'GulfSea DE Compressor Oil 150', 'Cetus DE 150', 'N.A', 'Aircol SN 150', 'RARUS 829', 'N.A', 'N.A', 'N.A', 'N.A' ) },
				{ code: 'COMP SYN LPG 150', subcategory: 'Synthetic Compressor Oil', brands: b( 'SYNTH LPG COMPRESSOR OIL 150', 'LPG COMPRESSOR OIL', 'PRIMERIA LPG 150', 'AIRCOL PG 185', 'MOBIL GLYGOYLE 150', 'REFRIGERATION OIL S4 PV 190', 'RENOLIN LPG 185', 'COMPRESSOR PG 150', 'N.A' ) },
				{ code: 'GEAR SYN PAO 150', subcategory: 'Synthetic Gear Oil', brands: b( 'SYNTH GEAR OIL 150', 'PINNACLE EP 150', 'N.A', 'ALPHASYN HG 150', 'MOBIL SHC 629', 'OMALA S4 GXV 150', 'RENOLIN UNISYN CLP 150', 'GEAR SH 150', 'N.A' ) },
				{ code: 'GEAR SYN PAO 220', subcategory: 'Synthetic Gear Oil', brands: b( 'SYNTH GEAR OIL 220', 'PINNACLE MARINE GEAR 220', 'EPONA SA 220', 'ALPHASYN HG 220', 'MOBILE SHC 630', 'OMALA S4 GXV 220', 'RENOLIN UNISYN CLP 220', 'GEAR SH 150', 'SYNTH GEAR OIL 220' ) },
				{ code: 'GEAR SYN PAO 320', subcategory: 'Synthetic Gear Oil', brands: b( 'SYNTH GEAR OIL 320', 'N.A', 'EPONA SA 320', 'ALPHASYN HG 320', 'MOBIL SHC 632', 'OMALA S4 WE 220', 'RENOLIN UNISYN CLP 320', 'GEAR SH 150', 'SYNTH GEAR OIL 320' ) },
				{ code: 'GEAR SYN PAG 220', subcategory: 'Synthetic Gear Oil', brands: b( 'SYNTH GEAR OIL PG 220', 'N.A', 'N.A', 'ALPHASYN PG 220', 'N.A', 'OMALA S4 WE 220', 'N.A', 'GEAR PG 220', 'N.A' ) },
				{ code: 'REF SYN POE 32', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'PE COOLOIL 32', 'CAPELLA HFC 32', 'PLANETELF ACD 32', 'AIRCOL SW 32', 'MOBIL EAL ARTIC 32', 'REFRIGERATION OIL S4 FRF 32', 'RENISO TRITON SEZ 32', 'REFRIGERATION PE 32', 'PE COOLOIL 32' ) },
				{ code: 'REF SYN POE 46', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'PE COOLOIL 46', 'CAPELLA HFC 46', 'PLANETELF ACD 46', 'AIRCOL SW 46', 'MOBIL EAL ARTIC 46', 'N.A', 'N.A', 'N.A', 'PE COOLOIL 46' ) },
				{ code: 'REF SYN POE 68', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'PE COOLOIL 68', 'CAPELLA HFC 55', 'PLANETELF ACD 68', 'AIRCOL SW 68', 'MOBIL EAL ARTIC 68', 'REFRIGERATION OIL S4 FRF 68', 'RENISO TRITON SEZ 68', 'REFRIGERATION PE 68', 'PE COOLOIL 68' ) },
				{ code: 'REF SYN POE 100', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'PE COOLOIL 100', 'CAPELLA HFC 100', 'PLANETELF ACD 100FY', 'AIRCOL SW 100', 'MOBIL EAL ARTIC 100', 'REFRIGERATION OIL S4 FRF 100', 'RENISO TRITON SEZ 100', 'REFRIGERATION PE 100', 'PE COOLOIL 100' ) },
				{ code: 'REF SYN POE 150', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'PE COOLOIL 170', 'N.A', 'N.A', 'AIRCOL SW 170', 'N.A', 'N.A', 'RENISO TRITON SE 170', 'N.A', 'PE COOLOIL 150' ) },
				{ code: 'REF SYN POE 220', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'PE COOLOIL 220', 'N.A', 'PLANETELF ACD 220FY', 'AIRCOL SW 220', 'MOBIL EAL ARTIC 220', 'N.A', 'RENISO TRITON SE 220', 'N.A', 'PE COOLOIL 220' ) },
				{ code: 'REF SYN DAB 55', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'AB COOLOIL 55', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'REFRIGERATION AB 55', 'N.A' ) },
				{ code: 'REF SYN DAB 68', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'N.A', 'REFRIGERATION OIL LOW TEMP 68', 'BARELF AL 68', 'AIRCOL 2284', 'MOBIL ZERICE S 68', 'REFRIGERATION OIL S4 FRV 68', 'RENISO S 68', 'N.A', 'N.A' ) },
				{ code: 'REF SYN DAB 100', subcategory: 'Synthetic Refrigeration Oil', brands: b( 'AB COOLOIL 100', 'N.A', 'BARELF AL 100', 'AIRCOL 2285', 'MOBIL ZERICE S 100', 'REFRIGERATION OIL S4 FRV 100', 'RENISO SP 100', 'REFRIGERATION AB 100', 'N.A' ) }
			]
		},
		eal: {
			label: 'EAL',
			defaultIndex: 0,
			products: [
				{ code: 'HYD EAL 32', subcategory: 'EAL Hydraulic Fluids', brands: b( 'BD HYDRAULIC OIL 32', 'N.A', 'BIOHYDRAN TMP 32', 'BIOBAR 32', 'MOBIL SHC AWARE H 32', 'N.A', 'PLANTOSYN 32 HVI', 'N.A', 'N.A' ) },
				{ code: 'HYD EAL 46', subcategory: 'EAL Hydraulic Fluids', brands: b( 'BD HYDRAULIC OIL 46', 'CLARITY SYNTHETIC EA HYDRAULIC OIL 46', 'BIOHYDRAN TMP 46', 'BIOBAR 46', 'MOBIL SHC AWARE H 46', 'NATURELLE HF-E 46', 'PLANTOSYN 46 HVI', 'N.A', 'N.A' ) },
				{ code: 'HYD EAL 68', subcategory: 'EAL Hydraulic Fluids', brands: b( 'BD HYDRAULIC OIL 68', 'CLARITY SYNTHETIC EA HYDRAULIC OIL 46', 'BIOHYDRAN TMP 68', 'BIOBAR 68', 'MOBIL SHC AWARE H 68', 'NATURELLE HF-E 68', 'PLANTOSYN 68 HVI', 'N.A', 'N.A' ) },
				{ code: 'HYD EAL 100', subcategory: 'EAL Hydraulic Fluids', brands: b( 'BD HYDRAULIC OIL 100', 'CLARITY SYNTHETIC EA HYDRAULIC OIL 46', 'BIOHYDRAN TMP 100', 'BIOBAR 100', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A' ) },
				{ code: 'STERN EAL 68', subcategory: 'EAL Sterntube Oils', brands: b( 'BD STERNTUBE OIL 68', 'CLARITY SYNTHETIC EA HYDRAULIC OIL 68', 'N.A', 'BIOSTAT 68', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A' ) },
				{ code: 'STERN EAL 100', subcategory: 'EAL Sterntube Oils', brands: b( 'BD STERNTUBE OIL 100', 'CLARITY SYNTHETIC EA HYDRAULIC OIL 100', 'BIONEPTAN 100', 'BIOSTAT 100', 'MOBIL SHC AWARE ST100', 'NATURELLE S4 STERNTUBE FLUID 100', 'PLANTOGEAR 100S', 'N.A', 'N.A' ) },
				{ code: 'STERN EAL 220', subcategory: 'EAL Sterntube Oils', brands: b( 'BD STERNTUBE OIL 220', 'N.A', 'BIONEPTAN 220', 'BIOSTAT 220', 'MOBIL SHC AWARE ST220', 'N.A', 'PLANTOGEAR 220S', 'N.A', 'N.A' ) },
				{ code: 'GEAR EAL 68', subcategory: 'EAL Gear Oils', brands: b( 'BD GEAR OIL 68', 'CLARITY SYNTHETIC EA GEAR OIL 100', 'CARTER BIO 68', 'BIOSTAT 68', 'MOBIL SHC AWARE GEAR 68', 'NATURELLE S4 GEAR FLUID 68', 'N.A', 'N.A', 'N.A' ) },
				{ code: 'GEAR EAL 100', subcategory: 'EAL Gear Oils', brands: b( 'BD GEAR OIL 100', 'CLARITY SYNTHETIC EA GEAR OIL 150', 'CARTER BIO 100', 'BIOSTAT 100', 'MOBIL SHC AWARE GEAR 100', 'NATURELLE S4 GEAR FLUID 100', 'PLANTOGEAR 100S', 'N.A', 'N.A' ) },
				{ code: 'GEAR EAL 150', subcategory: 'EAL Gear Oils', brands: b( 'BD GEAR OIL 150', 'N.A', 'CARTER BIO 150', 'N.A', 'N.A', 'NATURELLE S4 GEAR FLUID 150', 'PLANTOGEAR 150S', 'N.A', 'N.A' ) },
				{ code: 'GEAR EAL 220', subcategory: 'EAL Gear Oils', brands: b( 'N.A', 'N.A', 'CARTER BIO 220', 'N.A', 'N.A', 'NATURELLE S4 GEAR FLUID 220', 'PLANTOGEAR 220S', 'N.A', 'N.A' ) },
				{ code: 'GREASE EAL', subcategory: 'EAL Grease', brands: b( 'BD EP0/EP2 GREASE', 'CLARITY SYNTHETIC EA GREASE', 'BIOMULTIS EP 2', 'BIOTAC MP', 'MOBIL SHC AWARE GREASE EP 2', 'NATURELLE GREASE SSV 120P/PLANTOGEL 2S', 'NAVIGREASE BIO 2', 'N.A', 'N.A' ) }
			]
		},
		greases: {
			label: 'Greases',
			defaultIndex: 0,
			products: [
				{ code: 'GREASE CS WR', subcategory: 'Calcium Sulfonate Complex', brands: b( 'HYPERBAR SUPER CS EP 0/1', 'TEXCLAD PREMIUM 0/1', 'CERAN AD PLUS', 'SPHEEROL SX 2/SPEEROL EPL0/SPEEROL EP1', 'MOBILGREASE XHP 220 (NLGI 0)/XHP 221 (NLGI 1)', 'GADUS S2 V220 0/GADUS S2 V220 1', 'RENOLIT CX-EP 0/RENOLIT EP X1', 'STRATA GREASE MWR 2', 'N.A' ) },
				{ code: 'GREASE CS EP 2', subcategory: 'Calcium Sulfonate Complex', brands: b( 'HYPERBAR SUPER CS EP 2', 'MULTIFAK EP 2', 'CERAN XM220', 'SPHEEROL SX 2', 'MOBIL CENTAUR XHP 221', 'GADUS S2 V220 2', 'NAVIGREASE EP 2', 'STRATA GREASE EP 2', 'CS GREASE EP2' ) },
				{ code: 'GREASE HT LC EP 2', subcategory: 'Lithium Complex', brands: b( 'N.A', 'N.A', 'N.A', 'CASTROL LMX EP2', 'MOBILGREASE XHP 222 SPECIAL', 'GADUS S2 V220 3', 'NAVIGREASE LX 2/3', 'VERRON EM', 'N.A' ) },
				{ code: 'GREASE HT LC EP 3', subcategory: 'Lithium Complex', brands: b( 'HYPERBAR LC 3 EP 3', 'MULTIFAK RSP MULTIES EP 0', 'N.A', 'CASTROL LMX EP3', 'MOBILGREASE XHP 223 SPECIAL', 'N.A', 'NAVIGREASE LX 2/3', 'N.A', 'N.A' ) },
				{ code: 'GREASE Li EP2', subcategory: 'Lithium', brands: b( 'Gulf Crown EPX 2', 'MOLYTEX EP2', 'MULTIES EP2', 'SPHEEROL EP 2', 'Mobilux EP 2', 'Shell Gadus S2 V220 2', 'Lukoil Signum LP2', 'N.A', 'N.A' ) }
			]
		}
	};

	var compareState = { category: 'mainGrades', index: 1, colA: '', colB: '', subcategory: null };

	function populateBrandSelect( selectEl, selectedKey, placeholderText ) {
		selectEl.innerHTML = '';
		var placeholderOpt = document.createElement( 'option' );
		placeholderOpt.value = '';
		placeholderOpt.textContent = placeholderText;
		placeholderOpt.disabled = true;
		placeholderOpt.selected = ! selectedKey;
		selectEl.appendChild( placeholderOpt );
		Object.keys( COMPARE_BRANDS ).forEach( function ( key ) {
			var opt = document.createElement( 'option' );
			opt.value = key;
			opt.textContent = COMPARE_BRANDS[ key ];
			if ( key === selectedKey ) {
				opt.selected = true;
			}
			selectEl.appendChild( opt );
		} );
	}

	function getSubcategories( cat ) {
		var list = [];
		cat.products.forEach( function ( product ) {
			if ( product.subcategory && list.indexOf( product.subcategory ) === -1 ) {
				list.push( product.subcategory );
			}
		} );
		return list;
	}

	function renderSubcats( category ) {
		var wrap = document.getElementById( 'am-cmp-subcats' );
		if ( ! wrap ) {
			return;
		}
		wrap.innerHTML = '';

		var cat = COMPARE_CATEGORIES[ category ];
		var subcats = getSubcategories( cat );

		if ( ! subcats.length ) {
			compareState.subcategory = null;
			return;
		}

		if ( subcats.indexOf( compareState.subcategory ) === -1 ) {
			compareState.subcategory = subcats[ 0 ];
		}

		subcats.forEach( function ( subcat ) {
			var btn = document.createElement( 'button' );
			btn.className = 'am-cmp-subcat' + ( subcat === compareState.subcategory ? ' is-active' : '' );
			btn.type = 'button';
			btn.textContent = subcat;
			btn.addEventListener( 'click', function () {
				compareState.subcategory = subcat;
				wrap.querySelectorAll( '.am-cmp-subcat' ).forEach( function ( b ) {
					b.classList.remove( 'is-active' );
				} );
				btn.classList.add( 'is-active' );
				renderCompareTable( document.getElementById( 'am-cmp-tbody' ), compareState.category );
			} );
			wrap.appendChild( btn );
		} );
	}

	function renderCompareTable( tbodyEl, category ) {
		var cat = COMPARE_CATEGORIES[ category ];
		tbodyEl.innerHTML = '';

		var products = compareState.subcategory
			? cat.products.filter( function ( p ) { return p.subcategory === compareState.subcategory; } )
			: cat.products;

		if ( ! compareState.colA || ! compareState.colB ) {
			var promptRow = document.createElement( 'tr' );
			var promptCell = document.createElement( 'td' );
			promptCell.colSpan = 4;
			promptCell.className = 'am-cmp-empty';
			promptCell.textContent = 'Select two brands to see the Athen Marine equivalent.';
			promptRow.appendChild( promptCell );
			tbodyEl.appendChild( promptRow );
			return;
		}

		if ( ! products.length ) {
			var emptyRow = document.createElement( 'tr' );
			var emptyCell = document.createElement( 'td' );
			emptyCell.colSpan = 4;
			emptyCell.className = 'am-cmp-empty';
			emptyCell.textContent = 'Product comparison data for ' + cat.label + ' is coming soon.';
			emptyRow.appendChild( emptyCell );
			tbodyEl.appendChild( emptyRow );
			return;
		}

		products.forEach( function ( product, i ) {
			var isSelected = i === compareState.index;
			var row = document.createElement( 'tr' );
			row.className = isSelected ? 'am-cmp-row is-selected' : 'am-cmp-row';

			var categoryCell = document.createElement( 'td' );
			categoryCell.className = 'am-cmp-cell--category';
			categoryCell.textContent = product.subcategory || cat.label;
			row.appendChild( categoryCell );

			[ compareState.colA, compareState.colB ].forEach( function ( key ) {
				var cell = document.createElement( 'td' );
				var value = product.brands[ key ];
				if ( value === 'N.A' ) {
					cell.className = 'am-cmp-cell--na';
				}
				cell.textContent = value;
				row.appendChild( cell );
			} );

			var athenCell = document.createElement( 'td' );
			athenCell.className = 'am-cmp-cell--athen';
			athenCell.textContent = product.code;
			if ( isSelected ) {
				var badge = document.createElement( 'span' );
				badge.className = 'am-cmp-badge';
				badge.textContent = 'SELECTED';
				athenCell.appendChild( badge );
			}
			row.appendChild( athenCell );

			tbodyEl.appendChild( row );
		} );
	}

	function renderCompareCategory( category ) {
		var cat = COMPARE_CATEGORIES[ category ];
		var tbodyEl = document.getElementById( 'am-cmp-tbody' );

		compareState.category = category;
		compareState.index = cat.defaultIndex;
		compareState.subcategory = null;

		renderSubcats( category );
		renderCompareTable( tbodyEl, category );
	}

	function initOilComparison() {
		var tabsWrap = document.getElementById( 'am-cmp-tabs' );
		var tbodyEl = document.getElementById( 'am-cmp-tbody' );
		var selectA = document.getElementById( 'am-cmp-brand-1' );
		var selectB = document.getElementById( 'am-cmp-brand-2' );
		if ( ! tabsWrap || ! tbodyEl || ! selectA || ! selectB ) {
			return;
		}

		populateBrandSelect( selectA, compareState.colA, 'Select Brand 1' );
		populateBrandSelect( selectB, compareState.colB, 'Select Brand 2' );

		selectA.addEventListener( 'change', function () {
			compareState.colA = selectA.value;
			renderCompareTable( tbodyEl, compareState.category );
		} );

		selectB.addEventListener( 'change', function () {
			compareState.colB = selectB.value;
			renderCompareTable( tbodyEl, compareState.category );
		} );

		tabsWrap.querySelectorAll( '.am-cmp-tab' ).forEach( function ( tab ) {
			tab.addEventListener( 'click', function () {
				tabsWrap.querySelectorAll( '.am-cmp-tab' ).forEach( function ( t ) {
					t.classList.remove( 'is-active' );
				} );
				tab.classList.add( 'is-active' );
				renderCompareCategory( tab.getAttribute( 'data-category' ) );
			} );
		} );

		renderCompareCategory( 'mainGrades' );
	}

	/* ---------------------------------------------------------------- */
	/* Smart product finder                                               */
	/* ---------------------------------------------------------------- */
	var CYLINDER_BY_SULFUR = {
		'0.1': { grade: 'CYL OIL 5040', bn: 'BN 40' },
		'0.5': { grade: 'CYL OIL 5040', bn: 'BN 40' },
		'1.0': { grade: 'CYL OIL 5070', bn: 'BN 70' },
		'2.0': { grade: 'CYL OIL 50100', bn: 'BN 100' },
		'3.5': { grade: 'CYL OIL 50140', bn: 'BN 140' }
	};

	var TRUNK_TBN_BY_FUEL = {
		hfo: 'TBN 40',
		vlsfo: 'TBN 30',
		ulsfo: 'TBN 20',
		mgo: 'TBN 15'
	};

	function findProduct( engineType, fuelGrade, sulfurContent ) {
		if ( engineType === '2-stroke' ) {
			var cyl = CYLINDER_BY_SULFUR[ sulfurContent ] || CYLINDER_BY_SULFUR[ '1.0' ];
			return {
				title: cyl.grade + ' — ' + cyl.bn,
				desc: 'A cylinder oil matched to ' + sulfurContent + '% sulfur fuel for 2-stroke crosshead engines, keeping neutralisation capacity aligned with your fuel’s acid load.'
			};
		}

		if ( engineType === '4-stroke-medium' ) {
			return {
				title: 'SYSTEM OIL 30 — TBN 15',
				desc: 'A medium-speed system oil formulated for ' + fuelGrade.toUpperCase() + ' operation, balancing detergency and TBN retention across long drain intervals.'
			};
		}

		if ( engineType === '4-stroke-high' ) {
			var tbn = TRUNK_TBN_BY_FUEL[ fuelGrade ] || 'TBN 20';
			return {
				title: 'TRUNK PISTON OIL 40 — ' + tbn,
				desc: 'A high-speed trunk piston oil sized to ' + fuelGrade.toUpperCase() + ' fuel, protecting rings and liners under high thermal load.'
			};
		}

		return {
			title: 'AUX ENGINE OIL 40 — TBN 20',
			desc: 'A general-purpose auxiliary engine oil suited to generator sets and auxiliary machinery running on ' + fuelGrade.toUpperCase() + '.'
		};
	}

	function initProductFinder() {
		var form = document.getElementById( 'am-finder-form' );
		var result = document.getElementById( 'am-finder-result' );
		if ( ! form || ! result ) {
			return;
		}

		form.addEventListener( 'submit', function ( e ) {
			e.preventDefault();

			var engineType = document.getElementById( 'am-engine-type' ).value;
			var fuelGrade = document.getElementById( 'am-fuel-grade' ).value;
			var sulfurContent = document.getElementById( 'am-sulfur-content' ).value;

			var match = findProduct( engineType, fuelGrade, sulfurContent );

			setText( 'am-finder-result-title', match.title );
			setText( 'am-finder-result-desc', match.desc );

			result.classList.add( 'is-visible' );
			result.scrollIntoView( { behavior: 'smooth', block: 'center' } );
		} );
	}

	/* ---------------------------------------------------------------- */
	/* Quick quote strip                                                  */
	/* ---------------------------------------------------------------- */
	function submitQuickQuote( email ) {
		return /.+@.+\..+/.test( email );
	}

	function initQuickQuote() {
		var form = document.getElementById( 'am-quick-quote-form' );
		if ( ! form ) {
			return;
		}

		form.addEventListener( 'submit', function ( e ) {
			e.preventDefault();

			var input = document.getElementById( 'am-quick-quote-email' );
			var isValid = submitQuickQuote( input.value );

			if ( ! isValid ) {
				input.style.borderColor = '#E5383B';
				return;
			}

			input.style.borderColor = '';

			window.location.href = '/contact/?email=' + encodeURIComponent( input.value );
		} );
	}

	function initEmailPrefill() {
		var emailInput = document.querySelector( '.am-contact-form input[name="email"]' );
		if ( ! emailInput ) {
			return;
		}

		var params = new URLSearchParams( window.location.search );
		var email = params.get( 'email' );
		if ( email ) {
			emailInput.value = email;
		}
	}

	/* ---------------------------------------------------------------- */
	/* Hero carousel — 4 slides pulled from the site's own page copy     */
	/* ---------------------------------------------------------------- */
	function initHeroCarousel() {
		var section = document.getElementById( 'am-hero-carousel' );
		var imgEl = document.getElementById( 'am-hero-slide-img' );
		var eyebrowEl = document.getElementById( 'am-hero-slide-eyebrow' );
		var titleEl = document.getElementById( 'am-hero-slide-title' );
		var descEl = document.getElementById( 'am-hero-slide-desc' );
		var ctaEl = document.getElementById( 'am-hero-slide-cta' );
		var dotsWrap = document.getElementById( 'am-hero-dots' );
		var contentEl = titleEl ? titleEl.closest( '.am-hero__content' ) : null;
		if ( ! section || ! imgEl || ! eyebrowEl || ! titleEl || ! descEl || ! ctaEl || ! dotsWrap || ! contentEl ) {
			return;
		}

		imgEl.style.transition = 'opacity 0.3s ease';
		contentEl.style.transition = 'opacity 0.3s ease';

		var base = section.getAttribute( 'data-images-base' ) || '';

		var slides = [
			{
				layout: 'am-hero--z4',
				img: base + 'hero-tanker-aerial.jpg',
				objectPosition: 'center top',
				alt: 'Aerial view of a red tanker vessel docked at an offshore terminal',
				eyebrow: 'An Almatr Energy Group Company',
				titleHtml: 'Beyond Lubricants.<br><em>A Trusted Maritime Partner.</em>',
				desc: 'Athen Marine delivers OEM-approved marine lubrication solutions backed by technical expertise, dependable global supply, and trusted support across 20+ countries and 200+ ports worldwide.',
				ctaHref: '/about-us/',
				ctaLabel: 'Know More'
			},
			{
				layout: 'am-hero--z2',
				img: base + 'dlv-hero-port.jpg',
				objectPosition: '100% center',
				alt: 'Aerial view of a busy container port with cranes and cargo vessels',
				eyebrow: 'Athen Marine Lubricants',
				titleHtml: 'Confidence at Every Port.<br><em>Global Reach, Local Commitment.</em>',
				desc: 'Athen Marine’s expanding global network is built on a simple commitment: ensuring dependable access to marine lubrication solutions wherever and whenever they are needed. Through a growing presence across 20+ countries and 200+ ports, we help vessel operators navigate every voyage with confidence.',
				ctaHref: '/delivery-network/',
				ctaLabel: 'Know More'
			},
			{
				layout: 'am-hero--z3',
				img: base + 'svc-hero-oil-lab.jpg',
				alt: 'Oil sample testing in a lab overlooking a container port',
				eyebrow: 'Athen Marine Lubricants',
				titleHtml: 'Assurance at Every Voyage.<br><em>A Commitment Beyond Supply.</em>',
				desc: 'Athen Assure represents our commitment beyond the product and delivery. Combining technical expertise, condition-based guidance, and responsive support, we help customers make informed lubrication decisions, optimize equipment performance, and navigate every voyage with confidence.',
				ctaHref: '/services/',
				ctaLabel: 'Know More'
			},
			{
				layout: 'am-hero--z2',
				img: base + 'svc-hero-ecr.jpg',
				alt: 'Ship engine control room with technical monitoring panels',
				eyebrow: 'Athen Marine Lubricants',
				titleHtml: 'Engineered for Performance.<br><em>Trusted at Sea.</em>',
				desc: 'A comprehensive portfolio of OEM-approved marine lubrication solutions designed to protect critical equipment, optimize performance, and support reliable vessel operations across every voyage.',
				ctaHref: '/products/',
				ctaLabel: 'Know More'
			}
		];

		var layoutClasses = [ 'am-hero--z4', 'am-hero--z3', 'am-hero--z2' ];

		var current = 0;
		var timer = null;

		function renderSlide( index ) {
			var slide = slides[ index ];
			imgEl.style.opacity = '0';
			contentEl.style.opacity = '0';
			window.setTimeout( function () {
				imgEl.src = slide.img;
				imgEl.alt = slide.alt;
				imgEl.style.objectPosition = slide.objectPosition || 'center';
				eyebrowEl.textContent = slide.eyebrow;
				titleEl.innerHTML = slide.titleHtml;
				descEl.textContent = slide.desc;
				ctaEl.href = slide.ctaHref;
				ctaEl.textContent = slide.ctaLabel;
				section.classList.remove.apply( section.classList, layoutClasses );
				section.classList.add( slide.layout );
				imgEl.style.opacity = '1';
				contentEl.style.opacity = '1';
			}, 300 );

			dotsWrap.querySelectorAll( '.am-hero__dot' ).forEach( function ( dot, i ) {
				dot.classList.toggle( 'is-active', i === index );
				dot.setAttribute( 'aria-selected', i === index ? 'true' : 'false' );
			} );
			current = index;
		}

		function goTo( index, resetTimer ) {
			renderSlide( index );
			if ( resetTimer ) {
				restartAutoplay();
			}
		}

		function restartAutoplay() {
			if ( timer ) {
				window.clearInterval( timer );
			}
			timer = window.setInterval( function () {
				goTo( ( current + 1 ) % slides.length, false );
			}, 7000 );
		}

		dotsWrap.querySelectorAll( '.am-hero__dot' ).forEach( function ( dot ) {
			dot.addEventListener( 'click', function () {
				goTo( parseInt( dot.getAttribute( 'data-slide' ), 10 ), true );
			} );
		} );

		restartAutoplay();
	}

	/* ---------------------------------------------------------------- */
	/* Helpers                                                            */
	/* ---------------------------------------------------------------- */
	function setText( id, value ) {
		var el = document.getElementById( id );
		if ( el ) {
			el.textContent = value;
		}
	}

	// Expose for inline/manual use if ever needed.
	window.athenMarine = {
		renderCompareCategory: renderCompareCategory,
		findProduct: findProduct,
		submitQuickQuote: submitQuickQuote
	};
} )();
