(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[42],{7706:function(e,i,t){"use strict";t.r(i);var s=t(20),o=t(0),h=t.n(o),n=t(112),a=t.n(n);i.default=function(e){var i=window.innerWidth,t=window.innerHeight,o=[],n=[],d=[],r=function e(i,t,o){Object(s.a)(this,e),this.move=function(e){var i=e.noise(this.pos.x/800,this.pos.y/800)*e.TWO_PI*800;this.dir.x=e.cos(i),this.dir.y=e.sin(i),this.vel=this.dir.copy(),this.vel.mult(this.speed),this.pos.add(this.vel)},this.checkEdge=function(e){(this.pos.x>e.width||this.pos.x<0||this.pos.y>e.height||this.pos.y<0)&&(this.pos.x=e.random(50,e.width),this.pos.y=e.random(50,e.height))},this.display=function(e,i){e.ellipse(this.pos.x,this.pos.y,i,i)},this.dir=i.createVector(0,0),this.vel=i.createVector(0,0),this.pos=i.createVector(t,o),this.speed=.4};return h.a.createElement(a.a,{setup:function(e,s){e.createCanvas(i,t).parent(s),e.noiseSeed("adsfasdf234234"),e.background(21,8,50);for(var h=0;h<200;h++)o[h]=new r(e,e.random(0,e.width),e.random(0,e.height)),n[h]=new r(e,e.random(0,e.width),e.random(0,e.height)),d[h]=new r(e,e.random(0,e.width),e.random(0,e.height))},draw:function(e){e.noStroke(),e.smooth();for(var i=0;i<200;i++){var t=e.map(i,0,200,1,2),s=e.map(i,0,200,0,250);e.fill(69,33,124,s),o[i].move(e),o[i].display(e,t),o[i].checkEdge(e),e.fill(7,153,242,s),n[i].move(e),n[i].display(e,t),n[i].checkEdge(e),e.fill(255,255,255,s),d[i].move(e),d[i].display(e,t),d[i].checkEdge(e)}},keyPressed:function(e){83!==e.keyCode&&32!==e.keyCode||e.saveCanvas("simons_artwork","jpg")}})}}}]);