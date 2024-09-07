var Zn=Object.defineProperty;var Yn=(e,t,n)=>t in e?Zn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var xe=(e,t,n)=>Yn(e,typeof t!="symbol"?t+"":t,n);import{j as s,h as er,c as Zt,v as tr,o as Z,u as X,a as Xe,n as pe,b as nr,E as rr,t as Yt,d as Ze,e as me,m as L,f as sr,g as q,i as ar,s as Pe,r as or,k as mt,l as de,p as J,q as ir,M as lr}from"./components-epvrRIie.js";import{a as cr,r as g,L as ur,c as be,g as hr,u as dr,N as fr,b as mr,O as pr,d as gr,e as xr}from"./react-BkW_YBiv.js";import{S as Ye,d as br,t as H,O as pt,f as vr,a as wr,b as en,B as tn,m as nn,i as yr,c as jr,e as kr,g as Sr,h as Cr}from"./utils-w23eWfHh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var rn,gt=cr;rn=gt.createRoot,gt.hydrateRoot;const Y=(e,t)=>{const[n,r]=g.useState("");return g.useEffect(()=>{const a=Object.entries(e).filter(([,i])=>i).map(([i])=>i);r(a.join(" "))},t),n},ee=g.forwardRef(({className:e,children:t,type:n},r)=>{n=n??"h1";const a=Y({"text-4xl":n==="h1","text-3xl":n==="h2","text-2xl":n==="h3","text-xl":n==="h4","text-lg":n==="h5","text-base":n==="h6",[e??""]:!0},[e]),i=s.jsx("h1",{className:a,children:t}),o=s.jsx("h2",{className:a,children:t}),l=s.jsx("h3",{className:a,children:t}),c=s.jsx("h4",{className:a,children:t}),u=s.jsx("h5",{className:a,children:t}),m=s.jsx("h6",{className:a,children:t});return s.jsxs(s.Fragment,{children:[n==="h1"&&i,n==="h2"&&o,n==="h3"&&l,n==="h4"&&c,n==="h5"&&u,n==="h6"&&m]})}),Tr={"hljs-comment":{color:"rgba(255, 255, 255, 0.3)"},"hljs-quote":{color:"#d4d0ab"},"hljs-variable":{color:"rgb(244 114 182/var(--tw-text-opacity))"},"hljs-template-variable":{color:"rgb(244 114 182/var(--tw-text-opacity))"},"hljs-tag":{color:"rgb(100 116 139/var(--tw-text-opacity))"},"hljs-attr":{color:"#ebf472"},"hljs-function":{color:"#db72f4"},"hljs-punctuation":{color:"red"},"hljs-name":{color:"#db72f4"},"hljs-selector-id":{color:"rgb(244 114 182/var(--tw-text-opacity))"},"hljs-selector-class":{color:"rgb(244 114 182/var(--tw-text-opacity))"},"hljs-regexp":{color:"rgb(244 114 182/var(--tw-text-opacity))"},"hljs-deletion":{color:"rgb(244 114 182/var(--tw-text-opacity))"},"hljs-number":{color:"#f5ab35"},"hljs-built_in":{color:"#f5ab35"},"hljs-builtin-name":{color:"#f5ab35"},"hljs-literal":{color:"#f5ab35"},"hljs-type":{color:"#f5ab35"},"hljs-params":{color:"#72f495"},"hljs-meta":{color:"#f5ab35"},"hljs-link":{color:"#f5ab35"},"hljs-attribute":{color:"#ffd700"},"hljs-string":{color:"rgb(125 211 252/var(--tw-text-opacity))"},"hljs-symbol":{color:"#abe338"},"hljs-bullet":{color:"#abe338"},"hljs-addition":{color:"#abe338"},"hljs-title":{color:"#00e0e0"},"hljs-section":{color:"#00e0e0"},"hljs-keyword":{color:"rgb(244 114 182/var(--tw-text-opacity))"},"hljs-selector-tag":{color:"#dcc6e0"},hljs:{display:"block",overflowX:"auto",background:"rgb(30 41 59/var(--tw-bg-opacity))",color:"#f8f8f2",padding:"0.5em"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}},D=({language:e,code:t})=>s.jsx("div",{className:"overflow-hidden rounded-md border border-slate-600",children:s.jsx(er,{language:e??"jsx",style:Tr,children:t})});function xt(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,a=n.indexOf(t);for(;a!==-1;)r++,a=n.indexOf(t,a+t.length);return r}function _r(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Er(e,t,n){const a=Zt((n||{}).ignore||[]),i=Ar(t);let o=-1;for(;++o<i.length;)tr(e,"text",l);function l(u,m){let h=-1,x;for(;++h<m.length;){const b=m[h],f=x?x.children:void 0;if(a(b,f?f.indexOf(b):void 0,x))return;x=b}if(x)return c(u,m)}function c(u,m){const h=m[m.length-1],x=i[o][0],b=i[o][1];let f=0;const v=h.children.indexOf(u);let y=!1,j=[];x.lastIndex=0;let C=x.exec(u.value);for(;C;){const S=C.index,T={index:C.index,input:C.input,stack:[...m,u]};let N=b(...C,T);if(typeof N=="string"&&(N=N.length>0?{type:"text",value:N}:void 0),N===!1?x.lastIndex=S+1:(f!==S&&j.push({type:"text",value:u.value.slice(f,S)}),Array.isArray(N)?j.push(...N):N&&j.push(N),f=S+C[0].length,y=!0),!x.global)break;C=x.exec(u.value)}return y?(f<u.value.length&&j.push({type:"text",value:u.value.slice(f)}),h.children.splice(v,1,...j)):j=[u],v+j.length}}function Ar(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const a=n[r];t.push([$r(a[0]),Nr(a[1])])}return t}function $r(e){return typeof e=="string"?new RegExp(_r(e),"g"):e}function Nr(e){return typeof e=="function"?e:function(){return e}}const Fe="phrasing",Ie=["autolink","link","image","label"];function Dr(){return{transforms:[Mr],enter:{literalAutolink:Lr,literalAutolinkEmail:Re,literalAutolinkHttp:Re,literalAutolinkWww:Re},exit:{literalAutolink:Rr,literalAutolinkEmail:Ir,literalAutolinkHttp:Pr,literalAutolinkWww:Fr}}}function Or(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Fe,notInConstruct:Ie},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Fe,notInConstruct:Ie},{character:":",before:"[ps]",after:"\\/",inConstruct:Fe,notInConstruct:Ie}]}}function Lr(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Re(e){this.config.enter.autolinkProtocol.call(this,e)}function Pr(e){this.config.exit.autolinkProtocol.call(this,e)}function Fr(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];Z(t.type==="link"),t.url="http://"+this.sliceSerialize(e)}function Ir(e){this.config.exit.autolinkEmail.call(this,e)}function Rr(e){this.exit(e)}function Mr(e){Er(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Ur],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),zr]],{ignore:["link","linkReference"]})}function Ur(e,t,n,r,a){let i="";if(!sn(a)||(/^w/i.test(t)&&(n=t+n,t="",i="http://"),!Hr(n)))return!1;const o=Br(n+r);if(!o[0])return!1;const l={type:"link",title:null,url:i+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[l,{type:"text",value:o[1]}]:l}function zr(e,t,n,r){return!sn(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Hr(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Br(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const a=xt(e,"(");let i=xt(e,")");for(;r!==-1&&a>i;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),i++;return[e,n]}function sn(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||X(n)||Xe(n))&&(!t||n!==47)}an.peek=es;function Vr(){return{enter:{gfmFootnoteDefinition:Gr,gfmFootnoteDefinitionLabelString:Wr,gfmFootnoteCall:Qr,gfmFootnoteCallString:Xr},exit:{gfmFootnoteDefinition:Jr,gfmFootnoteDefinitionLabelString:Kr,gfmFootnoteCall:Yr,gfmFootnoteCallString:Zr}}}function qr(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:ts,footnoteReference:an}}}function Gr(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Wr(){this.buffer()}function Kr(e){const t=this.resume(),n=this.stack[this.stack.length-1];Z(n.type==="footnoteDefinition"),n.label=t,n.identifier=pe(this.sliceSerialize(e)).toLowerCase()}function Jr(e){this.exit(e)}function Qr(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Xr(){this.buffer()}function Zr(e){const t=this.resume(),n=this.stack[this.stack.length-1];Z(n.type==="footnoteReference"),n.label=t,n.identifier=pe(this.sliceSerialize(e)).toLowerCase()}function Yr(e){this.exit(e)}function an(e,t,n,r){const a=n.createTracker(r);let i=a.move("[^");const o=n.enter("footnoteReference"),l=n.enter("reference");return i+=a.move(n.safe(n.associationId(e),{...a.current(),before:i,after:"]"})),l(),o(),i+=a.move("]"),i}function es(){return"["}function ts(e,t,n,r){const a=n.createTracker(r);let i=a.move("[^");const o=n.enter("footnoteDefinition"),l=n.enter("label");return i+=a.move(n.safe(n.associationId(e),{...a.current(),before:i,after:"]"})),l(),i+=a.move("]:"+(e.children&&e.children.length>0?" ":"")),a.shift(4),i+=a.move(n.indentLines(n.containerFlow(e,a.current()),ns)),o(),i}function ns(e,t,n){return t===0?e:(n?"":"    ")+e}const rs=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];on.peek=ls;function ss(){return{canContainEols:["delete"],enter:{strikethrough:os},exit:{strikethrough:is}}}function as(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:rs}],handlers:{delete:on}}}function os(e){this.enter({type:"delete",children:[]},e)}function is(e){this.exit(e)}function on(e,t,n,r){const a=n.createTracker(r),i=n.enter("strikethrough");let o=a.move("~~");return o+=n.containerPhrasing(e,{...a.current(),before:o,after:"~"}),o+=a.move("~~"),i(),o}function ls(){return"~"}function cs(e,t={}){const n=(t.align||[]).concat(),r=t.stringLength||hs,a=[],i=[],o=[],l=[];let c=0,u=-1;for(;++u<e.length;){const f=[],w=[];let v=-1;for(e[u].length>c&&(c=e[u].length);++v<e[u].length;){const y=us(e[u][v]);if(t.alignDelimiters!==!1){const j=r(y);w[v]=j,(l[v]===void 0||j>l[v])&&(l[v]=j)}f.push(y)}i[u]=f,o[u]=w}let m=-1;if(typeof n=="object"&&"length"in n)for(;++m<c;)a[m]=bt(n[m]);else{const f=bt(n);for(;++m<c;)a[m]=f}m=-1;const h=[],x=[];for(;++m<c;){const f=a[m];let w="",v="";f===99?(w=":",v=":"):f===108?w=":":f===114&&(v=":");let y=t.alignDelimiters===!1?1:Math.max(1,l[m]-w.length-v.length);const j=w+"-".repeat(y)+v;t.alignDelimiters!==!1&&(y=w.length+y+v.length,y>l[m]&&(l[m]=y),x[m]=y),h[m]=j}i.splice(1,0,h),o.splice(1,0,x),u=-1;const b=[];for(;++u<i.length;){const f=i[u],w=o[u];m=-1;const v=[];for(;++m<c;){const y=f[m]||"";let j="",C="";if(t.alignDelimiters!==!1){const S=l[m]-(w[m]||0),T=a[m];T===114?j=" ".repeat(S):T===99?S%2?(j=" ".repeat(S/2+.5),C=" ".repeat(S/2-.5)):(j=" ".repeat(S/2),C=j):C=" ".repeat(S)}t.delimiterStart!==!1&&!m&&v.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&y==="")&&(t.delimiterStart!==!1||m)&&v.push(" "),t.alignDelimiters!==!1&&v.push(j),v.push(y),t.alignDelimiters!==!1&&v.push(C),t.padding!==!1&&v.push(" "),(t.delimiterEnd!==!1||m!==c-1)&&v.push("|")}b.push(t.delimiterEnd===!1?v.join("").replace(/ +$/,""):v.join(""))}return b.join(`
`)}function us(e){return e==null?"":String(e)}function hs(e){return e.length}function bt(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function ds(e,t,n,r){const a=n.enter("blockquote"),i=n.createTracker(r);i.move("> "),i.shift(2);const o=n.indentLines(n.containerFlow(e,i.current()),fs);return a(),o}function fs(e,t,n){return">"+(n?"":" ")+e}function ms(e,t){return vt(e,t.inConstruct,!0)&&!vt(e,t.notInConstruct,!1)}function vt(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function wt(e,t,n,r){let a=-1;for(;++a<n.unsafe.length;)if(n.unsafe[a].character===`
`&&ms(n.stack,n.unsafe[a]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function ps(e,t){const n=String(e);let r=n.indexOf(t),a=r,i=0,o=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===a?++i>o&&(o=i):i=1,a=r+t.length,r=n.indexOf(t,a);return o}function gs(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function xs(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function bs(e,t,n,r){const a=xs(n),i=e.value||"",o=a==="`"?"GraveAccent":"Tilde";if(gs(e,n)){const h=n.enter("codeIndented"),x=n.indentLines(i,vs);return h(),x}const l=n.createTracker(r),c=a.repeat(Math.max(ps(i,a)+1,3)),u=n.enter("codeFenced");let m=l.move(c);if(e.lang){const h=n.enter(`codeFencedLang${o}`);m+=l.move(n.safe(e.lang,{before:m,after:" ",encode:["`"],...l.current()})),h()}if(e.lang&&e.meta){const h=n.enter(`codeFencedMeta${o}`);m+=l.move(" "),m+=l.move(n.safe(e.meta,{before:m,after:`
`,encode:["`"],...l.current()})),h()}return m+=l.move(`
`),i&&(m+=l.move(i+`
`)),m+=l.move(c),u(),m}function vs(e,t,n){return(n?"":"    ")+e}function et(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function ws(e,t,n,r){const a=et(n),i=a==='"'?"Quote":"Apostrophe",o=n.enter("definition");let l=n.enter("label");const c=n.createTracker(r);let u=c.move("[");return u+=c.move(n.safe(n.associationId(e),{before:u,after:"]",...c.current()})),u+=c.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=c.move("<"),u+=c.move(n.safe(e.url,{before:u,after:">",...c.current()})),u+=c.move(">")):(l=n.enter("destinationRaw"),u+=c.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...c.current()}))),l(),e.title&&(l=n.enter(`title${i}`),u+=c.move(" "+a),u+=c.move(n.safe(e.title,{before:u,after:a,...c.current()})),u+=c.move(a),l()),o(),u}function ys(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}ln.peek=js;function ln(e,t,n,r){const a=ys(n),i=n.enter("emphasis"),o=n.createTracker(r);let l=o.move(a);return l+=o.move(n.containerPhrasing(e,{before:l,after:a,...o.current()})),l+=o.move(a),i(),l}function js(e,t,n){return n.options.emphasis||"*"}function ks(e,t){let n=!1;return nr(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,rr}),!!((!e.depth||e.depth<3)&&Yt(e)&&(t.options.setext||n))}function Ss(e,t,n,r){const a=Math.max(Math.min(6,e.depth||1),1),i=n.createTracker(r);if(ks(e,n)){const m=n.enter("headingSetext"),h=n.enter("phrasing"),x=n.containerPhrasing(e,{...i.current(),before:`
`,after:`
`});return h(),m(),x+`
`+(a===1?"=":"-").repeat(x.length-(Math.max(x.lastIndexOf("\r"),x.lastIndexOf(`
`))+1))}const o="#".repeat(a),l=n.enter("headingAtx"),c=n.enter("phrasing");i.move(o+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...i.current()});return/^[\t ]/.test(u)&&(u="&#x"+u.charCodeAt(0).toString(16).toUpperCase()+";"+u.slice(1)),u=u?o+" "+u:o,n.options.closeAtx&&(u+=" "+o),c(),l(),u}cn.peek=Cs;function cn(e){return e.value||""}function Cs(){return"<"}un.peek=Ts;function un(e,t,n,r){const a=et(n),i=a==='"'?"Quote":"Apostrophe",o=n.enter("image");let l=n.enter("label");const c=n.createTracker(r);let u=c.move("![");return u+=c.move(n.safe(e.alt,{before:u,after:"]",...c.current()})),u+=c.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=c.move("<"),u+=c.move(n.safe(e.url,{before:u,after:">",...c.current()})),u+=c.move(">")):(l=n.enter("destinationRaw"),u+=c.move(n.safe(e.url,{before:u,after:e.title?" ":")",...c.current()}))),l(),e.title&&(l=n.enter(`title${i}`),u+=c.move(" "+a),u+=c.move(n.safe(e.title,{before:u,after:a,...c.current()})),u+=c.move(a),l()),u+=c.move(")"),o(),u}function Ts(){return"!"}hn.peek=_s;function hn(e,t,n,r){const a=e.referenceType,i=n.enter("imageReference");let o=n.enter("label");const l=n.createTracker(r);let c=l.move("![");const u=n.safe(e.alt,{before:c,after:"]",...l.current()});c+=l.move(u+"]["),o();const m=n.stack;n.stack=[],o=n.enter("reference");const h=n.safe(n.associationId(e),{before:c,after:"]",...l.current()});return o(),n.stack=m,i(),a==="full"||!u||u!==h?c+=l.move(h+"]"):a==="shortcut"?c=c.slice(0,-1):c+=l.move("]"),c}function _s(){return"!"}dn.peek=Es;function dn(e,t,n){let r=e.value||"",a="`",i=-1;for(;new RegExp("(^|[^`])"+a+"([^`]|$)").test(r);)a+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++i<n.unsafe.length;){const o=n.unsafe[i],l=n.compilePattern(o);let c;if(o.atBreak)for(;c=l.exec(r);){let u=c.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(c.index+1)}}return a+r+a}function Es(){return"`"}function fn(e,t){const n=Yt(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}mn.peek=As;function mn(e,t,n,r){const a=et(n),i=a==='"'?"Quote":"Apostrophe",o=n.createTracker(r);let l,c;if(fn(e,n)){const m=n.stack;n.stack=[],l=n.enter("autolink");let h=o.move("<");return h+=o.move(n.containerPhrasing(e,{before:h,after:">",...o.current()})),h+=o.move(">"),l(),n.stack=m,h}l=n.enter("link"),c=n.enter("label");let u=o.move("[");return u+=o.move(n.containerPhrasing(e,{before:u,after:"](",...o.current()})),u+=o.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter("destinationLiteral"),u+=o.move("<"),u+=o.move(n.safe(e.url,{before:u,after:">",...o.current()})),u+=o.move(">")):(c=n.enter("destinationRaw"),u+=o.move(n.safe(e.url,{before:u,after:e.title?" ":")",...o.current()}))),c(),e.title&&(c=n.enter(`title${i}`),u+=o.move(" "+a),u+=o.move(n.safe(e.title,{before:u,after:a,...o.current()})),u+=o.move(a),c()),u+=o.move(")"),l(),u}function As(e,t,n){return fn(e,n)?"<":"["}pn.peek=$s;function pn(e,t,n,r){const a=e.referenceType,i=n.enter("linkReference");let o=n.enter("label");const l=n.createTracker(r);let c=l.move("[");const u=n.containerPhrasing(e,{before:c,after:"]",...l.current()});c+=l.move(u+"]["),o();const m=n.stack;n.stack=[],o=n.enter("reference");const h=n.safe(n.associationId(e),{before:c,after:"]",...l.current()});return o(),n.stack=m,i(),a==="full"||!u||u!==h?c+=l.move(h+"]"):a==="shortcut"?c=c.slice(0,-1):c+=l.move("]"),c}function $s(){return"["}function tt(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Ns(e){const t=tt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Ds(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function gn(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Os(e,t,n,r){const a=n.enter("list"),i=n.bulletCurrent;let o=e.ordered?Ds(n):tt(n);const l=e.ordered?o==="."?")":".":Ns(n);let c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){const m=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&m&&(!m.children||!m.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),gn(n)===o&&m){let h=-1;for(;++h<e.children.length;){const x=e.children[h];if(x&&x.type==="listItem"&&x.children&&x.children[0]&&x.children[0].type==="thematicBreak"){c=!0;break}}}}c&&(o=l),n.bulletCurrent=o;const u=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=i,a(),u}function Ls(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Ps(e,t,n,r){const a=Ls(n);let i=n.bulletCurrent||tt(n);t&&t.type==="list"&&t.ordered&&(i=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+i);let o=i.length+1;(a==="tab"||a==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);const l=n.createTracker(r);l.move(i+" ".repeat(o-i.length)),l.shift(o);const c=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),m);return c(),u;function m(h,x,b){return x?(b?"":" ".repeat(o))+h:(b?i:i+" ".repeat(o-i.length))+h}}function Fs(e,t,n,r){const a=n.enter("paragraph"),i=n.enter("phrasing"),o=n.containerPhrasing(e,r);return i(),a(),o}const Is=Zt(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Rs(e,t,n,r){return(e.children.some(function(o){return Is(o)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function Ms(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}xn.peek=Us;function xn(e,t,n,r){const a=Ms(n),i=n.enter("strong"),o=n.createTracker(r);let l=o.move(a+a);return l+=o.move(n.containerPhrasing(e,{before:l,after:a,...o.current()})),l+=o.move(a+a),i(),l}function Us(e,t,n){return n.options.strong||"*"}function zs(e,t,n,r){return n.safe(e.value,r)}function Hs(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function Bs(e,t,n){const r=(gn(n)+(n.options.ruleSpaces?" ":"")).repeat(Hs(n));return n.options.ruleSpaces?r.slice(0,-1):r}const bn={blockquote:ds,break:wt,code:bs,definition:ws,emphasis:ln,hardBreak:wt,heading:Ss,html:cn,image:un,imageReference:hn,inlineCode:dn,link:mn,linkReference:pn,list:Os,listItem:Ps,paragraph:Fs,root:Rs,strong:xn,text:zs,thematicBreak:Bs};function Vs(){return{enter:{table:qs,tableData:yt,tableHeader:yt,tableRow:Ws},exit:{codeText:Ks,table:Gs,tableData:Me,tableHeader:Me,tableRow:Me}}}function qs(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function Gs(e){this.exit(e),this.data.inTable=void 0}function Ws(e){this.enter({type:"tableRow",children:[]},e)}function Me(e){this.exit(e)}function yt(e){this.enter({type:"tableCell",children:[]},e)}function Ks(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,Js));const n=this.stack[this.stack.length-1];Z(n.type==="inlineCode"),n.value=t,this.exit(e)}function Js(e,t){return t==="|"?t:e}function Qs(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,a=t.stringLength,i=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:x,table:o,tableCell:c,tableRow:l}};function o(b,f,w,v){return u(m(b,w,v),b.align)}function l(b,f,w,v){const y=h(b,w,v),j=u([y]);return j.slice(0,j.indexOf(`
`))}function c(b,f,w,v){const y=w.enter("tableCell"),j=w.enter("phrasing"),C=w.containerPhrasing(b,{...v,before:i,after:i});return j(),y(),C}function u(b,f){return cs(b,{align:f,alignDelimiters:r,padding:n,stringLength:a})}function m(b,f,w){const v=b.children;let y=-1;const j=[],C=f.enter("table");for(;++y<v.length;)j[y]=h(v[y],f,w);return C(),j}function h(b,f,w){const v=b.children;let y=-1;const j=[],C=f.enter("tableRow");for(;++y<v.length;)j[y]=c(v[y],b,f,w);return C(),j}function x(b,f,w){let v=bn.inlineCode(b,f,w);return w.stack.includes("tableCell")&&(v=v.replace(/\|/g,"\\$&")),v}}function Xs(){return{exit:{taskListCheckValueChecked:jt,taskListCheckValueUnchecked:jt,paragraph:Ys}}}function Zs(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:ea}}}function jt(e){const t=this.stack[this.stack.length-2];Z(t.type==="listItem"),t.checked=e.type==="taskListCheckValueChecked"}function Ys(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];Z(n.type==="paragraph");const r=n.children[0];if(r&&r.type==="text"){const a=t.children;let i=-1,o;for(;++i<a.length;){const l=a[i];if(l.type==="paragraph"){o=l;break}}o===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function ea(e,t,n,r){const a=e.children[0],i=typeof e.checked=="boolean"&&a&&a.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);i&&l.move(o);let c=bn.listItem(e,t,n,{...r,...l.current()});return i&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),c;function u(m){return m+o}}function ta(){return[Dr(),Vr(),ss(),Vs(),Xs()]}function na(e){return{extensions:[Or(),qr(),as(),Qs(e),Zs()]}}const ra={tokenize:ca,partial:!0},vn={tokenize:ua,partial:!0},wn={tokenize:ha,partial:!0},yn={tokenize:da,partial:!0},sa={tokenize:fa,partial:!0},jn={name:"wwwAutolink",tokenize:ia,previous:Sn},kn={name:"protocolAutolink",tokenize:la,previous:Cn},B={name:"emailAutolink",tokenize:oa,previous:Tn},z={};function aa(){return{text:z}}let W=48;for(;W<123;)z[W]=B,W++,W===58?W=65:W===91&&(W=97);z[43]=B;z[45]=B;z[46]=B;z[95]=B;z[72]=[B,kn];z[104]=[B,kn];z[87]=[B,jn];z[119]=[B,jn];function oa(e,t,n){const r=this;let a,i;return o;function o(h){return!Be(h)||!Tn.call(r,r.previous)||nt(r.events)?n(h):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(h))}function l(h){return Be(h)?(e.consume(h),l):h===64?(e.consume(h),c):n(h)}function c(h){return h===46?e.check(sa,m,u)(h):h===45||h===95||Ze(h)?(i=!0,e.consume(h),c):m(h)}function u(h){return e.consume(h),a=!0,c}function m(h){return i&&a&&me(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(h)):n(h)}}function ia(e,t,n){const r=this;return a;function a(o){return o!==87&&o!==119||!Sn.call(r,r.previous)||nt(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(ra,e.attempt(vn,e.attempt(wn,i),n),n)(o))}function i(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}}function la(e,t,n){const r=this;let a="",i=!1;return o;function o(h){return(h===72||h===104)&&Cn.call(r,r.previous)&&!nt(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),a+=String.fromCodePoint(h),e.consume(h),l):n(h)}function l(h){if(me(h)&&a.length<5)return a+=String.fromCodePoint(h),e.consume(h),l;if(h===58){const x=a.toLowerCase();if(x==="http"||x==="https")return e.consume(h),c}return n(h)}function c(h){return h===47?(e.consume(h),i?u:(i=!0,c)):n(h)}function u(h){return h===null||sr(h)||L(h)||X(h)||Xe(h)?n(h):e.attempt(vn,e.attempt(wn,m),n)(h)}function m(h){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(h)}}function ca(e,t,n){let r=0;return a;function a(o){return(o===87||o===119)&&r<3?(r++,e.consume(o),a):o===46&&r===3?(e.consume(o),i):n(o)}function i(o){return o===null?n(o):t(o)}}function ua(e,t,n){let r,a,i;return o;function o(u){return u===46||u===95?e.check(yn,c,l)(u):u===null||L(u)||X(u)||u!==45&&Xe(u)?c(u):(i=!0,e.consume(u),o)}function l(u){return u===95?r=!0:(a=r,r=void 0),e.consume(u),o}function c(u){return a||r||!i?n(u):t(u)}}function ha(e,t){let n=0,r=0;return a;function a(o){return o===40?(n++,e.consume(o),a):o===41&&r<n?i(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(yn,t,i)(o):o===null||L(o)||X(o)?t(o):(e.consume(o),a)}function i(o){return o===41&&r++,e.consume(o),a}}function da(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),i):l===93?(e.consume(l),a):l===60||l===null||L(l)||X(l)?t(l):n(l)}function a(l){return l===null||l===40||l===91||L(l)||X(l)?t(l):r(l)}function i(l){return me(l)?o(l):n(l)}function o(l){return l===59?(e.consume(l),r):me(l)?(e.consume(l),o):n(l)}}function fa(e,t,n){return r;function r(i){return e.consume(i),a}function a(i){return Ze(i)?n(i):t(i)}}function Sn(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||L(e)}function Cn(e){return!me(e)}function Tn(e){return!(e===47||Be(e))}function Be(e){return e===43||e===45||e===46||e===95||Ze(e)}function nt(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const ma={tokenize:ja,partial:!0};function pa(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:va,continuation:{tokenize:wa},exit:ya}},text:{91:{name:"gfmFootnoteCall",tokenize:ba},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:ga,resolveTo:xa}}}}function ga(e,t,n){const r=this;let a=r.events.length;const i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o;for(;a--;){const c=r.events[a][1];if(c.type==="labelImage"){o=c;break}if(c.type==="gfmFootnoteCall"||c.type==="labelLink"||c.type==="label"||c.type==="image"||c.type==="link")break}return l;function l(c){if(!o||!o._balanced)return n(c);const u=pe(r.sliceSerialize({start:o.end,end:r.now()}));return u.codePointAt(0)!==94||!i.includes(u.slice(1))?n(c):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),t(c))}}function xa(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;const i={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},i.start),end:Object.assign({},i.end)},l=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...l),e}function ba(e,t,n){const r=this,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let i=0,o;return l;function l(h){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(h),e.exit("gfmFootnoteCallLabelMarker"),c}function c(h){return h!==94?n(h):(e.enter("gfmFootnoteCallMarker"),e.consume(h),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(h){if(i>999||h===93&&!o||h===null||h===91||L(h))return n(h);if(h===93){e.exit("chunkString");const x=e.exit("gfmFootnoteCallString");return a.includes(pe(r.sliceSerialize(x)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(h),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(h)}return L(h)||(o=!0),i++,e.consume(h),h===92?m:u}function m(h){return h===91||h===92||h===93?(e.consume(h),i++,u):u(h)}}function va(e,t,n){const r=this,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let i,o=0,l;return c;function c(f){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(f),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(f){return f===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(f),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",m):n(f)}function m(f){if(o>999||f===93&&!l||f===null||f===91||L(f))return n(f);if(f===93){e.exit("chunkString");const w=e.exit("gfmFootnoteDefinitionLabelString");return i=pe(r.sliceSerialize(w)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(f),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),x}return L(f)||(l=!0),o++,e.consume(f),f===92?h:m}function h(f){return f===91||f===92||f===93?(e.consume(f),o++,m):m(f)}function x(f){return f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),a.includes(i)||a.push(i),q(e,b,"gfmFootnoteDefinitionWhitespace")):n(f)}function b(f){return t(f)}}function wa(e,t,n){return e.check(ar,t,e.attempt(ma,t,n))}function ya(e){e.exit("gfmFootnoteDefinition")}function ja(e,t,n){const r=this;return q(e,a,"gfmFootnoteDefinitionIndent",5);function a(i){const o=r.events[r.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?t(i):n(i)}}function ka(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:i,resolveAll:a};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function a(o,l){let c=-1;for(;++c<o.length;)if(o[c][0]==="enter"&&o[c][1].type==="strikethroughSequenceTemporary"&&o[c][1]._close){let u=c;for(;u--;)if(o[u][0]==="exit"&&o[u][1].type==="strikethroughSequenceTemporary"&&o[u][1]._open&&o[c][1].end.offset-o[c][1].start.offset===o[u][1].end.offset-o[u][1].start.offset){o[c][1].type="strikethroughSequence",o[u][1].type="strikethroughSequence";const m={type:"strikethrough",start:Object.assign({},o[u][1].start),end:Object.assign({},o[c][1].end)},h={type:"strikethroughText",start:Object.assign({},o[u][1].end),end:Object.assign({},o[c][1].start)},x=[["enter",m,l],["enter",o[u][1],l],["exit",o[u][1],l],["enter",h,l]],b=l.parser.constructs.insideSpan.null;b&&Pe(x,x.length,0,or(b,o.slice(u+1,c),l)),Pe(x,x.length,0,[["exit",h,l],["enter",o[c][1],l],["exit",o[c][1],l],["exit",m,l]]),Pe(o,u-1,c-u+3,x),c=u+x.length-2;break}}for(c=-1;++c<o.length;)o[c][1].type==="strikethroughSequenceTemporary"&&(o[c][1].type="data");return o}function i(o,l,c){const u=this.previous,m=this.events;let h=0;return x;function x(f){return u===126&&m[m.length-1][1].type!=="characterEscape"?c(f):(o.enter("strikethroughSequenceTemporary"),b(f))}function b(f){const w=mt(u);if(f===126)return h>1?c(f):(o.consume(f),h++,b);if(h<2&&!n)return c(f);const v=o.exit("strikethroughSequenceTemporary"),y=mt(f);return v._open=!y||y===2&&!!w,v._close=!w||w===2&&!!y,l(f)}}}class Sa{constructor(){this.map=[]}add(t,n,r){Ca(this,t,n,r)}consume(t){if(this.map.sort(function(i,o){return i[0]-o[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push([...t]),t.length=0;let a=r.pop();for(;a;)t.push(...a),a=r.pop();this.map.length=0}}function Ca(e,t,n,r){let a=0;if(!(n===0&&r.length===0)){for(;a<e.map.length;){if(e.map[a][0]===t){e.map[a][1]+=n,e.map[a][2].push(...r);return}a+=1}e.map.push([t,n,r])}}function Ta(e,t){let n=!1;const r=[];for(;t<e.length;){const a=e[t];if(n){if(a[0]==="enter")a[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(a[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const i=r.length-1;r[i]=r[i]==="left"?"center":"right"}}else if(a[1].type==="tableDelimiterRow")break}else a[0]==="enter"&&a[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function _a(){return{flow:{null:{name:"table",tokenize:Ea,resolveAll:Aa}}}}function Ea(e,t,n){const r=this;let a=0,i=0,o;return l;function l(d){let I=r.events.length-1;for(;I>-1;){const Le=r.events[I][1].type;if(Le==="lineEnding"||Le==="linePrefix")I--;else break}const De=I>-1?r.events[I][1].type:null,Oe=De==="tableHead"||De==="tableRow"?N:c;return Oe===N&&r.parser.lazy[r.now().line]?n(d):Oe(d)}function c(d){return e.enter("tableHead"),e.enter("tableRow"),u(d)}function u(d){return d===124||(o=!0,i+=1),m(d)}function m(d){return d===null?n(d):de(d)?i>1?(i=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),b):n(d):J(d)?q(e,m,"whitespace")(d):(i+=1,o&&(o=!1,a+=1),d===124?(e.enter("tableCellDivider"),e.consume(d),e.exit("tableCellDivider"),o=!0,m):(e.enter("data"),h(d)))}function h(d){return d===null||d===124||L(d)?(e.exit("data"),m(d)):(e.consume(d),d===92?x:h)}function x(d){return d===92||d===124?(e.consume(d),h):h(d)}function b(d){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(d):(e.enter("tableDelimiterRow"),o=!1,J(d)?q(e,f,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):f(d))}function f(d){return d===45||d===58?v(d):d===124?(o=!0,e.enter("tableCellDivider"),e.consume(d),e.exit("tableCellDivider"),w):T(d)}function w(d){return J(d)?q(e,v,"whitespace")(d):v(d)}function v(d){return d===58?(i+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(d),e.exit("tableDelimiterMarker"),y):d===45?(i+=1,y(d)):d===null||de(d)?S(d):T(d)}function y(d){return d===45?(e.enter("tableDelimiterFiller"),j(d)):T(d)}function j(d){return d===45?(e.consume(d),j):d===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(d),e.exit("tableDelimiterMarker"),C):(e.exit("tableDelimiterFiller"),C(d))}function C(d){return J(d)?q(e,S,"whitespace")(d):S(d)}function S(d){return d===124?f(d):d===null||de(d)?!o||a!==i?T(d):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(d)):T(d)}function T(d){return n(d)}function N(d){return e.enter("tableRow"),R(d)}function R(d){return d===124?(e.enter("tableCellDivider"),e.consume(d),e.exit("tableCellDivider"),R):d===null||de(d)?(e.exit("tableRow"),t(d)):J(d)?q(e,R,"whitespace")(d):(e.enter("data"),F(d))}function F(d){return d===null||d===124||L(d)?(e.exit("data"),R(d)):(e.consume(d),d===92?E:F)}function E(d){return d===92||d===124?(e.consume(d),F):F(d)}}function Aa(e,t){let n=-1,r=!0,a=0,i=[0,0,0,0],o=[0,0,0,0],l=!1,c=0,u,m,h;const x=new Sa;for(;++n<e.length;){const b=e[n],f=b[1];b[0]==="enter"?f.type==="tableHead"?(l=!1,c!==0&&(kt(x,t,c,u,m),m=void 0,c=0),u={type:"table",start:Object.assign({},f.start),end:Object.assign({},f.end)},x.add(n,0,[["enter",u,t]])):f.type==="tableRow"||f.type==="tableDelimiterRow"?(r=!0,h=void 0,i=[0,0,0,0],o=[0,n+1,0,0],l&&(l=!1,m={type:"tableBody",start:Object.assign({},f.start),end:Object.assign({},f.end)},x.add(n,0,[["enter",m,t]])),a=f.type==="tableDelimiterRow"?2:m?3:1):a&&(f.type==="data"||f.type==="tableDelimiterMarker"||f.type==="tableDelimiterFiller")?(r=!1,o[2]===0&&(i[1]!==0&&(o[0]=o[1],h=ve(x,t,i,a,void 0,h),i=[0,0,0,0]),o[2]=n)):f.type==="tableCellDivider"&&(r?r=!1:(i[1]!==0&&(o[0]=o[1],h=ve(x,t,i,a,void 0,h)),i=o,o=[i[1],n,0,0])):f.type==="tableHead"?(l=!0,c=n):f.type==="tableRow"||f.type==="tableDelimiterRow"?(c=n,i[1]!==0?(o[0]=o[1],h=ve(x,t,i,a,n,h)):o[1]!==0&&(h=ve(x,t,o,a,n,h)),a=0):a&&(f.type==="data"||f.type==="tableDelimiterMarker"||f.type==="tableDelimiterFiller")&&(o[3]=n)}for(c!==0&&kt(x,t,c,u,m),x.consume(t.events),n=-1;++n<t.events.length;){const b=t.events[n];b[0]==="enter"&&b[1].type==="table"&&(b[1]._align=Ta(t.events,n))}return e}function ve(e,t,n,r,a,i){const o=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(i.end=Object.assign({},Q(t.events,n[0])),e.add(n[0],0,[["exit",i,t]]));const c=Q(t.events,n[1]);if(i={type:o,start:Object.assign({},c),end:Object.assign({},c)},e.add(n[1],0,[["enter",i,t]]),n[2]!==0){const u=Q(t.events,n[2]),m=Q(t.events,n[3]),h={type:l,start:Object.assign({},u),end:Object.assign({},m)};if(e.add(n[2],0,[["enter",h,t]]),r!==2){const x=t.events[n[2]],b=t.events[n[3]];if(x[1].end=Object.assign({},b[1].end),x[1].type="chunkText",x[1].contentType="text",n[3]>n[2]+1){const f=n[2]+1,w=n[3]-n[2]-1;e.add(f,w,[])}}e.add(n[3]+1,0,[["exit",h,t]])}return a!==void 0&&(i.end=Object.assign({},Q(t.events,a)),e.add(a,0,[["exit",i,t]]),i=void 0),i}function kt(e,t,n,r,a){const i=[],o=Q(t.events,n);a&&(a.end=Object.assign({},o),i.push(["exit",a,t])),r.end=Object.assign({},o),i.push(["exit",r,t]),e.add(n+1,0,i)}function Q(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const $a={name:"tasklistCheck",tokenize:Da};function Na(){return{text:{91:$a}}}function Da(e,t,n){const r=this;return a;function a(c){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(c):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),i)}function i(c){return L(c)?(e.enter("taskListCheckValueUnchecked"),e.consume(c),e.exit("taskListCheckValueUnchecked"),o):c===88||c===120?(e.enter("taskListCheckValueChecked"),e.consume(c),e.exit("taskListCheckValueChecked"),o):n(c)}function o(c){return c===93?(e.enter("taskListCheckMarker"),e.consume(c),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(c)}function l(c){return de(c)?t(c):J(c)?e.check({tokenize:Oa},t,n)(c):n(c)}}function Oa(e,t,n){return q(e,r,"whitespace");function r(a){return a===null?n(a):t(a)}}function La(e){return ir([aa(),pa(),ka(e),_a(),Na()])}const Pa={};function Fa(e){const t=this,n=e||Pa,r=t.data(),a=r.micromarkExtensions||(r.micromarkExtensions=[]),i=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),o=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);a.push(La(n)),i.push(ta()),o.push(na(n))}function Ia(e){return e.href.match(/^(https?:)?\/\//)?s.jsx("a",{href:e.href,children:e.children}):s.jsx(ur,{to:e.href,children:e.children})}const rt=({children:e,text:t})=>s.jsx(lr,{remarkPlugins:[Fa],components:{a(n){const{children:r,href:a}=n;return s.jsx(Ia,{href:a??"",children:r})},code(n){const{children:r,className:a,node:i,...o}=n;return/language-(\w+)/.exec(a||"")?s.jsx(D,{...o,code:String(r).replace(/\n$/,"")}):s.jsx("code",{...o,className:a,children:r})}},children:t??e}),G=e=>!!e&&typeof e=="object"&&"type"in e,fe=e=>!!e&&Array.isArray(e)&&e.every(G),U=(e,t)=>{const[n,r]=g.useState(null);return g.useEffect(()=>(e===null?fe(t)?r(t.find(G)):G(t)?r(t):r(null):fe(t)?r(t.find(a=>G(a)&&a.type===e)):G(t)&&t.type===e?r(t):r(null),()=>r(null)),[t]),n};function st(e,t,n=[]){const[r,a]=g.useState([]);return g.useEffect(()=>{let i=[];return e===null?i=fe(t)?t:G(t)?[t]:[]:Array.isArray(e)?fe(t)?i=t.filter(o=>e.find(l=>l===o.type)):G(t)&&t.type&&e.find(o=>o===t.type)&&(i=[t]):Array.isArray(e)||(fe(t)?i=t.filter(o=>o.type===e):G(t)&&t.type===e&&(i=[t])),n.length>0&&(i=i.filter(o=>o.type!==n.find(l=>l===o.type))),a(i),()=>a([])},[t,e]),r}const Ra=({children:e})=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx(ee,{type:"h2",children:"Examples"}),e]}),Ma=({children:e,title:t})=>{const n=U(Ve,e),r=st(null,e,[Ve]);return s.jsxs("div",{className:"example flex flex-col gap-10 overflow-auto rounded-md bg-slate-800 p-4",children:[s.jsxs("div",{children:[t&&s.jsx(ee,{type:"h3",children:t}),n]}),s.jsx("div",{className:"flex flex-col gap-2",children:r})]})},Ve=({children:e})=>s.jsx("div",{className:"py-4",children:s.jsx(rt,{text:e,children:e})}),k={Root:Ra,Example:Ma,Description:Ve},_n=({children:e})=>s.jsxs("div",{className:"flex",children:[s.jsx("strong",{className:"flex-shrink-0 basis-[30px]",children:"Q:"}),s.jsx("span",{children:e})]}),En=({children:e})=>s.jsxs("div",{className:"flex",children:[s.jsx("strong",{className:"flex-shrink-0 basis-[30px]",children:"A:"}),s.jsx("span",{children:e})]}),Ua=({children:e})=>{const t=U(_n,e),n=U(En,e);return s.jsxs("div",{className:"flex flex-col gap-2",children:[t,n]})},za=({children:e,title:t})=>{const n=U(qe,e),r=U(An,e),a=U(Dn,e),i=U(On,e),o=U(Ln,e),l=st(Pn,e);return s.jsxs("div",{className:"flex flex-col gap-10",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[t?s.jsx(qe,{title:t}):n,r]}),i,o,l,a]})},qe=({children:e,title:t})=>s.jsx(ee,{children:t??e}),An=({children:e})=>{const t=U($n,e),n=U(Nn,e);return s.jsxs(Ua,{children:[s.jsx(_n,{children:t}),s.jsx(En,{children:n})]})},$n=({children:e})=>s.jsx(s.Fragment,{children:e}),Nn=({children:e})=>s.jsx(s.Fragment,{children:e}),Dn=({children:e})=>s.jsx(k.Root,{children:e}),On=({items:e})=>{let t=[];return e.forEach(([n,r])=>{const a=t.find(i=>i.path===r)??{path:r,vars:[]};a.vars.push(n),t.includes(a)||t.push(a)}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx(ee,{type:"h2",children:"Importing"}),s.jsx(D,{code:t.map(n=>`import { ${n.vars.join(", ")} } from '@willikers/${n.path}';`).join(`
`)})]})},Ln=({children:e,text:t})=>s.jsxs("div",{className:"flex flex-col",children:[s.jsx(ee,{type:"h2",children:"Description"}),s.jsx(rt,{text:t,children:e})]}),Pn=({children:e,title:t})=>{const n=st(Fn,e),[r,a]=g.useState([]);return g.useEffect(()=>{n.length>0?a(n.map(i=>(i.props.comment?`// ${i.props.comment}
`:"")+i.props.code)):a([])},[n]),s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs(ee,{type:"h2",className:"flex place-content-between",children:[s.jsx("span",{children:"Usage"}),t&&s.jsx("span",{className:"text-[0.6em]",children:t})]}),s.jsx(D,{code:r.join(`
`)})]})},Fn=({code:e,comment:t})=>(g.useState(e),g.useState(t),s.jsx(s.Fragment,{})),p={Root:za,Header:qe,QAndA:An,Question:$n,Answer:Nn,Examples:Dn,Import:On,Description:Ln,Usage:Pn,CodeUsage:Fn},$=g.forwardRef(({className:e,placeholder:t,value:n,type:r,onChange:a,onBlur:i,onFocus:o},l)=>{const c=Y({"p-2 w-full outline-none rounded-md text-gray-900":!0,"outline-offset-2 focus-within:outline-blue-500":!0,className:e},[e]);return s.jsx("input",{type:r??"text",ref:l,placeholder:t,className:c,value:n,onChange:a,onBlur:i,onFocus:o,autoComplete:"one-time-code"})});function je(e,t,n){const r=Array.isArray(e)?e:[e],[a,i]=g.useState(),[o]=g.useState(()=>new Ye),[l]=g.useState(()=>o.pipe(br(t),H(c=>i(c)),H(c=>n==null?void 0:n(c))).subscribe());return g.useEffect(()=>()=>l.unsubscribe(),[]),g.useEffect(()=>o.next(e),r),a}function Ha(){this.__data__=[],this.size=0}var Ba=Ha;function Va(e,t){return e===t||e!==e&&t!==t}var In=Va,qa=In;function Ga(e,t){for(var n=e.length;n--;)if(qa(e[n][0],t))return n;return-1}var Te=Ga,Wa=Te,Ka=Array.prototype,Ja=Ka.splice;function Qa(e){var t=this.__data__,n=Wa(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Ja.call(t,n,1),--this.size,!0}var Xa=Qa,Za=Te;function Ya(e){var t=this.__data__,n=Za(t,e);return n<0?void 0:t[n][1]}var eo=Ya,to=Te;function no(e){return to(this.__data__,e)>-1}var ro=no,so=Te;function ao(e,t){var n=this.__data__,r=so(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var oo=ao,io=Ba,lo=Xa,co=eo,uo=ro,ho=oo;function te(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}te.prototype.clear=io;te.prototype.delete=lo;te.prototype.get=co;te.prototype.has=uo;te.prototype.set=ho;var _e=te,fo=_e;function mo(){this.__data__=new fo,this.size=0}var po=mo;function go(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var xo=go;function bo(e){return this.__data__.get(e)}var vo=bo;function wo(e){return this.__data__.has(e)}var yo=wo,jo=typeof be=="object"&&be&&be.Object===Object&&be,Rn=jo,ko=Rn,So=typeof self=="object"&&self&&self.Object===Object&&self,Co=ko||So||Function("return this")(),V=Co,To=V,_o=To.Symbol,at=_o,St=at,Mn=Object.prototype,Eo=Mn.hasOwnProperty,Ao=Mn.toString,he=St?St.toStringTag:void 0;function $o(e){var t=Eo.call(e,he),n=e[he];try{e[he]=void 0;var r=!0}catch{}var a=Ao.call(e);return r&&(t?e[he]=n:delete e[he]),a}var No=$o,Do=Object.prototype,Oo=Do.toString;function Lo(e){return Oo.call(e)}var Po=Lo,Ct=at,Fo=No,Io=Po,Ro="[object Null]",Mo="[object Undefined]",Tt=Ct?Ct.toStringTag:void 0;function Uo(e){return e==null?e===void 0?Mo:Ro:Tt&&Tt in Object(e)?Fo(e):Io(e)}var Ee=Uo;function zo(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Un=zo,Ho=Ee,Bo=Un,Vo="[object AsyncFunction]",qo="[object Function]",Go="[object GeneratorFunction]",Wo="[object Proxy]";function Ko(e){if(!Bo(e))return!1;var t=Ho(e);return t==qo||t==Go||t==Vo||t==Wo}var zn=Ko,Jo=V,Qo=Jo["__core-js_shared__"],Xo=Qo,Ue=Xo,_t=function(){var e=/[^.]+$/.exec(Ue&&Ue.keys&&Ue.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Zo(e){return!!_t&&_t in e}var Yo=Zo,ei=Function.prototype,ti=ei.toString;function ni(e){if(e!=null){try{return ti.call(e)}catch{}try{return e+""}catch{}}return""}var Hn=ni,ri=zn,si=Yo,ai=Un,oi=Hn,ii=/[\\^$.*+?()[\]{}|]/g,li=/^\[object .+?Constructor\]$/,ci=Function.prototype,ui=Object.prototype,hi=ci.toString,di=ui.hasOwnProperty,fi=RegExp("^"+hi.call(di).replace(ii,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function mi(e){if(!ai(e)||si(e))return!1;var t=ri(e)?fi:li;return t.test(oi(e))}var pi=mi;function gi(e,t){return e==null?void 0:e[t]}var xi=gi,bi=pi,vi=xi;function wi(e,t){var n=vi(e,t);return bi(n)?n:void 0}var ne=wi,yi=ne,ji=V,ki=yi(ji,"Map"),ot=ki,Si=ne,Ci=Si(Object,"create"),Ae=Ci,Et=Ae;function Ti(){this.__data__=Et?Et(null):{},this.size=0}var _i=Ti;function Ei(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ai=Ei,$i=Ae,Ni="__lodash_hash_undefined__",Di=Object.prototype,Oi=Di.hasOwnProperty;function Li(e){var t=this.__data__;if($i){var n=t[e];return n===Ni?void 0:n}return Oi.call(t,e)?t[e]:void 0}var Pi=Li,Fi=Ae,Ii=Object.prototype,Ri=Ii.hasOwnProperty;function Mi(e){var t=this.__data__;return Fi?t[e]!==void 0:Ri.call(t,e)}var Ui=Mi,zi=Ae,Hi="__lodash_hash_undefined__";function Bi(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=zi&&t===void 0?Hi:t,this}var Vi=Bi,qi=_i,Gi=Ai,Wi=Pi,Ki=Ui,Ji=Vi;function re(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}re.prototype.clear=qi;re.prototype.delete=Gi;re.prototype.get=Wi;re.prototype.has=Ki;re.prototype.set=Ji;var Qi=re,At=Qi,Xi=_e,Zi=ot;function Yi(){this.size=0,this.__data__={hash:new At,map:new(Zi||Xi),string:new At}}var el=Yi;function tl(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var nl=tl,rl=nl;function sl(e,t){var n=e.__data__;return rl(t)?n[typeof t=="string"?"string":"hash"]:n.map}var $e=sl,al=$e;function ol(e){var t=al(this,e).delete(e);return this.size-=t?1:0,t}var il=ol,ll=$e;function cl(e){return ll(this,e).get(e)}var ul=cl,hl=$e;function dl(e){return hl(this,e).has(e)}var fl=dl,ml=$e;function pl(e,t){var n=ml(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var gl=pl,xl=el,bl=il,vl=ul,wl=fl,yl=gl;function se(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}se.prototype.clear=xl;se.prototype.delete=bl;se.prototype.get=vl;se.prototype.has=wl;se.prototype.set=yl;var Bn=se,jl=_e,kl=ot,Sl=Bn,Cl=200;function Tl(e,t){var n=this.__data__;if(n instanceof jl){var r=n.__data__;if(!kl||r.length<Cl-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Sl(r)}return n.set(e,t),this.size=n.size,this}var _l=Tl,El=_e,Al=po,$l=xo,Nl=vo,Dl=yo,Ol=_l;function ae(e){var t=this.__data__=new El(e);this.size=t.size}ae.prototype.clear=Al;ae.prototype.delete=$l;ae.prototype.get=Nl;ae.prototype.has=Dl;ae.prototype.set=Ol;var Ll=ae,Pl="__lodash_hash_undefined__";function Fl(e){return this.__data__.set(e,Pl),this}var Il=Fl;function Rl(e){return this.__data__.has(e)}var Ml=Rl,Ul=Bn,zl=Il,Hl=Ml;function ke(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ul;++t<n;)this.add(e[t])}ke.prototype.add=ke.prototype.push=zl;ke.prototype.has=Hl;var Bl=ke;function Vl(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var ql=Vl;function Gl(e,t){return e.has(t)}var Wl=Gl,Kl=Bl,Jl=ql,Ql=Wl,Xl=1,Zl=2;function Yl(e,t,n,r,a,i){var o=n&Xl,l=e.length,c=t.length;if(l!=c&&!(o&&c>l))return!1;var u=i.get(e),m=i.get(t);if(u&&m)return u==t&&m==e;var h=-1,x=!0,b=n&Zl?new Kl:void 0;for(i.set(e,t),i.set(t,e);++h<l;){var f=e[h],w=t[h];if(r)var v=o?r(w,f,h,t,e,i):r(f,w,h,e,t,i);if(v!==void 0){if(v)continue;x=!1;break}if(b){if(!Jl(t,function(y,j){if(!Ql(b,j)&&(f===y||a(f,y,n,r,i)))return b.push(j)})){x=!1;break}}else if(!(f===w||a(f,w,n,r,i))){x=!1;break}}return i.delete(e),i.delete(t),x}var Vn=Yl,ec=V,tc=ec.Uint8Array,nc=tc;function rc(e){var t=-1,n=Array(e.size);return e.forEach(function(r,a){n[++t]=[a,r]}),n}var sc=rc;function ac(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var oc=ac,$t=at,Nt=nc,ic=In,lc=Vn,cc=sc,uc=oc,hc=1,dc=2,fc="[object Boolean]",mc="[object Date]",pc="[object Error]",gc="[object Map]",xc="[object Number]",bc="[object RegExp]",vc="[object Set]",wc="[object String]",yc="[object Symbol]",jc="[object ArrayBuffer]",kc="[object DataView]",Dt=$t?$t.prototype:void 0,ze=Dt?Dt.valueOf:void 0;function Sc(e,t,n,r,a,i,o){switch(n){case kc:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case jc:return!(e.byteLength!=t.byteLength||!i(new Nt(e),new Nt(t)));case fc:case mc:case xc:return ic(+e,+t);case pc:return e.name==t.name&&e.message==t.message;case bc:case wc:return e==t+"";case gc:var l=cc;case vc:var c=r&hc;if(l||(l=uc),e.size!=t.size&&!c)return!1;var u=o.get(e);if(u)return u==t;r|=dc,o.set(e,t);var m=lc(l(e),l(t),r,a,i,o);return o.delete(e),m;case yc:if(ze)return ze.call(e)==ze.call(t)}return!1}var Cc=Sc;function Tc(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}var _c=Tc,Ec=Array.isArray,it=Ec,Ac=_c,$c=it;function Nc(e,t,n){var r=t(e);return $c(e)?r:Ac(r,n(e))}var Dc=Nc;function Oc(e,t){for(var n=-1,r=e==null?0:e.length,a=0,i=[];++n<r;){var o=e[n];t(o,n,e)&&(i[a++]=o)}return i}var Lc=Oc;function Pc(){return[]}var Fc=Pc,Ic=Lc,Rc=Fc,Mc=Object.prototype,Uc=Mc.propertyIsEnumerable,Ot=Object.getOwnPropertySymbols,zc=Ot?function(e){return e==null?[]:(e=Object(e),Ic(Ot(e),function(t){return Uc.call(e,t)}))}:Rc,Hc=zc;function Bc(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Vc=Bc;function qc(e){return e!=null&&typeof e=="object"}var Ne=qc,Gc=Ee,Wc=Ne,Kc="[object Arguments]";function Jc(e){return Wc(e)&&Gc(e)==Kc}var Qc=Jc,Lt=Qc,Xc=Ne,qn=Object.prototype,Zc=qn.hasOwnProperty,Yc=qn.propertyIsEnumerable,eu=Lt(function(){return arguments}())?Lt:function(e){return Xc(e)&&Zc.call(e,"callee")&&!Yc.call(e,"callee")},tu=eu,Se={exports:{}};function nu(){return!1}var ru=nu;Se.exports;(function(e,t){var n=V,r=ru,a=t&&!t.nodeType&&t,i=a&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===a,l=o?n.Buffer:void 0,c=l?l.isBuffer:void 0,u=c||r;e.exports=u})(Se,Se.exports);var Gn=Se.exports,su=9007199254740991,au=/^(?:0|[1-9]\d*)$/;function ou(e,t){var n=typeof e;return t=t??su,!!t&&(n=="number"||n!="symbol"&&au.test(e))&&e>-1&&e%1==0&&e<t}var iu=ou,lu=9007199254740991;function cu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=lu}var Wn=cu,uu=Ee,hu=Wn,du=Ne,fu="[object Arguments]",mu="[object Array]",pu="[object Boolean]",gu="[object Date]",xu="[object Error]",bu="[object Function]",vu="[object Map]",wu="[object Number]",yu="[object Object]",ju="[object RegExp]",ku="[object Set]",Su="[object String]",Cu="[object WeakMap]",Tu="[object ArrayBuffer]",_u="[object DataView]",Eu="[object Float32Array]",Au="[object Float64Array]",$u="[object Int8Array]",Nu="[object Int16Array]",Du="[object Int32Array]",Ou="[object Uint8Array]",Lu="[object Uint8ClampedArray]",Pu="[object Uint16Array]",Fu="[object Uint32Array]",_={};_[Eu]=_[Au]=_[$u]=_[Nu]=_[Du]=_[Ou]=_[Lu]=_[Pu]=_[Fu]=!0;_[fu]=_[mu]=_[Tu]=_[pu]=_[_u]=_[gu]=_[xu]=_[bu]=_[vu]=_[wu]=_[yu]=_[ju]=_[ku]=_[Su]=_[Cu]=!1;function Iu(e){return du(e)&&hu(e.length)&&!!_[uu(e)]}var Ru=Iu;function Mu(e){return function(t){return e(t)}}var Uu=Mu,Ce={exports:{}};Ce.exports;(function(e,t){var n=Rn,r=t&&!t.nodeType&&t,a=r&&!0&&e&&!e.nodeType&&e,i=a&&a.exports===r,o=i&&n.process,l=function(){try{var c=a&&a.require&&a.require("util").types;return c||o&&o.binding&&o.binding("util")}catch{}}();e.exports=l})(Ce,Ce.exports);var zu=Ce.exports,Hu=Ru,Bu=Uu,Pt=zu,Ft=Pt&&Pt.isTypedArray,Vu=Ft?Bu(Ft):Hu,Kn=Vu,qu=Vc,Gu=tu,Wu=it,Ku=Gn,Ju=iu,Qu=Kn,Xu=Object.prototype,Zu=Xu.hasOwnProperty;function Yu(e,t){var n=Wu(e),r=!n&&Gu(e),a=!n&&!r&&Ku(e),i=!n&&!r&&!a&&Qu(e),o=n||r||a||i,l=o?qu(e.length,String):[],c=l.length;for(var u in e)(t||Zu.call(e,u))&&!(o&&(u=="length"||a&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Ju(u,c)))&&l.push(u);return l}var eh=Yu,th=Object.prototype;function nh(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||th;return e===n}var rh=nh;function sh(e,t){return function(n){return e(t(n))}}var ah=sh,oh=ah,ih=oh(Object.keys,Object),lh=ih,ch=rh,uh=lh,hh=Object.prototype,dh=hh.hasOwnProperty;function fh(e){if(!ch(e))return uh(e);var t=[];for(var n in Object(e))dh.call(e,n)&&n!="constructor"&&t.push(n);return t}var mh=fh,ph=zn,gh=Wn;function xh(e){return e!=null&&gh(e.length)&&!ph(e)}var bh=xh,vh=eh,wh=mh,yh=bh;function jh(e){return yh(e)?vh(e):wh(e)}var kh=jh,Sh=Dc,Ch=Hc,Th=kh;function _h(e){return Sh(e,Th,Ch)}var Eh=_h,It=Eh,Ah=1,$h=Object.prototype,Nh=$h.hasOwnProperty;function Dh(e,t,n,r,a,i){var o=n&Ah,l=It(e),c=l.length,u=It(t),m=u.length;if(c!=m&&!o)return!1;for(var h=c;h--;){var x=l[h];if(!(o?x in t:Nh.call(t,x)))return!1}var b=i.get(e),f=i.get(t);if(b&&f)return b==t&&f==e;var w=!0;i.set(e,t),i.set(t,e);for(var v=o;++h<c;){x=l[h];var y=e[x],j=t[x];if(r)var C=o?r(j,y,x,t,e,i):r(y,j,x,e,t,i);if(!(C===void 0?y===j||a(y,j,n,r,i):C)){w=!1;break}v||(v=x=="constructor")}if(w&&!v){var S=e.constructor,T=t.constructor;S!=T&&"constructor"in e&&"constructor"in t&&!(typeof S=="function"&&S instanceof S&&typeof T=="function"&&T instanceof T)&&(w=!1)}return i.delete(e),i.delete(t),w}var Oh=Dh,Lh=ne,Ph=V,Fh=Lh(Ph,"DataView"),Ih=Fh,Rh=ne,Mh=V,Uh=Rh(Mh,"Promise"),zh=Uh,Hh=ne,Bh=V,Vh=Hh(Bh,"Set"),qh=Vh,Gh=ne,Wh=V,Kh=Gh(Wh,"WeakMap"),Jh=Kh,Ge=Ih,We=ot,Ke=zh,Je=qh,Qe=Jh,Jn=Ee,oe=Hn,Rt="[object Map]",Qh="[object Object]",Mt="[object Promise]",Ut="[object Set]",zt="[object WeakMap]",Ht="[object DataView]",Xh=oe(Ge),Zh=oe(We),Yh=oe(Ke),ed=oe(Je),td=oe(Qe),K=Jn;(Ge&&K(new Ge(new ArrayBuffer(1)))!=Ht||We&&K(new We)!=Rt||Ke&&K(Ke.resolve())!=Mt||Je&&K(new Je)!=Ut||Qe&&K(new Qe)!=zt)&&(K=function(e){var t=Jn(e),n=t==Qh?e.constructor:void 0,r=n?oe(n):"";if(r)switch(r){case Xh:return Ht;case Zh:return Rt;case Yh:return Mt;case ed:return Ut;case td:return zt}return t});var nd=K,He=Ll,rd=Vn,sd=Cc,ad=Oh,Bt=nd,Vt=it,qt=Gn,od=Kn,id=1,Gt="[object Arguments]",Wt="[object Array]",we="[object Object]",ld=Object.prototype,Kt=ld.hasOwnProperty;function cd(e,t,n,r,a,i){var o=Vt(e),l=Vt(t),c=o?Wt:Bt(e),u=l?Wt:Bt(t);c=c==Gt?we:c,u=u==Gt?we:u;var m=c==we,h=u==we,x=c==u;if(x&&qt(e)){if(!qt(t))return!1;o=!0,m=!1}if(x&&!m)return i||(i=new He),o||od(e)?rd(e,t,n,r,a,i):sd(e,t,c,n,r,a,i);if(!(n&id)){var b=m&&Kt.call(e,"__wrapped__"),f=h&&Kt.call(t,"__wrapped__");if(b||f){var w=b?e.value():e,v=f?t.value():t;return i||(i=new He),a(w,v,n,r,i)}}return x?(i||(i=new He),ad(e,t,n,r,a,i)):!1}var ud=cd,hd=ud,Jt=Ne;function Qn(e,t,n,r,a){return e===t?!0:e==null||t==null||!Jt(e)&&!Jt(t)?e!==e&&t!==t:hd(e,t,n,r,Qn,a)}var dd=Qn,fd=dd;function md(e,t){return fd(e,t)}var pd=md;const lt=hr(pd),ye=(e,t)=>Array.isArray(e)?e.includes(t):e===t,gd=e=>typeof e<"u"&&(Array.isArray(e)?e.length>0:!0);function O(...e){const t={setOwnTiming:!1},n=e[0]??"";let r,a={when:"change",useDebounce:0,validators:[],stopOnError:!1};const i=["ctrl-valid","ctrl-invalid","ctrl-dirty","ctrl-pristine","ctrl-touched","ctrl-untouched","ctrl-pending"];e[1]&&typeof e[1]=="function"||Array.isArray(e[1])?r=e[1]:e[1]&&typeof e[1]=="object"&&!Array.isArray(e[1])&&(r=e[1].validators),e[1]&&typeof e[1]=="object"&&!Array.isArray(e[1])?(t.setOwnTiming=typeof e[1].when<"u",Object.assign(a,e[1])):e[2]&&typeof e[2]=="object"&&!Array.isArray(e[2])&&(t.setOwnTiming=typeof e[2].when<"u",Object.assign(a,e[2]));const[o,l]=g.useState(!1),[c,u]=g.useState(!1),[m,h]=g.useState(!1),[x]=g.useState(n),[b,f]=g.useState(n),[w,v]=g.useState(!1),[y,j]=g.useState(!0),[C,S]=g.useState({}),[T,N]=g.useState(!1),[R,F]=g.useState(!1),E=g.useRef(null);if(a.useDebounce>0){if(ye(a.when,"change")){const A=je(b,a.useDebounce,()=>d());g.useEffect(()=>{d()},[A])}if(ye(a.when,"blur")){const A=je(R,a.useDebounce);g.useEffect(()=>{d()},[A])}}g.useEffect(()=>{T||!a.useDebounce&&ye(a.when,"change")&&d()},[b]),g.useEffect(()=>{if(E.current){const A=[];Object.keys(C).length>0?A.push("ctrl-invalid"):A.push("ctrl-valid"),m?A.push("ctrl-dirty"):A.push("ctrl-pristine"),o?A.push("ctrl-touched"):A.push("ctrl-untouched"),c&&A.push("ctrl-pending"),E.current.classList.remove(...i),E.current.classList.add(...A)}},[m,o,c]);const d=async()=>{if(!gd(r)){v(!0),j(!1);return}const A=Array.isArray(r)?r:[r],ue={};for(const ft of A)if(typeof ft=="function"){const ge=ft();if(typeof ge>"u")continue;let M=ge.validate(b);if((M instanceof Promise||M instanceof pt)&&u(!0),M instanceof Promise?M=await M:M instanceof pt&&(M=await vr(M)),u(!1),M||(ue[ge.code??""]=ge.message??""),a.stopOnError&&!M)break}const dt=Object.keys(ue).length;v(dt===0),j(dt>0),h(b!==x),!lt(Object.keys(C),Object.keys(ue))&&S(ue)};return{bind:{value:b,onChange:A=>f(A.target.value),onBlur:()=>{l(!0),F(!0),!a.useDebounce&&ye(a.when,"blur")&&d()},onFocus:()=>F(!1),ref:E},touched:o,pending:c,dirty:m,valid:w,invalid:y,errors:C,isEmpty:()=>b.trim().length===0,hasError:A=>typeof C[A]<"u",setValue:f,validate:d,internal:{setManualValidate:N,setValidationTiming:A=>a.when=A,...t}}}const ie=(e,t)=>{const[n,r]=g.useState(!1),[a,i]=g.useState(!1),[o,l]=g.useState(!1),[c,u]=g.useState(!1),[m,h]=g.useState(!0),[x,b]=g.useState({}),f=g.useRef(null),w=Object.entries(e),v=Object.assign({when:"change"},t),y=()=>{w.forEach(([S,T])=>{T.internal.setManualValidate(!0),T.validate()})};return g.useEffect(()=>{w.forEach(([E,d])=>{d.internal.setOwnTiming||d.internal.setValidationTiming(v.when)}),y();const S=w.some(([E,d])=>d.invalid),T=w.every(([E,d])=>d.valid),N=w.some(([E,d])=>d.touched),R=w.some(([E,d])=>d.dirty);let F=w.reduce((E,[d,I])=>(E[d]??(E[d]={}),I.invalid&&(E[d]=I.errors),E),{});F=Object.entries(F).reduce((E,[d,I])=>(Object.keys(I).length>0&&(E[d]=I),E),{}),r(T),h(S),i(N),u(R),!lt(x,F)&&b(F)},[e]),g.useEffect(()=>{l(!1)},[o]),{touched:a,dirty:c,invalid:m,valid:n,errors:x,hasError:S=>{var T;if(S.includes(".")){const[N,R]=S.split(".");return typeof((T=x[N])==null?void 0:T[R])<"u"}return typeof x[S]<"u"},submitted:o,bind:{onSubmit:S=>{(v.when==="submit"||Array.isArray(v.when)&&v.when.includes("submit"))&&(S.preventDefault(),y(),l(!0))},ref:f},controls:{...e}}},le=e=>()=>({code:"minLength",message:`This field must be at least ${e} characters long`,validate:t=>t.trim().length>=e}),xd=e=>()=>({code:"maxLength",message:`This field must be at most ${e} characters long`,validate:t=>t.length<=e}),ct=()=>({code:"email",message:"This field must be a valid email address",validate:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}),bd=e=>()=>({code:"matchesControl",message:"This field must match the other field",validate:async t=>{const n=e();return await n.validate(),n.value===t}}),vd=`
A form control is a component that allows users to interact with an individual form element. The form control is responsible for managing the state of the form element and updating the form data.

