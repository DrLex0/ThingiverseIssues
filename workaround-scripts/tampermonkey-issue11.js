// ==UserScript==
// @name         Thingiverse fix 'full screen' gallery title
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.1
// @description  Workaround for issue #11
// @author       Dr. Lex
// @include      https://www.thingiverse.com/thing:*
// @include      https://www.thingiverse.com/make:*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Assumption: jquery has already been loaded by Thingiverse JS.
    // Trying to @require a newer jquery here, may break Thingiverse scripts.
    var $ = window.jQuery;
    var thingGalleryTitle = $('.item-page-info h1');
    if(thingGalleryTitle) {
        thingGalleryTitle.css({'white-space': 'nowrap', 'text-overflow': 'ellipsis'});
    }
    else {
        console.log("Cannot hack thing gallery title: element not found");
   }
})();
