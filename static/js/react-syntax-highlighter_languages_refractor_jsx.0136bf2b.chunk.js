(this["webpackJsonpkolcrooks-com"]=this["webpackJsonpkolcrooks-com"]||[]).push([[67],{257:function(t,n,e){"use strict";function a(t){!function(t){var n=t.util.clone(t.languages.javascript);t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},t.languages.jsx.tag),t.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var e=function t(n){return n?"string"===typeof n?n:"string"===typeof n.content?n.content:n.content.map(t).join(""):""},a=function n(a){for(var s=[],o=0;o<a.length;o++){var g=a[o],i=!1;if("string"!==typeof g&&("tag"===g.type&&g.content[0]&&"tag"===g.content[0].type?"</"===g.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===e(g.content[0].content[1])&&s.pop():"/>"===g.content[g.content.length-1].content||s.push({tagName:e(g.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===g.type&&"{"===g.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===g.type&&"}"===g.content?s[s.length-1].openedBraces--:i=!0),(i||"string"===typeof g)&&s.length>0&&0===s[s.length-1].openedBraces){var c=e(g);o<a.length-1&&("string"===typeof a[o+1]||"plain-text"===a[o+1].type)&&(c+=e(a[o+1]),a.splice(o+1,1)),o>0&&("string"===typeof a[o-1]||"plain-text"===a[o-1].type)&&(c=e(a[o-1])+c,a.splice(o-1,1),o--),a[o]=new t.Token("plain-text",c,null,c)}g.content&&"string"!==typeof g.content&&n(g.content)}};t.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||a(t.tokens)}))}(t)}t.exports=a,a.displayName="jsx",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsx.0136bf2b.chunk.js.map