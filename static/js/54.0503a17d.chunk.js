(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[54],{7737:function(e,t,o){"use strict";o.r(t);var n=o(71),r=o.n(n),a=o(279),i=o(0),c=o.n(i),d=o(91),l=o.n(d),s=o(7640);t.default=function(e){var t,o=window.localStorage.getItem("customWidth")?window.localStorage.getItem("customWidth"):window.innerWidth,n=window.localStorage.getItem("customHeight")?window.localStorage.getItem("customHeight"):window.innerHeight,i=window.localStorage.getItem("signature"),d="generating...";function h(){return(h=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=Object(s.d)({dictionaries:[s.a,s.b,s.c],style:"capital",length:3,seed:t,separator:" "}),console.log(d);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t,o,n){if(!(o<2)){var r=e.random(0,e.PI/1);e.push(),e.translate(t.x,t.y),e.rotate(n),g(e,e.createVector(0,0),o/2,0),g(e,e.createVector(o,0),o/2,0),g(e,e.createVector(o/2,0),o/2,-r),g(e,e.createVector(o/2,0),o/2,r),e.stroke(255,.25),e.strokeWeight(1),e.line(0,0,o,0),e.pop()}}return c.a.createElement(l.a,{setup:function(e,r){e.createCanvas(o,n).parent(r),e.noiseSeed(null!==i?i:e.floor(e.random(1,1e4))),e.randomSeed(null!==i?i:e.floor(e.random(1,1e4))),e.colorMode(e.HSB,360,100,100),t=e.floor(e.random(4,13)),e.background(e.color(40,40,40));var a=e.width*e.height/100*5;e.noFill();for(var c=0;c<a;c++){e.stroke(40,40+10*e.random(),40+5*e.random());var d=e.random()*e.width,l=e.random()*e.height,s=2*e.random()*e.PI,h=5*e.random()+2,g=e.cos(s)*h+d,u=e.sin(s)*h+l;e.line(d,l,g,u);var w=e.random()*e.width,m=e.random()*e.height,p=e.floor(4*e.random());e.ellipse(w,m,p,p)}},draw:function(e){for(var o=e.floor(e.min(e.width,e.height)/5),n=0;n<t;++n)g(e,e.createVector(e.width/2,e.height/2),o,e.TWO_PI/t*n);e.textSize(32),e.fill(255),e.textAlign(e.CENTER,e.TOP),function(e){h.apply(this,arguments)}(e.random(1,1e5)),e.text(d,e.width/2,e.height-70),e.noLoop()},keyPressed:function(e){if(83===e.keyCode||32===e.keyCode){var t="SimonBuechi"+window.location.hash;t.replace(/[^a-zA-Z0-9]/g,""),e.saveCanvas(t,"jpg")}},preload:function(e){}})}}}]);