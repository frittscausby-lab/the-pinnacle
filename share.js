/* Share buttons: copy link, and Instagram (which has no web share link).
   On phones, Instagram opens the device share sheet; elsewhere it copies the link. */
(function () {
  function note(bar, text) {
    var n = bar.querySelector('.share-note');
    if (n) { n.textContent = text; setTimeout(function () { n.textContent = ''; }, 6000); }
  }
  function copy(url) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(url);
    var t = document.createElement('textarea'); t.value = url; document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(t); return Promise.resolve();
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-share]');
    if (!b) return;
    var bar = b.closest('.share-bar'), url = bar.getAttribute('data-url') || location.href, title = bar.getAttribute('data-title') || document.title;
    if (b.getAttribute('data-share') === 'copy') {
      copy(url).then(function () { note(bar, 'Link copied.'); });
    } else if (b.getAttribute('data-share') === 'instagram') {
      if (navigator.share && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        navigator.share({ title: title, url: url }).catch(function () {});
      } else {
        copy(url).then(function () { note(bar, 'Link copied. Paste it into an Instagram story, post or bio.'); });
        window.open('https://www.instagram.com/', '_blank', 'noopener');
      }
    }
  });
})();
