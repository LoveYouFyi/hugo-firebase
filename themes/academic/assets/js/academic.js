
///*************************************************
 //*  Academic
 //*  https://github.com/gcushen/hugo-academic
 //*
 //*  Core JS functions and initialization.
 //**************************************************/

//(function ($) {

  ///* ---------------------------------------------------------------------------
   //* Responsive scrolling for URL hashes.
   //* --------------------------------------------------------------------------- */

  //// Dynamically get responsive navigation bar height for offsetting Scrollspy.
  //function getNavBarHeight() {
    //let $navbar = $('#navbar-main');
    //let navbar_offset = $navbar.outerHeight();
    //console.debug('Navbar height: ' + navbar_offset);
    //return navbar_offset;
  //}

  ///**
   //* Responsive hash scrolling.
   //* Check for a URL hash as an anchor.
   //* If it exists on current page, scroll to it responsively.
   //* If `target` argument omitted (e.g. after event), assume it's the window's hash.
   //*/
  //function scrollToAnchor(target) {
    //// If `target` is undefined or HashChangeEvent object, set it to window's hash.
    //// Decode the hash as browsers can encode non-ASCII characters (e.g. Chinese symbols).
    //target = (typeof target === 'undefined' || typeof target === 'object') ? decodeURIComponent(window.location.hash) : target;

    //// If target element exists, scroll to it taking into account fixed navigation bar offset.
    //if ($(target).length) {
      //// Escape special chars from IDs, such as colons found in Markdown footnote links.
      //target = '#' + $.escapeSelector(target.substring(1));  // Previously, `target = target.replace(/:/g, '\\:');`

      //let elementOffset = Math.ceil($(target).offset().top - getNavBarHeight());  // Round up to highlight right ID!
      //$('body').addClass('scrolling');
      //$('html, body').animate({
        //scrollTop: elementOffset
      //}, 600, function () {
        //$('body').removeClass('scrolling');
      //});
    //} else {
      //console.debug('Cannot scroll to target `#' + target + '`. ID not found!');
    //}
  //}

  //// Make Scrollspy responsive.
  //function fixScrollspy() {
    //let $body = $('body');
    //let data = $body.data('bs.scrollspy');
    //if (data) {
      //data._config.offset = getNavBarHeight();
      //$body.data('bs.scrollspy', data);
      //$body.scrollspy('refresh');
    //}
  //}

  //function removeQueryParamsFromUrl() {
    //if (window.history.replaceState) {
      //let urlWithoutSearchParams = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
      //window.history.replaceState({path: urlWithoutSearchParams}, '', urlWithoutSearchParams);
    //}
  //}

  //// Check for hash change event and fix responsive offset for hash links (e.g. Markdown footnotes).
  //window.addEventListener("hashchange", scrollToAnchor);

  ///* ---------------------------------------------------------------------------
   //* Add smooth scrolling to all links inside the main navbar.
   //* --------------------------------------------------------------------------- */

  //$('#navbar-main li.nav-item a.nav-link').on('click', function (event) {
    //// Store requested URL hash.
    //let hash = this.hash;

    //// If we are on a widget page and the navbar link is to a section on the same page.
    //if (this.pathname === window.location.pathname && hash && $(hash).length && ($(".js-widget-page").length > 0)) {
      //// Prevent default click behavior.
      //event.preventDefault();

      //// Use jQuery's animate() method for smooth page scrolling.
      //// The numerical parameter specifies the time (ms) taken to scroll to the specified hash.
      //let elementOffset = Math.ceil($(hash).offset().top - getNavBarHeight());  // Round up to highlight right ID!

      //// Uncomment to debug.
      //// let scrollTop = $(window).scrollTop();
      //// let scrollDelta = (elementOffset - scrollTop);
      //// console.debug('Scroll Delta: ' + scrollDelta);

      //$('html, body').animate({
        //scrollTop: elementOffset
      //}, 800);
    //}
  //});

  ///* ---------------------------------------------------------------------------
   //* Hide mobile collapsable menu on clicking a link.
   //* --------------------------------------------------------------------------- */

  //$(document).on('click', '.navbar-collapse.show', function (e) {
    ////get the <a> element that was clicked, even if the <span> element that is inside the <a> element is e.target
    //let targetElement = $(e.target).is('a') ? $(e.target) : $(e.target).parent();

    //if (targetElement.is('a') && targetElement.attr('class') != 'dropdown-toggle') {
      //$(this).collapse('hide');
    //}
  //});

  ///* ---------------------------------------------------------------------------
   //* Filter publications.
   //* --------------------------------------------------------------------------- */

  //// Active publication filters.
  //let pubFilters = {};

  //// Search term.
  //let searchRegex;

  //// Filter values (concatenated).
  //let filterValues;

  //// Publication container.
  //let $grid_pubs = $('#container-publications');

  //// Initialise Isotope.
  //$grid_pubs.isotope({
    //itemSelector: '.isotope-item',
    //percentPosition: true,
    //masonry: {
      //// Use Bootstrap compatible grid layout.
      //columnWidth: '.grid-sizer'
    //},
    //filter: function () {
      //let $this = $(this);
      //let searchResults = searchRegex ? $this.text().match(searchRegex) : true;
      //let filterResults = filterValues ? $this.is(filterValues) : true;
      //return searchResults && filterResults;
    //}
  //});

  //// Filter by search term.
  //let $quickSearch = $('.filter-search').keyup(debounce(function () {
    //searchRegex = new RegExp($quickSearch.val(), 'gi');
    //$grid_pubs.isotope();
  //}));

  //// Debounce input to prevent spamming filter requests.
  //function debounce(fn, threshold) {
    //let timeout;
    //threshold = threshold || 100;
    //return function debounced() {
      //clearTimeout(timeout);
      //let args = arguments;
      //let _this = this;

      //function delayed() {
        //fn.apply(_this, args);
      //}

      //timeout = setTimeout(delayed, threshold);
    //};
  //}

  //// Flatten object by concatenating values.
  //function concatValues(obj) {
    //let value = '';
    //for (let prop in obj) {
      //value += obj[prop];
    //}
    //return value;
  //}

  //$('.pub-filters').on('change', function () {
    //let $this = $(this);

    //// Get group key.
    //let filterGroup = $this[0].getAttribute('data-filter-group');

    //// Set filter for group.
    //pubFilters[filterGroup] = this.value;

    //// Combine filters.
    //filterValues = concatValues(pubFilters);

    //// Activate filters.
    //$grid_pubs.isotope();

    //// If filtering by publication type, update the URL hash to enable direct linking to results.
    //if (filterGroup == "pubtype") {
      //// Set hash URL to current filter.
      //let url = $(this).val();
      //if (url.substr(0, 9) == '.pubtype-') {
        //window.location.hash = url.substr(9);
      //} else {
        //window.location.hash = '';
      //}
    //}
  //});

  //// Filter publications according to hash in URL.
  //function filter_publications() {
    //let urlHash = window.location.hash.replace('#', '');
    //let filterValue = '*';

    //// Check if hash is numeric.
    //if (urlHash != '' && !isNaN(urlHash)) {
      //filterValue = '.pubtype-' + urlHash;
    //}

    //// Set filter.
    //let filterGroup = 'pubtype';
    //pubFilters[filterGroup] = filterValue;
    //filterValues = concatValues(pubFilters);

    //// Activate filters.
    //$grid_pubs.isotope();

    //// Set selected option.
    //$('.pubtype-select').val(filterValue);
  //}

  ///* ---------------------------------------------------------------------------
  //* Google Maps or OpenStreetMap via Leaflet.
  //* --------------------------------------------------------------------------- */

  //function initMap() {
    //if ($('#map').length) {
      //let map_provider = $('#map-provider').val();
      //let lat = $('#map-lat').val();
      //let lng = $('#map-lng').val();
      //let zoom = parseInt($('#map-zoom').val());
      //let address = $('#map-dir').val();
      //let api_key = $('#map-api-key').val();

      //if (map_provider == 1) {
        //let map = new GMaps({
          //div: '#map',
          //lat: lat,
          //lng: lng,
          //zoom: zoom,
          //zoomControl: true,
          //zoomControlOpt: {
            //style: 'SMALL',
            //position: 'TOP_LEFT'
          //},
          //panControl: false,
          //streetViewControl: false,
          //mapTypeControl: false,
          //overviewMapControl: false,
          //scrollwheel: true,
          //draggable: true
        //});

        //map.addMarker({
          //lat: lat,
          //lng: lng,
          //click: function (e) {
            //let url = 'https://www.google.com/maps/place/' + encodeURIComponent(address) + '/@' + lat + ',' + lng + '/';
            //window.open(url, '_blank')
          //},
          //title: address
        //})
      //} else {
        //let map = new L.map('map').setView([lat, lng], zoom);
        //if (map_provider == 3 && api_key.length) {
          //L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            //attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            //maxZoom: 18,
            //id: 'mapbox.streets',
            //accessToken: api_key
          //}).addTo(map);
        //} else {
          //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            //maxZoom: 19,
            //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          //}).addTo(map);
        //}
        //let marker = L.marker([lat, lng]).addTo(map);
        //let url = lat + ',' + lng + '#map=' + zoom + '/' + lat + '/' + lng + '&layers=N';
        //marker.bindPopup(address + '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route=' + url + '">Routing via OpenStreetMap</a></p>');
      //}
    //}
  //}

  ///* ---------------------------------------------------------------------------
   //* GitHub API.
   //* --------------------------------------------------------------------------- */

  //function printLatestRelease(selector, repo) {
    //$.getJSON('https://api.github.com/repos/' + repo + '/tags').done(function (json) {
      //let release = json[0];
      //$(selector).append(' ' + release.name);
    //}).fail(function (jqxhr, textStatus, error) {
      //let err = textStatus + ", " + error;
      //console.log("Request Failed: " + err);
    //});
  //}

  ///* ---------------------------------------------------------------------------
  //* Toggle search dialog.
  //* --------------------------------------------------------------------------- */

  //function toggleSearchDialog() {
    //if ($('body').hasClass('searching')) {
      //// Clear search query and hide search modal.
      //$('[id=search-query]').blur();
      //$('body').removeClass('searching compensate-for-scrollbar');

      //// Remove search query params from URL as user has finished searching.
      //removeQueryParamsFromUrl();

      //// Prevent fixed positioned elements (e.g. navbar) moving due to scrollbars.
      //$('#fancybox-style-noscroll').remove();
    //} else {
      //// Prevent fixed positioned elements (e.g. navbar) moving due to scrollbars.
      //if (!$('#fancybox-style-noscroll').length && document.body.scrollHeight > window.innerHeight) {
        //$('head').append(
          //'<style id="fancybox-style-noscroll">.compensate-for-scrollbar{margin-right:' +
          //(window.innerWidth - document.documentElement.clientWidth) +
          //'px;}</style>'
        //);
        //$('body').addClass('compensate-for-scrollbar');
      //}

      //// Show search modal.
      //$('body').addClass('searching');
      //$('.search-results').css({opacity: 0, visibility: 'visible'}).animate({opacity: 1}, 200);
      //$('#search-query').focus();
    //}
  //}

  ///* ---------------------------------------------------------------------------
  //* Change Theme Mode (0: Day, 1: Night, 2: Auto).
  //* --------------------------------------------------------------------------- */

  //function canChangeTheme() {
    //// If the theme changer component is present, then user is allowed to change the theme variation.
    //return $('.js-theme-selector').length;
  //}

  //function getThemeMode() {
    //return parseInt(localStorage.getItem('dark_mode') || 2);
  //}

  //function changeThemeModeClick(newMode) {
    //console.info('Request to set theme.');
    //if (!canChangeTheme()) {
      //console.info('Cannot set theme - admin disabled theme selector.');
      //return;
    //}
    //let isDarkTheme;
    //switch (newMode) {
      //case 0:
        //localStorage.setItem('dark_mode', '1');
        //isDarkTheme = 1;
        //console.info('User changed theme variation to Dark.');
        //showActiveTheme(0);
        //break;
      //case 1:
        //localStorage.setItem('dark_mode', '2');
        //if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          //// The visitor prefers dark themes and switching to the dark variation is allowed by admin.
          //isDarkTheme = 1;
        //} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          //// The visitor prefers light themes and switching to the dark variation is allowed by admin.
          //isDarkTheme = 0;
        //} else {
          //isDarkTheme = isSiteThemeDark;  // Use the site's default theme variation based on `light` in the theme file.
        //}
        //console.info('User changed theme variation to Auto.');
        //showActiveTheme(1);
        //break;
      //default:
        //localStorage.setItem('dark_mode', '0');
        //isDarkTheme = 0;
        //console.info('User changed theme variation to Light.');
        //showActiveTheme(2);
        //break;
    //}
    //renderThemeVariation(isDarkTheme);
  //}

  //function showActiveTheme(mode){
    //switch (mode) {
      //case 0:
        //// Dark.
        //$('.js-set-theme-light').removeClass('dropdown-item-active');
        //$('.js-set-theme-dark').addClass('dropdown-item-active');
        //$('.js-set-theme-auto').removeClass('dropdown-item-active');
        //break;
      //case 1:
        //// Auto.
        //$('.js-set-theme-light').removeClass('dropdown-item-active');
        //$('.js-set-theme-dark').removeClass('dropdown-item-active');
        //$('.js-set-theme-auto').addClass('dropdown-item-active');
        //break;
      //default:
        //// Light.
        //$('.js-set-theme-light').addClass('dropdown-item-active');
        //$('.js-set-theme-dark').removeClass('dropdown-item-active');
        //$('.js-set-theme-auto').removeClass('dropdown-item-active');
        //break;
    //}
  //}

  //function getThemeVariation() {
    //if (!canChangeTheme()) {
      //return isSiteThemeDark;  // Use the site's default theme variation based on `light` in the theme file.
    //}
    //let currentThemeMode = getThemeMode();
    //let isDarkTheme;
    //switch (currentThemeMode) {
      //case 0:
        //isDarkTheme = 0;
        //break;
      //case 1:
        //isDarkTheme = 1;
        //break;
      //default:
        //if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          //// The visitor prefers dark themes and switching to the dark variation is allowed by admin.
          //isDarkTheme = 1;
        //} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          //// The visitor prefers light themes and switching to the dark variation is allowed by admin.
          //isDarkTheme = 0;
        //} else {
          //isDarkTheme = isSiteThemeDark;  // Use the site's default theme variation based on `light` in the theme file.
        //}
        //break;
    //}
    //return isDarkTheme;
  //}

  ///**
   //* Render theme variation (day or night).
   //*
   //* @param {int} isDarkTheme - TODO: convert to boolean.
   //* @param {boolean} init
   //* @returns {undefined}
   //*/

   //function renderThemeVariation(isDarkTheme, init = false) {
    //// Is code highlighting enabled in site config?
    //const codeHlEnabled = $('link[title=hl-light]').length > 0;
    //const codeHlLight = $('link[title=hl-light]')[0];
    //const codeHlDark = $('link[title=hl-dark]')[0];
    //const diagramEnabled = $('script[title=mermaid]').length > 0;

    //// Check if re-render required.
    //if (!init) {
      //// If request to render light when light variation already rendered, return.
      //// If request to render dark when dark variation already rendered, return.
      //if ((isDarkTheme === 0 && !$('body').hasClass('dark')) || (isDarkTheme === 1 && $('body').hasClass('dark'))) {
        //return;
      //}
    //}

    //if (isDarkTheme === 0) {
      //if (!init) {
        //// Only fade in the page when changing the theme variation.
        //$('body').css({opacity: 0, visibility: 'visible'}).animate({opacity: 1}, 500);
      //}
      //$('body').removeClass('dark');
      //if (codeHlEnabled) {
        //codeHlLight.disabled = false;
        //codeHlDark.disabled = true;
      //}
      //if (diagramEnabled) {
        //if (init) {
          //mermaid.initialize({theme: 'default', securityLevel: 'loose'});
        //} else {
          //// Have to reload to re-initialise Mermaid with the new theme and re-parse the Mermaid code blocks.
          //location.reload();
        //}
      //}
    //} else if (isDarkTheme === 1) {
      //if (!init) {
        //// Only fade in the page when changing the theme variation.
        //$('body').css({opacity: 0, visibility: 'visible'}).animate({opacity: 1}, 500);
      //}
      //$('body').addClass('dark');
      //if (codeHlEnabled) {
        //codeHlLight.disabled = true;
        //codeHlDark.disabled = false;
      //}
      //if (diagramEnabled) {
        //if (init) {
          //mermaid.initialize({theme: 'dark', securityLevel: 'loose'});
        //} else {
          //// Have to reload to re-initialise Mermaid with the new theme and re-parse the Mermaid code blocks.
          //location.reload();
        //}
      //}
    //}
  //}

  //function initThemeVariation() {
    //// If theme changer component present, set its icon according to the theme mode (day, night, or auto).
    //if (canChangeTheme) {
      //let themeMode = getThemeMode();
      //switch (themeMode) {
        //case 0:
          //showActiveTheme(2);
          //console.info('Initialize theme variation to Light.');
          //break;
        //case 1:
          //showActiveTheme(0);
          //console.info('Initialize theme variation to Dark.');
          //break;
        //default:
          //showActiveTheme(1);
          //console.info('Initialize theme variation to Auto.');
          //break;
      //}
    //}
    //// Render the day or night theme.
    //let isDarkTheme = getThemeVariation();
    //renderThemeVariation(isDarkTheme, true);
  //}

  ///* ---------------------------------------------------------------------------
  //* Normalize Bootstrap Carousel Slide Heights.
  //* --------------------------------------------------------------------------- */

  //function normalizeCarouselSlideHeights() {
    //$('.carousel').each(function () {
      //// Get carousel slides.
      //let items = $('.carousel-item', this);
      //// Reset all slide heights.
      //items.css('min-height', 0);
      //// Normalize all slide heights.
      //let maxHeight = Math.max.apply(null, items.map(function () {
        //return $(this).outerHeight()
      //}).get());
      //items.css('min-height', maxHeight + 'px');
    //})
  //}

  ///* ---------------------------------------------------------------------------
 //* Fix Hugo's Goldmark output and Mermaid code blocks.
 //* --------------------------------------------------------------------------- */

  ///**
   //* Fix Hugo's Goldmark output.
   //*/
  //function fixHugoOutput() {
    //// Fix Goldmark table of contents.
    //// - Must be performed prior to initializing ScrollSpy.
    //$('#TableOfContents').addClass('nav flex-column');
    //$('#TableOfContents li').addClass('nav-item');
    //$('#TableOfContents li a').addClass('nav-link');

    //// Fix Goldmark task lists (remove bullet points).
    //$("input[type='checkbox'][disabled]").parents('ul').addClass('task-list');
  //}

  ///**
   //* Fix Mermaid.js clash with Highlight.js.
   //* Refactor Mermaid code blocks as divs to prevent Highlight parsing them and enable Mermaid to parse them.
   //*/
  //function fixMermaid() {
    //let mermaids = [];
    //[].push.apply(mermaids, document.getElementsByClassName('language-mermaid'));
    //for (let i = 0; i < mermaids.length; i++) {
      //$(mermaids[i]).unwrap('pre');  // Remove <pre> wrapper.
      //$(mermaids[i]).replaceWith(function () {
        //// Convert <code> block to <div> and add `mermaid` class so that Mermaid will parse it.
        //return $("<div />").append($(this).contents()).addClass('mermaid');
      //});
    //}
  //}

  ///* ---------------------------------------------------------------------------
   //* On document ready.
   //* --------------------------------------------------------------------------- */

  //$(document).ready(function () {
    //fixHugoOutput();
    //fixMermaid();

    //// Initialise code highlighting if enabled for this page.
    //// Note: this block should be processed after the Mermaid code-->div conversion.
    //if (code_highlighting) {
      //hljs.initHighlighting();
    //}

    //// Initialize theme variation.
    //initThemeVariation();

    //// Change theme mode.
    //$('.js-set-theme-light').click(function (e) {
      //e.preventDefault();
      //changeThemeModeClick(2);
    //});
    //$('.js-set-theme-dark').click(function (e) {
      //e.preventDefault();
      //changeThemeModeClick(0);
    //});
    //$('.js-set-theme-auto').click(function (e) {
      //e.preventDefault();
      //changeThemeModeClick(1);
    //});

    //// Live update of day/night mode on system preferences update (no refresh required).
    //// Note: since we listen only for *dark* events, we won't detect other scheme changes such as light to no-preference.
    //const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    //darkModeMediaQuery.addListener((e) => {
      //if (!canChangeTheme()) {
        //// Changing theme variation is not allowed by admin.
        //return;
      //}
      //const darkModeOn = e.matches;
      //console.log(`OS dark mode preference changed to ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
      //let currentThemeVariation = parseInt(localStorage.getItem('dark_mode') || 2);
      //let isDarkTheme;
      //if (currentThemeVariation === 2) {
        //if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          //// The visitor prefers dark themes.
          //isDarkTheme = 1;
        //} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          //// The visitor prefers light themes.
          //isDarkTheme = 0;
        //} else {
          //// The visitor does not have a day or night preference, so use the theme's default setting.
          //isDarkTheme = isSiteThemeDark;
        //}
        //renderThemeVariation(isDarkTheme);
      //}
    //});

  //});

  ///* ---------------------------------------------------------------------------
   //* On window loaded.
   //* --------------------------------------------------------------------------- */

  //$(window).on('load', function () {
    //// Filter projects.
    //$('.projects-container').each(function (index, container) {
      //let $container = $(container);
      //let $section = $container.closest('section');
      //let layout;
      //if ($section.find('.isotope').hasClass('js-layout-row')) {
        //layout = 'fitRows';
      //} else {
        //layout = 'masonry';
      //}

      //$container.imagesLoaded(function () {
        //// Initialize Isotope after all images have loaded.
        //$container.isotope({
          //itemSelector: '.isotope-item',
          //layoutMode: layout,
          //masonry: {
            //gutter: 20
          //},
          //filter: $section.find('.default-project-filter').text()
        //});

        //// Filter items when filter link is clicked.
        //$section.find('.project-filters a').click(function () {
          //let selector = $(this).attr('data-filter');
          //$container.isotope({filter: selector});
          //$(this).removeClass('active').addClass('active').siblings().removeClass('active all');
          //return false;
        //});

        //// If window hash is set, scroll to hash.
        //// Placing this within `imagesLoaded` prevents scrolling to the wrong location due to dynamic image loading
        //// affecting page layout and position of the target anchor ID.
        //// Note: If there are multiple project widgets on a page, ideally only perform this once after images
        //// from *all* project widgets have finished loading.
        //if (window.location.hash) {
          //scrollToAnchor();
        //}
      //});
    //});

    //// Enable publication filter for publication index page.
    //if ($('.pub-filters-select')) {
      //filter_publications();
      //// Useful for changing hash manually (e.g. in development):
      //// window.addEventListener('hashchange', filter_publications, false);
    //}

    //// Scroll to top of page.
    //$('.back-to-top').click(function (event) {
      //event.preventDefault();
      //$('html, body').animate({
        //'scrollTop': 0
      //}, 800, function () {
        //window.location.hash = "";
      //});
    //});

    //// Load citation modal on 'Cite' click.
    //$('.js-cite-modal').click(function (e) {
      //e.preventDefault();
      //let filename = $(this).attr('data-filename');
      //let modal = $('#modal');
      //modal.find('.modal-body code').load(filename, function (response, status, xhr) {
        //if (status == 'error') {
          //let msg = "Error: ";
          //$('#modal-error').html(msg + xhr.status + " " + xhr.statusText);
        //} else {
          //$('.js-download-cite').attr('href', filename);
        //}
      //});
      //modal.modal('show');
    //});

    //// Copy citation text on 'Copy' click.
    //$('.js-copy-cite').click(function (e) {
      //e.preventDefault();
      //// Get selection.
      //let range = document.createRange();
      //let code_node = document.querySelector('#modal .modal-body');
      //range.selectNode(code_node);
      //window.getSelection().addRange(range);
      //try {
        //// Execute the copy command.
        //document.execCommand('copy');
      //} catch (e) {
        //console.log('Error: citation copy failed.');
      //}
      //// Remove selection.
      //window.getSelection().removeRange(range);
    //});

    //// Initialise Google Maps if necessary.
    //initMap();

    //// Print latest version of GitHub projects.
    //let githubReleaseSelector = '.js-github-release';
    //if ($(githubReleaseSelector).length > 0)
      //printLatestRelease(githubReleaseSelector, $(githubReleaseSelector).data('repo'));

    //// On search icon click toggle search dialog.
    //$('.js-search').click(function (e) {
      //e.preventDefault();
      //toggleSearchDialog();
    //});
    //$(document).on('keydown', function (e) {
      //if (e.which == 27) {
        //// `Esc` key pressed.
        //if ($('body').hasClass('searching')) {
          //toggleSearchDialog();
        //}
      //} else if (e.which == 191 && e.shiftKey == false && !$('input,textarea').is(':focus')) {
        //// `/` key pressed outside of text input.
        //e.preventDefault();
        //toggleSearchDialog();
      //}
    //});

  //});

  //// Normalize Bootstrap carousel slide heights.
  //$(window).on('load resize orientationchange', normalizeCarouselSlideHeights);

  //// Automatic main menu dropdowns on mouse over.
  //$('body').on('mouseenter mouseleave', '.dropdown', function (e) {
    //var dropdown = $(e.target).closest('.dropdown');
    //var menu = $('.dropdown-menu', dropdown);
    //dropdown.addClass('show');
    //menu.addClass('show');
    //setTimeout(function () {
      //dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
      //menu[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
    //}, 300);

    //// Re-initialize Scrollspy with dynamic navbar height offset.
    //fixScrollspy();

    //if (window.location.hash) {
      //// When accessing homepage from another page and `#top` hash is set, show top of page (no hash).
      //if (window.location.hash == "#top") {
        //window.location.hash = ""
      //} else if (!$('.projects-container').length) {
        //// If URL contains a hash and there are no dynamically loaded images on the page,
        //// immediately scroll to target ID taking into account responsive offset.
        //// Otherwise, wait for `imagesLoaded()` to complete before scrolling to hash to prevent scrolling to wrong
        //// location.
        //scrollToAnchor();
      //}
    //}

    //// Call `fixScrollspy` when window is resized.
    //let resizeTimer;
    //$(window).resize(function () {
      //clearTimeout(resizeTimer);
      //resizeTimer = setTimeout(fixScrollspy, 200);
    //});
  //});

