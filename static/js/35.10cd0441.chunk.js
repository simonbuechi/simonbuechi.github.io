(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[35],{229:function(e){e.exports=JSON.parse('{"ethereumAddress":"0x254b358a6047a03243971B4814b1AAfdF312EC56","bitcoinAddress":"bc1q53jenrvwkwa65ukca82e6pxp2fxfnvgrnde9fs","ensName":"simonbuechi.eth","ipfsAddress":"","wallSpaceName":"MyFollowing","wallProfile":"profileWall","blogSpaceName":"blog-simonbuechi","blogThread":"/orbitdb/zdpuAoRqV81GCvCaswxTigDrsGtCuuHiBb1TV7wocTi8phGZL/3box.thread.blog-simonbuechi.blog-posts"}')},7710:function(e,a,t){"use strict";t.r(a);var n=t(20),r=t(21),o=t(23),l=t(22),i=t(0),c=t.n(i),s=t(7701),m=t(6724),u=t(7650),d=t(7653),p=t(7692),b=t(7656),y=t(7657),h=t(7658),E=t(526),g=t(274),f=t(7643),k=t(7699),w=t(7649),v=t(7652),C=t(7705),B=t(123),I=t(6728),q=t.n(I),x=t(335),O=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={dialogQr:!1},e.handleDialogQrOpen=function(){e.setState({dialogQr:!0})},e.handleDialogQrClose=function(){e.setState({dialogQr:!1})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.t,t=e.text;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{title:a("base.showQr"),"aria-label":a("base.showQr")},c.a.createElement(x.a,{color:"secondary","aria-label":"Copy",onClick:this.handleDialogQrOpen},c.a.createElement(B.A,{fontSize:"small"}))),c.a.createElement(k.a,{onClose:this.handleDialogQrClose,"aria-labelledby":"dialogInfo",open:this.state.dialogQr},c.a.createElement(w.a,null,c.a.createElement(u.a,{variant:"body2",gutterBottom:!0},a("base.qrCode")),c.a.createElement(u.a,{variant:"body2",gutterBottom:!0},t),c.a.createElement(q.a,{value:t,size:350,bgColor:"#FFFFFF",fgColor:"#000000"})),c.a.createElement(v.a,null,c.a.createElement(f.a,{onClick:this.handleDialogQrClose,variant:"contained",color:"primary",autoFocus:!0},a("base.close")))))}}]),t}(i.Component),j=Object(s.a)()(O),D=t(229),S=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={dialogInfo:!1,success:null},e.handleCopyClick=function(){e.state.success||e.setState({success:!0},(function(){e.timer=setTimeout((function(){e.setState({success:!1})}),1e3)}))},e.handleDialogInfoOpen=function(){e.setState({dialogInfo:!0})},e.handleDialogInfoClose=function(){e.setState({dialogInfo:!1})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.props.t,t=this.state,n=t.dialogInfo,r=t.success,o=[{question:a("start.q1"),answer:a("start.a1")},{question:a("start.q2"),answer:a("start.a2")},{question:a("start.q3"),answer:a("start.a3")},{question:a("start.q4"),answer:a("start.a4")}],l=[{primary:"LinkedIn",secondary:"",link:"https://www.linkedin.com/in/simonbuechi",icon:c.a.createElement(B.v,null)},{primary:"Facebook",secondary:"",link:"https://www.linkedin.com/in/simonbuechi",icon:c.a.createElement(B.l,null)},{primary:"Twitter",secondary:"",link:"https://twitter.com/simonbuechi",icon:c.a.createElement(B.G,null)},{primary:"3Box",secondary:"",link:"https://3box.io/0x254b358a6047a03243971B4814b1AAfdF312EC56",icon:c.a.createElement(B.y,null)},{primary:"Whatsapp",secondary:"",link:"https://wa.me/41787401627",icon:c.a.createElement(B.I,null)}],i=[{primary:"Ethereum Name System (ENS)",secondary:D.ensName,qr:!1,copy:!0,icon:c.a.createElement(B.j,null)},{primary:"Ethereum",secondary:D.ethereumAddress,qr:!0,copy:!0,icon:c.a.createElement(B.j,null)},{primary:"Bitcoin",secondary:D.bitcoinAddress,qr:!0,copy:!0,icon:c.a.createElement(B.c,null)}],s=[{primary:a("about.linksCode"),secondary:a("about.linksCode2"),link:"https://github.com/simonbuechi",icon:c.a.createElement(B.p,null)},{primary:a("about.linksBooks"),secondary:a("about.linksBooks2"),link:"https://www.goodreads.com/user/show/32950234-simon-b-chi",icon:c.a.createElement(B.d,null)},{primary:a("about.linksMovies"),secondary:a("about.linksMovies2"),link:"http://www.imdb.com/user/ur27356928/",icon:c.a.createElement(B.n,null)},{primary:a("about.linksGames"),secondary:a("about.linksGames2"),link:"https://www.igdb.com/users/simonbuechi",icon:c.a.createElement(B.o,null)}];return c.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:4},c.a.createElement(d.a,{item:!0,xs:12,md:12},c.a.createElement(u.a,{variant:"h2",gutterBottom:!0},a("about.title"))),c.a.createElement(d.a,{item:!0,xs:12,md:6},c.a.createElement(p.a,{mb:3},c.a.createElement(u.a,{variant:"h3",gutterBottom:!0},a("start.connectTitle")),c.a.createElement(b.a,{dense:!0},l.map((function(e,a){return c.a.createElement(g.a,{in:!0,style:{transitionDelay:50+100*a+"ms"},key:e.primary},c.a.createElement("div",null,c.a.createElement(y.a,{button:!0,component:"a",href:e.link},c.a.createElement(E.a,{color:"secondary"},e.icon),c.a.createElement(h.a,{primary:e.primary,secondary:e.secondary}))))})))),c.a.createElement(u.a,{variant:"h3",gutterBottom:!0},a("about.aboutSiteTitle")),c.a.createElement(u.a,{variant:"body2",gutterBottom:!0},a("about.aboutSiteBody")),c.a.createElement(u.a,{gutterBottom:!0},c.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.handleDialogInfoOpen,startIcon:c.a.createElement(B.s,null)},a("start.dialogInfoButton")),"\xa0",c.a.createElement(f.a,{variant:"contained",color:"primary",href:"https://github.com/simonbuechi/dweb",startIcon:c.a.createElement(B.z,null)},a("about.linkGithub")))),c.a.createElement(d.a,{item:!0,xs:12,md:6},c.a.createElement(u.a,{variant:"h3",gutterBottom:!0},a("about.blockchainTitle")),c.a.createElement(b.a,{dense:!0},i.map((function(t,n){return c.a.createElement(g.a,{in:!0,style:{transitionDelay:500+100*n+"ms"},key:t.primary},c.a.createElement("div",null,c.a.createElement(m.CopyToClipboard,{text:t.secondary,onCopy:e.handleCopyClick},c.a.createElement(y.a,{button:!0},c.a.createElement(C.a,{title:a(r?"base.copied":"base.copyClipboard")},c.a.createElement(E.a,{color:"secondary"},t.icon)),c.a.createElement(h.a,{primary:t.primary,secondary:c.a.createElement(u.a,{variant:"body2",noWrap:!0},t.secondary)}),t.qr&&c.a.createElement(j,{text:t.secondary})))))}))),c.a.createElement(u.a,{variant:"h3",gutterBottom:!0},a("about.linksTitle")),c.a.createElement(p.a,null,c.a.createElement(b.a,{dense:!0},s.map((function(e,a){return c.a.createElement(g.a,{in:!0,style:{transitionDelay:900+100*a+"ms"},key:e.primary},c.a.createElement("div",null,c.a.createElement(y.a,{button:!0,component:"a",href:e.link},c.a.createElement(E.a,{color:"secondary"},e.icon),c.a.createElement(h.a,{primary:e.primary,secondary:e.secondary}))))})))),c.a.createElement(k.a,{onClose:this.handleDialogInfoClose,"aria-labelledby":"dialogInfo",open:n},c.a.createElement(w.a,null,c.a.createElement(u.a,{variant:"h2",gutterBottom:!0},a("start.dialogInfoTitle")),c.a.createElement(u.a,{variant:"body2",gutterBottom:!0},a("start.dialogInfoBody")),c.a.createElement(b.a,null,o.map((function(e,a){return c.a.createElement(y.a,{key:a},c.a.createElement(h.a,{primary:e.question,secondary:e.answer}))})))),c.a.createElement(v.a,null,c.a.createElement(f.a,{color:"primary",variant:"contained",onClick:this.handleDialogInfoClose,autoFocus:!0},a("base.close"))))))}}]),t}(i.Component);a.default=Object(s.a)()(S)}}]);