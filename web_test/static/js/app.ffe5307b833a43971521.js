webpackJsonp([1],{0:function(e,t){},"7zck":function(e,t){},"8fE4":function(e,t){},FZ4r:function(e,t){},N45Z:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("/5sW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("v-content",[t("router-view")],1)],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},s,!1,function(e){a("8fE4")},null,null).exports,n=a("/ocq"),o=a("aoPZ"),l=a.n(o),c={name:"Tform",data:function(){return{url:"http://35.157.221.243:9999/univariate/get",dataToProcess:'{"data":[15136, 16733, 20016, 17708, 18019, 19227, 22893, 23739, 21133, 22591, 26786, 29740,15028, 17977, 20008, 21354, 19498, 22125, 25817, 28779, 20960, 22254, 27392, 29945,16933, 17892,20533, 23569, 22417, 22084, 26580, 27454, 24081, 23451, 28991, 31386, 16896, 20045, 23471, 21747, 25621, 23859, 25500, 30998, 24475, 23145, 29701, 34365, 17556, 22077, 5702,22214,26886, 23191, 27831, 35406, 23195, 25110, 30009, 36242, 18450, 21845, 26488, 22394, 28057, 25451, 24872, 33424, 24052, 28449, 33533, 37351, 19969, 21701, 26249, 24493, 24603,26485, 30723, 34569, 26689, 26157, 32064, 38870, 21337, 19419, 23166, 28286, 24570, 24001, 33151, 24878, 26804, 28967, 33311, 40226, 20504, 23060, 23562, 27562, 23940, 24584,34303, 25517, 23494, 29095, 32903, 34379, 16991, 21109, 23740, 25552, 21752, 20294, 29009, 25500, 24166, 26960, 31222, 38641, 14672, 17543, 25453, 32683, 22449, 22316]}',loading:!1,rules:{json:function(e){try{JSON.parse(e)}catch(e){return"Data is not a valid json"}return!0},url:function(e){return!!/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\\/]))?/.test(e)||"Url is not a valid"}},errorDialog:{value:!1,text:""}}},methods:{getUrl:function(){this.$emit("response",{dataToProcess:this.dataSet,result:l.a})}},computed:{dataSet:function(){return JSON.parse(this.dataToProcess)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs12:""}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Url",rules:[e.rules.url],outline:""},on:{keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.getUrl(t):null}},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{outline:"",label:"DatatSet",rules:[e.rules.json]},on:{keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.getUrl(t):null}},model:{value:e.dataToProcess,callback:function(t){e.dataToProcess=t},expression:"dataToProcess"}})],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"success"},on:{click:e.getUrl}},[e._v("Submit "),a("v-icon",{attrs:{right:""}},[e._v("send")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[a("v-card",[a("v-card-text",[e._v("\n        Processing... this may take a while\n        "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:""}})],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"500"},model:{value:e.errorDialog.value,callback:function(t){e.$set(e.errorDialog,"value",t)},expression:"errorDialog.value"}},[a("v-card",{attrs:{color:"red",dark:""}},[a("v-card-text",[a("pre",[e._v(e._s(e.errorDialog.text))])]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{flat:""},on:{click:function(t){e.errorDialog.value=!1}}},[e._v("ok")])],1)],1)],1)],1)},staticRenderFns:[]},p=a("VU/8")(c,d,!1,null,null,null).exports,u=a("fZjL"),h=a.n(u),v=a("pFYg"),g=a.n(v),m={name:"jsonViewer",props:["json"],data:function(){return{items:[]}},methods:{addItems:function(e,t,a){for(var i in e)this.items.splice(t,0,{name:i,type:g()(e[i]),data:e[i],level:a,open:!0})},toggle:function(e,t,a,i){i?this.addItems(e,t,a):this.deleteItems(e,t,a)},deleteItems:function(e,t,a){for(var i=this.items.filter(function(e){return e.level>=a}).length,s=h()(e).length,r=i-s==0?s:i,n=0;n<r;n++)this.items.splice(t,1)},getColor:function(e){switch(e){case"object":return"green--text darken-4";case"string":return"red--text darken-4";case"number":return"blue--text darken-4";case"boolean":return"indigo--text darken-4"}}},watch:{json:{handler:function(e){this.items=[],this.addItems(e,0,0),this.items.reverse()},immediate:!0}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs12:""}},e._l(e.items,function(t,i){return a("div",{key:i,style:{"margin-left":10*t.level+"px",cursor:"object"===t.type&&0!==t.data.length?"pointer":"auto"},on:{click:function(a){"object"!==t.type||e.toggle(t.data,i+1,t.level+1,t.open),t.open=!t.open}}},[a("span",{class:{"font-weight-bold":"object"===t.type&&0!==t.data.length}},[e._v(e._s(t.name)+":")]),e._v(" "),a("span",{class:e.getColor(t.type)},[e._v(e._s("object"===t.type&&0!==t.data.length?"{...}":t.data))])])}))},staticRenderFns:[]},f=a("VU/8")(m,x,!1,null,null,null).exports,y={props:{dataSet:null,height:{type:Number,default:500},marginLeft:{type:Number,default:40},marginTop:{type:Number,default:40},marginRight:{type:Number,default:20},marginBottom:{type:Number,default:30},toggleSize:{type:Boolean}},data:function(){return{width:null,chartWidth:1e3,chartHeight:400,total:[],toPredict:[],prediction:[],debug:[],timeSeries:[],toPredictInDebug:[],zoomMin:0,zoomMax:100,panEnabled:!1,offsetX:0,globalMax:-1e11,globalMin:1e11,isActive:{toPredict:!0,prediction:!0,debug:{}},markPos:{pos:0,val:0}}},mounted:function(){this.calculateSize()},methods:{calculateSize:function(){this.width=this.$el.clientWidth,this.chartWidth=this.width-(this.marginLeft+this.marginRight),this.chartHeight=this.height-(this.marginTop+this.marginBottom)},drawData:function(e){for(var t=this,a=e.toPredict.main||e.toPredict.data,i=0;i<a.length;i++){var s=a[i];this.toPredict.push({x:i,y:s}),this.total.push({x:i,y:s})}var r=e.prediction.future;this.toPredict.push({x:a.length,y:r[0].value||r[0]["expected value"]});for(var n=0;n<r.length;n++){var o=r[n].value||r[n]["expected value"];this.prediction.push({x:r[n].step,y:o}),this.total.push({x:r[n].step,y:o})}var l=e.toPredict.timeseries;if(l&&l.length)for(var c=0;c<l.length;c++){this.$set(this.timeSeries,c,{color:this.$getRandomColor(),dataset:[]});for(var d=0;d<l[c].data.length;d++)this.timeSeries[c].dataset.push({x:d,y:l[c].data[d]});this.$set(this.isActive,c,!0)}if(this.zoomMax=this.total.length-1,this.globalMax=this.$getMax(this.total,"y"),this.globalMin=this.$getMin(this.total,"y"),e.prediction.debug){for(var p in e.prediction.debug){var u=e.prediction.debug[p];this.$set(this.isActive.debug,p,!0),this.debug.push({name:p,d:[],color:this.$getRandomColor()}),u.map(function(e){t.debug[t.debug.length-1].d.push({x:e.step,y:e["expected value"]||e.Prediction}),t.globalMax=t.globalMax>e["expected value"]||e.Prediction?t.globalMax:e["expected value"]||e.Prediction,t.globalMin=t.globalMin<e["expected value"]||e.Prediction?t.globalMin:e["expected value"]||e.Prediction})}for(var h=0;h<this.debug[0].d.length;h++){var v=this.toPredict.length-this.debug[0].d.length-1;this.toPredictInDebug.push({x:this.total[v+h].x,y:this.total[v+h].y})}}},zoom:function(e){var t=e.wheelDelta?.02*e.wheelDelta:-e.deltaY;this.zoomMin&&this.zoomMax>=3e3?(this.zoomMin=0,this.zoomMax=this.total.length-1):(this.zoomMin+=t,this.zoomMax+=-t)},pan:function(e){if(this.panEnabled)this.offsetX+=-e.movementX,this.markPos=0;else for(var t=e.offsetX-this.marginLeft,a=0;a<this.total.length;a++){var i=this.$toXPixel(a,this.zoomMin,this.zoomMax,this.chartWidth)-this.offsetX;i<t&&(this.markPos={pos:i,val:a})}},randomizeColors:function(){for(var e=0;e<this.debug.length;e++)this.debug[e].color=this.$getRandomColor();for(var t=0;t<this.timeSeries.length;t++)this.timeSeries[t].color=this.$getRandomColor()},reset:function(){this.total=[],this.toPredict=[],this.prediction=[],this.globalMax=-1e11,this.globalMin=1e11,this.debug=[],this.timeSeries=[],this.zoomMin=0,this.zoomMax=100,this.offsetX=0,this.isActive={toPredict:!0,prediction:!0,debug:{}}}},watch:{dataSet:{handler:function(e){var t=this;e.toPredict&&e.prediction&&(e.prediction.debug||(this.debug.isEmpty=!0),this.$nextTick(function(){t.reset(),t.drawData(e)}))},immediate:!0},toggleSize:function(){this.calculateSize()}},computed:{anomalies:function(){var e=this.dataSet;if(e.toPredict){for(var t=[],a=0;a<e.prediction.past.length;a++){var i=this.$toXPixel(e.prediction.past[a].step,this.zoomMin,this.zoomMax,this.chartWidth);t.push(i)}return t}}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{directives:[{name:"resize",rawName:"v-resize",value:e.calculateSize,expression:"calculateSize"}],attrs:{xs12:""}},[a("v-toolbar",{attrs:{dense:"",dark:""}},[a("v-toolbar-items",[e.toPredict.length>0?a("v-btn",{attrs:{color:"blue",flat:""},on:{click:function(t){e.isActive.toPredict=!e.isActive.toPredict}}},[e._v("Main")]):e._e(),e._v(" "),e.prediction.length>0?a("v-btn",{attrs:{color:"yellow",flat:""},on:{click:function(t){e.isActive.prediction=!e.isActive.prediction}}},[e._v("Prediction")]):e._e(),e._v(" "),e._l(e.timeSeries,function(t,i){return e.timeSeries.length>0?a("v-btn",{key:"cheboxTimeSerie"+i,attrs:{color:e.timeSeries[i].color,flat:""},on:{click:function(t){e.isActive[i]=!e.isActive[i]}}},[e._v("data-"+e._s(i))]):e._e()}),e._v(" "),e._l(e.debug,function(t,i){return e.debug.length>0?a("v-btn",{key:"debug"+i,attrs:{color:t.color,flat:""},on:{click:function(a){e.isActive.debug[t.name]=!e.isActive.debug[t.name]}}},[e._v("\n        "+e._s(t.name)+"\n        "),t.name===e.dataSet.prediction.engine?a("span",{staticClass:"winner"},[e._v("♕")]):e._e()]):e._e()})],2),e._v(" "),a("v-spacer"),e._v(" "),a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",flat:"",icon:""},on:{click:e.randomizeColors},slot:"activator"},[a("v-icon",[e._v("brush")])],1),e._v(" "),a("span",[e._v("Randomize Colors")])],1)],1),e._v(" "),a("svg",{staticClass:"grey darken-3",attrs:{width:"100%",height:e.height},on:{wheel:function(t){return t.preventDefault(),e.zoom(t)},mousedown:function(t){if(t.ctrlKey||t.shiftKey||t.altKey||t.metaKey)return null;e.panEnabled=!0},mouseup:function(t){e.panEnabled=!1},mousemove:e.pan}},[e.toPredict.length>0&&e.prediction.length>0?a("g",{attrs:{transform:"translate("+e.marginLeft+", "+e.marginTop+")"}},[a("defs",[a("clipPath",{attrs:{id:"clip-rect"}},[a("rect",{attrs:{width:e.chartWidth,height:e.height,y:-this.marginTop}})])]),e._v(" "),a("g",{attrs:{"clip-path":"url(#clip-rect)"}},[e.isActive.toPredict?a("c-path",{attrs:{transform:"translate("+-e.offsetX+" 0)",rangeX:[e.zoomMin,e.zoomMax],rangeY:[e.globalMin,e.globalMax],dataset:e.toPredict,column:"y",height:e.chartHeight,width:e.chartWidth}}):e._e(),e._v(" "),e.isActive.prediction?a("c-path",{attrs:{transform:"translate("+(e.$toXPixel(e.prediction[0].x+e.zoomMin,e.zoomMin,e.zoomMax,e.chartWidth)-e.offsetX)+", 0)",color:"yellow",rangeX:[e.zoomMin,e.zoomMax],rangeY:[e.globalMin,e.globalMax],dataset:e.prediction,column:"y",height:e.chartHeight,width:e.chartWidth}}):e._e(),e._v(" "),e._l(e.timeSeries,function(t,i){return e.isActive[i]?a("c-path",{key:"serie"+i,attrs:{transform:"translate("+-e.offsetX+" 0)",color:t.color,rangeX:[e.zoomMin,e.zoomMax],rangeY:[e.globalMin,e.globalMax],dataset:t.dataset,column:"y",height:e.chartHeight,width:e.chartWidth}}):e._e()}),e._v(" "),e._l(e.debug,function(t,i){return!e.debug.isEmpty&&e.isActive.debug[t.name]?a("g",{key:"debug"+i},[a("c-path",{attrs:{dasharray:"5,5",transform:"translate("+(e.$toXPixel(t.d[0].x+e.zoomMin,e.zoomMin,e.zoomMax,e.chartWidth)-e.offsetX)+", 0)",color:t.color,rangeX:[e.zoomMin,e.zoomMax],rangeY:[e.globalMin,e.globalMax],dataset:t.d,column:"y",height:e.chartHeight,width:e.chartWidth}})],1):e._e()}),e._v(" "),e.markPos.pos>0?a("line",{attrs:{x1:e.markPos.pos,x2:e.markPos.pos,y2:e.chartHeight,"stroke-width":"2",stroke:"#0eff0e78",fill:"none"}}):e._e(),e._v(" "),e.markPos.pos>0?a("text",{attrs:{fill:"#0eff0e78","text-anchor":"middle",dy:"-5px",transform:"translate("+e.markPos.pos+" 0)"}},[e._v("\n        "+e._s(e.markPos.val)+"\n      ")]):e._e(),e._v(" "),e._l(e.anomalies,function(t,i){return a("circle",{key:i,attrs:{cx:t-e.offsetX,cy:e.chartHeight,r:"7",stroke:"white","stroke-width":"1",fill:"red"}})}),e._v(" "),a("x-axis",{attrs:{transform:"translate("+-e.offsetX+" "+e.chartHeight+")",range:[e.zoomMin,e.zoomMax],dataset:e.total,x:"x",ticks:25,fixed:1,height:e.chartHeight,width:e.chartWidth,label:"Time"}})],2),e._v(" "),a("y-axis",{attrs:{range:[e.globalMin,e.globalMax],ticks:5,fixed:1,height:e.chartHeight,label:"Units"}})],1):e._e()]),e._v(" "),a("svg",{directives:[{name:"show",rawName:"v-show",value:!e.debug.isEmpty,expression:"!debug.isEmpty"}],staticClass:"grey darken-3",attrs:{width:"100%",height:e.height}},[e.isActive.toPredict?a("c-path",{attrs:{dataset:e.toPredictInDebug,rangeY:[e.globalMin,e.globalMax],column:"y",height:e.chartHeight+e.marginTop+e.marginBottom,width:e.chartWidth+e.marginLeft+e.marginRight}}):e._e(),e._v(" "),e._l(e.debug,function(t,i){return!e.debug.isEmpty&&e.isActive.debug[t.name]?a("g",{key:"debug"+i},[a("c-path",{attrs:{dasharray:"5,5",rangeY:[e.globalMin,e.globalMax],color:t.color,dataset:t.d,column:"y",height:e.chartHeight+e.marginTop+e.marginBottom,width:e.chartWidth+e.marginLeft+e.marginRight}})],1):e._e()})],2)],1)},staticRenderFns:[]};var _={name:"homeView",components:{tForm:p,tJson:f,tGraph2d:a("VU/8")(y,b,!1,function(e){a("FZ4r")},null,null).exports},data:function(){return{response:{},toggleDataVisibility:!0}},methods:{toggleData:function(){this.toggleDataVisibility=!0},showResponse:function(e){this.response={toPredict:e.dataToProcess,prediction:e.result}}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-toolbar",{attrs:{dense:"",app:""}},[a("img",{staticClass:"pa-1",attrs:{src:"static/img/logo.svg",height:"80%",alt:"Time Cop"}}),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{flat:"",color:"blue"},on:{click:function(t){e.toggleDataVisibility=!e.toggleDataVisibility}}},[e._v("\n      data\n      "),e.toggleDataVisibility?a("v-icon",{attrs:{right:""}},[e._v("visibility")]):a("v-icon",{attrs:{right:""}},[e._v("visibility_off")])],1)],1),e._v(" "),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{class:e.toggleDataVisibility?"xs8":"xs12"},[a("t-graph-2d",{attrs:{dataSet:e.response,toggleSize:e.toggleDataVisibility,height:350,marginLeft:70}})],1),e._v(" "),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.toggleDataVisibility,expression:"toggleDataVisibility"}],attrs:{xs4:"","column-code":""}},[a("t-form",{on:{response:e.showResponse}}),e._v(" "),a("t-json",{attrs:{json:e.response.prediction}})],1)],1)],1)},staticRenderFns:[]};var M=a("VU/8")(_,k,!1,function(e){a("N45Z")},null,null).exports;i.default.use(n.a);var w=new n.a({routes:[{path:"/",name:"home",component:M}]}),P=a("3EgV"),z=a.n(P),S=a("8+8L"),$={name:"y-axis",props:{range:{type:Array,required:!0},ticks:{type:Number},height:{type:Number,required:!0},label:{type:String},fixed:{type:Number}},computed:{ticksList:function(){if(this.range&&this.range.length>0){var e=[],t=this.range[0],a=(this.range[1]-t)/(this.ticks-1),i=t;e.push(this.fixed?t.toFixed(this.fixed):t);for(var s=1;s<this.ticks;s++)e.push(this.fixed?(i+=a).toFixed(this.fixed):i+=a);return e.reverse()}}}},A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("g",{attrs:{"text-anchor":"end",fill:"white",stroke:"white","stroke-width":"1"}},[a("line",{attrs:{y1:e.height}}),e._v(" "),e._l(e.ticksList,function(t,i){return a("g",{key:"tick"+i,attrs:{transform:"translate(0, "+i*(e.height/(e.ticksList.length-1))+")"}},[a("line",{attrs:{x2:"-6"}}),e._v(" "),a("text",{attrs:{"stroke-width":"0.1",x:"-9",dy:"0.32em"}},[e._v(e._s(t))])])}),e._v(" "),a("text",{attrs:{transform:"rotate(-90)",y:"6",dy:"0.71em","stroke-width":"0.1"}},[e._v(e._s(e.label))])],2)},staticRenderFns:[]},X=a("VU/8")($,A,!1,null,null,null).exports,D={name:"x-axis",props:{dataset:{type:Array,required:!0},range:{type:Array},x:{type:String},ticks:{type:Number},height:{type:Number,required:!0},width:{type:Number,required:!0},label:{type:String},fixed:{type:Number}},computed:{ticksList:function(){if(this.dataset&&this.dataset.length>0){for(var e=this.range?this.range[0]:this.$getMin(this.dataset,this.x),t=this.range?this.range[1]:this.$getMax(this.dataset,this.x),a=[],i=0;i<this.dataset.length;i++)a.push({position:this.$toXPixel(this.dataset[i][this.x],e,t,this.width)});for(var s=0;s<this.dataset.length;s+=Math.round(this.dataset.length/this.ticks))a[s].value=this.dataset[s][this.x];return a.reverse()}}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("g",{attrs:{"text-anchor":"middle",fill:"white",stroke:"white","stroke-width":"1",transform:"translate(0, "+e.height+")"}},[e.ticksList&&e.ticksList.length>0?a("line",{attrs:{x1:e.ticksList[0].position,x2:e.ticksList[e.ticksList.length-1].position}}):e._e(),e._v(" "),e._l(e.ticksList,function(t,i){return a("g",{key:"tick"+i,attrs:{transform:"translate("+t.position+", 0)"}},[a("line",{attrs:{y2:"6"}}),e._v(" "),a("text",{attrs:{"stroke-width":"0.1",y:"9",dy:"0.71em"}},[e._v(e._s(t.value))])])}),e._v(" "),a("text",{attrs:{x:e.ticksList[0].position,y:"-25",dx:"-0.71em",dy:"0.71em","stroke-width":"0.1"}},[e._v(e._s(e.label))])],2)},staticRenderFns:[]},E=a("VU/8")(D,N,!1,null,null,null).exports,L={name:"bars",props:{dataset:{type:Array,required:!0},column:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0}},computed:{list:function(){for(var e=[],t=this.$getMax(this.dataset,this.column),a=this.$getMin(this.dataset,this.column),i=0;i<this.dataset.length;i++)e.push({d:this.dataset[i][this.column],v:this.$toYPixel(this.dataset[i][this.column],a,t,this.height)});return e}}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("g",e._l(e.list,function(t,i){return a("rect",{key:i,attrs:{x:i*(e.width/e.list.length),y:t.v,width:30,height:e.height-t.v,fill:"green"}})}))},staticRenderFns:[]},V=a("VU/8")(L,R,!1,null,null,null).exports,T={name:"cPath",props:{dataset:{type:Array,required:!0},column:{type:String,required:!0},height:{type:Number,required:!0},width:{type:Number,required:!0},color:{type:String,default:"steelblue"},strokeWidth:{type:String,default:"1.5"},dasharray:{type:String,default:""},rangeY:{type:Array},rangeX:{type:Array}},computed:{points:function(){if(this.dataset&&this.dataset.length>0){for(var e=this.rangeY?this.rangeY[0]:this.$getMin(this.dataset,this.column),t=this.rangeY?this.rangeY[1]:this.$getMax(this.dataset,this.column),a=this.rangeX?this.rangeX[0]:0,i=this.rangeX?this.rangeX[1]:this.dataset.length,s=[],r=[],n=0;n<this.dataset.length;n++)s.push(this.$toXPixel(n,a,i,this.width)),r.push(this.$toYPixel(this.dataset[n][this.column],e,t,this.height));s.reverse(),r.reverse();for(var o="M"+s[0]+" "+r[0],l=1;l<this.dataset.length;l++)o+=" L"+s[l]+" "+r[l]+" ";return o}}}},C={render:function(){var e=this.$createElement;return(this._self._c||e)("path",{attrs:{fill:"none",stroke:this.color,"stroke-linejoin":"round","stroke-linecap":"round","stroke-dasharray":this.dasharray,"stroke-width":this.strokeWidth,d:this.points}})},staticRenderFns:[]},W=a("VU/8")(T,C,!1,null,null,null).exports,j={install:function(e){e.prototype.$getMax=function(e,t){var a=0;if(t)for(var i=0;i<e.length;i++)a=e[i][t]>a?e[i][t]:a;else for(var s=0;s<e.length;s++)a=e[s]>a?e[s]:a;return a},e.prototype.$getMin=function(e,t){var a=1e11;if(t)for(var i=0;i<e.length;i++)a=e[i][t]<a?e[i][t]:a;else for(var s=0;s<e.length;s++)a=e[s]<a?e[s]:a;return a},e.prototype.$toYPixel=function(e,t,a,i){return i-(e-t)/(a-t)*i},e.prototype.$toXPixel=function(e,t,a,i){return(e-t)/(a-t)*i},e.prototype.$getRandomColor=function(){return"hsla("+Math.floor(360*Math.random())+", 100%, 70%, 60)"},e.component(X.name,X),e.component(E.name,E),e.component(V.name,V),e.component(W.name,W)}};a("7zck");i.default.use(z.a),i.default.config.productionTip=!1,i.default.use(S.a),i.default.http.headers.common["content-type"]="application/json",i.default.use(j),new i.default({el:"#app",router:w,render:function(e){return e(r)}})},aoPZ:function(e,t){e.exports={debug:{Holtwinters:[{"expected value":23304.849826854166,step:88},{"expected value":24460.35892432785,step:89},{"expected value":27561.751646136836,step:90},{"expected value":31230.570698720367,step:91},{"expected value":26499.22093531029,step:92},{"expected value":27070.648607433097,step:93},{"expected value":31674.592785801316,step:94},{"expected value":31578.854594249035,step:95},{"expected value":24656.412778197973,step:96},{"expected value":24852.29706080186,step:97},{"expected value":27615.89390208085,step:98},{"expected value":28325.201953431733,step:99},{"expected value":23929.376739953645,step:100},{"expected value":26137.118323685467,step:101},{"expected value":30019.838767947145,step:102},{"expected value":31010.153984551955,step:103},{"expected value":26301.729130917913,step:104},{"expected value":27345.532733956297,step:105},{"expected value":31274.20175973366,step:106},{"expected value":33758.58024528892,step:107},{"expected value":23667.167025274415,step:108},{"expected value":25592.714491545663,step:109},{"expected value":28795.354793302853,step:110},{"expected value":31119.61715602362,step:111},{"expected value":25360.730868089337,step:112},{"expected value":27661.064470191395,step:113},{"expected value":28535.06877256997,step:114},{"expected value":34721.81229228977,step:115},{"expected value":26965.705143334075,step:116},{"expected value":26818.3903646589,step:117},{"expected value":31717.345951150564,step:118},{"expected value":37549.398085338275,step:119},{"expected value":24709.81251462817,step:120},{"expected value":25865.321612101856,step:121},{"expected value":28966.71433391084,step:122},{"expected value":32635.53338649437,step:123},{"expected value":27904.183623084296,step:124},{"expected value":28475.611295207105,step:125}],LSTM:[{"expected value":25019.58203125,step:88},{"expected value":27154.94921875,step:89},{"expected value":25876.259765625,step:90},{"expected value":25548.53515625,step:91},{"expected value":26147.23046875,step:92},{"expected value":26041.2265625,step:93},{"expected value":26843.67578125,step:94},{"expected value":27201.001953125,step:95},{"expected value":26064.234375,step:96},{"expected value":20791.353515625,step:97},{"expected value":23069.861328125,step:98},{"expected value":24948.806640625,step:99},{"expected value":25277.02734375,step:100},{"expected value":27038.37890625,step:101},{"expected value":25511.736328125,step:102},{"expected value":25883.951171875,step:103},{"expected value":25487.67578125,step:104},{"expected value":26353.115234375,step:105},{"expected value":25233.6328125,step:106},{"expected value":27202.701171875,step:107},{"expected value":26270.1640625,step:108},{"expected value":25439.259765625,step:109},{"expected value":20361.23046875,step:110},{"expected value":23536.994140625,step:111},{"expected value":25388.9609375,step:112},{"expected value":26368.95703125,step:113},{"expected value":24021.4375,step:114},{"expected value":22905.86328125,step:115},{"expected value":27201.80078125,step:116},{"expected value":26345.373046875,step:117},{"expected value":25646.5,step:118},{"expected value":26889.673828125,step:119},{"expected value":26910.650390625,step:120},{"expected value":22121.376953125,step:121},{"expected value":18701.7734375,step:122},{"expected value":20776.33203125,step:123},{"expected value":26323.80859375,step:124},{"expected value":26373.302734375,step:125}],Autoarima:[{"expected value":27902.070377194777,step:88},{"expected value":27185.91223296574,step:89},{"expected value":29910.45930851819,step:90},{"expected value":35203.84230904736,step:91},{"expected value":26583.463750429433,step:92},{"expected value":27440.36202458281,step:93},{"expected value":32892.94441787661,step:94},{"expected value":38439.56661564306,step:95},{"expected value":21110.83452101928,step:96},{"expected value":21168.36838873439,step:97},{"expected value":23963.384950400738,step:98},{"expected value":26550.78276451954,step:99},{"expected value":27253.618144003678,step:100},{"expected value":26690.60557215413,step:101},{"expected value":29394.226715025663,step:102},{"expected value":34634.228493380935,step:103},{"expected value":25954.417487745006,step:104},{"expected value":26750.755075918838,step:105},{"expected value":32142.566425299432,step:106},{"expected value":37628.37835832999,step:107},{"expected value":20238.828686325127,step:108},{"expected value":20235.543613230857,step:109},{"expected value":22969.74097987929,step:110},{"expected value":25496.319551583507,step:111},{"expected value":26138.335679816042,step:112},{"expected value":25514.503855067247,step:113},{"expected value":28157.30574473233,step:114},{"expected value":33336.48826982387,step:115},{"expected value":24595.85801091354,step:116},{"expected value":25331.376345810975,step:117},{"expected value":30662.368441914794,step:118},{"expected value":36087.36112166852,step:119},{"expected value":18636.992196386807,step:120},{"expected value":18572.887870015682,step:121},{"expected value":21246.26598338727,step:122},{"expected value":23712.025301814636,step:123},{"expected value":24293.22217677032,step:124},{"expected value":23608.571098744673,step:125}]},engine:"Autoarima",future:[{step:126,value:31423.05078125},{step:127,value:26860.919921875},{step:128,value:25226.453125},{step:129,value:28546.376953125},{step:130,value:32843.1640625}],mae:2787.6362557772313,mse:14337028.744894866,past:[{anomaly_score:1,"expected value":35203.84230904736,mae:2787.6362557772313,mse:14337028.744894866,real_value:24878,rmse:3786.426910016205,step:91},{anomaly_score:.514486972675276,"expected value":34634.228493380935,mae:2787.6362557772313,mse:14337028.744894866,real_value:25517,rmse:3786.426910016205,step:103},{anomaly_score:0,"expected value":33336.48826982387,mae:2787.6362557772313,mse:14337028.744894866,real_value:25500,rmse:3786.426910016205,step:115},{anomaly_score:.4557352672564709,"expected value":23712.025301814636,mae:2787.6362557772313,mse:14337028.744894866,real_value:32683,rmse:3786.426910016205,step:123}],present_alerts:[],present_status:"FALSE",rmse:3786.426910016205}}},["NHnr"]);
//# sourceMappingURL=app.ffe5307b833a43971521.js.map