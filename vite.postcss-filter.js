export default function PostCSSFilter() {
  return {
    name: 'postcss-filter',
    enforce: 'pre',
    transform(_, id) {
      if (!id.endsWith('.css')) return null
    },
  }
}
