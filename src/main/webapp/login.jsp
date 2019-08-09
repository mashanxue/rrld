﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <script>
            window._jHeadStart = ( new Date() ).getTime();
            window.tplConf = {
                user : {
                    userId : 'null'
                },
                pageKey : '',
                autoPV : true,
                autoIdentify : true,
                we_renrendai_host: 'https://www.renrendai.com',
                _isWeCom: 'false',
                target: '_self',
                isProduction : true,
                pbId : ''
            };
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <meta name="renderer" content="webkit">
        <meta name="google-site-verification" content="oQXrGa_mTgxg7joO0himE0QuFeqOVmm-SDC1H2dzT4c">
        <meta name="baidu-site-verification" content="wibJopuIuI">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        
<meta name="keywords" content="">
<meta name="description" content="">

<title>登录/注册 - 人人贷官网</title>



        <link rel="shortcut icon" type="image/x-icon" href="ps\static\common\static\img\favicon-rrd.ico">
        <link rel="stylesheet" type="text/css" href="ps\static\common\static\css\base_02fd8b5.css">

        
        



        
        <script type="text/javascript">
            (function(){
                var userAgent = navigator.userAgent.toLowerCase();
                if(userAgent.match(/rv:([\d.]+)\) like gecko/) || userAgent.match(/msie ([\d.]+)/) ){
                    document.write('<script src="//www.renrendai.com/cms/5864b0d6a24d131067ef7956/js/babel-polyfill.js"><\/script>');
                }
            })();
        </script>

        
        <script type="text/javascript" src="//s.union.360.cn/181814.js" async="" defer=""></script>

        
        
        

        
        

        
        
        <script type='text/javascript'>
    !function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");

    gio('init', 'bf0acacc0a738790', {});
    gio('setUserId', tplConf.user.userId);
    gio('send');

</script>
        

        
    <link rel="stylesheet" href="ps\static\pkg\common_wdg_5724504.css"><link rel="stylesheet" href="ps\static\pkg\common_nm_2a02658.css"><link rel="stylesheet" href="ps\static\pkg\passport_wdg_4bd8b6e.css"><link rel="stylesheet" href="ps\static\passport\page\home\home_425674e.css"></head>

    <body>

        <!--[if lt IE 9]>
        <div style='border: 4px solid #FFF500; background: #FDFDC8; text-align: center; clear: both; height: 75px; position: fixed; z-index:999999999; right: 2px; bottom: 2px; left: 2px; padding:0 8px;'>
            <div style='position: absolute; right: 3px; top: 3px; font-weight: bold;z-index:999999999'><a href='#' onclick='javascript:this.parentNode.parentNode.style.display="none"; return false;'>关闭</a></div>
            <div style='width: 740px; margin: 0 auto; text-align: left; padding: 0; overflow: hidden; color: black;'>
                <div style='width: 675px; float: left;'>
                    <div style='font-size: 16px; font-weight: bold; margin-top: 12px;'>您使用的是已经过时的IE浏览器</div>
                    <div style='font-size: 13px; margin-top: 6px; line-height: 16px;'>为了让您在人人贷有最佳的使用体验，请升级到 <a href="http://windows.microsoft.com/en-US/internet-explorer/download-ie">最新版本IE浏览器</a>, 或者使用其他高级浏览器如 <a href="https://www.google.com/intl/en/chrome/browser/">Chrome(谷歌浏览器)</a> 或 <a href="http://www.mozilla.org/en-US/firefox/new">Firefox(火狐浏览器)</a></div>
                </div>
            </div>
        </div>
        <![endif]-->

        
        <img style="display: none;" src="/jsid">

        

<div class="wdg-second-header-lg">
    <div class="main-section">

        
        <a href="index-1.htm?wpFromPos=registerLogo" class="brand-logo mt15 rrd-log-img">
            <img src="ps\static\common\widget\second-header-lg\assets\rrd_logo@2x_deea0ef.png" alt="logo人人贷官方网站">
        </a>
        

    </div>
</div>



        <div class="main-content">

            
