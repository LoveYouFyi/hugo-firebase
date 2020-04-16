///*************************************************
 //*  Academic
 //*  https://github.com/gcushen/hugo-academic
 //*
 //*  In-built Fuse based search algorithm.
 //**************************************************/

///* ---------------------------------------------------------------------------
//* Configuration.
//* --------------------------------------------------------------------------- */

//// Configure Fuse.
//let fuseOptions = {
  //shouldSort: true,
  //includeMatches: true,
  //tokenize: true,
  //threshold: search_config.threshold,  // Set to ~0.3 for parsing diacritics and CJK languages.
  //location: 0,
  //distance: 100,
  //maxPatternLength: 32,
  //minMatchCharLength: search_config.minLength,  // Set to 1 for parsing CJK languages.
  //keys: [
    //{name:'title', weight:0.99}, /* 1.0 doesn't work o_O */
    //{name:'summary', weight:0.6},
    //{name:'authors', weight:0.5},
    //{name:'content', weight:0.2},
    //{name:'tags', weight:0.5},
    //{name:'categories', weight:0.5}
  //]
//};

//// Configure summary.
//let summaryLength = 60;

///* ---------------------------------------------------------------------------
//* Functions.
//* --------------------------------------------------------------------------- */

//// Get query from URI.
//function getSearchQuery(name) {
  //return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
//}

//// Set query in URI without reloading the page.
//function updateURL(url) {
  //if (history.replaceState) {
    //window.history.replaceState({path:url}, '', url);
  //}
//}

//// Pre-process new search query.
//function initSearch(force, fuse) {
  //let query = $("#search-query").val();

  //// If query deleted, clear results.
  //if ( query.length < 1) {
    //$('#search-hits').empty();
  //}

  //// Check for timer event (enter key not pressed) and query less than minimum length required.
  //if (!force && query.length < fuseOptions.minMatchCharLength)
    //return;

  //// Do search.
  //$('#search-hits').empty();
  //searchAcademic(query, fuse);
  //let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + encodeURIComponent(query) + window.location.hash;
  //updateURL(newURL);
//}

//// Perform search.
//function searchAcademic(query, fuse) {
  //let results = fuse.search(query);
  //// console.log({"results": results});

  //if (results.length > 0) {
    //$('#search-hits').append('<h3 class="mt-0">' + results.length + ' ' + i18n.results + '</h3>');
    //parseResults(query, results);
  //} else {
    //$('#search-hits').append('<div class="search-no-results">' + i18n.no_results + '</div>');
  //}
//}

//// Parse search results.
//function parseResults(query, results) {
  //$.each( results, function(key, value) {
    //let content_key = value.item.section;
    //let content = "";
    //let snippet = "";
    //let snippetHighlights = [];

    //// Show abstract in results for content types where the abstract is often the primary content.
    //if (["publication", "talk"].includes(content_key)) {
      //content = value.item.summary;
    //} else {
      //content = value.item.content;
    //}

    //if ( fuseOptions.tokenize ) {
      //snippetHighlights.push(query);
    //} else {
      //$.each( value.matches, function(matchKey, matchValue) {
        //if (matchValue.key == "content") {
          //let start = (matchValue.indices[0][0]-summaryLength>0) ? matchValue.indices[0][0]-summaryLength : 0;
          //let end = (matchValue.indices[0][1]+summaryLength<content.length) ? matchValue.indices[0][1]+summaryLength : content.length;
          //snippet += content.substring(start, end);
          //snippetHighlights.push(matchValue.value.substring(matchValue.indices[0][0], matchValue.indices[0][1]-matchValue.indices[0][0]+1));
        //}
      //});
    //}

    //if (snippet.length < 1) {
      //snippet += value.item.summary;  // Alternative fallback: `content.substring(0, summaryLength*2);`
    //}

    //// Load template.
    //let template = $('#search-hit-fuse-template').html();

    //// Localize content types.
    //if (content_key in content_type) {
      //content_key = content_type[content_key];
    //}

    //// Parse template.
    //let templateData = {
      //key: key,
      //title: value.item.title,
      //type: content_key,
      //relpermalink: value.item.relpermalink,
      //snippet: snippet
    //};
    //let output = render(template, templateData);
    //$('#search-hits').append(output);

    //// Highlight search terms in result.
    //$.each( snippetHighlights, function(hlKey, hlValue){
      //$("#summary-"+key).mark(hlValue);
    //});

  //});
//}

