(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{72:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(20),n=a.n(r),s=a(11),i=(a(72),a(106)),o=a(100),j=a(107),l=a(45),d=a(1);var u=function(){return Object(d.jsx)("header",{children:Object(d.jsx)(i.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(l.LinkContainer,{to:"/",children:Object(d.jsx)(i.a.Brand,{children:"Dhakatopi"})}),Object(d.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(j.a,{className:"ml-auto",children:[Object(d.jsx)(l.LinkContainer,{to:"/cart",children:Object(d.jsxs)(j.a.Link,{children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),"Cart"]})}),Object(d.jsx)(l.LinkContainer,{to:"/login",children:Object(d.jsxs)(j.a.Link,{children:[Object(d.jsx)("i",{className:"fas fa-user"}),"Sing In"]})})]})})]})})})},b=a(101),h=a(62),p=function(){return Object(d.jsx)("footer",{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(b.a,{children:Object(d.jsx)(h.a,{className:"text-center py-3",children:"Copyright \xa9 Dhakatopi"})})})})},O=a(109),x=function(e){var t=e.value,a=e.text,c=e.color;return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("i",{style:{color:c},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(d.jsx)("span",{children:Object(d.jsx)("i",{style:{color:c},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(d.jsx)("span",{children:Object(d.jsx)("i",{style:{color:c},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(d.jsx)("span",{children:Object(d.jsx)("i",{style:{color:c},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(d.jsx)("span",{children:Object(d.jsx)("i",{style:{color:c},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(d.jsx)("span",{children:a})]})},f=a(10),m=function(e){var t=e.product;return Object(d.jsxs)(O.a,{className:"my-3 p-3 rounded",children:[Object(d.jsx)(f.Link,{to:"/product/".concat(t._id),children:Object(d.jsx)(O.a.Img,{src:t.image,variant:"top"})}),Object(d.jsxs)(O.a.Body,{children:[Object(d.jsx)(f.Link,{to:"/product/".concat(t._id),children:Object(d.jsx)(O.a.Title,{children:Object(d.jsx)("strong",{children:t.name})})}),Object(d.jsx)(O.a.Text,{as:"div",children:Object(d.jsx)(x,{value:t.rating,text:"(".concat(t.numReviews," reviews)"),color:"red"})}),Object(d.jsxs)(O.a.Text,{as:"h3",children:["$",t.price]})]})]})},g=a(14),v=a.n(g),y=a(23),I=a(25),S=a.n(I),k="PRODUCT_LIST_REQUEST",C="PRODUCT_LIST_SUCCESS",L="PRODUCT_LIST_FAIL",w="PRODUCT_DETAILS_REQUEST",E="PRODUCT_DETAILS_SUCCESS",N="PRODUCT_DETAILS_FAIL",T=a(102),_=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T.a,{animation:"border",size:"sm"}),Object(d.jsx)(T.a,{animation:"border"})]})},R=a(108),D=function(e){var t=e.variant,a=e.children;return Object(d.jsx)(R.a,{variant:t,children:a})};D.defaultProps={variant:"info"};var U=D,P=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.productList})),a=t.loading,r=t.error,n=t.products;return Object(c.useEffect)((function(){e(function(){var e=Object(y.a)(v.a.mark((function e(t){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:k}),e.next=4,S.a.get("http://localhost:5000/api/products");case 4:a=e.sent,c=a.data,t({type:C,playload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:L,playload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Latest Products"}),Object(d.jsx)(b.a,{children:a?Object(d.jsx)(_,{}):r?Object(d.jsx)(U,{variant:"danger",children:r}):n.map((function(e){return Object(d.jsx)(h.a,{sm:12,md:6,lg:4,xl:3,children:Object(d.jsx)(m,{product:e})})}))})]})},A=a(28),F=a(33),B=a(103),G=a(110),J=a(105),q=a(104),$=function(e){var t=e.history,a=e.match,r=Object(s.b)(),n=Object(c.useState)(1),i=Object(F.a)(n,2),o=i[0],j=i[1],l=Object(s.c)((function(e){return e.productDetails})),u=l.loading,p=l.error,m=l.product;Object(c.useEffect)((function(){var e;r((e=a.params.id,function(){var t=Object(y.a)(v.a.mark((function t(a){var c,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:w}),t.next=4,S.a.get("http://localhost:5000/api/products/".concat(e));case 4:c=t.sent,r=c.data,a({type:E,playload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:N,playload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[r,a.params.id]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f.Link,{className:"btn btn-dark my-m",to:"/",children:"Go Back"}),u?Object(d.jsx)(_,{}):p?Object(d.jsx)(U,{variant:"danger",children:p}):Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h.a,{md:6,children:Object(d.jsx)(O.a,{children:Object(d.jsx)(B.a,{src:m.image,alt:m.name})})}),Object(d.jsx)(h.a,{md:3,children:Object(d.jsxs)(G.a,{variant:"flush",children:[Object(d.jsx)(G.a.Item,{children:Object(d.jsx)("h3",{children:m.name})}),Object(d.jsx)(G.a.Item,{variant:"flush",children:Object(d.jsx)(x,{value:m.rating,text:"".concat(m.numReviews," reviews"),color:"red"})}),"Pricr : $",m.price,Object(d.jsx)(G.a.Item,{}),"Description : $",m.description,Object(d.jsx)(G.a.Item,{})]})}),Object(d.jsx)(h.a,{md:3,children:Object(d.jsx)(O.a,{children:Object(d.jsxs)(G.a,{variant:"flush",children:[Object(d.jsx)(G.a.Item,{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h.a,{children:"Price:"}),Object(d.jsx)(h.a,{children:Object(d.jsxs)("strong",{children:["$",m.price]})})]})}),Object(d.jsx)(G.a.Item,{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h.a,{children:"Status:"}),Object(d.jsx)(h.a,{children:Object(d.jsx)("strong",{children:m.countInStock>0?"In stock":"Out of stock"})})]})}),Object(d.jsx)(G.a.Item,{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h.a,{children:"Choose quantity:"}),Object(d.jsx)(h.a,{children:Object(d.jsx)(J.a.Control,{as:"select",value:m.qty,onChange:function(e){j(Number(e.target.value))},children:Object(A.a)(Array(m.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]})}),Object(d.jsx)(G.a.Item,{children:Object(d.jsx)(q.a,{onClick:function(){t.push("/cart/".concat(a.params.id,"?qty=").concat(o))},className:"btn-block",type:"button",disabled:0===m.countInStock,children:"Add to card"})})]})})})]})]})},M="CART_ADD_ITEM",Q="CART_REMOVE_ITEM",z=function(e,t){return function(){var a=Object(y.a)(v.a.mark((function a(c,r){var n,s;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.get("http://localhost:5000/api/products/".concat(e));case 2:n=a.sent,s=n.data,c({type:M,payload:{product:s._id,name:s.name,image:s.image,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},V=function(e){var t=e.match,a=(e.history,e.location),r=t.params.id,n=a.search?Number(a.search.split("=")[1]):1;console.log(r);var i=Object(s.b)(),o=Object(s.c)((function(e){return e.cart})).cartItems;console.log(a),Object(c.useEffect)((function(){r&&i(z(r,n))}),[i,r,n]);var j=function(e){var t;i((t=e,function(){var e=Object(y.a)(v.a.mark((function e(a,c){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:Q,payload:t}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))};return Object(d.jsx)(b.a,{children:Object(d.jsxs)(h.a,{md:8,children:[Object(d.jsx)("h1",{children:"Shopping Cart"}),0===o.length?Object(d.jsxs)(U,{children:["You Cart is Empty ",Object(d.jsx)(f.Link,{to:"/",children:"Go Back"})]}):Object(d.jsx)(G.a,{variant:"flush",children:o.map((function(e){return Object(d.jsx)(G.a.Item,{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h.a,{md:2,children:Object(d.jsx)(B.a,{src:e.image,lat:e.name,fluid:!0,rounded:!0})}),Object(d.jsx)(h.a,{md:3,children:Object(d.jsx)(f.Link,{to:"/product/".concat(e.product),children:e.name})}),Object(d.jsxs)(h.a,{md:2,children:["$",e.price]}),Object(d.jsx)(h.a,{md:2,children:Object(d.jsx)(J.a.Control,{as:"select",value:e.qty,onChange:function(t){return i(z(e.product,Number(t.target.value)))},children:Object(A.a)(Array(e.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(d.jsx)(h.a,{md:2,children:Object(d.jsx)(q.a,{type:"button",variant:"light",onClick:function(){return j(e.product)},children:Object(d.jsx)("i",{className:"fas fa-trash"})})})]})},e.product)}))})]})})},W="USER_LOGIN_REQUEST",Y="USER_LOGIN_FAIL",H="USER_LOGIN_SUCCESST";var K=function(e){var t=e.children;return Object(d.jsx)(o.a,{children:Object(d.jsx)(b.a,{className:"justify-content-md-center",children:Object(d.jsx)(h.a,{xs:12,md:6,children:t})})})};var X=function(){var e=Object(c.useState)(""),t=Object(F.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),i=Object(F.a)(n,2),o=i[0],j=i[1],l=Object(s.b)(),u=Object(s.c)((function(e){return e.userLogin})),p=u.loading,O=u.error;return u.userInfo,Object(d.jsxs)(K,{children:[Object(d.jsx)("h1",{children:"Sign In"}),O&&Object(d.jsx)(U,{variant:"danger",children:O}),p&&Object(d.jsx)(_,{}),Object(d.jsxs)(J.a,{onSubmit:function(e){e.preventDefault(),l(function(e,t){return function(){var a=Object(y.a)(v.a.mark((function a(c){var r,n;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:W}),a.next=4,S.a.post("http://localhost:5001/api/users/login",{email:e,password:t});case 4:r=a.sent,n=r.data,c({type:H,playload:n}),localStorage.setItem("userInfo",JSON.stringify(n)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),c({type:Y,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(a,o))},children:[Object(d.jsxs)(J.a.Group,{controlId:"email",children:[Object(d.jsx)(J.a.Label,{children:"Email Address"}),Object(d.jsx)(J.a.Control,{type:"email",placeholder:"Enter Email",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(d.jsxs)(J.a.Group,{controlId:"password",children:[Object(d.jsx)(J.a.Label,{children:"Password"}),Object(d.jsx)(J.a.Control,{type:"password",placeholder:"Enter Password",value:o,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsx)(q.a,{type:"submit",variant:"primary",children:"Sing In"})]}),Object(d.jsx)(b.a,{className:"py-3",children:Object(d.jsxs)(h.a,{children:["New Customer? ",Object(d.jsx)(f.Link,{to:"/register",children:" Register"})]})})]})},Z=a(6),ee=function(){return Object(d.jsxs)(f.BrowserRouter,{children:[Object(d.jsx)(u,{}),Object(d.jsx)("main",{className:"py-3",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(Z.d,{path:"/",component:P,exact:!0}),Object(d.jsx)(Z.d,{path:"/login",component:X}),Object(d.jsx)(Z.d,{path:"/product/:id",component:$}),Object(d.jsx)(Z.d,{path:"/cart/:id?",component:V})]})}),Object(d.jsx)(p,{})]})},te=(a(97),a(34)),ae=a(63),ce=a(64),re=a(19),ne=Object(te.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0,products:[]};case C:return{loading:!1,products:t.playload};case L:return{loading:!1,error:t.playload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(re.a)({loading:!0},e);case E:return{loading:!1,product:t.playload};case N:return{loading:!1,error:t.playload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:var a=t.payload,c=e.cartItems.find((function(e){return e.product===a.product}));return c?Object(re.a)(Object(re.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===a.product?a:e}))}):Object(re.a)(Object(re.a)({},e),{},{cartItems:[].concat(Object(A.a)(e.cartItems),[a])});case Q:return Object(re.a)(Object(re.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{loading:!0};case H:return{loading:!1,userInfo:t.payload};case Y:return{loading:!1,error:t.payload};default:return e}}}),se={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ie=[ae.a],oe=Object(te.createStore)(ne,se,Object(ce.composeWithDevTools)(te.applyMiddleware.apply(void 0,ie))),je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};n.a.render(Object(d.jsx)(s.a,{store:oe,children:Object(d.jsx)(ee,{})}),document.getElementById("root")),je()}},[[98,1,2]]]);
//# sourceMappingURL=main.302ac107.chunk.js.map