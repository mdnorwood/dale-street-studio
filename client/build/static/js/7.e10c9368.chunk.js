(this["webpackJsonpdefinition-music-and-mastering"]=this["webpackJsonpdefinition-music-and-mastering"]||[]).push([[7],{938:function(e,n,t){},956:function(e,n,t){"use strict";t.r(n);t(0);var i,c,a,r,s,o=t(51),l=t(38),d=t(919),j=t.n(d),m=t(920),u=t.n(m),p=t(2),b=function(e){var n=e.price,t=100*n;return Object(p.jsx)(j.a,{label:"Pay Now",name:"Definition Music & Mastering",billingAddress:!0,shippingAddress:!0,image:"https://i.ibb.co/sVsfxRc/Definition-Icon.png",description:"Your total is $".concat(n),amount:t,panelLabel:"Pay Now",token:function(e){u()({url:"payment",method:"post",data:{amount:t,token:e}}).then((function(e){alert("Payment successful")})).catch((function(e){console.log("Payment error: ",JSON.parse(e)),alert("There was an issue with your payment. Please make sure you use the provided credit card")}))},stripeKey:"pk_test_PXFhSvADZpd2WKpqWHAZMzTN"})},h=t(122),x=(t(938),Object(o.b)(null,(function(e){return{clearItem:function(n){return e(Object(h.c)(n))},addItem:function(n){return e(Object(h.a)(n))},removeItem:function(n){return e(Object(h.d)(n))}}}))((function(e){var n=e.cartItem,t=e.clearItem,i=e.addItem,c=e.removeItem,a=n.name,r=n.imageUrl,s=n.price,o=n.quantity;return Object(p.jsxs)("div",{className:"checkout-item",children:[Object(p.jsx)("div",{className:"image-container",children:Object(p.jsx)("img",{src:r,alt:"item"})}),Object(p.jsx)("span",{className:"name",children:a}),Object(p.jsxs)("span",{className:"quantity",children:[Object(p.jsx)("div",{className:"arrow",onClick:function(){return c(n)},children:"\u276e"}),Object(p.jsx)("span",{className:"value",children:o}),Object(p.jsx)("div",{className:"arrow",onClick:function(){return i(n)},children:" \u276f"})]}),Object(p.jsxs)("span",{className:"price",children:["$",s," per item"]}),Object(p.jsx)("span",{className:"remove-button",onClick:function(){return t(n)},children:"\u2715"})]})}))),O=t(83),f=t(9),g=t(7),v=g.d.div(i||(i=Object(f.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 90%;\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 50px auto 0;\n    }\n"]))),y=g.d.div(c||(c=Object(f.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n  text-align: center;\n"]))),w=g.d.div(a||(a=Object(f.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n"]))),N=g.d.div(r||(r=Object(f.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),k=g.d.div(s||(s=Object(f.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]))),I=Object(l.b)({cartItems:O.b,total:O.d});n.default=Object(o.b)(I)((function(e){var n=e.cartItems,t=e.total;return Object(p.jsxs)(v,{children:[Object(p.jsxs)(y,{children:[Object(p.jsx)(w,{children:Object(p.jsx)("span",{children:"Product"})}),Object(p.jsx)(w,{children:Object(p.jsx)("span",{children:"Description"})}),Object(p.jsx)(w,{children:Object(p.jsx)("span",{children:"Quantity"})}),Object(p.jsx)(w,{children:Object(p.jsx)("span",{children:"Price"})}),Object(p.jsx)(w,{children:Object(p.jsx)("span",{children:"Remove"})})]}),n.map((function(e){return Object(p.jsx)(x,{cartItem:e},e.id)})),Object(p.jsxs)(N,{children:["TOTAL: $",t]}),Object(p.jsxs)(k,{children:["*Please use the following test credit card for payments*",Object(p.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object(p.jsx)(b,{price:t})]})}))}}]);
//# sourceMappingURL=7.e10c9368.chunk.js.map