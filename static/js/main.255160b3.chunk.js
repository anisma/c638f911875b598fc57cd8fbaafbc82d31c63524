(this["webpackJsonpkulina-test"]=this["webpackJsonpkulina-test"]||[]).push([[0],{48:function(n,t,e){},59:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),a=e.n(c),i=e(17),o=e.n(i),u=(e(48),e(6)),d=e(7),f=e(28),s=e.n(f),l=e(29),b=e.n(l),j=e(3),p=e(4);function O(){var n=Object(j.a)(["\n   width: 100vw;\n   border-top: 1px solid #f1f1f2;\n   display: flex;\n   padding: 8px 16px;\n   background: #fff;\n"]);return O=function(){return n},n}function h(){var n=Object(j.a)(["\n   font-size: 0.5em;\n   color: #6e7679;\n   text-transform: uppercase;\n   padding: 4px 0;\n"]);return h=function(){return n},n}function x(){var n=Object(j.a)(["\n   font-size: 1em;\n   color: #424749;\n   font-weight: 600;\n   display: flex;\n   align-items: center;\n"]);return x=function(){return n},n}function g(){var n=Object(j.a)(["\n   display: flex;\n   flex-direction: column;\n   padding: 12px;\n"]);return g=function(){return n},n}function v(){var n=Object(j.a)(["\n   display: flex;\n   align-items: center;\n   padding: 0 16px;\n"]);return v=function(){return n},n}function m(){var n=Object(j.a)(["\n   border-bottom: 1px solid #f1f1f2;\n   position: fixed;\n   background: #fff;\n   top: 0;\n   width: 100vw;\n"]);return m=function(){return n},n}var w=p.c.div(m()),y=p.c.header(v()),E=p.c.div(g()),T=p.c.span(x()),L=p.c.span(h()),D=p.c.div(O()),_=e(5);function A(){var n=Object(j.a)(["\n   font-size: 0.5em;\n   text-transform: uppercase;\n"]);return A=function(){return n},n}function C(){var n=Object(j.a)(["\n   font-weight: 600;\n"]);return C=function(){return n},n}function S(){var n=Object(j.a)(["\n   flex-shrink: 0;\n   padding: 8px;\n   height: 40px;\n   width: 40px;\n   border-radius: 50% 50%;\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   color: #424749;\n\n   ","\n"]);return S=function(){return n},n}function k(){var n=Object(j.a)(["\n   color: #6e7679;\n   cursor: not-allowed;\n"]);return k=function(){return n},n}function I(){var n=Object(j.a)(["\n   background: #424749;\n   color: #fff;\n"]);return I=function(){return n},n}var M=Object(p.b)(I()),R=Object(p.b)(k()),N=p.c.span(S(),(function(n){return n.active?M:n.hidden?R:void 0})),z=p.c.span(C()),P=p.c.span(A()),B=function(n){var t=n.day,e=n.date;return Object(r.jsxs)(N,Object(_.a)(Object(_.a)({},n),{},{children:[Object(r.jsx)(P,{children:t}),Object(r.jsx)(z,{children:e})]}))};function F(){var n=Object(j.a)(["\n   display: flex;\n   gap: 8px;\n   padding: 4px;\n   width: fit-content;\n"]);return F=function(){return n},n}function G(){var n=Object(j.a)(["\n   overflow: hidden;\n   width: calc(100vw - 32px);\n   margin: 0 16px;\n"]);return G=function(){return n},n}var K=p.c.div(G()),H=p.c.div(F()),J=function(n){switch(n.getDay()){case 0:return"MIN";case 1:return"SEN";case 2:return"SEL";case 3:return"RAB";case 4:return"KAM";case 5:return"JUM";case 6:return"SAB"}},q={SELECT_DATE:"SELECT_DATE",SWIPE_DATE_PICKER:"SWIPE_DATE_PICKER",CHANGE_MEAL_TIME:"CHANGE_MEAL_TIME",ADD_TO_CART:"ADD_TO_CART",FILTER_MEALS:"FILTER_MEALS",GET_TOTAL_PRICE:"GET_TOTAL_PRICE",TOGGLE_HIDDEN_LOCATION_MODAL:"TOGGLE_HIDDEN_LOCATION_MODAL",SELECT_LOCATION:"SELECT_LOCATION",FILTER_LOCATION:"FILTER_LOCATION"},W=function(n){return{type:q.FILTER_MEALS,payload:n}},U={type:q.GET_TOTAL_PRICE},Y={type:q.TOGGLE_HIDDEN_LOCATION_MODAL},Q=function(){var n=Object(u.c)((function(n){return n.app.selectedDate})),t=Object(u.b)(),e=function(n){return t(function(n){return{type:q.SELECT_DATE,payload:n}}(n))},a=Object(c.useState)(function(){for(var n=[],t=0;t<14;t++){var e=new Date;e.setDate(e.getDate()+t),n.push({fullDate:e,day:J(e),date:e.getDate()})}return n}()),i=Object(d.a)(a,1)[0],o=Object(c.useState)(""),f=Object(d.a)(o,2),s=f[0],l=f[1];Object(c.useEffect)((function(){var t=new Date(n).toDateString();l(t)}),[n]);var b=Object(c.useRef)(null),j=Object(c.useRef)(null),p=Object(c.useState)(0),O=Object(d.a)(p,2),h=O[0],x=O[1],g=Object(c.useState)(0),v=Object(d.a)(g,2),m=v[0],w=v[1],y=Object(c.useState)(0),E=Object(d.a)(y,2),T=E[0],L=E[1],D=Object(c.useState)(!1),_=Object(d.a)(D,2),A=_[0],C=_[1],S=Object(c.useState)(0),k=Object(d.a)(S,2),I=k[0],M=k[1],R=Object(c.useState)(0),N=Object(d.a)(R,2),z=N[0],P=N[1];Object(c.useEffect)((function(){b&&M(b.current.offsetWidth),j&&P(j.current.offsetWidth)}),[]),Object(c.useEffect)((function(){return A&&(window.addEventListener("touchend",G),window.addEventListener("touchmove",F)),function(){window.removeEventListener("touchend",G),window.removeEventListener("touchmove",F)}}),[A]);var F=function(n){if(A){var t=Math.floor(T+m-n.targetTouches[0].pageX);return t<0?t=0:t>I-z&&(t=I-z),x(t)}},G=function(n){C(!1)},W=i.map((function(n,t){var c=n.fullDate.toDateString(),a=n.fullDate.toString(),i="MIN"===n.day||"SAB"===n.day;return Object(r.jsx)(B,{day:n.day,date:n.date,hidden:i,active:!i&&c===s,onClick:function(){i||e(a)}},t)}));return Object(r.jsx)(K,{ref:j,children:Object(r.jsx)(H,{ref:b,onTouchStart:function(n){C(!0),L(h),w(n.targetTouches[0].pageX)},style:{transform:"translateX(".concat(-h,"px)")},children:W})})},X=e(41);function V(){var n=Object(j.a)(["\n   outline: none;\n   background: transparent;\n   border: none;\n   padding: 12px;\n   border-radius: 8px;\n\n   ","\n"]);return V=function(){return n},n}function Z(){var n=Object(j.a)(["\n   background: #f9423a;\n   font-weight: 600;\n   font-size: 1em;\n   color: #fff;\n   text-transform: uppercase;\n   padding: 8px 24px;\n"]);return Z=function(){return n},n}function $(){var n=Object(j.a)(["\n   border-radius: 0 8px 8px 0;\n"]);return $=function(){return n},n}function nn(){var n=Object(j.a)(["\n   border-radius: 8px 0 0 8px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(j.a)(["\n   background: #424749;\n   width: 50%;\n   color: #fff;\n"]);return tn=function(){return n},n}function en(){var n=Object(j.a)(["\n   border: 2px solid #f1f1f2;\n   width: 50%;\n   color: #6e7679;\n"]);return en=function(){return n},n}var rn=Object(p.b)(en()),cn=Object(p.b)(tn()),an=Object(p.b)(nn()),on=Object(p.b)($()),un=Object(p.b)(Z()),dn=p.c.button(V(),(function(n){var t=null;return n.left?t=an:n.right&&(t=on),n.headerButton&&n.active?t+cn:n.headerButton?t+rn:n.addButton?un:void 0})),fn=function(n){var t=n.children,e=Object(X.a)(n,["children"]);return Object(r.jsx)(dn,Object(_.a)(Object(_.a)({},e),{},{children:t}))},sn=function(){var n=Object(u.c)((function(n){return n.app.mealTime})),t=Object(u.c)((function(n){return n.app.selectedLocation})),e=Object(u.b)(),a=function(n){return e({type:q.CHANGE_MEAL_TIME,payload:n})},i=function(n){return e(W(n))},o=Object(c.useState)(!1),f=Object(d.a)(o,2),l=f[0],j=f[1];return Object(c.useEffect)((function(){var n=function(){window.scrollY>0?j(!0):j(!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),Object(r.jsxs)(w,{children:[Object(r.jsxs)(y,{children:[Object(r.jsx)(s.a,{}),Object(r.jsxs)(E,{children:[Object(r.jsx)(L,{children:"alamat pengantar"}),Object(r.jsxs)(T,{onClick:function(n){return e(Y)},children:[t?t.name:"Pilih alamat pengantar",Object(r.jsx)(b.a,{fontSize:"small",style:{color:"#f9423a"}})]})]})]}),Object(r.jsx)(Q,{}),!l&&Object(r.jsxs)(D,{children:[Object(r.jsx)(fn,{left:!0,headerButton:!0,active:"lunch"===n,onMouseDown:function(){a("lunch")},onClick:function(){return i(n)},children:"Lunch"}),Object(r.jsx)(fn,{right:!0,headerButton:!0,active:"dinner"===n,onMouseDown:function(){a("dinner")},onClick:function(){return i(n)},children:"Dinner"})]})]})},ln=e(31),bn=e.n(ln);function jn(){var n=Object(j.a)(["\n   font-size: 20px;\n   font-weight: 600;\n   line-height: 1.5;\n"]);return jn=function(){return n},n}function pn(){var n=Object(j.a)(["\n   display: flex;\n   justify-content: flex-end;\n"]);return pn=function(){return n},n}function On(){var n=Object(j.a)(["\n   height: 100%;\n   width: 100vw;\n   background: #fff;\n   border-radius: 8px 8px 0 0;\n   padding: 16px;\n   display: flex;\n   flex-direction: column;\n   gap: 16px;\n\n   &::before {\n      content: '';\n      z-index: -1;\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 0, 0, 0.5);\n      top: -20%;\n      left: 0;\n   }\n"]);return On=function(){return n},n}function hn(){var n=Object(j.a)(["\n   position: fixed;\n   height: 85%;\n   bottom: 0;\n   width: 100%;\n"]);return hn=function(){return n},n}var xn=p.c.div(hn()),gn=p.c.div(On()),vn=p.c.div(pn()),mn=p.c.h2(jn()),wn=e(30),yn=e(19),En=e.n(yn);function Tn(){var n=Object(j.a)(["\n   position: absolute;\n   height: 42px;\n   width: 40px;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   top: 0;\n   left: 0;\n   color: #f9423a;\n"]);return Tn=function(){return n},n}function Ln(){var n=Object(j.a)(["\n   width: 100%;\n   padding: 8px 16px;\n   padding-left: 40px;\n   outline: none;\n   border: 1px solid #e2e4e4;\n   border-radius: 8px;\n   caret-color: #f9423a;\n   line-height: 1.5;\n"]);return Ln=function(){return n},n}function Dn(){var n=Object(j.a)(["\n   width: 100vw;\n   position: relative;\n"]);return Dn=function(){return n},n}var _n=p.c.div(Dn()),An=p.c.input(Ln()),Cn=p.c.div(Tn()),Sn=function(n){Object(wn.a)(n);var t=Object(u.b)(),e=function(n){return t({type:q.FILTER_LOCATION,payload:n})},a=Object(c.useRef)(null),i=Object(c.useState)(""),o=Object(d.a)(i,2),f=o[0],s=o[1];Object(c.useEffect)((function(){e(f)}),[f]);return Object(r.jsxs)(_n,{children:[Object(r.jsx)(An,{ref:a,placeholder:"please type kulina to see test data",onChange:function(n){s(a.current.value)}}),Object(r.jsx)(Cn,{children:Object(r.jsx)(En.a,{fontSize:"small"})})]})};function kn(){var n=Object(j.a)(["\n   font-size: 12px;\n   color: #6e7679;\n   text-transform: capitalize;\n   text-overflow: ellipsis;\n   overflow: hidden;\n   width: 100%;\n   white-space: nowrap;\n   line-height: 1.5;\n"]);return kn=function(){return n},n}function In(){var n=Object(j.a)(["\n   font-weight: 600;\n"]);return In=function(){return n},n}function Mn(){var n=Object(j.a)(["\n   padding: 16px;\n   padding-right: 24px;\n   border-bottom: 1px solid #f1f1f2;\n   line-height: 1.5pc;\n   width: 100%;\n"]);return Mn=function(){return n},n}function Rn(){var n=Object(j.a)(["\n   height: 24px;\n   width: 24px;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   color: #6e7679;\n   background: #e2e4e4;\n   border-radius: 50% 50%;\n   flex-shrink: 0;\n"]);return Rn=function(){return n},n}function Nn(){var n=Object(j.a)(["\n   width: 100%;\n   padding: 0 16px 0 8px;\n   display: flex;\n   align-items: center;\n"]);return Nn=function(){return n},n}var zn=p.c.div(Nn()),Pn=p.c.div(Rn()),Bn=p.c.div(Mn()),Fn=p.c.h3(In()),Gn=p.c.p(kn()),Kn=function(n){var t=n.location,e=t.name,c=t.address,a=Object(u.b)(),i=function(n){return a({type:q.SELECT_LOCATION,payload:n})};return Object(r.jsxs)(zn,{onClick:function(){i(t),a(Y)},children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(En.a,{fontSize:"small"})}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Fn,{children:e}),Object(r.jsx)(Gn,{children:c})]})]})},Hn=function(){var n=Object(u.c)((function(n){return n.app.filteredLocation})),t=Object(u.b)();return Object(r.jsx)(xn,{children:Object(r.jsxs)(gn,{children:[Object(r.jsx)(vn,{children:Object(r.jsx)(bn.a,{onClick:function(){return t(Y)}})}),Object(r.jsx)(mn,{children:"Cek makanan yang tersedia di lokasi kamu!"}),Object(r.jsx)(Sn,{}),n?n.map((function(n,t){return Object(r.jsx)(Kn,{location:n},t)})):null]})})};function Jn(){var n=Object(j.a)(["\n\n   * {\n      font-family: 'Open Sans', sans-serif;\n      font-size: 16px;\n      font-weight: 400;\n      margin: 0;\n      padding: 0;\n      line-height: 1;\n      list-style: none;\n      text-decoration: none;\n      box-sizing: border-box;\n   }\n\n   body{\n      color: #424749;\n      margin: 0;\n   }\n\n   \n\n   \n"]);return Jn=function(){return n},n}var qn=Object(p.a)(Jn()),Wn=e(32),Un=e.n(Wn),Yn=e(33),Qn=e.n(Yn);function Xn(){var n=Object(j.a)(["\n   display: flex;\n   color: #fff;\n"]);return Xn=function(){return n},n}function Vn(){var n=Object(j.a)(["\n   font-weight: 400;\n   color: #fff;\n   font-size: 12px;\n"]);return Vn=function(){return n},n}function Zn(){var n=Object(j.a)(["\n   display: flex;\n   font-weight: 600;\n   color: #fff;\n   font-size: 14px;\n   /* line-height: 1.5; */\n   padding: 0;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(j.a)(["\n   height: auto;\n"]);return $n=function(){return n},n}function nt(){var n=Object(j.a)(["\n   width: 100%;\n   padding: 16px 16px;\n   background: #a23530;\n   border-radius: 8px;\n   display: flex;\n   justify-content: space-between;\n   z-index: 6;\n\n   &::before {\n      content: '';\n      position: absolute;\n      height: 100%;\n      width: 100vw;\n      bottom: -16px;\n      left: 0;\n      z-index: -9;\n      background-image: linear-gradient(\n         to bottom,\n         rgba(255, 255, 255, 0),\n         #ffffff\n      );\n   }\n"]);return nt=function(){return n},n}function tt(){var n=Object(j.a)(["\n   padding: 0 16px;\n   width: 100vw;\n   position: fixed;\n   bottom: 16px;\n"]);return tt=function(){return n},n}var et=p.c.div(tt()),rt=p.c.div(nt()),ct=p.c.div($n()),at=p.c.div(Zn()),it=p.c.span(Vn()),ot=p.c.div(Xn()),ut=function(){var n,t=Object(u.c)((function(n){return n.app.totalCartItem})),e=Object(u.c)((function(n){return n.app.totalPrice}));return Object(r.jsx)(et,{children:Object(r.jsxs)(rt,{children:[Object(r.jsxs)(ct,{children:[Object(r.jsxs)(at,{children:[t," items | Rp ",(n=e,n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),Object(r.jsx)(it,{children:"Termasuk Ongkos Kirim"})]}),Object(r.jsxs)(ot,{children:[Object(r.jsx)(Un.a,{}),Object(r.jsx)(Qn.a,{})]})]})})},dt=e(36),ft=e.n(dt),st=e(34),lt=e.n(st),bt=e(35),jt=e.n(bt);function pt(){var n=Object(j.a)(["\n   font-size: 0.75;\n   color: #6e7679;\n   font-weight: 600;\n   padding-right: 5px;\n"]);return pt=function(){return n},n}function Ot(){var n=Object(j.a)(["\n   display: flex;\n   align-items: center;\n   padding: 0 0 4px;\n"]);return Ot=function(){return n},n}var ht=p.c.div(Ot()),xt=p.c.span(pt()),gt=function(n){for(var t=n.rate,e=[],c=t,a=5;a>0;)c>=1?e.push(Object(r.jsx)(lt.a,{fontSize:"small",style:{color:"#f9423a"}},a)):c<1&&c>0?e.push(Object(r.jsx)(jt.a,{fontSize:"small",style:{color:"#f9423a"}},a)):e.push(Object(r.jsx)(ft.a,{fontSize:"small",style:{color:"#f9423a"}},a)),c--,a--;return Object(r.jsxs)(ht,{children:[Object(r.jsx)(xt,{children:parseFloat(t).toFixed(1)}),e]})};function vt(){var n=Object(j.a)(["\n   font-weight: 600;\n"]);return vt=function(){return n},n}function mt(){var n=Object(j.a)(["\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   padding-top: 16px;\n"]);return mt=function(){return n},n}function wt(){var n=Object(j.a)(["\n   font-weight: 600;\n   font-size: 0.75em;\n   color: #6e7679;\n   line-height: 1.5;\n"]);return wt=function(){return n},n}function yt(){var n=Object(j.a)(["\n   font-weight: 600;\n   text-transform: capitalize;\n   line-height: 1.5;\n"]);return yt=function(){return n},n}function Et(){var n=Object(j.a)(["\n   padding: 16px;\n"]);return Et=function(){return n},n}function Tt(){var n=Object(j.a)(["\n   background-image: url(",");\n   background-position: center;\n   background-size: cover;\n   height: 300px;\n"]);return Tt=function(){return n},n}function Lt(){var n=Object(j.a)(["\n   width: 300px;\n   flex-grow: 2;\n   background: #fff;\n   border-radius: 8px;\n   box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);\n   overflow: hidden;\n"]);return Lt=function(){return n},n}var Dt=p.c.div(Lt()),_t=p.c.div(Tt(),(function(n){return n.image})),At=p.c.div(Et()),Ct=p.c.h2(yt()),St=p.c.h3(wt()),kt=p.c.div(mt()),It=p.c.span(vt()),Mt=function(n){var t,e=n.meal,c=e.rating,a=e.price,i=e.name,o=e.resto,d=e.image,f=Object(u.b)(),s=function(n){return f({type:q.ADD_TO_CART,payload:n})};return Object(r.jsxs)(Dt,{children:[Object(r.jsx)(_t,{image:d}),Object(r.jsxs)(At,{children:[Object(r.jsx)(gt,{rate:c}),Object(r.jsx)(Ct,{children:i}),Object(r.jsxs)(St,{children:["by kulina \u2022 ",o]}),Object(r.jsxs)(kt,{children:[Object(r.jsxs)(It,{children:["Rp ",(t=a,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),Object(r.jsx)(fn,{addButton:!0,onMouseDown:function(){return s(e)},onClick:function(){return f(U)},children:"add +"})]})]})]})};function Rt(){var n=Object(j.a)(["\n   font-weight: 700;\n   padding: 32px 16px 0;\n"]);return Rt=function(){return n},n}function Nt(){var n=Object(j.a)(["\n   padding: 0 16px;\n   display: flex;\n   flex-wrap: wrap;\n   gap: 16px;\n   padding-bottom: 40px;\n"]);return Nt=function(){return n},n}function zt(){var n=Object(j.a)(["\n   width: 100vw;\n   height: 100vh;\n   padding-top: 169px;\n   display: flex;\n   flex-wrap: wrap;\n   gap: 16px;\n   background: #f7f7f8;\n"]);return zt=function(){return n},n}var Pt=p.c.div(zt()),Bt=p.c.div(Nt()),Ft=p.c.span(Rt()),Gt=function(){var n=Object(u.c)((function(n){return n.app.meals})),t=Object(u.c)((function(n){return n.app.mealTime})),e=Object(u.c)((function(n){return n.app.cart})),a=Object(u.b)();Object(c.useEffect)((function(){a(W(t))}),[]);var i=function(){var n=new Date,t=n.getDate(),e=function(n){switch(n.getDay()){case 0:return"Minggu";case 1:return"Senin";case 2:return"Selasa";case 3:return"Rabu";case 4:return"Kamis";case 5:return"Jumat";case 6:return"Sabtu"}}(n),r=function(n){switch(n.getMonth()){case 0:return"Januari";case 1:return"Februari";case 2:return"Maret";case 3:return"April";case 4:return"Mei";case 5:return"Juni";case 6:return"Juli";case 7:return"Agustus";case 8:return"September";case 9:return"Oktober";case 10:return"November";case 11:return"Desember"}}(n),c=n.getFullYear();return"".concat(e,", ").concat(t," ").concat(r," ").concat(c)}();return Object(r.jsxs)(Pt,{children:[Object(r.jsx)(Ft,{children:i}),Object(r.jsx)(Bt,{children:n.map((function(n){return Object(r.jsx)(Mt,{meal:n},n.id)}))}),e.length>0&&Object(r.jsx)(ut,{})]})};var Kt=function(){var n=Object(u.c)((function(n){return n.app.hiddenLocationModal}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(qn,{}),Object(r.jsx)(sn,{}),Object(r.jsx)(Gt,{}),n?null:Object(r.jsx)(Hn,{})]})},Ht=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,70)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),a(n),i(n)}))},Jt=e(9),qt=(e(55),e(37)),Wt=e(39),Ut=e(38),Yt=e.n(Ut),Qt=e(40),Xt=[{id:1,rating:3.5,name:"chicken fried noodle",resto:"Up Town",price:25e3,image:"https://images.unsplash.com/photo-1578552606388-a0f1d618a9dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",category:["lunch"]},{id:2,rating:4,name:"tuna bread with vegetable",resto:"Up Town",price:25e3,image:"https://images.unsplash.com/photo-1600336247312-ba19bc8e60fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",category:["lunch","dinner"]},{id:3,rating:4.5,name:"special fried rice",resto:"Up Town",price:35e3,image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",category:["dinner"]},{id:4,rating:4,name:"paperoni pizza with cheese",resto:"Up Town",price:125e3,image:"https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",category:["dinner"]}],Vt={selectedDate:(new Date).toString(),datePickerPosition:0,mealTime:"lunch",meals:Xt,cart:[],totalPrice:0,totalCartItem:0,hiddenLocationModal:!0,locations:[{name:"Kulina Headquarters",address:"Gedung Kulina Lt. 3, Jalan Tulodong Atas No. 28, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190, Indonesia"},{name:"Kulina Dev Center",address:"CoHive Hartono Mall Hartono Mall Yogyakarta, 3rd Floor, Kaliwaru, Condongcatur, Depok Sub-District, Sleman Regency, Special Region of Yogyakarta 55281"},{name:"Kulina Kitchen 1",address:"Mall Ambassador Lt. 4 food district 1 No. 14A, RT.11/RW.4, Kuningan, Karet Kuningan, South Jakarta City, Jakarta 12940"}],selectedLocation:null,filteredLocation:null},Zt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.SELECT_DATE:return Object(_.a)(Object(_.a)({},n),{},{selectedDate:t.payload.toString()});case q.SWIPE_DATE_PICKER:return Object(_.a)(Object(_.a)({},n),{},{datePickerPosition:t.payload});case q.CHANGE_MEAL_TIME:return Object(_.a)(Object(_.a)({},n),{},{mealTime:t.payload});case q.FILTER_MEALS:return Object(_.a)(Object(_.a)({},n),{},{meals:Xt.filter((function(n){return n.category.includes(t.payload)}))});case q.ADD_TO_CART:return Object(_.a)(Object(_.a)({},n),{},{cart:$t(n.cart,t.payload)});case q.GET_TOTAL_PRICE:return Object(_.a)(Object(_.a)({},n),{},{totalPrice:n.cart.map((function(n){return n.price*n.quantity})).reduce((function(n,t){return n+t}),0),totalCartItem:n.cart.map((function(n){return n.quantity})).reduce((function(n,t){return n+t}),0)});case q.TOGGLE_HIDDEN_LOCATION_MODAL:return Object(_.a)(Object(_.a)({},n),{},{hiddenLocationModal:!n.hiddenLocationModal});case q.SELECT_LOCATION:return Object(_.a)(Object(_.a)({},n),{},{selectedLocation:t.payload});case q.FILTER_LOCATION:return Object(_.a)(Object(_.a)({},n),{},{filteredLocation:""===t.payload?null:n.locations.filter((function(n){return n.name.toLowerCase().includes(t.payload.toLocaleLowerCase())}))});default:return n}},$t=function(n,t){return n.find((function(n){return n.id===t.id}))?n.map((function(n){return n.id===t.id?Object(_.a)(Object(_.a)({},n),{},{quantity:n.quantity+1}):n})):[].concat(Object(Qt.a)(n),[Object(_.a)(Object(_.a)({},t),{},{quantity:1})])},ne={key:"root",storage:Yt.a},te=Object(Jt.c)({app:Zt}),ee=Object(Wt.a)(ne,te),re=[qt.a];var ce=Object(Jt.d)(ee,Jt.a.apply(void 0,re));o.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)(u.a,{store:ce,children:Object(r.jsx)(Kt,{})}),","]}),document.getElementById("root")),Ht()}},[[59,1,2]]]);
//# sourceMappingURL=main.255160b3.chunk.js.map