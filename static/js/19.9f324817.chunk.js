(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[19],{6387:function(e,t,a){},6409:function(e,t){},6423:function(e,t){},6425:function(e,t){},6435:function(e,t){},6437:function(e,t){},6456:function(e,t){},6488:function(e){e.exports=JSON.parse('{"name":"dweb","version":"0.3.4","private":"false","homepage":"https://buechi.name","dependencies":{"3box":"^1.21.0","@material-ui/core":"^4.11.0","@material-ui/lab":"^4.0.0-alpha.56","@web3-react/authereum-connector":"^6.1.6","@web3-react/core":"^6.1.1","@web3-react/fortmatic-connector":"^6.1.6","@web3-react/frame-connector":"^6.0.9","@web3-react/injected-connector":"^6.0.7","@web3-react/network-connector":"^6.1.3","@web3-react/walletconnect-connector":"^6.1.6","apollo-boost":"^0.4.9","babel-plugin-relay":"^10.0.1","front-matter":"^4.0.2","graphql":"^15.4.0","i18next":"^19.7.0","i18next-browser-languagedetector":"^4.3.1","mdi-material-ui":"^6.18.0","qrcode.react":"^1.0.1","react":"^16.13.1","react-apollo":"^3.1.5","react-copy-to-clipboard":"^5.0.3","react-dom":"^16.13.1","react-helmet":"^6.1.0","react-i18next":"^11.8.5","react-p5":"^1.3.6","react-router-dom":"^5.2.0","react-scripts":"^3.4.3","react-showdown":"^2.1.0","web3modal":"^1.9.3"},"devDependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","analyze":"source-map-explorer \'build/static/js/*.js\'"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},7065:function(e,t,a){"use strict";a.r(t);var n,l=a(8),r=a(9),o=a(22),c=a(21),i=a(0),m=a.n(i),s=a(7071),u=a(195),b=a(84),d=a(322),g=(a(6387),a(7041)),h=a(7035),p=a(7064),E=a(7042),v=a(7068),f=a(7063),y=a(7043),C=a(7025),O=a(7038),j=a(7039),w=a(7040),D=a(7070),x=a(7033),k=a(7034),S=a(7028),B=a(7037),W=a(7036),M=a(90),I=a(40),A=a(7081),L=a(7029),z=a(23),P=a(6),F=a(323),T=a(325),_=a(326),H=a(6389),Y=a(6984),q=a(6987),K=a(6478),N=a(6479),G=a(6480),Z="https://eth-goerli.alchemyapi.io/v2/HBnLxQgYavM5ZGSVWyMeBmpBOtZFqYib",J="https://eth-goerli.alchemyapi.io/v2/HBnLxQgYavM5ZGSVWyMeBmpBOtZFqYib",R=new T.a({supportedChainIds:[1,3,4,5,42]}),U=(new K.a({urls:{1:Z,4:J},defaultChainId:1}),new _.b({rpc:{1:Z},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}));new N.a({chainId:42}),new G.a({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FORTMATIC_API_KEY,chainId:4});var V={Injected:"Injected",WalletConnect:"WalletConnect"},Q=(n={},Object(P.a)(n,V.Injected,R),Object(P.a)(n,V.WalletConnect,U),n);function X(e){var t=new Y.a(e);return t.pollingInterval=12e3,t}var $=function(){return m.a.createElement(F.b,{getLibrary:X},m.a.createElement(te,null))};function ee(){var e=Object(F.c)(),t=e.active,a=e.error,n=e.chainId,l=e.account,r=e.library,o=m.a.useState(),c=Object(z.a)(o,2),i=c[0],s=c[1];return m.a.useEffect((function(){if(l&&r){var e=!1;return r.getBalance(l).then((function(t){e||s(t)})).catch((function(){e||s(null)})),function(){e=!0,s(void 0)}}}),[l,r,n]),m.a.createElement(m.a.Fragment,null,m.a.createElement(C.a,{variant:"h3",textAlign:"right",gutterBottom:!0},"Status: ",t?"you're connected":a?"There's a problem.":"..."),m.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"Chain ID: ",n),m.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"Account: ",null===l?"-":l?"".concat(l.substring(0,6),"...").concat(l.substring(l.length-4)):""),m.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"Balance: ",null===i?"Error":i?"\u039e".concat(Object(q.a)(i)):""))}function te(){var e=Object(F.c)(),t=e.connector,a=e.library,n=e.chainId,l=e.account,r=e.activate,o=e.deactivate,c=e.active,s=e.error,u=m.a.useState(),b=Object(z.a)(u,2),d=b[0],g=b[1],h=m.a.useState(),p=Object(z.a)(h,2),E=p[0],v=p[1];m.a.useEffect((function(){E&&E===t&&v(void 0)}),[E,t]);var f=function(){var e=Object(F.c)(),t=e.activate,a=e.active,n=Object(i.useState)(!1),l=Object(z.a)(n,2),r=l[0],o=l[1];return Object(i.useEffect)((function(){R.isAuthorized().then((function(e){e?t(R,void 0,!0).catch((function(){o(!0)})):o(!0)}))}),[t]),Object(i.useEffect)((function(){!r&&a&&o(!0)}),[r,a]),r}();return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(F.c)(),a=t.active,n=t.error,l=t.activate;Object(i.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!a&&!n&&!e){var r=function(){console.log("Handling 'connect' event"),l(R)},o=function(e){console.log("Handling 'chainChanged' event with payload",e),l(R)},c=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&l(R)},i=function(e){console.log("Handling 'networkChanged' event with payload",e),l(R)};return t.on("connect",r),t.on("chainChanged",o),t.on("accountsChanged",c),t.on("networkChanged",i),function(){t.removeListener&&(t.removeListener("connect",r),t.removeListener("chainChanged",o),t.removeListener("accountsChanged",c),t.removeListener("networkChanged",i))}}}),[a,n,e,l])}(!f||!!E),m.a.createElement(m.a.Fragment,null,m.a.createElement(ee,null),m.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"1fr 1fr",maxWidth:"20rem",margin:"auto"}},Object.keys(Q).map((function(e){var a=Q[e],n=a===E,l=a===t,o=!f||!!E||l||!!s;return m.a.createElement(S.a,{color:"primary",variant:"outlined",disabled:o,key:e,onClick:function(){v(a),r(Q[e])}},m.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"}},n&&m.a.createElement("div",null,"Loading..."),l&&m.a.createElement("span",{role:"img","aria-label":"check"},"\u2705")),e)}))),m.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},(c||s)&&m.a.createElement(S.a,{color:"primary",variant:"outlined",onClick:function(){o()}},"Deactivate"),!!s&&m.a.createElement("h4",{style:{marginTop:"1rem",marginBottom:"0"}},function(e){return e instanceof T.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof F.a?"You're connected to an unsupported network.":e instanceof T.c||e instanceof _.a||e instanceof H.a?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}(s))),m.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"fit-content",maxWidth:"20rem",margin:"auto"}},!(!a||!l)&&m.a.createElement(m.a.Fragment,null,m.a.createElement(S.a,{color:"primary",variant:"outlined",onClick:function(){a.getSigner(l).signMessage("simonsartworks").then((function(e){g(e)})).catch((function(e){g("Failure!"+(e&&e.message?e.message:""))}))}},"Sign Message"),m.a.createElement(C.a,{variant:"body2",gutterBottom:!0},d)),!(t!==Q[V.Network]||!n)&&m.a.createElement(S.a,{color:"primary",variant:"outlined",onClick:function(){t.changeChainId(1===n?4:1)}},"Switch Networks"),t===Q[V.WalletConnect]&&m.a.createElement(S.a,{color:"primary",variant:"outlined",onClick:function(){t.close()}},"Kill WalletConnect Session")))}var ae=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={dialogDisclaimer:!1,dialogWeb3:!1},e.handleDialogDisclaimerOpen=function(){e.setState({dialogDisclaimer:!0})},e.handleDialogDisclaimerClose=function(){e.setState({dialogDisclaimer:!1})},e.handleDialogWeb3Open=function(){e.setState({dialogWeb3:!0})},e.handleDialogWeb3Close=function(){e.setState({dialogWeb3:!1})},e.handleLangChange=function(e){return function(t){I.a.changeLanguage(e)}},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.t,t=this.state,a=t.dialogDisclaimer,n=t.dialogWeb3;return m.a.createElement(m.a.Fragment,null,m.a.createElement(L.a,{color:"secondary",size:"small"},m.a.createElement(A.a,{title:"en"===I.a.language?"":e("base.toEnglish")},m.a.createElement(S.a,{onClick:this.handleLangChange("en"),disabled:"en"===I.a.language},"En")),m.a.createElement(A.a,{title:"de"===I.a.language?"":e("base.toGerman")},m.a.createElement(S.a,{onClick:this.handleLangChange("de"),disabled:"de"===I.a.language},"De"))),m.a.createElement(f.a,{mt:2},m.a.createElement(A.a,{title:"Connect to your Ethereum account"},m.a.createElement(S.a,{size:"small",variant:"outlined",color:"secondary",onClick:this.handleDialogWeb3Open},"Web3 Connect"))),m.a.createElement(f.a,{mt:2},m.a.createElement(A.a,{title:"Disclaimer"},m.a.createElement(S.a,{size:"small",variant:"outlined",color:"secondary",onClick:this.handleDialogDisclaimerOpen},"Disclaimer"))),m.a.createElement(D.a,{onClose:this.handleDialogWeb3Close,open:n,keepMounted:!0,maxWidth:"lg"},m.a.createElement(x.a,null,m.a.createElement(C.a,{variant:"h2",gutterBottom:!0},"Connect Wallet"),m.a.createElement($,null)),m.a.createElement(k.a,null,m.a.createElement(S.a,{onClick:this.handleDialogWeb3Close,variant:"contained",color:"primary"},e("base.close")))),m.a.createElement(D.a,{onClose:this.handleDialogDisclaimerClose,"aria-labelledby":"dialogDisclaimer",open:a},m.a.createElement(x.a,null,m.a.createElement(C.a,{variant:"h2",gutterBottom:!0},e("base.dialogDisclaimerTitle")),m.a.createElement(C.a,{variant:"body2",gutterBottom:!0},e("base.dialogDisclaimerBody")),m.a.createElement(C.a,{variant:"body2",gutterBottom:!0},e("base.dialogDisclaimerBody2")),m.a.createElement(C.a,{variant:"body2",gutterBottom:!0},"\xa9 Copyright ",(new Date).getFullYear()," Simon Buechi")),m.a.createElement(k.a,null,m.a.createElement(S.a,{onClick:this.handleDialogDisclaimerClose,color:"primary",variant:"contained",autoFocus:!0},e("base.close")))))}}]),a}(i.Component),ne=Object(s.a)()(ae),le=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={dialogMenu:!1},e.handleDialogMenuOpen=function(){e.setState({dialogMenu:!0})},e.handleDialogMenuClose=function(){e.setState({dialogMenu:!1})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.t,t=this.state.dialogMenu;return m.a.createElement(m.a.Fragment,null,m.a.createElement(v.a,{xsDown:!0},m.a.createElement(h.a,{item:!0,xs:12,sm:3,lg:3,xl:3},m.a.createElement(f.a,{mt:2,mr:2,textAlign:"center"})),m.a.createElement(h.a,{item:!0,xs:12,sm:9,lg:9,xl:9},m.a.createElement(f.a,{mt:2,mb:4},m.a.createElement(C.a,{variant:"h1"},e("base.title")),m.a.createElement(W.a,null)))),m.a.createElement(v.a,{smUp:!0},m.a.createElement(B.a,{color:"primary","aria-label":"menu",onClick:this.handleDialogMenuOpen},m.a.createElement(M.y,null)),m.a.createElement(h.a,{item:!0,xs:12},m.a.createElement(f.a,{my:1},m.a.createElement(C.a,{variant:"h1"},e("base.title")),m.a.createElement(W.a,null))),m.a.createElement("div",null,m.a.createElement(D.a,{onClose:this.handleDialogMenuClose,"aria-labelledby":"menu",open:t,keepMounted:!0,maxWidth:"lg"},m.a.createElement(x.a,null,m.a.createElement(C.a,{variant:"h2",gutterBottom:!0},e("base.menu")),m.a.createElement(O.a,null,m.a.createElement(j.a,{button:!0,onClick:this.handleDialogMenuClose,component:u.b,to:"/"},m.a.createElement(w.a,{primary:e("base.navStart")})),m.a.createElement(j.a,{button:!0,onClick:this.handleDialogMenuClose,component:u.b,to:"/about"},m.a.createElement(w.a,{primary:e("base.navAbout")})),m.a.createElement(j.a,{button:!0,onClick:this.handleDialogMenuClose,component:u.b,to:"/services"},m.a.createElement(w.a,{primary:e("base.navOffering")})),m.a.createElement(j.a,{button:!0,onClick:this.handleDialogMenuClose,component:u.b,to:"/projects"},m.a.createElement(w.a,{primary:e("base.navProjects")})),m.a.createElement(j.a,{button:!0,onClick:this.handleDialogMenuClose,component:u.b,to:"/arts"},m.a.createElement(w.a,{primary:e("base.navArts")})),m.a.createElement(j.a,{button:!0,onClick:this.handleDialogMenuClose,component:u.b,to:"/blog"},m.a.createElement(w.a,{primary:e("base.navBlog")})),m.a.createElement(j.a,{button:!0,onClick:this.handleDialogMenuClose,component:u.b,to:"/wall"},m.a.createElement(w.a,{primary:e("base.navWall")})),m.a.createElement(j.a,null,m.a.createElement(w.a,{primary:m.a.createElement(ne,null)})))),m.a.createElement(k.a,null,m.a.createElement(S.a,{onClick:this.handleDialogMenuClose,variant:"contained",color:"primary"},e("base.close")))))))}}]),a}(i.Component),re=Object(s.a)()(Object(b.f)(le)),oe=a(6488),ce=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(h.a,{item:!0,xs:12,sm:3,lg:3,xl:3},"\xa0"),m.a.createElement(h.a,{item:!0,xs:12,sm:9,lg:9,xl:9},m.a.createElement(f.a,{mt:10,mb:2},m.a.createElement(W.a,null),m.a.createElement(C.a,{variant:"caption",color:"textSecondary",gutterBottom:!0},"Copyright ",(new Date).getFullYear()," Simon Buechi | v",oe.version))))}}]),a}(i.Component),ie=Object(s.a)()(ce),me=Object(i.lazy)((function(){return a.e(23).then(a.bind(null,7044))})),se=Object(i.lazy)((function(){return Promise.all([a.e(17),a.e(29)]).then(a.bind(null,7072))})),ue=Object(i.lazy)((function(){return Promise.all([a.e(7),a.e(22),a.e(20)]).then(a.bind(null,7045))})),be=Object(i.lazy)((function(){return Promise.all([a.e(7),a.e(30)]).then(a.bind(null,7048))})),de=Object(i.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(24)]).then(a.bind(null,7049))})),ge=Object(i.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(14),a.e(21)]).then(a.bind(null,7053))})),he=Object(i.lazy)((function(){return Promise.all([a.e(8),a.e(16),a.e(40)]).then(a.bind(null,7075))})),pe=Object(i.lazy)((function(){return Promise.all([a.e(8),a.e(18),a.e(39)]).then(a.bind(null,7056))})),Ee=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:0},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.t,a=function(t,a){e.setState({value:a})};return m.a.createElement(g.a,{maxWidth:"lg"},m.a.createElement(d.a,null,m.a.createElement("title",null,"Simon Buechi"),m.a.createElement("meta",{name:"description",content:"Website of Simon Buechi"})),m.a.createElement(h.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:0},m.a.createElement(re,{handleChange:a}),m.a.createElement(h.a,{item:!0,xs:12,sm:3,lg:3,xl:3},m.a.createElement(v.a,{xsDown:!0},m.a.createElement(f.a,{mt:0},m.a.createElement(p.a,{orientation:"vertical",variant:"scrollable",value:this.state.value,onChange:a},m.a.createElement(E.a,{label:t("base.navStart"),component:u.b,to:"/"}),m.a.createElement(E.a,{label:t("base.navAbout"),component:u.b,to:"/about"}),m.a.createElement(E.a,{label:t("base.navOffering"),component:u.b,to:"/services"}),m.a.createElement(E.a,{label:t("base.navProjects"),component:u.b,to:"/projects"}),m.a.createElement(E.a,{label:t("base.navArts"),component:u.b,to:"/arts"}),m.a.createElement(E.a,{label:t("base.navBlog"),component:u.b,to:"/blog"}),m.a.createElement(E.a,{label:t("base.navWall"),component:u.b,to:"/wall"})),m.a.createElement(f.a,{textAlign:"center",mr:4,mt:2},m.a.createElement(ne,null))))),m.a.createElement(h.a,{item:!0,xs:12,sm:9,lg:9,xl:9},m.a.createElement(i.Suspense,{fallback:m.a.createElement(y.a,{color:"primary"})},m.a.createElement(b.c,null,m.a.createElement(b.a,{exact:!0,path:"/",component:me}),m.a.createElement(b.a,{exact:!0,path:"/about",component:se}),m.a.createElement(b.a,{exact:!0,path:"/services",component:ue}),m.a.createElement(b.a,{exact:!0,path:"/projects",component:be}),m.a.createElement(b.a,{exact:!0,path:"/blog",component:ge}),m.a.createElement(b.a,{exact:!0,path:"/wall",component:de}),m.a.createElement(b.a,{exact:!0,path:"/queries",component:he}),m.a.createElement(b.a,{exact:!0,path:"/arts/:id",component:pe}),m.a.createElement(b.a,{exact:!0,path:"/arts",component:pe})))),m.a.createElement(ie,null)))}}]),a}(i.Component);t.default=Object(s.a)()(Object(b.f)(Ee))}}]);