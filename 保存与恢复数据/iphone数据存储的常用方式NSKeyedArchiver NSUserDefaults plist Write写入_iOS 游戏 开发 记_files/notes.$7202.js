KISSY.add("lib/notes",function(a,b,c,d,e,f,g,h,i){function B(){h.init(".notes"),C(),c.add(window,"resize",C);var b=ENV.PAGE_VARS.startTab,d,f;b=="comments"?(d="3",f=q):(d="1,2,3,4",f=p),e.get(l,{postId:ENV.PAGE_VARS.postId,sPostId:ENV.PAGE_VARS.sPostId,count:f,types:d,t:(new Date).getTime()},function(b){b.canComment==-1?b.canComment=v=1:v=b.canComment,w=b.canComment=="-1",u=s[b.postType],a.mix(y,a.EventTarget),y.on("view::notes",D),y.on("view::comments",D),E(b)}),c.on(ENV,"Comment::ReplyUnlock",function(){v=1}),c.on(ENV,"Comment::ReplyLock",function(){v=-1})}function C(){var a=b.get(".publisher"),c=b.get("textarea",a);b.css(c,"width",b.width(a)-104)}function D(a){var c=a.type,d={tabWrap:".tabs",notesBtn:"#tabBtnNotes",commentsBtn:"#tabBtnComments",notesCt:"#notesList",commentsCt:"#commentsList"};b.show(d.tabWrap),c==="view::notes"?(b.removeClass(d.commentsBtn,"current"),b.addClass(d.notesBtn,"current"),b.hide(d.commentsCt),b.show(d.notesCt),Z("notes",!0)):c==="view::comments"&&(b.removeClass(d.notesBtn,"current"),b.addClass(d.commentsBtn,"current"),b.hide(d.notesCt),b.show(d.commentsCt),Z("comments",!0))}function E(a){var d=ENV.PAGE_VARS.startTab;X(a),F(a),d=="notes"?H(a):d=="comments"&&W(a),c.add("#tabBtnComments","click",function(a){var c=a.target;b.hasClass(c,"current")||y.fire("view::comments")}),c.add("#tabBtnNotes","click",function(a){var c=a.target;b.hasClass(c,"current")||y.fire("view::notes")})}function F(a){b.append(b.create(r.tabs.render(a)),k)}function G(){}function H(a){a.postTypeName=u,b.append(b.create(r.notesList.render(a)),k),V();var d=b.get("#notesList");c.add(d,"click",K),c.delegate(d,"mouseenter",".item-container",I),c.delegate(d,"mouseleave",".item-container",J),y.fire("view::notes")}function I(a){var c=a.currentTarget,d=b.get(".cmd-block",c),e=b.get(".cmd-report",c);b.show(d),b.show(e)}function J(a){var c=a.currentTarget,d=b.get(".cmd-block",c),e=b.get(".cmd-report",c);b.hide(d),b.hide(e)}function K(a){var c=a.target;if(b.hasClass(c,"cmd-reply"))M(c);else if(b.hasClass(c,"cmd-delete"))L(c);else if(b.hasClass(c,"cmd-block"))Q(c);else if(b.hasClass(c,"cmd-report"))R(c);else if(c.id=="moreNotes")Z("notes");else if(c.id=="moreComments")Z("comments");else if(c.tagName.toLowerCase()=="a"&&b.attr(c,"href")!="")b.attr(c,"target","_blank");else if(b.hasClass(c,"comment-photo-hook")||b.hasClass(c,"notes-photo-hook")){var d=b.parent(c,".photo");b.hasClass(d,"on")?b.removeClass(d,"on"):b.addClass(d,"on");var e=c.src,f=b.attr(c,"toggle");b.attr(c,"toggle",e),c.src=f,b.hasClass(c,"comment-photo-hook")?U():V()}}function L(c){if(!confirm("\u786e\u8ba4\u5220\u9664\u8fd9\u6761\u56de\u5e94\u5417\uff1f"))return;var d=b.parent(c,".item-container"),f=b.attr(d,"data-id");e({url:o,type:"post",data:{feed_id:ENV.PAGE_VARS.postId,comment_id:f,formKey:window.DDformKey},success:function(b){b.errCode==0?a.Anim(d,"opacity:0",.3,"linearTween",function(){d.parentNode.removeChild(d),d=null,P(-1)}).run():alert(b.result)}})}function M(a){if(!ENV.diandianLogin&&!ENV.connectLogin){window.open(d.url.host+"/register");return}var c=b.parent(a,".item-container"),e=b.attr(c,"data-toBlogName"),f=b.attr(c,"data-toUserId"),g=h.get("pubComment"),i=g.main,j=r.atPrefix.render({name:e}),k=j.length;t={id:f,name:e},g.setValue(j),i.focus();if(i.setSelectionRange)i.setSelectionRange(k,k);else if(i.createTextRange){var l=i.createTextRange();l.collapse(!0),l.moveEnd("character",k),l.moveStart("character",k),l.select()}}function N(){function p(){d.setContent(k),d.setDisabled(!1)}if(!ENV.diandianLogin&&!ENV.connectLogin){b.show("#not-login-msg");return}b.hide("#not-login-msg");var c=h.get("pubComment"),d=h.get("pubSubmit"),f=a.trim(c.getValue()),g=z&&z.getValue(),i,j={},k=d.getContent();if(d.isDisabled===!0||f===""&&!g)return!1;d.setDisabled(!0),d.setContent("\u53d1\u5e03\u4e2d");if(!a.isEmptyObject(t)){i=r.atPrefix.render({name:t.name});if(f==i&&!g){alert("\u8bf7\u8f93\u5165\u56de\u5e94\u5185\u5bb9"),p();return}if(f.indexOf(i)===0){f=f.replace(i,"");var l='{"'+a.escapeHTML(t.name)+'":"'+t.id+'"}';Number(t.id)?j.at=l:j.atUuid=l}}j.content=f,j.feed_id=ENV.PAGE_VARS.postId,z&&z.getValue()&&(j.imageId=z.getValue()),!x.submitCode||(j.icode=x.submitCode);var o=b.get("#register-third-to");o&&o.style.display!="none"&&b.get(A).checked&&(j.syncComment=!0),j.formKey=window.DDformKey,e({url:ENV.diandianLogin?m:n,data:j,type:"post",success:function(a){if(!!a.icode){O();return}if(a.errCode==0){var d=b.get("#commentsList"),e={postTypeName:u,canComment:v,notes:[a],hasNext:!1};c.setValue(),z.setValue(),h.get("pubComment").resetAutoGrow(),d?ab(e):(W(e),P(1),b.removeClass("#tabBtnNotes","current"),b.addClass("#tabBtnComments","current")),!x.dialog||x.dialog.destory(),x={}}else alert(a.result)},complete:function(){p()}})}function O(){!x.dialog||(x.dialog.destory(),x.dialog=null);var a=new d.Dialog({zIndex:101}),e='<div><img src="http://www.diandian.com/icode/comment?rnd='+(new Date).getTime()+'" style="float:left;cursor:pointer;" title="\u770b\u4e0d\u6e05\u695a?\u70b9\u51fb\u5237\u65b0\u9a8c\u8bc1\u7801" id="comment-icode-image">'+'<input type="text" class="simple-input-text" id="comment-icode-input" style="float:left;height:35px;margin-left:5px;width:100px;font-size:24px;">'+"</div>",f='<span class="blue-button" id="comment-icode-submit" style="clear:both;float:right;">\u53d1\u5e03</span>';a.setSize({width:300}),a.setTitle("\u8bf7\u5411\u6211\u4eec\u8bc1\u660e\u4f60\u662f\u4e2a\u597d\u4eba~"),a.setContentHtml(e),a.setFooterHtml(f),a.show(),a.setPosition("center"),a.setPosition({top:20}),c.on("#comment-icode-submit","click",function(){x.submitCode=b.get("#comment-icode-input").value,a.hide(),N()}),c.on("#comment-icode-image","click",function(){b.get("#comment-icode-image").src="http://www.diandian.com/icode/comment?rnd="+(new Date).getTime()}),x.dialog=a}function P(a){var c=b.get("#tabBtnNotes"),d=b.get("#tabBtnComments"),e=parseInt(b.attr(c,"data-count"),10),f=parseInt(b.attr(d,"data-count"),10);e+=a,f+=a,b.attr(c,"data-count",e),b.attr(d,"data-count",f),c.innerHTML="\u70ed\u5ea6 ("+e+")",d.innerHTML="\u56de\u5e94 ("+f+")",e<1&&f<1?(b.hide(c),b.hide(d),b.removeClass(c,"current"),b.removeClass(d,"current"),b.hide("#notesList"),b.hide("#commentsList"),b.hide(".tabs")):e>0&&f<1?(b.hide(d),b.removeClass(d,"current"),b.addClass(c,"current"),b.show(c),b.hide("#commentsList"),b.get("#notesList")?b.show("#notesList"):Z("notes",!0),b.show(".tabs"),y.fire("view:notes")):(b.show(c),b.show(d),b.show(".tabs"),b.removeClass(".tabs","notab"))}function Q(c){var e=b.parent(c,".item-container"),f=b.attr(e,"data-toUserId");if(!confirm("\u786e\u5b9a\u8981\u5c06\u8be5\u7528\u6237\u52a0\u5165\u5230\u9ed1\u540d\u5355\u5417\uff1f"))return;d.block.addById(f,function(){a.Anim(e,"opacity:0",.3,"linearTween",function(){e.parentNode.removeChild(e),e=null}).run()})}function R(a){var c=b.parent(a,".item-container"),e=b.attr(c,"data-toBlogUrl"),f=b.attr(c,"data-toUserId"),g=b.attr(c,"data-toBlogName");if(!confirm("\u786e\u5b9a\u8981\u4e3e\u62a5\u8be5\u7528\u6237\u5417\uff1f"))return;d.block.report({userId:f,postId:ENV.PAGE_VARS.postId,type:1},function(){alert("\u4e3e\u62a5\u6210\u529f")})}function S(b){return a.each(b,function(a){a.comment==="&nbsp;"&&(a.comment="")}),b}function T(c){var d=b.width(".publisher")-38,e=b.get(c);a.each(b.query(".photo",e),function(a){var c=b.get("img",a),e=c.src.match(/_(\d+)_(\d+)\.([^.]+?)$/),f,g,h=b.hasClass(a,"on"),i,j=h?d:d/3;e&&(g=Math.min(e[1],j),f=g/e[1]*e[2],h?i=f:i=Math.min(f,250)),b.css(a,{width:g,display:"block"}),b.css(b.get(".photo-i",a),{width:g,height:i}),b.css(c,{width:g,height:f})})}function U(){T("#commentsList")}function V(){T("#notesList")}function W(a){a.notes=S(a.notes),b.append(b.create(r.commentsList.render(a)),k);var d=b.get("#commentsList");U(),c.add(window,"resize",U),c.add(d,"click",K),c.delegate(d,"mouseenter",".item-container",I),c.delegate(d,"mouseleave",".item-container",J),y.fire("view::comments")}function X(a){b.append(b.create(r.publisher.render()),k),h.init(".publisher"),z=new i("#photo-reply"),C(),c.add(window,"resize",C);var d=h.get("pubComment"),e=h.get("pubSubmit"),f;a.canComment==2?(f=a.sevenDayLimit?"\u8be5\u535a\u5ba2\u8bbe\u7f6e\u4e86\u60a8\u53ea\u6709\u5173\u6ce8\u5927\u4e8e7\u5929\u4ee5\u4e0a\u624d\u53ef\u4ee5\u56de\u5e94":"\u8be5\u535a\u5ba2\u5173\u95ed\u4e86\u56de\u5e94\u529f\u80fd",d.setValue(f),d.setDisabled(!0),e.setDisabled(!0)):(d.on("ctrlenter",N),e.on("click",N))}function Y(a,d){var e=b.parent(d,".register-input");c.add(d,"click",function(b){a.main.focus()}),a.on("focus",function(){b.hide(d),b.addClass(e,"register-input-focus")}),a.on("blur",function(){a.getValue()==""&&b.show(d),b.removeClass(e,"register-input-focus")})}function Z(a,c){var d=b.get(a=="notes"?"#notesList":"#commentsList"),f=!!d,g,h,i,j;if(f&&c)return;f&&(h=b.query(".item-container",d),h.length>0&&(j=h[h.length-1],i=b.attr(j,"data-id"))),g={postId:ENV.PAGE_VARS.postId,sPostId:ENV.PAGE_VARS.sPostId,count:a=="notes"?p:q,types:a=="notes"?"1,2,3,4":"3",t:(new Date).getTime()},i&&(g.lastNoteId=i),e.get(l,g,function(b){a=="notes"?f?$(b,j):H(b):f?_(b,j):W(b)})}function $(a,c){a.hasNext||(a.hasNext=!1),a.postTypeName=u;var d=b.create(r.notesList.render(a)),e=b.query(".item-container",d);c?b.insertAfter(e,c):b.prepend(e,"#notesList"),a.hasNext||b.remove("#moreNotes"),y.fire("view::notes")}function _(a,c){a.hasNext||(a.hasNext=!1),a.notes=S(a.notes);var d=b.create(r.commentsList.render(a)),e=b.query(".item-container",d);c?b.insertAfter(e,c):b.prepend(e,"#commentsList"),a.hasNext||b.remove("#moreComments"),y.fire("view::comments")}function ab(c){c.notes=S(c.notes);var d=b.create(r.commentsList.render(c)),e=b.get(".item-container",d),f=b.get("#commentsList");b.css(e,{opacity:0}),b.prepend(e,f),U(),P(1),y.fire("view::comments"),a.Anim(e,"opacity:1",.3,"linearTween",function(){y.fire("view::comments")}).run()}function cb(a){if(!b.get(j))return;if(!ENV.PAGE_VARS.urlDomain)return;typeof a=="undefined"&&(a=b.height(j));if(a==bb)return;bb=a;var c=ENV.PAGE_VARS.iframeId||"diandian_comments",d=b.create('<iframe class="diandian-comment-height-proxy-iframe" style="padding:0;margin:0;" width="0" height="0" frameborder="0" src="http://'+ENV.PAGE_VARS.urlDomain+"/commentHeightProxy.html?v=2#height="+a+"|iframe_id="+c+'">');document.body.appendChild(d)}var j=b.get("#wrapper"),k=b.get("#container"),l="/notes",m="/comment",n="/unloginedComment",o="/comment/remove",p=100,q=100,r={publisher:f(b.get("#tplPublisher").innerHTML),tabs:f(b.get("#tplTabs").innerHTML),notesList:f(b.get("#tplNotesList").innerHTML),commentsList:f(b.get("#tplCommentsList").innerHTML),atPrefix:f("\u56de\u5e94 {{name}}\uff1a")},s={text:"\u6587\u5b57",photo:"\u56fe\u7247",audio:"\u58f0\u97f3",video:"\u5f71\u50cf",link:"\u94fe\u63a5","-1":"\u6587\u7ae0"},t={},u,v,w,x={},y={},z,A="#register-third-sync",bb=0;return setInterval(function(){cb()},1),{init:B}},{requires:["dom","event","util.$7202","ajax","template","cookie","sky.$6939","lib/photo-reply.$7202"]});