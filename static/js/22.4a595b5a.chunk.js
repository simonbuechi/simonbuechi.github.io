(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[22],{128:function(e){e.exports=JSON.parse('{"ethereumAddress":"0x254b358a6047a03243971B4814b1AAfdF312EC56","bitcoinAddress":"bc1q53jenrvwkwa65ukca82e6pxp2fxfnvgrnde9fs","ensName":"simonbuechi.eth","ipfsAddress":"","wallSpaceName":"MyFollowing","wallProfile":"profileWall","blogSpaceName":"blog-simonbuechi","blogThread":"/orbitdb/zdpuAoRqV81GCvCaswxTigDrsGtCuuHiBb1TV7wocTi8phGZL/3box.thread.blog-simonbuechi.blog-posts"}')},6597:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(9),o=t(19),l=t(18),i=t(0),c=t.n(i),s=t(6596),m=t(6555),u=t(6554),d=t(6588),b=t(6560),p=t(6561),y=t(6562),h=t(174),E=t(151),f=t(6549),g=t(6595),k=t(6559),w=t(6563),v=t(80),C=t(6227),B=t(6604),O=t(6564),x=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={success:null},e.handleCopyClick=function(){e.state.success||e.setState({success:!0},(function(){e.timer=setTimeout((function(){e.setState({success:!1})}),1e3)}))},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.t,t=e.text;return c.a.createElement(B.a,{title:a("base.copyClipboard"),"aria-label":a("base.copyClipboard")},c.a.createElement(C.CopyToClipboard,{text:t,onCopy:this.handleCopyClick},c.a.createElement(O.a,{color:"secondary","aria-label":"Copy"},this.state.success?c.a.createElement(v.g,{fontSize:"small"}):c.a.createElement(v.j,{fontSize:"small"}))))}}]),t}(i.Component),j=Object(s.a)()(x),I=t(6231),A=t.n(I),D=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={dialogQr:!1},e.handleDialogQrOpen=function(){e.setState({dialogQr:!0})},e.handleDialogQrClose=function(){e.setState({dialogQr:!1})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.t,t=e.text;return c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{title:a("base.showQr"),"aria-label":a("base.showQr")},c.a.createElement(O.a,{color:"secondary","aria-label":"Copy",onClick:this.handleDialogQrOpen},c.a.createElement(v.C,{fontSize:"small"}))),c.a.createElement(g.a,{onClose:this.handleDialogQrClose,"aria-labelledby":"dialogInfo",open:this.state.dialogQr},c.a.createElement(k.a,null,c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},a("base.qrCode")),c.a.createElement(A.a,{value:t,size:250,bgColor:"#FFFFFF",fgColor:"#000000"})),c.a.createElement(w.a,null,c.a.createElement(f.a,{onClick:this.handleDialogQrClose,color:"secondary",autoFocus:!0},a("base.close")))))}}]),t}(i.Component),S=Object(s.a)()(D),q=t(128),F=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={dialogInfo:!1},e.handleDialogInfoOpen=function(){e.setState({dialogInfo:!0})},e.handleDialogInfoClose=function(){e.setState({dialogInfo:!1})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.t,a=this.state.dialogInfo,t=[{question:e("start.q1"),answer:e("start.a1")},{question:e("start.q2"),answer:e("start.a2")},{question:e("start.q3"),answer:e("start.a3")},{question:e("start.q4"),answer:e("start.a4")}],n=[{primary:"LinkedIn",secondary:"",link:"https://www.linkedin.com/in/simonbuechi",icon:c.a.createElement(v.x,null)},{primary:"Facebook",secondary:"",link:"https://www.linkedin.com/in/simonbuechi",icon:c.a.createElement(v.o,null)},{primary:"Twitter",secondary:"",link:"https://twitter.com/simonbuechi",icon:c.a.createElement(v.H,null)},{primary:"3Box",secondary:"",link:"https://3box.io/0x254b358a6047a03243971B4814b1AAfdF312EC56",icon:c.a.createElement(v.A,null)},{primary:"Whatsapp",secondary:"",link:"https://wa.me/41787401627",icon:c.a.createElement(v.J,null)},{primary:"Email",secondary:"",link:"mailto:simon.buechi@gmail.com",icon:c.a.createElement(v.l,null)},{primary:"Keybase",secondary:"",link:"https://keybase.io/simonbuechi",icon:c.a.createElement(v.f,null)}],r=[{primary:"Ethereum",secondary:q.ethereumAddress,link:2,icon:c.a.createElement(v.m,null)},{primary:"Bitcoin",secondary:q.bitcoinAddress,link:2,icon:c.a.createElement(v.d,null)}],o=[{primary:e("about.linksCode"),secondary:e("about.linksCode2"),link:"https://github.com/simonbuechi",icon:c.a.createElement(v.s,null)},{primary:e("about.linksBooks"),secondary:e("about.linksBooks2"),link:"https://www.goodreads.com/user/show/32950234-simon-b-chi",icon:c.a.createElement(v.e,null)},{primary:e("about.linksMovies"),secondary:e("about.linksMovies2"),link:"http://www.imdb.com/user/ur27356928/",icon:c.a.createElement(v.q,null)},{primary:e("about.linksGames"),secondary:e("about.linksGames2"),link:"https://www.igdb.com/users/simonbuechi",icon:c.a.createElement(v.r,null)}];return c.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:4},c.a.createElement(u.a,{item:!0,xs:12,md:12},c.a.createElement(m.a,{variant:"h2",gutterBottom:!0},e("about.title"))),c.a.createElement(u.a,{item:!0,xs:12,md:6},c.a.createElement(d.a,{mb:3},c.a.createElement(m.a,{variant:"h3",gutterBottom:!0},e("start.connectTitle")),c.a.createElement(b.a,{dense:!0},n.map((function(e,a){return c.a.createElement(E.a,{in:!0,style:{transitionDelay:50+100*a+"ms"},key:e.primary},c.a.createElement("div",null,c.a.createElement(p.a,{button:!0,component:"a",href:e.link},c.a.createElement(h.a,{color:"secondary"},e.icon),c.a.createElement(y.a,{primary:e.primary,secondary:e.secondary}))))})))),c.a.createElement(m.a,{variant:"h3",gutterBottom:!0},e("about.aboutSiteTitle")),c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e("start.paragraph2")),c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e("about.aboutSiteBody")),c.a.createElement(m.a,{gutterBottom:!0},c.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.handleDialogInfoOpen,startIcon:c.a.createElement(v.u,null)},e("start.dialogInfoButton")),"\xa0",c.a.createElement(f.a,{variant:"contained",color:"primary",href:"https://github.com/simonbuechi/dweb",startIcon:c.a.createElement(v.B,null)},e("about.linkGithub")))),c.a.createElement(u.a,{item:!0,xs:12,md:6},c.a.createElement(m.a,{variant:"h3",gutterBottom:!0},e("about.blockchainTitle")),c.a.createElement(b.a,{dense:!0},r.map((function(e,a){return c.a.createElement(E.a,{in:!0,style:{transitionDelay:150+100*a+"ms"},key:e.primary},c.a.createElement("div",null,c.a.createElement(p.a,null,c.a.createElement(h.a,{color:"secondary"},e.icon),c.a.createElement(y.a,{primary:e.primary,secondary:c.a.createElement(m.a,{variant:"body2",noWrap:!0},e.secondary)}),c.a.createElement(S,{text:e.secondary}),c.a.createElement(j,{text:e.secondary}))))}))),c.a.createElement(m.a,{variant:"h3",gutterBottom:!0},e("about.linksTitle")),c.a.createElement(d.a,null,c.a.createElement(b.a,{dense:!0},o.map((function(e,a){return c.a.createElement(E.a,{in:!0,style:{transitionDelay:850+100*a+"ms"},key:e.primary},c.a.createElement("div",null,c.a.createElement(p.a,{button:!0,component:"a",href:e.link},c.a.createElement(h.a,{color:"secondary"},e.icon),c.a.createElement(y.a,{primary:e.primary,secondary:e.secondary}))))})))),c.a.createElement(g.a,{onClose:this.handleDialogInfoClose,"aria-labelledby":"dialogInfo",open:a},c.a.createElement(k.a,null,c.a.createElement(m.a,{variant:"h2",gutterBottom:!0},e("start.dialogInfoTitle")),c.a.createElement(m.a,{variant:"body2",gutterBottom:!0},e("start.dialogInfoBody")),c.a.createElement(b.a,null,t.map((function(e,a){return c.a.createElement(p.a,{key:a},c.a.createElement(y.a,{primary:e.question,secondary:e.answer}))})))),c.a.createElement(w.a,null,c.a.createElement(f.a,{color:"primary",variant:"contained",onClick:this.handleDialogInfoClose,autoFocus:!0},e("base.close"))))))}}]),t}(i.Component);a.default=Object(s.a)()(F)}}]);