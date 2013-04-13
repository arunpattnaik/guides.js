// Generated by CoffeeScript 1.6.1
var GridSystem;GridSystem=function(){function e(e){e==null&&(e={});$.extend(this.options.grid,e);this.show()}e.prototype.options={grid:{align:"center",colors:{major:"rgba(0, 131, 255, 0.5)",minor:"rgba(0,0,0,0.2)",gutter:"rgba(52, 141, 190, 0.2)"},x:{major:150,minor:0,gutter:30},y:{major:192,minor:24,gutter:0}}};e.prototype.show=function(){this.canvas||this._createCanvas();this.canvas.style.display="block";return this.canvas.style["z-index"]=9999};e.prototype.hide=function(){this.canvas.style.display="none";return this.canvas.style["z-index"]=-1};e.prototype.toggle=function(){return this.canvas.style.display!=="block"?this.show():this.hide()};e.prototype.update=function(){this.canvas.width=window.innerWidth;this.canvas.height=Math.max(document.body.scrollHeight,window.innerHeight);return this._drawGridlines()};e.prototype._drawGridlines=function(){var e;e=this.canvas.getContext("2d");e.strokeStyle=this.options.grid.colors.gutter;if(this.options.grid.x.gutter>0){e.lineWidth=this.options.grid.x.gutter;this._drawGrid(e,this.options.grid.x.major,0)}if(this.options.grid.y.gutter>0){e.lineWidth=this.options.grid.y.gutter;this._drawGrid(e,0,this.options.grid.y.major)}e.strokeStyle=this.options.grid.colors.minor;e.lineWidth=1;this._drawGrid(e,this.options.grid.x.minor,this.options.grid.y.minor);e.strokeStyle=this.options.grid.colors.major;e.lineWidth=1;return this._drawGrid(e,this.options.grid.x.major,this.options.grid.y.major)};e.prototype._drawGrid=function(e,t,n){var r,i,s;r=0;i=0;this.options.grid.align==="center"&&(r=this.canvas.width/2%t);if(n>0)while(i<this.canvas.height){e.beginPath();e.moveTo(0,i);e.lineTo(this.canvas.width,i);e.stroke();i+=n}if(t>0){s=[];while(r<this.canvas.width){e.beginPath();e.moveTo(r,0);e.lineTo(r,this.canvas.height);e.stroke();s.push(r+=t)}return s}};e.prototype._createCanvas=function(){var e=this;this.canvas=document.createElement("canvas");this.canvas.className="guides";this.canvas.style.position="absolute";this.canvas.style.margin=0;this.canvas.style.top=0;this.canvas.style.left=0;this.update();document.body.appendChild(this.canvas);$(window).resize(function(){return e.update()});return $("body").keydown(function(t){if(t.keyCode===71)return e.toggle()})};return e}();