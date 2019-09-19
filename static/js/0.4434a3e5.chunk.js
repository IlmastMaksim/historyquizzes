webpackJsonp([0],{197:function(n,e,t){"use strict";function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}Object.defineProperty(e,"__esModule",{value:!0});var r=t(1),A=t.n(r),i=t(11),a=t(12),s=t(225),c=t(204),u=t(198),d=t(228),l=t.n(d),m=t(201),C=t(27),B=t(26),g=function(){function n(n,e){var t=[],o=!0,r=!1,A=void 0;try{for(var i,a=n[Symbol.iterator]();!(o=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(n){r=!0,A=n}finally{try{!o&&a.return&&a.return()}finally{if(r)throw A}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(n){var e=Object(r.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}),t=g(e,2),i=t[0],d=t[1],B=Object(r.useState)(!0),p=g(B,2),f=p[0],_=p[1],b=n.authRedirectPath,h=n.onSetAuthRedirectPath;Object(r.useEffect)(function(){"/"!==b&&h()},[b,h]);var x=function(n,e){var t=Object(C.c)(i,o({},e,Object(C.c)(i[e],{value:n.target.value,valid:Object(C.a)(n.target.value,i[e].validation),touched:!0})));d(t)},w=function(e){e.preventDefault(),n.onAuth(i.email.value,i.password.value,f)},k=function(){_(!f)},v=[];for(var E in i)v.push({id:E,config:i[E]});var D=v.map(function(n){return A.a.createElement(s.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(e){return x(e,n.id)}})});n.loading&&(D=A.a.createElement(u.a,null));var I=null;n.error&&(I=A.a.createElement(m.a,null,"Oops, some mistake... Try again!"));var y=null;return n.isAuthenticated&&(y=A.a.createElement(a.c,{to:n.authRedirectPath})),A.a.createElement("div",{className:l.a.AuthWrap},A.a.createElement("div",{className:l.a.Auth},y,I,A.a.createElement("form",{onSubmit:w},D,A.a.createElement(c.a,{type:"login",loginType:"Success"},"SUBMIT")),A.a.createElement(c.a,{type:"login",clicked:k,loginType:"Danger"},"SWITCH TO ",f?"SIGNIN":"SIGNUP")))},f=function(n){return{loading:n.auth.loading,error:n.auth.error,isAuthenticated:null!==n.auth.token,authRedirectPath:n.auth.authRedirectPath}},_=function(n){return{onAuth:function(e,t,o){return n(B.a(e,t,o))},onSetAuthRedirectPath:function(){return n(B.f("/"))}}};e.default=Object(i.b)(f,_)(p)},198:function(n,e,t){"use strict";var o=t(1),r=t.n(o),A=t(199),i=t.n(A),a=function(){return r.a.createElement("div",{className:i.a.Loader},"Loading...")};e.a=a},199:function(n,e,t){var o=t(200);"string"===typeof o&&(o=[[n.i,o,""]]);var r={};r.transform=void 0;t(192)(o,r);o.locals&&(n.exports=o.locals)},200:function(n,e,t){e=n.exports=t(191)(!0),e.push([n.i,'.Spinner__Loader__1DDwY,.Spinner__Loader__1DDwY:after,.Spinner__Loader__1DDwY:before{border-radius:50%}.Spinner__Loader__1DDwY{color:#daa520;font-size:11px;text-indent:-99999em;margin:55px auto;position:relative;width:10em;height:10em;-webkit-box-shadow:inset 0 0 0 1em;box-shadow:inset 0 0 0 1em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.Spinner__Loader__1DDwY:after,.Spinner__Loader__1DDwY:before{position:absolute;content:""}.Spinner__Loader__1DDwY:before{width:5.2em;height:10.2em;background:#fff;border-radius:10.2em 0 0 10.2em;top:-.1em;left:-.1em;-webkit-transform-origin:5.2em 5.1em;-ms-transform-origin:5.2em 5.1em;transform-origin:5.2em 5.1em;-webkit-animation:Spinner__load2__1N7mg 2s infinite ease 1.5s;animation:Spinner__load2__1N7mg 2s infinite ease 1.5s}.Spinner__Loader__1DDwY:after{width:5.2em;height:10.2em;background:#fff;border-radius:0 10.2em 10.2em 0;top:-.1em;left:5.1em;-webkit-transform-origin:0 5.1em;-ms-transform-origin:0 5.1em;transform-origin:0 5.1em;-webkit-animation:Spinner__load2__1N7mg 2s infinite ease;animation:Spinner__load2__1N7mg 2s infinite ease}@-webkit-keyframes Spinner__load2__1N7mg{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes Spinner__load2__1N7mg{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',"",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/components/UI/Spinner/Spinner.css"],names:[],mappings:"AAAA,qFAGE,iBAAmB,CACpB,AACD,wBACE,cAAe,AACf,eAAgB,AAChB,qBAAsB,AACtB,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,mCAAoC,AAC5B,2BAA4B,AACpC,gCAAiC,AACjC,4BAA6B,AAC7B,uBAAyB,CAC1B,AACD,6DAEE,kBAAmB,AACnB,UAAY,CACb,AACD,+BACE,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gCAAiC,AACjC,UAAY,AACZ,WAAa,AACb,qCAAsC,AACtC,iCAAkC,AAC9B,6BAA8B,AAClC,8DAA+C,AAC/C,qDAAuC,CACxC,AACD,8BACE,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gCAAiC,AACjC,UAAY,AACZ,WAAY,AACZ,iCAAoC,AACpC,6BAAgC,AAC5B,yBAA4B,AAChC,yDAA0C,AAC1C,gDAAkC,CACnC,AACD,yCACE,GACE,+BAAgC,AAChC,sBAAwB,CACzB,AACD,GACE,gCAAkC,AAClC,uBAA0B,CAC3B,CACF,AACD,iCACE,GACE,+BAAgC,AAChC,sBAAwB,CACzB,AACD,GACE,gCAAkC,AAClC,uBAA0B,CAC3B,CACF",file:"Spinner.css",sourcesContent:[".Loader,\n.Loader:before,\n.Loader:after {\n  border-radius: 50%;\n}\n.Loader {\n  color: #DAA520;\n  font-size: 11px;\n  text-indent: -99999em;\n  margin: 55px auto;\n  position: relative;\n  width: 10em;\n  height: 10em;\n  -webkit-box-shadow: inset 0 0 0 1em;\n          box-shadow: inset 0 0 0 1em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.Loader:before,\n.Loader:after {\n  position: absolute;\n  content: '';\n}\n.Loader:before {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 10.2em 0 0 10.2em;\n  top: -0.1em;\n  left: -0.1em;\n  -webkit-transform-origin: 5.2em 5.1em;\n  -ms-transform-origin: 5.2em 5.1em;\n      transform-origin: 5.2em 5.1em;\n  -webkit-animation: load2 2s infinite ease 1.5s;\n  animation: load2 2s infinite ease 1.5s;\n}\n.Loader:after {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 0 10.2em 10.2em 0;\n  top: -0.1em;\n  left: 5.1em;\n  -webkit-transform-origin: 0px 5.1em;\n  -ms-transform-origin: 0px 5.1em;\n      transform-origin: 0px 5.1em;\n  -webkit-animation: load2 2s infinite ease;\n  animation: load2 2s infinite ease;\n}\n@-webkit-keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}"],sourceRoot:""}]),e.locals={Loader:"Spinner__Loader__1DDwY",load2:"Spinner__load2__1N7mg"}},201:function(n,e,t){"use strict";var o=t(1),r=t.n(o),A=t(202),i=t.n(A),a=function(n){var e=i.a.ErrorIcon.concat(" ","fa").concat(" ","fa-exclamation-circle"),t=n.hidden?i.a.Hidden:i.a.ErrorMsg;return r.a.createElement("div",{className:t},r.a.createElement("i",{className:e}),n.children)};e.a=a},202:function(n,e,t){var o=t(203);"string"===typeof o&&(o=[[n.i,o,""]]);var r={};r.transform=void 0;t(192)(o,r);o.locals&&(n.exports=o.locals)},203:function(n,e,t){e=n.exports=t(191)(!0),e.push([n.i,".ErrorMessage__ErrorMsg__1OwgM{width:45%;margin-bottom:10px;padding:10px;margin:10px auto;color:#d8000c;text-align:center;background-color:#ffbaba}.ErrorMessage__ErrorIcon__2xVTi{cursor:pointer;margin-right:.5rem}.ErrorMessage__Hidden__3JgSK{display:none}","",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/components/ErrorMessage/ErrorMessage.css"],names:[],mappings:"AAAA,+BACE,UAAW,AACX,mBAAoB,AACpB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,kBAAmB,AACnB,wBAA0B,CAC3B,AAED,gCACE,eAAgB,AAChB,kBAAqB,CACtB,AAED,6BACE,YAAc,CACf",file:"ErrorMessage.css",sourcesContent:[".ErrorMsg {\n  width: 45%;\n  margin-bottom: 10px;\n  padding: 10px;\n  margin: 10px auto;\n  color: #D8000C;\n  text-align: center;\n  background-color: #FFBABA;\n}\n\n.ErrorIcon {\n  cursor: pointer;\n  margin-right: 0.5rem;\n}\n\n.Hidden {\n  display: none;\n}"],sourceRoot:""}]),e.locals={ErrorMsg:"ErrorMessage__ErrorMsg__1OwgM",ErrorIcon:"ErrorMessage__ErrorIcon__2xVTi",Hidden:"ErrorMessage__Hidden__3JgSK"}},204:function(n,e,t){"use strict";var o=t(1),r=t.n(o),A=t(205),i=t.n(A),a=function(n){var e=null;return"quizz"===n.type?e=r.a.createElement("button",{type:"submit",className:i.a.QuizzButton},n.children):"login"===n.type&&(e=r.a.createElement("button",{className:[i.a.LoginButton,i.a[n.loginType]].join(" "),onClick:n.clicked},n.children)),r.a.createElement("span",null,e)};e.a=a},205:function(n,e,t){var o=t(206);"string"===typeof o&&(o=[[n.i,o,""]]);var r={};r.transform=void 0;t(192)(o,r);o.locals&&(n.exports=o.locals)},206:function(n,e,t){e=n.exports=t(191)(!0),e.push([n.i,".Button__LoginButton__3wszv{background-color:transparent;border:none;color:#fff;outline:none;cursor:pointer;font:inherit;padding:10px;margin:10px;font-weight:700}.Button__LoginButton__3wszv:first-of-type{margin-left:0;padding-left:0}.Button__LoginButton__3wszv:disabled{color:#ccc;cursor:not-allowed}.Button__QuizzButton__1HnrE{margin-top:4em;border:5px solid #000;background:#000;color:#fff;font-size:2rem;cursor:pointer;-webkit-transition:.2s ease-in;-o-transition:.2s ease-in;transition:.2s ease-in;padding:.5em;width:7em;border-radius:4px}.Button__QuizzButton__1HnrE:hover{border:5px solid #daa520;background:#daa520;color:#fff}.Button__QuizzButton__1HnrE:disabled{border:5px solid #ccc;background:#ccc;color:#fff;cursor:not-allowed}.Button__Success__2dHUt{color:#daa520}.Button__Danger__2xnhN{color:#8b0000}","",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/components/UI/Button/Button.css"],names:[],mappings:"AAAA,4BACI,6BAA8B,AAC9B,YAAa,AACb,WAAa,AACb,aAAc,AACd,eAAgB,AAChB,aAAc,AACd,aAAc,AACd,YAAa,AACb,eAAkB,CACrB,AAED,0CACI,cAAe,AACf,cAAgB,CACnB,AAED,qCACI,WAAY,AACZ,kBAAoB,CACvB,AAED,4BACI,eAAgB,AAChB,sBAA0B,AAC1B,gBAAiB,AACjB,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,+BAAgC,AAChC,0BAA2B,AAC3B,uBAAwB,AACxB,aAAe,AACf,UAAW,AACX,iBAAmB,CACtB,AAED,kCACI,yBAA0B,AAC1B,mBAAoB,AACpB,UAAY,CACf,AAED,qCACI,sBAAuB,AACvB,gBAAiB,AACjB,WAAY,AACZ,kBAAoB,CACvB,AAED,wBACI,aAAe,CAClB,AAED,uBACI,aAAe,CAClB",file:"Button.css",sourcesContent:[".LoginButton {\n    background-color: transparent;\n    border: none;\n    color: white;\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    padding: 10px;\n    margin: 10px;\n    font-weight: bold;\n}\n\n.LoginButton:first-of-type {\n    margin-left: 0;\n    padding-left: 0;\n}\n\n.LoginButton:disabled {\n    color: #ccc;\n    cursor: not-allowed;\n}\n\n.QuizzButton {\n    margin-top: 4em;\n    border: 5px solid #000000;\n    background: #000;\n    color: #fff;\n    font-size: 2rem;\n    cursor: pointer;\n    -webkit-transition: .2s ease-in;\n    -o-transition: .2s ease-in;\n    transition: .2s ease-in;\n    padding: 0.5em;\n    width: 7em;\n    border-radius: 4px;\n}\n\n.QuizzButton:hover {\n    border: 5px solid #DAA520;\n    background: #DAA520;\n    color: #fff;\n}\n\n.QuizzButton:disabled {\n    border: 5px solid #ccc;\n    background: #ccc;\n    color: #fff;\n    cursor: not-allowed;\n}\n\n.Success {\n    color: #DAA520;\n}\n\n.Danger {\n    color: #8B0000;\n}"],sourceRoot:""}]),e.locals={LoginButton:"Button__LoginButton__3wszv",QuizzButton:"Button__QuizzButton__1HnrE",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},225:function(n,e,t){"use strict";var o=t(1),r=t.n(o),A=t(226),i=t.n(A),a=function(n){var e=null,t=[i.a.LoginInputElement];switch(n.invalid&&n.shouldValidate&&n.touched&&t.push(i.a.Invalid),n.elementType){case"loginInput":e=r.a.createElement("input",Object.assign({className:t.join(" ")},n.elementConfig,{value:n.value,onChange:n.changed}));break;default:e=r.a.createElement("input",Object.assign({className:t.join(" ")},n.elementConfig,{value:n.value,onChange:n.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},n.label),e)};e.a=a},226:function(n,e,t){var o=t(227);"string"===typeof o&&(o=[[n.i,o,""]]);var r={};r.transform=void 0;t(192)(o,r);o.locals&&(n.exports=o.locals)},227:function(n,e,t){e=n.exports=t(191)(!0),e.push([n.i,".Input__Input__s67N0{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label___n-1m{font-weight:700;display:block;margin-bottom:8px}.Input__LoginInputElement__2JAgz{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__LoginInputElement__2JAgz:focus{outline:none;background-color:#ccc}.Input__Invalid__1sl1p{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,iCACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,uCACI,aAAc,AACd,qBAAuB,CAC1B,AAGD,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.LoginInputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.LoginInputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n\n\n.Invalid {\n    border: 1px solid red;\n    background-color: #FDA49A;\n}"],sourceRoot:""}]),e.locals={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",LoginInputElement:"Input__LoginInputElement__2JAgz",Invalid:"Input__Invalid__1sl1p"}},228:function(n,e,t){var o=t(229);"string"===typeof o&&(o=[[n.i,o,""]]);var r={};r.transform=void 0;t(192)(o,r);o.locals&&(n.exports=o.locals)},229:function(n,e,t){e=n.exports=t(191)(!0),e.push([n.i,".Auth__AuthWrap__XR5Y_{height:100%;margin:18em 0}.Auth__Auth__2YUr1{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__2YUr1{width:500px}}","",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,uBACI,YAAa,AACb,aAAiB,CACpB,AAED,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,mBACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".AuthWrap {\n    height: 100%;\n    margin: 18em 0em;\n}\n\n.Auth {\n    margin: 20px auto;\n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n@media (min-width: 600px) {\n    .Auth {\n        width: 500px;\n    }\n}"],sourceRoot:""}]),e.locals={AuthWrap:"Auth__AuthWrap__XR5Y_",Auth:"Auth__Auth__2YUr1"}}});
//# sourceMappingURL=0.4434a3e5.chunk.js.map