!function(t){function e(e){for(var r,i,u=e[0],s=e[1],l=e[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(c&&c(e);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=s;a.push([13,1]),n()}([,function(t,e){t.exports=React},function(t,e,n){"use strict";n.r(e);var r=function(){function t(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}for(var e=0,n=function(t,e){for(var n=0,r=0;10>r;r+=1)n+=Math.random();return t+n/10*(e-t+1)},r=["ad","adipiscing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sed","sint","sit","sunt","tempor","ullamco","ut","ut","velit","veniam","voluptate"],o=t(["Adam","Bertil","Cesar","David","Erik","Filip","Gustav","Helge","Ivar","Johan","Kalle","Ludvig","Martin","Niklas","Olof","Petter","Qvintus","Rudolf","Sigurd","Tore","Urban","Viktor","Wilhelm","Xerxes","Yngve","Zäta","Åke","Ärlig","Östen"]),a=function(){t(r);for(var a="",i=0,u=n(1,r.length-1);u>i;i++)a=a+" "+r[i];return{date:new Date(n((new Date).getTime()-2592e3,(new Date).getTime()+2592e3)),text:a.trim(),id:e++,active:Math.random()<.5,userId:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}(0,o.length-1)}},i={},u=0,s=n(10,50);s>u;u++){var l=a();i[l.id]=l}var c=function(t,e,n,r,o,a,i){if("string"==typeof t&&"string"==typeof e&&e.length>0&&"/"===e.charAt(0)&&"string"==typeof o&&"object"==typeof a&&null!==a&&a.hasOwnProperty("Content-Type")&&"application/json"===a["Content-Type"]){var u,s=e.substring(1,e.length);try{u=JSON.parse(o)}catch(t){}return f.hasOwnProperty(s)?f[s].call(null,t.toLowerCase(),i,u):(i.status=404,"")}return i.status=500,""},f={getitems:function(t,e){if("get"===t.toLowerCase()){var n=[];for(var r in i)n.push(i[r]);return e.status=200,JSON.stringify(n)}return e.status=405,""},getitem:function(t,e,n){var r;return"get"===t.toLowerCase()?"number"!=typeof n&&"string"!=typeof n||!i.hasOwnProperty(n)?(e.status=204,JSON.stringify({})):(r=i[n],e.status=200,JSON.stringify(r)):(e.status=405,"")},putitem:function(t,n,r){return"put"===t.toLowerCase()?"object"==typeof r&&null!==r&&r.hasOwnProperty("date")&&r.hasOwnProperty("text")&&r.hasOwnProperty("active")&&r.hasOwnProperty("userId")?(r.hasOwnProperty("id")&&i.hasOwnProperty(r.id)?i[r.id]=r:(r.id=e++,i[r.id]=r),n.status=200,JSON.stringify(r.id)):(n.status=400,""):(n.status=405,"")},getusers:function(t,e){return"get"===t.toLowerCase()?(e.status=200,JSON.stringify(o)):(e.status=405,"")},getuser:function(t,e,n){return"get"===t.toLowerCase()?(n=parseInt(n),!isNaN(n)&&n>=0&&n<o.length?(e.status=200,JSON.stringify(o[n])):(e.status=400,"")):(e.status=405,"")}};return{XMLHttpRequest:function(){var t=null,e=null,r=!0,o={"Content-Type":"application/json"},a=null,i=null,u=!1,s={onreadystatechange:null,readyState:0,response:"",responseText:null,responseType:"",responseURL:"",responeXML:null,status:0,statusText:"",timeout:0,ontimeout:null,upload:null,withCredentials:!1,abort:function(){null!==a&&clearTimeout(a)},getAllResponseHeaders:function(){},getResponseHeader:function(t){},open:function(n,o,a,i,u){if("string"!=typeof n)throw new Error("Argument: method must be a string");if(t=n.toUpperCase(),"string"!=typeof o)throw new Error("Argument: url must be a string");e=o,r="boolean"==typeof a?a:r,"function"==typeof s.onreadystatechange&&(s.readyState=1,setTimeout(s.onreadystatechange,1))},overrideMimeType:function(){},send:function(l){if(l="string"==typeof l?l:"",null===a)if("function"==typeof s.onreadystatechange&&(s.readyState=2,setTimeout(s.onreadystatechange,0)),s.timeout>0&&null===i&&(i=setTimeout(function(){i=null,u=!0,null!==a&&clearTimeout(a),s.readyState=4,"function"==typeof s.ontimeout&&setTimeout(s.ontimeout,1),"function"==typeof s.onreadystatechange&&setTimeout(s.onreadystatechange,1)},s.timeout)),Math.random()>=.2){var f=function(){a=null,null!==i&&clearTimeout(i),s.responseText=c(t,e,0,0,l,o,s),"function"==typeof s.onreadystatechange&&(s.readyState=4,s.onreadystatechange())};if(r)a=setTimeout(f,n(100,1600));else{for(var p=(new Date).getTime()+n(100,1600);(new Date).getTime()<p;);if(u)return;setTimeout(f,0)}}else if(!r)if(s.timeout>0)for(;u;);else for(p=(new Date).getTime()+s.timeout;!u||(new Date).getTime()<p;);},setRequestHeaders:function(t,e){if("number"!=typeof t&&"string"!=typeof t&&"number"!=typeof e&&"string"!=typeof e)throw new Error("Arguments both header and value must be numbers or strings");o[t]=e}};return s}}}();n.d(e,"REQUEST_DATA",function(){return o}),n.d(e,"RECEIVE_DATA",function(){return a}),n.d(e,"fetchItems",function(){return i});const o="REQUEST_DATA",a="RECEIVE_DATA",i=t=>{t({type:o});const e=r.XMLHttpRequest();e.onreadystatechange=(()=>{if(4===e.readyState){const n=JSON.parse(e.responseText).map(({text:t,date:e,userId:n,active:r})=>({date:e.slice(0,10),text:t,owner:n,status:r.toString()}));t((t=>({type:a,items:t}))(n))}}),e.open("GET","/getitems"),e.send()}},,,,,,,,,,,function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(1)),a=r(n(14)),i=n(9),u=r(n(18)),s=n(4),l=r(n(19)),c=r(n(20));n(26);var f=s.createStore(l.default,s.applyMiddleware(u.default));a.default.render(o.default.createElement(i.Provider,{store:f},o.default.createElement(c.default,null)),document.getElementById("app"))},function(t,e){t.exports=ReactDOM},,,,,function(t,e,n){"use strict";n.r(e);var r=n(2);e.default=((t={},e)=>{switch(e.type){case r.REQUEST_DATA:return(t=>({...t,isFetching:!0}))(t);case r.RECEIVE_DATA:return((t,{items:e})=>({...t,isFetching:!1,items:[...e]}))(t,e)}return t})},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(1)),i=n(9),u=o(n(21)),s=n(2),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.componentDidMount=function(){(0,this.props.dispatch)(s.fetchItems)},e.prototype.render=function(){var t=this.props,e=t.items,n=t.isFetching;return a.default.createElement(a.default.Fragment,null,a.default.createElement("h1",null,"Example List"),n?a.default.createElement("span",null,"Loading..."):a.default.createElement(u.default,{data:e}))},e}(a.default.Component);e.default=i.connect(function(t){return console.log(t),t})(l)},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(1)),a=r(n(22));n(23);var i=[{Header:"Text",accessor:"text"},{Header:"Date",accessor:"date"},{Header:"Owner",accessor:"owner"},{Header:"Status",accessor:"status"}];e.default=function(t){var e=t.data;return o.default.createElement(a.default,{data:e,columns:i,minRows:0,showPagination:!1})}},function(t,e){t.exports=ReactTable.default},,,,function(t,e,n){var r=n(27);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(8)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(e=t.exports=n(7)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=PT+Sans:400,700);",""]),e.push([t.i,'html {\n  padding: 0;\n  margin: 0;\n  font-size: 10pt;\n  font-family: "PT Sans", sans-serif;\n  background-color: #f9f9f9;\n  color: #0f0f0f; }\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n#app {\n  display: inline-block;\n  margin: auto;\n  padding: 20pt;\n  background-color: #ececec;\n  border-radius: 5pt;\n  text-align: center; }\n  #app h1 {\n    margin: 0;\n    font-size: 1.4rem;\n    margin-bottom: 20pt; }\n',""])}]);