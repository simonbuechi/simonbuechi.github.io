(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[27],{1097:function(t,e){},1110:function(t,e){},2039:function(t,e,a){"use strict";a.r(e);var o=a(524),r=a.n(o),n=a(567),s=a(31),i=a(32),l=a(34),c=a(33),m=a(4),u=a.n(m),d=a(35),h=a(543),b=a(2002),p=a(2016),f=a(2041),g=a(642),y=a(2006),v=a(776),E=a(1082),O="0x254b358a6047a03243971B4814b1AAfdF312EC56",w="blog-simonbuechi",P="/orbitdb/zdpuAoRqV81GCvCaswxTigDrsGtCuuHiBb1TV7wocTi8phGZL/3box.thread.blog-simonbuechi.blog-posts",x=function(t){Object(l.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(s.a)(this,a);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={dialogOpen:!1,blogPosts:[],ready:!1,blogExpanded:[],myProfile:{},response:"",shorturl:"",validUrl:!1},t.componentDidMount=Object(n.a)(r.a.mark((function e(){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.getProfile)(O);case 2:return a=e.sent,t.setState({myProfile:a}),console.log(a),e.next=7,Object(E.listSpaces)(O);case 7:if(!e.sent.includes(w)){e.next=16;break}return e.next=11,Object(E.getThreadByAddress)(P);case 11:o=(o=e.sent).sort((function(t,e){return(t=t.timestamp)>(e=e.timestamp)?-1:t<e?1:0})),t.setState({blogPosts:o}),console.log(o),t.setState({ready:!0});case 16:case"end":return e.stop()}}),e)}))),t.unixToDate=function(t){return Intl.DateTimeFormat("default",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(new Date(1e3*t))},t.setValue=function(e){e.target.checkValidity()?t.setState({shorturl:e.target.value,validUrl:!0}):t.setState({validUrl:!1})},t.setShortUrl=function(){var e={destination:"https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g",domain:{fullName:"go.voveo.ch"},slashtag:t.state.shorturl};fetch("https://api.rebrandly.com/v1/links",{method:"POST",headers:{"Content-Type":"application/json",apikey:"d39f737798af4dd8b125b6dfc227984a",workspace:"f9268386fb874721bf4c595f27a1ad08"},body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(e){t.setState({response:e.shortUrl}),console.log(e)}),(function(t){console.log(t)}))},t}return Object(i.a)(a,[{key:"render",value:function(){return u.a.createElement(p.a,{item:!0,xs:12,md:9,lg:9,className:"defaultpadding"},u.a.createElement(b.a,{variant:"h1",gutterBottom:!0},"3box Demo"),u.a.createElement(f.a,{my:3},u.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"Demo of how to access IFPS and OrbitDB data via 3box"),u.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"Profile data"),u.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"(based on ",O,"),",this.state.myProfile.name?this.state.myProfile.name:"NONAME"," ,",this.state.myProfile.location?this.state.myProfile.location:"NOLOCATION")),u.a.createElement(f.a,{my:3},u.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"Data"),this.state.ready&&this.state.blogPosts.map((function(t,e){return u.a.createElement("div",{key:e},u.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"author: ",t.author),u.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"timestamp: ",t.timestamp),u.a.createElement(b.a,{variant:"body2",gutterBottom:!0},"postID: ",t.postId))}))),u.a.createElement(f.a,{my:3},u.a.createElement(b.a,{variant:"h2",gutterBottom:!0},"URL Shortener"),u.a.createElement(g.a,{label:"Short Name",variant:"outlined",value:this.state.shorturl,onChange:this.setValue,fullWidth:!0,helperText:"enter a shortname to create easy-to-read URL",inputProps:{maxLength:60,pattern:"^[A-Za-z0-9-]{0,60}$"},InputProps:{startAdornment:u.a.createElement(v.a,{position:"start"},"go.voveo.ch/")}}),u.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.setShortUrl,disabled:!this.state.validUrl},"Create short url"),u.a.createElement(b.a,{variant:"body2",gutterBottom:!0},this.state.response?"Your short URL is "+this.state.response:"")))}}]),a}(m.Component);e.default=Object(h.f)(Object(d.b)()(x))}}]);