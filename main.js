!function(e){function t(t){for(var r,s,i=t[0],u=t[1],l=t[2],p=0,f=[];p<i.length;p++)s=i[p],a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={0:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([30,1]),n()}({0:function(e,t){e.exports=React},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),s=n.n(o),i=n(3),u=n(11),l=n(12),c=n.n(l),p=n(2),f=function(){function e(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}for(var t=0,n=function(e,t){for(var n=0,r=0;10>r;r+=1)n+=Math.random();return e+n/10*(t-e+1)},r=["ad","adipiscing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sed","sint","sit","sunt","tempor","ullamco","ut","ut","velit","veniam","voluptate"],a=e(["Adam","Bertil","Cesar","David","Erik","Filip","Gustav","Helge","Ivar","Johan","Kalle","Ludvig","Martin","Niklas","Olof","Petter","Qvintus","Rudolf","Sigurd","Tore","Urban","Viktor","Wilhelm","Xerxes","Yngve","Zäta","Åke","Ärlig","Östen"]),o=function(){e(r);for(var o="",s=0,i=n(1,r.length-1);i>s;s++)o=o+" "+r[s];return{date:new Date(n((new Date).getTime()-2592e3,(new Date).getTime()+2592e3)),text:o.trim(),id:t++,active:Math.random()<.5,userId:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}(0,a.length-1)}},s={},i=0,u=n(10,50);u>i;i++){var l=o();s[l.id]=l}var c=function(e,t,n,r,a,o,s){if("string"==typeof e&&"string"==typeof t&&t.length>0&&"/"===t.charAt(0)&&"string"==typeof a&&"object"==typeof o&&null!==o&&o.hasOwnProperty("Content-Type")&&"application/json"===o["Content-Type"]){var i,u=t.substring(1,t.length);try{i=JSON.parse(a)}catch(e){}return p.hasOwnProperty(u)?p[u].call(null,e.toLowerCase(),s,i):(s.status=404,"")}return s.status=500,""},p={getitems:function(e,t){if("get"===e.toLowerCase()){var n=[];for(var r in s)n.push(s[r]);return t.status=200,JSON.stringify(n)}return t.status=405,""},getitem:function(e,t,n){var r;return"get"===e.toLowerCase()?"number"!=typeof n&&"string"!=typeof n||!s.hasOwnProperty(n)?(t.status=204,JSON.stringify({})):(r=s[n],t.status=200,JSON.stringify(r)):(t.status=405,"")},putitem:function(e,n,r){return"put"===e.toLowerCase()?"object"==typeof r&&null!==r&&r.hasOwnProperty("date")&&r.hasOwnProperty("text")&&r.hasOwnProperty("active")&&r.hasOwnProperty("userId")?(r.hasOwnProperty("id")&&s.hasOwnProperty(r.id)?s[r.id]=r:(r.id=t++,s[r.id]=r),n.status=200,JSON.stringify(r.id)):(n.status=400,""):(n.status=405,"")},getusers:function(e,t){return"get"===e.toLowerCase()?(t.status=200,JSON.stringify(a)):(t.status=405,"")},getuser:function(e,t,n){return"get"===e.toLowerCase()?(n=parseInt(n),!isNaN(n)&&n>=0&&n<a.length?(t.status=200,JSON.stringify(a[n])):(t.status=400,"")):(t.status=405,"")}};return{XMLHttpRequest:function(){var e=null,t=null,r=!0,a={"Content-Type":"application/json"},o=null,s=null,i=!1,u={onreadystatechange:null,readyState:0,response:"",responseText:null,responseType:"",responseURL:"",responeXML:null,status:0,statusText:"",timeout:0,ontimeout:null,upload:null,withCredentials:!1,abort:function(){null!==o&&clearTimeout(o)},getAllResponseHeaders:function(){},getResponseHeader:function(e){},open:function(n,a,o,s,i){if("string"!=typeof n)throw new Error("Argument: method must be a string");if(e=n.toUpperCase(),"string"!=typeof a)throw new Error("Argument: url must be a string");t=a,r="boolean"==typeof o?o:r,"function"==typeof u.onreadystatechange&&(u.readyState=1,setTimeout(u.onreadystatechange,1))},overrideMimeType:function(){},send:function(l){if(l="string"==typeof l?l:"",null===o)if("function"==typeof u.onreadystatechange&&(u.readyState=2,setTimeout(u.onreadystatechange,0)),u.timeout>0&&null===s&&(s=setTimeout(function(){s=null,i=!0,null!==o&&clearTimeout(o),u.readyState=4,"function"==typeof u.ontimeout&&setTimeout(u.ontimeout,1),"function"==typeof u.onreadystatechange&&setTimeout(u.onreadystatechange,1)},u.timeout)),Math.random()>=.2){var p=function(){o=null,null!==s&&clearTimeout(s),u.responseText=c(e,t,0,0,l,a,u),"function"==typeof u.onreadystatechange&&(u.readyState=4,u.onreadystatechange())};if(r)o=setTimeout(p,n(100,1600));else{for(var f=(new Date).getTime()+n(100,1600);(new Date).getTime()<f;);if(i)return;setTimeout(p,0)}}else if(!r)if(u.timeout>0)for(;i;);else for(f=(new Date).getTime()+u.timeout;!i||(new Date).getTime()<f;);},setRequestHeaders:function(e,t){if("number"!=typeof e&&"string"!=typeof e&&"number"!=typeof t&&"string"!=typeof t)throw new Error("Arguments both header and value must be numbers or strings");a[e]=t}};return u}}}();var m=(e,t,...n)=>new Promise((r,a)=>{const o=f.XMLHttpRequest();o.timeout=2e3,o.ontimeout=a,o.onreadystatechange=(()=>{4===o.readyState&&(200===o.status?r(JSON.parse(o.responseText)):a({state:o.readyState,status:o.status}))}),o.open(e,t),o.send(...n.map(e=>JSON.stringify(e)))});const d=e=>({type:"ADD_REQUEST_ERROR",payload:e}),y=()=>async e=>{e({type:"REQUEST_USERS"});try{e((e=>({type:"RECEIVE_USERS",payload:e}))(await m("GET","/getusers")))}catch(t){e({type:"REQUEST_REJECTED"}),e(d("Uh oh, there was a problem getting the users."))}},h=()=>async e=>{e({type:"REQUEST_DATA"});try{e((e=>({type:"RECEIVE_DATA",payload:e}))(await m("GET","/getitems")))}catch(t){e({type:"REQUEST_REJECTED"}),e(d("Uh oh, there was a problem getting the items."))}},E={errors:[],openRequests:0,users:[],items:[]};const g=e=>({type:"REMOVE_UPDATING_ITEM",payload:e}),v=e=>async t=>{const{id:n}=e;t((e=>({type:"REMOVE_FAILED_ITEM",payload:e}))(n)),t((e=>({type:"ADD_UPDATING_ITEM",payload:e}))(n));try{await m("PUT","/putitem",e),t(g(n))}catch(e){t(g(n)),t((e=>({type:"ADD_FAILED_ITEM",payload:e}))(n))}},b={updating:[],failed:[]};var O=Object(p.c)({request:(e=E,t)=>{switch(t.type){case"ADD_REQUEST_ERROR":return((e,{payload:t})=>({...e,errors:[...e.errors,t]}))(e,t);case"REQUEST_DATA":return(e=>({...e,errors:[],openRequests:e.openRequests+1}))(e);case"RECEIVE_DATA":return((e,{payload:t})=>{const n=e.openRequests-1;return{...e,openRequests:n,errors:n?[...e.errors]:[],items:[...t]}})(e,t);case"REQUEST_USERS":return(e=>({...e,errors:[],openRequests:e.openRequests+1}))(e);case"RECEIVE_USERS":return((e,{payload:t})=>{const n=e.openRequests-1;return{...e,openRequests:n,errors:n?[...e.errors]:[],users:[...t]}})(e,t);case"REQUEST_REJECTED":return(e=>({...e,openRequests:e.openRequests-1}))(e)}return e},item:(e=b,t)=>{switch(t.type){case"ADD_UPDATING_ITEM":return((e,{payload:t})=>({...e,updating:[...e.updating,t]}))(e,t);case"REMOVE_UPDATING_ITEM":return((e,{payload:t})=>({...e,updating:[...e.updating.filter(e=>e!==t)]}))(e,t);case"ADD_FAILED_ITEM":return((e,{payload:t})=>({...e,failed:[...e.failed,t]}))(e,t);case"REMOVE_FAILED_ITEM":return((e,{payload:t})=>({...e,failed:[...e.failed.filter(e=>e!==t)]}))(e,t)}return e}}),T=n(13),w=n.n(T),R=(n(20),function(){return w.a.createElement("h1",{className:"title"},"Example List")}),_=(n(21),function(e){var t=e.message;return a.a.createElement("div",{className:"error-message"},t)}),S=n(14),D=n.n(S),C=(n(26),n(27),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},N=function(e,t,n,r){var a,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(t,n,s):a(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},j=function(){return a.a.createElement("div",{className:"table-header"},a.a.createElement("span",null,"Text"),a.a.createElement("span",null,"Date"),a.a.createElement("span",null,"Owner"),a.a.createElement("span",null,"Status"),a.a.createElement("span",null))},A=function(e){function t(t){var n=e.call(this,t)||this;return n.handleInputChange=function(e){var t,r,a=e.target;"checkbox"!==a.type?n.setState(((r={})[a.name]=a.value,r)):n.setState(((t={})[a.name]=a.checked,t))},n.onEditEnable=function(){n.setState({isEditing:!0})},n.onEditCancel=function(){n.setState({isEditing:!1})},n.onSubmit=function(e){e.preventDefault();var t=n.state,r=(t.isEditing,P(t,["isEditing"]));n.props.onUpdate(I({},r)),n.setState({isEditing:!1})},n.state=I({},t.item,{isEditing:!1}),n}return C(t,e),t.prototype.render=function(){var e=this.state,t=e.text,n=e.date,r=e.userId,o=e.active,s=e.isEditing,i=this.props,u=i.users,l=i.isUpdating;return i.failedToUpdate?a.a.createElement("div",{className:"table-row"},a.a.createElement(_,{message:"Failed to update item."}),a.a.createElement("i",{onClick:this.onSubmit,className:"material-icons"},"refresh")):l?a.a.createElement("div",{className:"table-row"},"Updating item..."):s?a.a.createElement("form",{className:"table-row",onSubmit:this.onSubmit},a.a.createElement("div",null,a.a.createElement("textarea",{name:"text",value:t,onChange:this.handleInputChange}))," ",a.a.createElement("span",null),a.a.createElement("input",{name:"date",type:"text",value:n,onChange:this.handleInputChange}),a.a.createElement("select",{name:"userId",onChange:this.handleInputChange,value:r},u.map(function(e,t){return a.a.createElement("option",{key:t,value:t},e)})),a.a.createElement("span",{className:"status"},a.a.createElement(D.a,{name:"active",type:"checkbox",checked:!!o,onChange:this.handleInputChange})),a.a.createElement("span",{className:"edit"},a.a.createElement("i",{onClick:this.onSubmit,className:"material-icons"},"save"),a.a.createElement("i",{onClick:this.onEditCancel,className:"material-icons"},"cancel"),a.a.createElement("button",{style:{display:"none"},type:"submit"}))):a.a.createElement("div",{className:"table-row"},a.a.createElement("span",null,t.slice(0,12)+"..."),a.a.createElement("span",null,n.slice(0,10)),a.a.createElement("span",null,u[r]),a.a.createElement("span",{className:"status"},a.a.createElement("span",{className:o?"enabled":null})),a.a.createElement("span",{className:"edit"},a.a.createElement("i",{onClick:this.onEditEnable,className:"material-icons"},"edit")))},t}(a.a.Component),M=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.updateItem=function(e){(0,t.props.dispatch)(v(e))},t}return C(t,e),t.prototype.render=function(){var e=this,t=this.props.request,n=t.users,r=t.items,o=this.props.item,s=o.updating,i=o.failed;return a.a.createElement("div",{className:"table"},a.a.createElement(j,null),r.map(function(t){return a.a.createElement(A,{key:t.id,users:n,item:t,onUpdate:e.updateItem,isUpdating:s.includes(t.id),failedToUpdate:i.includes(t.id)})}))},t=N([Object(i.b)(function(e){return e})],t)}(a.a.Component),U=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(e,t,n,r){var a,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(o<3?a(s):o>3?a(t,n,s):a(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.retry=function(){var e=t.props.dispatch;e(y()),e(h())},t}return U(t,e),t.prototype.componentDidMount=function(){var e=this.props.dispatch;e(y()),e(h())},t.prototype.render=function(){var e=this.props,t=e.errors,n=e.users,r=e.items,o=e.openRequests;return t.length?a.a.createElement("div",null,t.map(function(e,t){return a.a.createElement(_,{key:t,message:e})}),a.a.createElement("br",null),a.a.createElement("i",{onClick:this.retry,className:"material-icons"},"refresh")):o?a.a.createElement("div",null,"Loading..."):n.length&&r.length?a.a.createElement(M,null):null},t=x([Object(i.b)(function(e){return e.request})],t)}(a.a.Component),k=(n(28),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null),a.a.createElement(q,null))}),L=(n(29),Object(p.d)(O,Object(p.a)(c.a,u.a)));s.a.render(a.a.createElement(i.a,{store:L},a.a.createElement(k,null)),document.getElementById("app"))},7:function(e,t){e.exports=ReactDOM}});