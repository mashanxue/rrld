define("college:page/detail/detail.js",function(require,exports,module){var $=require("common:widget/lib/jquery/jquery"),detail={params:{id:null,type:null},init:function(id,type){this.params.id=id,this.params.type=type,this.handle()},handle:function(){var _this=this,praiseBtn=$("#praise-btn"),loveIcon=$("#icon-we-love");praiseBtn.hover(function(){loveIcon.toggleClass("icon-we-love").toggleClass("icon-we-love-empty")}),praiseBtn.on("click",function(){if(praiseBtn.hasClass("active"))return void _this.showToast("您已经点过赞啦！");var data={id:_this.params.id,type:_this.params.type};$.post("/college/column/addUpVote",data,function(res){res=JSON.parse(res),0==res.status?(praiseBtn.addClass("active"),_this.showToast("点赞成功！"),praiseBtn.unbind("mouseenter").unbind("mouseleave"),loveIcon.addClass("icon-we-love").removeClass("icon-we-love-empty")):_this.showToast(res.message)}).error(function(e){_this.showToast(e.message)})})},showToast:function(msg){$("#message").text(msg),setTimeout(function(){$("#message").text("")},1500)}};module.exports=detail});