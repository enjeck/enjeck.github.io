'use client'

import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

const Code = (props) => {
  const { children } = props
  
  // The pre tag wraps a code tag, so we need to extract from children
  if (!children || typeof children !== 'object') {
    return <pre {...props} />
  }

  // children is the <code> element
  const codeElement = Array.isArray(children) ? children[0] : children
  const className = codeElement?.props?.className || ''
  const language = className.replace(/language-/, '') || 'text'
  const codeString = String(codeElement?.props?.children || '').trim()

  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => {
            const { key: lineKey, ...lineProps } = getLineProps({ line, key: i })
            return (
              <div key={lineKey} {...lineProps}>
                {line.map((token, key) => {
                  const { key: tokenKey, ...tokenProps } = getTokenProps({ token, key })
                  return <span key={tokenKey} {...tokenProps} />
                })}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
