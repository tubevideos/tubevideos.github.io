
$(document).ready(function(){
   SIDEBAR();
   BUG();
   HEARD();
})
   
 function HEARD(){
    var title = $('.O-j-k>.O-j');
    if(title.length === 0){
        setTimeout("HEARD()",3000);
    }else{
       $('.O-j-k>.O-j').html('<div class="O-j-gb"><a class="A8AIPb" href="/webstore/category/extensions"><div class="uKSMob"><svg width="100%" height="100%" viewBox="0 0 192 192"><defs><path id="a" d="M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z"></path></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"></use></clipPath><path clip-path="url(#b)" fill="#eee" d="M8 20h176v152H8z"></path><path fill="#fff" d="M116 36H76c-4.42 0-8 3.58-8 8s3.58 8 8 8h40c4.42 0 8-3.58 8-8s-3.58-8-8-8z" clip-path="url(#b)"></path><g clip-path="url(#b)"><defs><circle id="c" cx="96" cy="160" r="76"></circle></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"></use></clipPath><path d="M32.07 84v93.27h34.01L96 125.45h76V84zm0 0v93.27h34.01L96 125.45h76V84z" clip-path="url(#d)" fill="#DB4437"></path><path d="M20 236h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24zm0 0h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24z" clip-path="url(#d)" fill="#0F9D58"></path><path d="M96 125.45l29.92 51.82L92.35 236H172V125.45zm0 0l29.92 51.82L92.35 236H172V125.45z" clip-path="url(#d)" fill="#FFCD40"></path><g clip-path="url(#d)"><circle fill="#F1F1F1" cx="96" cy="160" r="34.55"></circle><circle fill="#4285F4" cx="96" cy="160" r="27.64"></circle></g></g><path clip-path="url(#b)" fill="#212121" fill-opacity=".05" d="M8 20h176v76H8z"></path><path fill="#212121" fill-opacity=".02" d="M8 95h176v1H8z"></path><path fill="#fff" fill-opacity=".05" d="M8 96h176v1H8z"></path><path fill="#212121" fill-opacity=".02" d="M116 52H76c-4.25 0-7.72-3.32-7.97-7.5-.02.17-.03.33-.03.5 0 4.42 3.58 8 8 8h40c4.42 0 8-3.58 8-8 0-.17-.01-.33-.03-.5-.25 4.18-3.72 7.5-7.97 7.5zM8 20v1h176v-1H8z"></path><path fill="#231F20" fill-opacity=".1" d="M76 36h40c4.25 0 7.72 3.32 7.97 7.5.01-.17.03-.33.03-.5 0-4.42-3.58-8-8-8H76c-4.42 0-8 3.58-8 8 0 .17.01.33.03.5.25-4.18 3.72-7.5 7.97-7.5zm96 135H20c-6.6 0-12-5.4-12-12v1c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12v-1c0 6.6-5.4 12-12 12z"></path><radialGradient id="e" cx="7.502" cy="19.344" r="227.596" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".1"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></radialGradient><path fill="url(#e)" d="M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z"></path><path fill="none" d="M0 0h192v192H0z"></path></svg></div><span class="PNF6le">123</span></a></div><div style="width:638px;height:100%;margin-right:80px; flex-direction:row; display:inline-flex; justify-content:space-between; align-items:center;"><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6le" style="font-size:16px;">首页</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6le" style="font-size:16px;">分类</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6le" style="font-size:16px;">推荐</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#"><span class="PNF6le" style="font-size:16px;">百科</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6le" style="font-size:16px;">排行</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6le" style="font-size:16px;">新闻中心</span></a></div><div class="O-j-gb"><a class="A8AIPb" href="#" ><span class="PNF6le" style="font-size:16px;">关于我们</span></a></div></div>');
    }
     
 }
 
  function SIDEBAR(){
 	var sidebar = $('.F-n-J>.HWJfBb');
 	if(sidebar.length === 0){
 		setTimeout("SIDEBAR()",3000)
 	}else{
 		$('.HWJfBb>.gpx3nd').remove();
 		$('.HWJfBb>.si3MDf').remove();
 	}
 }

function BUG(){
    var tmp = $('.h-e-f-Ra-c');
    var str = window.location.href;
	var arr = str.split("/");
	if(arr[4]==='detail'){
		if(tmp.length === 0 ){
			 setTimeout("BUG()",3000);
		}else{
			 BUTTON();
			 URL();
		}
	}
}
function BUTTON(){
   $('.h-e-f-Ra-c').html('<div role="button" class="dd-Va g-c-wb g-eg-ua-Uc-c-za g-c g-c-Sc-ci" aria-label="Remove from Chrome" tabindex="0" style="user-select: none;"><div class="g-c-Hf"><div class="g-c-x"><div class="g-c-R  webstore-test-button-label">添加至 Chrome</div></div></div></div>')
}

function URL(){
//获取URL 并且组合新URL
  var str = window.location.href; 
  var of = str.lastIndexOf('/')+1;
  var len = str.length;
  var str1 = str.substring(of,len)
 // console.log(str1);
  var str2 = "https://clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0&x=id%3D<Extension_ID>%26installsource%3Dondemand%26uc"; 
  var str3 = str2.replace(/<Extension_ID>/,str1);
  //console.log(str3);
  
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
	})
	
$("#click-a>.dd-Va").hover(
  function () {
  $(this).addClass("g-c-l");
 },
  function () {
   $(this).removeClass("g-c-l");
 }
);
}