<div class="login-index" data-risk-dialog="false">

    <div class="car-center">
        <div class="spot">
            
        </div>
        <div class="data-show ">
            <div id="form-login" class="form-login show">
                <div class="login-register">
    <div class="borrower-change">
        <span>登录/注册</span>

    </div>
    <ul>
        <li>
            <input class="mobile" autocomplete="off" type="text" placeholder="手机号" maxlength="48" name="username" id="reg_username">

            <div class="error-info mobile-error"></div>
        </li>
        <li class="image_code_show">
            <input class="code" autocomplete="off" name="type" id="reg_RandCode" type="text" placeholder="图形验证码">
            <div class="error-info code-error"></div>
            <a href="javascript:void(0)" class="rand-code"><img id="reg-rand-image" align="absmiddle" name="randImage" alt="验证码"></a>
        </li>
        <li class="last-li">
            <input class="mobile_code" autocomplete="off" name="mobileCode" id="reg_verif" type="text" placeholder="验证码">
            <span class="verification is_validate">获取验证码</span>
            <div class="error-info last-error"></div>
        </li>
    </ul>
    <input type="hidden" id="regRegisterSource" name="registerSource" value="">
    <input type="hidden" id="regId" name="id" value="">
    <input type="hidden" id="regPromotion" name="promotion" value="">
    <input type="hidden" id="regInviteCode" name="inviteCode" value="">
    <input type="hidden" id="intention" name="intention" value="">

    <input type="hidden" id="regTargetUrl" name="regTargetUrl" value="">
    <input type="hidden" id="regReturnUrl" name="regReturnUrl" value="">
    <div class="button-submit">

        <button>确定</button>
    </div>
    <div class="forget-password lend-login">
        <div class="borrower-entrance">
            <div class="text">我是出借人 </div>
            <img src="ps\static\passport\widget\code-login\login-register\assets\change_0f76ab6.png">
        </div>
        <span tab="2" class="tab-password" style="display:block">密码登录</span>
    </div>
    <div class="reg-agree">
        <label for="rememberme"><span class="agree">登录注册即表明您已阅读并同意<a href="agreement\contract\currency\name\user.jsp" target="_blank">《人人贷注册服务协议》</a><a href="agreement\contract\currency\name\user-1.jsp" target="_blank">《人人贷隐私权政策》</a></span></label>
    </div>
</div>
            </div>
            <div id="form-reg" class="form-reg ">
                <div class="password-login">
    <h2>密码登录</h2>
    <ul>
        <li>
            
            <input class="mobile" type="text" placeholder="手机号/邮箱" maxlength="48" onkeydown="if (this.value.length>=48 ){event.returnValue=false}" name="username" id="login_username" data-is="isMobileOrEmail" autocomplete="off">
            

            <div class="error-info mobile-error"></div>
        </li>
        <li class="rand_code_show input-hide">
            <input class="code" autocomplete="off" name="type" id="captcha_code" type="text" placeholder="图形验证码">
            <div class="error-info code-error"></div>
            <a href="javascript:void(0)" class="rand-code"><img id="login-rand-image" align="absmiddle" src="passport\index\captcha.png" name="randImage" alt="验证码"></a>
        </li>
        <li class="last-li">
            <input class="login-passwd" autocomplete="off" id="J_pass_input" placeholder="密码" type="password" name='j_password' data-is="isEmail">
            <div class="error-info password-error last-error"></div>
        </li>
    </ul>
    <input type="hidden" id="targetUrl" name="targetUrl" value="">
    <input type="hidden" id="returnUrl" name="returnUrl" value="">
    <div class="button-block">

        <button>立即登录</button>
    </div>
    <div class="forget-password">
        <a href="user\findpwd\index.jsp">忘记密码?</a>
        <span tab="1">验证码登录/注册</span>
    </div>
    <div class="reg-agree">
        <label for="rememberme"><span class="agree">登录注册即表明您已阅读并同意<a href="agreement\contract\currency\name\user.jsp" target="_blank">《人人贷注册服务协议》</a><a href="agreement\contract\currency\name\user-1.jsp" target="_blank">《人人贷隐私权政策》</a></span></label>
    </div>
</div>



