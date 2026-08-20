import { IMAGES } from '../data/imageManifest'

// Renders a manifest-backed image: picks the right WebP width for the viewport
// and stamps intrinsic width/height so the browser reserves the box before the
// file lands. No <picture> wrapper — the site ships WebP only, so there is no
// second format to fall back to.
//
// An image missing from the manifest still renders; it just loses the extra
// widths and the dimensions rather than breaking the page.
export default function ResponsiveImage({
  src,
  alt,
  sizes,
  className,
  loading = 'lazy',
}) {
  const meta = IMAGES[src]

  return (
    <img
      src={src}
      srcSet={meta?.srcset}
      sizes={meta ? sizes : undefined}
      alt={alt}
      width={meta?.width}
      height={meta?.height}
      loading={loading}
      decoding="async"
      className={className}
    />
  )
}
