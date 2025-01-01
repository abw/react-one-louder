import React    from 'react'
import site     from './config/site.js'
import sidebar  from './config/sidebar.js'
import { MDXProvider } from '@mdx-js/react'
import { SiteProvider, mdxComponents } from '@abw/badger-website'
import './styles/react-one-louder.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.{jsx,mdx}',
  { eager: true }
)

const snippets = import.meta.glob(
  './snippets/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

const App = () =>
  <MDXProvider components={mdxComponents}>
    <SiteProvider
      site={site}
      pages={pages}
      sidebar={sidebar}
      snippets={snippets}
      linkUp
    />
  </MDXProvider>

export default App