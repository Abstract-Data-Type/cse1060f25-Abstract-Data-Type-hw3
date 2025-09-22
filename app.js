// VeritasNews Prototype App
(function () {
  const appEl = document.getElementById('app');
  const modalRoot = document.getElementById('modalRoot');
  const state = {
    flagsOn: true,
    theme: 'system',
  };

  // Simple Router
  function router() {
    const hash = location.hash || '#/';
    const [_, route, param] = hash.split('/');
    switch (route) {
      case '':
        renderFrontPage();
        break;
      case 'story':
        renderStory(param);
        break;
      case 'article':
        renderArticle(param);
        break;
      case 'digest':
        renderDigest();
        break;
      case 'why':
        renderWhy();
        break;
      default:
        renderFrontPage();
    }
  }

  // Helpers
  function h(tag, props = {}, ...children) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v !== false && v != null) el.setAttribute(k, v);
    }
    for (const child of children.flat()) {
      if (child == null) continue;
      if (typeof child === 'string') el.appendChild(document.createTextNode(child));
      else el.appendChild(child);
    }
    return el;
  }

  function fmtTime(iso) {
    try { return new Date(iso).toLocaleString([], { hour: '2-digit', minute: '2-digit' }); } catch { return '' }
  }

  function getStory(id) {
    return window.MockData.stories.find(s => s.id === id) || window.MockData.stories[0];
  }

  // Renderers
  function renderFrontPage() {
    const stories = window.MockData.stories;
    const list = stories.map(s => h('div', { class: 'card story-card' },
      h('div', {},
        h('div', { class: 'kicker' }, s.kicker),
        h('h2', { class: 'story-title' }, s.title),
        h('p', { class: 'story-nut' }, s.nutGraf),
        h('div', { class: 'badges' },
          h('span', { class: 'badge badge-accent' }, `Coverage: ${s.coverageBar.filter(c => c.covered).length} covered`),
          h('span', { class: 'badge badge-gold' }, `Sources: ${s.sourcesSummary.outlets} outlets; ${s.sourcesSummary.primaryDocs} primary docs`)
        ),
        h('div', { class: 'space' }),
        h('div', { class: 'row' },
          h('a', { class: 'btn primary', href: `#/story/${s.id}` }, 'Read'),
          h('a', { class: 'btn', href: '#/digest' }, 'Open Digest')
        ),
        h('div', { class: 'space' }),
        h('div', { class: 'badges' },
          ...s.coverageBar.map(c => h('span', { class: `badge ${c.covered ? '' : 'grey'}` }, `${c.outlet} (${c.lean})`))
        )
      )
    ));

    appEl.replaceChildren(
      h('section', {},
        h('div', { class: 'section-title' }, 'Top Stories'),
        h('div', { class: 'grid grid-3' }, list)
      )
    );
  }

  function renderStory(id) {
    const s = getStory(id);
    const header = h('div', { class: 'reader' },
      h('h1', {}, s.title),
      h('div', { class: 'meta' }, `Updated ${fmtTime(s.time)} • Unbiased summary`),
      h('p', {}, s.summary)
    );

    const blurbs = h('div', { class: 'bullets' },
      ...s.blurbs.map(b => disclosureCard(`${b.lean}`, b.short, b.cites))
    );

    const sourcesTabs = tabs(
      [
        { id: 'primary', label: 'Primary' },
        { id: 'outlets', label: 'Outlets' },
      ],
      'primary',
      {
        primary: h('div', { class: 'source-list' },
          ...s.primarySources.map(ps => h('div', { class: 'card source-item' },
            h('div', {},
              h('div', {}, ps.title),
              h('div', { class: 'source-why' }, ps.why)
            ),
            h('div', { class: 'row' },
              ps.status === 'Pending'
                ? h('button', { class: 'btn', onClick: () => alert('We will notify you when posted (prototype).') }, 'Remind me')
                : h('a', { class: 'btn', href: ps.url, target: '_blank', rel: 'noreferrer' }, 'Open')
            )
          ))
        ),
        outlets: coverageSection(s),
      }
    );

    appEl.replaceChildren(
      h('section', { class: 'grid grid-2' },
        h('div', {},
          header,
          h('div', { class: 'space' }),
          h('div', { class: 'section-title' }, 'How different sides portray the issue'),
          blurbs,
          h('div', { class: 'space' }),
          h('div', { class: 'hr' }),
          h('div', { class: 'row' },
            h('a', { class: 'btn', href: '#/' }, 'Back'),
            h('a', { class: 'btn', href: `#/article/${s.id}` }, 'Open in-app article')
          )
        ),
        h('div', {},
          h('div', { class: 'section-title' }, 'Sources'),
          sourcesTabs
        )
      )
    );
  }

  function coverageSection(s) {
    return h('div', { class: 'grid' },
      ...s.coverageCards.map(c => h('div', { class: 'card coverage-card' },
        h('div', { class: 'top' },
          h('div', {}, `${c.outlet}`),
          h('div', { class: 'lean' }, c.lean)
        ),
        h('div', { class: 'space' }),
        h('div', {}, c.angle),
        h('div', { class: 'pull-quote' }, `“${c.pullQuote}”`),
        h('div', { class: 'space' }),
        h('div', { class: 'card-actions' },
          c.partner
            ? h('a', { class: 'btn primary', href: `#/article/${s.id}` }, 'Open original (partner)')
            : h('a', { class: 'btn', href: c.url, target: '_blank', rel: 'noreferrer' }, 'Open original')
        )
      ))
    );
  }

  function renderArticle(id) {
    const s = getStory(id);
    const a = s.article;

    const toggle = h('button', {
      class: 'btn',
      onClick: () => {
        state.flagsOn = !state.flagsOn;
        document.querySelectorAll('.highlight').forEach(el => {
          if (!state.flagsOn) el.classList.add('off'); else el.classList.remove('off');
        });
        toggle.textContent = state.flagsOn ? 'Hide flags' : 'Show flags';
      }
    }, state.flagsOn ? 'Hide flags' : 'Show flags');

    const paragraphs = a.paragraphs.map(p => h('p', { class: 'article' },
      ...highlightedSegments(p.text, p.flags)
    ));

    appEl.replaceChildren(
      h('section', { class: 'grid' },
        h('div', { class: 'card' },
          h('div', { class: 'kicker' }, `${a.outlet} — In-app article view`),
          h('h2', {}, a.title),
          h('div', { class: 'meta' }, a.byline),
          h('div', { class: 'row' }, toggle, h('a', { class: 'btn', href: `#/story/${s.id}` }, 'Back to story')),
          h('div', { class: 'space' }),
          ...paragraphs
        ),
        h('div', {},
          h('div', { class: 'section-title' }, 'Flag legend'),
          h('div', { class: 'card' },
            h('div', {}, 'Highlight reasons:'),
            h('ul', {},
              h('li', {}, 'Emotionally charged wording / value signaling'),
              h('li', {}, 'Issue emphasis / framing'),
              h('li', {}, 'Policy-alignment indicators')
            ),
            h('div', { class: 'hr' }),
            h('a', { class: 'small-link', href: '#/why' }, 'Why these signals?')
          )
        )
      )
    );
  }

  function highlightedSegments(text, flags = []) {
    if (!flags || flags.length === 0) return [text];
    // naive segmentation by phrases
    let segments = [{ t: text, type: 'plain' }];
    for (const f of flags) {
      segments = segments.flatMap(seg => {
        if (seg.type !== 'plain') return [seg];
        const idx = seg.t.indexOf(f.phrase);
        if (idx === -1) return [seg];
        const before = seg.t.slice(0, idx);
        const mid = seg.t.slice(idx, idx + f.phrase.length);
        const after = seg.t.slice(idx + f.phrase.length);
        const out = [];
        if (before) out.push({ t: before, type: 'plain' });
        out.push({ t: mid, type: 'flag', reason: f.reason });
        if (after) out.push({ t: after, type: 'plain' });
        return out;
      });
    }
    return segments.map(seg => seg.type === 'flag'
      ? h('span', {
          class: `highlight${state.flagsOn ? '' : ' off'}`,
          title: seg.reason,
          onClick: () => alert(`${seg.t}: ${seg.reason}`)
        }, seg.t)
      : seg.t
    );
  }

  function renderDigest() {
    const s = window.MockData.stories[0];
    const items = s.digest.map(d => h('div', { class: 'card digest-item' },
      h('div', {}, d.text),
      h('div', { class: 'digest-time' }, d.time)
    ));

    appEl.replaceChildren(
      h('section', {},
        h('div', { class: 'section-title' }, 'End-of-Day Digest'),
        h('div', { class: 'grid' }, items),
        h('div', { class: 'space' }),
        h('a', { class: 'btn', href: '#/' }, 'Back to Front Page')
      )
    );
  }

  function renderWhy() {
    appEl.replaceChildren(
      h('section', { class: 'grid' },
        h('div', { class: 'card' },
          h('h2', {}, 'Methodology — Why these indicators?'),
          h('p', {}, 'Neutrality and framing signals derive from:'),
          h('ul', {},
            h('li', {}, 'Policy-alignment indicators (what policies the language implies)'),
            h('li', {}, 'Emotionally charged wording / value signaling'),
            h('li', {}, 'Which issues are emphasized vs. downplayed'),
            h('li', {}, 'Underlying value language and frames'),
            h('li', {}, 'Which major outlets covered the story vs. stayed silent')
          ),
          h('div', { class: 'hr' }),
          h('a', { class: 'btn', href: '#/' }, 'Back')
        )
      )
    );
  }

  function disclosureCard(title, blurb, cites) {
    const expanded = { v: false };
    const content = h('div', { class: 'card' },
      h('div', { class: 'row' },
        h('strong', {}, title),
        h('span', { class: 'disclosure', onClick: () => toggle() }, expanded.v ? 'Hide' : 'Expand')
      ),
      h('div', { class: 'space' }),
      h('div', { class: 'blurb' }, blurb),
      h('div', { class: 'space' }),
      h('div', { class: 'cites', style: 'display:none' },
        h('div', { class: 'section-title' }, 'Citations'),
        ...cites.map(c => h('div', {}, `“${c.quote}” — ${c.outlet} `, h('a', { href: c.link, target: '_blank', rel: 'noreferrer' }, 'source')))
      )
    );
    const citesEl = content.querySelector('.cites');
    function toggle() {
      expanded.v = !expanded.v;
      citesEl.style.display = expanded.v ? 'block' : 'none';
      content.querySelector('.disclosure').textContent = expanded.v ? 'Hide' : 'Expand';
    }
    return content;
  }

  // Theme toggle (simple)
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });

  // Start
  window.addEventListener('hashchange', router);
  router();
})();
