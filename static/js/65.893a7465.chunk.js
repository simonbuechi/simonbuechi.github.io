(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[65],{7724:function(o,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),t=n(85),i=n.n(t);e.default=function(o){var e,n=window.localStorage.getItem("customWidth")?window.localStorage.getItem("customWidth"):window.innerWidth,r=window.localStorage.getItem("customHeight")?window.localStorage.getItem("customHeight"):window.innerHeight,t=window.localStorage.getItem("signature"),d=["#ff0054","#cc2936","#ffb7c4","#44e5e7","#028090","#9cedeb","#ffbc42","#ff9505","#fff3b0","#E87D1E"];function c(o,e,n,r,a,t){var i=.5*r,d=o.TWO_PI/a;o.beginShape();for(var c=0;c<a;c++)for(var f=-t;f<=t;f++){var l=d*(c+1*f/t),m=i/t*(o.abs(f)+1);o.vertex(e+o.cos(l)*m,n+o.sin(l)*m)}o.endShape(o.CLOSE)}function f(o){e=o.floor(o.random(0,9)),o.fill(d[e])}function l(o){e=o.floor(o.random(0,9)),o.stroke(d[e])}return a.a.createElement(i.a,{setup:function(o,e){o.createCanvas(n,r).parent(e),o.noiseSeed(null!==t?t:o.floor(o.random(1,1e4))),o.randomSeed(null!==t?t:o.floor(o.random(1,1e4)))},draw:function(o){o.background(o.random(d));for(var e=0;e<20;e++){var n=o.random(o.width),r=o.random(o.height),a=o.random(o.height/10,o.height/2),t=o.floor(o.random(3,22)),i=o.floor(o.random(1,7)),m=o.floor(o.random(1,20));o.fill(o.random(d)),o.circle(n,r,1.5*a);for(var s=0;s<m;s++){var g=a/(s+1);o.noFill(),f(o);for(var u=5;u>=1;u--)l(o),o.strokeWeight(u),c(o,n,r,g,t,i);o.noStroke(),f(o),o.random(1)<.2&&f(o),c(o,n,r,g,t,i)}}o.noLoop()},keyPressed:function(o){if(83===o.keyCode||32===o.keyCode){var e="SimonBuechi"+window.location.hash;e.replace(/[^a-zA-Z0-9]/g,""),o.saveCanvas(e,"jpg")}"r"===o.key&&o.background(d[1])}})}}}]);