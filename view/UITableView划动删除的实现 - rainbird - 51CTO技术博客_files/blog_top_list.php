
var start = 1;

var _html = '<div class="blogpopMain"><div class="l">'
          + '<a href="http://blog.51cto.com/zt/643" target="_blank"><img src="http://s3.51cto.com/wyfs02/M01/37/01/wKioL1Or5VaRYPLoAAAyheLQ8Y4668.jpg" width="105" height="105" /></a>'
          + '<p><a href="http://blog.51cto.com/zt/643" target="_blank">由浅入深学SQL Server 2012</a></p></div>'
          + '<div class="r"><h4 style="text-align:left;"><a href="http://edu.51cto.com/course/courseList/id-all-field-toll-isLecturer-0-difficulty-all.html" target="_blank">51CTO学院1周年，全场课程5折</a></h4>'
          + '<ul>'
          + '<li><a href="http://edu.51cto.com/pack/view/id-41.html" target="_blank">优惠套餐：王勇带你零基础学大数据</a></li>'
          + '<li><a href="http://edu.51cto.com/pack/view/id-38.html" target="_blank"style="color:red;">优惠套餐：“老段带你学鸟哥Linux</a></li>'
          + '<li><a href="http://edu.51cto.com/member/id-2.html" target="_blank">买韩立刚会员，送学习码+下载VIP</a></li>'
          + '<li><a href="http://edu.51cto.com/pack/view/id-52.html" target="_blank"style="color:red;">优惠套餐：高老师项目管理系列课程</a></li>'
          + '</ul>'
          + '</div></div>'
          + '';

jQuery('#showMessagerDim').show();

jQuery(function(){
//window.onload=function(){
   if(get_cookie('blog_top')==''&&start==1){
//	 show_pop();
	    jQuery.messager.showblogtop('', _html);
        var date=new Date();
	    var day = 1404144000000;//
	    date.setTime(day);
	    var test = date.getTime();
	    document.cookie="blog_top=yes;domain=.blog.51cto.com;expires="+date.toGMTString()+";path=/;";
    }
	jQuery("#showMessagerDim").click(function(){
		jQuery.messager.showblogtop('', _html);
		//removeIframe();
	});
//}
});


function get_cookie(Name) {
    var search = Name + "=";
    var returnvalue = "";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;

            end1 = document.cookie.indexOf(";", offset);

            if (end1 == -1)
            end1 = document.cookie.length;
            returnvalue=unescape(document.cookie.substring(offset, end1));
        }
    }
    return returnvalue;
}

