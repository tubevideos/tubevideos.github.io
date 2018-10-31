var validityPeriod = 600000; // 有效期，毫秒
//回退按钮
window.onpopstate = function(event) {
	modifyView(document.location, new Date().getTime())
};

//pushState保存状态进行URL修改
(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        modifyView(arguments[2], new Date().getTime());
        return pushState.apply(history, arguments);
    }
})(window.history);

// 页面加载
$(window).ready(function(){
    modifyView(window.location.href, new Date().getTime());
});

/**
 *  修改view
 */
function modifyView(str, time){
    addHeader(time);
    var arr = str.split("/");
    if(arr[4]==='detail'){// 详情页
        addButton(time);//加button按钮
        addDetailFooter(time);//尾部添加
    } else {
        modifySidebar(time);//去除dom
        addFooter(time);//尾部添加
    }
}

/**
 * 修改导航栏
 */
function addHeader(time) {
    //判断导航是否已经加载出来
    var currentTime = new Date().getTime();
    if($('#my_navigate').length ===0 && currentTime <= time + validityPeriod){ // 未添加导航,并且在有效期内
        var title = $('.O-j-k>.O-j');
        if(title.length === 0){
            setTimeout(function (){addHeader(time)}, 500);
        }else{
            $('.O-j>.O-j-p-J').remove();
            $('.O-j-gb>.A8AIPb>.PNF6le').html('Chrome插件网');
            $('.O-j-k>.O-j').append('<div id="my_navigate" style="float:right; width:638px;height:100%;margin-right:80px; flex-direction:row; display:inline-flex; justify-content:space-between; align-items:center;"><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6lea" style="font-size:16px; color: #5f6368;">首页</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6lea" style="font-size:16px; color:#5f6368;">分类</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6lea" style="font-size:16px; color:#5f6368;">推荐</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6lea" style="font-size:16px; color:#5f6368;">百科</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6lea" style="font-size:16px; color:#5f6368;">排行</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6lea" style="font-size:16px; color:#5f6368;">新闻中心</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6lea" style="font-size:16px; color:#5f6368;">关于我们</span></a></div></div>');
            headerHover();
        }
    }
}

/**
 * 为title导航添加鼠标悬乎效果
 */
function headerHover(){
    $(".O-j-gb>.A8AIPb>.PNF6lea").hover(
        function () {
            $(this).css("color","#1a73e8");
        },
        function () {
            $(this).css("color","#5f6368");
        }
    );
}

/**
 * 修改侧边菜单
 */
function modifySidebar(time){
    // 判断sidebar是否已经修改
    var currentTime = new Date().getTime();
    if($('#my_sidebar').length === 0 && currentTime <= time + validityPeriod){//未修改,并且在有效期内
        var sidebar = $('.F-n-J>.HWJfBb');
        if(sidebar.length === 0){
            setTimeout(function(){modifySidebar(time)} , 500)
        }else{
            $('.HWJfBb>.gpx3nd').remove();
            $('.HWJfBb>.si3MDf').remove();//下条款
            $('.WrIA6d').next().remove();//下边线
            sidebar.append('<div id = "my_sidebar"></div>')
        }
    }

}

/**
 * 尾部添加
 */
function addFooter(time){
    // 判断尾部是否已经添加
    var currentTime = new Date().getTime();
    if($('#my_footer').length ===0 && currentTime <= time + validityPeriod){// 未添加
        var footer = $('.F-ia-k');
        if(footer.length === 0){
            setTimeout(function (){addFooter(time)},500);
        }else{
            $('.F-ia-k').append('<div id="my_footer" class="fusion-footer"><footer id="footer" class="fusion-footer-copyright-area" style="padding: 18px 10px 12px;border-top: 1px solid #4b4c4d;background: #282a2b;border-top: 1px solid #4b4c4d;"><div class="fusion-row" style="max-width: 1200px;padding-left: 0px;padding-right: 0px; margin: 0 auto;zoom: 1;"><div class="fusion-copyright-content"><div class="fusion-copyright-notice" style="padding-bottom: 0px;"><div style="color: #ffffff; font: 13px/20px PTSansRegular,Arial,Helvetica,sans-serif;font-weight: 400;">Copyright 2012 - 2018 Avada | All Rights Reserved | Powered by<a href="http://wordpress.org" style="color: #ffffff;text-decoration:none;">WordPress</a> |<a href="http://theme-fusion.com" style="color: #ffffff;text-decoration:none;">Theme Fusion</a></div></div></div></div></footer></div>');
        }
    }
}


/**
 * 详情页尾部添加
 */
function addDetailFooter(time){
    // 判断尾部是否已经添加
    var currentTime = new Date().getTime();
    if($('#my_detail_footer').length === 0 && currentTime <= time + validityPeriod){// 未添加
        var footer = $('.e-f-ra-gj');
        if(footer.length === 0){
            setTimeout(function (){addDetailFooter(time)}, 3000);
        }else{
            $('.e-f-ra-gj').after('<div id="my_detail_footer" class="fusion-footer"><footer id="footer" class="fusion-footer-copyright-area" style="padding: 18px 10px 12px;border-top: 1px solid #4b4c4d;background: #282a2b;border-top: 1px solid #4b4c4d;"><div class="fusion-row" style="max-width: 1200px;padding-left: 0px;padding-right: 0px; margin: 0 auto;zoom: 1;"><div class="fusion-copyright-content"><div class="fusion-copyright-notice" style="padding-bottom: 0px;"><div style="color: #ffffff; font: 13px/20px PTSansRegular,Arial,Helvetica,sans-serif;font-weight: 400;">Copyright 2012 - 2018 Avada | All Rights Reserved | Powered by<a href="http://wordpress.org" style="color: #ffffff;text-decoration:none;">WordPress</a> |<a href="http://theme-fusion.com" style="color: #ffffff;text-decoration:none;">Theme Fusion</a></div></div></div></div></footer></div>');
        }
    }
}

/**
 * 安装按钮
 */
function addButton(time){
    //判断button是否添加
    var currentTime = new Date().getTime();
    if($('#my_button').length === 0 && currentTime <= time + validityPeriod) {
        var button = $('.h-e-f-Ra-c');
        if(button.length === 0){
            setTimeout(function (){addButton(time)}, 500);
        }else{
            $('.h-e-f-Ra-c').html('<div id="my_button" role="button" class="dd-Va g-c-wb g-eg-ua-Uc-c-za g-c g-c-Sc-ci" aria-label="Remove from Chrome" tabindex="0" style="user-select: none;"><div class="g-c-Hf"><div class="g-c-x"><div class="g-c-R  webstore-test-button-label">添加至 Chrome</div></div></div></div>');
            downloadAlert();
        }
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
