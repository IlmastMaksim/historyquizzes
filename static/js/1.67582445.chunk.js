webpackJsonp([1],{195:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),A=t.n(o),r=t(11),a=t(27),i=t(215),s=t.n(i),m=t(217),c=t(201),l=t(204),C=t(198),u=this,p=function(){function e(e,n){var t=[],o=!0,A=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){A=!0,r=e}finally{try{!o&&i.return&&i.return()}finally{if(A)throw r}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),B=A.a.memo(function(e){var n=Object(o.useState)({}),t=p(n,2),r=t[0],i=t[1],B=Object(o.useState)(void 0),d=p(B,2),f=d[0],g=d[1],_=Object(o.useState)(!1),z=p(_,2),b=z[0],h=z[1],k=Object(o.useState)(!0),w=p(k,2),x=w[0],E=w[1],D=function(e){var n=e.target,t=Object.assign({},r),o=n.name.split(" ")[1];"undefined"===typeof t[o]&&(t[o]={}),t[o]=n.value,i(t)},I=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.fetchedTest.testData;return Object.keys(n).length===t.length&&"undefined"!==typeof n&&Object.keys(n).length>0},Q=function(n){if(n.preventDefault(),I(r)){var t=[],o=[];for(var A in e.fetchedTest.testData)a.b.decrypt(e.fetchedTest.testData[A].rightAnswer)===r[A]?t.push(r[A]):o.push(r[A]);g("Your result: "+t.length+" right and "+o.length+" wrong answers out of "+e.fetchedTest.testData.length+" questions"),h(!0),E(!0)}else u.setState({formIsValid:!1})},v="undefined"===typeof e.fetchedTest?null:e.fetchedTest.testData.map(function(e,n){return A.a.createElement(m.a,{question:e.question,handleQuizzes:D,id:n,answers:e.answers,key:n})}),y=A.a.createElement("form",{onSubmit:Q},v,A.a.createElement(l.a,{type:"quizz"},"Submit"));return b&&(y=A.a.createElement("div",{className:s.a.QuizzDoneWrap},A.a.createElement("span",null,f))),e.loading&&(y=A.a.createElement(C.a,null)),A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{className:s.a.CompletingPageWrap},A.a.createElement(c.a,{hidden:x},"Thq quizz is not completed!"),A.a.createElement("div",{className:s.a.CompletingForm},A.a.createElement("div",{className:s.a.CompletingTitle},A.a.createElement("h1",null,e.fetchedTest?e.fetchedTest.title:null)),A.a.createElement("div",{className:s.a.CompletingDescr},A.a.createElement("p",null,e.fetchedTest?e.fetchedTest.descr:null)),y)))}),d=function(e){return{fetchedTest:e.tests.fetchedTest,loading:e.tests.loading}};n.default=Object(r.b)(d,null)(B)},198:function(e,n,t){"use strict";var o=t(1),A=t.n(o),r=t(199),a=t.n(r),i=function(){return A.a.createElement("div",{className:a.a.Loader},"Loading...")};n.a=i},199:function(e,n,t){var o=t(200);"string"===typeof o&&(o=[[e.i,o,""]]);var A={};A.transform=void 0;t(192)(o,A);o.locals&&(e.exports=o.locals)},200:function(e,n,t){n=e.exports=t(191)(!0),n.push([e.i,'.Spinner__Loader__1DDwY,.Spinner__Loader__1DDwY:after,.Spinner__Loader__1DDwY:before{border-radius:50%}.Spinner__Loader__1DDwY{color:#daa520;font-size:11px;text-indent:-99999em;margin:55px auto;position:relative;width:10em;height:10em;-webkit-box-shadow:inset 0 0 0 1em;box-shadow:inset 0 0 0 1em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.Spinner__Loader__1DDwY:after,.Spinner__Loader__1DDwY:before{position:absolute;content:""}.Spinner__Loader__1DDwY:before{width:5.2em;height:10.2em;background:#fff;border-radius:10.2em 0 0 10.2em;top:-.1em;left:-.1em;-webkit-transform-origin:5.2em 5.1em;-ms-transform-origin:5.2em 5.1em;transform-origin:5.2em 5.1em;-webkit-animation:Spinner__load2__1N7mg 2s infinite ease 1.5s;animation:Spinner__load2__1N7mg 2s infinite ease 1.5s}.Spinner__Loader__1DDwY:after{width:5.2em;height:10.2em;background:#fff;border-radius:0 10.2em 10.2em 0;top:-.1em;left:5.1em;-webkit-transform-origin:0 5.1em;-ms-transform-origin:0 5.1em;transform-origin:0 5.1em;-webkit-animation:Spinner__load2__1N7mg 2s infinite ease;animation:Spinner__load2__1N7mg 2s infinite ease}@-webkit-keyframes Spinner__load2__1N7mg{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes Spinner__load2__1N7mg{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',"",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/components/UI/Spinner/Spinner.css"],names:[],mappings:"AAAA,qFAGE,iBAAmB,CACpB,AACD,wBACE,cAAe,AACf,eAAgB,AAChB,qBAAsB,AACtB,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,mCAAoC,AAC5B,2BAA4B,AACpC,gCAAiC,AACjC,4BAA6B,AAC7B,uBAAyB,CAC1B,AACD,6DAEE,kBAAmB,AACnB,UAAY,CACb,AACD,+BACE,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gCAAiC,AACjC,UAAY,AACZ,WAAa,AACb,qCAAsC,AACtC,iCAAkC,AAC9B,6BAA8B,AAClC,8DAA+C,AAC/C,qDAAuC,CACxC,AACD,8BACE,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gCAAiC,AACjC,UAAY,AACZ,WAAY,AACZ,iCAAoC,AACpC,6BAAgC,AAC5B,yBAA4B,AAChC,yDAA0C,AAC1C,gDAAkC,CACnC,AACD,yCACE,GACE,+BAAgC,AAChC,sBAAwB,CACzB,AACD,GACE,gCAAkC,AAClC,uBAA0B,CAC3B,CACF,AACD,iCACE,GACE,+BAAgC,AAChC,sBAAwB,CACzB,AACD,GACE,gCAAkC,AAClC,uBAA0B,CAC3B,CACF",file:"Spinner.css",sourcesContent:[".Loader,\n.Loader:before,\n.Loader:after {\n  border-radius: 50%;\n}\n.Loader {\n  color: #DAA520;\n  font-size: 11px;\n  text-indent: -99999em;\n  margin: 55px auto;\n  position: relative;\n  width: 10em;\n  height: 10em;\n  -webkit-box-shadow: inset 0 0 0 1em;\n          box-shadow: inset 0 0 0 1em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.Loader:before,\n.Loader:after {\n  position: absolute;\n  content: '';\n}\n.Loader:before {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 10.2em 0 0 10.2em;\n  top: -0.1em;\n  left: -0.1em;\n  -webkit-transform-origin: 5.2em 5.1em;\n  -ms-transform-origin: 5.2em 5.1em;\n      transform-origin: 5.2em 5.1em;\n  -webkit-animation: load2 2s infinite ease 1.5s;\n  animation: load2 2s infinite ease 1.5s;\n}\n.Loader:after {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 0 10.2em 10.2em 0;\n  top: -0.1em;\n  left: 5.1em;\n  -webkit-transform-origin: 0px 5.1em;\n  -ms-transform-origin: 0px 5.1em;\n      transform-origin: 0px 5.1em;\n  -webkit-animation: load2 2s infinite ease;\n  animation: load2 2s infinite ease;\n}\n@-webkit-keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}"],sourceRoot:""}]),n.locals={Loader:"Spinner__Loader__1DDwY",load2:"Spinner__load2__1N7mg"}},201:function(e,n,t){"use strict";var o=t(1),A=t.n(o),r=t(202),a=t.n(r),i=function(e){var n=a.a.ErrorIcon.concat(" ","fa").concat(" ","fa-exclamation-circle"),t=e.hidden?a.a.Hidden:a.a.ErrorMsg;return A.a.createElement("div",{className:t},A.a.createElement("i",{className:n}),e.children)};n.a=i},202:function(e,n,t){var o=t(203);"string"===typeof o&&(o=[[e.i,o,""]]);var A={};A.transform=void 0;t(192)(o,A);o.locals&&(e.exports=o.locals)},203:function(e,n,t){n=e.exports=t(191)(!0),n.push([e.i,".ErrorMessage__ErrorMsg__1OwgM{width:45%;margin-bottom:10px;padding:10px;margin:10px auto;color:#d8000c;text-align:center;background-color:#ffbaba}.ErrorMessage__ErrorIcon__2xVTi{cursor:pointer;margin-right:.5rem}.ErrorMessage__Hidden__3JgSK{display:none}","",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/components/ErrorMessage/ErrorMessage.css"],names:[],mappings:"AAAA,+BACE,UAAW,AACX,mBAAoB,AACpB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,kBAAmB,AACnB,wBAA0B,CAC3B,AAED,gCACE,eAAgB,AAChB,kBAAqB,CACtB,AAED,6BACE,YAAc,CACf",file:"ErrorMessage.css",sourcesContent:[".ErrorMsg {\n  width: 45%;\n  margin-bottom: 10px;\n  padding: 10px;\n  margin: 10px auto;\n  color: #D8000C;\n  text-align: center;\n  background-color: #FFBABA;\n}\n\n.ErrorIcon {\n  cursor: pointer;\n  margin-right: 0.5rem;\n}\n\n.Hidden {\n  display: none;\n}"],sourceRoot:""}]),n.locals={ErrorMsg:"ErrorMessage__ErrorMsg__1OwgM",ErrorIcon:"ErrorMessage__ErrorIcon__2xVTi",Hidden:"ErrorMessage__Hidden__3JgSK"}},204:function(e,n,t){"use strict";var o=t(1),A=t.n(o),r=t(205),a=t.n(r),i=function(e){var n=null;return"quizz"===e.type?n=A.a.createElement("button",{type:"submit",className:a.a.QuizzButton},e.children):"login"===e.type&&(n=A.a.createElement("button",{className:[a.a.LoginButton,a.a[e.loginType]].join(" "),onClick:e.clicked},e.children)),A.a.createElement("span",null,n)};n.a=i},205:function(e,n,t){var o=t(206);"string"===typeof o&&(o=[[e.i,o,""]]);var A={};A.transform=void 0;t(192)(o,A);o.locals&&(e.exports=o.locals)},206:function(e,n,t){n=e.exports=t(191)(!0),n.push([e.i,".Button__LoginButton__3wszv{background-color:transparent;border:none;color:#fff;outline:none;cursor:pointer;font:inherit;padding:10px;margin:10px;font-weight:700}.Button__LoginButton__3wszv:first-of-type{margin-left:0;padding-left:0}.Button__LoginButton__3wszv:disabled{color:#ccc;cursor:not-allowed}.Button__QuizzButton__1HnrE{margin-top:4em;border:5px solid #000;background:#000;color:#fff;font-size:2rem;cursor:pointer;-webkit-transition:.2s ease-in;-o-transition:.2s ease-in;transition:.2s ease-in;padding:.5em;width:7em;border-radius:4px}.Button__QuizzButton__1HnrE:hover{border:5px solid #daa520;background:#daa520;color:#fff}.Button__QuizzButton__1HnrE:disabled{border:5px solid #ccc;background:#ccc;color:#fff;cursor:not-allowed}.Button__Success__2dHUt{color:#daa520}.Button__Danger__2xnhN{color:#8b0000}","",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/components/UI/Button/Button.css"],names:[],mappings:"AAAA,4BACI,6BAA8B,AAC9B,YAAa,AACb,WAAa,AACb,aAAc,AACd,eAAgB,AAChB,aAAc,AACd,aAAc,AACd,YAAa,AACb,eAAkB,CACrB,AAED,0CACI,cAAe,AACf,cAAgB,CACnB,AAED,qCACI,WAAY,AACZ,kBAAoB,CACvB,AAED,4BACI,eAAgB,AAChB,sBAA0B,AAC1B,gBAAiB,AACjB,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,+BAAgC,AAChC,0BAA2B,AAC3B,uBAAwB,AACxB,aAAe,AACf,UAAW,AACX,iBAAmB,CACtB,AAED,kCACI,yBAA0B,AAC1B,mBAAoB,AACpB,UAAY,CACf,AAED,qCACI,sBAAuB,AACvB,gBAAiB,AACjB,WAAY,AACZ,kBAAoB,CACvB,AAED,wBACI,aAAe,CAClB,AAED,uBACI,aAAe,CAClB",file:"Button.css",sourcesContent:[".LoginButton {\n    background-color: transparent;\n    border: none;\n    color: white;\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    padding: 10px;\n    margin: 10px;\n    font-weight: bold;\n}\n\n.LoginButton:first-of-type {\n    margin-left: 0;\n    padding-left: 0;\n}\n\n.LoginButton:disabled {\n    color: #ccc;\n    cursor: not-allowed;\n}\n\n.QuizzButton {\n    margin-top: 4em;\n    border: 5px solid #000000;\n    background: #000;\n    color: #fff;\n    font-size: 2rem;\n    cursor: pointer;\n    -webkit-transition: .2s ease-in;\n    -o-transition: .2s ease-in;\n    transition: .2s ease-in;\n    padding: 0.5em;\n    width: 7em;\n    border-radius: 4px;\n}\n\n.QuizzButton:hover {\n    border: 5px solid #DAA520;\n    background: #DAA520;\n    color: #fff;\n}\n\n.QuizzButton:disabled {\n    border: 5px solid #ccc;\n    background: #ccc;\n    color: #fff;\n    cursor: not-allowed;\n}\n\n.Success {\n    color: #DAA520;\n}\n\n.Danger {\n    color: #8B0000;\n}"],sourceRoot:""}]),n.locals={LoginButton:"Button__LoginButton__3wszv",QuizzButton:"Button__QuizzButton__1HnrE",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},215:function(e,n,t){var o=t(216);"string"===typeof o&&(o=[[e.i,o,""]]);var A={};A.transform=void 0;t(192)(o,A);o.locals&&(e.exports=o.locals)},216:function(e,n,t){n=e.exports=t(191)(!0),n.push([e.i,".Completing__CompletingPageWrap__2c-wp{height:100%;min-height:35em;padding:10em 0;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:stretch;align-items:stretch}.Completing__CompletingForm__1vpKj{text-align:center;margin:0 auto;max-width:1000px;padding:1em;background:#fff}.Completing__CompletingTitle__1Opat h1{padding:.5em;font-size:32px;font-size:56px}.Completing__CompletingDescr__3milO p,.Completing__CompletingTitle__1Opat h1{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:#000;color:#fff}.Completing__CompletingDescr__3milO p{padding:1.3em;border:none;font-size:129px;font-size:24px;font-family:Open Sans,sans-serif}.Completing__QuizzDoneWrap__2pinI{margin-top:5em}.Completing__QuizzDoneWrap__2pinI span{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:25px;width:60%;border:none;background:#daa520;font-size:22px;color:#fff}","",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/containers/Tests/Completing/Completing.css"],names:[],mappings:"AAAA,uCACI,YAAa,AACb,gBAAiB,AACjB,eAAkB,AAClB,uBAAwB,AACpB,mBAAoB,AACxB,uBAAwB,AACpB,mBAAqB,CAC5B,AAED,mCACI,kBAAmB,AACnB,cAAe,AACf,iBAAkB,AAClB,YAAa,AACb,eAAoB,CACvB,AAED,uCAIO,aAAe,AAEf,eAAgB,AAEhB,cAAgB,CACtB,AAED,6EAVO,qBAAsB,AACtB,wBAAyB,AACjB,gBAAiB,AAEzB,gBAAoB,AAEpB,UAAe,CAerB,AAXD,sCAII,cAAe,AACf,YAAa,AACb,gBAAiB,AAEjB,eAAgB,AAEhB,gCAAqC,CACxC,AAED,kCACI,cAAgB,CACnB,AAED,uCACI,wBAAyB,AACzB,qBAAsB,AACtB,gBAAiB,AACjB,YAAa,AACb,UAAW,AACX,YAAa,AACb,mBAAoB,AACpB,eAAgB,AAChB,UAAe,CAClB",file:"Completing.css",sourcesContent:[".CompletingPageWrap {\n    height: 100%;\n    min-height: 35em;\n    padding: 10em 0em;\n    -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n    -ms-flex-align: stretch;\n        align-items: stretch;\n}\n\n.CompletingForm {\n    text-align: center;\n    margin: 0 auto;\n    max-width: 1000px;\n    padding: 1em;\n    background: #FFFFFF;\n}\n\n.CompletingTitle h1 {\n       -moz-appearance: none;\n       -webkit-appearance: none;\n               appearance: none;\n       padding: 0.5em;\n       background: #000000;\n       font-size: 32px;\n       color: #ffffff;\n       font-size: 56px;\n}\n\n.CompletingDescr p {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n            appearance: none;\n    padding: 1.3em;\n    border: none;\n    font-size: 129px;\n    background: #000000;\n    font-size: 24px;\n    color: #ffffff;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.QuizzDoneWrap {\n    margin-top: 5em;\n}\n\n.QuizzDoneWrap span {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    height: 25px;\n    width: 60%;\n    border: none;\n    background: #DAA520;\n    font-size: 22px;\n    color: #ffffff;\n}"],sourceRoot:""}]),n.locals={CompletingPageWrap:"Completing__CompletingPageWrap__2c-wp",CompletingForm:"Completing__CompletingForm__1vpKj",CompletingTitle:"Completing__CompletingTitle__1Opat",CompletingDescr:"Completing__CompletingDescr__3milO",QuizzDoneWrap:"Completing__QuizzDoneWrap__2pinI"}},217:function(e,n,t){"use strict";var o=t(1),A=t.n(o),r=t(218),a=t.n(r),i=function(e){var n=e.answers.map(function(n,t){return A.a.createElement("label",{className:a.a.QuizzItemLabel,key:t},A.a.createElement("input",{type:"radio",onChange:e.handleQuizzes,value:t+1,name:"answertoquestion".concat(" ",e.id)}),n,A.a.createElement("span",{className:a.a.QuizzItemCheckmark}))});return A.a.createElement("div",null,A.a.createElement("div",{style:{marginTop:"4em",marginBottom:"2em"}},A.a.createElement("span",{className:a.a.QuizzItemQuestion},e.question)),A.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:"2em",marginTop:"2em"}},n))};n.a=i},218:function(e,n,t){var o=t(219);"string"===typeof o&&(o=[[e.i,o,""]]);var A={};A.transform=void 0;t(192)(o,A);o.locals&&(e.exports=o.locals)},219:function(e,n,t){n=e.exports=t(191)(!0),n.push([e.i,'.QuizzItem__QuizzItemQuestion__2n2Al{background:#daa520;font-size:36px;color:#fff}.QuizzItem__QuizzItemLabel__2UWym{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;font-size:22px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.QuizzItem__QuizzItemLabel__2UWym input{position:absolute;opacity:0;cursor:pointer}.QuizzItem__QuizzItemCheckmark__3-gHe{position:absolute;top:0;left:0;height:25px;width:25px;background-color:#000;border-radius:50%}.QuizzItem__QuizzItemLabel__2UWym:hover input~.QuizzItem__QuizzItemCheckmark__3-gHe{background-color:#ccc}.QuizzItem__QuizzItemLabel__2UWym input:checked~.QuizzItem__QuizzItemCheckmark__3-gHe{background-color:#8b0000}.QuizzItem__QuizzItemCheckmark__3-gHe:after{content:"";position:absolute;display:none}.QuizzItem__QuizzItemLabel__2UWym input:checked~.QuizzItem__QuizzItemCheckmark__3-gHe:after{display:block}.QuizzItem__QuizzItemLabel__2UWym .QuizzItem__QuizzItemCheckmark__3-gHe:after{top:9px;left:9px;width:8px;height:8px;border-radius:50%;background:#fff}',"",{version:3,sources:["/home/maksim/Documents/historyquizzes/src/components/Quizz/QuizzItem/QuizzItem.css"],names:[],mappings:"AAAA,qCACI,mBAAoB,AACpB,eAAgB,AAChB,UAAe,CAClB,AAED,kCACI,cAAe,AACjB,kBAAmB,AACnB,kBAAmB,AACnB,mBAAoB,AACpB,eAAgB,AAChB,eAAgB,AAChB,yBAA0B,AAC1B,sBAAuB,AACvB,qBAAsB,AACtB,gBAAkB,CACnB,AAED,wCACI,kBAAmB,AACnB,UAAW,AACX,cAAgB,CACnB,AAED,sCACI,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,sBAA0B,AAC1B,iBAAmB,CACtB,AAED,oFACI,qBAAuB,CACxB,AAED,sFACE,wBAA0B,CAC3B,AAED,4CACE,WAAY,AACZ,kBAAmB,AACnB,YAAc,CACf,AAED,4FACE,aAAe,CAChB,AAED,8EACK,QAAS,AACV,SAAU,AACV,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,eAAkB,CACrB",file:"QuizzItem.css",sourcesContent:['.QuizzItemQuestion {\n    background: #DAA520;\n    font-size: 36px;\n    color: #ffffff;\n}\n\n.QuizzItemLabel {\n    display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.QuizzItemLabel input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.QuizzItemCheckmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #000000;\n    border-radius: 50%;\n}\n\n.QuizzItemLabel:hover input ~ .QuizzItemCheckmark {\n    background-color: #ccc;\n  }\n  \n  .QuizzItemLabel input:checked ~ .QuizzItemCheckmark {\n    background-color: #8B0000;\n  }\n  \n  .QuizzItemCheckmark:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n  \n  .QuizzItemLabel input:checked ~ .QuizzItemCheckmark:after {\n    display: block;\n  }\n  \n  .QuizzItemLabel .QuizzItemCheckmark:after {\n       top: 9px;\n      left: 9px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: white;\n  }'],sourceRoot:""}]),n.locals={QuizzItemQuestion:"QuizzItem__QuizzItemQuestion__2n2Al",QuizzItemLabel:"QuizzItem__QuizzItemLabel__2UWym",QuizzItemCheckmark:"QuizzItem__QuizzItemCheckmark__3-gHe"}}});
//# sourceMappingURL=1.67582445.chunk.js.map