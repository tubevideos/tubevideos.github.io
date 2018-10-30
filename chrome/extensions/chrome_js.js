
// 添加history
(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        alert('123');
        return pushState.apply(history, arguments);
    }
})(window.history);
// 页面加载
$(window).ready(function(){
    modifyView();
});


/**
 *  修改view
 */
function modifyView(){
    header();
    var str = window.location.href;
    var arr = str.split("/");
    if(arr[4]==='detail'){// 详情页
        detailFooter();//其他页尾部添加
        button();//加button按钮
    } else {
        sidebar();//去除dom
        footer();//首页尾部添加
    }
}

/**
 * 修改导航栏
 */
function header() {
    // 判断header是否已经添加
    
	var title = $('.O-j-k>.O-j');
	if(title.length === 0){
		setTimeout("header()",1000);
	}else{
		$('.O-j>.O-j-p-J').remove();
		$('.O-j-gb>.A8AIPb>.PNF6le').html('Chrome插件网');
		$('.O-j-k>.O-j').append('<div id="my_navigate" style="float:right; width:638px;height:100%;margin-right:80px; flex-direction:row; display:inline-flex; justify-content:space-between; align-items:center;"><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6lea" style="font-size:16px;">首页</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6lea" style="font-size:16px;">分类</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6lea" style="font-size:16px;">推荐</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6lea" style="font-size:16px;">百科</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6lea" style="font-size:16px;">排行</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6lea" style="font-size:16px;">新闻中心</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6lea" style="font-size:16px;">关于我们</span></a></div></div>');
	}
    
}

/**
 * 修改侧边菜单
 */
function sidebar(){//去除dom
    var sidebar = $('.F-n-J>.HWJfBb');
    if(sidebar.length === 0){
        setTimeout("sidebar()",1000)
    }else{
        $('.HWJfBb>.gpx3nd').remove();
        $('.HWJfBb>.si3MDf').remove();//下条款
        $('.WrIA6d').next().remove();//下边线
    }
}

/**
 * 首页尾部添加
 */
function footer(){
    var footer = $('.F-ia-k');
    if(footer.length === 0){
        setTimeout("footer()",1000);
    }else{
        $('.F-ia-k').append('<div class="fusion-footer"><footer id="footer" class="fusion-footer-copyright-area" style="padding: 18px 10px 12px;border-top: 1px solid #4b4c4d;background: #282a2b;border-top: 1px solid #4b4c4d;"><div class="fusion-row" style="max-width: 1200px;padding-left: 0px;padding-right: 0px; margin: 0 auto;zoom: 1;"><div class="fusion-copyright-content"><div class="fusion-copyright-notice" style="padding-bottom: 0px;"><div style="color: #ffffff; font: 13px/20px PTSansRegular,Arial,Helvetica,sans-serif;font-weight: 400;">Copyright 2012 - 2018 Avada | All Rights Reserved | Powered by<a href="http://wordpress.org" style="color: #ffffff;text-decoration:none;">WordPress</a> |<a href="http://theme-fusion.com" style="color: #ffffff;text-decoration:none;">Theme Fusion</a></div></div></div></div></footer></div>');
    }
}

/**
 * 详情页尾部添加
 */
function detailFooter(){
    var footer = $('.e-f-ra-gj');
    if(footer.length === 0){
        setTimeout("detailFooter()",3000);
    }else{
        $('.e-f-ra-gj').after('<div class="fusion-footer"><footer id="footer" class="fusion-footer-copyright-area" style="padding: 18px 10px 12px;border-top: 1px solid #4b4c4d;background: #282a2b;border-top: 1px solid #4b4c4d;"><div class="fusion-row" style="max-width: 1200px;padding-left: 0px;padding-right: 0px; margin: 0 auto;zoom: 1;"><div class="fusion-copyright-content"><div class="fusion-copyright-notice" style="padding-bottom: 0px;"><div style="color: #ffffff; font: 13px/20px PTSansRegular,Arial,Helvetica,sans-serif;font-weight: 400;">Copyright 2012 - 2018 Avada | All Rights Reserved | Powered by<a href="http://wordpress.org" style="color: #ffffff;text-decoration:none;">WordPress</a> |<a href="http://theme-fusion.com" style="color: #ffffff;text-decoration:none;">Theme Fusion</a></div></div></div></div></footer></div>');
    }
}

/**
 * 安装按钮
 */
function button(){//button按钮
    var button = $('.h-e-f-Ra-c');
    if(button.length === 0){
        setTimeout("button()",1000);
    }else{
        $('.h-e-f-Ra-c').html('<div role="button" class="dd-Va g-c-wb g-eg-ua-Uc-c-za g-c g-c-Sc-ci" aria-label="Remove from Chrome" tabindex="0" style="user-select: none;"><div class="g-c-Hf"><div class="g-c-x"><div class="g-c-R  webstore-test-button-label">添加至 Chrome</div></div></div></div>');
        downloadAlert();
    }
}

/**
 * 下载提示
 */
function downloadAlert(){
    //获取URL 并且组合新URL
    var str = window.location.href;
    var of = str.lastIndexOf('/')+1;
    var len = str.length;
    var str1 = str.substring(of,len);
    var str2 = "https://clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0&x=id%3D<Extension_ID>%26installsource%3Dondemand%26uc";
    var str3 = str2.replace(/<Extension_ID>/,str1);

    //创建'a'标签
    var link = $('<a>',{
        id:'click-a',
        href:str3,
        title:"goto clients"
    });
    //用'a'包裹
    $('.h-e-f-Ra-c>.dd-Va').wrap(link);
    //提示框
    $('#click-a').click(function(e){
        var r=confirm("确认添加到chrome吗? ");
        if(r==true){
            return true;
        }else{
            return false;
        }
    });

    $("#click-a>.dd-Va").hover(
        function () {
            $(this).addClass("g-c-l");
        },
        function () {
            $(this).removeClass("g-c-l");
        }
    );
}
