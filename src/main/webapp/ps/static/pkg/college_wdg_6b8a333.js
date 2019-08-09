;/*!/client/widget/column/wdg-pagination/wdg-pagination.js*/
define("college:widget/column/wdg-pagination/wdg-pagination.js",function(require,exports,module){"use strict";function jumpToPage(start){var num=Number($("#pageNum").val()),path=location.pathname,parameter=utils.query2json(location.search);return parameter.num=num,parameter.start=start,parameter.id&&delete parameter.id,path+"?"+utils.json2query(parameter)}function intoPage(last_page,page_id,step,pagesDefault){last_page=parseInt(last_page),page_id=parseInt(page_id),step=parseInt(step)||1;var tpl="",threshold=step+2,pre=page_id-step,next=page_id+step;if(pagesDefault=parseInt(pagesDefault)>2*threshold-1?2*threshold-1:5,1==page_id?tpl+='<li class="previous disable"><a>上一页</a></li>':page_id>1&&last_page>1&&(tpl+='<li class="previous"><a href="'+jumpToPage(pre)+'">上一页</a></li>'),pagesDefault>=last_page)for(var i=1;last_page>=i;i++)tpl+=i==page_id?'<li class="active"><a>'+i+"</a></li>":'<li><a href="'+jumpToPage(i)+'">'+i+"</a></li>";else if(threshold>=page_id){for(var i=1;next>=i;i++)tpl+=i==page_id?'<li class="active"><a>'+i+"</a></li>":'<li><a href="'+jumpToPage(i)+'">'+i+"</a></li>";last_page-1>=next&&(tpl+='<li class="break">\n                            <span class="ellipse">...</span>\n                        </li>'),next!=last_page&&(tpl+=last_page==page_id?'<li class="active"><a>'+last_page+"</a></li>":'<li><a href="'+jumpToPage(last_page)+'">'+last_page+"</a></li>")}else if(page_id>last_page-threshold){1!=pre&&(tpl+=1==page_id?'<li class="active"><a>1</a></li>':'<li><a href="'+jumpToPage(1)+'">1</a></li>'),pre>=2&&(tpl+='<li class="break">\n                            <span class="ellipse">...</span>\n                        </li>');for(var i=pre;last_page>=i;i++)tpl+=i==page_id?'<li class="active"><a>'+i+"</a></li>":'<li><a href="'+jumpToPage(i)+'">'+i+"</a></li>"}else{tpl+='<li><a href="'+jumpToPage(1)+'">1</a></li>\n                    <li>...</li>\n                    ';for(var i=pre;next>=i;i++)tpl+=i==page_id?'<li class="active"><a>'+i+"</a></li>":'<li><a href="'+jumpToPage(i)+'">'+i+"</a></li>";tpl+='<li class="break">\n                            <span class="ellipse">...</span>\n                    </li>\n                    <li><a href="'+jumpToPage(last_page)+'">'+last_page+"</a></li>\n                    "}return page_id==last_page?tpl+='<li class="next disable"><a>下一页</a></li>':last_page>1&&last_page>page_id&&(tpl+='<li class="next"><a href="'+jumpToPage(next)+'">下一页</a></li>'),tpl}var $=require("common:widget/lib/jquery/jquery"),utils=require("common:widget/ui/utils/utils");module.exports=function(){var start=$("#currentPage").val(),total=$("#totalPage").val(),page=intoPage(total,start);$(".pagination").html(page)}});
;/*!/client/widget/column/wdg-sort-nav/wdg-sort-nav.js*/
define("college:widget/column/wdg-sort-nav/wdg-sort-nav.js",function(require,exports,module){"use strict";var $=require("common:widget/lib/jquery/jquery"),utils=require("common:widget/ui/utils/utils");module.exports=function(){var path=location.pathname,parameter=utils.query2json(location.search);$("li",".wdg-sort-nav").on("click",function(){var sortBy=$(this).attr("sortBy"),order=""==$(this).attr("order")||"desc"==$(this).attr("order")?"asc":"desc";parameter.sortBy=sortBy,parameter.order=order,location.href=path+"?"+utils.json2query(parameter)})}});
;/*!/client/widget/column/wdg-wiki-list/wdg-wiki-list.js*/
define("college:widget/column/wdg-wiki-list/wdg-wiki-list.js",function(require,exports,module){"use strict";var $=require("common:widget/lib/jquery/jquery");module.exports=function(){$("dt",".wdg-wiki-list").on("click",function(){var that=$(this);if($(this).next("dd").find(".content").is(":hidden")){$(this).next("dd").find(".content").show();var id=that.data("id");$.ajax({url:"/college/column/addWikiPV",type:"POST",data:{id:id},success:function(data){var result=JSON.parse(data);if(0==result.status){var pv=Number(that.next("dd").find(".pv").text());that.next("dd").find(".pv").text(pv+1)}}})}}),$(".content-up",".wdg-wiki-list").on("click",function(){$(this).parent().parent().hide()}),$(".heart",".wdg-wiki-list").on("click",function(){var that=$(this),id=$(this).data("id"),vote=Number($(this).next().text());$(this).hasClass("active")||$.ajax({url:"/college/column/addUpVote",type:"POST",data:{id:id,type:"wiki"},success:function(data){var result=JSON.parse(data);0==result.status&&(that.addClass("active"),that.next().text(vote+1))}})})}});
;/*!/client/widget/index/wdg-index-banner/wdg-index-banner.js*/
define("college:widget/index/wdg-index-banner/wdg-index-banner.js",function(require,exports,module){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var $=require("common:widget/lib/jquery/jquery");module.exports=function(){var J2SETTIME="",J2Time=!0,Banner=function(){function Banner(){_classCallCheck(this,Banner)}return Banner.prototype.init=function(){this.start(),this.time()},Banner.prototype.st=function(o){J2Time&&this.animate(o.findObject,o.main,o.className,o.duration,o.pagSource,o.on)},Banner.prototype.animate=function(T,M,C,S,P,O){J2Time=!1;var _prevDown=O?P.parent().find("*[class='"+C+"']"):T.parent().find(T[0].tagName+"[class='"+C+"']"),_prevIndex=_prevDown.index(),_thisIndex=O?"next"==T.attr("class")?_prevIndex+1:_prevIndex-1:T.index(),_list=M.find(".item"),p2n=1;_prevDown.removeClass(C),O?(-1==_thisIndex&&(_thisIndex=_list.size()-1),_thisIndex==_list.size()&&(_thisIndex=0),P.eq(_thisIndex).addClass(C)):T.addClass(C),("prev"==T.attr("class")||_prevIndex>_thisIndex)&&(p2n=!1),("next"==T.attr("class")||_thisIndex>_prevIndex)&&"prev"!=T.attr("class")&&(p2n=!0),p2n?"":_list.eq(_thisIndex).css("left",-M.width()),_list.eq(_prevIndex).css({left:p2n?-M.width():M.width()}),_list.eq(_prevIndex).removeAttr("style"),_list.eq(_thisIndex).css({left:"0px"}),J2Time=!0},Banner.prototype.start=function(){var that=this;$("#section-focus-pic div[data-scro='controler'] b,#section-focus-pic div[data-scro='controler2'] a").mouseover(function(){window.clearInterval(J2SETTIME)}).mouseout(function(){that.time()})},Banner.prototype.time=function(){J2SETTIME=window.setInterval(function(){var num=$("#section-focus-pic div[data-scro='controler'] b[class='down']").index(),_list=$("#section-focus-pic div[data-scro='list'] li");_list.eq(num).css({left:-$("#section-focus-pic div[data-scro='list']").width()}),_list.eq(num).removeAttr("style"),num++,num==_list.size()&&(num=0),$("#section-focus-pic div[data-scro='controler'] b").removeClass("down").eq(num).addClass("down"),_list.eq(num).css({left:"0px"})},5e3)},Banner}();return Banner}});