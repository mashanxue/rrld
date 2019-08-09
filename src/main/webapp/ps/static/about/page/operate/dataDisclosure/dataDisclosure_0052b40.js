define("about:page/operate/dataDisclosure/dataDisclosure.js",function(require,exports,module){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var $=require("common:widget/lib/jquery/jquery"),React=require("common:node_modules/react/react"),ReactDOM=require("common:node_modules/react-dom/index"),RWETooltip=require("common:widget/react-ui/RWETooltip/RWETooltip"),DataReveal=($(".masking"),function(){function DataReveal(){_classCallCheck(this,DataReveal)}return DataReveal.prototype.init=function(){this.bindEvent()},DataReveal.prototype.bindEvent=function(){var tooltip={id:"register-count-tooltip",place:"right",tip:"包含借款人注册人数和出借人注册人数",delayHide:100};ReactDOM.render(React.createElement(RWETooltip,tooltip),document.getElementById("register-count-tooltip"));var borrowerTip={id:"borrower-info-tooltip",place:"right",tip:"按出借用户授权自动投标服务、出借散标或受让债权的行为进行统计",delayHide:100};ReactDOM.render(React.createElement(RWETooltip,borrowerTip),document.getElementById("borrower-info-tooltip"));var loanCityTip={id:"loaner-city-tooltip",place:"right",tip:"按借款用户申请借款所在地区进行统计",delayHide:100};ReactDOM.render(React.createElement(RWETooltip,loanCityTip),document.getElementById("loaner-city-tooltip"));var dataTip={id:"data-disclosure-tooltip",place:"right",tip:"逾期金额包含借款人逾期但出借人已收到代偿的情况",delayHide:100};ReactDOM.render(React.createElement(RWETooltip,dataTip),document.getElementById("data-disclosure-tooltip"))},DataReveal}());module.exports=new DataReveal});