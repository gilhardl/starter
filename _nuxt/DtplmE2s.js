const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CHRtCWQl.js","./PDVVzhnH.js"])))=>i.map(i=>d[i]);
import{_ as l}from"./PDVVzhnH.js";import{c as d,a as w,t as u}from"./B9hI6FPY.js";async function p(t,e){return await $fetch(`/api/content/${e}/database.sql`,{context:{},responseType:"text",headers:{"content-type":"text/plain"},query:{v:d[String(e)],t:void 0}})}async function h(t,e="gzip"){var s;const a=Uint8Array.from(atob(t),c=>c.charCodeAt(0)),n=(s=new Response(new Blob([a])).body)==null?void 0:s.pipeThrough(new DecompressionStream(e));return(await new Response(n).text()).split(`
`)}function m(t,e){const a=g(t),o={...e};for(const n in o)a[n]==="json"&&o[n]&&o[n]!=="undefined"&&(o[n]=JSON.parse(o[n])),a[n]==="boolean"&&o[n]!=="undefined"&&(o[n]=!!o[n]);for(const n in o)o[n]==="NULL"&&(o[n]=void 0);return o}function g(t){const e=t.match(/FROM\s+(\w+)/);if(!e)return{};const a=w[S(e[1])];return(a==null?void 0:a.fields)||{}}function S(t){return t.replace(/^_content_/,"")}let r;function x(t){return{all:async(e,a)=>(await f(t),r.exec({sql:e,bind:a,rowMode:"object",returnValue:"resultRows"}).map(o=>m(e,o))),first:async(e,a)=>(await f(t),m(e,r.exec({sql:e,bind:a,rowMode:"object",returnValue:"resultRows"}).shift())),exec:async e=>{await f(t),await r.exec({sql:e})}}}async function f(t){if(!r){const s=await(await l(()=>import("./CHRtCWQl.js"),__vite__mapDeps([0,1]),import.meta.url).then(c=>c.default))();r=new s.oo1.DB}if(window.sessionStorage.getItem("previewToken"))return r;let e=null;const a=`checksum_${t}`,o=`collection_${t}`;let n="matched";try{const i=r.exec({sql:`SELECT * FROM ${u.info} where id = '${a}'`,rowMode:"object",returnValue:"resultRows"}).shift();(i==null?void 0:i.version)!==d[String(t)]&&(n="mismatch")}catch{n="missing"}if(n!=="matched"){if(window.localStorage.getItem(`content_${a}`)===d[String(t)]&&(e=window.localStorage.getItem(`content_${o}`)),!e){e=await p(void 0,String(t));try{window.localStorage.setItem(`content_${a}`,d[String(t)]),window.localStorage.setItem(`content_${o}`,e)}catch(s){console.error("Database integrity check failed, rebuilding database",s)}}const i=await h(e);await r.exec({sql:`DROP TABLE IF EXISTS ${u[String(t)]}`}),n==="mismatch"&&await r.exec({sql:`DELETE FROM ${u.info} WHERE id = '${a}'`});for(const s of i)try{await r.exec(s)}catch(c){console.error("Error executing command",c)}}return r}export{x as loadDatabaseAdapter};
