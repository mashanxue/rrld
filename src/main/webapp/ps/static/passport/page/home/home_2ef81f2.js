define("passport:page/home/home.js",function(require,exports,module){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var $=require("common:widget/lib/jquery/jquery"),LoginRegister=require("passport:widget/code-login/login-register/login-register"),PasswordLogin=require("passport:widget/code-login/password-login/password-login"),Login=function(){function Login(){_classCallCheck(this,Login),this.num=0,this.time=""}return Login.prototype.setStaticData=function(key,value){this[key]=value},Login.prototype.getStaticData=function(key){return this[key]},Login.prototype.init=function(params){var _this=this,geetestData=params.geetestData,isBorrower=params.isBorrower;PasswordLogin.init(),LoginRegister.init(geetestData,isBorrower),$(".forget-password").on("click","span",this.tab),$(".login-carousel li").length>1&&!function(){var time=setInterval(function(){_this.setTimer()},5e3);_this.setStaticData("time",time);var that=_this;$(".login-index .spot span").on("click",function(){that.clickSwitch(this,that)})}()},Login.prototype.tab=function tab(){var tab=$(this).attr("tab"),oneTab=$("#form-login"),twoTab=$("#form-reg");2==tab?(oneTab.hide(),twoTab.show()):(oneTab.show(),twoTab.hide())},Login.prototype.setTimer=function(){var num=this.getStaticData("num"),total=$(".login-index .login-carousel li").length;$(".login-index .login-carousel li").eq(num).fadeOut(600),$(".login-index .spot span").eq(num).removeClass("active"),num++,num>=total&&(num=0),$(".login-index .login-carousel li").eq(num).fadeIn(600),$(".login-index .spot span").eq(num).addClass("active"),this.setStaticData("num",num)},Login.prototype.clickSwitch=function(e){var _this2=this,index=$(e).index(),time=this.getStaticData("time");clearInterval(time),$(".login-index .spot span").eq(index).siblings("span").attr("class",""),$(".login-index .spot span").eq(index).attr("class","active"),$(".login-index .login-carousel li").eq(index).fadeIn(600),$(".login-index .login-carousel li").eq(index).siblings("li").fadeOut(600),this.setStaticData("num",index),clearInterval(time),this.setStaticData("time",setInterval(function(){_this2.setTimer()},5e3))},Login}(),login=new Login;module.exports=login});