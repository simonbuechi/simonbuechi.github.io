(this.webpackJsonpdweb=this.webpackJsonpdweb||[]).push([[44],{7726:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(91),a=t.n(i),c=t(716);e.default=function(n){var e,t,o=window.innerWidth,i=window.innerHeight,l=[];return r.a.createElement(a.a,{setup:function(n,r){n.createCanvas(o,i,n.WEBGL).parent(r),(e=n.canvas.getContext("webgl")).disable(e.DEPTH_TEST);for(var a=0;a<22;a++)l[a]=n.random(-5,5);t=new c.Shader(n._renderer,v,s),n.shader(t)},draw:function(n){t.setUniform("iResolution",[n.width,n.height]),t.setUniform("iTime",5e-4*n.millis()),t.setUniform("noctaves",4),t.setUniform("c",l),n.shader(t),n.box(n.width/2)},keyPressed:function(n){83!==n.keyCode&&32!==n.keyCode||n.saveCanvas("simons_artwork","jpg")}})};var s="\n// Author Pierre MARZIN 01/2017\n\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 iResolution;\nuniform float iTime;\nuniform int noctaves;\nuniform float c[22];\n\nfloat noise( in vec2 x )\n{\n\treturn sin(1.5*x.x)*sin(1.5*x.y);\n}\n\nconst mat2 rot = mat2( 0.80,  0.6, -0.6,  0.8 );\nfloat fbm ( in vec2 _st) {\n    float v = 0.0;\n    float a = 0.6;\n    vec2 shift = 10.0*vec2(c[11],c[12]);\n    for (int i = 0; i < 12; ++i) {//noprotect\n\t\tif(i>=noctaves)break;\n        v += a * noise(_st);\n        _st = rot*_st* 2.0 + shift;\n        a *= 0.5;\n    }\n    return v;\n}\n\nvoid main() {\n    vec2 st =(-iResolution.xy+2.0*gl_FragCoord.xy)/iResolution.y;//(gl_FragCoord.xy/iResolution.xy);//\n    vec3 color = vec3(0.);\n    vec2 q = vec2(0.);\n    q.x = fbm( st+vec2(c[0],c[1]*.01*iTime) );\n    q.y = fbm( st+vec2(c[2],c[3]) );\n    vec2 r = vec2(0.);\n\n//play with the values here!\n\t\tr.x = fbm( st+ (3.0+0.4)*q+vec2(c[5],c[6]));\n    r.y = fbm( st+ (6.0+0.5)*q*sin(.01*iTime)+vec2(c[8]*.05*iTime,c[9]));\n    float f = fbm(st+c[10]*(r+length(q) ));\n    color = smoothstep(vec3(0.101961,0.19608,0.666667),vec3(0.666667,0.666667,0.98039),color);\n    color = mix(color,vec3(1.856,.05*(1.0+cos(1.5+.2*iTime)),0.164706),r.y+length(q));//\n    color = mix(color,vec3(1.5*sin(.1*iTime),0.0,cos(.13*iTime)),length(r+q));//.2+.2*(1.0+cos(0.5+.3*iTime))\n\t\tcolor = mix( color, vec3(0.9,0.9,0.9), dot(r,r) );\n\t\tcolor*=(1.5*f*f*f+1.8*f*f+1.7*f);\n\t\tcolor+=.4*vec3(1.8+r.x,0.7+q);\n\t\tcolor=pow(color, vec3(.5));\n    gl_FragColor = vec4(color,1.);\n}\n\n",v="\n//standard vertex shader\n#ifdef GL_ES\n      precision highp float;\n    #endif\n\t\t#extension GL_OES_standard_derivatives : enable\n    // attributes, in\n    attribute vec3 aPosition;\n    attribute vec3 aNormal;\n    attribute vec2 aTexCoord;\n    attribute vec4 aVertexColor;\n\n    // attributes, out\n    varying vec3 var_vertPos;\n    varying vec4 var_vertCol;\n    varying vec3 var_vertNormal;\n    varying vec2 var_vertTexCoord;\n    \n    // matrices\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n    uniform mat3 uNormalMatrix;\n\n    void main() {\n      gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);\n\n      // just passing things through\n      var_vertPos      = aPosition;\n      var_vertCol      = aVertexColor;\n      var_vertNormal   = aNormal;\n      var_vertTexCoord = aTexCoord;\n    }\n"}}]);