(this["webpackJsonpMio-anniversary"]=this["webpackJsonpMio-anniversary"]||[]).push([[0],Array(29).concat([function(e,t,n){},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),s=n(11),c=n.n(s),o=(n(36),n(22)),u=n(6),l=n(14),m=(n(42),n(43),n(2)),j=n(5),p=n(4),d=n(3),b=(n(44),n(1)),f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"mio"})}}]),n}(r.Component),h=(n(46),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"mio-stage-backdrop",children:Object(b.jsx)("div",{className:"mio-stage",children:Object(b.jsx)(f,{})})})}}]),n}(r.Component)),O=n(17),v="4x3",g=[[v,v,v,v,v]],x=n(16),y=(n(47),function(e){return e.disablePop?0:Math.floor(3*Math.random())*Math.floor(3*Math.random()+2)}),C=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getDefautState=function(){return{popTime:y(e.props),isDespawn:!1}},e.state=e.getDefautState(),e.getSpawnTime=function(){var t=e.state.popTime;return.5+Math.floor(t/6)},e.resetState=function(){e.setState(e.getDefautState())},e.shouldComponentUpdate=function(t){return!e.props.isPreview&&(t!==e.props&&(e.setState({isDespawn:!0}),e.updateTimeOut=setTimeout(e.resetState.bind(Object(x.a)(e)),1e3*e.getSpawnTime())),!0)},e.componentWillUnmount=function(){clearTimeout(e.updateTimeOut)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.popTime,n=e.isDespawn,a=n?2*this.getSpawnTime():this.getSpawnTime(),r={animationName:n?"miofa-despawn":"miofa-spawn, miofa-animate",animationDuration:a+"s, "+t+"s",animationDelay:"0s, "+a+"s"};return Object(b.jsxs)("div",{className:"miofa-container",style:r,onLoad:this.check,children:[0!==t?Object(b.jsx)("div",{className:"debug-indicator",children:t}):null,Object(b.jsx)("div",{className:"miofa"})]})}}]),n}(r.Component),w=(n(48),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.isPreview;return Object(b.jsxs)("div",{className:"miofa-with-message",children:[Object(b.jsx)("div",{className:"message-container"+(t.length>100?" big":""),children:t}),Object(b.jsx)(C,{disablePop:!0,isPreview:n}),Object(b.jsx)(C,{disablePop:!0,isPreview:n})]})}}]),n}(r.Component)),N=(n(49),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.isPreview;return Object(b.jsxs)("div",{className:"miofa-with-name",children:[Object(b.jsx)(C,{disablePop:!0,isPreview:n}),Object(b.jsx)("div",{className:"name-container",children:t})]})}}]),n}(r.Component)),S=(n(50),[n.p+"static/media/miofa-1.a4886b13.png",n.p+"static/media/miofa-2.7589dd4e.png"]),M=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getDefautState=function(){return{isDespawn:!1,currentIndex:0}},e.state=e.getDefautState(),e.resetState=function(){e.setState(e.getDefautState())},e.isFramesChange=function(t){var n=e.props.frames,a=t.frames;return a.length!==n.length||(a.forEach((function(e,t){if(n[t]!==e)return!0})),!1)},e.shouldComponentUpdate=function(t){return!e.props.isPreview&&(e.isFramesChange(t)&&(e.setState({isDespawn:!0}),e.updateTimeOut=setTimeout(e.resetState.bind(Object(x.a)(e)),1e3)),!0)},e.componentWillUnmount=function(){clearTimeout(e.updateTimeOut),clearInterval(e.updateIndex)},e.getFrames=function(){var t=e.props.frames,n=void 0===t?[]:t;return 0===n.length?S:n},e.getNextFrameIndex=function(){var t=e.getFrames(),n=e.state.currentIndex;return n++,!t||n>=t.length?0:n},e.updateIndex=function(){var t=e.getNextFrameIndex();e.setState({currentIndex:t})},e.componentDidMount=function(){setTimeout((function(){e.animationInterval=setInterval(e.updateIndex.bind(Object(x.a)(e)),500)}),500)},e.renderFrames=function(){var t=e.state.currentIndex,n=e.getFrames();return Object(b.jsx)("div",{children:n.map((function(e,n){return Object(b.jsx)("img",{src:e,width:t===n?"90":"0",height:"90",alt:""},n)}))})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.isDespawn,t={animationName:e?"miofa-despawn":"miofa-spawn",animationDuration:e?"2s":"1s",animationDelay:"0s"};return Object(b.jsx)("div",{className:"my-miofa-container",style:t,onLoad:this.check,children:this.renderFrames()})}}]),n}(r.Component),k=(n(51),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderMioFa=function(t,n){var a=e.props.isPreview;return Object(b.jsx)(C,{isPreview:a},n)},e.renderMioFas=function(t){return Array.from(Array(t)).map(e.renderMioFa)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=void 0===t?"Your messages for Mio.":t,a=e.name,r=void 0===a?"- MioFa -":a,i=e.frames,s=void 0===i?[]:i,c=e.isPreview;return Object(b.jsxs)("div",{className:"message-section-container",children:[this.renderMioFas(5),Object(b.jsx)(w,{message:n,isPreview:c}),this.renderMioFas(2),Object(b.jsx)(M,{frames:s}),Object(b.jsx)(N,{name:r,isPreview:c}),this.renderMioFas(1)]})}}]),n}(r.Component)),P=Object(O.a)({},v,Object(b.jsx)(k,{})),F=n(7),I=n(12),T=n(20),D=n.n(T),A=n(21),R=n(18),L=n(19),z={messageConverter:function(e){var t=e.content,n=e.author;return{message:t,name:n.name,frames:n.avatar}}},E=["pageData"],H=null!==(a="https://api.miosha.moe/anniv3/v1/")?a:"",J={"X-API-Key":("","")},U={getMessage:function(e){var t=e.page,n=e.pageSize;return fetch(H+"messages?page="+t+"&pageSize="+n,{headers:J}).then((function(e){return e.json()})).then((function(e){var t=e.pageData,n=Object(L.a)(e,E);return Object(F.a)(Object(F.a)({},n),{},{pageData:t.map((function(e){return z.messageConverter(e)}))})}))},sendMessage:function(e){var t=e.name,n=e.email,a=e.frames,r=e.message;return fetch(H+"messages",{method:"POST",headers:Object(F.a)(Object(F.a)({},J),{},{"Content-Type":"application/json"}),body:JSON.stringify({author:{name:t,email:n,avatar:a},content:r})}).then((function(e){var t=e.status,n=e.headers;console.log(t,n),201===t?l.NotificationManager.success("Message submitted. It will appear after being reviewed"):409===t?l.NotificationManager.warning("There is already a message with the given author name or email"):429===t?l.NotificationManager.warning("You already submitted a message. Please try again later"):l.NotificationManager.error("ERROR["+t+"] Please contact vucuongJim@gmail.com or R Jim#1231")}))}},W=Object(R.b)("posts/fetchMessages",function(){var e=Object(A.a)(D.a.mark((function e(t){var n,a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,a=t.pageSize,e.next=3,U.getMessage({page:n,pageSize:a});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Y=Object(R.c)({name:"messages",initialState:{pageSize:5,current:1,pageCount:0,items:[],status:"idle",error:"",isReady:!1},reducers:{nextPage:function(e){e.current+=1},previousPage:function(e){e.current-=1},readyPage:function(e){e.isReady=!0}},extraReducers:function(e){e.addCase(W.pending,(function(e){e.status="loading"})).addCase(W.fulfilled,(function(e,t){var n=t.payload,a=n.page,r=n.pageCount,i=n.pageData;e.status="succeeded",e.current=a,e.pageCount=r,e.items=e.items.concat(i)})).addCase(W.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),G=Y.actions,V=G.nextPage,B=G.previousPage,K=G.readyPage,X=function(e){var t=e.messages,n=t.items,a=t.current,r=t.pageSize;return n.slice(a-1*r,a*r)},q=function(e){return e.messages},Q=Y,Z=(n(56),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderCells=function(){for(var t=e.props,n=t.x,a=t.y,r=[],i=0;i<n*a;i++)r.push(Object(b.jsx)(C,{},i));return r},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.x,n=70*e.y,a=70*t;return Object(b.jsx)("div",{className:"miofa-section",style:{width:a,height:n},children:this.renderCells()})}}]),n}(r.Component)),$=(n(57),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getLayouts=function(){return g},e.mapSection=function(t,n){var a=e.props,r=a.mapping,i=a.messages,s=r[t],c=i[n];return s=s&&c?Object(F.a)(Object(F.a)({},s),{},{props:Object(F.a)({},c)}):e.getDefaultSection(t),Object(F.a)(Object(F.a)({},s),{},{key:n})},e}return n}(function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getDefaultSection=function(e){var t=e.split("x"),n=t[0],a=t[1];return Object(b.jsx)(Z,{x:n,y:a})},e.mapSection=function(t,n){var a,r=null!==(a=e.props.mapping[t])&&void 0!==a?a:e.getDefaultSection(t);return Object(F.a)(Object(F.a)({},r),{},{key:n})},e.getMappedSectionsToLayout=function(t){if(null!=t)return t.map(e.mapSection)},e.getLayouts=function(){return[]},e.getLayout=function(){var t=e.getLayouts();return t[Math.floor(Math.random()*t.length)]},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"layout-container",children:this.getMappedSectionsToLayout(this.getLayout())})}}]),n}(r.Component)));var _=Object(I.b)((function(e){return{messages:X(e)}}),null)($),ee=(n(58),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.onClick,a=e.className;return Object(b.jsx)("div",{className:"pagination-button "+a+(t?" disabled":""),onClick:t?null:n})}}]),n}(r.Component)),te=(n(59),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).nextPageHandler=function(){var t=e.props,n=t.nextPage,a=t.fetchMessages,r=e.props.configState,i=r.current,s=r.items,c=r.pageSize,o=i+1;s.length<o*c&&a({page:o,pageSize:c}),n()},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props.previousPage,n=this.props.configState,a=n.current,r=n.pageCount;return Object(b.jsxs)("div",{className:"pagination-controller",children:[Object(b.jsx)(ee,{className:"previous",disabled:1===a,onClick:function(){return t()}}),Object(b.jsxs)("div",{className:"total-display",children:[a,"/",r]}),Object(b.jsx)(ee,{className:"next",disabled:a>=r,onClick:function(){return e.nextPageHandler()}})]})}}]),n}(r.Component)),ne={nextPage:V,previousPage:B,fetchMessages:W},ae=Object(I.b)((function(e){return{configState:q(e)}}),ne)(te),re=n.p+"static/media/Hairpin-1.0fdf7c05.png",ie=n.p+"static/media/Hairpin-3.3ebdb1ef.png",se=(n(60),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.text,a=e.icon,r=void 0===a?ie:a;return Object(b.jsx)("div",{className:"navigation-button",children:Object(b.jsxs)(o.b,{to:t,children:[Object(b.jsx)("button",{type:"button",children:n}),Object(b.jsx)("img",{src:r,width:"50",height:"30",alt:""})]})})}}]),n}(r.Component)),ce={Next:ie,Plus:re},oe=se,ue=(n(61),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"main-stage-container",children:[Object(b.jsx)(ae,{}),Object(b.jsx)(_,{mapping:P}),Object(b.jsx)(oe,{link:"/send-message",text:"Send a Message",icon:ce.Plus})]})}}]),n}(r.Component)),le=(n(62),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"loading-container",children:Object(b.jsx)("div",{className:"loading-bar"})})}}]),n}(r.Component)),me=(n(63),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"loading-mio"})}}]),n}(r.Component)),je=(n(64),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"ready-mio"})}}]),n}(r.Component)),pe=(n(65),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"welcome-message",children:"Happy 3rd Anniversary, Mio!!. As MioFa, these are ours presents to you."})}}]),n}(r.Component)),de=(n(66),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isReady:!1,isSet:!1,isGo:!1},e.componentDidMount=function(){setTimeout((function(){e.setState({isReady:!0})}),7e3)},e.handleRemoveCurtain=function(){var t=e.props.onFinished;e.setState({isGo:!0}),setTimeout((function(){t()}),4e3)},e.handleTransition=function(){e.setState({isSet:!0}),setTimeout(e.handleRemoveCurtain,1e3)},e.renderCurtain=function(){return Object(b.jsxs)("div",{className:"curtain-container",children:[Object(b.jsx)("div",{className:"mio-stage-curtain"}),Object(b.jsxs)("div",{className:"main-stage-curtain-container",children:[Object(b.jsx)("div",{className:"left"}),Object(b.jsx)("div",{className:"right"})]})]})},e.renderWelcome=function(){var t=e.state,n=t.isReady,a=t.isSet;return Object(b.jsx)("div",{className:"welcome-container",children:Object(b.jsxs)("div",{style:a?{animation:"hide-welcome-container-animate 1s linear 1"}:{},children:[n?Object(b.jsx)("div",{onClick:e.handleTransition,children:Object(b.jsx)(je,{})}):Object(b.jsx)(me,{}),Object(b.jsx)(le,{}),Object(b.jsx)(pe,{})]})})},e}return Object(j.a)(n,[{key:"render",value:function(){return this.state.isGo?this.renderCurtain():this.renderWelcome()}}]),n}(r.Component)),be=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={mio:Object(b.jsx)(h,{}),main:Object(b.jsx)(ue,{})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.mio,n=e.main,a=this.props,r=a.isReady,i=a.readyPage;return Object(b.jsxs)(b.Fragment,{children:[r?Object(b.jsx)("div",{}):Object(b.jsx)(de,{onFinished:i}),t,n]})}}]),n}(r.Component),fe={readyPage:K};var he=Object(I.b)((function(e){return{isReady:q(e).isReady}}),fe)(be),Oe=(n(67),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(b.jsx)("form",{className:"form-container",children:e})}}]),n}(r.Component)),ve=(n(29),n(15)),ge=(n(68),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numberOfItem:1},e.getLimit=function(){return e.props.limit},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value,i=e.props,s=i.onChange,c=i.value,o=a.split("-",2),u=Object(ve.a)(o,2),l=u[0],m=u[1];c&&(r?c[m]=r:c.splice(m,1),s({target:{name:l,value:c}}))},e.handeAddItem=function(){var t=e.state.numberOfItem;e.setState({numberOfItem:t+1})},e.handeRemoveItem=function(t){var n=e.state.numberOfItem;e.setState({numberOfItem:n-1}),e.handleChange({target:{name:t,value:null}})},e.renderInputAction=function(t,n){if(t>0)return Object(b.jsx)("div",{className:"action",onClick:function(){return e.handeRemoveItem(n)},children:"-"},t);var a=e.state.numberOfItem===e.getLimit();return Object(b.jsx)("div",{name:n,className:"action"+(a?" hidden":" "),onClick:a?null:e.handeAddItem,children:"+"},t)},e.renderInput=function(){for(var t=e.state.numberOfItem,n=e.props,a=n.name,r=n.placeholder,i=[],s=0;s<t;s++){var c=a+"-"+s;i.push(e.renderInputAction(s,c)),i.push(Object(b.jsx)("input",{name:c,onChange:e.handleChange,placeholder:r+" "+(s+1)},c))}return i},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.title;return Object(b.jsxs)("label",{className:"input multiple-input",children:[Object(b.jsx)("div",{className:"input-container",children:this.renderInput()}),Object(b.jsxs)("span",{children:[e,":"]})]})}}]),n}(r.Component)),xe=["type","title","name","onChange","placeholder","value"],ye=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.type,e.title),n=e.name,a=e.onChange,r=e.placeholder,i=e.value,s=Object(L.a)(e,xe);return Object(b.jsxs)("label",{className:"input",children:[Object(b.jsx)("textarea",Object(F.a)({name:n,value:i,onChange:a,placeholder:r},s)),Object(b.jsxs)("span",{children:[t,":"]})]})}}]),n}(r.Component),Ce=["type","title","name","onChange","value","placeholder"],we=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.title,a=e.name,r=e.onChange,i=e.value,s=e.placeholder,c=Object(L.a)(e,Ce);switch(t){case"multi":return Object(b.jsx)(ge,Object(F.a)({title:n,type:t,value:i,name:a,onChange:r,placeholder:s},c));case"textarea":return Object(b.jsx)(ye,Object(F.a)({title:n,type:t,value:null!==i&&void 0!==i?i:"",name:a,onChange:r,placeholder:s},c));default:return Object(b.jsxs)("label",{className:"input",children:[Object(b.jsx)("input",Object(F.a)({type:t,name:a,value:null!==i&&void 0!==i?i:"",onChange:r,placeholder:s},c)),Object(b.jsxs)("span",{children:[n,":"]})]})}}}]),n}(r.Component),Ne=Object(R.b)("posts/sendMessages",function(){var e=Object(A.a)(D.a.mark((function e(t){var n,a,r,i,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.email,r=t.frames,i=t.message,e.next=3,U.sendMessage({name:n,email:a,frames:r,message:i});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Se=(n(69),{email:void 0,message:void 0,name:void 0,myMioFa:{frames:[]}}),Me=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={form:Se},e.renderPreviewMessageSection=function(){var t=e.state.form,n=t.message,a=t.name,r=t.myMioFa;return Object(b.jsx)(k,{message:n,name:a,isPreview:!0,frames:r.frames})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value,i=e.state.form,s=e.updateValue(i,a,r);e.setState({form:Object(F.a)({},s)})},e.updateValue=function(t,n,a){var r=n.split(".",2);return r.length>1?Object(F.a)(Object(F.a)({},t),{},Object(O.a)({},r[0],e.updateValue(t[r[0]],r[1],a))):Object(F.a)(Object(F.a)({},t),{},Object(O.a)({},r[0],a))},e.resetForm=function(){e.setState({form:Object(F.a)(Object(F.a)({},Se),{},{myMioFa:{frames:[]}})})},e.validateData=function(e,t,n){var a=[];return e&&0!==e.trim().length||a.push("Email"),t&&0!==t.trim().length||a.push("Name"),n&&0!==n.trim().length||a.push("Message"),!(a.length>0)||(l.NotificationManager.warning("Missing fields: "+a.join(", ")),!1)},e.submitForm=function(){var t=e.props.sendMessages,n=e.state.form,a=n.email,r=n.name,i=n.message,s=n.myMioFa;e.validateData(a,r,i)&&(t({email:a,name:r,message:i,frames:s.frames}),e.resetForm())},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.form,t=e.email,n=e.message,a=e.name,r=e.myMioFa;return Object(b.jsxs)("div",{className:"send-message-container",children:[Object(b.jsx)("div",{className:"mimic pagination-controller"}),Object(b.jsxs)("div",{className:"preview-container",children:[Object(b.jsx)("span",{children:"Preview"}),this.renderPreviewMessageSection()]}),Object(b.jsxs)(Oe,{children:[Object(b.jsx)(we,{type:"text",title:"Email",name:"email",onChange:this.handleChange,value:t,placeholder:"example@gmail.com"}),Object(b.jsx)(we,{type:"text",title:"Name",name:"name",onChange:this.handleChange,value:a,placeholder:"Name (20 characters max)",maxLength:"20"}),Object(b.jsx)(we,{type:"textarea",title:"Message",name:"message",onChange:this.handleChange,value:n,placeholder:"Your messages for Mio. (200 characters max)",rows:"8",maxLength:"200",style:{resize:"none"}}),Object(b.jsx)(we,{type:"multi",title:"Your MioFa",name:"myMioFa.frames",value:r.frames,onChange:this.handleChange,placeholder:"URL",limit:2}),Object(b.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm}),Object(b.jsx)("input",{type:"reset",value:"Reset",onClick:this.resetForm})]}),Object(b.jsx)(oe,{link:"/",text:"To Stage"})]})}}]),n}(r.Component),ke={sendMessages:Ne},Pe=Object(I.b)(null,ke)(Me);var Fe=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",element:Object(b.jsx)(he,{})}),Object(b.jsx)(u.a,{path:"/send-message",element:Object(b.jsx)(Pe,{})})]})})}),Object(b.jsx)(l.NotificationContainer,{})]})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))},Te=Object(R.a)({reducer:{messages:Q.reducer}});Te.dispatch(W({page:1,pageSize:5}));var De=Te;c.a.render(Object(b.jsx)(I.a,{store:De,children:Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(Fe,{})})}),document.getElementById("root")),Ie()}]),[[70,1,2]]]);
//# sourceMappingURL=main.45c92d25.chunk.js.map