/* Massive Scar Era — lyrics loader
   Reads lyrics.txt (plain text, uploaded next to lyrics.html) and fills each song section.
   In lyrics.txt, start each song with a line beginning with ##, e.g.  ## Muluk al-Ardiyya
   Lyrics are shown as plain text, one line after another, with empty lines removed. */
(function () {
  var SONGS = {
    'muluk-al-ardiyya': ['muluk', 'ardiyya', 'kings'],
    'abdel-salam-lasmar': ['abdel', 'lasmar', 'salam'],
    'jinn-lambo': ['lambo', 'jinn lambo'],
    'inner-dialogue': ['inner', 'dialogue'],
    'el-leil': ['leil', 'night'],
    'pretend': ['pretend'],
    'school-girls': ['school', 'madrassa', 'madrasa']
  };
  function slugFor(title) {
    var t = title.toLowerCase();
    for (var s in SONGS) for (var i = 0; i < SONGS[s].length; i++) if (t.indexOf(SONGS[s][i]) > -1) return s;
    return null;
  }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function render(body) {
    // Plain text only: every non-empty line, no labels, no colours, no gaps.
    return body.map(function (l) { return l.replace(/[\s\u00a0]+$/, '').trim(); })
               .filter(function (l) { return l.replace(/[\s\u00a0]/g, '') !== '' && l !== '-'; })
               .map(esc).join('\n');
  }
  function parse(txt) {
    var songs = {}, cur = null;
    txt.replace(/\r/g, '').split('\n').forEach(function (l) {
      var m = l.match(/^\s*##\s*(.+)$/);
      if (m) { cur = slugFor(m[1]); if (cur) songs[cur] = []; return; }
      if (cur) songs[cur].push(l);
    });
    return songs;
  }
  fetch('lyrics.txt', { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw 0; return r.text(); })
    .then(function (txt) {
      var songs = parse(txt);
      Object.keys(songs).forEach(function (slug) {
        var el = document.querySelector('#' + slug + ' .lyr .text');
        var body = render(songs[slug]);
        if (el && body) el.innerHTML = body;
      });
    }).catch(function () {});
})();
