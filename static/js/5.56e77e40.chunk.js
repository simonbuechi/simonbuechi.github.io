(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[5],{341:function(e,t){},343:function(e,t){},348:function(e,t){},350:function(e,t){},354:function(e,t){},355:function(e,t){},362:function(e,t){},363:function(e,t){},369:function(e,t){},370:function(e,t){},372:function(e,t){},377:function(e,t){},379:function(e,t){},7047:function(e,t){},7050:function(e,t){},7286:function(e,t){},7293:function(e,t){},7727:function(e,t,n){"use strict";n.r(t);var a,o=n(780),c=n(243),i=n(0),r=n.n(i),l=n(7666),u=n(7673),s=n(636),d=n(638),m=n(639),f=n(7016),g=n(7716),h=n(7622),v=n(7031),p=n(7032),b=n(7033),E=n(7310),O=n(7311),w=n(7312),C=n(7313),y=n(7314),S=n(7315),I="https://eth-goerli.alchemyapi.io/v2/HBnLxQgYavM5ZGSVWyMeBmpBOtZFqYib",_="https://eth-goerli.alchemyapi.io/v2/HBnLxQgYavM5ZGSVWyMeBmpBOtZFqYib",j=new d.a({supportedChainIds:[1,3,4,5,42]}),T=new v.a({urls:{1:I,4:_},defaultChainId:1}),k=new m.b({rpc:{1:I},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}),B=new p.a({url:I,appName:"web3-react example"}),D=new b.a({chainId:1,url:I,pollingInterval:12e3}),L=new E.a({chainId:1,url:I,pollingInterval:12e3,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"}),P=new O.a({chainId:42}),W=new w.a({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).FORTMATIC_API_KEY,chainId:4}),A=new C.a({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).MAGIC_API_KEY,chainId:4,email:"hello@example.org"}),K=new y.a({dAppId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORTIS_DAPP_ID,networks:[1,100]}),H=new S.a({chainId:1});var x="Injected",M="Network",N="WalletConnect",R="WalletLink",F="Ledger",U="Trezor",Y="Authereum",G="Fortmatic",V="Magic",z="Portis",Z="Torus",q=(a={},Object(c.a)(a,x,j),Object(c.a)(a,M,T),Object(c.a)(a,N,k),Object(c.a)(a,R,B),Object(c.a)(a,F,D),Object(c.a)(a,U,L),Object(c.a)(a,Y,P),Object(c.a)(a,G,W),Object(c.a)(a,V,A),Object(c.a)(a,z,K),Object(c.a)(a,Z,H),a);function J(e){var t=new g.a(e);return t.pollingInterval=12e3,t}t.default=function(){return r.a.createElement(s.b,{getLibrary:J},r.a.createElement(X,null))};function Q(){var e=Object(s.c)(),t=e.active,n=e.error,a=e.chainId,c=e.account,i=e.library,l=r.a.useState(),d=Object(o.a)(l,2),m=d[0],f=d[1];return r.a.useEffect((function(){if(c&&i){var e=!1;return i.getBalance(c).then((function(t){e||f(t)})).catch((function(){e||f(null)})),function(){e=!0,f(void 0)}}}),[c,i,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{variant:"h3",gutterBottom:!0},"Status: ",t?"you're connected":n?"There's a problem.":"..."),r.a.createElement(u.a,{variant:"body2",gutterBottom:!0},"Chain ID: ",a),r.a.createElement(u.a,{variant:"body2",gutterBottom:!0},"Account: ",null===c?"-":c?"".concat(c.substring(0,6),"...").concat(c.substring(c.length-4)):""),r.a.createElement(u.a,{variant:"body2",gutterBottom:!0},"Balance: ",null===m?"Error":m?"\u039e".concat(Object(h.a)(m)):""))}function X(){var e=Object(s.c)(),t=e.connector,n=e.library,a=e.chainId,c=e.account,g=e.activate,h=e.deactivate,v=e.active,p=e.error,b=r.a.useState(),E=Object(o.a)(b,2),O=E[0],w=E[1],C=r.a.useState(),y=Object(o.a)(C,2),S=y[0],I=y[1];r.a.useEffect((function(){S&&S===t&&I(void 0)}),[S,t]);var _=function(){var e=Object(s.c)(),t=e.activate,n=e.active,a=Object(i.useState)(!1),c=Object(o.a)(a,2),r=c[0],l=c[1];return Object(i.useEffect)((function(){j.isAuthorized().then((function(e){e?t(j,void 0,!0).catch((function(){l(!0)})):l(!0)}))}),[t]),Object(i.useEffect)((function(){!r&&n&&l(!0)}),[r,n]),r}();!function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(s.c)(),n=t.active,a=t.error,o=t.activate;Object(i.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!a&&!e){var c=function(){console.log("Handling 'connect' event"),o(j)},i=function(e){console.log("Handling 'chainChanged' event with payload",e),o(j)},r=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&o(j)},l=function(e){console.log("Handling 'networkChanged' event with payload",e),o(j)};return t.on("connect",c),t.on("chainChanged",i),t.on("accountsChanged",r),t.on("networkChanged",l),function(){t.removeListener&&(t.removeListener("connect",c),t.removeListener("chainChanged",i),t.removeListener("accountsChanged",r),t.removeListener("networkChanged",l))}}}),[n,a,e,o])}(!_||!!S);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"1fr 1fr",maxWidth:"20rem",margin:"auto"}},Object.keys(q).map((function(e){var n=q[e],a=n===S,o=n===t,c=!_||!!S||o||!!p;return r.a.createElement(l.a,{color:"primary",variant:"outlined",disabled:c,key:e,onClick:function(){I(n),g(q[e])}},r.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"}},a&&r.a.createElement("div",null,"Loading..."),o&&r.a.createElement("span",{role:"img","aria-label":"check"},"\u2705")),e)}))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},(v||p)&&r.a.createElement(l.a,{color:"primary",variant:"outlined",onClick:function(){h()}},"Deactivate"),!!p&&r.a.createElement("h4",{style:{marginTop:"1rem",marginBottom:"0"}},function(e){return e instanceof d.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof s.a?"You're connected to an unsupported network.":e instanceof d.c||e instanceof m.a||e instanceof f.a?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}(p))),r.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"fit-content",maxWidth:"20rem",margin:"auto"}},!(!n||!c)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{color:"primary",variant:"outlined",onClick:function(){n.getSigner(c).signMessage("simonsartworks").then((function(e){!function(e){w("Success"),window.localStorage.setItem("seed",e),console.log(e)}(e)})).catch((function(e){!function(e){w("Error"),console.log(e.message)}(e)}))}},"Set signature/seed"),r.a.createElement(u.a,{variant:"body2",gutterBottom:!0},O)),!(t!==q[M]||!a)&&r.a.createElement(l.a,{color:"primary",variant:"outlined",onClick:function(){t.changeChainId(1===a?4:1)}},"Switch Networks"),t===q[N]&&r.a.createElement(l.a,{color:"primary",variant:"outlined",onClick:function(){t.close()}},"Kill WalletConnect Session")))}}}]);