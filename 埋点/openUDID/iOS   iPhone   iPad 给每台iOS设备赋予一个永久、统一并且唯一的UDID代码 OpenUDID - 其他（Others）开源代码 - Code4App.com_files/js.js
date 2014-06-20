// JavaScript Document
if(!String.prototype.trim){ 
	String.prototype.trim = function(){ 
		return this.replace(/^\s+|\s+$/g, ''); 
	} 
} 
$(function (){
	
	$(window).scroll(function(){
		var nav = $('#sitenav');
		if($(this).scrollTop()>=120){
			nav.addClass('pf');	
		}else{
			nav.removeClass('pf');
		}
	});
	
	if (location.href.indexOf('snippets') != -1){
		start_set_height();
		$('#snippetaddform').submit(function (){
			if (!snippet_form_check('#snp-ct', '0', '请选择分类', false)){
				return false;
			}
			if (!snippet_form_check('#snp-t', '', '标题不能为空', true)){
				return false;
			}	
			if (!snippet_form_check('#snp-c', '', '代码片段不能为空', true)){
				return false;
			}
			return true;
		});
		$('#snippetoneaddform').submit(function (){
			if (!snippet_form_check('#snp-c', '', '代码片段不能为空', true)){
				return false;
			}
			return true;
		});
	}
	if (location.href.indexOf('requirement') != -1 || location.href.indexOf('snippets') != -1){
		$('.vote').click(function (e){
			var $this = $(this);
			var vote = $this.attr('vote'); 
			var oid = $this.parent().attr('oid');
			vote_object(e, vote, oid);
		});
	}
	
	$('#word').focus(function (){
		var t = '搜索代码';	
							   
		var w = $(this).val().trim();
		if (w == t){
			$(this).val('');
		}
	});	
	$('#word').blur(function (){
		var t = '搜索代码';	
							   
		var w = $(this).val().trim();
		if (w == ''){
			$(this).val(t);	
		}
	});	

	
	
	$('#header-top #more').click(function (){
		var ul=$('#header-top #moreul');
		if (ul.is(":hidden")){
			ul.show();
			$('#header-top #morespan').css({'border-color':'transparent transparent #644042  transparent','border-style':' dashed dashed solid dashed','border-width':'0 6px 6px 6px'});
		}else{
			ul.hide();	
			$('#header-top #morespan').css({'border-color':'#A28C8E transparent transparent transparent','border-style':'solid dashed dashed dashed','border-width':'6px 6px 0 6px'});
		}		
	});
	$('#header-top #more').mouseenter(function (){
		var ul=$('#header-top #moreul');
		if (ul.is(":hidden")){
			$('#header-top #morespan').css({'border-color':'#644042 transparent transparent transparent'});
		}
	});
	$('#header-top #more').mouseleave(function (){
		var ul=$('#header-top #moreul');
		if (ul.is(":hidden")){
			$('#header-top #morespan').css({'border-color':'#A28C8E transparent transparent transparent'});
		}
	});
	
	$('#downlink').mouseenter(function (){
		$(this).attr('target', '_blank');
		//$(this).attr('href', base_url+'down/'+code);
	});
	$('#downlink').mouseleave(function (){
		$(this).attr('href', location.href);									
	});
	
	$('#downlink').click(function (){
		//$(this).attr('target', '_blank');
		$(this).attr('href', base_url+'down/'+code+'/?id='+code_id);
	});
	
	$('#searchform').submit(function (){
		search_code();
		return false; 
	});
	
	$('#ubutton').click(function (){
		var ureqm = $('#ureqm').val();
		if (ureqm == ''){
			$('#ureqmtips').html('你的需求必需填写哦');
			return;
		}

		var sendemail = $('#sendemail').attr('checked') == 'checked';
		var email = $('#useremail').val();
		if (sendemail && email == ''){
			$('#ureqmtips').html('请输入邮箱');
			return;
		}

		$('#ubutton').hide();
		$('#ureqmtips').html('正在提交。。。');
		$('#ureqmtips').show();
		$.post(
			base_url+'saveupdate/requirement_save/?t='+Math.random(),
			{'reqm':ureqm, 'sendemail':sendemail?1:2, 'email':email},
			function (obj){
				if (obj.status){
					location.href = base_url+'requirement/'+obj.id;
				}else{
					$('#ureqmtips').html('失败'+obj.errno);	
				}
			},
			'json'
		);
	});
	
	
	
	$('#favbtn').click(function (){
		if (!is_login){
			alert('要先在左上角登录才能收藏哦');
			return;	
		}
		if (is_click){
			return;	
		}
		is_click = true;
		$('#favbtn').html('提交中...');
		var cid = $(this).attr('cid');
		$.post(
			base_url+'saveupdate/favourite/?t='+Math.random(),
			{'cid':cid,'type':is_fav?'del':'add'},
			function (obj){
				is_click = false;
				if (obj.status){
					$('#favbtn').html(is_fav?'加入收藏':'取消收藏');
					fav_num += is_fav?-1:1;
					$('#favnum').html(fav_num);	
					if (fav_num > 0){
						$('#favtips').show();
					}else if(fav_num == 0){
						$('#favtips').hide();	
					}
					is_fav = !is_fav;
				}
			},
			'json'
		);
	});
	
	$('#codelist .favbtn').click(function (){
		if (!is_login){
			alert('要先在左上角登录才能收藏哦');
			return;	
		}
		$t = $(this);
		var code_id = $t.attr('cid');
		if (is_click[code_id]){
			return;	
		}
		is_click[code_id] = true;
		$t.html('提交中...');
		var tp = $t.attr('tp');
		$.post(
			base_url+'saveupdate/favourite/?t='+Math.random(),
			{'cid':code_id,'type':tp},
			function (obj){
				is_click[code_id] = false;
				if (obj.status){
					var is_fav = (tp=='add');
					$t.html(is_fav?'取消收藏':'加入收藏');
					var $tips = $('#favbox'+code_id).find('.favtips');
					var fav_num = parseInt($tips.html());
					fav_num += is_fav?1:-1;
					$tips.html(fav_num);
					$t.attr('tp', is_fav?'del':'add');
					if (fav_num > 0){
						$tips.show();
					}else if(fav_num == 0){
						$tips.hide();
					}
				}
			},
			'json'
		);
	});
	
	$('#uploadsubmit').click(function (){

		var codefrom = $('#codefrom').val().trim()
		if (codefrom == 'fromlocal'){
			var file = $('#codefile').val().trim();
			if (file == ''){
				formtips('codefile', '请选择文件');
				return;
			}
			var filea = file.split('.');
			if (filea[filea.length-1] != 'zip'){
				formtips('codefile', '请先打包成 ZIP 文件');
				return;
			}
			formtips('codefile', '');
		}else if (codefrom == 'fromnet'){
			var url = $('#codeurl').val().trim();
			if (url == ''){
				formtips('codeurl', '请输入代码 URL');
				return;
			}
			if (!is_url(url)){
				formtips('codeurl', '请输入正确的代码 URL');
				return;	
			}
			formtips('codeurl', '');	
		}
		
		var name = $('#codename').val().trim();
		if (name == ''){
			formtips('codename', '请填写代码名称');
			return;
		}
		formtips('codename', '');
		
		var licence = $('#codelicence').val();
		if (licence == '0'){
			formtips('codelicence', '请选择一个许可级别');
			return;	
		}
		formtips('codelicence', '');
		
		var desc = $('#codedescription').val().trim();
		if (desc == ''){
			formtips('codedescription', '请填写代码描述');
			return;
		}
		formtips('codedescription', '');

		
		var email = $('#useremail').val().trim();
		if (email == ''){
			formtips('useremail', '请输入联系邮箱，用于接收审核反馈');
			return;
		}
		formtips('useremail', '');
		
		$(this).hide();
		$('#submittips').show();
		$('#uploadform').submit();
	});
	
	$('#sharesubmit').click(function (){
		var url = $('#codeurl').val().trim();
		if (url == ''){
			formtips('codeurl', '请输入代码 URL');
			return;
		}
		if (!is_url(url)){
			formtips('codeurl', '请输入正确的代码 URL');
			return;	
		}
		formtips('codeurl', '');
		
		var desc = $('#codedescription').val().trim();
		if (desc == ''){
			formtips('codedescription', '请填写推荐理由');
			return;
		}
		formtips('codedescription', '');
		$(this).hide();
		$('#submittips').show();
		$('#shareform').submit();
	});
	
	$('#newprojectsubmit').click(function (){
		var name = $('#name').val().trim();
		if (name == ''){
			formtips('name', '此项内容必须填写哦');
			return;
		}
		formtips('name', '');
		var url = $('#url').val().trim();
		if (url == ''){
			formtips('url', '此项内容必须填写哦');
			return;
		}
		formtips('url', '');
		var chargeof = $(".cof:checked").val();
		if (chargeof == null){
			formtips('chargeof', '请选择');
			return;
		}
		formtips('chargeof', '');
		var desc = $('#desc').val().trim();
		if (desc == ''){
			formtips('desc', '此项内容必须填写哦');
			return;
		}
		formtips('desc', '');
		$.post(
			base_url+'saveupdate/project_save',
			{'name':name, 'url':url, 'desc':desc, 'chargeof':chargeof},
			function (obj){
				if (obj.status){
					//alert('添加成功');
					location.href=base_url+'member/'+obj.uid;	
				}else{
					alert('对不起，添加失败，原因是：'+obj.msg);	
				}
			},
			'json'
		);
	});
	
	$('.oneuploadtab').click(function (){
		var id = $(this).attr('id');
		$('.oneuploadtab').css({'background-color':'#EEE'});
		$(this).css({'background-color':'#FFF'});
		
		$('.frombox').hide();
		$('#'+id+'box').show();
		
		$('#codefrom').val(id);
	});
	
	$('#favcodecate .favcate').click(function (){
		var $t = $(this);
		var c = $t.attr('c');
		var pc = $t.parent().attr('c');
		if (c == pc){
			$t.parent().attr('c', '0');	
			$t.parent().find('.favcate').removeClass('curr');
			$('.onecode').show();
		}else{
			$t.parent().attr('c', c);	
			$t.parent().find('.favcate').removeClass('curr');
			$t.addClass('curr');
			$('.onecode').hide();
			$('.codecate'+c).show();
		}
	});
});

