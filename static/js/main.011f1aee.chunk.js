(this["webpackJsonpmio-million"]=this["webpackJsonpmio-million"]||[]).push([[0],Array(26).concat([function(e){e.exports=JSON.parse('{"b":"0.6.4-BETA","a":"Thiago (BE, Domain), Crois & Mat (Main Stage & Mio chun assets), The Mion~n Family~!, R-Jim (FE) and You"}')},,,,function(e,t,a){},,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r,s=a(0),i=a.n(s),c=a(12),o=a.n(c),u=(a(37),a(22)),l=a(6),m=a(14),d=(a(43),a(44),a(2)),j=a(5),p=a(4),b=a(3),h=(a(45),a(7)),f=(a(46),a(1)),O=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.style;return Object(f.jsx)("div",{className:"backdrop-play-logo",style:Object(h.a)({},e)})}}]),a}(s.Component),g=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).renderPlayLogosEffect=function(){for(var e=[],t=0;t<10;t++){var a=9.5*t+5+"%",n=Math.floor(4*Math.random())+4+"s",r=Math.floor(4*Math.random())+8+"s";e.push(Object(f.jsx)(O,{style:{left:a,animationDuration:n+", "+r}},t))}for(var s=0;s<6;s++){var i=8*s+20+"%",c=Math.floor(4*Math.random())+4+"s",o=Math.floor(8*Math.random())+10+"s";e.push(Object(f.jsx)(O,{style:{left:i,animationDuration:c+", "+o}},s))}return Object(f.jsx)("div",{className:"backdrop-play-logo-container",children:e})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.children;return Object(f.jsxs)("div",{className:"backdrop",children:[this.renderPlayLogosEffect(),e]})}}]),a}(s.Component),v=(a(48),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{id:"mio"})}}]),a}(s.Component)),x=(a(49),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsx)(g,{children:Object(f.jsx)("div",{className:"mio-stage",children:Object(f.jsx)(v,{})})})}}]),a}(s.Component)),y=a(18),C="4x3",M=[[C,C,C,C,C]],S=a(17),N=(a(50),function(e){return e.disablePop?0:Math.floor(3*Math.random())*Math.floor(3*Math.random()+2)}),w=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getDefautState=function(){return{popTime:N(e.props),isDespawn:!1}},e.state=e.getDefautState(),e.getSpawnTime=function(){var t=e.state.popTime;return.5+Math.floor(t/6)},e.resetState=function(){e.setState(e.getDefautState())},e.shouldComponentUpdate=function(t){return!e.props.isPreview&&(t!==e.props&&(e.setState({isDespawn:!0}),e.updateTimeOut=setTimeout(e.resetState.bind(Object(S.a)(e)),1e3*e.getSpawnTime())),!0)},e.componentWillUnmount=function(){clearTimeout(e.updateTimeOut)},e.getMiofaClass=function(){var e=["normal","normal","normal","normal","normal","headband","lightstick"];return e[Math.floor(Math.random()*e.length)]},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.popTime,a=e.isDespawn,n=a?2*this.getSpawnTime():this.getSpawnTime(),r={animationName:a?"miofa-despawn":"miofa-spawn, miofa-animate",animationDuration:n+"s, "+t+"s",animationDelay:"0s, "+n+"s"};return Object(f.jsx)("div",{className:"miofa-container",style:r,onLoad:this.check,children:Object(f.jsx)("div",{className:"miofa "+this.getMiofaClass()})})}}]),a}(s.Component),k=(a(51),["#e6e7e7","#7b96d5","#7b96d5","#7b96d5","#b20335"]),F=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getBorderBlinkTiming=function(){return Math.floor(Math.random()*k.length)},e.getBorderColor=function(e){return k[e]},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.message,a=e.isPreview,n=this.getBorderBlinkTiming(),r=n/4+10+"s",s=this.getBorderColor(n),i="0 0 12px "+s;return Object(f.jsxs)("div",{className:"miofa-with-message"+(t.length>100?" big":""),children:[Object(f.jsx)("div",{className:"message-border",style:{borderColor:s,boxShadow:i,animationDuration:r}}),Object(f.jsx)("div",{className:"message-container",children:t}),Object(f.jsx)(w,{disablePop:!0,isPreview:a}),Object(f.jsx)(w,{disablePop:!0,isPreview:a})]})}}]),a}(s.Component),L=(a(52),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.isPreview;return Object(f.jsxs)("div",{className:"miofa-with-name",children:[Object(f.jsx)(w,{disablePop:!0,isPreview:a}),Object(f.jsx)("div",{className:"name-container",children:t})]})}}]),a}(s.Component)),A=(a(53),a.p+"static/media/MiochunRig-Front.a9c0ca8c.png"),P=a.p+"static/media/MiochunRig-Front2.a8e19dec.png",I=a.p+"static/media/MiochunRig-Error.32cbc742.png",T=[P,A],D=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getDefautState=function(){return{isDespawn:!1,currentIndex:0,errorFrameIndexes:[]}},e.state=e.getDefautState(),e.resetState=function(){e.setState(e.getDefautState())},e.isFramesChange=function(t){var a=e.props.frames,n=t.frames;return n.length!==a.length||(n.forEach((function(e,t){if(a[t]!==e)return!0})),!1)},e.shouldComponentUpdate=function(t){return!e.props.isPreview&&(e.isFramesChange(t)&&(e.setState({isDespawn:!0}),e.updateTimeOut=setTimeout(e.resetState.bind(Object(S.a)(e)),1e3)),!0)},e.componentWillUnmount=function(){clearTimeout(e.updateTimeOut),clearInterval(e.updateIndex)},e.getFrames=function(){var t=e.props.frames,a=void 0===t?[]:t;return 0===a.length?T:a},e.getNextFrameIndex=function(){var t=e.getFrames(),a=e.state.currentIndex;return!t||++a>=t.length?0:a},e.updateIndex=function(){var t=e.getNextFrameIndex();e.setState({currentIndex:t})},e.componentDidMount=function(){setTimeout((function(){e.animationInterval=setInterval(e.updateIndex.bind(Object(S.a)(e)),500)}),500)},e.setErrorFrame=function(t){var a=e.state.errorFrameIndexes;a.push(t),e.setState({errorFrameIndexes:a})},e.renderFrames=function(){var t=e.state,a=t.currentIndex,n=t.errorFrameIndexes;return Object(f.jsx)("div",{children:e.getFrames().map((function(t,r){return Object(f.jsx)("img",{src:void 0!==n.find((function(e){return e===r}))?I:t,width:a===r?"90":"0",height:"90",alt:"",onError:function(){return e.setErrorFrame(r)}},r)}))})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.isDespawn,t={animationName:e?"miofa-despawn":"miofa-spawn",animationDuration:e?"2s":"1s",animationDelay:"0s"};return Object(f.jsx)("div",{className:"my-miofa-container",style:t,onLoad:this.check,children:this.renderFrames()})}}]),a}(s.Component),R=(a(54),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).renderMioFa=function(t,a){var n=e.props.isPreview;return Object(f.jsx)(w,{isPreview:n},a)},e.renderMioFas=function(t){return Array.from(Array(t)).map(e.renderMioFa)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.message,a=void 0===t?"Your messages for Mio.":t,n=e.name,r=void 0===n?"- MioFa -":n,s=e.frames,i=void 0===s?[]:s,c=e.isPreview;return Object(f.jsxs)("div",{className:"message-section-container",children:[this.renderMioFas(5),Object(f.jsx)(F,{message:a,isPreview:c}),this.renderMioFas(2),Object(f.jsx)(D,{frames:i}),Object(f.jsx)(L,{name:r,isPreview:c}),this.renderMioFas(1)]})}}]),a}(s.Component)),E=Object(y.a)({},C,Object(f.jsx)(R,{})),z=a(11),B=a(20),U=a.n(B),H=a(21),J=a(15),W=a(19),Y={messageConverter:function(e){var t=e.content,a=e.author;return{message:t,name:a.name,frames:a.avatar}}},G=["pageData"],V=null!==(n="https://api.miosha.moe/million/v1/")?n:"",K={"X-API-Key":null!==(r="i6E!pzz&zD&Zh%pckb")?r:""},q={getMessage:function(e){var t=e.page,a=e.pageSize;return fetch(V+"messages?page="+t+"&pageSize="+a,{headers:K}).then((function(e){return e.json()})).then((function(e){var t=e.pageData,a=Object(W.a)(e,G);return Object(h.a)(Object(h.a)({},a),{},{pageData:t.map((function(e){return Y.messageConverter(e)}))})}))},sendMessage:function(e){var t=e.name,a=e.email,n=e.frames,r=e.message;return fetch(V+"messages",{method:"POST",headers:Object(h.a)(Object(h.a)({},K),{},{"Content-Type":"application/json"}),body:JSON.stringify({author:{name:t,email:a,avatar:n},content:r})}).then((function(e){var t=e.status;return 409===t?m.NotificationManager.warning("There is already a message with the given author name or email"):429===t?m.NotificationManager.warning("You already submitted a message. Please try again later"):m.NotificationManager.error("ERROR["+t+"] Please contact vucuongJim@gmail.com or R Jim#1231"),{status:t}}))}},X=[{message:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",name:"miofa"}].map((function(e,t){return Object(h.a)(Object(h.a)({},e),{},{name:e.name+"-"+t})})),Z=Object(J.b)("posts/fetchMessages",function(){var e=Object(H.a)(U.a.mark((function e(t){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.page,t.pageSize,e.abrupt("return",{page:a,pageCount:4,pageData:X});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Q=Object(J.c)({name:"messages",initialState:{pageSize:5,current:1,pageCount:0,items:[],status:"idle",error:"",isAssetLoaded:!1},reducers:{nextPage:function(e){e.current+=1},previousPage:function(e){e.current-=1},markAssetAsLoaded:function(e){e.isAssetLoaded=!0}},extraReducers:function(e){e.addCase(Z.pending,(function(e){e.status="loading"})).addCase(Z.fulfilled,(function(e,t){var a=t.payload,n=a.page,r=a.pageCount,s=a.pageData;e.status="succeeded",e.current=n,e.pageCount=r,e.items=e.items.concat(s)})).addCase(Z.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),$=Q.actions,_=$.nextPage,ee=$.previousPage,te=$.markAssetAsLoaded,ae=function(e){var t=e.messages,a=t.items,n=t.current,r=t.pageSize;return a.slice((n-1)*r,n*r)},ne=function(e){return e.messages.isAssetLoaded},re=Q,se=(a(59),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).renderCells=function(){for(var t=e.props,a=t.x,n=t.y,r=[],s=0;s<a*n;s++)r.push(Object(f.jsx)(w,{},s));return r},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=70*e.x,a=70*e.y;return Object(f.jsx)("div",{className:"miofa-section",style:{width:t,height:a},children:this.renderCells()})}}]),a}(s.Component)),ie=(a(60),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getLayouts=function(){return M},e.mapSection=function(t,a){var n=e.props,r=n.mapping,s=n.messages,i=r[t],c=s[a];return i=i&&c?Object(h.a)(Object(h.a)({},i),{},{props:Object(h.a)({},c)}):e.getDefaultSection(t),Object(h.a)(Object(h.a)({},i),{},{key:a})},e}return a}(function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getDefaultSection=function(e){var t=e.split("x"),a=t[0],n=t[1];return Object(f.jsx)(se,{x:a,y:n})},e.mapSection=function(t,a){var n,r=null!==(n=e.props.mapping[t])&&void 0!==n?n:e.getDefaultSection(t);return Object(h.a)(Object(h.a)({},r),{},{key:a})},e.getMappedSectionsToLayout=function(t){if(null!=t)return t.map(e.mapSection)},e.getLayouts=function(){return[]},e.getLayout=function(){var t=e.getLayouts();return t[Math.floor(Math.random()*t.length)]},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"layout-container",children:this.getMappedSectionsToLayout(this.getLayout())})}}]),a}(s.Component)));var ce=Object(z.b)((function(e){return{messages:ae(e)}}),null)(ie),oe=(a(61),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.disabled,a=e.onClick,n=e.className;return Object(f.jsx)("div",{className:"pagination-button "+n+(t?" disabled":""),onClick:t?null:a})}}]),a}(s.Component)),ue=(a(62),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).nextPageHandler=function(){var t=e.props,a=t.nextPage,n=t.fetchMessages,r=e.props.configState,s=r.current,i=r.items,c=r.pageSize,o=s+1;i.length<o*c&&n({page:o,pageSize:c}),a()},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this,t=this.props.previousPage,a=this.props.configState,n=a.current,r=a.pageCount;return Object(f.jsxs)("div",{className:"pagination-controller",children:[Object(f.jsx)(oe,{className:"previous",disabled:1===n,onClick:function(){return t()}}),Object(f.jsxs)("div",{className:"total-display",children:["Page ",Object(f.jsx)("span",{children:n})," of ",r]}),Object(f.jsx)(oe,{className:"next",disabled:n>=r,onClick:function(){return e.nextPageHandler()}})]})}}]),a}(s.Component)),le={nextPage:_,previousPage:ee,fetchMessages:Z},me=Object(z.b)((function(e){return{configState:(t=e,t.messages)};var t}),le)(ue),de=a.p+"static/media/Hairpin-1.0fdf7c05.png",je=a.p+"static/media/Hairpin-3.52eb928a.png",pe=(a(63),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.link,a=e.text,n=e.icon,r=void 0===n?je:n,s=e.onClick;return Object(f.jsx)("div",{className:"navigation-button",children:t?Object(f.jsxs)(u.b,{to:t,children:[Object(f.jsx)("button",{type:"button",onClick:s,children:a}),Object(f.jsx)("img",{src:r,alt:""})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:s,children:a}),Object(f.jsx)("img",{src:r,alt:""})]})})}}]),a}(s.Component)),be={Next:je,Plus:de},he=pe,fe=(a(64),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"main-stage-container",children:[Object(f.jsx)(me,{}),Object(f.jsx)(ce,{mapping:E}),Object(f.jsx)(he,{link:"/send-message",text:"Send a Message",icon:be.Plus})]})}}]),a}(s.Component)),Oe=(a(65),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){for(var e=this.props,t=e.isHorizontal,a=void 0!==t&&t,n=e.className,r=void 0===n?"":n,s=[],i=0;i<8;i++){var c=3/(8-i)+1+"s";s.push(Object(f.jsx)("div",{className:"curtain-frame "+(a?"horizontal":"vertical"),style:{animationDuration:c}},i))}return Object(f.jsx)("div",{className:"curtain "+r,children:s})}}]),a}(s.Component)),ge=(a(66),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"game-screen",children:[Object(f.jsx)("div",{className:"invader left"}),Object(f.jsx)("div",{className:"invader right"}),Object(f.jsx)("div",{className:"shot left"}),Object(f.jsx)("div",{className:"shot right"})]})}}]),a}(s.Component)),ve=(a(67),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"loading-container",children:Object(f.jsx)("div",{className:"loading-bar"})})}}]),a}(s.Component)),xe=(a(68),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"mio loading"})}}]),a}(s.Component)),ye=(a(69),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"welcome-message-container",children:[Object(f.jsx)("div",{className:"welcome-message",children:"Happy 1.000.000 Subscribers, Mio!!."}),Object(f.jsxs)("div",{className:"the-mion-family-tag",children:["The Mio-n Family~!",Object(f.jsx)("img",{src:de,width:"40",height:"20",alt:""})]})]})}}]),a}(s.Component)),Ce=(a(70),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isReady:!1,isSet:!1,isGo:!1},e.componentDidMount=function(){setTimeout((function(){e.setState({isReady:!0})}),7e3)},e.handleRemoveCurtain=function(){var t=e.props.markAssetAsLoaded;e.setState({isGo:!0}),setTimeout((function(){t()}),6e3)},e.handleTransition=function(){e.setState({isSet:!0}),setTimeout(e.handleRemoveCurtain,1e3)},e.renderCurtain=function(){return Object(f.jsxs)("div",{className:"curtain-container",children:[Object(f.jsx)("div",{className:"mio-stage-curtain",children:Object(f.jsx)(Oe,{isHorizontal:!0})}),Object(f.jsxs)("div",{className:"main-stage-curtain-container",children:[Object(f.jsx)(Oe,{className:"left"}),Object(f.jsx)(Oe,{className:"right"})]})]})},e.renderWelcome=function(){var t=e.state,a=t.isReady,n=t.isSet;return Object(f.jsx)("div",{className:"welcome-container",children:Object(f.jsxs)("div",{style:n?{animation:"hide-welcome-container-animate 1s linear 1"}:{},children:[Object(f.jsxs)("div",{className:"welcome-stage",children:[Object(f.jsxs)("div",{className:"mio-info-panel",children:[Object(f.jsx)("span",{className:"score",children:"SCORE: 999K"}),Object(f.jsx)("span",{className:"name",children:"OOKAMI MIO"}),Object(f.jsx)(ge,{})]}),Object(f.jsx)(xe,{}),Object(f.jsx)(ve,{}),a?Object(f.jsx)("div",{className:"welcome-action",children:Object(f.jsx)(he,{onClick:e.handleTransition,text:"See Messages",icon:be.Next})}):Object(f.jsx)("div",{})]}),Object(f.jsx)(ye,{})]})})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.isGo;return this.props.isAssetLoaded?Object(f.jsx)("div",{}):e?this.renderCurtain():this.renderWelcome()}}]),a}(s.Component)),Me={markAssetAsLoaded:te},Se=Object(z.b)((function(e){return{isAssetLoaded:ne(e)}}),Me)(Ce),Ne=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={mio:Object(f.jsx)(x,{}),main:Object(f.jsx)(fe,{})},e.renderStage=function(){var t=e.props.isAssetLoaded,a=e.state,n=a.mio,r=a.main;return Object(f.jsxs)("div",{style:t?{}:{height:"100vh",overflow:"hidden"},children:[n," ",r]})},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Se,{}),this.renderStage()]})}}]),a}(s.Component),we=Object(z.b)((function(e){return{isAssetLoaded:ne(e)}}))(Ne),ke=(a(71),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.children;return Object(f.jsx)("form",{className:"form-container",children:e})}}]),a}(s.Component)),Fe=(a(30),a(16)),Le=(a(72),function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfItem:1},e.getLimit=function(){return e.props.limit},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value,s=e.props,i=s.onChange,c=s.value,o=n.split("-",2),u=Object(Fe.a)(o,2),l=u[0],m=u[1];c&&(r?c[m]=r:c.splice(m,1),i({target:{name:l,value:c}}))},e.handeAddItem=function(){var t=e.state.numberOfItem;e.setState({numberOfItem:t+1})},e.handeRemoveItem=function(t){var a=e.state.numberOfItem;e.setState({numberOfItem:a-1}),e.handleChange({target:{name:t,value:null}})},e.renderInputAction=function(t,a){if(t>0)return e.renderRemoveItemAction(t,a);var n=e.state.numberOfItem===e.getLimit();return e.renderAddItemAction(t,a,n)},e.renderRemoveItemAction=function(t,a){return Object(f.jsx)("div",{className:"action",onClick:function(){return e.handeRemoveItem(a)},children:"-"},t)},e.renderAddItemAction=function(t,a,n){return Object(f.jsx)("div",{name:a,className:"action"+(n?" hidden":" "),onClick:n?null:e.handeAddItem,children:"+"},t)},e.renderInput=function(){for(var t=e.state.numberOfItem,a=e.props,n=a.name,r=a.placeholder,s=[],i=0;i<t;i++){var c=n+"-"+i;s.push(e.renderInputAction(i,c)),s.push(Object(f.jsx)("input",{name:c,onChange:e.handleChange,placeholder:r+" "+(i+1)},c))}return s},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.title;return Object(f.jsxs)("label",{className:"input multiple-input",children:[Object(f.jsx)("div",{className:"input-container",children:this.renderInput()}),Object(f.jsxs)("span",{children:[e,":"]})]})}}]),a}(s.Component)),Ae=["type","title","name","onChange","placeholder","value"],Pe=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.type,e.title),a=e.name,n=e.onChange,r=e.placeholder,s=e.value,i=Object(W.a)(e,Ae);return Object(f.jsxs)("label",{className:"input",children:[Object(f.jsx)("textarea",Object(h.a)({name:a,value:s,onChange:n,placeholder:r},i)),Object(f.jsxs)("span",{children:[t,":"]})]})}}]),a}(s.Component),Ie=["type","title","name","onChange","value","placeholder"],Te=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.title,n=e.name,r=e.onChange,s=e.value,i=e.placeholder,c=Object(W.a)(e,Ie);switch(t){case"multi":return Object(f.jsx)(Le,Object(h.a)({title:a,type:t,value:s,name:n,onChange:r,placeholder:i},c));case"textarea":return Object(f.jsx)(Pe,Object(h.a)({title:a,type:t,value:null!==s&&void 0!==s?s:"",name:n,onChange:r,placeholder:i},c));default:return Object(f.jsxs)("label",{className:"input",children:[Object(f.jsx)("input",Object(h.a)({className:"checkbox"==t?"checkbox":"",type:t,name:n,value:null!==s&&void 0!==s?s:"",onChange:r,placeholder:i},c)),Object(f.jsxs)("span",{children:[a,":"]})]})}}}]),a}(s.Component),De=Object(J.b)("posts/sendMessages",function(){var e=Object(H.a)(U.a.mark((function e(t){var a,n,r,s,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.email,r=t.frames,s=t.message,e.next=3,q.sendMessage({name:a,email:n,frames:r,message:s});case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Re=Object(J.c)({name:"form",initialState:{submitStatus:0},extraReducers:function(e){e.addCase(De.pending,(function(e){e.status="loading"})).addCase(De.fulfilled,(function(e,t){var a=t.payload.status;e.status="succeeded",e.submitStatus=a})).addCase(De.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Ee=Re,ze=(a(73),a.p+"static/media/Miofa assets.94eed8f8.rar"),Be={email:void 0,message:void 0,name:void 0,myMioFa:{frames:[]}},Ue=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={form:Be,useCustomMioFa:!1},e.renderPreviewMessageSection=function(){var t=e.state.form,a=t.message,n=t.name,r=t.myMioFa,s=e.isSubmitSuccess();return Object(f.jsx)(R,{message:s?"Thank you!!!":a,name:s?"- The Mio-on Family -":n,isPreview:!0,frames:r.frames})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value,s=e.state.form,i=e.updateValue(s,n,r);e.setState({form:Object(h.a)({},i)})},e.updateValue=function(t,a,n){var r=a.split(".",2);return r.length>1?Object(h.a)(Object(h.a)({},t),{},Object(y.a)({},r[0],e.updateValue(t[r[0]],r[1],n))):Object(h.a)(Object(h.a)({},t),{},Object(y.a)({},r[0],n))},e.resetForm=function(){e.setState({form:Object(h.a)(Object(h.a)({},Be),{},{myMioFa:{frames:[]}}),useCustomMioFa:!1})},e.validateData=function(e,t,a){var n=[];return e&&0!==e.trim().length||n.push("Email"),t&&0!==t.trim().length||n.push("Name"),a&&0!==a.trim().length||n.push("Message"),!(n.length>0)||(m.NotificationManager.warning("Missing fields: "+n.join(", ")),!1)},e.submitForm=function(){var t=e.props.sendMessages,a=e.state.form,n=a.email,r=a.name,s=a.message,i=a.myMioFa;e.validateData(n,r,s)&&(t({email:n,name:r,message:s,frames:i.frames}),e.resetForm())},e.handleUseCustomMioFa=function(){var t=e.state.useCustomMioFa;e.setState({useCustomMioFa:!t})},e.renderForm=function(){var t=e.state,a=t.form,n=a.email,r=a.message,s=a.name,i=a.myMioFa,c=t.useCustomMioFa;return Object(f.jsxs)(ke,{children:[Object(f.jsxs)("div",{className:"notes",children:[Object(f.jsx)("p",{children:"- Email to identify the sender, won't be displayed on the website"}),Object(f.jsx)("p",{children:"- (*) fields are required"}),Object(f.jsx)("p",{children:"- You can only submit 1 message per day so please check everything carefully"})]}),Object(f.jsx)(Te,{type:"text",title:"Email(*)",name:"email",onChange:e.handleChange,value:n,placeholder:"mfa@mail.co (only 1 email/message)"}),Object(f.jsx)(Te,{type:"text",title:"Name(*)",name:"name",onChange:e.handleChange,value:s,placeholder:"- MioFa - (20 characters max)",maxLength:"20"}),Object(f.jsx)(Te,{type:"textarea",title:"Message(*)",name:"message",onChange:e.handleChange,value:r,placeholder:"Your messages for Mio. (200 characters max)",rows:"8",maxLength:"200",style:{resize:"none"}}),Object(f.jsx)(Te,{type:"checkbox",title:"Customize Miochun",onChange:e.handleUseCustomMioFa,checked:c}),c?[Object(f.jsxs)("div",{className:"notes",children:[Object(f.jsxs)("p",{children:["- Sample MioFa assets ",Object(f.jsx)("a",{href:ze,children:"HERE"},"miofaAssets"),"."]}),Object(f.jsx)("p",{children:"- Upload your image to an online hosting service (or Twitter), and paste the image address to the URL fields below"})]}),Object(f.jsx)(Te,{type:"multi",title:"URLs",name:"myMioFa.frames",value:i.frames,onChange:e.handleChange,placeholder:"Frame",limit:2},"customMioFaFrames")]:Object(f.jsx)("div",{}),Object(f.jsxs)("div",{className:"action-container",children:[Object(f.jsx)("input",{type:"button",style:{margin:"5px"},value:"Submit",onClick:e.submitForm}),Object(f.jsx)("input",{type:"reset",value:"Reset",onClick:e.resetForm})]})]})},e.renderSuccessForm=function(){return Object(f.jsx)("div",{className:"success-form",children:"Thank you for the submission. We have received your message, and will review it shortly."})},e.isSubmitSuccess=function(){return 201===e.props.submissionStatus},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"send-message-container",children:[Object(f.jsx)("div",{className:"mimic pagination-controller"}),Object(f.jsxs)("div",{className:"preview-container",children:[Object(f.jsx)("span",{children:"Preview"}),this.renderPreviewMessageSection()]}),this.isSubmitSuccess()?this.renderSuccessForm():this.renderForm(),Object(f.jsx)(he,{link:"/",text:"To Stage"})]})}}]),a}(s.Component),He={sendMessages:De},Je=Object(z.b)((function(e){return{submissionStatus:(t=e,t.form.submitStatus)};var t}),He)(Ue);var We=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/",element:Object(f.jsx)(we,{})}),Object(f.jsx)(l.a,{path:"/send-message",element:Object(f.jsx)(Je,{})})]})})}),Object(f.jsx)(m.NotificationContainer,{})]})},Ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))},Ge=Object(J.a)({reducer:{messages:re.reducer,form:Ee.reducer}});Ge.dispatch(Z({page:1,pageSize:5}));var Ve=Ge,Ke=a(26);console.log("Version: "+Ke.b),console.log("Credits: "+Ke.a),console.log("Github: https://github.com/R-Jim/Mio-million"),o.a.render(Object(f.jsx)(z.a,{store:Ve,children:Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(We,{})})}),document.getElementById("root")),Ye()}]),[[74,1,2]]]);
//# sourceMappingURL=main.011f1aee.chunk.js.map