(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[11],{5872:function(e){e.exports=JSON.parse('{"ethereumAddress":"0x254b358a6047a03243971B4814b1AAfdF312EC56","bitcoinAddress":"bc1q53jenrvwkwa65ukca82e6pxp2fxfnvgrnde9fs","ensName":"simonbuechi.eth","ipfsAddress":"","wallSpaceName":"MyFollowing","wallProfile":"profileWall","blogSpaceName":"blog-simonbuechi","blogThread":"/orbitdb/zdpuAoRqV81GCvCaswxTigDrsGtCuuHiBb1TV7wocTi8phGZL/3box.thread.blog-simonbuechi.blog-posts"}')},6079:function(e,a,t){e.exports=t.p+"static/media/simonbuechi-landscape-medium.93a5f7d7.jpg"},6372:function(e,a,t){"use strict";t.r(a);var r=t(17),n=t(15),o=t(24),l=t(23),i=t(0),c=t.n(i),s=t(5833),m=t(61),u=t(5813),b=t(5829),d=t(5817),p=t(5818),h=t(5819),y=t(5943),E=t(5896),g=t(5775),f=t(5834),v=t(5816),k=t(5820),C=t(42),w=t(6069),O=t(5836),j=t(5821),x=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={success:null},e.handleCopyClick=function(){e.state.success||e.setState({success:!0},(function(){e.timer=setTimeout((function(){e.setState({success:!1})}),1e3)}))},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,a=e.t,t=e.text;return c.a.createElement(O.a,{title:a("base.copyClipboard"),"aria-label":a("base.copyClipboard")},c.a.createElement(w.CopyToClipboard,{text:t,onCopy:this.handleCopyClick},c.a.createElement(j.a,{color:"primary","aria-label":"Copy"},this.state.success?c.a.createElement(C.f,{fontSize:"small"}):c.a.createElement(C.h,{fontSize:"small"}))))}}]),t}(i.Component),B=Object(s.a)()(x),S=t(6073),D=t.n(S),A=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={dialogQr:!1},e.handleDialogQrOpen=function(){e.setState({dialogQr:!0})},e.handleDialogQrClose=function(){e.setState({dialogQr:!1})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,a=e.t,t=e.text;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{title:a("base.showQr"),"aria-label":a("base.showQr")},c.a.createElement(j.a,{color:"primary","aria-label":"Copy",onClick:this.handleDialogQrOpen},c.a.createElement(C.A,{fontSize:"small"}))),c.a.createElement(f.a,{onClose:this.handleDialogQrClose,"aria-labelledby":"dialogInfo",open:this.state.dialogQr},c.a.createElement(v.a,null,c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},a("base.qrCode")),c.a.createElement(D.a,{value:t,size:250,bgColor:"#FFFFFF",fgColor:"#000000"})),c.a.createElement(k.a,null,c.a.createElement(g.a,{onClick:this.handleDialogQrClose,color:"secondary",autoFocus:!0},a("base.close")))))}}]),t}(i.Component),F=Object(s.a)()(A),P=t(5872),Q=t(6079),T=t.n(Q),z=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={dialogPortrait:!1},e.handleDialogPortraitOpen=function(){e.setState({dialogPortrait:!0})},e.handleDialogPortraitClose=function(){e.setState({dialogPortrait:!1})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props.t,a=this.state.dialogPortrait,t=[{primary:"Ethereum",secondary:P.ethereumAddress,link:2,icon:c.a.createElement(C.k,null)},{primary:"Bitcoin",secondary:P.bitcoinAddress,link:2,icon:c.a.createElement(C.c,null)}],r=[{primary:e("about.linksCode"),secondary:e("about.linksCode2"),link:"https://github.com/simonbuechi",icon:c.a.createElement(C.q,null)},{primary:e("about.linksBooks"),secondary:e("about.linksBooks2"),link:"https://www.goodreads.com/user/show/32950234-simon-b-chi",icon:c.a.createElement(C.d,null)},{primary:e("about.linksMovies"),secondary:e("about.linksMovies2"),link:"http://www.imdb.com/user/ur27356928/",icon:c.a.createElement(C.o,null)},{primary:e("about.linksGames"),secondary:e("about.linksGames2"),link:"https://www.igdb.com/users/simonbuechi",icon:c.a.createElement(C.p,null)}];return c.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:4},c.a.createElement(u.a,{item:!0,xs:12,md:6},c.a.createElement(m.a,{variant:"h2",gutterBottom:!0},e("about.title")),c.a.createElement(b.a,{my:3},c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e("about.body1")),c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e("about.body2")),c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e("about.body3")),c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e("about.body4")),c.a.createElement(m.a,{gutterBottom:!0},c.a.createElement(g.a,{variant:"outlined",color:"primary",onClick:this.handleDialogPortraitOpen,startIcon:c.a.createElement(C.l,null)},e("start.image")))),c.a.createElement(m.a,{variant:"h2",gutterBottom:!0},e("about.aboutSiteTitle")),c.a.createElement(b.a,{my:3},c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e("about.aboutSiteBody")),c.a.createElement(g.a,{variant:"outlined",color:"primary",href:"https://github.com/simonbuechi/dweb",startIcon:c.a.createElement(C.z,null)},e("about.linkGithub")))),c.a.createElement(u.a,{item:!0,xs:12,md:6},c.a.createElement(m.a,{variant:"h2",gutterBottom:!0},e("about.blockchainTitle")),c.a.createElement(d.a,{dense:!0},t.map((function(e,a){return c.a.createElement(E.a,{in:!0,style:{transitionDelay:150+100*a+"ms"},key:e.primary},c.a.createElement("div",null,c.a.createElement(p.a,null,c.a.createElement(y.a,{color:"secondary"},e.icon),c.a.createElement(h.a,{primary:e.primary,secondary:c.a.createElement(m.a,{variant:"body2",noWrap:!0},e.secondary)}),c.a.createElement(F,{text:e.secondary}),c.a.createElement(B,{text:e.secondary}))))}))),c.a.createElement(m.a,{variant:"h2",gutterBottom:!0},e("about.linksTitle")),c.a.createElement(b.a,null,c.a.createElement(d.a,{dense:!0},r.map((function(e,a){return c.a.createElement(E.a,{in:!0,style:{transitionDelay:850+100*a+"ms"},key:e.primary},c.a.createElement("div",null,c.a.createElement(p.a,{button:!0,component:"a",href:e.link},c.a.createElement(y.a,{color:"secondary"},e.icon),c.a.createElement(h.a,{primary:e.primary,secondary:e.secondary}))))})))),c.a.createElement(f.a,{onClose:this.handleDialogPortraitClose,"aria-labelledby":"dialogPortrait",open:a,maxWidth:"xl"},c.a.createElement(v.a,null,c.a.createElement("img",{src:T.a,alt:"simon buechi portrait",className:"dialog"})),c.a.createElement(k.a,null,c.a.createElement(g.a,{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/",color:"secondary",startIcon:c.a.createElement(C.i,null)},e("base.creativecommons")),"\xa0",c.a.createElement(g.a,{onClick:this.handleDialogPortraitClose,color:"secondary",autoFocus:!0},e("base.close"))))))}}]),t}(i.Component);a.default=Object(s.a)()(z)}}]);