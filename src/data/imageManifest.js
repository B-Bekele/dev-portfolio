// Intrinsic size and WebP widths for every image the site ships.
//
// The repo holds WebP only — there are no source PNGs and no conversion step in
// the build. Add an image by converting it yourself (Squoosh, or `sharp` in a
// throwaway script) and adding an entry here. Settings the existing files use:
//
//   screenshots — quality 85, widths 900 and 1800, never upscaled past native
//   portrait    — quality 78, square crop (CSS renders it object-cover), 288/576
//
// `width`/`height` are the intrinsic dimensions of the original capture. Only
// their ratio is used — it is what lets the browser reserve the right box
// before the image arrives, which is what keeps the page from jumping on load.
// The key is the widest variant, used as the plain `src`.
export const IMAGES = {
  '/assets/screenshots/itch1-1800.webp': {
    width: 2056,
    height: 1320,
    srcset:
      '/assets/screenshots/itch1-900.webp 900w, /assets/screenshots/itch1-1800.webp 1800w',
  },
  // Vector, so it needs no width variants — the entry exists purely to give
  // the browser a ratio to reserve space with.
  '/assets/screenshots/itch2-architecture.svg': {
    width: 1200,
    height: 772,
  },
  '/assets/screenshots/risk1-1800.webp': {
    width: 1983,
    height: 1168,
    srcset:
      '/assets/screenshots/risk1-900.webp 900w, /assets/screenshots/risk1-1800.webp 1800w',
  },
  '/assets/screenshots/risk2-1800.webp': {
    width: 1941,
    height: 1078,
    srcset:
      '/assets/screenshots/risk2-900.webp 900w, /assets/screenshots/risk2-1800.webp 1800w',
  },
  '/assets/screenshots/mon1-1770.webp': {
    width: 1770,
    height: 1183,
    srcset:
      '/assets/screenshots/mon1-900.webp 900w, /assets/screenshots/mon1-1770.webp 1770w',
  },
  '/assets/screenshots/mon2-1761.webp': {
    width: 1761,
    height: 1180,
    srcset:
      '/assets/screenshots/mon2-900.webp 900w, /assets/screenshots/mon2-1761.webp 1761w',
  },
}
