!function(e){function t(t){for(var r,o,i=t[0],s=t[1],l=t[2],f=0,d=[];f<i.length;f++)o=i[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);d.length;)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;u.push([14,1]),n()}([function(e,t){e.exports=React},,function(e,t,n){"use strict";n.r(t),n.d(t,"REQUEST_ERROR",function(){return a}),n.d(t,"REQUEST_ITEMS",function(){return u}),n.d(t,"RECEIVE_ITEMS",function(){return o}),n.d(t,"REQUEST_USERS",function(){return i}),n.d(t,"RECEIVE_USERS",function(){return s}),n.d(t,"REQUEST_REJECTED",function(){return l}),n.d(t,"requestError",function(){return c}),n.d(t,"requestItems",function(){return f}),n.d(t,"receiveItems",function(){return d}),n.d(t,"requestUsers",function(){return p}),n.d(t,"receiveUsers",function(){return m}),n.d(t,"requestRejected",function(){return h}),n.d(t,"fetchUsers",function(){return y}),n.d(t,"fetchItems",function(){return E});var r=n(5);const a="REQUEST_ERROR",u="REQUEST_ITEMS",o="RECEIVE_ITEMS",i="REQUEST_USERS",s="RECEIVE_USERS",l="REQUEST_REJECTED",c=e=>({type:a,payload:e}),f=()=>({type:u}),d=e=>({type:o,payload:e}),p=()=>({type:i}),m=e=>({type:s,payload:e}),h=()=>({type:l}),y=()=>async e=>{e(p());try{const t=await Object(r.a)("/getusers");e(m(t))}catch(t){e(h()),e(c("Uh oh, there was a problem getting the users."))}},E=()=>async e=>{e(f());try{const t=await Object(r.a)("/getitems");e(d(t))}catch(t){e(h()),e(c("Uh oh, there was a problem getting the items."))}}},function(e,t,n){"use strict";n.r(t),n.d(t,"ADD_UPDATING_ITEM",function(){return a}),n.d(t,"REMOVE_UPDATING_ITEM",function(){return u}),n.d(t,"ADD_FAILED_ITEM",function(){return o}),n.d(t,"REMOVE_FAILED_ITEM",function(){return i}),n.d(t,"addUpdatingItem",function(){return s}),n.d(t,"removeUpdatingItem",function(){return l}),n.d(t,"addFailedItem",function(){return c}),n.d(t,"removeFailedItem",function(){return f}),n.d(t,"updateItem",function(){return d});var r=n(5);const a="ADD_UPDATING_ITEM",u="REMOVE_UPDATING_ITEM",o="ADD_FAILED_ITEM",i="REMOVE_FAILED_ITEM",s=e=>({type:a,payload:e}),l=e=>({type:u,payload:e}),c=e=>({type:o,payload:e}),f=e=>({type:i,payload:e}),d=e=>async t=>{const{id:n}=e;t(f(n)),t(s(n));try{await Object(r.a)("/putitem",{method:"PUT",body:e}),t(l(n))}catch(e){t(l(n)),t(c(n))}}},,function(e,t,n){"use strict";var r=function(){function e(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}for(var t=0,n=function(e,t){for(var n=0,r=0;10>r;r+=1)n+=Math.random();return e+n/10*(t-e+1)},r=["ad","adipiscing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sed","sint","sit","sunt","tempor","ullamco","ut","ut","velit","veniam","voluptate"],a=e(["Adam","Bertil","Cesar","David","Erik","Filip","Gustav","Helge","Ivar","Johan","Kalle","Ludvig","Martin","Niklas","Olof","Petter","Qvintus","Rudolf","Sigurd","Tore","Urban","Viktor","Wilhelm","Xerxes","Yngve","Zäta","Åke","Ärlig","Östen"]),u=function(){e(r);for(var u="",o=0,i=n(1,r.length-1);i>o;o++)u=u+" "+r[o];return{date:new Date(n((new Date).getTime()-2592e3,(new Date).getTime()+2592e3)),text:u.trim(),id:t++,active:Math.random()<.5,userId:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}(0,a.length-1)}},o={},i=0,s=n(10,50);s>i;i++){var l=u();o[l.id]=l}var c=function(e,t,n,r,a,u,o){if("string"==typeof e&&"string"==typeof t&&t.length>0&&"/"===t.charAt(0)&&"string"==typeof a&&"object"==typeof u&&null!==u&&u.hasOwnProperty("Content-Type")&&"application/json"===u["Content-Type"]){var i,s=t.substring(1,t.length);try{i=JSON.parse(a)}catch(e){}return f.hasOwnProperty(s)?f[s].call(null,e.toLowerCase(),o,i):(o.status=404,"")}return o.status=500,""},f={getitems:function(e,t){if("get"===e.toLowerCase()){var n=[];for(var r in o)n.push(o[r]);return t.status=200,JSON.stringify(n)}return t.status=405,""},getitem:function(e,t,n){var r;return"get"===e.toLowerCase()?"number"!=typeof n&&"string"!=typeof n||!o.hasOwnProperty(n)?(t.status=204,JSON.stringify({})):(r=o[n],t.status=200,JSON.stringify(r)):(t.status=405,"")},putitem:function(e,n,r){return"put"===e.toLowerCase()?"object"==typeof r&&null!==r&&r.hasOwnProperty("date")&&r.hasOwnProperty("text")&&r.hasOwnProperty("active")&&r.hasOwnProperty("userId")?(r.hasOwnProperty("id")&&o.hasOwnProperty(r.id)?o[r.id]=r:(r.id=t++,o[r.id]=r),n.status=200,JSON.stringify(r.id)):(n.status=400,""):(n.status=405,"")},getusers:function(e,t){return"get"===e.toLowerCase()?(t.status=200,JSON.stringify(a)):(t.status=405,"")},getuser:function(e,t,n){return"get"===e.toLowerCase()?(n=parseInt(n),!isNaN(n)&&n>=0&&n<a.length?(t.status=200,JSON.stringify(a[n])):(t.status=400,"")):(t.status=405,"")}};return{XMLHttpRequest:function(){var e=null,t=null,r=!0,a={"Content-Type":"application/json"},u=null,o=null,i=!1,s={onreadystatechange:null,readyState:0,response:"",responseText:null,responseType:"",responseURL:"",responeXML:null,status:0,statusText:"",timeout:0,ontimeout:null,upload:null,withCredentials:!1,abort:function(){null!==u&&clearTimeout(u)},getAllResponseHeaders:function(){},getResponseHeader:function(e){},open:function(n,a,u,o,i){if("string"!=typeof n)throw new Error("Argument: method must be a string");if(e=n.toUpperCase(),"string"!=typeof a)throw new Error("Argument: url must be a string");t=a,r="boolean"==typeof u?u:r,"function"==typeof s.onreadystatechange&&(s.readyState=1,setTimeout(s.onreadystatechange,1))},overrideMimeType:function(){},send:function(l){if(l="string"==typeof l?l:"",null===u)if("function"==typeof s.onreadystatechange&&(s.readyState=2,setTimeout(s.onreadystatechange,0)),s.timeout>0&&null===o&&(o=setTimeout(function(){o=null,i=!0,null!==u&&clearTimeout(u),s.readyState=4,"function"==typeof s.ontimeout&&setTimeout(s.ontimeout,1),"function"==typeof s.onreadystatechange&&setTimeout(s.onreadystatechange,1)},s.timeout)),Math.random()>=.2){var f=function(){u=null,null!==o&&clearTimeout(o),s.responseText=c(e,t,0,0,l,a,s),"function"==typeof s.onreadystatechange&&(s.readyState=4,s.onreadystatechange())};if(r)u=setTimeout(f,n(100,1600));else{for(var d=(new Date).getTime()+n(100,1600);(new Date).getTime()<d;);if(i)return;setTimeout(f,0)}}else if(!r)if(s.timeout>0)for(;i;);else for(d=(new Date).getTime()+s.timeout;!i||(new Date).getTime()<d;);},setRequestHeaders:function(e,t){if("number"!=typeof e&&"string"!=typeof e&&"number"!=typeof t&&"string"!=typeof t)throw new Error("Arguments both header and value must be numbers or strings");a[e]=t}};return s}}}();t.a=((e,t={})=>new Promise((n,a)=>{const{method:u="GET",body:o}=t,i=r.XMLHttpRequest();i.timeout=2e3,i.ontimeout=a,i.onreadystatechange=(()=>{4===i.readyState&&(200===i.status?n(JSON.parse(i.responseText)):a({state:i.readyState,status:i.status}))}),i.open(u,e),void 0!==o?i.send(JSON.stringify(o)):i.send()}))},,,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));n(25);t.default=function(e){var t=e.message;return a.default.createElement("div",{className:"error-message"},t)}},,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),u=r(n(15)),o=n(8),i=r(n(19)),s=r(n(20)),l=n(4),c=r(n(41)),f=r(n(21));n(40);var d=l.createStore(c.default,l.applyMiddleware(s.default,i.default));u.default.render(a.default.createElement(o.Provider,{store:d},a.default.createElement(f.default,null)),document.getElementById("app"))},function(e,t){e.exports=ReactDOM},,,,,,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),u=r(n(22));n(39);t.default=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(u.default,null))}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__decorate||function(e,t,n,r){var a,u=arguments.length,o=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(o=(u<3?a(o):u>3?a(t,n,o):a(t,n))||o);return u>3&&o&&Object.defineProperty(t,n,o),o},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(0)),i=n(8),s=n(2),l=u(n(23)),c=u(n(10)),f=u(n(26)),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.retry=function(){var e=t.props.dispatch;e(s.fetchUsers()),e(s.fetchItems())},t}return r(t,e),t.prototype.componentDidMount=function(){var e=this.props.dispatch;e(s.fetchUsers()),e(s.fetchItems())},t.prototype.render=function(){var e=this.props,t=e.errors,n=e.users,r=e.items,a=e.openRequests;return t.length?o.default.createElement("div",null,t.map(function(e,t){return o.default.createElement(c.default,{key:t,message:e})}),o.default.createElement("br",null),o.default.createElement("i",{onClick:this.retry,className:"material-icons"},"refresh")):a?o.default.createElement("div",null,"Loading..."):n.length&&r.length?o.default.createElement(o.default.Fragment,null,o.default.createElement(l.default,null,"Example List"),o.default.createElement(f.default,null)):null},t=a([i.connect(function(e){return e.request})],t)}(o.default.Component);t.default=d},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));n(24);t.default=function(e){var t=e.children;return a.default.createElement("h1",{className:"title"},t)}},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__decorate||function(e,t,n,r){var a,u=arguments.length,o=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(o=(u<3?a(o):u>3?a(t,n,o):a(t,n))||o);return u>3&&o&&Object.defineProperty(t,n,o),o},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(0));n(27);var i=n(8),s=n(3),l=u(n(28)),c=u(n(30));n(38);var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.updateItem=function(e){(0,t.props.dispatch)(s.updateItem(e))},t}return r(t,e),t.prototype.render=function(){var e=this,t=this.props.request,n=t.users,r=t.items,a=this.props.item,u=a.updating,i=a.failed;return o.default.createElement("div",{className:"table"},o.default.createElement(l.default,null),r.map(function(t){return o.default.createElement(c.default,{key:t.id,users:n,item:t,onUpdate:e.updateItem,isUpdating:u.includes(t.id),failedToUpdate:i.includes(t.id)})}))},t=a([i.connect(function(e){return e})],t)}(o.default.Component);t.default=f},,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));n(29);t.default=function(){return a.default.createElement("div",{className:"table-header"},a.default.createElement("span",null,"Text"),a.default.createElement("span",null,"Date"),a.default.createElement("span",null,"Owner"),a.default.createElement("span",null,"Status"),a.default.createElement("span",null))}},function(e,t,n){},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(0)),s=o(n(31)),l=o(n(10)),c=o(n(36));n(37);var f=function(e){var t=e.value,n=e.onChange;return i.default.createElement("textarea",{name:"text",value:t,onChange:n})},d=function(e){var t=e.users,n=e.value,r=e.onChange;return i.default.createElement("select",{name:"userId",value:n,onChange:r},t.map(function(e,t){return i.default.createElement("option",{key:t,value:t},e)}))},p=function(e){var t=e.value,n=e.onChange;return i.default.createElement("span",{className:"status"},i.default.createElement(s.default,{name:"active",type:"checkbox",checked:!!t,onChange:n}))},m=function(e){function t(t){var n=e.call(this,t)||this;return n.handleInputChange=function(e){var t,r,a=e.target;"checkbox"!==a.type?n.setState(((r={})[a.name]=a.value,r)):n.setState(((t={})[a.name]=a.checked,t))},n.onEditEnable=function(){n.setState({isEditing:!0})},n.onEditCancel=function(){n.setState({isEditing:!1})},n.onSubmit=function(e){e.preventDefault();var t=n.state,r=(t.isEditing,u(t,["isEditing"]));n.props.onUpdate(a({},r,{date:c.default()})),n.setState({isEditing:!1})},n.state=a({},t.item,{isEditing:!1}),n}return r(t,e),t.prototype.render=function(){var e=this.state,t=e.text,n=e.date,r=e.userId,a=e.active,u=e.isEditing,o=this.props,s=o.users,c=o.isUpdating;return o.failedToUpdate?i.default.createElement("div",{className:"table-row"},i.default.createElement(l.default,{message:"Failed to update item."}),i.default.createElement("i",{onClick:this.onSubmit,className:"material-icons"},"refresh")):c?i.default.createElement("div",{className:"table-row"},"Updating item..."):u?i.default.createElement("form",{className:"table-row",onSubmit:this.onSubmit},i.default.createElement(f,{value:t,onChange:this.handleInputChange}),i.default.createElement("span",null),i.default.createElement("span",null),i.default.createElement(d,{users:s,value:r,onChange:this.handleInputChange}),i.default.createElement(p,{value:a,onChange:this.handleInputChange}),i.default.createElement("span",{className:"edit"},i.default.createElement("i",{onClick:this.onSubmit,className:"material-icons"},"save"),i.default.createElement("i",{onClick:this.onEditCancel,className:"material-icons"},"cancel"),i.default.createElement("button",{style:{display:"none"},type:"submit"}))):i.default.createElement("div",{className:"table-row"},i.default.createElement("span",null,t.slice(0,12)+"..."),i.default.createElement("span",null,n.slice(0,10)),i.default.createElement("span",null,s[r]),i.default.createElement("span",{className:"status"},i.default.createElement("span",{className:a?"enabled":""})),i.default.createElement("span",{className:"edit"},i.default.createElement("i",{onClick:this.onEditEnable,className:"material-icons"},"edit")))},t}(i.default.Component);t.default=m},,,,,,function(e,t,n){"use strict";n.r(t);t.default=(()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}T${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}.${e.getMilliseconds()}Z`})},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(2);const u={openRequests:0,errors:[],users:[],items:[]};var o=n(3);const i={updating:[],failed:[]};t.default=Object(r.combineReducers)({request:(e=u,t)=>{switch(t.type){case a.REQUEST_ERROR:return((e,{payload:t})=>({...e,errors:[...e.errors,t]}))(e,t);case a.REQUEST_ITEMS:return(e=>({...e,errors:[],openRequests:e.openRequests+1}))(e);case a.RECEIVE_ITEMS:return((e,{payload:t})=>{const n=e.openRequests-1;return{...e,openRequests:n,errors:n?[...e.errors]:[],items:[...t]}})(e,t);case a.REQUEST_USERS:return(e=>({...e,errors:[],openRequests:e.openRequests+1}))(e);case a.RECEIVE_USERS:return((e,{payload:t})=>{const n=e.openRequests-1;return{...e,openRequests:n,errors:n?[...e.errors]:[],users:[...t]}})(e,t);case a.REQUEST_REJECTED:return(e=>({...e,openRequests:e.openRequests-1}))(e)}return e},item:(e=i,t)=>{switch(t.type){case o.ADD_UPDATING_ITEM:return((e,{payload:t})=>({...e,updating:[...e.updating,t]}))(e,t);case o.REMOVE_UPDATING_ITEM:return((e,{payload:t})=>({...e,updating:[...e.updating.filter(e=>e!==t)]}))(e,t);case o.ADD_FAILED_ITEM:return((e,{payload:t})=>({...e,failed:[...e.failed,t]}))(e,t);case o.REMOVE_FAILED_ITEM:return((e,{payload:t})=>({...e,failed:[...e.failed.filter(e=>e!==t)]}))(e,t)}return e}})}]);