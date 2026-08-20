import { useEffect } from 'react'
import { SITE } from '../data/site'

const ORIGIN = `https://${SITE.domain}`

// index.html ships one static <head> for every route, so a client-rendered
// page would otherwise keep the site-wide title and canonical URL forever.
// Each page declares its own here and this syncs the tags on navigation.
export default function usePageMeta({ title, canonicalPath = null, noindex = false }) {
  useEffect(() => {
    document.title = title
    setLink('canonical', canonicalPath ? ORIGIN + canonicalPath : null)
    setMeta('robots', noindex ? 'noindex' : null)
  }, [title, canonicalPath, noindex])
}

// Upsert a <link rel="…"> in <head>; a null href removes the tag entirely.
function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!href) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

// Same, for <meta name="…">.
function setMeta(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`)
  if (!content) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('meta')
    el.name = name
    document.head.appendChild(el)
  }
  el.content = content
}
