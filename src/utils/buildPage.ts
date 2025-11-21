export function buildPage(page: any) {
  if (!page) return '/'
  const segments = [page.slug]
  let dad = page.parent

  while (dad && typeof dad === 'object') {
    segments.unshift(dad.slug)
    dad = dad.parent
  }

  return '/' + segments.join('/')
}
