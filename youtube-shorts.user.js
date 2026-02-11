// ==UserScript==
// @name         YouTube Shorts Video Player Switcher
// @namespace    https://baipyr.us/
// @version      2026-02-11
// @description  Switches to classic YouTube video playback by converting the current URL.
// @author       Baipyrus
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	function redirect() {
		if (!location.pathname.startsWith('/shorts/')) return;
		location.href = location.href.replace('/shorts/', '/watch?v=');
	}

	redirect();
	addEventListener('yt-navigate-start', redirect);
})();
