import React from 'react'
import { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { sleep } from '@abw/badger-utils'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('bash', bash)

export const OLDCodeBlock = ({children, language='jsx'}) =>
  <div className="codeblock">
    <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers={true}>
      {children}
    </SyntaxHighlighter>
  </div>

export const CodeBlock = ({code, children, language='jsx', caption}) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }
  return (
    <div className="codeblock">
      {Boolean(caption) && <h4 className="caption">{caption}</h4>}
      <div
        className={`clipboard ${copied ? 'copied' : ''}`}
        onClick={copy}
      >
        { copied ? 'Copied' : 'Copy' }
      </div>
      <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers={true}>
        {code||children}
      </SyntaxHighlighter>
    </div>
  )
}


export default CodeBlock
