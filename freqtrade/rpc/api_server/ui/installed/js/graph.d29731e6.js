(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["graph"],{1276:function(e,t,a){"use strict";var i=a("2ba4"),r=a("c65b"),n=a("e330"),o=a("d784"),c=a("44e7"),s=a("825a"),l=a("1d80"),u=a("4840"),d=a("8aa5"),b=a("50c4"),f=a("577e"),m=a("dc4a"),p=a("f36a"),v=a("14c3"),h=a("9263"),g=a("9f7f"),y=a("d039"),O=g.UNSUPPORTED_Y,j=4294967295,x=Math.min,T=[].push,w=n(/./.exec),C=n(T),k=n("".slice),S=!y((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));o("split",(function(e,t,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var n=f(l(this)),o=void 0===a?j:a>>>0;if(0===o)return[];if(void 0===e)return[n];if(!c(e))return r(t,n,e,o);var s,u,d,b=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,g=new RegExp(e.source,m+"g");while(s=r(h,g,n)){if(u=g.lastIndex,u>v&&(C(b,k(n,v,s.index)),s.length>1&&s.index<n.length&&i(T,b,p(s,1)),d=s[0].length,v=u,b.length>=o))break;g.lastIndex===s.index&&g.lastIndex++}return v===n.length?!d&&w(g,"")||C(b,""):C(b,k(n,v)),b.length>o?p(b,0,o):b}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:r(t,this,e,a)}:t,[function(t,a){var i=l(this),o=void 0==t?void 0:m(t,e);return o?r(o,t,i,a):r(n,f(i),t,a)},function(e,i){var r=s(this),o=f(e),c=a(n,r,o,i,n!==t);if(c.done)return c.value;var l=u(r,RegExp),m=r.unicode,p=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(O?"g":"y"),h=new l(O?"^(?:"+r.source+")":r,p),g=void 0===i?j:i>>>0;if(0===g)return[];if(0===o.length)return null===v(h,o)?[o]:[];var y=0,T=0,w=[];while(T<o.length){h.lastIndex=O?0:T;var S,_=v(h,O?k(o,T):o);if(null===_||(S=x(b(h.lastIndex+(O?T:0)),o.length))===y)T=d(o,T,m);else{if(C(w,k(o,y,T)),w.length===g)return w;for(var L=1;L<=_.length-1;L++)if(C(w,_[L]),w.length===g)return w;T=y=S}}return C(w,k(o,y)),w}]}),!S,O)},"4e33":function(e,t,a){"use strict";var i,r,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"w-100 d-flex"},[a("b-form-select",{attrs:{options:e.strategyList},on:{change:e.strategyChanged},model:{value:e.locStrategy,callback:function(t){e.locStrategy=t},expression:"locStrategy"}}),a("div",{staticClass:"ml-2"},[a("b-button",{on:{click:e.getStrategyList}},[e._v("↻")])],1)],1),e.showDetails&&e.strategy?a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.strategyCode,expression:"strategyCode"}],staticClass:"w-100 h-100",domProps:{value:e.strategyCode},on:{input:function(t){t.target.composing||(e.strategyCode=t.target.value)}}}):e._e()])},o=[],c=a("d4ec"),s=a("bee2"),l=a("262e"),u=a("2caf"),d=a("9ab4"),b=a("c865"),f=a("1b40"),m=a("4bb5"),p=Object(m["c"])("ftbot"),v=function(e){Object(l["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(c["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"emitStrategy",value:function(e){return this.getStrategy(e),e}},{key:"strategyCode",get:function(){var e;return null===(e=this.strategy)||void 0===e?void 0:e.code}},{key:"locStrategy",get:function(){return this.value},set:function(e){this.emitStrategy(e)}},{key:"strategyChanged",value:function(e){this.value=e}},{key:"mounted",value:function(){0===this.strategyList.length&&this.getStrategyList()}}]),a}(f["d"]);i=b["b"].strategyList,r=b["b"].strategy,Object(d["a"])([Object(f["c"])()],v.prototype,"value",void 0),Object(d["a"])([Object(f["c"])({default:!1,required:!1})],v.prototype,"showDetails",void 0),Object(d["a"])([p.Action],v.prototype,"getStrategyList",void 0),Object(d["a"])([p.Action],v.prototype,"getStrategy",void 0),Object(d["a"])([p.Getter],v.prototype,i,void 0),Object(d["a"])([p.Getter],v.prototype,r,void 0),Object(d["a"])([Object(f["b"])("input")],v.prototype,"emitStrategy",null),v=Object(d["a"])([Object(f["a"])({})],v);var h=v,g=h,y=a("2877"),O=Object(y["a"])(g,n,o,!1,null,null,null);t["a"]=O.exports},a434:function(e,t,a){"use strict";var i=a("23e7"),r=a("da84"),n=a("23cb"),o=a("5926"),c=a("07fa"),s=a("7b0b"),l=a("65f0"),u=a("8418"),d=a("1dde"),b=d("splice"),f=r.TypeError,m=Math.max,p=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var a,i,r,d,b,g,y=s(this),O=c(y),j=n(e,O),x=arguments.length;if(0===x?a=i=0:1===x?(a=0,i=O-j):(a=x-2,i=p(m(o(t),0),O-j)),O+a-i>v)throw f(h);for(r=l(y,i),d=0;d<i;d++)b=j+d,b in y&&u(r,d,y[b]);if(r.length=i,a<i){for(d=j;d<O-i;d++)b=d+i,g=d+a,b in y?y[g]=y[b]:delete y[g];for(d=O;d>O-i+a;d--)delete y[d-1]}else if(a>i)for(d=O-i;d>j;d--)b=d+i-1,g=d+a-1,b in y?y[g]=y[b]:delete y[g];for(d=0;d<a;d++)y[d+j]=arguments[d+2];return y.length=O-i+a,r}})},a581:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex"},[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Start date","label-for":"dp_dateFrom"}},[a("b-input-group",[a("b-input-group-prepend",[a("b-form-datepicker",{staticClass:"mb-1",attrs:{"button-only":""},model:{value:e.dateFrom,callback:function(t){e.dateFrom=t},expression:"dateFrom"}})],1),a("b-form-input",{attrs:{id:"dp_dateFrom",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},model:{value:e.dateFrom,callback:function(t){e.dateFrom=t},expression:"dateFrom"}})],1)],1),a("b-form-group",{staticClass:"ml-2 col-md-6",attrs:{label:"End date","label-for":"dp_dateTo"}},[a("b-input-group",[a("b-input-group-prepend",[a("b-form-datepicker",{staticClass:"mb-1",attrs:{"button-only":""},model:{value:e.dateTo,callback:function(t){e.dateTo=t},expression:"dateTo"}})],1),a("b-form-input",{attrs:{id:"dp_dateTo",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},model:{value:e.dateTo,callback:function(t){e.dateTo=t},expression:"dateTo"}})],1)],1)],1),a("label",{staticClass:"text-left"},[e._v(" Timerange: "),a("b",[e._v(e._s(e.timeRange))])])])},r=[],n=a("d4ec"),o=a("bee2"),c=a("262e"),s=a("2caf"),l=(a("ac1f"),a("1276"),a("99af"),a("9ab4")),u=a("1b40"),d=a("640f"),b=new Date,f=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.dateFrom="",e.dateTo="",e}return Object(o["a"])(a,[{key:"emitTimeRange",value:function(){return this.timeRange}},{key:"valueChanged",value:function(e){console.log("TimeRange",e),e!==this.value&&this.updateInput()}},{key:"updateInput",value:function(){var e=this.value.split("-");e[0]&&(this.dateFrom=Object(d["g"])(Object(d["a"])(e[0],"yyyyMMdd"))),e.length>1&&e[1]&&(this.dateTo=Object(d["g"])(Object(d["a"])(e[1],"yyyyMMdd")))}},{key:"created",value:function(){this.value?this.updateInput():this.dateFrom=Object(d["g"])(new Date(b.getFullYear(),b.getMonth()-1,1)),this.emitTimeRange()}},{key:"updated",value:function(){this.emitTimeRange()}},{key:"timeRange",get:function(){return""!==this.dateFrom||""!==this.dateTo?"".concat(Object(d["b"])(this.dateFrom),"-").concat(Object(d["b"])(this.dateTo)):""}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])()],f.prototype,"value",void 0),Object(l["a"])([Object(u["b"])("input")],f.prototype,"emitTimeRange",null),Object(l["a"])([Object(u["e"])("value")],f.prototype,"valueChanged",null),f=Object(l["a"])([Object(u["a"])({})],f);var m=f,p=m,v=a("2877"),h=Object(v["a"])(p,i,r,!1,null,"38819766",null);t["a"]=h.exports},b21c:function(e,t,a){"use strict";a.r(t);var i,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"p-4 h-100"},[a("LogViewer")],1)},n=[],o=a("d4ec"),c=a("262e"),s=a("2caf"),l=a("9ab4"),u=a("1b40"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex h-100 p-0 align-items-start"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formattedLogs,expression:"formattedLogs"}],staticClass:"h-100",attrs:{readonly:""},domProps:{value:e.formattedLogs},on:{input:function(t){t.target.composing||(e.formattedLogs=t.target.value)}}}),a("b-button",{attrs:{size:"sm"},on:{click:e.getLogs}},[e._v("↻")])],1)},b=[],f=a("bee2"),m=(a("99af"),a("4bb5")),p=a("c865"),v=Object(m["c"])("ftbot"),h=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(f["a"])(a,[{key:"mounted",value:function(){this.getLogs()}},{key:"formattedLogs",get:function(){for(var e="",t=0,a=this.lastLogs.length;t<a;t+=1){var i=this.lastLogs[t];e+="".concat(i[0]," - ").concat(i[2]," - ").concat(i[3]," - ").concat(i[4],"\n")}return e}}]),a}(u["d"]);i=p["b"].lastLogs,Object(l["a"])([v.Getter],h.prototype,i,void 0),Object(l["a"])([v.Action],h.prototype,"getLogs",void 0),h=Object(l["a"])([Object(u["a"])({})],h);var g=h,y=g,O=(a("fd8e"),a("2877")),j=Object(O["a"])(y,d,b,!1,null,"9a6814f4",null),x=j.exports,T=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(u["d"]);T=Object(l["a"])([Object(u["a"])({components:{LogViewer:x}})],T);var w=T,C=w,k=Object(O["a"])(C,r,n,!1,null,"b7bdf264",null);t["default"]=k.exports},c868:function(e,t,a){"use strict";a.r(t);var i,r,n,o,c,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column h-100"},[e.historicView?a("div",{staticClass:"mx-md-3 mt-2"},[a("div",{staticClass:"d-flex flex-wrap"},[a("div",{staticClass:"col-md-3 text-left"},[a("span",[e._v("Strategy")]),a("StrategySelect",{staticClass:"mt-1",model:{value:e.strategy,callback:function(t){e.strategy=t},expression:"strategy"}})],1),a("div",{staticClass:"col-md-3 text-left"},[a("span",[e._v("Timeframe")]),a("TimeframeSelect",{staticClass:"mt-1",model:{value:e.selectedTimeframe,callback:function(t){e.selectedTimeframe=t},expression:"selectedTimeframe"}})],1),a("TimeRangeSelect",{staticClass:"col-12 col-md-5 mr-md-2",model:{value:e.timerange,callback:function(t){e.timerange=t},expression:"timerange"}})],1)]):e._e(),a("div",{staticClass:"mx-2 mt-2 pb-1 h-100"},[a("CandleChartContainer",{attrs:{"available-pairs":e.historicView?e.pairlist:e.whitelist,"historic-view":e.historicView,timeframe:e.historicView?e.selectedTimeframe:e.timeframe,trades:e.trades,timerange:e.historicView?e.timerange:"",strategy:e.historicView?e.strategy:"","plot-config-modal":!1}})],1)])},l=[],u=a("d4ec"),d=a("bee2"),b=a("262e"),f=a("2caf"),m=a("9ab4"),p=a("1b40"),v=a("4bb5"),h=a("d80d"),g=a("a581"),y=a("f3ad"),O=a("4e33"),j=a("c865"),x=Object(v["c"])("ftbot"),T=function(e){Object(b["a"])(a,e);var t=Object(f["a"])(a);function a(){var e;return Object(u["a"])(this,a),e=t.apply(this,arguments),e.historicView=!1,e.strategy="",e.timerange="",e.selectedTimeframe="",e}return Object(d["a"])(a,[{key:"mounted",value:function(){this.historicView=this.isWebserverMode,this.whitelist&&0!==this.whitelist.length||this.getWhitelist(),this.historicView&&this.getAvailablePairs({timeframe:this.timeframe})}}]),a}(p["d"]);i=j["b"].pairlist,r=j["b"].whitelist,n=j["b"].trades,o=j["b"].timeframe,c=j["b"].isWebserverMode,Object(m["a"])([x.Getter],T.prototype,i,void 0),Object(m["a"])([x.Getter],T.prototype,r,void 0),Object(m["a"])([x.Getter],T.prototype,n,void 0),Object(m["a"])([x.Getter],T.prototype,o,void 0),Object(m["a"])([x.Getter],T.prototype,c,void 0),Object(m["a"])([x.Action],T.prototype,"getWhitelist",void 0),Object(m["a"])([x.Action],T.prototype,"getAvailablePairs",void 0),T=Object(m["a"])([Object(p["a"])({components:{CandleChartContainer:h["a"],StrategySelect:O["a"],TimeRangeSelect:g["a"],TimeframeSelect:y["a"]}})],T);var w=T,C=w,k=a("2877"),S=Object(k["a"])(C,s,l,!1,null,"009c5c35",null);t["default"]=S.exports},e928:function(e,t,a){},f3ad:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-select",{attrs:{placeholder:"Use strategy default",options:e.availableTimeframes},on:{change:e.emitSelectedTimeframe},model:{value:e.selectedTimeframe,callback:function(t){e.selectedTimeframe=t},expression:"selectedTimeframe"}})},r=[],n=a("2909"),o=a("d4ec"),c=a("bee2"),s=a("262e"),l=a("2caf"),u=(a("c740"),a("a434"),a("9ab4")),d=a("1b40"),b=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.selectedTimeframe="",e.availableTimeframesBase=[{value:"",text:"Use strategy default"},"1m","3m","5m","15m","30m","1h","2h","4h","6h","8h","12h","1d","3d","1w","2w","1M","1y"],e}return Object(c["a"])(a,[{key:"emitSelectedTimeframe",value:function(){return this.selectedTimeframe}},{key:"watchValue",value:function(){this.selectedTimeframe=this.value}},{key:"availableTimeframes",get:function(){var e=this;if(!this.belowTimeframe)return this.availableTimeframesBase;var t=this.availableTimeframesBase.findIndex((function(t){return t===e.belowTimeframe}));return Object(n["a"])(this.availableTimeframesBase).splice(0,t)}}]),a}(d["d"]);Object(u["a"])([Object(d["c"])({default:""})],b.prototype,"value",void 0),Object(u["a"])([Object(d["c"])({default:"",required:!1})],b.prototype,"belowTimeframe",void 0),Object(u["a"])([Object(d["b"])("input")],b.prototype,"emitSelectedTimeframe",null),Object(u["a"])([Object(d["e"])("value")],b.prototype,"watchValue",null),b=Object(u["a"])([Object(d["a"])({})],b);var f=b,m=f,p=a("2877"),v=Object(p["a"])(m,i,r,!1,null,"77635fb8",null);t["a"]=v.exports},fd8e:function(e,t,a){"use strict";a("e928")}}]);
//# sourceMappingURL=graph.d29731e6.js.map