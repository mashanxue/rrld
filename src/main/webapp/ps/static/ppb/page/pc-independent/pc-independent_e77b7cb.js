define("ppb:page/pc-independent/pc-independent.js",function(require,exports,module){"use strict";var $=require("common:widget/lib/jquery/jquery"),utils=require("common:widget/ui/utils/utils"),PageCtrl=require("ppb:widget/ui/page-ctrl/page-ctrl"),log=require("ppb:widget/ui/log/log"),singleton=(require("common:widget/lib/gt/gt"),{init:function(args){var components=utils.parseJSON(args.components),pageStyle=utils.parseJSON(args.pageStyle);if(window.geetestData=args.geetestData||{},components){var page=new PageCtrl({components:components,style:pageStyle,el:"#pb-page-root"});page.render(),$(window).load(function(){log.init()})}}});module.exports=singleton});