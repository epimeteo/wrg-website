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
    const els = [...page.querySelectorAll<HTMLElement>('.wrg-main, .wrg-foot'), bar];
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

/* ------------------------------------------------- Shared micro-interactions
   Every behavior below is opt-in through a data attribute, so any page can use
   it. Without JS (or with reduced motion) the markup already shows the final
   state: full numbers, a filled progress line, a scrollable review list. */
if (page) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const throttle = (fn: () => void) => {
    let f = 0;
    return () => {
      if (f) return;
      f = requestAnimationFrame(() => {
        f = 0;
        fn();
      });
    };
  };

  /* "On this page" rail: the dot of the visible section grows and its label slides in. */
  page.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
    const links = Array.from(rail.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const targets = links.map((a) => document.getElementById(a.hash.slice(1)));
    const update = () => {
      const line = window.innerHeight * 0.4;
      let idx = 0;
      targets.forEach((t, i) => {
        if (t && t.getBoundingClientRect().top <= line) idx = i;
      });
      links.forEach((a, i) => (i === idx ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
    };
    const on = throttle(update);
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    update();
  });

  /* Count-up figures: they start one after another and all land together. */
  const groups = Array.from(page.querySelectorAll<HTMLElement>('[data-count-group]'));
  if (!reduce && groups.length) {
    const eases = [
      (t: number) => 1 - Math.pow(1 - t, 3),
      (t: number) => 1 - Math.pow(1 - t, 5),
      (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
      (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    ];
    const run = (g: HTMLElement) => {
      const items = Array.from(g.querySelectorAll<HTMLElement>('[data-count]'));
      const total = 1800;
      const t0 = performance.now();
      items.forEach((el, i) => {
        const to = parseFloat(el.dataset.count || '0');
        const start = i * 140;
        const fmt = (n: number) => Math.round(n).toLocaleString('en-US');
        el.textContent = fmt(0);
        const ease = eases[i % eases.length];
        const step = (now: number) => {
          const t = Math.max(0, Math.min(1, (now - t0 - start) / (total - start)));
          el.textContent = fmt(to * ease(t));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          run(e.target as HTMLElement);
        }),
      { threshold: 0.4 },
    );
    groups.forEach((g) => io.observe(g));
  }

  /* 3D tilt that follows the cursor, up to 2 degrees. */
  if (fine && !reduce) {
    page.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
      const max = parseFloat(el.dataset.tilt || '2');
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--ry', `${(x * 2 * max).toFixed(2)}deg`);
        el.style.setProperty('--rx', `${(-y * 2 * max).toFixed(2)}deg`);
      });
      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
      });
    });
  }

  /* Progress line: fills with scroll and lights each stage in order. */
  page.querySelectorAll<HTMLElement>('[data-progress]').forEach((el) => {
    const steps = Array.from(el.querySelectorAll<HTMLElement>('[data-step]'));
    const update = () => {
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const p = reduce ? 1 : Math.max(0, Math.min(1, (vh * 0.85 - r.top) / Math.max(1, vh * 0.55)));
      el.style.setProperty('--p', p.toFixed(4));
      steps.forEach((s, i) => s.toggleAttribute('data-on', p >= (steps.length > 1 ? i / (steps.length - 1) : 0) - 0.001));
    };
    el.setAttribute('data-live', '');
    const on = throttle(update);
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    update();
  });

  /* Review carousel: drifts on its own, slows down while the section sits in
     the middle of the screen so people can read, and stops on hover, focus or
     the pause button (WCAG 2.2.2). */
  page.querySelectorAll<HTMLElement>('[data-marquee]').forEach((box) => {
    const track = box.querySelector<HTMLElement>('[data-marquee-track]');
    const btn = box.querySelector<HTMLButtonElement>('[data-marquee-toggle]');
    if (!track || reduce) return;
    const items = Array.from(track.children) as HTMLElement[];
    items.forEach((it) => {
      const c = it.cloneNode(true) as HTMLElement;
      c.setAttribute('aria-hidden', 'true');
      c.setAttribute('inert', '');
      c.classList.remove('rv');
      track.appendChild(c);
    });
    box.setAttribute('data-live', '');
    box.querySelector('[tabindex]')?.removeAttribute('tabindex');
    if (btn) btn.hidden = false;
    const FAST = 42;
    const SLOW = 9;
    let x = 0;
    let v = FAST;
    let paused = false;
    let held = false;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      const r = box.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = Math.abs(r.top + r.height / 2 - vh / 2) / (vh / 2);
      const target = paused || held ? 0 : center < 0.55 ? SLOW : FAST;
      v += (target - v) * Math.min(1, dt * 2.5);
      const half = track.scrollWidth / 2;
      x = (x + v * dt) % half;
      track.style.transform = `translate3d(${-x}px,0,0)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    box.addEventListener('pointerenter', () => (held = true));
    box.addEventListener('pointerleave', () => (held = false));
    box.addEventListener('focusin', () => (held = true));
    box.addEventListener('focusout', () => (held = false));
    btn?.addEventListener('click', () => {
      paused = !paused;
      btn.setAttribute('aria-pressed', String(paused));
      btn.querySelector('span')!.textContent = paused ? 'Play' : 'Pause';
    });
  });

  /* "Copy number": copies the phone number, draws a check and says "Copied" for 1.8 s. */
  page.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    if (!navigator.clipboard) return;
    btn.hidden = false;
    const label = btn.querySelector<HTMLElement>('.copy-label')!;
    const status = btn.parentElement?.querySelector<HTMLElement>('[data-copy-status]');
    let timer = 0;
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy || '');
      } catch {
        return;
      }
      btn.setAttribute('data-copied', '');
      label.textContent = 'Copied';
      if (status) status.textContent = 'Phone number copied';
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        btn.removeAttribute('data-copied');
        label.textContent = 'Copy number';
        if (status) status.textContent = '';
      }, 1800);
    });
  });
}
