import marked from 'marked'
import Prism from 'prismjs'

import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-python'

const renderer = new marked.Renderer()
renderer.code = function (code, lang) {
  code = this.options.highlight(code, lang)
  if (!lang) {
    return `<pre><code>${code}</code></pre>`
  }
  const langClass = 'language-' + lang
  return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`
}
marked.setOptions({
  renderer,
  highlight: (code, lang) => {
    return Prism.highlight(code, Prism.languages[lang || 'javascript'], lang)
  },
})

// function converToObject(str) {
//   return str
//     .trim()
//     .split(/\n/)
//     .reduce((acc, val) => {
//       const [key, value] = val.split(':')
//       acc[key] = value.trim()
//       return acc
//     }, {})
// }

// Conver vars into javascript object
function converToObject(str) {
  return Function(`"use strict"; return ({${str.trim()}}) `)()
}
function mdParse(value) {
  const vars = value.trim().match(/--vars(.*?)--/ms)
  if (!vars) return { vars: {}, html: marked(value) }

  const mdVars = converToObject(vars[1])

  const mdWithVariables = Object.entries(mdVars).reduce((acc, [key, value]) => {
    return acc.replace(RegExp(`@\\(${key}\\)`, 'g'), value)
  }, value.replace(vars[0], ''))

  return {
    vars: mdVars,
    html: marked(mdWithVariables),
  }
}
mdParse.Renderer = marked.Renderer
mdParse.setOptions = marked.setOptions
mdParse.getDefaults = marked.getDefaults
mdParse.Tokenizer = marked.Tokenizer
mdParse.lexer = marked.lexer
mdParse.parse = marked.parse

export default mdParse
