// ==UserScript==
// @name         Reddit Share URL Converter
// @namespace    https://baipyr.us/
// @version      2026-02-11
// @description  Converts the Reddit URL when sharing a post to rxddit.com.
// @author       Baipyrus
// @match        https://www.reddit.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	addEventListener(
		'click',
		(event) => {
			/** @type {{target: HTMLElement?}} */
			const { target } = event;
			if (target?.tagName !== 'SHREDDIT-POST') return;

			const shareBtn = target?.shareButtonRef?.value;
			if (!shareBtn || !shareBtn?.permalink) return;

			shareBtn._copyLink = async () => {
				const assembledLink = `https://rxddit.com${shareBtn.permalink}`;

				try {
					const shareUrl = new URL(assembledLink);
					if (!shareUrl.hostname === 'reddit.com') return;
				} catch {
					return;
				}

				const fxreddit = assembledLink.replace('reddit.com', 'rxddit.com');
				navigator.clipboard.writeText(fxreddit);
			};
		},
		true
	);
})();