<script id="email-suggest-template" type="text/x-handlebars-template">
    <ul>
        {{#if remove}}
            <li>{{inputs}}</li>
        {{/if}}
        {{#each lists}}
            <li>{{email}}</li>
        {{/each}}
    </ul>
</script>


            </div>
        </div>
    </div>
    <ul class="login-carousel">

        
        <li>
            <span><img src="cms\5864b0d6a24d131067ef7956\PM\WechatIMG144.jpg" alt="登录的轮播图"></span>
        </li>
        
    </ul>
</div>


        </div>

        
<div class="login-footer">
    <ul class="lg-footer-ul">
        
        
        <li><span>© 2019 人人贷 All rights reserved</span><i></i></li>
        <li><span>人人贷商务顾问(北京)有限公司</span><i></i></li>
        
        
        <li><span>京公网安备11010502020657</span><i></i></li>
        
        
        <li><span>京ICP备12025643号-1</span><i></i></li>
        <li><span>网贷有风险，出借需谨慎<em> 按扣费后年利率计算的利息不代表对实际获得利息的承诺，风险自担</em></span></li>
        
    </ul>
    <!--<div class="login-company">北京微财科技有限公司</div>-->
</div>


        
        




        
        

        <script>
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?a00f46563afb7c779eef47b5de48fcde";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();

            
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://s0.renrendai.com/cms/5864b0d6a24d131067ef7956/js/analytics.js','ga');
            ga('create', 'UA-93150356-1', 'auto');
            ga('send', 'pageview');
        </script>

        
         
            <script src="https://s0.renrendai.com/cms/5864b0d6a24d131067ef7956/zhiJS/entrance.js?sysNum=1ddfe481da8b42d3926162e5c439595c" class="zhiCustomBtn" id="zhichiScript" data-args="manual=true"></script>
         
         <script>
            
            (function(){
             //初始化智齿咨询组件实例
                var zhiManager = (getzhiSDKInstance());
                //再调用load方法
                zhiManager.on("load", function() {
                    zhiManager.initBtnDOM();
                });
                zhiManager.set('powered',false);
                zhiManager.set('customBtn', 'true');
                zhiManager.set('robotFlag', '2');
                //指定技能组
                if(window.tplConf.isProduction){
                    //线上环境
                    zhiManager.set('transferAction','[{"actionType":"to_group","deciId":"3393553ec69a48cabb87a8fd17d61343","optionId":3,"spillId":4},{"actionType":"to_group","deciId":"8c9fa1aeb52f4fcb8be2e35607fc6c7f","spillId":4}]');
                }else{
                    //测试环境
                    zhiManager.set('transferAction','[{"actionType":"to_group","deciId":"983eea0476cc479392c4175c7b86418b","optionId":3,"spillId":4},{"actionType":"to_group","deciId":"41152a5772b149a1a9b1fedf1306c66d","spillId":4}]');
                }

                //对接身份
                
            })();
        </script>
    <script type="text/javascript" src="ps\static\common\static\js\mod_f76e019.js"></script><script type="text/javascript" src="ps\static\pkg\common_nm_bbfb324.js"></script><script type="text/javascript" src="ps\static\pkg\common_wdg_6fdbabe.js"></script><script type="text/javascript" src="ps\static\pkg\passport_wdg_7c76278.js"></script><script type="text/javascript" src="ps\static\passport\page\home\home_2ef81f2.js"></script><script type="text/javascript" src="ps\static\common\page\layout_c0258d7.js"></script><script type="text/javascript">!function() {
            require(["common:page/layout.js"] , function(app){
                
                app.initUtmOperate();
            });
        }();
!function() {
var we = '\u0022\u0022';
var geetestData = '{\u0022success\u0022:1,\u0022challenge\u0022:\u0022db0e1a720835d0bf01d0a0bcab3fa30d\u0022,\u0022gt\u0022:\u0022f3057dc232c6a8993a9900dcd2997d9c\u0022,\u0022new_captcha\u0022:true}';
var isGeetest = '\u0022\u0022';
var isBorrower = '\u0022\u0022';

we= JSON.parse(we);
geetestData = JSON.parse(geetestData);
isGeetest = JSON.parse(isGeetest);
isBorrower = JSON.parse(isBorrower);

require(["passport:page/home/home.js"] , function(app){
app.init({
geetestData : geetestData,
we:we,
isBorrower : isBorrower
});
});
}();</script></body>

</html>
