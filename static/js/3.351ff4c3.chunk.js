(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{128:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var s=n(11),a=n(6),i=n(40),c=(n(128),n(38)),o=n.n(c),r=n(127),l=n(0),p=n.n(l),d=n(9),u=n(41),h=n(23),j=n(3),b=n(10),m=n(12),f=(n(20),n(60)),O=n(49),g=n(13),v=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return Object(O.a)(e,t)}))},x=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var s=t.resolveArguments(e,n),a=s[0],i=s[1];t.removeClasses(a,"exit"),t.addClass(a,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var s=t.resolveArguments(e,n),a=s[0],i=s[1]?"appear":"enter";t.addClass(a,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var s=t.resolveArguments(e,n),a=s[0],i=s[1]?"appear":"enter";t.removeClasses(a,i),t.addClass(a,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,s="string"===typeof n,a=s?""+(s&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:s?a+"-active":n[e+"Active"],doneClassName:s?a+"-done":n[e+"Done"]}},t}Object(m.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var s=this.getClassNames(t)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&a&&(s+=" "+a),"active"===n&&e&&e.scrollTop,s&&(this.appliedClasses[t][n]=s,function(e,t){e&&t&&t.split(" ").forEach((function(t){return Object(f.a)(e,t)}))}(e,s))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],s=n.base,a=n.active,i=n.done;this.appliedClasses[t]={},s&&v(e,s),a&&v(e,a),i&&v(e,i)},n.render=function(){var e=this.props,t=(e.classNames,Object(b.a)(e,["classNames"]));return p.a.createElement(g.e,Object(j.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(p.a.Component);x.defaultProps={classNames:""},x.propTypes={};var E,C,N=x,y=n(1),k=[],S=u.a.div(E||(E=Object(i.a)(["\n  padding: 20px;\n"]))),w=u.a.h4(C||(C=Object(i.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.\uc0c9\uc0c1}));function A(e){return Object(l.useEffect)((function(){e.\uc2a4\uc704\uce58\ubcc0\uacbd(!0)})),0===e.\ub204\ub978\ud0ed?Object(y.jsx)("div",{children:"0\ubc88\uc9f8 \ub0b4\uc6a9"}):1===e.\ub204\ub978\ud0ed?Object(y.jsx)("div",{children:"1\ubc88\uc9f8 \ub0b4\uc6a9"}):2===e.\ub204\ub978\ud0ed?Object(y.jsx)("div",{children:"2\ubc88\uc9f8 \ub0b4\uc6a9"}):void 0}t.default=function(e){var t=Object(d.f)(),n=Object(h.b)(),i=Object(d.g)().id,c=e.shoes.find((function(e){return e.id==i})),p=Object(l.useState)(!0),u=Object(a.a)(p,2),j=u[0],b=u[1],m=Object(l.useState)(0),f=Object(a.a)(m,2),O=f[0],g=f[1],v=Object(l.useState)(!1),x=Object(a.a)(v,2),E=x[0],C=x[1],T=Object(l.useState)([]),I=Object(a.a)(T,2),J=I[0],K=I[1];Object(l.useEffect)((function(){var e=setTimeout((function(){b(!1)}),2e3);return function(){clearTimeout(e)}}),[]),Object(l.useEffect)((function(){var e=localStorage.getItem("watched"),t=(e=null===e?[]:JSON.parse(e)).indexOf(i);t>-1?(e.splice(t,1),e.unshift(i)):e.unshift(i),e.length>3&&(e=[e[0],e[1],e[2]]),k=e,localStorage.setItem("watched",JSON.stringify(e))}),[]);var R,B=function(n){!function(t){e.shoes.length<4&&o.a.get("https://codingapple1.github.io/shop/data2.json").then((function(t){t.data&&e.shoes\ubcc0\uacbd([].concat(Object(s.a)(e.shoes),Object(s.a)(t.data)))})).catch((function(){console.log("\uc2e4\ud328")}));var n=localStorage.getItem("watched"),a=(n=null===n?[]:JSON.parse(n)).indexOf(t);a>-1?(n.splice(a,1),n.unshift(t)):n.unshift(t),n.length>3&&(n=[n[0],n[1],n[2]]),k=n,localStorage.setItem("watched",JSON.stringify(n))}(n),setTimeout((function(){t.push("/detail/"+n),b(!0);var e=setTimeout((function(){b(!1)}),2e3);return function(){clearTimeout(e)}}),1e3)};return Object(l.useEffect)((function(){K(k)}),[k]),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("div",{id:"recentBox",children:[Object(y.jsx)("p",{className:"title",children:"Recently Viewed"}),J.map((function(e,t){return Object(y.jsx)("div",{className:"imgWrapper opacity",children:Object(y.jsx)("img",{className:"img",src:"https://codingapple1.github.io/shop/shoes".concat(Number(e)+1,".jpg"),onClick:function(){B(e)}})},e)}))]}),Object(y.jsx)(S,{children:Object(y.jsx)(w,{className:"red",children:"Detail"})}),Object(y.jsx)("div",{className:j?"my-alert":"my-alert-hide",children:Object(y.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-6",children:Object(y.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(c.id+1,".jpg"),width:"100%"})}),Object(y.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(y.jsx)("h4",{className:"pt-5",children:c.title}),Object(y.jsx)("p",{children:c.content}),Object(y.jsxs)("p",{children:[(R=c.price,R.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),"\uc6d0"]}),Object(y.jsx)("button",{className:"btn btn-primary opacity",onClick:function(){n({type:"\ud56d\ubaa9\ucd94\uac00","\ub370\uc774\ud130":{id:c.id,name:c.title,quan:1,image:"https://codingapple1.github.io/shop/shoes".concat(c.id+1,".jpg"),price:c.price}}),n({type:"goCartModalOn"})},children:"\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uae30"}),"\xa0",Object(y.jsx)("button",{className:"btn btn-primary opacity",onClick:function(){t.push("/")},children:"\ub4a4\ub85c\uac00\uae30"}),Object(y.jsxs)(r.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"/home",children:[Object(y.jsx)(r.a.Item,{children:Object(y.jsx)(r.a.Link,{eventKey:"link-0",style:{color:"black"},onClick:function(){C(!1),g(0)},children:"0"})}),Object(y.jsx)(r.a.Item,{children:Object(y.jsx)(r.a.Link,{eventKey:"link-1",style:{color:"black"},onClick:function(){C(!1),g(1)},children:"1"})})]}),Object(y.jsx)(N,{in:E,classNames:"wow",timeout:500,children:Object(y.jsx)(A,{"\ub204\ub978\ud0ed":O,"\uc2a4\uc704\uce58\ubcc0\uacbd":C})})]})]})]})}}}]);
//# sourceMappingURL=3.351ff4c3.chunk.js.map