//})(jQuery);

// Babelfied
!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}({6:function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){function t(){var t=e("#navbar-main").outerHeight();return console.debug("Navbar height: "+t),t}function a(a){if(a=void 0===a||"object"===o(a)?decodeURIComponent(window.location.hash):a,e(a).length){a="#"+e.escapeSelector(a.substring(1));var n=Math.ceil(e(a).offset().top-t());e("body").addClass("scrolling"),e("html, body").animate({scrollTop:n},600,(function(){e("body").removeClass("scrolling")}))}else console.debug("Cannot scroll to target `#"+a+"`. ID not found!")}function n(){var o=e("body"),a=o.data("bs.scrollspy");a&&(a._config.offset=t(),o.data("bs.scrollspy",a),o.scrollspy("refresh"))}window.addEventListener("hashchange",a),e("#navbar-main li.nav-item a.nav-link").on("click",(function(o){var a=this.hash;if(this.pathname===window.location.pathname&&a&&e(a).length&&e(".js-widget-page").length>0){o.preventDefault();var n=Math.ceil(e(a).offset().top-t());e("html, body").animate({scrollTop:n},800)}})),e(document).on("click",".navbar-collapse.show",(function(t){var o=e(t.target).is("a")?e(t.target):e(t.target).parent();o.is("a")&&"dropdown-toggle"!=o.attr("class")&&e(this).collapse("hide")}));var i,r,s={},l=e("#container-publications");l.isotope({itemSelector:".isotope-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"},filter:function(){var t=e(this),o=!i||t.text().match(i),a=!r||t.is(r);return o&&a}});var c,d,h,m=e(".filter-search").keyup((c=function(){i=new RegExp(m.val(),"gi"),l.isotope()},d=d||100,function(){clearTimeout(h);var e=arguments,t=this;function o(){c.apply(t,e)}h=setTimeout(o,d)}));function p(e){var t="";for(var o in e)t+=e[o];return t}function u(){e("body").hasClass("searching")?(e("[id=search-query]").blur(),e("body").removeClass("searching compensate-for-scrollbar"),function(){if(window.history.replaceState){var e=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.hash;window.history.replaceState({path:e},"",e)}}(),e("#fancybox-style-noscroll").remove()):(!e("#fancybox-style-noscroll").length&&document.body.scrollHeight>window.innerHeight&&(e("head").append('<style id="fancybox-style-noscroll">.compensate-for-scrollbar{margin-right:'+(window.innerWidth-document.documentElement.clientWidth)+"px;}</style>"),e("body").addClass("compensate-for-scrollbar")),e("body").addClass("searching"),e(".search-results").css({opacity:0,visibility:"visible"}).animate({opacity:1},200),e("#search-query").focus())}function f(){return e(".js-theme-selector").length}function v(){return parseInt(localStorage.getItem("dark_mode")||2)}function g(e){if(console.info("Request to set theme."),f()){var t;switch(e){case 0:localStorage.setItem("dark_mode","1"),t=1,console.info("User changed theme variation to Dark."),w(0);break;case 1:localStorage.setItem("dark_mode","2"),t=window.matchMedia("(prefers-color-scheme: dark)").matches?1:window.matchMedia("(prefers-color-scheme: light)").matches?0:isSiteThemeDark,console.info("User changed theme variation to Auto."),w(1);break;default:localStorage.setItem("dark_mode","0"),t=0,console.info("User changed theme variation to Light."),w(2)}b(t)}else console.info("Cannot set theme - admin disabled theme selector.")}function w(t){switch(t){case 0:e(".js-set-theme-light").removeClass("dropdown-item-active"),e(".js-set-theme-dark").addClass("dropdown-item-active"),e(".js-set-theme-auto").removeClass("dropdown-item-active");break;case 1:e(".js-set-theme-light").removeClass("dropdown-item-active"),e(".js-set-theme-dark").removeClass("dropdown-item-active"),e(".js-set-theme-auto").addClass("dropdown-item-active");break;default:e(".js-set-theme-light").addClass("dropdown-item-active"),e(".js-set-theme-dark").removeClass("dropdown-item-active"),e(".js-set-theme-auto").removeClass("dropdown-item-active")}}function b(t){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e("link[title=hl-light]").length>0,n=e("link[title=hl-light]")[0],i=e("link[title=hl-dark]")[0],r=e("script[title=mermaid]").length>0;!o&&(0===t&&!e("body").hasClass("dark")||1===t&&e("body").hasClass("dark"))||(0===t?(o||e("body").css({opacity:0,visibility:"visible"}).animate({opacity:1},500),e("body").removeClass("dark"),a&&(n.disabled=!1,i.disabled=!0),r&&(o?mermaid.initialize({theme:"default",securityLevel:"loose"}):location.reload())):1===t&&(o||e("body").css({opacity:0,visibility:"visible"}).animate({opacity:1},500),e("body").addClass("dark"),a&&(n.disabled=!0,i.disabled=!1),r&&(o?mermaid.initialize({theme:"dark",securityLevel:"loose"}):location.reload())))}function y(){if(f)switch(v()){case 0:w(2),console.info("Initialize theme variation to Light.");break;case 1:w(0),console.info("Initialize theme variation to Dark.");break;default:w(1),console.info("Initialize theme variation to Auto.")}b(function(){if(!f())return isSiteThemeDark;var e;switch(v()){case 0:e=0;break;case 1:e=1;break;default:e=window.matchMedia("(prefers-color-scheme: dark)").matches?1:window.matchMedia("(prefers-color-scheme: light)").matches?0:isSiteThemeDark}return e}(),!0)}e(".pub-filters").on("change",(function(){var t=e(this)[0].getAttribute("data-filter-group");if(s[t]=this.value,r=p(s),l.isotope(),"pubtype"==t){var o=e(this).val();".pubtype-"==o.substr(0,9)?window.location.hash=o.substr(9):window.location.hash=""}})),e(document).ready((function(){e("#TableOfContents").addClass("nav flex-column"),e("#TableOfContents li").addClass("nav-item"),e("#TableOfContents li a").addClass("nav-link"),e("input[type='checkbox'][disabled]").parents("ul").addClass("task-list"),function(){var t=[];[].push.apply(t,document.getElementsByClassName("language-mermaid"));for(var o=0;o<t.length;o++)e(t[o]).unwrap("pre"),e(t[o]).replaceWith((function(){return e("<div />").append(e(this).contents()).addClass("mermaid")}))}(),code_highlighting&&hljs.initHighlighting(),y(),e(".js-set-theme-light").click((function(e){e.preventDefault(),g(2)})),e(".js-set-theme-dark").click((function(e){e.preventDefault(),g(0)})),e(".js-set-theme-auto").click((function(e){e.preventDefault(),g(1)})),window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){if(f()){var t=e.matches;console.log("OS dark mode preference changed to ".concat(t?"🌒 on":"☀️ off",".")),2===parseInt(localStorage.getItem("dark_mode")||2)&&b(window.matchMedia("(prefers-color-scheme: dark)").matches?1:window.matchMedia("(prefers-color-scheme: light)").matches?0:isSiteThemeDark)}}))})),e(window).on("load",(function(){var t,o;e(".projects-container").each((function(t,o){var n,i=e(o),r=i.closest("section");n=r.find(".isotope").hasClass("js-layout-row")?"fitRows":"masonry",i.imagesLoaded((function(){i.isotope({itemSelector:".isotope-item",layoutMode:n,masonry:{gutter:20},filter:r.find(".default-project-filter").text()}),r.find(".project-filters a").click((function(){var t=e(this).attr("data-filter");return i.isotope({filter:t}),e(this).removeClass("active").addClass("active").siblings().removeClass("active all"),!1})),window.location.hash&&a()}))})),e(".pub-filters-select")&&(t=window.location.hash.replace("#",""),o="*",""==t||isNaN(t)||(o=".pubtype-"+t),s.pubtype=o,r=p(s),l.isotope(),e(".pubtype-select").val(o)),e(".back-to-top").click((function(t){t.preventDefault(),e("html, body").animate({scrollTop:0},800,(function(){window.location.hash=""}))})),e(".js-cite-modal").click((function(t){t.preventDefault();var o=e(this).attr("data-filename"),a=e("#modal");a.find(".modal-body code").load(o,(function(t,a,n){if("error"==a){e("#modal-error").html("Error: "+n.status+" "+n.statusText)}else e(".js-download-cite").attr("href",o)})),a.modal("show")})),e(".js-copy-cite").click((function(e){e.preventDefault();var t=document.createRange(),o=document.querySelector("#modal .modal-body");t.selectNode(o),window.getSelection().addRange(t);try{document.execCommand("copy")}catch(e){console.log("Error: citation copy failed.")}window.getSelection().removeRange(t)})),function(){if(e("#map").length){var t=e("#map-provider").val(),o=e("#map-lat").val(),a=e("#map-lng").val(),n=parseInt(e("#map-zoom").val()),i=e("#map-dir").val(),r=e("#map-api-key").val();if(1==t){new GMaps({div:"#map",lat:o,lng:a,zoom:n,zoomControl:!0,zoomControlOpt:{style:"SMALL",position:"TOP_LEFT"},panControl:!1,streetViewControl:!1,mapTypeControl:!1,overviewMapControl:!1,scrollwheel:!0,draggable:!0}).addMarker({lat:o,lng:a,click:function(e){var t="https://www.google.com/maps/place/"+encodeURIComponent(i)+"/@"+o+","+a+"/";window.open(t,"_blank")},title:i})}else{var s=new L.map("map").setView([o,a],n);3==t&&r.length?L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:r}).addTo(s):L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(s);var l=L.marker([o,a]).addTo(s),c=o+","+a+"#map="+n+"/"+o+"/"+a+"&layers=N";l.bindPopup(i+'<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route='+c+'">Routing via OpenStreetMap</a></p>')}}}();var n,i;e(".js-github-release").length>0&&(n=".js-github-release",i=e(".js-github-release").data("repo"),e.getJSON("https://api.github.com/repos/"+i+"/tags").done((function(t){var o=t[0];e(n).append(" "+o.name)})).fail((function(e,t,o){var a=t+", "+o;console.log("Request Failed: "+a)}))),e(".js-search").click((function(e){e.preventDefault(),u()})),e(document).on("keydown",(function(t){27==t.which?e("body").hasClass("searching")&&u():191!=t.which||0!=t.shiftKey||e("input,textarea").is(":focus")||(t.preventDefault(),u())}))})),e(window).on("load resize orientationchange",(function(){e(".carousel").each((function(){var t=e(".carousel-item",this);t.css("min-height",0);var o=Math.max.apply(null,t.map((function(){return e(this).outerHeight()})).get());t.css("min-height",o+"px")}))})),e("body").on("mouseenter mouseleave",".dropdown",(function(t){var o,i=e(t.target).closest(".dropdown"),r=e(".dropdown-menu",i);i.addClass("show"),r.addClass("show"),setTimeout((function(){i[i.is(":hover")?"addClass":"removeClass"]("show"),r[i.is(":hover")?"addClass":"removeClass"]("show")}),300),n(),window.location.hash&&("#top"==window.location.hash?window.location.hash="":e(".projects-container").length||a()),e(window).resize((function(){clearTimeout(o),o=setTimeout(n,200)}))}))}(jQuery)}});