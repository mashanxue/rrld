define("autoinvest:page/product/detail/detail.js",function(require,exports,module){"use strict";var $=require("common:widget/lib/jquery/jquery"),tabSelect=require("autoinvest:widget/product/detail/tab/tab"),inputFocus=require("autoinvest:widget/product/detail/status/status"),React=require("common:node_modules/react/react"),ReactDOM=require("common:node_modules/react-dom/index"),numeral=require("common:node_modules/numeral/numeral"),RWETooltip=require("common:widget/react-ui/RWETooltip/RWETooltip"),autoinvestPayWindow=require("autoinvest:widget/product/detail/pay-popup/pay-popup"),RiskDialog=require("autoinvest:widget/product/detail/risk-dialog/risk-dialog"),bankLayer=require("common:widget/ui/bankLayer/bankLayer"),InvestDialog=require("common:widget/ui/investDialog/investDialog"),service=require("common:widget/ui/service/service-factory"),p2pService=service.getService("p2p");module.exports={init:function(data,riskInfo,nodePayInfo,riskTipsData){tabSelect.init(data),inputFocus.init(riskTipsData),this.renderTooltip(),this.bindEvent(riskInfo),this.riskInfo=riskInfo,this.nodePayInfo=nodePayInfo},renderRiskDialog:function(dialogData){ReactDOM.render(React.createElement(RiskDialog,dialogData),document.getElementById("risk-dialog"))},renderTooltip:function(){var tooltipProps={id:"product-autoinvest-tooltip-rate",place:"right",tip:" 按扣费后年利率计算的利息不代表对实际获得利息的承诺",delayHide:100},tooltip={id:"product-autoinvest-tooltip-invest",place:"right",tip:"加入时确定，后续月份不可修改",delayHide:100};ReactDOM.render(React.createElement(RWETooltip,tooltipProps),document.getElementById("product-autoinvest-tooltip-rate")),ReactDOM.render(React.createElement(RWETooltip,tooltip),document.getElementById("product-autoinvest-tooltip-invest"))},bindEvent:function(riskInfo){var _this=this;$("#autoinvest-product-buy-amount").on("keyup",function(e){_this.checkInput(e)}),$("#autoinvest-product-buy").on("click",function(e){if(!_this.checkInput(e))return!1;if("null"==window.tplConf.user.userId)return window.location.href="/login",!1;if(!$(this).data("create-account"))return bankLayer.init({showCloseBtn:!1}),bankLayer.show(),!1;var switcher=!1;$.ajax({url:"/autoinvest/product/riskSwitchStatus",type:"post",dataType:"json",async:!1,success:function(res){0===res.status&&(switcher=res.data.display)},timeout:2e3}),switcher?new InvestDialog({type:"RISK",id:"risk",submitCallback:function(){_this.riskInfoDialog(e,riskInfo)}}).show():_this.riskInfoDialog(e,riskInfo)})},riskInfoDialog:function(e,riskInfo){var _this=this,riskFlag=riskInfo.riskFlag,isRisk=riskInfo.isRisk;riskFlag?!function(){var dataSource=$(".autoinvest-product .status-wrap"),autoinvestId=dataSource.data("autoinvest-id");if(isRisk){var amount=$("#autoinvest-product-buy-amount").val();amount=12*parseFloat(amount||0),p2pService.checkRiskLimit({amount:amount}).then(function(result){var data=result.data||{},status=data.status;if(0===status)_this.lendAutoinvest(e);else if(80029==status){var dialog={showRiskCommonDialog:!0,showRiskCommonDialogType:2,showRiskCommonDialogResult:data.data,autoinvestId:autoinvestId};_this.renderRiskDialog(dialog)}else if(80030==status){var dialog={showRiskCommonDialog:!0,showRiskCommonDialogType:3,showRiskCommonDialogResult:data.data,autoinvestId:autoinvestId};_this.renderRiskDialog(dialog)}else if(80007===status||80025===status){var dialog={showRiskCommonDialog:!0,showRiskCommonDialogType:1,autoinvestId:autoinvestId};_this.renderRiskDialog(dialog)}else{var dialog={showRiskCommonDialog:!0,showRiskCommonDialogType:-1,autoinvestId:autoinvestId};_this.renderRiskDialog(dialog)}})["catch"](function(){var dialog={showRiskCommonDialog:!0,showRiskCommonDialogType:-1,autoinvestId:autoinvestId};_this.renderRiskDialog(dialog)})}else{var dialog={showRiskCommonDialog:!0,showRiskCommonDialogType:1,autoinvestId:autoinvestId};_this.renderRiskDialog(dialog)}}():_this.lendAutoinvest(e)},lendAutoinvest:function(e){var _this=this;if(_this.checkInput(e)&&$(this).data("continue-join")){var dataSource=$(".autoinvest-product .status-wrap");return new autoinvestPayWindow({type:"INFO",data:{nickname:dataSource.data("nickname"),day:dataSource.data("invest-day"),count:dataSource.data("count")},submitCallback:function(){_this.alertPayModal("autoinvest-continue-pay")}}).show(),!1}_this.checkInput(e)&&_this.alertPayModal()},paySubmitCallback:function(data){var couponId=data.couponId,autoInvestPlanId=$(".autoinvest-product .status-wrap").data("autoinvest-id"),amountStr=data.amount,form=$("<form></form>");form.attr("action","/autoinvest/product/autoinvestProductBuy"),form.attr("method","post"),form.attr("target","_self");var iptCouponId=$('<input type="text" name="couponId" />'),iptAutoInvestPlanId=$('<input type="text" name="autoInvestPlanId" />'),iptAmountStr=$('<input type="text" name="amountStr" />');iptCouponId.attr("value",couponId),iptAutoInvestPlanId.attr("value",autoInvestPlanId),iptAmountStr.attr("value",amountStr),form.append(iptCouponId),form.append(iptAutoInvestPlanId),form.append(iptAmountStr),$(document.body).append(form),form.submit()},alertPayModal:function(id){var _this=this,buyBtn=$("#autoinvest-product-buy"),amount=$("#autoinvest-product-buy-amount").val(),period=buyBtn.data("lock-period"),rate=buyBtn.data("rate"),investDay=buyBtn.data("invest-day"),name=buyBtn.data("autoinvest-name"),dueAccountMoney=buyBtn.data("account-money"),autoinvestId=$(".autoinvest-product .status-wrap").data("autoinvest-id"),payWindow=new autoinvestPayWindow({type:"PAY",data:{name:name,amount:amount,period:period,rate:rate,investDay:investDay,dueAccountMoney:dueAccountMoney,autoinvestId:autoinvestId,riskInfo:_this.riskInfo,nodePayInfo:_this.nodePayInfo},id:id,submitCallback:_this.paySubmitCallback});payWindow.show()},showInputTip:function(msg){var tip=$("#autoinvest-product-input-tip");tip.html(msg),tip.show()},checkInput:function(e){var input=$("#autoinvest-product-buy-amount"),joinBtn=$("#autoinvest-product-buy"),val=input.val(),min=input.data("min"),max=input.data("max");min=parseInt(min.toString().replace(/,/g,"")),max=parseInt(max.toString().replace(/,/g,""));var increment=input.data("increment-money");if(!val)return"keyup"==e.type?($("#autoinvest-product-input-tip").hide(),input.css({borderColor:"#ebebeb"}),joinBtn.removeClass("disabled")):(this.showInputTip("您最少购买"+numeral(min).format(",")+"元"),input.css({borderColor:"#FF721F"}),joinBtn.addClass("disabled")),!1;if(val.indexOf(" ")>=0||isNaN(val))return this.showInputTip("请输入正确的金额"),input.css({borderColor:"#FF721F"}),joinBtn.addClass("disabled"),!1;if(0>val&&input.val(Math.abs(val)),min>val)return this.showInputTip("您最少购买"+numeral(min).format(",")+"元"),input.css({borderColor:"#FF721F"}),joinBtn.addClass("disabled"),!1;if(val>max)return this.showInputTip("您最多只能购买"+numeral(max).format(",")+"元"),input.css({borderColor:"#FF721F"}),joinBtn.addClass("disabled"),!1;if(min==increment){if(val%increment!=0)return this.showInputTip("输入金额需为"+numeral(increment).format(",")+"元的整数倍"),input.css({borderColor:"#FF721F"}),joinBtn.addClass("disabled"),!1}else if((val-min)%increment!=0)return this.showInputTip("递增金额需为"+numeral(increment).format(",")+"元的整数倍"),input.css({borderColor:"#FF721F"}),joinBtn.addClass("disabled"),!1;return $("#autoinvest-product-input-tip").hide(),input.css({borderColor:"#ebebeb"}),joinBtn.removeClass("disabled"),!0}}});