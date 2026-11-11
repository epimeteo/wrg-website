// Site behavior: accessible menu panel + scroll engine (recovery line,
// parallax, secondary reveals, header tone). Content is fully usable without JS.

const root = document.querySelector<HTMLElement>('[data-wrg-header]');
const page = document.querySelector<HTMLElement>('.wrg-page');

/* ---------------------------------------------------------------- Menu */
if (root && page) {
  const menu = root.querySelector<HTMLElement>('[data-menu]')!;
  const panel = menu.querySelector<HTMLElement>('.menu-panel')!;
  const openBtn = root.querySelector<HTMLButtonElement>('[data-menu-open]')!;
  const closeBtn = menu.querySelector<HTMLButtonElement>('.menu-close')!;
  const bar = root.querySelector<HTMLElement>('.hdr-bar')!;
  const groups = Array.from(menu.querySelectorAll<HTMLButtonElement>('[data-group]'));

  const setInert = (on: boolean) => {
    const els = [...page.querySelectorAll<HTMLElement>('.wrg-main, .wrg-foot, .callbar'), bar];
    els.forEach((el) => (on ? el.setAttribute('inert', '') : el.removeAttribute('inert')));
    document.documentElement.style.overflow = on ? 'hidden' : '';
  };

  const setGroup = (key: string | null) => {
    groups.forEach((g) => g.setAttribute('aria-expanded', String(g.dataset.group === key)));
  };

  const open = () => {
    const activeGroup = groups.find((g) => g.hasAttribute('data-active-group'));
    setGroup(activeGroup ? activeGroup.dataset.group! : null);
    menu.dataset.open = 'true';
    openBtn.setAttribute('aria-expanded', 'true');
    setInert(true);
    requestAnimationFrame(() => closeBtn.focus());
  };

  const close = () => {
    if (menu.dataset.open !== 'true') return;
    menu.dataset.open = 'false';
    openBtn.setAttribute('aria-expanded', 'false');
    setInert(false);
    openBtn.focus();
  };

  openBtn.addEventListener('click', open);
  menu.querySelectorAll('[data-menu-close]').forEach((b) => b.addEventListener('click', close));
  groups.forEach((g) =>
    g.addEventListener('click', () => setGroup(g.getAttribute('aria-expanded') === 'true' ? null : g.dataset.group!)),
  );

  menu.addEventListener('keydown', (e) => {
    if (menu.dataset.open !== 'true') return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key !== 'Tab') return;
    const focusable = Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(
      (el) => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden',
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

/* ------------------------------------------------------- Scroll engine */
if (root && page) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  page.setAttribute('data-rv', '');
  let state = { dark: false, top: true, compact: false };
  let raf = 0;

  const tick = () => {
    const vh = window.innerHeight;
    const canScroll = document.documentElement.scrollHeight > vh + 4;
    const still = reduce || !canScroll;
    const pr = page.getBoundingClientRect();
    const wide = pr.width >= 1024;

    page.querySelectorAll<HTMLElement>('[data-cur]').forEach((s) => {
      const r = s.getBoundingClientRect();
      const p = still ? 1 : Math.max(0, Math.min(1, (vh * 0.62 - r.top) / Math.max(1, r.height)));
      s.style.setProperty('--cur', p.toFixed(4));
      s.toggleAttribute('data-reached', still || p > 0.01);
      s.toggleAttribute('data-done', still || p > 0.97);
    });

    page.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
      if (still || !wide) {
        el.style.setProperty('--py', '0px');
        return;
      }
      const r = el.getBoundingClientRect();
      const d = parseFloat(el.dataset.depth || '0.08');
      const c = r.top + r.height / 2 - vh / 2;
      el.style.setProperty('--py', `${Math.max(-56, Math.min(56, -c * d)).toFixed(1)}px`);
    });

    page.querySelectorAll<HTMLElement>('.rv:not([data-in])').forEach((el) => {
      if (still || el.getBoundingClientRect().top < vh * 0.94) el.setAttribute('data-in', '');
    });

    const pg = still ? 0 : Math.max(0, Math.min(1, -pr.top / Math.max(1, pr.height - vh)));
    root.style.setProperty('--pg', pg.toFixed(4));

    let dark = false;
    page.querySelectorAll<HTMLElement>('[data-tone="dark"]').forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.top <= 38 && r.bottom > 38) dark = true;
    });
    const sy = window.scrollY;
    const next = { dark, top: still || sy < 24, compact: !still && sy > 64 };
    if (next.dark !== state.dark || next.top !== state.top || next.compact !== state.compact) {
      state = next;
      root.dataset.dark = String(next.dark);
      root.dataset.top = String(next.top);
      root.dataset.compact = String(next.compact);
    }
  };

  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      tick();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  tick();
  window.addEventListener('load', tick);
}
