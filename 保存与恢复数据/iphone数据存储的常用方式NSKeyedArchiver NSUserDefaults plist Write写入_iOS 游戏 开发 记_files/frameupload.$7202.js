KISSY.add("lib/frameupload",function(a,b,c,d,e){function h(a){var b=document.createElement("a");return b.href=a,b.host}function i(b){a.mix(this,b),this.init()}var f=b.get,g=c.on;return ENV.__frameuploadcallback__={},a.augment(i,a.EventTarget),a.augment(i,{clicker:"",clickerPos:null,guid:"",allowFileTypes:null,updateClickerPosOnHover:!0,postParam:null,_enabled:!0,init:function(){function B(a){var c=b.scrollTop(),d=b.scrollLeft(),e=j.getClickerPos(),f=e.left,g=e.left+o-s,h=e.top,i=e.top+p-t,k=a.clientX+d-s/2,l=a.clientY+c-t/2;k>g&&(k=g),k<f&&(k=f),l>i&&(l=i),l<h&&(l=h),b.css(A,{left:k,top:l})}var e=a.guid(),h=this.url,i=this.title||"",j=this,k=75,l=25,m=this.postParam,n=f(this.clicker),o=this.clickerWidth||b.width(n),p=this.clickerHeight||b.height(n),q=this.useInputWrap,r=b.offset(n),s=Math.min(k,o),t=Math.min(l,p);b.attr(n,"uploadid",e),b.addClass(n,"frameupload-hook"),ENV.__frameuploadcallback__[e]=function(){j.uploadCompleteHandler.apply(j,arguments)},h.indexOf("?")>-1?h+="&":h+="?",h+="callback="+encodeURIComponent('ENV.__frameuploadcallback__["'+e+'"]')+(window.DDdomain?"&domain="+window.DDdomain:""),this.guid=e,this.bindEl=n,this.setClickerPos(r);var u=b.create('<input type="file" title="'+i+'" id="dd-frameupload-input-'+e+'" name="formdata" style="border:none;background:none;outline:none;position:absolute;">'),v=b.create("<div>"),w=b.create("<form>",{id:"dd-frameupload-form-"+e,method:"post",encoding:"multipart/form-data",enctype:"multipart/form-data",target:"dd-frameupload-frame-"+e,action:h}),x=b.create('<iframe style="display:none;" frameborder="0" id="dd-frameupload-frame-'+e+'" width="0" height="0" name="dd-frameupload-frame-'+e+'" src="about:blank">');if(!!m){var y,z;for(y in m)z=b.create('<input type="hidden" value="'+m[y]+'" name="'+y+'">'),w.appendChild(z)}z=b.create('<input type="hidden" value="" name="tt">'),w.appendChild(z),b.css(u,{opacity:0,width:s,height:t,outline:"none",border:"none",position:"absolute",left:-999,top:0,overflow:"hidden"}),b.css(v,{width:s,height:t,overflow:"hidden",position:"absolute"}),b.css(n,{cursor:"default"}),!a.UA.ie||(b.css(n,{cursor:"pointer"}),b.css(u,{cursor:"pointer"}));var A=u;if(!!d.gecko||!!q)v.appendChild(u),b.css(u,{position:"static",left:0,top:0}),A=v;return b.css(A,{left:-9999,top:-9999}),!this.zIndex||b.css(A,{"z-index":this.zIndex}),w.appendChild(A),document.body.appendChild(w),document.body.appendChild(x),g(u,"click",function(a){!j._uploading||a.halt();var b=j.fileDialogStartHandler();b===!1&&a.halt()}),g(u,"change",function(a){j.fileSelectedHandler(u.value,a)}),g(A,"mouseover",function(a){j.fire("mouseover")}),g(A,"mouseout",function(a){j.fire("mouseout")}),g(n,"mouseover",function(a){j.updateClickerPosOnHover&&j.setClickerPos(b.offset(n)),g(document,"mousemove",B)}),g(n,"mouseout",function(a){c.remove(document,"mousemove",B)}),g(n,"mouseenter",function(a){j._enabled&&b.show(A)}),g(A,"mouseleave",function(a){b.hide(A)}),x.onerror=function(){j.uploadErrorHandler()},this._form=w,this._frame=x,this._input=u,this._inputHolder=A,this},uploadCompleteHandler:function(a){this._uploading=!1,this.fire("uploadComplete",{data:a})},uploadStartHandler:function(a){this.fire("uploadStart",{data:a})},fileSelectedHandler:function(b,c){function e(b,c){var e=d.allowFileTypes,f=b.split(".").pop().toLowerCase(),g=!1;if(!e)return;e=e.split(";"),a.each(e,function(a){var b=a.split(".")[1].toLowerCase();f==b&&(g=!0)}),g?d.fire("fileSelected",{data:b}):(c.halt(),d.fileTypeErrorHandler())}var d=this;e(b,c)},uploadErrorHandler:function(a){this._uploading=!1,this.fire("uploadError",{data:a})},startUpload:function(){var a=this,b=h(this.url);e.tokenUpload(function(b){a._startUpload(b)},b)},_startUpload:function(a){if(!this._input.value)return;this._uploading=!0,this.uploadStartHandler(),this._form.tt.value=a,this._form.submit()},fileTypeErrorHandler:function(a){this.fire("fileTypeError",{data:a})},fileDialogStartHandler:function(){return this.fire("fileDialogStart")},getClickerPos:function(){return this.clickerPos},setClickerPos:function(a){if(!a)return;this.clickerPos=a},destory:function(){b.remove(this._frame),b.remove(this._form)},enable:function(){this._enabled=!0},disable:function(){this._enabled=!1,b.hide(this._inputHolder)}}),i},{requires:["dom","event","ua","util.$7202"]});