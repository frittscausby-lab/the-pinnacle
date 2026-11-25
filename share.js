/* Share buttons: copy link, and Instagram (which has no web share link).
   On phones and tablets, Instagram opens the device share sheet, where Instagram is listed.
   On a computer, Instagram can't receive a shared link, so the button copies the link and says so. */
(function () {
  function note(bar, text) {
    var n = bar.querySelector('.share-note');
    if (n) { n.textContent = text; clearTimeout(n._t); n._t = setTimeout(function () { n.textContent = ''; }, 9000); }
  }
  function copy(url) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(url);
    var t = document.createElement('textarea'); t.value = url; document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(t); return Promise.resolve();
  }
  var touch = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.platform));
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-share]');
    if (!b) return;
    var bar = b.closest('.share-bar'), url = bar.getAttribute('data-url') || location.href, title = bar.getAttribute('data-title') || document.title;
    if (b.getAttribute('data-share') === 'copy') {
      copy(url).then(function () { note(bar, 'Link copied.'); }, function () { note(bar, 'Copy the link from the address bar.'); });
    } else if (b.getAttribute('data-share') === 'instagram') {
      if (touch && navigator.share) {
        navigator.share({ title: title, url: url }).catch(function () {});
      } else {
        var msg = 'Instagram only shares links from its phone app: add this link to a story with the link sticker, or to your bio.';
        copy(url).then(function () { note(bar, 'Link copied. ' + msg); }, function () { note(bar, msg); });
      }
    }
  });
})();