function snippet_form_check(id, ck, tips, is_trim){
	var v = $(id).val();
	if (is_trim){
		v = v.trim();
	}
	if (v == ck){
		$(id+'-tips').html('*'+tips);
		return false;
	}
	$(id+'-tips').html('√');	
	return true;
}

function is_url(str_url){
	return true;
}

function formtips(id, tips){
	$('#'+id+'tips').html(tips);		
}

function search_code(){
	var keyword = $('#word').val().trim();
	if (keyword == ''){
		return;	
	}
	if (keyword == '搜索代码'){
		$('#word').val('');
		return;
	}
	location.href=base_url+"search/"+keyword;	
}

function start_set_height(){
	var sydiv = $('.syntaxhighlighter');
	if (sydiv.length == 0){
		setTimeout(start_set_height, 100);
	}
	$('.syntaxhighlighter').each(function (obj){
		var line = parseInt($(this).parent().parent().attr('line'));
		$(this).height(line*14+12);
		if ($(this).find('table').width() > 738){
			$(this).height(line*14+28);	
		}
	});
}

function vote_object(e, vote, oid){
			e.preventDefault();
			if (!is_login){
				alert('要先在左上角登录才能投票哦');
				return;	
			}
			
			if (user_vote[oid] == vote){
				return;
			}
			$.post(
				'saveupdate/vote/?t='+Math.random(),
				{'oid':oid, 'v':vote},
				function (obj){
					if (obj.status){
						var pb = vote == 1 ? 'p' : 'b';
						var $thumbs = $('#thumbs'+oid);
						var $vote = $thumbs.find('.vote');
						$vote.removeClass('currp');
						$vote.removeClass('currb');
						$thumbs.find('.'+pb).addClass('curr'+pb);
						
						vote_list[oid][vote] ++;
						if (user_vote[oid] != 0 && vote_list[oid][vote * -1] > 0){
							vote_list[oid][vote * -1] --;
						}
					
						$thumbs.find('.p').find('em').html(vote_list[oid]['1']);
						$thumbs.find('.b').find('em').html(vote_list[oid]['-1']);
						user_vote[oid] = vote;
					}else{
						alert(obj.errno);
					}
				},
				'json'
			);	
}