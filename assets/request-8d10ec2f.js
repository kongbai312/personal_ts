import{a as u}from"./axios-4d564c32.js";import{aj as l,aY as m}from"./index-14bc0a0e.js";const i=u.create({timeout:1e4}),d=l(),h=m();let c=["https://api.ipify.org","https://api.vore.top","https://api.github.com"],k=["https://api.apiopen.top/api/publishDynamic","https://api.apiopen.top/api/getPersonDynamicList"];i.interceptors.request.use(e=>{var n;let r=(n=d.userInfo)==null?void 0:n.token,t=e.url.split("/"),p=c.findIndex(o=>o===`${t[0]}//${t[2]}`)===-1;t=e.url.split("?");let a=t[0],s=k.findIndex(o=>o===a)!==-1;return r!==void 0&&r!==""&&p&&!s?e.headers.token=r:s&&(e.headers.token=h.commentToken),e},e=>Promise.reject(e));i.interceptors.response.use(e=>e.data,e=>Promise.reject(e));export{i as r};