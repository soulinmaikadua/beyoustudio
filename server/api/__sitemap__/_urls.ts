import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  // fetch data directly in the correct type
  const phrases = await $fetch<{ pages: { slug: string, title: string } }>('/api/korean-phrases')
  const vocubs = await $fetch<{ pages: { slug: string, title: string } }>('/api/korean-vocubulary-lists')
  return [
    // map URLS as needed
    ...phrases.map(p => asSitemapUrl({
      loc: p.slug,
    })),
    ...vocubs.map(p => asSitemapUrl({
        loc: p.slug,
      }))
  ]
})