|Argument|Type|Description|
|--------|----|-----------|
|\`value\`|string|The initial value of the form control.|
|\`validator\`|Function[] \\| Function|A validator or an array of validators that validate the form control value.|
|\`options.useDebounce\`|number|The debounce time in milliseconds.|
|\`options.stopOnError\`|boolean|Indicates whether to stop validation on the first error.|
|\`options.when\`|\`change\` \\| \`blur\`\\| \`manual\`|Sets at which point the form control should be validated.|
|\`options.validators\`|Function[] \\| Function|A validator or an array of validators that validate the form control value.|

### Usage

~~~javascript
// Creates a form control with an initial value of an empty string and no validators and default options
const control = useControl();
// Creates a form control with an initial value of "initial value" and no validators and default options
const control = useControl('initial value');
// Creates a form control with an initial value of "initial value" and an array of validators and default options
const control = useControl('initial value', [required, minLength(5)]);
// Creates a form control with an initial value of "initial value" and a single validator and custom options
const control = useControl('initial value', required, { useDebounce: 300, stopOnError: true, when: 'change' });
// Creates a form control with an initial value of "initial value" and a single validator and custom options
const control = useControl('initial value', {
  validators: required,
  useDebounce: 300,
  stopOnError: true,
  when: ['change', 'blur']
});
~~~

The once you have the control set up the way you want, you then use the \`bind\` property to bind the control to the form element that it should manage.

**Note:** If your using a custom input, it should support the \`value\`, \`onChange\`, \`onBlur\`, and \`onFocus\` properties.

~~~javascript
return <input type="text" {...control.bind} />;
~~~

For information on how to use built-in validators or use custom validators, see [Form Validators](/hook/forms/form-validators).

### Control Return Interface

Each form control has the following return interface:

|Property|Type|Description|
|--------|----|-----------|
|\`bind\`|Object|An object that contains the bindings for the form control.|
|\`bind.value\`|string|The current value of the form control.|
|\`bind.onChange\`|Function|A function that updates the form control value.|
|\`bind.onBlur\`|Function|A function that is called when the form control loses focus.|
|\`touched\`|boolean|Indicates whether the form control has been touched.|
|\`dirty\`|boolean|Indicates whether the form control has been modified by the user.|
|\`valid\`|boolean|Indicates whether the form control is valid.|
|\`invalid\`|boolean|Indicates whether the form control is invalid.|
|\`errors\`|Object|Contains the validation errors for the form control.|
|\`isEmpty\`|Function|Returns true if the form control value is empty.|
|\`hasError\`|Function|Returns true if the form control has a specific error.|
|\`setValue\`|Function|Updates the form control value.|
|\`validate\`|Function|Validates the form control value.|



### CSS Classes

When a control is in a certain state, it will have the following CSS classes applied to it, which can be used to style the control accordingly if desired.

|State|CSS Class|Description|
|-----|---------|-----------|
|Touched|\`ctrl-touched\`|The form control has been touched.|
|Untouched|\`ctrl-untouched\`|The form control has not been touched.|
|Dirty|\`ctrl-dirty\`|The form control has been modified.|
|Pristine|\`ctrl-pristine\`|The form control has not been modified.|
|Valid|\`ctrl-valid\`|The form control is valid.|
|Invalid|\`ctrl-invalid\`|The form control is invalid.|
`,wd=()=>{const e=O("");return s.jsxs(s.Fragment,{children:[s.jsx($,{...e.bind,placeholder:"This control has no validation"}),s.jsx(D,{code:`// Creates a form control with an initial value of an empty string
const control = useControl('');
return <input type="text" {...control.bind} />;`})]})},yd=()=>{const e=O("",le(5));return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col gap-4",children:[e.dirty&&e.invalid&&s.jsx("span",{className:"text-red-500",children:"The input must have at least 5 characters!"}),e.dirty&&e.valid&&s.jsx("span",{className:"text-green-500",children:"The input has at least 5 characters!"}),s.jsx($,{...e.bind,placeholder:"Enter some text"})]}),s.jsx(D,{code:`// Creates a form control with an initial value of an empty string and a validator that requires at least 5 characters
const control = useControl('', minLength(5));
return (
  <>
    {control.dirty && control.invalid && <span className="text-red-500">The input must have at least 5 characters!</span>}
    {control.dirty && control.valid && <span className="text-green-500">The input has at least 5 characters!</span>}
    <input type="text" {...control.bind} />
  </>
);`})]})},jd=()=>{const e=()=>({code:"username-taken",validate:async()=>(await new Promise(u=>setTimeout(u,1e3)),Math.random()>.5)}),t=O("",{validators:[le(3),xd(10),e],useDebounce:300,stopOnError:!0}),n=!t.pending&&t.touched,r=!t.pending&&t.valid;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsxs("p",{className:"[&&]:mb-0",children:[s.jsx("span",{className:"text-yellow-500",children:t.pending&&"Checking username..."}),s.jsx("span",{className:"text-green-500",children:r&&"Username available!"}),s.jsx("span",{className:"text-red-500",children:n&&t.hasError("username-taken")&&"Username already taken."}),s.jsx("span",{className:"text-red-500",children:n&&t.hasError("minLength")&&"Username must be at least 3 characters."}),s.jsx("span",{className:"text-red-500",children:n&&t.hasError("maxLength")&&"Username must be at most 10 characters."})]}),s.jsx("p",{children:s.jsx($,{...t.bind,placeholder:"This control has a long running task"})})]}),s.jsx(D,{code:`// A custom validator that simulates a longer than usual running task
// This example uses a random number to determine if the username is taken
// If the random number is greater than 0.5, the username is taken
// We want to give this validator a custom error code so we can display a custom message to the user
const CheckUsername = () => {
  return {
    code: 'username-taken',
    validate: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return Math.random() > 0.5;
    },
  };
}

