qing.dom.ready(function(){var e=window.CmsYyInfo.bubble;if(!e.switchOn)return;var t=qing.g(e.elem);if(!t)return;try{var n=e.id,r=e.expires||720,i=qing.cookie,s=i.get("qing_bubble_id"),o=[];s&&(o=s.split(","));if(o&&qing.array.contains(o,qVisitorInfo.portrait+n))return;var u=112,a=baidu.dom.getPosition(t),f=a.left+parseInt(t.offsetWidth/2)-u-3,l=a.top+t.offsetHeight;t.offsetHeight<30&&(l+=15);var c=baidu.dom.create("div",{style:"box-shadow:2px 2px 4px #CCC;z-index:1023;position:fixed;_position:absolute; background:#FFFFDA; width:239px; border:1px solid #D1B07C; left:"+f+"px; top:"+l+"px"}),h=['<div style="width:12px;height:8px;overflow:hidden;position:relative;margin-top:-8px;left:'+u+'px;">','<div style="width:0;height:0;overflow:hidden;line-height:0;font-size:0;border-width:0 6px 7px 6px;border-color:transparent transparent #D1B07C transparent; border-style:none dashed solid dashed;">',"</div>",'<div style="width:0;height:0;overflow:hidden;line-height:0;font-size:0;position:relative;top:-5px;border-width:0 6px 7px 6px;border-color:transparent transparent #FFFFDA transparent; border-style:none dashed solid dashed;">',"</div>","</div>",'<div style="float:left;padding:15px 10px 0 10px">','<img src="'+e.icon+'"/>',"</div>",'<div style="float:left;width:171px; position:relative; line-height:20px; padding-top:13px;padding-bottom:5px;">','<span style="text-algin:left; color:#333; display:block;">'+e.content+"</span>",'<div style="text-align:right;"><a target="_blank" id="qing_cms_bubble_seemore_id" class="qing-stat-nsclick" style="color:#00C;" data-nsclick="m_20120905_qing_buble_click" href="'+e.linkUrl+'">'+e.linkTitle+"</a></div>","</div>",'<div id="qing_cms_bubble_close_id" class="qing-stat-nsclick" data-nsclick="m_20120905_qing_buble_close" style="position:absolute; cursor:pointer; top:3px; right:3px;background:url(http://img.baidu.com/hi/qing/tuiguang/bubble_close.png) no-repeat; width:9px; height:11px"></div>'];c.innerHTML=h.join(""),document.body.appendChild(c);function p(){qing.dom.hide(c),o.push(qVisitorInfo.portrait+n),i.set("qing_bubble_id",o.join(","),{expires:36e5*r,domain:"."+location.hostname,path:"/"})}qing.event.on("qing_cms_bubble_close_id","click",p),qing.event.on("qing_cms_bubble_seemore_id","click",p)}catch(d){}});