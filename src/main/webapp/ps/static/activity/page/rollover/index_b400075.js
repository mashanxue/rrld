define("activity:page/rollover/index.js",function(require,exports,module){function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var Rule=require("activity:widget/rollover/rollover_rule/rollover_rule"),RolloverPremiumList=require("activity:widget/rollover/rollover_premium_list/rollover_premium_list"),Rollover=function(){function Rollover(){_classCallCheck(this,Rollover)}return Rollover.prototype.init=function(){Rule.init(),RolloverPremiumList.init()},Rollover}();module.exports=new Rollover});