//function render(template, data) {
  //// Replace placeholders with their values.
  //let key, find, re;
  //for (key in data) {
    //find = '\\{\\{\\s*' + key + '\\s*\\}\\}';  // Expect placeholder in the form `{{x}}`.
    //re = new RegExp(find, 'g');
    //template = template.replace(re, data[key]);
  //}
  //return template;
//}

///* ---------------------------------------------------------------------------
//* Initialize.
//* --------------------------------------------------------------------------- */

//// If Academic's in-built search is enabled and Fuse loaded, then initialize it.
//if (typeof Fuse === 'function') {
//// Wait for Fuse to initialize.
  //$.getJSON(search_config.indexURI, function (search_index) {
    //let fuse = new Fuse(search_index, fuseOptions);

    //// On page load, check for search query in URL.
    //if (query = getSearchQuery('q')) {
      //$("body").addClass('searching');
      //$('.search-results').css({opacity: 0, visibility: "visible"}).animate({opacity: 1},200);
      //$("#search-query").val(query);
      //$("#search-query").focus();
      //initSearch(true, fuse);
    //}

    //// On search box key up, process query.
    //$('#search-query').keyup(function (e) {
      //clearTimeout($.data(this, 'searchTimer')); // Ensure only one timer runs!
      //if (e.keyCode == 13) {
        //initSearch(true, fuse);
      //} else {
        //$(this).data('searchTimer', setTimeout(function () {
          //initSearch(false, fuse);
        //}, 250));
      //}
    //});
  //});
//}

// Babelfied
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({5:function(e,t){var n={shouldSort:!0,includeMatches:!0,tokenize:!0,threshold:search_config.threshold,location:0,distance:100,maxPatternLength:32,minMatchCharLength:search_config.minLength,keys:[{name:"title",weight:.99},{name:"summary",weight:.6},{name:"authors",weight:.5},{name:"content",weight:.2},{name:"tags",weight:.5},{name:"categories",weight:.5}]};function i(e,t){var i=$("#search-query").val();if(i.length<1&&$("#search-hits").empty(),e||!(i.length<n.minMatchCharLength)){$("#search-hits").empty(),function(e,t){var i=t.search(e);i.length>0?($("#search-hits").append('<h3 class="mt-0">'+i.length+" "+i18n.results+"</h3>"),function(e,t){$.each(t,(function(t,i){var r=i.item.section,a="",o="",c=[];a=["publication","talk"].includes(r)?i.item.summary:i.item.content,n.tokenize?c.push(e):$.each(i.matches,(function(e,t){if("content"==t.key){var n=t.indices[0][0]-60>0?t.indices[0][0]-60:0,i=t.indices[0][1]+60<a.length?t.indices[0][1]+60:a.length;o+=a.substring(n,i),c.push(t.value.substring(t.indices[0][0],t.indices[0][1]-t.indices[0][0]+1))}})),o.length<1&&(o+=i.item.summary);var s=$("#search-hit-fuse-template").html();r in content_type&&(r=content_type[r]);var u=function(e,t){var n,i;for(n in t)i=new RegExp("\\{\\{\\s*"+n+"\\s*\\}\\}","g"),e=e.replace(i,t[n]);return e}(s,{key:t,title:i.item.title,type:r,relpermalink:i.item.relpermalink,snippet:o});$("#search-hits").append(u),$.each(c,(function(e,n){$("#summary-"+t).mark(n)}))}))}(e,i)):$("#search-hits").append('<div class="search-no-results">'+i18n.no_results+"</div>")}(i,t);var r,a=window.location.protocol+"//"+window.location.host+window.location.pathname+"?q="+encodeURIComponent(i)+window.location.hash;r=a,history.replaceState&&window.history.replaceState({path:r},"",r)}}"function"==typeof Fuse&&$.getJSON(search_config.indexURI,(function(e){var t,r=new Fuse(e,n);(query=(t="q",decodeURIComponent((location.search.split(t+"=")[1]||"").split("&")[0]).replace(/\+/g," ")))&&($("body").addClass("searching"),$(".search-results").css({opacity:0,visibility:"visible"}).animate({opacity:1},200),$("#search-query").val(query),$("#search-query").focus(),i(!0,r)),$("#search-query").keyup((function(e){clearTimeout($.data(this,"searchTimer")),13==e.keyCode?i(!0,r):$(this).data("searchTimer",setTimeout((function(){i(!1,r)}),250))}))}))}});