// Creates a form control with an initial value of an empty string and a custom validator
// This control has extra options to debounce the validation and stop on the first error
// If we don't stop on the first error, all validators will run even if one fails
// and if we were doing real http requests, this would be a waste of resources
const control = useControl('', {
  validators: [minLength(3), maxLength(10), CheckUsername],
  useDebounce: 300,
  stopOnError: true,
});

// Let's save to some variables to make the jsx more readable
// These will test if the control is in a specific state
const isError = !control.pending && control.touched;
const isValid = !control.pending && control.valid;
// These are the messages we will display to the user
const checking = 'Checking username...';
const available = 'Username available!';
const taken = 'Username already taken.';
const minLength = 'Username must be at least 3 characters.';
const maxLength = 'Username must be at most 10 characters.';

// Here we will display the status of the control
return (
  <>
    <p>
      <span className="text-yellow-500">{control.pending && checking}</span>
      <span className="text-green-500">{isValid && available}</span>

      <span className="text-red-500">{isError && control.hasError('username-taken') && taken}</span>
      <span className="text-red-500">{isError && control.hasError('minLength') && minLength}</span>
      <span className="text-red-500">{isError && control.hasError('maxLength') && maxLength}</span>
    </p>
    <p>
      <input type="text" {...control.bind} />
    </p>
  </>
);`})]})},kd=()=>s.jsx(s.Fragment,{children:s.jsxs(p.Root,{title:"Form Control",children:[s.jsx(p.Description,{children:vd}),s.jsx(p.Import,{items:[["useControl","forms"],["Validation","forms"]]}),s.jsxs(p.Examples,{children:[s.jsxs(k.Example,{children:[s.jsx(k.Description,{children:"The following example demonstrates how to create a form control using the `useControl` hook. It creates a text input control with an initial value of an empty string. This control doesn't do to much, but it's a good starting point."}),s.jsx(wd,{})]}),s.jsxs(k.Example,{title:"Form Control with Validation",children:[s.jsx(k.Description,{children:"The following example demonstrates how to create a form control with validation. It creates a text input control with an initial value of an empty string and a validator that requires the value to be at least 5 characters long."}),s.jsx(yd,{})]}),s.jsxs(k.Example,{title:"Form Control with Async Validation",children:[s.jsx(k.Description,{children:"The following example demonstrates how to create a form control with async validation. It creates a text input control with an initial value of an empty string and a validator that simulates a long running task."}),s.jsx(jd,{})]})]})]})}),P=g.forwardRef(({className:e,onClick:t,value:n,type:r,children:a,disabled:i},o)=>{const l=Y({"px-4 py-2 outline-none rounded-md bg-sky-500":!0,"text-white":!0,"hover:bg-sky-600":!0,"outline-offset-2 focus-within:outline-blue-500":!0,"disabled:bg-opacity-10 disabled:text-gray-500":!0,[e??""]:!0},[e]);return s.jsx("button",{ref:o,className:`${l}`,onClick:t,value:n,type:r??"button",disabled:i,children:a})}),Sd=`
The form builder is a utility that simplifies the process of creating forms with validation. It uses the \`useControl\` hook to create form controls with validation rules and the \`useFormGroup\` hook to manage the form state and validation.

### Validators


`,Cd=()=>{const e=ie({email:O("",[ct]),password:O("",[le(8)])});return s.jsxs(s.Fragment,{children:[s.jsxs("form",{children:[s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"username",className:"flex-shrink-0 basis-24",children:"Email"}),s.jsx($,{...e.controls.email.bind})]}),s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"password",className:"flex-shrink-0 basis-24",children:"Password"}),s.jsx($,{...e.controls.password.bind,type:"password"})]}),s.jsx("p",{className:"flex place-content-end",children:s.jsx(P,{type:"submit",disabled:e.invalid,children:"Submit"})})]}),s.jsx(D,{code:`// Create the form builder
const fg = useFormGroup({
  // Create a control that validates an email address
  email: useControl('', [email]),
  // Create a control that validates a password with a minimum length of 8 characters
  password: useControl('', [minLength(8)]),
});

return (
  <form>
    <input type="text" {...fg.controls.email.bind} />
    <input type="password" {...fg.controls.password.bind} />
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`})]})},Td=()=>{const t=ie({hasFoo:O("",[(n=>()=>({code:"hasFoo",message:'The value must include the string "foo"',validate:r=>r.includes(n)}))("foo")])});return s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"hasFoo",className:"flex-shrink-0 basis-24",children:"Has Foo"}),s.jsx($,{...t.controls.hasFoo.bind})]}),s.jsx("p",{className:"flex place-content-end",children:s.jsx(P,{disabled:t.invalid,children:"Submit"})}),s.jsx(D,{code:`// Create a custom validator that checks if a string includes a specific value
const HasString = (val: string) => () => {
  // The validator must return an object with a validate function that returns a boolean
  // In this case, the validator checks if the value includes the string 'foo'
  return {
    code: 'hasFoo',
    message: 'The value must include the string "foo"',
    validate: (value: string) => value.includes(val),
  };
}

// Create the form builder
const fg = useFormGroup({
  hasFoo: useControl('', [HasString('foo')]),
});

return (
  <form>
    <input type="text" {...fg.controls.hasFoo.bind} />
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`})]})},_d=()=>{const e=ie({email:O(""),password:O("")});return s.jsxs(s.Fragment,{children:[s.jsxs("form",{children:[s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"username",className:"flex-shrink-0 basis-24",children:"Email"}),s.jsx($,{...e.controls.email.bind})]}),s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"password",className:"flex-shrink-0 basis-24",children:"Password"}),s.jsx($,{...e.controls.password.bind,type:"password"})]}),s.jsx("p",{className:"flex place-content-end",children:s.jsx(P,{type:"submit",disabled:e.invalid,children:"Submit"})})]}),s.jsx(D,{code:`// Create the form builder with no validation
const fg = useFormGroup({
  email: useControl(''),
  password: useControl(''),
});

return (
  <form>
    <input type="text" {...fg.controls.email.bind} />
    <input type="password" {...fg.controls.password.bind} />
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`})]})},Ed=()=>{const e=ie({password:O("",[le(8)]),repeatPassword:O("",[bd(()=>e.controls.password)])});return s.jsxs(s.Fragment,{children:[s.jsxs("form",{children:[s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"password",className:"flex-shrink-0 basis-36",children:"Password"}),s.jsx($,{...e.controls.password.bind,type:"password"})]}),s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"repeatPassword",className:"flex-shrink-0 basis-36",children:"Repeat Password"}),s.jsx($,{...e.controls.repeatPassword.bind,type:"password"})]}),s.jsx("p",{className:"flex place-content-end",children:s.jsx(P,{type:"submit",disabled:e.invalid,children:"Submit"})})]}),s.jsx(D,{code:`// Create the form builder with a password field that must match another field
const fg = useFormGroup({
  password: useControl('', [minLength(8)]),
  repeatPassword: useControl('', [matchesControl(() => password)]),
});

return (
  <form>
    <input type="password" {...fg.controls.password.bind} />
    <input type="password" {...fg.controls.repeatPassword.bind} />
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`})]})},Ad=()=>{const e=ie({email:O("",[ct]),password:O("",[le(8)])}),[t,n]=g.useState(""),[r,a]=g.useState("");return g.useEffect(()=>{n(e.controls.email.hasError("email")?"Invalid email address":""),a(e.controls.password.hasError("minLength")?"Password must be at least 8 characters":"")},[e.errors]),s.jsxs(s.Fragment,{children:[s.jsxs("form",{children:[s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"username",className:"flex-shrink-0 basis-24",children:"Email"}),s.jsx($,{...e.controls.email.bind})]}),s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"password",className:"flex-shrink-0 basis-24",children:"Password"}),s.jsx($,{...e.controls.password.bind,type:"password"})]}),s.jsxs("p",{className:"flex place-content-between",children:[s.jsxs("span",{className:"flex flex-col text-red-500",children:[t&&s.jsx("span",{children:t}),r&&s.jsx("span",{children:r})]}),s.jsx(P,{type:"submit",disabled:e.invalid,children:"Submit"})]})]}),s.jsx(D,{code:`// Create the form builder
const fg = useFormGroup({
  email: useControl('', [email]),
  password: useControl('', [minLength(8)]),
});
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

useEffect(() => {
  setEmailError(fg.controls.email.hasError('email') ? 'Invalid email address' : '');
  setPasswordError(fg.controls.password.hasError('minLength') ? 'Password must be at least 8 characters' : '');
}, [fg.errors]);

return (
  <form>
    <input type="text" {...fg.controls.email.bind} />
    <input type="password" {...fg.controls.password.bind} />
    {emailError && <span>{emailError}</span>}
    {passwordError && <span>{passwordError}</span>}
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`})]})},$d=()=>{const e=ie({email:O("",[ct]),password:O("",[le(8)])},{when:"submit"});return g.useEffect(()=>{e.valid&&e.submitted&&console.log("submit")},[e.valid,e.submitted]),s.jsxs("form",{...e.bind,children:[s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"username",className:"flex-shrink-0 basis-24",children:"Email"}),s.jsx($,{...e.controls.email.bind})]}),s.jsxs("p",{className:"flex place-items-center",children:[s.jsx("label",{htmlFor:"password",className:"flex-shrink-0 basis-24",children:"Password"}),s.jsx($,{...e.controls.password.bind,type:"password"})]}),s.jsx("p",{className:"flex place-content-end",children:s.jsx(P,{type:"submit",children:"Submit"})})]})},Nd=()=>s.jsxs(p.Root,{title:"Form Group",children:[s.jsx(p.Description,{children:Sd}),s.jsx(p.Import,{items:[["useFormGroup","forms"],["useControl","forms"],["Validators","forms"]]}),s.jsxs(p.Examples,{children:[s.jsxs(k.Example,{title:"Email and Password Form",children:[s.jsx(k.Description,{children:"This example shows how to create a form that validates an email and password. The email must be a valid email address, and the password must be at least 8 characters long."}),s.jsx(Cd,{})]}),s.jsxs(k.Example,{title:"Custom Validator",children:[s.jsx(k.Description,{children:"This example shows how to create a custom validator that checks if a string includes a specific value. In this case, the value is `foo`."}),s.jsx(Td,{})]}),s.jsxs(k.Example,{title:"No Validation",children:[s.jsx(k.Description,{children:"This example shows how to create a form with no validation. The form has an email and password field that do not have any validation rules."}),s.jsx(_d,{})]}),s.jsxs(k.Example,{title:"Control Matching",children:[s.jsx(k.Description,{children:"This example shows how to create a form with a password field that must match another field. In this case, the password field must match the repeat password field."}),s.jsx(Ed,{})]}),s.jsxs(k.Example,{title:"Error Handling",children:[s.jsx(k.Description,{children:"When a form control is invalid, you often want to display an error message to the user. This example shows how to handle errors in a form."}),s.jsx(Ad,{})]}),s.jsxs(k.Example,{title:"Form Submission",children:[s.jsx(k.Description,{children:"This example shows how to handle form submission. The form will only validate when the form is submitted."}),s.jsx($d,{})]})]})]}),Dd=`
There are several built-in validators that can be used to validate form controls. These validators are passed to the \`useControl\` hook as an array of functions.

### Built-in Validators

#### Required

The first one is to make a control required. This is done by passing the \`required\` validator to the control. This validator checks to make sure that the value is not an empty string by checking the length of the value after trimming it.

~~~js
// Check if the value is not empty
export default () => {
  const username = useControl('', required);
};
~~~

#### Minimum Length

The next validator is to check the minimum length of a control. This is done by passing the \`minLength\` validator to the control. This validator checks to make sure that the value is at least a certain length. When used, it is okay to not use the \`required\` validator because the minimum length validator will also check for an empty string.

~~~js
// Check if the value is at least 8 characters long
export default () => {
  const password = useControl('', minLength(8));
};
~~~

#### Maximum Length

The next validator is to check the maximum length of a control. This is done by passing the \`maxLength\` validator to the control. This validator checks to make sure that the value is no more than a certain length.

~~~js
// Check if the value is no more than 20 characters long
export default () => {
  const username = useControl('', maxLength(20));
};
~~~

#### Email

The next validator is to check if a control is a valid email address. This is done by passing the \`email\` validator to the control. This validator checks to make sure that the value is a valid email address.

~~~js
// Check if the value is a valid email address
export default () => {
  const email = useControl('', email);
};
~~~

#### Regular Expression

The Regular Expression validator is a generic validator that can be used to check if a control matches a specific pattern. This is done by passing the \`pattern\` validator to the control. This validator checks to make sure that the value matches a specific regular expression pattern.

~~~js
// Check if the value is alphanumeric (letters and numbers only)
export default () => {
  const username = useControl('', pattern(/^[a-zA-Z0-9]+$/));
};
~~~

#### Matches Control

The Matches Control validator is a special validator that can be used to check if a control matches another control. This is done by passing the \`matchesControl\` validator to the control. This validator checks to make sure that the value matches the value of another control.

~~~js
// Check if the value matches the value of another control
export default () => {
  const password = useControl('', minLength(5));
  const confirmPassword = useControl('', matchesControl(() => password));
};
~~~

### Custom Validators

Custom validators allow you to create your own validators to check for specific conditions. These validators are passed to the \`useControl\` hook as a function that returns a boolean value. If the function returns \`true\`, the control is considered valid. If the function returns \`false\`, the control is considered invalid.

The validator requires that the returning object has a \`validate\` function that takes the input value and returns a \`boolean\`. There are then also two optional properties that can be added to the object, \`message\` and \`code\`. The message is a default error message that can be used when the control is invalid, and the code is a unique identifier for the error so that it can be used to identify the error.

The validator can return one of three values:
- \`boolean\` &ndash; Synchronous validation. This is the simplest form of validation and is used when the validation can be done immediately.
- \`Promise<boolean>\` &ndash; Browser native async validation. This is used when the validation requires an asynchronous operation, such as an API call.
- \`Observable<boolean>\` &ndash; RxJS async validation (**note** that the observable will *complete* on the first result). This is another way to handle asynchronous validation, but it is more powerful and flexible than the Promise-based validation.

#### Validator Without Arguments

There are two ways that a validator is created, the first way is without any arguments and the second way is with arguments. The first way is useful when the validator does not need any additional information to validate the control. It would look like this:

~~~js
// Check if the value is a valid phone number
const PhoneNumberValidator = () => {
  return {
    code: 'phone',
    message: 'Invalid phone number',
    validate: (value: string) => /^d{3}-d{3}-d{4}$/.test(value),
  };
};
~~~

#### Validator With Arguments

The second way is when you need to pass additional information to the validator. This is done by creating a function that returns a function. The outer function is used to pass the additional information to the validator, and the inner function is the actual validator. It would look like this:

~~~js
// Check if the value contains a specific string
const HasStringValidator = (val: string) => () => {
  return {
    code: 'has-string',
    message: 'The value must contain the string',
    validate: (value: string) => value.includes(val),
  };
};
~~~
`,Od=()=>s.jsxs(p.Root,{title:"Form Validators",children:[s.jsx(p.Description,{children:Dd}),s.jsx(p.Import,{items:[["required","forms"],["minLength","forms"],["maxLength","forms"],["email","forms"],["pattern","forms"],["matchesControl","forms"]]})]}),Ld="\nA `useSelectNode` or `useSelectNodes` hook can be used to select a node from a list of nodes that are passed in as children from the parent component. The node(s) can then be re-arranged in the component into positions where they are needed.\n\nA `useSelectNode` or `useSelectNodes` hook can be used to select a node from a list of nodes that are passed in as children from the parent component. The node(s) can then be re-arranged in the component into positions where they are needed.\n\nThe `useSelectNode` hook takes two arguments:\n- `Node`: The node to select from the children.\n- `children`: The children nodes to search.\n\n**Note:** When using the one of the select node hooks, it is usually best not to also use `{'{children}'}` in the component as that will only re-render the children causing duplicate nodes to be rendered.\n",Pd="\nThis example demonstrates how to select a single node from a list of nodes.\n\n- It uses the `useNode` hook to find the `Body` node from the children.\n- It uses the `useNode` hook to find the `Nav` node from the children.\n\nOnce the nodes are found, they are able to be rendered where needed.\n",Fd=`
This example demonstrates how to select multiple nodes from a list of nodes.

- It uses the \`useNodes\` hook to find the \`Item\` nodes from the children.

Once the nodes are found, they are able to be rendered where needed.
`,Id=()=>s.jsxs(k.Example,{title:"Select Single Node",children:[s.jsx(k.Description,{children:Pd}),s.jsx(D,{code:`import { useNode } from '@willikers/dom/select-node';
// A simple body example component
const Body = ({ children }) => <div>{children}</div>;
// A simple nav example component
const Nav = ({ children }) => <ul>{children}</ul>;

const Page = ({ children }) => {
  const body = useNode(Body, children); // Find the Body node from children
  const nav = useNode(Nav, children); // Find the Nav node from children

  return (
    <>
      <h1>Select Node Example</h1>
      <div className="flex gap-4">
        <nav>{nav}</nav>
        <main>{body}</main>
      </div>
    </>
  );
};

// The main page component
export default () => {
  return <Page>
    <Body>Hello World</Body>
    <Nav>
      <li>Nav 1</li>
      <li>Nav 2</li>
    </Nav>
  </Page>;
};
          `})]}),Rd=()=>s.jsxs(k.Example,{title:"Select Multiple Nodes",children:[s.jsx(k.Description,{children:Fd}),s.jsx(D,{code:`import { useNodes } from '@willikers/dom/select-node';
// A simple item example component
const Item = ({ children }) => <li>{children}</li>;
// A simple list example component
const List = ({ children }) => {
  const items = useNodes(Item, children); // Find the Item nodes from children

  return (
    <ul>
      {items}
    </ul>
  );
};

// The main list component
export default () => {
  return (
    <List>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </List>
  );
};
          `})]}),Md=()=>s.jsxs(p.Root,{children:[s.jsx(p.Header,{children:"Select Node"}),s.jsx(p.Import,{items:[["useSelectNode","dom/select-node"],["useSelectNodes","dom/select-nodes"]]}),s.jsx(p.Description,{text:Ld}),s.jsxs(p.Usage,{title:"Single Node Selection",children:[s.jsx(p.CodeUsage,{code:"const element = useSelectNode(Node, children);",comment:"Returns the first child element that matches 'Node'."}),s.jsx(p.CodeUsage,{code:"const element = useSelectNode(null, children);",comment:"Returns the first child element that is found."})]}),s.jsxs(p.Usage,{title:"Multi-Node Selection",children:[s.jsx(p.CodeUsage,{code:"const elements = useSelectNodes(Node, children);",comment:"Returns all children elements that match 'Node'."}),s.jsx(p.CodeUsage,{code:"const elements = useSelectNodes([Node1, Node2], children);",comment:"Returns all children elements that match 'Node1' or 'Node2'."}),s.jsx(p.CodeUsage,{code:"const elements = useSelectNodes(null, children, [Node1, Node2]);",comment:"Returns all children elements except 'Node1' and 'Node2'."})]}),s.jsxs(p.Examples,{children:[s.jsx(Id,{}),s.jsx(Rd,{})]})]});function Ud(e,t,n){const r=Array.isArray(e)?e:[e],[a,i]=g.useState(),[o]=g.useState(()=>new Ye),[l]=g.useState(()=>o.pipe(wr(t),H(c=>i(c)),H(c=>n==null?void 0:n(c))).subscribe());return g.useEffect(()=>()=>l.unsubscribe(),[]),g.useEffect(()=>o.next(e),r),a}const zd=()=>{const[e,t]=g.useState(""),[n,r]=g.useState(""),a=Ud(e,1e3);return g.useEffect(()=>r(a),[a]),s.jsxs(k.Example,{title:"Input Debounce",children:[s.jsx("p",{children:s.jsx($,{placeholder:"Type to see a delay below.",value:e,onChange:i=>t(i.target.value)})}),s.jsxs("p",{children:["Debounce: ",n]}),s.jsx(D,{code:`const [value, setValue] = useState();
const [output, setOutput] = useState('Not debounced yet.');

const debounced = useDebounce(value, 500);

useEffect(() => setOutput('Debounced!'), [debounced]);
useEffect(() => setOutput('Not debounced yet.'), [value]);

return (
  <>
    <input placeholder="Type to see a delay below." value={value} onChange={e => setValue(e.target.value)} />
    <p>Value: {value}</p>
    <p>Debounce: {output}</p>
  </>
);`})]})},Hd=()=>s.jsxs(p.Root,{children:[s.jsx(p.Header,{children:"Audit Time"}),s.jsxs(p.QAndA,{children:[s.jsx(p.Question,{children:"What is debouncing?"}),s.jsx(p.Answer,{children:"Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making it so that they only fire once every x milliseconds."})]}),s.jsx(p.Examples,{children:s.jsx(zd,{})})]});function Bd(e,t,n){const r=Array.isArray(e)?e:[e],[a,i]=g.useState(),[o]=g.useState(()=>new Ye),[l]=g.useState(()=>o.pipe(en(t),H(c=>i(c)),H(c=>n==null?void 0:n(c))).subscribe());return g.useEffect(()=>()=>l.unsubscribe(),[]),g.useEffect(()=>o.next(e),r),a}const Vd=()=>{const[e,t]=g.useState(""),[n,r]=g.useState(""),a=Bd(e,1500);return g.useEffect(()=>r(a),[a]),s.jsxs(k.Example,{title:"Throttle the input",children:[s.jsx(k.Description,{children:"As you type, the input will be throttled to only update every 1.5 seconds."}),s.jsx("p",{children:s.jsx($,{placeholder:"Type to see a delay below.",value:e,onChange:i=>t(i.target.value)})}),s.jsxs("p",{children:["Output: ",n]}),s.jsx(D,{code:`const [value, setValue] = useState('');
const [output, setOutput] = useState('');

const throttle = useThrottle(value, 1500);

useEffect(() => setOutput(value), [throttle]);

return (
  <>
    <input placeholder="Type to see a delay below." value={value} onChange={e => setValue(e.target.value)} />
    <p>Output: {output}</p>
  </>
);`})]})},qd=()=>s.jsxs(p.Root,{children:[s.jsx(p.Header,{children:"Throttle Time"}),s.jsxs(p.QAndA,{children:[s.jsx(p.Question,{children:"What is debouncing?"}),s.jsx(p.Answer,{children:"Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making it so that they only fire once every x milliseconds."})]}),s.jsx(p.Examples,{children:s.jsx(Vd,{})})]});class Gd{constructor(t){xe(this,"__NEWABLE_OBJECT_REF__");this.newable=t;const n=new t;return n.__NEWABLE_OBJECT_REF__=t,n}}class Wd{constructor(t){this._state=t}get(){return this._state}set(t){this._state=t}}function Qt(e){const t=new Wd(e);return Object.assign(()=>t.get(),{set:n=>{t.set(n),window.rootState.next(window.rootState.value)}})}window.rootState||(window.rootState=new tn([]));function ut(e){const[,t]=g.useReducer(i=>i+1,0),[n,r]=g.useState(()=>{const i=window.rootState.value.find(l=>l.__NEWABLE_OBJECT_REF__===e);if(i)return i;const o=new Gd(e);return window.rootState.next([...window.rootState.value,o]),o}),[a]=g.useState(()=>window.rootState.pipe(en(100),nn(i=>i.find(l=>l.__NEWABLE_OBJECT_REF__===e)),H(i=>r(i)),H(()=>t())).subscribe());return g.useEffect(()=>()=>a.unsubscribe(),[]),n}class ht{constructor(){xe(this,"name",Qt("John Doe"));xe(this,"bio",Qt("I am a developer"))}apply(t,n){this.name.set(t),this.bio.set(n)}}const Kd=()=>{const e=ut(ht);return s.jsxs("h1",{children:["Welcome, ",e.name(),"!"]})},Jd=()=>{const e=ut(ht);return s.jsx("p",{children:e.bio()})},Qd=()=>{const e=ut(ht),[t,n]=g.useState(()=>e.name()),[r,a]=g.useState(()=>e.bio()),i=()=>{e.apply(t,r)};return s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("p",{className:"mb-0 p-0 [&&&]:m-0",children:s.jsx("input",{value:t,onChange:o=>n(o.target.value),className:"w-full rounded-md p-2"})}),s.jsx("p",{className:"p-0 [&&&]:m-0",children:s.jsx("textarea",{value:r,onChange:o=>a(o.target.value),className:"w-full rounded-md p-2"})}),s.jsx("p",{className:"p-0 [&&&]:m-0",children:s.jsx("button",{onClick:i,className:"rounded-md bg-blue-500 px-6 py-2 text-white",children:"Save"})})]})},Xd=()=>s.jsxs(s.Fragment,{children:[s.jsx(Kd,{}),s.jsx(Jd,{}),s.jsx(Qd,{})]}),Zd=`

The above example uses the same state within three different components. It is updated in one component and the changes are reflected in all components that use the state.

#### Create the state object
Create a class that will be used as a global state. This class will contain the state that you want to share across the application.

~~~js
// user.state.js
import { state } from '@willikers/state';

export class UserState {
  constructor() {
    this.name = state('John Doe');
    this.bio = state('I am a developer');
  }
}
~~~

#### Access the global state
In one of your components, you can access the global state by using the \`useRootState\` hook.

~~~jsx
// top-bar.js
import { useRootState } from '@willikers/state/root-state';

export const TopBar = () => {
  const user = useRootState(UserState);
  return <h1>Welcome, {user.name()}!</h1>;
};
~~~

In another component, you can also access the global state by using the \`useRootState\` hook. If the same state is used in multiple components, the class (\`UserState\`) will only be instantiated on the first time it is accessed. For every subsequent access, the same instance will be returned.

~~~jsx
// bio.js
import { useRootState } from '@willikers/state/root-state';

export const Bio = () => {
  const user = useRootState(UserState);
  return <p>{user.bio()}</p>;
};
~~~

#### Update the global state
You can then update the state by calling the \`set\` method on the item you want to update that is defined in the global state object.

~~~jsx
// edit-profile.js
import { useRootState } from '@willikers/state/root-state';

export const EditProfile = () => {
  const user = useRootState(UserState);
  const [name, setName] = useState(() => user.name());
  const [bio, setBio] = useState(() => user.bio());

  const save = () => {
    user.name.set(name);
    user.bio.set(bio);
  };

  return (
    <>
      <p>
        <input value={name} onChange={e => setName(e.target.value)} />
      </p>
      <p>
        <textarea value={bio} onChange={e => setBio(e.target.value)} />
      </p>
      <p>
        <button onClick={save}>Save</button>
      </p>
    </>
  );
}
~~~

Now, when you update the state in one component, the change will be reflected in all components that use the global state.

~~~jsx
// app.js
import { TopBar } from './top-bar';
import { Bio } from './bio';
import { EditProfile } from './edit-profile';

export const App = () => {
  return (
    <>
      <TopBar />
      <Bio />
      <EditProfile />
    </>
  );
};
~~~
`,Yd=`
Root state is a state that can be used across the application. This is useful for things like user authentication, theme settings, or any other global state that needs to be shared across the application.

### Features
- Root state can be used across the application.
- State persists across navigation (spa only).
- State can be shared across components.
- State can be updated/read from any component.
- Easier to use than a context provider.
`,ef=()=>s.jsxs(k.Example,{title:"Input Debounce",children:[s.jsx(Xd,{}),s.jsx(k.Description,{children:`
This is an example of a global state that can be used across the application. This is useful for things like user authentication, theme settings, or any other global state that needs to be shared across the application. As you type in the input below, you will  see that when you navigate to another page and come back, the state is still there.`}),s.jsx(rt,{text:Zd})]}),tf=()=>s.jsxs(p.Root,{title:"Root State",children:[s.jsx(p.Import,{items:[["state","state"],["useRootState","state/root-state"]]}),s.jsx(p.Description,{children:Yd}),s.jsx(p.Examples,{children:s.jsx(ef,{})})]}),ce=(e,t)=>{const n=new tn(e),r=yr(100).pipe(nn(()=>[n.value,t()]),jr(([a,i])=>!lt(a,i)),H(([,a])=>n.next(a)),kr());return n.next(t()),Sr(r,n)},nf=ce([],()=>document.cookie.split(";").map(e=>{const[t,n]=e.split("=");return{key:t.trim(),data:n}})),rf=()=>{const[e,t]=g.useState([]);return g.useEffect(()=>{const n=nf.subscribe(r=>t(r));return()=>n.unsubscribe()},[]),n=>{var r;return(r=e.find(a=>a.key===n))==null?void 0:r.data}},sf="\nWatches for changes in `Cookies`. To pick up a change, you need to call the hooks returned function with the key you want to get the changes for.\n",af=()=>{const t=rf()("example"),n=g.useRef(null),[r,a]=g.useState(""),i=()=>{var o;document.cookie=`example=${r}`,a(""),(o=n.current)==null||o.focus()};return s.jsx(k.Example,{title:'Watch for changes on "example"',children:s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex place-items-center gap-2",children:[s.jsx("span",{className:"w-[120px] flex-shrink-0",children:"Value to set:"}),s.jsx($,{ref:n,placeholder:"Storage Value",className:"flex-1",value:r,onChange:o=>a(o.target.value)}),s.jsx(P,{className:"flex-shrink-0 basis-[150px]",onClick:i,disabled:r.length===0,children:"Save to storage"})]}),s.jsxs("div",{className:"flex place-items-center gap-2",children:[s.jsx("span",{className:"w-[120px] flex-shrink-0",children:"Saved value:"}),s.jsx("output",{children:t})]})]})})},of=()=>s.jsxs(p.Root,{title:"Local Storage",children:[s.jsx(p.Description,{text:sf}),s.jsx(p.Import,{items:[["useCookies","storage/cookies"]]}),s.jsx(p.Usage,{children:s.jsx(p.CodeUsage,{code:`// Start watching for changes on local storage
const storage = useCookies();
// Get the value of 'example' from local storage
const example = storage('example');

return <output>{example}</output>;`})}),s.jsx(p.Examples,{children:s.jsx(af,{})})]}),Xn=(e,t)=>{const n=e.getItem(t)??"null";try{const r=JSON.parse(n);return typeof r=="string"?n:r}catch{return n}},lf=ce([],()=>Object.keys(localStorage).map(t=>({key:t,data:Xn(localStorage,t)}))),cf=()=>{const[e,t]=g.useState([]);return g.useEffect(()=>{const n=lf.subscribe(r=>t(r));return()=>n.unsubscribe()},[]),n=>{var r;return(r=e.find(a=>a.key===n))==null?void 0:r.data}},uf="\nWatches for changes in `localStorage`. To pick up a change, you need to call the hooks returned function with the key you want to get the changes for.\n",hf=()=>{const t=cf()("example"),n=g.useRef(null),[r,a]=g.useState(""),i=()=>{var o;localStorage.setItem("example",r),a(""),(o=n.current)==null||o.focus()};return s.jsx(k.Example,{title:'Watch for changes on "example"',children:s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex place-items-center gap-2",children:[s.jsx("span",{className:"w-[120px] flex-shrink-0",children:"Value to set:"}),s.jsx($,{ref:n,placeholder:"Storage Value",className:"flex-1",value:r,onChange:o=>a(o.target.value)}),s.jsx(P,{className:"flex-shrink-0 basis-[150px]",onClick:i,disabled:r.length===0,children:"Save to storage"})]}),s.jsxs("div",{className:"flex place-items-center gap-2",children:[s.jsx("span",{className:"w-[120px] flex-shrink-0",children:"Saved value:"}),s.jsx("output",{children:t})]})]})})},df=()=>s.jsxs(p.Root,{title:"Local Storage",children:[s.jsx(p.Description,{text:uf}),s.jsx(p.Import,{items:[["useLocalStorage","storage/local"]]}),s.jsx(p.Usage,{children:s.jsx(p.CodeUsage,{code:`// Start watching for changes on local storage
const storage = useLocalStorage();
// Get the value of 'example' from local storage
const example = storage('example');

return <output>{example}</output>;`})}),s.jsx(p.Examples,{children:s.jsx(hf,{})})]}),ff=ce([],()=>Object.keys(sessionStorage).map(t=>({key:t,data:Xn(sessionStorage,t)}))),mf=()=>{const[e,t]=g.useState([]);return g.useEffect(()=>{const n=ff.subscribe(r=>t(r));return()=>n.unsubscribe()},[]),n=>{var r;return(r=e.find(a=>a.key===n))==null?void 0:r.data}},pf="\nWatches for changes in `sessionStorage`. To pick up a change, you need to call the hooks returned function with the key you want to get the changes for.\n",gf=()=>{const t=mf()("example"),n=g.useRef(null),[r,a]=g.useState(""),i=()=>{var o;sessionStorage.setItem("example",r),a(""),(o=n.current)==null||o.focus()};return s.jsx(k.Example,{title:'Watch for changes on "example"',children:s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex place-items-center gap-2",children:[s.jsx("span",{className:"w-[120px] flex-shrink-0",children:"Value to set:"}),s.jsx($,{ref:n,placeholder:"Storage Value",className:"flex-1",value:r,onChange:o=>a(o.target.value)}),s.jsx(P,{className:"flex-shrink-0 basis-[150px]",onClick:i,disabled:r.length===0,children:"Save to storage"})]}),s.jsxs("div",{className:"flex place-items-center gap-2",children:[s.jsx("span",{className:"w-[120px] flex-shrink-0",children:"Saved value:"}),s.jsx("output",{children:t})]})]})})},xf=()=>s.jsxs(p.Root,{title:"Session Storage",children:[s.jsx(p.Description,{text:pf}),s.jsx(p.Import,{items:[["useSessionStorage","storage/session"]]}),s.jsx(p.Usage,{children:s.jsx(p.CodeUsage,{code:`// Start watching for changes on session storage
const storage = useSessionStorage();
// Get the value of 'example' from session storage
const example = storage('example');

return <output>{example}</output>;`})}),s.jsx(p.Examples,{children:s.jsx(gf,{})})]}),bf=ce("",()=>window.location.hash),vf=()=>{const[e,t]=g.useState("");return g.useEffect(()=>{const r=bf.subscribe(a=>t(a));return()=>r.unsubscribe()},[]),[e,(r,a={})=>{window.history.pushState(a,"",r)}]},wf="\nThe hash is the part of the URL that comes after the `#` (e.g. `#foo`). This hook allows you to access the current hash as a `string` and update it using `window.history.pushState`, `window.history.replaceState`, or `setHash` function with the new hash.\n\n**Note:** Using `setHash()` will call `window.history.pushState` in the background.\n",yf=()=>{const e=g.useRef(null),[t,n]=vf(),r=()=>{const a=["hello","world","foo","bar","baz"],i=a[Math.floor(Math.random()*a.length)];n(`#${i}`)};return s.jsxs(p.Root,{children:[s.jsx(p.Header,{title:"URL Hash"}),s.jsx(p.Description,{text:wf}),s.jsx(p.Import,{items:[["useHash","url/hash"]]}),s.jsx(p.Usage,{children:s.jsx(p.CodeUsage,{code:`// Returns the current hash and a function to update the hash.
const [hash, setHash] = useHash();
// Set the new hash (choose one)
setHash('#new-hash');
setHash('#new-hash', { extra: 'data' });
// Output the current hash
return <div>{hash}</div>;`})}),s.jsx(p.Examples,{children:s.jsxs(k.Example,{title:"Pathname Change",children:[s.jsx(P,{ref:e,onClick:()=>r(),children:"Click to change the hash"}),s.jsxs("p",{children:["Params: ",JSON.stringify(t)]})]})})]})},jf=({children:e,type:t})=>{t=t||"info";const n=Y({callout:!0,"border-l-4 p-4 bg-opacity-10 rounded-md shadow":!0,"border-blue-500 bg-blue-500":t==="info","border-yellow-500 bg-yellow-500":t==="warning","border-green-500 bg-green-500":t==="success","border-red-500 bg-red-500":t==="danger"},[]);return s.jsx("div",{className:n,children:e})},kf=Cr(window,"popstate"),Sf=e=>{g.useEffect(()=>{const t=kf.subscribe(n=>e(n));return()=>t.unsubscribe()},[])},Cf="\nThe history hook allows you to listen to the browser's forward and back buttons. This is useful for updating the UI when the user navigates through the browser's history. The hook will call the `callback` function provided when the user navigates through the browser's history passing the `PopStateEvent` as the first argument.\n",Tf=()=>(Sf(()=>{console.log("history changed")}),s.jsxs(p.Root,{children:[s.jsx(p.Header,{title:"URL History"}),s.jsx(p.Description,{text:Cf}),s.jsx(p.Import,{items:[["useHistory","url/history"]]}),s.jsx(p.Usage,{children:s.jsx(p.CodeUsage,{code:`// Calls the callback function when the user navigates through the browser's history
useHistory(e => {
  console.log('history changed', e);
});`})}),s.jsx(p.Examples,{children:s.jsx(k.Example,{title:"Pathname Change",children:s.jsxs(jf,{type:"danger",children:["Use the browser's forward and back buttons to see the ",s.jsx("code",{children:"console.log"}),"."]})})})]})),_f=ce("",()=>window.location.pathname),Ef=()=>{const[e,t]=g.useState("");return g.useEffect(()=>{const r=_f.subscribe(a=>t(a));return()=>r.unsubscribe()},[]),[e,(r,a={})=>{window.history.pushState(a,"",r)}]},Af="\nThe pathname is the current path in the URL (e.g. `/some/path`). This hook allows you to access the pathname as a `string` and update it using `window.history.pushState`, `window.history.replaceState`, or `setPath` function with the new path.\n\n**Note:** Using `setPath()` will call `window.history.pushState` in the background.\n",$f=()=>{const e=g.useRef(null),[t,n]=Ef(),r=()=>{const a=["hello","world","foo","bar","baz"],i=a[Math.floor(Math.random()*a.length)];n(`/hook/url/path/${i}`)};return s.jsxs(p.Root,{children:[s.jsx(p.Header,{title:"URL Pathname"}),s.jsx(p.Description,{text:Af}),s.jsx(p.Import,{items:[["usePathname","url/pathname"]]}),s.jsx(p.Usage,{children:s.jsx(p.CodeUsage,{code:`// Returns the current search params and a function to update the search params.
const [path, setPath] = usePathname();
// Set the new path (choose one)
setPath('/new/path');
setPath('/new/path', { extra: 'data' });
// Output the current path
return <div>{path}</div>;`})}),s.jsx(p.Examples,{children:s.jsxs(k.Example,{title:"Pathname Change",children:[s.jsx(P,{ref:e,onClick:()=>r(),children:"Click to change the path"}),s.jsxs("p",{children:["Params: ",JSON.stringify(t)]})]})})]})},Nf=ce({},()=>Object.fromEntries(new URLSearchParams(window.location.search).entries())),Df=()=>{const[e,t]=g.useState({});return g.useEffect(()=>{const r=Nf.subscribe(a=>t(a));return()=>r.unsubscribe()},[]),[e,(r,a={})=>{const i=new URLSearchParams(r);window.history.pushState(a,"",`?${i.toString()}`)}]},Of="\nSearch params are the query string parameters in the URL (e.g. `?foo=bar&baz=qux`). This hook allows you to access the current search params as a `Record<string, string>` and update using either `window.history.pushState`, `window.history.replaceState`, or `setSearchParams` function with the new search params.\n\n**Note:** Using `setSearchParams()` will call `window.history.pushState` in the background.\n",Lf=()=>{const e=g.useRef(null),[t,n]=Df(),r=()=>{const a=["hello","world","foo","bar","baz"],i=["happy","sad","angry","excited","bored"],o=a[Math.floor(Math.random()*a.length)],l=i[Math.floor(Math.random()*i.length)];n({[o]:l})};return s.jsxs(p.Root,{children:[s.jsx(p.Header,{title:"URL Search Params"}),s.jsx(p.Description,{text:Of}),s.jsx(p.Import,{items:[["useSearchParams","url/search-params"]]}),s.jsx(p.Usage,{children:s.jsx(p.CodeUsage,{code:`// Returns the current search params and a function to update the search params.
const [search, setSearch] = useSearchParams();
// Set new search params (choose one)
setSearch({ key: 'value' });
setSearch({ key: 'value' }, { extra: 'data' });
// Output the current search params
return <div>{JSON.stringify(search)}</div>;`})}),s.jsx(p.Examples,{children:s.jsxs(k.Example,{title:"Search Params Change",children:[s.jsx(P,{ref:e,onClick:()=>r(),children:"Click to change the search params"}),s.jsxs("p",{children:["Params: ",JSON.stringify(t)]})]})})]})},Pf=[{title:"State",paths:[{href:"/hook/state/root-state",title:"Root State"}]},{title:"RxJS",paths:[{href:"/hook/rxjs/debounce-time",title:"Debounce Time"},{href:"/hook/rxjs/throttle-time",title:"Throttle Time"},{href:"/hook/rxjs/audit-time",title:"Audit Time"}]},{title:"DOM",paths:[{href:"/hook/dom/class-list",title:"Class List"},{href:"/hook/dom/select-node",title:"Select Node"},{href:"/hook/dom/select-nodes",title:"Select Nodes"}]},{title:"Storage",paths:[{href:"/hook/storage/cookies",title:"Cookies"},{href:"/hook/storage/local-storage",title:"Local Storage"},{href:"/hook/storage/session-storage",title:"Session Storage"}]},{title:"URL",paths:[{href:"/hook/url/path",title:"Pathname"},{href:"/hook/url/hash",title:"Hash"},{href:"/hook/url/history",title:"History"},{href:"/hook/url/search-params",title:"Search Params"}]},{title:"Form Validation",paths:[{href:"/hook/forms/form-group",title:"Form Group"},{href:"/hook/forms/form-control",title:"Form Control"},{href:"/hook/forms/form-validators",title:"Form Validators"}]}].sort((e,t)=>e.title.localeCompare(t.title)).map(({title:e,paths:t})=>({title:e,paths:t.sort((n,r)=>n.title.localeCompare(r.title))})),Xt=({href:e,children:t,selected:n})=>{const r=Y({"block py-1 hover:text-slate-300":!0,"bg-blue-600 text-white rounded-md px-2 hover:text-blue-300":n},[n]);return s.jsx("li",{children:s.jsx(fr,{to:e,className:r,children:t})})},Ff=({children:e,title:t})=>s.jsxs("div",{className:"flex flex-col",children:[s.jsx("div",{className:"py-1 text-xl font-bold text-blue-500",children:t}),s.jsx("div",{className:"",children:s.jsx("ul",{className:"m-0 list-none pl-5",children:e})})]}),If=()=>{const e=dr(),t=n=>e.pathname===n&&{selected:!0};return s.jsx("nav",{className:"flex-shrink-0 basis-[300px] px-4 shadow-md",children:s.jsxs("ul",{className:"sticky top-0 ml-0 max-h-[100vh] list-none overflow-y-auto",children:[s.jsx(Xt,{href:"/",...t("/"),children:"Home"}),Pf.map(({title:n,paths:r})=>s.jsx(Ff,{title:n,children:r.map(({href:a,title:i})=>s.jsx(Xt,{href:a,...t(a),children:i},a))},n))]})})},Rf=()=>(g.useEffect(()=>{window.location.search.includes("redirect=")&&mr(atob(window.location.search.split("=")[1]))},[]),s.jsxs("div",{className:"m-auto flex min-h-full w-full flex-col",children:[s.jsxs("div",{className:"m-auto flex w-full max-w-[70rem]",children:[s.jsx(If,{}),s.jsx("main",{className:"flex-1 overflow-auto p-6",children:s.jsx(pr,{})})]}),s.jsx("footer",{className:"h-[300px] bg-slate-950 p-20",children:"hello"})]})),Mf="The `useClassList` hook is used to toggle classes on/off based on a condition. When the condition is `truthy`, the class is applied to the element. When the condition is `falsy`, the class is removed from the element.\n\nThe `useClassList` hook accepts two arguments:\n- `classList`: An object that contains the css class name(s) as keys and the condition as values.\n- `deps`: An array of dependencies that are used to trigger the class list update\n",Uf=()=>{const[e,t]=g.useState(!1),n=Y({"text-gray-900":!0,"p-2 rounded-md":!0,"bg-red-500 hover:bg-red-600":e===!1,"bg-green-500 hover:bg-green-600":e===!0},[e]);return s.jsxs(k.Example,{title:"Toggle Colors",children:[s.jsx(k.Description,{children:"Click the button to toggle the color."}),s.jsx("button",{className:n,onClick:()=>t(!e),children:e?"On":"Off"}),s.jsx(D,{code:`const [onOff, setOnOff] = useState(false);
const classes = useClassList({
    // classes that are always applied
    'text-gray-900 p-2 rounded-md': true,
    // classes that are applied when "onOff" is "false"
    'bg-red-500 hover:bg-red-600': onOff === false,
    // classes that are applied when "onOff" is "true"
    'bg-green-500 hover:bg-green-600': onOff === true,
  },
  [onOff]
);

return (
  <button className={classes} onClick={() => setOnOff(!onOff)}>
    {onOff ? 'On' : 'Off'}
  </button>
);`})]})},zf=()=>s.jsxs(p.Root,{children:[s.jsx(p.Header,{children:"Class List"}),s.jsx(p.Import,{items:[["useClassList","dom/class-list"]]}),s.jsx(p.Description,{text:Mf}),s.jsxs(p.Usage,{title:"Overview",children:[s.jsx(p.CodeUsage,{code:"const classes = useClassList({ 'class-2': a === b }, [dep]);",comment:"Toggle classes based on a condition using a property value."}),s.jsx(p.CodeUsage,{code:"const classes = useClassList({ [a ? 'class-1' : 'class-2']: true }, [a]);",comment:"Toggle a class based on a condition using a property key."}),s.jsx(p.CodeUsage,{comment:"Join multiple classes together.",code:`const classes = useClassList({
  'class-1': true,
  [className ?? '']: true,
}, [className]);`})]}),s.jsx(p.Usage,{title:"The JSX",children:s.jsx(p.CodeUsage,{code:"return <button className={classes} onClick={() => setOnOff(!onOff)}>;"})}),s.jsx(p.Examples,{children:s.jsx(Uf,{})})]}),Hf=()=>{const[e,t]=g.useState(""),[n,r]=g.useState("Not debounced yet."),a=je(e,500);return g.useEffect(()=>r("Debounced!"),[a]),g.useEffect(()=>r("Not debounced yet."),[e]),s.jsxs(k.Example,{title:"Input Debounce",children:[s.jsx("p",{children:s.jsx($,{placeholder:"Type to see a delay below.",value:e,onChange:i=>t(i.target.value)})}),s.jsxs("p",{children:["Value: ",e]}),s.jsxs("p",{children:["Debounce: ",n]}),s.jsx(D,{code:`const [value, setValue] = useState();
const [output, setOutput] = useState('Not debounced yet.');

const debounced = useDebounce(value, 500);

useEffect(() => setOutput('Debounced!'), [debounced]);
useEffect(() => setOutput('Not debounced yet.'), [value]);

return (
  <>
    <input placeholder="Type to see a delay below." value={value} onChange={e => setValue(e.target.value)} />
    <p>Value: {value}</p>
    <p>Debounce: {output}</p>
  </>
);`})]})},Bf=()=>{const e=g.useRef(null),[t,n]=g.useState("Not debounced yet."),[r,a]=g.useState(!0);return je(r,500,()=>n("Debounced!")),g.useEffect(()=>{n("Not debounced yet.")},[r]),s.jsxs(k.Example,{title:"Click Debounce",children:[s.jsx(P,{ref:e,onClick:()=>a(!r),children:"Click repeatedly to see a delay below after stopping."}),s.jsxs("p",{children:["Debounce: ",t]})]})},Vf=()=>s.jsxs(p.Root,{children:[s.jsx(p.Header,{children:"Debounce Time"}),s.jsxs(p.QAndA,{children:[s.jsx(p.Question,{children:"What is debouncing?"}),s.jsx(p.Answer,{children:"Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making it so that they only fire once every x milliseconds."})]}),s.jsxs(p.Examples,{children:[s.jsx(Hf,{}),s.jsx(Bf,{})]})]}),qf=gr([{path:"/",element:s.jsx(Rf,{}),children:[{path:"/hook/state/root-state",element:s.jsx(tf,{})},{path:"/hook/rxjs/audit-time",element:s.jsx(Hd,{})},{path:"/hook/rxjs/debounce-time",element:s.jsx(Vf,{})},{path:"/hook/rxjs/throttle-time",element:s.jsx(qd,{})},{path:"/hook/dom/class-list",element:s.jsx(zf,{})},{path:"/hook/dom/select-node",element:s.jsx(Md,{})},{path:"/hook/url/path/*",element:s.jsx($f,{})},{path:"/hook/url/history/*",element:s.jsx(Tf,{})},{path:"/hook/url/search-params",element:s.jsx(Lf,{})},{path:"/hook/url/hash",element:s.jsx(yf,{})},{path:"/hook/storage/local-storage",element:s.jsx(df,{})},{path:"/hook/storage/session-storage",element:s.jsx(xf,{})},{path:"/hook/storage/cookies",element:s.jsx(of,{})},{path:"/hook/forms/form-control",element:s.jsx(kd,{})},{path:"/hook/forms/form-group",element:s.jsx(Nd,{})},{path:"/hook/forms/form-validators",element:s.jsx(Od,{})}]}]);rn(document.getElementById("root")).render(s.jsx(xr,{router:qf}));
