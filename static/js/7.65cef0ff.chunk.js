(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[7],{5762:function(e){e.exports=JSON.parse('{"ethereumAddress":"0x254b358a6047a03243971B4814b1AAfdF312EC56","bitcoinAddress":"bc1q53jenrvwkwa65ukca82e6pxp2fxfnvgrnde9fs","ensName":"simonbuechi.eth","ipfsAddress":"","wallSpaceName":"MyFollowing","wallProfile":"profileWall","blogSpaceName":"blog-simonbuechi","blogThread":"/orbitdb/zdpuAoRqV81GCvCaswxTigDrsGtCuuHiBb1TV7wocTi8phGZL/3box.thread.blog-simonbuechi.blog-posts"}')},5844:function(e,t){},5849:function(e,t){},5865:function(e,t){},5866:function(e,t){},5904:function(e,t){},5919:function(e,t){},6201:function(e,t){},6227:function(e){e.exports=JSON.parse('{"tables":true,"emoji":true,"strikethrough":true,"openLinksInNewWindow":true,"extensions":[]}')},6248:function(e,t,a){"use strict";a.r(t);var n=a(6186),r=a(5733),o=a.n(r),l=a(5840),i=a(17),c=a(15),s=a(24),u=a(23),m=a(0),d=a.n(m),b=a(5724),g=a(5841),h=a(6187),p=a(6204),E=a.n(p),f=a(59),y=a(5706),x=a(5720),v=a(6245),O=a(5713),k=a(6247),w=a(6250),C=a(5672),B=a(6244),j=a(5792),D=a(5725),S=a(5722),T=a(5712),A=a(5709),P=a(5960),I=a(6249),N=a(6246),L=a(6228),M=a(42),F=a(5762),J=a(6227),z=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={dialogOpen:!1,blogPosts:[],blogAuthors:{},ready:!1,blogExpanded:[]},e.componentDidMount=Object(l.a)(o.a.mark((function t(){var a,n,r,l,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.listSpaces)(F.ethereumAddress);case 2:if(!t.sent.includes(F.blogSpaceName)){t.next=23;break}return t.next=6,Object(g.getThreadByAddress)(F.blogThread);case 6:for(a=(a=t.sent).sort((function(e,t){return(e=e.timestamp)>(t=t.timestamp)?-1:e<t?1:0})),n=0;n<a.length;n++)a[n]=e.parseThread(a[n]);e.setState({blogPosts:a}),e.setState({ready:!0}),r={},l=0;case 13:if(!(l<a.length)){t.next=22;break}if(r.hasOwnProperty(a[l].author)){t.next=19;break}return t.next=17,Object(g.getProfile)(a[l].author);case 17:i=t.sent,r[a[l].author]=i;case 19:l++,t.next=13;break;case 22:e.setState({blogAuthors:r});case 23:case"end":return t.stop()}}),t)}))),e.handleDialogOpen=function(){e.setState({dialogOpen:!0})},e.handleDialogClose=function(){e.setState({dialogOpen:!1})},e.handleExpandClick=function(t){return function(){var a=e.state.blogExpanded;a[t]=!a[t]||!a[t],e.setState({blogExpanded:a})}},e.unixToDate=function(e){return Intl.DateTimeFormat("default",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(new Date(1e3*e))},e.parseThread=function(t){try{var a=E()(t.message),r=a.attributes.tags?a.attributes.tags.split(","):[],o=e.unixToDate(t.timestamp);return Object(n.a)(Object(n.a)({title:a.attributes.title,description:a.attributes.description,body:a.body},t),{},{tags:r,date:o})}catch(l){return console.error(l),Object(n.a)(Object(n.a)({title:"Error Parsing message",description:"",body:t.message},t),{},{author:"author",tags:[],date:""})}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.t,a=this.state,n=a.ready,r=a.blogPosts,o=a.blogAuthors,l=a.dialogOpen,i=a.blogExpanded;return d.a.createElement(y.a,{item:!0,xs:12,lg:12},d.a.createElement(f.a,{variant:"h2",gutterBottom:!0},t("blog.title")),d.a.createElement(f.a,{variant:"body2",gutterBottom:!0},t("blog.description")),d.a.createElement(C.a,{variant:"contained",color:"secondary",href:"/",startIcon:d.a.createElement(M.z,null),disabled:!0},t("blog.linkMain")),"\xa0",d.a.createElement(C.a,{variant:"contained",color:"secondary",href:"https://medium.com/@simonbuechi",startIcon:d.a.createElement(M.z,null)},t("blog.linkMedium")),"\xa0",d.a.createElement(C.a,{variant:"contained",color:"primary",onClick:this.handleDialogOpen,startIcon:d.a.createElement(M.s,null)},t("blog.dialogButton")),n?r.map((function(t,a){return d.a.createElement(j.a,{in:!0,style:{transitionDelay:450+100*a+"ms"},key:a},d.a.createElement(x.a,{my:2},d.a.createElement(v.a,null,d.a.createElement(I.a,{onClick:e.handleExpandClick(a)},d.a.createElement(N.a,{avatar:o.hasOwnProperty(t.author)&&o[t.author].hasOwnProperty("image")?d.a.createElement(L.a,{src:"https://ipfs.infura.io/ipfs/"+o[t.author].image[0].contentUrl["/"]}):d.a.createElement(L.a,null,d.a.createElement(M.a,null)),title:o.hasOwnProperty(t.author)&&o[t.author].hasOwnProperty("name")?o[t.author].name:t.author,subheader:e.unixToDate(t.timestamp)}),d.a.createElement(k.a,null,d.a.createElement(f.a,{variant:"h2"},t.title))),d.a.createElement(w.a,{disableSpacing:!0},d.a.createElement(D.a,{title:"Read more"},d.a.createElement(O.a,{onClick:e.handleExpandClick(a)},d.a.createElement(M.f,null))),d.a.createElement(D.a,{title:"Share"},d.a.createElement(O.a,null,d.a.createElement(M.C,null))),d.a.createElement(D.a,{title:"Copy full message"},d.a.createElement(O.a,null,d.a.createElement(M.x,null))),d.a.createElement(D.a,{title:"Copy ID"},d.a.createElement(O.a,null,d.a.createElement(M.C,null))),d.a.createElement(D.a,{title:"Post ID is "+t.postId+", created by "+t.author},d.a.createElement(O.a,null,d.a.createElement(M.s,null)))),d.a.createElement(P.a,{in:i[a],timeout:"auto",unmountOnExit:!0},d.a.createElement(k.a,null,d.a.createElement(h.a,{dangerouslySetInnerHTML:!0,markdown:t.body,options:J}))))))})):d.a.createElement(x.a,{my:3},d.a.createElement(B.a,{color:"primary"})),d.a.createElement(S.a,{onClose:this.handleDialogClose,"aria-labelledby":"simple-dialog-title",open:l,maxWidth:"xl"},d.a.createElement(A.a,null,d.a.createElement(f.a,{variant:"h2",gutterBottom:!0},t("blog.dialogTitle")),d.a.createElement(f.a,{variant:"body2",gutterBottom:!0},t("blog.dialogBody1")),d.a.createElement(f.a,{variant:"body2",gutterBottom:!0},t("blog.dialogBody2")),d.a.createElement(f.a,{variant:"body2",gutterBottom:!0},t("blog.dialogBody3")),d.a.createElement(f.a,{variant:"body2",gutterBottom:!0},t("blog.dialogBody4")),d.a.createElement(C.a,{variant:"contained",color:"secondary",href:"/",disabled:!0},t("blog.dialogBlogLink")),"\xa0",d.a.createElement(C.a,{variant:"outlined",color:"primary",href:"https://docs.3box.io"},t("blog.dialog3BoxLink")),"\xa0",d.a.createElement(C.a,{variant:"outlined",color:"primary",href:"https://orbitdb.org"},t("blog.dialogOrbitLink"))),d.a.createElement(T.a,null,d.a.createElement(C.a,{onClick:this.handleDialogClose,color:"secondary",autoFocus:!0},t("base.close")))))}}]),a}(m.Component);t.default=Object(b.a)()(z)}}]);
//# sourceMappingURL=7.65cef0ff.chunk.js.map