(this["webpackJsonpdefinition-music-and-mastering"]=this["webpackJsonpdefinition-music-and-mastering"]||[]).push([[4],{510:function(e,n,t){},511:function(e,n,t){var r,s,a;s=[n,t(0),t(512),t(1)],void 0===(a="function"===typeof(r=function(e,n,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(n),a=c(t),i=c(r);function c(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function b(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function m(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var u=function(e){function n(e){d(this,n);var t=b(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},t}return m(n,e),l(n,[{key:"handleSubmit",value:function(e){var n=this;e.preventDefault();var t=this.props,r=t.fields,s=(t.action+"&"+r.map((function(e){return e.name+"="+encodeURIComponent(n.state[e.name])})).join("&")).replace("/post?","/post-json?"),a=/^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/,i=this.state.EMAIL;a.test(i)?this.sendData(s):this.setState({status:"empty"})}},{key:"sendData",value:function(e){var n=this;this.setState({status:"sending"}),(0,a.default)(e,{param:"c"},(function(e,t){t.msg.includes("already subscribed")?n.setState({status:"duplicate"}):e||"success"!==t.result?n.setState({status:"error"}):n.setState({status:"success"})}))}},{key:"render",value:function(){var e=this,n=this.props,t=n.messages,r=n.fields,a=n.styles,i=n.className,c=this.state.status;return s.default.createElement("form",{onSubmit:this.handleSubmit.bind(this),className:i},r.map((function(n){return s.default.createElement("input",{key:Math.random(),onBlur:function(t){var r=t.target;return e.setState(o({},n.name,r.value))},placeholder:n.placeholder,name:n.name,type:n.type,defaultValue:e.state[n.name]})})),s.default.createElement("button",{disabled:"sending"===c||"success"===c,type:"submit"},t.button),s.default.createElement("div",{className:"msg-alert"},"sending"===c&&s.default.createElement("p",{style:a.sendingMsg},t.sending),"success"===c&&s.default.createElement("p",{style:a.successMsg},t.success),"duplicate"===c&&s.default.createElement("p",{style:a.duplicateMsg},t.duplicate),"empty"===c&&s.default.createElement("p",{style:a.errorMsg},t.empty),"error"===c&&s.default.createElement("p",{style:a.errorMsg},t.error)))}}]),n}(s.default.Component);u.defaultProps={messages:{sending:"Sending...",success:"Thank you for subscribing!",error:"An unexpected internal error has occurred.",empty:"You must write an e-mail.",duplicate:"Too many subscribe attempts for this email address",button:"Subscribe!"},styles:{sendingMsg:{color:"#0652DD"},successMsg:{color:"#009432"},duplicateMsg:{color:"#EE5A24"},errorMsg:{color:"#ED4C67"}}},u.propTypes={action:i.default.string,messages:i.default.object,fields:i.default.array,styles:i.default.object,className:i.default.string},e.default=u})?r.apply(n,s):r)||(e.exports=a)},512:function(e,n,t){var r=t(513)("jsonp");e.exports=function(e,n,t){"function"==typeof n&&(t=n,n={});n||(n={});var i,c,o=n.prefix||"__jp",d=n.name||o+s++,l=n.param||"callback",b=null!=n.timeout?n.timeout:6e4,m=encodeURIComponent,u=document.getElementsByTagName("script")[0]||document.head;b&&(c=setTimeout((function(){j(),t&&t(new Error("Timeout"))}),b));function j(){i.parentNode&&i.parentNode.removeChild(i),window[d]=a,c&&clearTimeout(c)}return window[d]=function(e){r("jsonp got",e),j(),t&&t(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+m(d)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,u.parentNode.insertBefore(i,u),function(){window[d]&&j()}};var s=0;function a(){}},513:function(e,n,t){(function(r){function s(){var e;try{e=n.storage.debug}catch(t){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyDbSkHxjmcvdfxDoOISMGNo6Mz68zr-v6c",REACT_APP_FIREBASE_AUTH_DOMAIN:"definition-music-and-mastering.firebaseapp.com",REACT_APP_DATABASE_URL:"https://definition-music-and-mastering.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"definition-music-and-mastering",REACT_APP_FIREBASE_STORAGE_BUCKET:"definition-music-and-mastering.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"975793061103",REACT_APP_FIREBASE_APP_ID:"1:975793061103:web:9f7c0111daab60ba186f1a",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-FMB26CKX8V",REACT_APP_MAILCHIMP_KEY:"https://gmail.us7.list-manage.com/subscribe/post?u=daea54b2881619a66ef815217&amp;id=53f71ba6a2",REACT_APP_TITLE:"ENV TESTING HEADER"}).DEBUG),e}(n=e.exports=t(514)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var s=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(s++,"%c"===e&&(a=s))})),e.splice(a,0,r)},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(t){}},n.load=s,n.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}},n.enable(s())}).call(this,t(171))},514:function(e,n,t){var r;function s(e){function t(){if(t.enabled){var e=t,s=+new Date,a=s-(r||s);e.diff=a,e.prev=r,e.curr=s,r=s;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=n.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var o=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(t,r){if("%%"===t)return t;o++;var s=n.formatters[r];if("function"===typeof s){var a=i[o];t=s.call(e,a),i.splice(o,1),o--}return t})),n.formatArgs.call(e,i);var d=t.log||n.log||console.log.bind(console);d.apply(e,i)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}(e),"function"===typeof n.init&&n.init(t),t}(n=e.exports=s.debug=s.default=s).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){n.save(e),n.names=[],n.skips=[];for(var t=("string"===typeof e?e:"").split(/[\s,]+/),r=t.length,s=0;s<r;s++)t[s]&&("-"===(e=t[s].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=t(515),n.names=[],n.skips=[],n.formatters={}},515:function(e,n){var t=1e3,r=60*t,s=60*r,a=24*s,i=365.25*a;function c(e,n,t){if(!(e<n))return e<1.5*n?Math.floor(e/n)+" "+t:Math.ceil(e/n)+" "+t+"s"}e.exports=function(e,n){n=n||{};var o,d=typeof e;if("string"===d&&e.length>0)return function(e){if((e=String(e)).length>100)return;var n=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!n)return;var c=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*i;case"days":case"day":case"d":return c*a;case"hours":case"hour":case"hrs":case"hr":case"h":return c*s;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===d&&!1===isNaN(e))return n.long?c(o=e,a,"day")||c(o,s,"hour")||c(o,r,"minute")||c(o,t,"second")||o+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=s)return Math.round(e/s)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},516:function(e,n,t){},552:function(e,n,t){"use strict";t.r(n);var r,s,a,i,c,o,d,l,b,m,u,j,p,f,x,h,O=t(0),g=t.n(O),v=t(9),y=t(95),w=t(38),E=t(28),_=Object(E.a)([function(e){return e.directory}],(function(e){return e.sections})),A=t(24),N=(t(210),t(8)),P=t(6),S=P.d.div(r||(r=Object(N.a)(["\n\theight: ",";\n\tmin-width: 30%;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 2px solid white;\n\t\n\toverflow: hidden;\n\n\t&:hover {\n\t\tcursor: pointer;\n\n\t\t& .background-image {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n\t\t}\n\n\t\t& .content {\n\t\t\topacity: 0.9;\n\t\t}\n\t}\n\n\t&:first-child {\n    \n  }\n\n  &:last-child {\n \n  }\n\n  @media screen and (max-width: 800px) {\n    height: 200px;\n  }\n"])),(function(e){return e.size?"380px":"240px"})),k=P.d.div(s||(s=Object(N.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n  border: 2px solid white;\n"])),(function(e){var n=e.imageUrl;return"url(".concat(n,")")})),C=P.d.div(a||(a=Object(N.a)(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n\n  @media screen and (max-width: 800px) {\n    padding: 0 5px;\n  }\n"]))),z=P.d.span(i||(i=Object(N.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n\n  @media screen and (max-width: 800px) {\n    font-size: 16px;\n  }\n"]))),T=P.d.span(c||(c=Object(N.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n  color: ",";\n  \n  @media screen and (max-width: 800px) {\n\n  }\n"])),(function(e){return e.theme.primaryDark})),I=t(2),R=Object(A.g)((function(e){var n=e.title,t=e.subTitle,r=e.imageUrl,s=e.size,a=e.history,i=e.linkUrl,c=e.match;return Object(I.jsxs)(S,{size:s,onClick:function(){return a.push("".concat(c.url).concat(i))},children:[Object(I.jsx)(k,{className:"background-image",imageUrl:r}),Object(I.jsxs)(C,{className:"content",children:[Object(I.jsx)(z,{children:n.toUpperCase()}),Object(I.jsx)(T,{children:t.toUpperCase()})]})]})})),M=P.d.div(o||(o=Object(N.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),F=Object(E.b)({sections:_}),D=Object(w.b)(F)((function(e){var n=e.sections;return Object(I.jsx)(M,{children:n.map((function(e){var n=e.id,t=Object(y.a)(e,["id"]);return Object(I.jsx)(R,Object(v.a)({},t),n)}))})})),L=P.d.div(d||(d=Object(N.a)(["\n  background-color: black;\n  background-repeat: no-repeat, repeat;\n  height: auto;\n  padding: 10px;\n  border: 5px solid white;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 10px;\n"]))),U=P.d.h1(l||(l=Object(N.a)(["\n  color: white;\n  font-size: 3.5em;\n  font-weight:bold;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1em;\n  align-items: center;\n  vertical-align: middle;\n  letter-spacing: 10px;\n  margin-bottom: 10px;\n\n  @media screen and (max-width: 1883px) {\n    font-size: 3em;\n  }\n\n  @media screen and (max-width: 1425px) {\n    font-size: 2.5em;\n    line-height: 1.5em;\n  }\n\n  @media screen and (max-width: 1200px) {\n    font-size: 2em;\n    line-height: 1.5em;\n  }\n\n  @media screen and (max-width: 1100px) {\n    font-size: 1.3em;\n    line-height: 1.5em;\n  }\n\n  @media screen and (max-width: 900px) {\n    font-size: 1.5em;\n    line-height: 1.5em;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 1.5em;\n    line-height: 1.5em;\n    margin-top: 10px;\n  }\n"]))),B=(P.d.br(b||(b=Object(N.a)(["\n    display: inline;\n\n    @media screen and (max-width: 900px) {\n    display: none;\n  }\n  \n"]))),t(94),t(510),function(){return Object(I.jsxs)("div",{className:"meter-wrapper",children:[Object(I.jsx)("div",{className:"meter-container",children:Object(I.jsx)("div",{className:"meter",id:"meter1"})}),Object(I.jsx)("div",{className:"level",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container",children:Object(I.jsx)("div",{className:"meter",id:"meter2"})}),Object(I.jsx)("div",{className:"level",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container",children:Object(I.jsx)("div",{className:"meter",id:"meter3"})}),Object(I.jsx)("div",{className:"level",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container",children:Object(I.jsx)("div",{className:"meter",id:"meter4"})}),Object(I.jsx)("div",{className:"level hide-meter",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container",children:Object(I.jsx)("div",{className:"meter",id:"meter5"})}),Object(I.jsx)("div",{className:"level",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container hide-meter",children:Object(I.jsx)("div",{className:"meter",id:"meter6"})}),Object(I.jsx)("div",{className:"level hide-meter",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container hide-meter",children:Object(I.jsx)("div",{className:"meter",id:"meter7"})}),Object(I.jsx)("div",{className:"level hide-meter",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container hide-meter",children:Object(I.jsx)("div",{className:"meter",id:"meter8"})}),Object(I.jsx)("div",{className:"level hide-meter",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container hide-meter",children:Object(I.jsx)("div",{className:"meter",id:"meter9"})}),Object(I.jsx)("div",{className:"level hide-meter",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})}),Object(I.jsx)("div",{className:"meter-container hide-meter",children:Object(I.jsx)("div",{className:"meter",id:"meter10"})}),Object(I.jsx)("div",{className:"level hide-meter",children:Object(I.jsxs)("p",{children:["CLIP",Object(I.jsx)("br",{}),"-3",Object(I.jsx)("br",{}),"-6",Object(I.jsx)("br",{}),"-10",Object(I.jsx)("br",{}),"-14",Object(I.jsx)("br",{}),"-18",Object(I.jsx)("br",{}),"-26",Object(I.jsx)("br",{}),"-32",Object(I.jsx)("br",{}),"-41"]})})]})}),H=t(511),G=t.n(H),K=(t(516),function(){return Object(I.jsx)(G.a,{action:"https://gmail.us7.list-manage.com/subscribe/post?u=daea54b2881619a66ef815217&amp;id=53f71ba6a2",className:"chimp-forms",fields:[{name:"EMAIL",placeholder:"Email",type:"email",required:!0},{name:"FNAME",placeholder:"First Name",type:"text",required:!0}],messages:{sending:"Sending...",success:"Thank you for subscribing! You will receive an email soon with my rate sheet.",error:"An unexpected internal error has occured.",empty:"You must ",duplicate:"Too many subscribe attempts for this email address.",button:"Subscribe!"}})}),J=function(){return Object(I.jsxs)(L,{children:[Object(I.jsx)(B,{}),Object(I.jsxs)(U,{children:["Subscribe for a free cleanup & repair on a track; or 1 free master",Object(I.jsx)("div",{id:"mc_embed_signup",children:Object(I.jsx)(K,{})})]})]})},Y=g.a.memo(J),$=(t(39),P.d.div(m||(m=Object(N.a)(["\n  background-color: transparent;\n  background-repeat: no-repeat, repeat;\n  height: auto;\n  border: 5px solid white;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 10px;\n"]))),P.d.div(u||(u=Object(N.a)(["\n   background-image: radial-gradient(#7ac943 20%, transparent 20%),\n     radial-gradient(#7ac943 20%, transparent 20%);\n    background-position: 0 0, 0 0;\n    background-size: 10px 10px;\n    display: flex;\n    flex-direction: column;\n    flex-basis: 100%;\n    flex: 3;\n    align-items: center;\n    text-align: center;\n"]))),P.d.div(j||(j=Object(N.a)(["\n   background-image: radial-gradient(#FFFF00 20%, transparent 20%),\n     radial-gradient(#FFFF00 20%, transparent 20%);\n    background-position: 0 0, 0 0;\n    background-size: 10px 10px;\n    display: flex;\n    flex-direction: column;\n    flex-basis: 100%;\n    flex: 3;\n    align-items: center;\n"]))),P.d.div(p||(p=Object(N.a)(["\n   background-image: radial-gradient(#FF0000 20%, transparent 20%),\n     radial-gradient(#FF0000 20%, transparent 20%);\n    background-position: 0 0, 0 0;\n    background-size: 10px 10px;\n    display: flex;\n    flex-direction: column;\n    flex-basis: 100%;\n    flex: 3;\n    align-items: center;\n"]))),P.d.span(f||(f=Object(N.a)(["\n  font-size: 2em;\n  margin-top: 0;\n\n  @media screen and (max-width: 1883px) {\n    font-size: 1.8em;\n  }\n\n  @media screen and (max-width: 1425px) {\n    font-size: 1.5em;\n  }\n\n  @media screen and (max-width: 1200px) {\n    font-size: 1.5em;\n  }\n\n  @media screen and (max-width: 1100px) {\n    font-size: 1.5em;\n  }\n\n  @media screen and (max-width: 900px) {\n    font-size: 1.3em;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: 1em;\n  }\n"]))),P.d.span(x||(x=Object(N.a)(["\n  line-height: 1em;\n    font-size: .8em;\n\n  @media screen and (max-width: 1883px) {\n    font-size: .8em;\n  }\n\n  @media screen and (max-width: 1425px) {\n    font-size: .8em;\n  }\n\n  @media screen and (max-width: 1200px) {\n    font-size: .8em;\n  }\n\n  @media screen and (max-width: 1100px) {\n    font-size: .8em;\n  }\n\n  @media screen and (max-width: 900px) {\n    font-size: .8em;\n  }\n\n  @media screen and (max-width: 600px) {\n    font-size: .8em;\n  }\n\n"]))),P.d.div(h||(h=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 10px;\n"]))));n.default=function(){return Object(I.jsxs)($,{children:[Object(I.jsx)(Y,{}),Object(I.jsx)(D,{})]})}}}]);
//# sourceMappingURL=4.b9deed26.chunk.js.map