(this["webpackJsonpMio-anniversary"]=this["webpackJsonpMio-anniversary"]||[]).push([[0],Array(26).concat([function(e){e.exports=JSON.parse('{"b":"0.6.2-BETA","a":"Thiago (BE, Domain), Crois & Mat (Main Stage & Mio chun assets), The Mion~n Family~!, R-Jim (FE) and You"}')},,,,function(e,t,n){},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),s=n(12),c=n.n(s),o=(n(37),n(22)),u=n(6),l=n(14),m=(n(43),n(44),n(2)),d=n(5),j=n(4),p=n(3),b=(n(45),n(7)),f=(n(46),n(1)),h=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.style;return Object(f.jsx)("div",{className:"backdrop-play-logo",style:Object(b.a)({},e)})}}]),n}(r.Component),O=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderPlayLogosEffect=function(){for(var e=[],t=0;t<10;t++){var n=9.5*t+5+"%",a=Math.floor(4*Math.random())+4+"s",r=Math.floor(4*Math.random())+8+"s";e.push(Object(f.jsx)(h,{style:{left:n,animationDuration:a+", "+r}},t))}for(var i=0;i<8;i++){var s=8*i+10+"%",c=Math.floor(2*Math.random())+8+"s",o=Math.floor(8*Math.random())+10+"s";e.push(Object(f.jsx)(h,{style:{left:s,animationDuration:c+", "+o}},i))}return Object(f.jsx)("div",{className:"backdrop-play-logo-container",children:e})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(f.jsxs)("div",{className:"backdrop",children:[this.renderPlayLogosEffect(),e]})}}]),n}(r.Component),v=(n(48),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{id:"mio"})}}]),n}(r.Component)),g=(n(49),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)(O,{children:Object(f.jsx)("div",{className:"mio-stage",children:Object(f.jsx)(v,{})})})}}]),n}(r.Component)),x=n(17),y="4x3",C=[[y,y,y,y,y]],M=n(16),N=(n(50),function(e){return e.disablePop?0:Math.floor(3*Math.random())*Math.floor(3*Math.random()+2)}),w=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getDefautState=function(){return{popTime:N(e.props),isDespawn:!1}},e.state=e.getDefautState(),e.getSpawnTime=function(){var t=e.state.popTime;return.5+Math.floor(t/6)},e.resetState=function(){e.setState(e.getDefautState())},e.shouldComponentUpdate=function(t){return!e.props.isPreview&&(t!==e.props&&(e.setState({isDespawn:!0}),e.updateTimeOut=setTimeout(e.resetState.bind(Object(M.a)(e)),1e3*e.getSpawnTime())),!0)},e.componentWillUnmount=function(){clearTimeout(e.updateTimeOut)},e.getMiofaClass=function(){var e=["normal","normal","normal","normal","normal","headband","lightstick"];return e[Math.floor(Math.random()*e.length)]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.popTime,n=e.isDespawn,a=n?2*this.getSpawnTime():this.getSpawnTime(),r={animationName:n?"miofa-despawn":"miofa-spawn, miofa-animate",animationDuration:a+"s, "+t+"s",animationDelay:"0s, "+a+"s"};return Object(f.jsx)("div",{className:"miofa-container",style:r,onLoad:this.check,children:Object(f.jsx)("div",{className:"miofa "+this.getMiofaClass()})})}}]),n}(r.Component),S=(n(51),["#e6e7e7","#7b96d5","#7b96d5","#7b96d5","#b20335"]),k=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getBorderBlinkTiming=function(){return Math.floor(Math.random()*S.length)},e.getBorderColor=function(e){return S[e]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.isPreview,a=this.getBorderBlinkTiming(),r=a/4+10+"s",i=this.getBorderColor(a),s="0 0 12px "+i;return Object(f.jsxs)("div",{className:"miofa-with-message"+(t.length>100?" big":""),children:[Object(f.jsx)("div",{className:"message-border",style:{borderColor:i,boxShadow:s,animationDuration:r}}),Object(f.jsx)("div",{className:"message-container",children:t}),Object(f.jsx)(w,{disablePop:!0,isPreview:n}),Object(f.jsx)(w,{disablePop:!0,isPreview:n})]})}}]),n}(r.Component),F=(n(52),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.isPreview;return Object(f.jsxs)("div",{className:"miofa-with-name",children:[Object(f.jsx)(w,{disablePop:!0,isPreview:n}),Object(f.jsx)("div",{className:"name-container",children:t})]})}}]),n}(r.Component)),L=(n(53),n.p+"static/media/MiochunRig-Front.a9c0ca8c.png"),A=n.p+"static/media/MiochunRig-Front2.a8e19dec.png",I=n.p+"static/media/MiochunRig-Error.32cbc742.png",P=[A,L],T=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getDefautState=function(){return{isDespawn:!1,currentIndex:0,errorFrameIndexes:[]}},e.state=e.getDefautState(),e.resetState=function(){e.setState(e.getDefautState())},e.isFramesChange=function(t){var n=e.props.frames,a=t.frames;return a.length!==n.length||(a.forEach((function(e,t){if(n[t]!==e)return!0})),!1)},e.shouldComponentUpdate=function(t){return!e.props.isPreview&&(e.isFramesChange(t)&&(e.setState({isDespawn:!0}),e.updateTimeOut=setTimeout(e.resetState.bind(Object(M.a)(e)),1e3)),!0)},e.componentWillUnmount=function(){clearTimeout(e.updateTimeOut),clearInterval(e.updateIndex)},e.getFrames=function(){var t=e.props.frames,n=void 0===t?[]:t;return 0===n.length?P:n},e.getNextFrameIndex=function(){var t=e.getFrames(),n=e.state.currentIndex;return!t||++n>=t.length?0:n},e.updateIndex=function(){var t=e.getNextFrameIndex();e.setState({currentIndex:t})},e.componentDidMount=function(){setTimeout((function(){e.animationInterval=setInterval(e.updateIndex.bind(Object(M.a)(e)),500)}),500)},e.setErrorFrame=function(t){var n=e.state.errorFrameIndexes;n.push(t),e.setState({errorFrameIndexes:n})},e.renderFrames=function(){var t=e.state,n=t.currentIndex,a=t.errorFrameIndexes;return Object(f.jsx)("div",{children:e.getFrames().map((function(t,r){return Object(f.jsx)("img",{src:void 0!==a.find((function(e){return e===r}))?I:t,width:n===r?"90":"0",height:"90",alt:"",onError:function(){return e.setErrorFrame(r)}},r)}))})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.isDespawn,t={animationName:e?"miofa-despawn":"miofa-spawn",animationDuration:e?"2s":"1s",animationDelay:"0s"};return Object(f.jsx)("div",{className:"my-miofa-container",style:t,onLoad:this.check,children:this.renderFrames()})}}]),n}(r.Component),D=(n(54),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderMioFa=function(t,n){var a=e.props.isPreview;return Object(f.jsx)(w,{isPreview:a},n)},e.renderMioFas=function(t){return Array.from(Array(t)).map(e.renderMioFa)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=void 0===t?"Your messages for Mio.":t,a=e.name,r=void 0===a?"- MioFa -":a,i=e.frames,s=void 0===i?[]:i,c=e.isPreview;return Object(f.jsxs)("div",{className:"message-section-container",children:[this.renderMioFas(5),Object(f.jsx)(k,{message:n,isPreview:c}),this.renderMioFas(2),Object(f.jsx)(T,{frames:s}),Object(f.jsx)(F,{name:r,isPreview:c}),this.renderMioFas(1)]})}}]),n}(r.Component)),R=Object(x.a)({},y,Object(f.jsx)(D,{})),E=n(11),z=n(20),B=n.n(z),H=n(21),U=n(18),J=n(19),V=(a="https://api.miosha.moe/anniv3/v1/","",[{message:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",name:"miofa"}].map((function(e,t){return Object(b.a)(Object(b.a)({},e),{},{name:e.name+"-"+t})}))),W=Object(U.b)("posts/fetchMessages",function(){var e=Object(H.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,t.pageSize,e.abrupt("return",{page:n,pageCount:4,pageData:V});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=Object(U.c)({name:"messages",initialState:{pageSize:5,current:1,pageCount:0,items:[],status:"idle",error:"",isAssetLoaded:!1},reducers:{nextPage:function(e){e.current+=1},previousPage:function(e){e.current-=1},markAssetAsLoaded:function(e){e.isAssetLoaded=!0}},extraReducers:function(e){e.addCase(W.pending,(function(e){e.status="loading"})).addCase(W.fulfilled,(function(e,t){var n=t.payload,a=n.page,r=n.pageCount,i=n.pageData;e.status="succeeded",e.current=a,e.pageCount=r,e.items=e.items.concat(i)})).addCase(W.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),Y=G.actions,K=Y.nextPage,q=Y.previousPage,Q=Y.markAssetAsLoaded,X=function(e){var t=e.messages,n=t.items,a=t.current,r=t.pageSize;return n.slice((a-1)*r,a*r)},Z=function(e){return e.messages.isAssetLoaded},$=G,_=(n(59),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderCells=function(){for(var t=e.props,n=t.x,a=t.y,r=[],i=0;i<n*a;i++)r.push(Object(f.jsx)(w,{},i));return r},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=70*e.x,n=70*e.y;return Object(f.jsx)("div",{className:"miofa-section",style:{width:t,height:n},children:this.renderCells()})}}]),n}(r.Component)),ee=(n(60),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getLayouts=function(){return C},e.mapSection=function(t,n){var a=e.props,r=a.mapping,i=a.messages,s=r[t],c=i[n];return s=s&&c?Object(b.a)(Object(b.a)({},s),{},{props:Object(b.a)({},c)}):e.getDefaultSection(t),Object(b.a)(Object(b.a)({},s),{},{key:n})},e}return n}(function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getDefaultSection=function(e){var t=e.split("x"),n=t[0],a=t[1];return Object(f.jsx)(_,{x:n,y:a})},e.mapSection=function(t,n){var a,r=null!==(a=e.props.mapping[t])&&void 0!==a?a:e.getDefaultSection(t);return Object(b.a)(Object(b.a)({},r),{},{key:n})},e.getMappedSectionsToLayout=function(t){if(null!=t)return t.map(e.mapSection)},e.getLayouts=function(){return[]},e.getLayout=function(){var t=e.getLayouts();return t[Math.floor(Math.random()*t.length)]},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"layout-container",children:this.getMappedSectionsToLayout(this.getLayout())})}}]),n}(r.Component)));var te=Object(E.b)((function(e){return{messages:X(e)}}),null)(ee),ne=(n(61),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.onClick,a=e.className;return Object(f.jsx)("div",{className:"pagination-button "+a+(t?" disabled":""),onClick:t?null:n})}}]),n}(r.Component)),ae=(n(62),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).nextPageHandler=function(){var t=e.props,n=t.nextPage,a=t.fetchMessages,r=e.props.configState,i=r.current,s=r.items,c=r.pageSize,o=i+1;s.length<o*c&&a({page:o,pageSize:c}),n()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.previousPage,n=this.props.configState,a=n.current,r=n.pageCount;return Object(f.jsxs)("div",{className:"pagination-controller",children:[Object(f.jsx)(ne,{className:"previous",disabled:1===a,onClick:function(){return t()}}),Object(f.jsxs)("div",{className:"total-display",children:["Page ",Object(f.jsx)("span",{children:a})," of ",r]}),Object(f.jsx)(ne,{className:"next",disabled:a>=r,onClick:function(){return e.nextPageHandler()}})]})}}]),n}(r.Component)),re={nextPage:K,previousPage:q,fetchMessages:W},ie=Object(E.b)((function(e){return{configState:(t=e,t.messages)};var t}),re)(ae),se=n.p+"static/media/Hairpin-1.0fdf7c05.png",ce=n.p+"static/media/Hairpin-3.52eb928a.png",oe=(n(63),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.text,a=e.icon,r=void 0===a?ce:a,i=e.onClick;return Object(f.jsx)("div",{className:"navigation-button",children:t?Object(f.jsxs)(o.b,{to:t,children:[Object(f.jsx)("button",{type:"button",onClick:i,children:n}),Object(f.jsx)("img",{src:r,alt:""})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:i,children:n}),Object(f.jsx)("img",{src:r,alt:""})]})})}}]),n}(r.Component)),ue={Next:ce,Plus:se},le=oe,me=(n(64),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"main-stage-container",children:[Object(f.jsx)(ie,{}),Object(f.jsx)(te,{mapping:R}),Object(f.jsx)(le,{link:"/send-message",text:"Send a Message",icon:ue.Plus})]})}}]),n}(r.Component)),de=(n(65),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){for(var e=this.props,t=e.isHorizontal,n=void 0!==t&&t,a=e.className,r=void 0===a?"":a,i=[],s=0;s<8;s++){var c=3/(8-s)+1+"s";i.push(Object(f.jsx)("div",{className:"curtain-frame "+(n?"horizontal":"vertical"),style:{animationDuration:c}},s))}return Object(f.jsx)("div",{className:"curtain "+r,children:i})}}]),n}(r.Component)),je=(n(66),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"game-screen",children:[Object(f.jsx)("div",{className:"invader left"}),Object(f.jsx)("div",{className:"invader right"}),Object(f.jsx)("div",{className:"shot left"}),Object(f.jsx)("div",{className:"shot right"})]})}}]),n}(r.Component)),pe=(n(67),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"loading-container",children:Object(f.jsx)("div",{className:"loading-bar"})})}}]),n}(r.Component)),be=(n(68),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"mio loading"})}}]),n}(r.Component)),fe=(n(69),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"welcome-message-container",children:[Object(f.jsx)("div",{className:"welcome-message",children:"Happy 1.000.000 Subscribers, Mio!!."}),Object(f.jsxs)("div",{className:"the-mion-family-tag",children:["The Mio-n Family~!",Object(f.jsx)("img",{src:se,width:"40",height:"20",alt:""})]})]})}}]),n}(r.Component)),he=(n(70),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isReady:!1,isSet:!1,isGo:!1},e.componentDidMount=function(){setTimeout((function(){e.setState({isReady:!0})}),7e3)},e.handleRemoveCurtain=function(){var t=e.props.markAssetAsLoaded;e.setState({isGo:!0}),setTimeout((function(){t()}),6e3)},e.handleTransition=function(){e.setState({isSet:!0}),setTimeout(e.handleRemoveCurtain,1e3)},e.renderCurtain=function(){return Object(f.jsxs)("div",{className:"curtain-container",children:[Object(f.jsx)("div",{className:"mio-stage-curtain",children:Object(f.jsx)(de,{isHorizontal:!0})}),Object(f.jsxs)("div",{className:"main-stage-curtain-container",children:[Object(f.jsx)(de,{className:"left"}),Object(f.jsx)(de,{className:"right"})]})]})},e.renderWelcome=function(){var t=e.state,n=t.isReady,a=t.isSet;return Object(f.jsx)("div",{className:"welcome-container",children:Object(f.jsxs)("div",{style:a?{animation:"hide-welcome-container-animate 1s linear 1"}:{},children:[Object(f.jsxs)("div",{className:"welcome-stage",children:[Object(f.jsxs)("div",{className:"mio-info-panel",children:[Object(f.jsx)("span",{className:"score",children:"SCORE: 999K"}),Object(f.jsx)("span",{className:"name",children:"OOKAMI MIO"}),Object(f.jsx)(je,{})]}),Object(f.jsx)(be,{}),Object(f.jsx)(pe,{}),n?Object(f.jsx)("div",{className:"welcome-action",children:Object(f.jsx)(le,{onClick:e.handleTransition,text:"See Messages",icon:ue.Next})}):Object(f.jsx)("div",{})]}),Object(f.jsx)(fe,{})]})})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.isGo;return this.props.isAssetLoaded?Object(f.jsx)("div",{}):e?this.renderCurtain():this.renderWelcome()}}]),n}(r.Component)),Oe={markAssetAsLoaded:Q},ve=Object(E.b)((function(e){return{isAssetLoaded:Z(e)}}),Oe)(he),ge=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={mio:Object(f.jsx)(g,{}),main:Object(f.jsx)(me,{})},e.renderStage=function(){var t=e.props.isAssetLoaded,n=e.state,a=n.mio,r=n.main;return Object(f.jsxs)("div",{style:t?{}:{height:"100vh",overflow:"hidden"},children:[a," ",r]})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ve,{}),this.renderStage()]})}}]),n}(r.Component),xe=Object(E.b)((function(e){return{isAssetLoaded:Z(e)}}))(ge),ye=(n(71),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(f.jsx)("form",{className:"form-container",children:e})}}]),n}(r.Component)),Ce=(n(30),n(15)),Me=(n(72),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numberOfItem:1},e.getLimit=function(){return e.props.limit},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value,i=e.props,s=i.onChange,c=i.value,o=a.split("-",2),u=Object(Ce.a)(o,2),l=u[0],m=u[1];c&&(r?c[m]=r:c.splice(m,1),s({target:{name:l,value:c}}))},e.handeAddItem=function(){var t=e.state.numberOfItem;e.setState({numberOfItem:t+1})},e.handeRemoveItem=function(t){var n=e.state.numberOfItem;e.setState({numberOfItem:n-1}),e.handleChange({target:{name:t,value:null}})},e.renderInputAction=function(t,n){if(t>0)return e.renderRemoveItemAction(t,n);var a=e.state.numberOfItem===e.getLimit();return e.renderAddItemAction(t,n,a)},e.renderRemoveItemAction=function(t,n){return Object(f.jsx)("div",{className:"action",onClick:function(){return e.handeRemoveItem(n)},children:"-"},t)},e.renderAddItemAction=function(t,n,a){return Object(f.jsx)("div",{name:n,className:"action"+(a?" hidden":" "),onClick:a?null:e.handeAddItem,children:"+"},t)},e.renderInput=function(){for(var t=e.state.numberOfItem,n=e.props,a=n.name,r=n.placeholder,i=[],s=0;s<t;s++){var c=a+"-"+s;i.push(e.renderInputAction(s,c)),i.push(Object(f.jsx)("input",{name:c,onChange:e.handleChange,placeholder:r+" "+(s+1)},c))}return i},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.title;return Object(f.jsxs)("label",{className:"input multiple-input",children:[Object(f.jsx)("div",{className:"input-container",children:this.renderInput()}),Object(f.jsxs)("span",{children:[e,":"]})]})}}]),n}(r.Component)),Ne=["type","title","name","onChange","placeholder","value"],we=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.type,e.title),n=e.name,a=e.onChange,r=e.placeholder,i=e.value,s=Object(J.a)(e,Ne);return Object(f.jsxs)("label",{className:"input",children:[Object(f.jsx)("textarea",Object(b.a)({name:n,value:i,onChange:a,placeholder:r},s)),Object(f.jsxs)("span",{children:[t,":"]})]})}}]),n}(r.Component),Se=["type","title","name","onChange","value","placeholder"],ke=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.title,a=e.name,r=e.onChange,i=e.value,s=e.placeholder,c=Object(J.a)(e,Se);switch(t){case"multi":return Object(f.jsx)(Me,Object(b.a)({title:n,type:t,value:i,name:a,onChange:r,placeholder:s},c));case"textarea":return Object(f.jsx)(we,Object(b.a)({title:n,type:t,value:null!==i&&void 0!==i?i:"",name:a,onChange:r,placeholder:s},c));default:return Object(f.jsxs)("label",{className:"input",children:[Object(f.jsx)("input",Object(b.a)({className:"checkbox"==t?"checkbox":"",type:t,name:a,value:null!==i&&void 0!==i?i:"",onChange:r,placeholder:s},c)),Object(f.jsxs)("span",{children:[n,":"]})]})}}}]),n}(r.Component),Fe=Object(U.b)("posts/sendMessages",function(){var e=Object(H.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.name,t.email,t.frames,t.message;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Le=(n(73),{email:void 0,message:void 0,name:void 0,myMioFa:{frames:[]}}),Ae=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={form:Le,useCustomMioFa:!1},e.renderPreviewMessageSection=function(){var t=e.state.form,n=t.message,a=t.name,r=t.myMioFa;return Object(f.jsx)(D,{message:n,name:a,isPreview:!0,frames:r.frames})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value,i=e.state.form,s=e.updateValue(i,a,r);e.setState({form:Object(b.a)({},s)})},e.updateValue=function(t,n,a){var r=n.split(".",2);return r.length>1?Object(b.a)(Object(b.a)({},t),{},Object(x.a)({},r[0],e.updateValue(t[r[0]],r[1],a))):Object(b.a)(Object(b.a)({},t),{},Object(x.a)({},r[0],a))},e.resetForm=function(){e.setState({form:Object(b.a)(Object(b.a)({},Le),{},{myMioFa:{frames:[]}})})},e.validateData=function(e,t,n){var a=[];return e&&0!==e.trim().length||a.push("Email"),t&&0!==t.trim().length||a.push("Name"),n&&0!==n.trim().length||a.push("Message"),!(a.length>0)||(l.NotificationManager.warning("Missing fields: "+a.join(", ")),!1)},e.submitForm=function(){var t=e.props.sendMessages,n=e.state.form,a=n.email,r=n.name,i=n.message,s=n.myMioFa;e.validateData(a,r,i)&&(t({email:a,name:r,message:i,frames:s.frames}),e.resetForm())},e.handleUseCustomMioFa=function(){var t=e.state.useCustomMioFa;e.setState({useCustomMioFa:!t})},e.renderForm=function(){var t=e.state,n=t.form,a=n.email,r=n.message,i=n.name,s=n.myMioFa,c=t.useCustomMioFa;return Object(f.jsxs)(ye,{children:[Object(f.jsx)(ke,{type:"text",title:"Email",name:"email",onChange:e.handleChange,value:a,placeholder:"example@gmail.com"}),Object(f.jsx)(ke,{type:"text",title:"Name",name:"name",onChange:e.handleChange,value:i,placeholder:"Name (20 characters max)",maxLength:"20"}),Object(f.jsx)(ke,{type:"textarea",title:"Message",name:"message",onChange:e.handleChange,value:r,placeholder:"Your messages for Mio. (200 characters max)",rows:"8",maxLength:"200",style:{resize:"none"}}),Object(f.jsx)(ke,{type:"checkbox",title:"Custom MioFa",onChange:e.handleUseCustomMioFa,value:c}),c?Object(f.jsx)(ke,{type:"multi",title:"URLs",name:"myMioFa.frames",value:s.frames,onChange:e.handleChange,placeholder:"Frame",limit:2}):Object(f.jsx)("div",{}),Object(f.jsxs)("div",{className:"action-container",children:[Object(f.jsx)("input",{type:"button",style:{margin:"5px"},value:"Submit",onClick:e.submitForm}),Object(f.jsx)("input",{type:"reset",value:"Reset",onClick:e.resetForm})]})]})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"send-message-container",children:[Object(f.jsx)("div",{className:"mimic pagination-controller"}),Object(f.jsxs)("div",{className:"preview-container",children:[Object(f.jsx)("span",{children:"Preview"}),this.renderPreviewMessageSection()]}),this.renderForm(),Object(f.jsx)(le,{link:"/",text:"To Stage"})]})}}]),n}(r.Component),Ie={sendMessages:Fe},Pe=Object(E.b)(null,Ie)(Ae);var Te=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(o.a,{children:Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{path:"/",element:Object(f.jsx)(xe,{})}),Object(f.jsx)(u.a,{path:"/send-message",element:Object(f.jsx)(Pe,{})})]})})}),Object(f.jsx)(l.NotificationContainer,{})]})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))},Re=Object(U.a)({reducer:{messages:$.reducer}});Re.dispatch(W({page:1,pageSize:5}));var Ee=Re,ze=n(26);console.log("Version: "+ze.b),console.log("Credits: "+ze.a),c.a.render(Object(f.jsx)(E.a,{store:Ee,children:Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(Te,{})})}),document.getElementById("root")),De()}]),[[74,1,2]]]);
//# sourceMappingURL=main.90cd4ecb.chunk.js.map