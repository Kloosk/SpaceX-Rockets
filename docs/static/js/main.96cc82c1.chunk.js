(this.webpackJsonpspace=this.webpackJsonpspace||[]).push([[0],{54:function(n,t,e){"use strict";var r=e(3),a=e(0),o=e.n(a),i=e(4),c=e(10),l=e(26);function u(){var n=Object(r.a)(["\n  text-decoration: none;\n  color: #D9D9D9;\n  padding: 0 5px;\n  transition: all 0.2s ease-in;\n  font-size: 1.5rem;\n"]);return u=function(){return n},n}function s(){var n=Object(r.a)(["\n  cursor: pointer;\n  position: relative;\n  padding-bottom: 5px;\n  &::after{\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transition: all 0.2s ease-in;\n    width: 0;\n    height: 1px;\n    background-color: #D9D9D9;\n  }\n  &::before{\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 50%;\n    transition: all 0.2s ease-in;\n    width: 0;\n    height: 1px;\n    background-color: #D9D9D9;\n  }\n   &:hover::after,&:hover::before{\n    width: 45%;\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(r.a)(["\n  width: 50%;\n  list-style: none;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return f=function(){return n},n}var d=i.b.ul(f()),m=i.b.li(s()),h=Object(i.b)(l.b)(u()),b=function(n){var t=n.curr,e=Object(a.useState)(t),r=Object(c.a)(e,2),i=r[0],l=(r[1],{borderRight:"1px solid #D9D9D9",borderLeft:"1px solid #D9D9D9"});return o.a.createElement(d,null,o.a.createElement(m,null,o.a.createElement(h,{to:"/",style:i?l:null},"ROCKETS")),o.a.createElement(m,null,o.a.createElement(h,{to:"/mars",style:i?null:l},"MARS")))};function v(){var n=Object(r.a)(["\n  width: 100vw;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  opacity: 0.8;\n  transition: all 1s ease-in;\n  &:hover{\n    opacity: 1;\n  }\n  &::after{\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #D9D9D9;\n    opacity: 0.1;\n    transition: all 1s ease-in;\n  }\n  &:hover::after{\n    opacity: 1;\n  }\n"]);return v=function(){return n},n}var p=i.b.nav(v());t.a=function(n){var t=n.curr;return o.a.createElement(p,null,o.a.createElement(b,{curr:t}))}},59:function(n,t,e){n.exports=e.p+"static/media/preview.b2983334.gif"},64:function(n,t,e){n.exports=e(91)},91:function(n,t,e){"use strict";e.r(t);var r=e(3),a=e(0),o=e.n(a),i=e(27),c=e.n(i),l=e(4),u=e(54),s=e(8),f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{type:"CHANGE_PHOTO_NUM",number:n}},d=function(n){return{type:"WAY_TO_MOVE",way:n}},m=function(){var n=arguments.length>1?arguments[1]:void 0;return{type:"SCALE_ADD",starship:n}},h=function(){var n=arguments.length>1?arguments[1]:void 0;return{type:"SCALE_SUB",starship:n}};function b(){var n=Object(r.a)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  color: #D9D9D9;\n  width: 20%;\n"]);return b=function(){return n},n}function v(){var n=Object(r.a)(["\n  z-index: 3;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 5vw;\n  height: 100vh;\n  opacity: 0.1;\n  border-left: 1px solid #D9D9D9;\n  cursor: pointer;\n  transition: all 1s ease-in;\n  background-color: #000;\n  &:hover{\n    opacity: 1;\n  }\n"]);return v=function(){return n},n}function p(){var n=Object(r.a)(["\n  z-index: 3;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5vw;\n  height: 100vh;\n  opacity: 0.1;\n  border-right: 1px solid #D9D9D9;\n  cursor: pointer;\n  transition: all 1s ease-in;\n  &:hover{\n    opacity: 1;\n  }\n"]);return p=function(){return n},n}var g=l.b.div(p()),O=l.b.div(v()),E=l.b.svg(b()),j=function(){var n=!1,t=Object(s.c)((function(n){return n.photos.numOfPhoto})),e=Object(s.b)();return o.a.createElement("div",null,o.a.createElement(g,{onClick:function(){!1===n&&(n=!0,e({type:"CHANGE_SLIDE_PREV"}),e(d(!1)),e({type:"LOAD_OFF"}),setTimeout((function(){e(f()),document.getElementById(t).style.border="none",document.getElementById("0").style.border="2px solid #fff"}),500),setTimeout((function(){n=!1}),1e3))}},o.a.createElement(E,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},o.a.createElement("path",{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}))),o.a.createElement(O,{onClick:function(){!1===n&&(n=!0,e({type:"CHANGE_SLIDE_NEXT"}),e(d(!0)),e({type:"LOAD_OFF"}),setTimeout((function(){e(f()),document.getElementById(t).style.border="none",document.getElementById("0").style.border="2px solid #fff"}),500),setTimeout((function(){n=!1}),1e3))}},o.a.createElement(E,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},o.a.createElement("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}))))},w=e(10),y=e(30),x=e.n(y);function _(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n"]);return _=function(){return n},n}function L(){var n=Object(r.a)(["\n  z-index: -1;\n  position: absolute;\n  left: 0;\n  top: 1px;\n   width: 178px;\n   height: 63px;\n  background-color: #eeeeee;\n  transform: translateX(100%);\n  transition: transform 1s 1s ease;\n  ",":hover &{\n    transform: translateX(0);\n   }\n"]);return L=function(){return n},n}function D(){var n=Object(r.a)(["\n   overflow: hidden;\n   z-index: 2;\n   position: relative;\n   border: 1px solid #eeeeee;\n   background: none;\n   width: 180px;\n   height: 65px;\n   cursor: pointer;\n   color: #eeeeee;\n   transition: color 1s 1s ease;\n   font-size: 2rem;\n   &::before{\n    content: '';\n    z-index: 3;\n    position: absolute;\n    top: -4px;\n    left: 0;\n    width: 100%;\n    transform: translateX(-102%);\n    height: 8px;\n    background-color: #777777;\n    transition: transform 1s ease;\n   }\n   &::after{\n    content: '';\n    z-index: 3;\n    position: absolute;\n    bottom: -4px;\n    left: 0;\n    width: 100%;\n    height: 8px;\n    background-color: #777777;\n    transform: translateX(-102%);\n    transition: transform 1s ease;\n   }\n   &:hover::after,&:hover::before{\n    transform: translateX(0);\n   }\n   &:hover{\n     color: #333333;\n   }\n"]);return D=function(){return n},n}function A(){var n=Object(r.a)(["\n color: #D9D9D9;\n text-align: center;\n margin-bottom: 20px;\n font-size: 2rem;\n"]);return A=function(){return n},n}function k(){var n=Object(r.a)(["\n color: #D9D9D9;\n margin-bottom: 10px;\n font-size: 3rem\n"]);return k=function(){return n},n}function C(){var n=Object(r.a)(["\n    width: 50%;\n    height: 100%;  \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding-left: 20px;\n"]);return C=function(){return n},n}var T=l.b.div(C()),B=l.b.h1(k()),S=l.b.p(A()),P=l.b.button(D()),N=l.b.div(L(),P),z=l.b.div(_()),H=function(n){var t=Object(s.b)(),e=Object(s.c)((function(n){return n.block.block}));return o.a.createElement(T,null,o.a.createElement(B,null,n.title),o.a.createElement(S,null,n.dsc),o.a.createElement(z,null,o.a.createElement(P,{onClick:function(){e||(t({type:"MOVE_TO_DSC"}),t({type:"BLOCK_BTN"}),setTimeout((function(){t({type:"UNBLOCK_BTN"})}),2e3))}},"More",o.a.createElement(N,null)),o.a.createElement(P,{onClick:function(){e||(t({type:"BLOCK_BTN"}),t({type:"MOVE_DOWN"}),setTimeout((function(){t({type:"LOAD_ON"})}),2e3),setTimeout((function(){t({type:"UNBLOCK_BTN"})}),2e3))}},"3D Model",o.a.createElement(N,null))))};function M(){var n=Object(r.a)(["\n  width: 80px;\n  height: 80px;\n  background: ",";\n  margin: 3px;\n  cursor: pointer;\n"]);return M=function(){return n},n}var I=l.b.div(M(),(function(n){return"url(".concat(n.bg,") no-repeat center/cover")})),V=function(n){var t=n.id;Object(a.useEffect)((function(){0===t&&(document.getElementById(t).style.border="2px solid #fff")}),[]);var e=Object(s.b)(),r=Object(s.c)((function(n){return n.photos.numOfPhoto})),i=Object(s.c)((function(n){return n.loadingPhoto.loadingPhoto}));return o.a.createElement(I,{id:"".concat(t),onClick:function(){i||(e({type:"LOAD_PHOTO_ON"}),document.getElementById(r).style.border="none",e(f(t)),document.getElementById(t).style.border="2px solid #fff",setTimeout((function(){e({type:"LOAD_PHOTO_OFF"})}),500))},bg:n.img})};function F(){var n=Object(r.a)(["\n  color: #D9D9D9;\n  width: 100%;\n  transform: ",";\n"]);return F=function(){return n},n}function G(){var n=Object(r.a)(["\n  z-index: 5;\n  position: absolute;\n  top: 50%;\n  left: ",";\n  transform: translateY(-50%);\n  opacity: 0.3;\n  width: 10%;\n  background: none;\n  outline: none;\n  cursor: pointer;\n  border: none;\n  transition: opacity 0.5s ease;\n  ",":hover &{\n    opacity: 1;\n  }\n"]);return G=function(){return n},n}function Y(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 90%;\n"]);return Y=function(){return n},n}function R(){var n=Object(r.a)(["\n    width: 80%;\n    height: 60%;\n    transition: background 0.5s ease;\n    background: ",";\n    position: relative;\n"]);return R=function(){return n},n}function K(){var n=Object(r.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return K=function(){return n},n}var U=l.b.div(K()),X=l.b.div(R(),(function(n){return"url(".concat(n.bg,") no-repeat center/cover")})),W=l.b.div(Y()),J=l.b.button(G(),(function(n){return n.rotate?"0":"90%"}),X),$=l.b.svg(F(),(function(n){return n.rotate?"rotate(0)":"rotate(180deg)"})),q=function(n){var t=Object(s.b)(),e=Object(s.c)((function(n){return n.photos.numOfPhoto})),r=Object(s.c)((function(n){return n.loadingPhoto.loadingPhoto}));return o.a.createElement(U,null,n.imgs&&o.a.createElement(X,{bg:n.imgs[e]},o.a.createElement(J,{rotate:!0,onClick:function(){r||(t({type:"LOAD_PHOTO_ON"}),t(function(){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{type:"CHANGE_PHOTO_PREV",num:n}}(0,n.imgs.length)),setTimeout((function(){t({type:"LOAD_PHOTO_OFF"})}),500),0===e?(document.getElementById(e).style.border="none",document.getElementById(n.imgs.length-1).style.border="2px solid #fff",t(f(n.imgs.length-1))):(document.getElementById(e).style.border="none",document.getElementById(e-1).style.border="2px solid #fff",t(f(e-1))))}},o.a.createElement($,{rotate:!0,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},o.a.createElement("path",{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}))),o.a.createElement(J,{rotate:!1,onClick:function(){r||(t({type:"LOAD_PHOTO_ON"}),t(function(){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{type:"CHANGE_PHOTO_NEXT",num:n}}(0,n.imgs.length)),setTimeout((function(){t({type:"LOAD_PHOTO_OFF"})}),500),e===n.imgs.length-1?(document.getElementById(n.imgs.length-1).style.border="none",t(f(0)),document.getElementById("0").style.border="2px solid #fff"):(document.getElementById(e).style.border="none",document.getElementById(e+1).style.border="2px solid #fff",t(f(e+1))))}},o.a.createElement($,{rotate:!1,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},o.a.createElement("path",{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"})))),n.imgs&&o.a.createElement(W,null,n.imgs.map((function(n,t){return o.a.createElement(V,{id:t,key:t,img:n})}))))};function Q(){var n=Object(r.a)(["\n  height: 90vh;\n  width: 90vw;\n  margin: 0 auto;\n  display: flex;\n  transition: all 0.5s ease-in-out;\n  transform: ",";\n  opacity: ",";\n  \n"]);return Q=function(){return n},n}var Z=l.b.div(Q(),(function(n){return n.animOn?"translate(".concat(n.wayToMove,")"):"translate(0)"}),(function(n){return n.animOn?"0":"1"})),nn=function(){var n=Object(a.useState)(!0),t=Object(w.a)(n,2),e=t[0],r=t[1],i=Object(a.useState)(!1),c=Object(w.a)(i,2),l=c[0],u=c[1],f=Object(a.useState)([]),d=Object(w.a)(f,2),m=d[0],h=d[1],b=Object(a.useState)([]),v=Object(w.a)(b,2),p=v[0],g=v[1],O=Object(s.c)((function(n){return n.slide.numOfSlide})),E=Object(s.c)((function(n){return n.ways.wayToMove}));return Object(a.useEffect)((function(){x.a.get("https://api.spacexdata.com/v3/rockets").then((function(n){h(n.data),g(n.data[0])})).catch((function(n){console.log(n)}))}),[]),Object(a.useEffect)((function(){!1===e&&(u(!0),setTimeout((function(){g(m[O]),u(!1)}),500)),r(!1)}),[O]),o.a.createElement(Z,{animOn:l?1:0,wayToMove:E?"120%":"-120%"},p&&o.a.createElement(H,{title:p.rocket_name,dsc:p.description}),p&&o.a.createElement(q,{imgs:p.flickr_images}))};function tn(){var n=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 4;  \n  background-color: #000;\n  color: #fff;\n  width: 50vw;\n  height: 100vh;\n  transition: transform 1s ease;\n  opacity: 1;\n  transform: ",";\n"]);return tn=function(){return n},n}l.b.div(tn(),(function(n){return n.click?"translate(0,0)":"translate(100%,-100%)"}));function en(){var n=Object(r.a)(["\n width: 40px;\n height: 40px;\n cursor: pointer;\n border: none;\n background: transparent;\n outline: none;\n color: #fff;\n \n"]);return en=function(){return n},n}function rn(){var n=Object(r.a)(["\n  position: absolute;\n  z-index: 5;\n  top: 17px;\n  right: 17px;\n  color: #fff;\n  opacity: 0.5;\n  width: 50px;\n  height: 50px;\n  &:hover{\n    opacity: 1;\n  }\n  \n"]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: #0D0D0D;\n  transition: transform 1.9s ease;\n  transform: ",";\n"]);return an=function(){return n},n}var on=l.b.header(an(),(function(n){return n.move?"translateX(-100vw)":n.move3d&&"translateY(-100vh)"})),cn=(l.b.div(rn()),l.b.button(en()),function(){document.title="SpaceX Rockets";var n=Object(s.c)((function(n){return n.move.move})),t=Object(s.c)((function(n){return n.move3d.move}));return o.a.createElement(on,{move:n,move3d:t},o.a.createElement(j,null),o.a.createElement(u.a,{curr:!0}),o.a.createElement(nn,null))});function ln(){var n=Object(r.a)(["\n    grid-column: 2/4;\n"]);return ln=function(){return n},n}function un(){var n=Object(r.a)(["\n    width: 20%;\n"]);return un=function(){return n},n}function sn(){var n=Object(r.a)(["\n  color: #ACAAA9;\n  text-align: center;\n  text-decoration: none;\n  grid-column: 2/3;\n  font-size: 2rem;\n  border: 2px solid #ACAAA9;\n  padding: 5px;\n"]);return sn=function(){return n},n}function fn(){var n=Object(r.a)(["\n  font-size: 2rem;\n  color: #ACAAA9;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n \n"]);return fn=function(){return n},n}function dn(){var n=Object(r.a)(["\n  text-align: center;\n  font-size: 6rem;\n  color: #ACAAA9;\n  transform: rotate(90deg);\n  grid-column: 1/2;\n  border-bottom: 2px solid #ACAAA9;\n  width: 80%;\n"]);return dn=function(){return n},n}function mn(){var n=Object(r.a)(["\n  margin: 0 auto;\n  padding: 5vh 0;\n  width: 95%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  align-items: center;\n"]);return mn=function(){return n},n}var hn=l.b.div(mn()),bn=l.b.h1(dn()),vn=l.b.div(fn()),pn=l.b.a(sn()),gn=l.b.p(un()),On=l.b.div(ln()),En=function(n){return o.a.createElement(hn,null,o.a.createElement(bn,null,n.title),o.a.createElement(On,null,o.a.createElement(vn,null,o.a.createElement(gn,null,"Country:")," ",n.country),o.a.createElement(vn,null,o.a.createElement(gn,null,"First flight:"),"  ",n.first_flight),o.a.createElement(vn,null,o.a.createElement(gn,null,"Cost:"),"  ","$".concat(function(n){if(void 0===n)return n;for(var t=n.toString(),e="",r=0,a=t.length-1;a>=0;a--)3===r&&(e+=" ",r=0),e+=[t[a]],r++;return e.split("").reverse().join("")}(n.cost))),o.a.createElement(vn,null,o.a.createElement(gn,null,"Diameter:"),"  ",n.diameter&&"".concat(n.diameter.meters,"m (").concat(n.diameter.feet,"ft)")),o.a.createElement(vn,null,o.a.createElement(gn,null,"Height:"),"  ",n.height&&"".concat(n.height.meters,"m (").concat(n.height.feet,"ft)")),o.a.createElement(vn,null,o.a.createElement(gn,null,"Mass:"),"  ",n.mass&&"".concat((.001*n.mass.kg).toFixed(0),"t"))),o.a.createElement(pn,{target:"blank",href:n.more_info},"More (wikipedia)"))};function jn(){var n=Object(r.a)(["\n  margin-right: 7px;\n  color: #D9D9D9;\n  width: 10px;\n"]);return jn=function(){return n},n}function wn(){var n=Object(r.a)(["\n  position: absolute;\n  top: 2vh;\n  right: 2vw;  \n  font-size: 2rem;\n  padding: 7px 17px;\n  color: #ACAAA9;\n  background: transparent;\n  border: 2px solid #ACAAA9;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  &:hover{\n      color: #fff;\n      border-color:#fff;\n  }\n"]);return wn=function(){return n},n}var yn=l.b.button(wn()),xn=l.b.svg(jn()),_n=function(){var n=Object(s.b)(),t=Object(s.c)((function(n){return n.block.block}));return o.a.createElement(yn,{onClick:function(){t||(n({type:"MOVE_TO_MAIN"}),n({type:"BLOCK_BTN"}),setTimeout((function(){n({type:"UNBLOCK_BTN"})}),2e3))}},o.a.createElement(xn,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},o.a.createElement("path",{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"})),"BACK")},Ln=e(2),Dn=e(6);function An(){var n=Object(r.a)(["\n   position: absolute;\n   width: 100vw;\n   height: 100vh;\n   z-index: -1;\n   background-color: #000;\n"]);return An=function(){return n},n}var kn=l.b.canvas(An()),Cn=function(){var n=Object(a.useRef)(null);return Object(a.useEffect)((function(){var t,e=n.current,r=window.innerWidth,a=window.innerHeight;window.innerWidth<620?(t=!0,r=window.screen.width,a=window.screen.height,e.width=r,e.height=a):(e.width=window.innerWidth,e.height=window.innerHeight);var o=e.getContext("2d"),i=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;Object(Ln.a)(this,n),this.x=t,this.y=e,this.dx=r,this.dy=a}return Object(Dn.a)(n,[{key:"draw",value:function(){o.beginPath(),o.arc(this.x,this.y,.5,0,2*Math.PI,!1),o.fill(),o.fillStyle="#ffffff"}},{key:"update",value:function(){(this.x+.5>r||this.x-.5<0)&&(this.dx=-this.dx),(this.y+.5>a||this.y-.5<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,this.draw()}}]),n}(),c=[],l=function(){var n;n=t?50:300;for(var e=0;e<n;e++){var o=Math.random()*r,l=Math.random()*a,u=Math.random()-.5,s=Math.random()-.5;c.push(new i(o,l,u,s))}};l(),function n(){requestAnimationFrame(n),o.clearRect(0,0,r,a),c.forEach((function(n){n.update()}))}(),window.addEventListener("resize",(function(){t||(e.width=window.innerWidth,e.height=window.innerHeight,c=[],l())}))}),[]),o.a.createElement(kn,{ref:n})};function Tn(){var n=Object(r.a)(["\n    width: 100vw;\n    height: 100vh;\n    transition: transform 1.9s ease;\n    transform: ","\n"]);return Tn=function(){return n},n}var Bn=l.b.main(Tn(),(function(n){return n.move?"translate(0,-100vh);":"translate(100vw,-100vh);"})),Sn=function(){var n=Object(s.c)((function(n){return n.slide.numOfSlide})),t=Object(a.useState)([]),e=Object(w.a)(t,2),r=e[0],i=e[1],c=Object(a.useState)([]),l=Object(w.a)(c,2),u=l[0],f=l[1],d=Object(s.c)((function(n){return n.move.move}));return Object(a.useEffect)((function(){x.a.get("https://api.spacexdata.com/v3/rockets").then((function(n){i(n.data),f(n.data[0])})).catch((function(n){console.log(n)}))}),[]),Object(a.useEffect)((function(){f(r[n])}),[n]),o.a.createElement(Bn,{move:d},o.a.createElement(Cn,null),o.a.createElement(_n,null),u&&o.a.createElement(En,{title:u.rocket_name,cost:u.cost_per_launch,country:u.country,diameter:u.diameter,first_flight:u.first_flight,height:u.height,mass:u.mass,more_info:u.wikipedia}))},Pn=e(23),Nn=e(5),zn={numOfSlide:0},Hn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SLIDE_NEXT":return 3===n.numOfSlide?Object(Nn.a)(Object(Nn.a)({},n),{},{numOfSlide:0}):Object(Nn.a)(Object(Nn.a)({},n),{},{numOfSlide:n.numOfSlide+1});case"CHANGE_SLIDE_PREV":return 0===n.numOfSlide?Object(Nn.a)(Object(Nn.a)({},n),{},{numOfSlide:3}):Object(Nn.a)(Object(Nn.a)({},n),{},{numOfSlide:n.numOfSlide-1});default:return n}},Mn={numOfPhoto:0},In=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PHOTO_NUM":return Object(Nn.a)(Object(Nn.a)({},n),{},{numOfPhoto:t.number});case"CHANGE_PHOTO_NEXT":return t.num-1===n.numOfPhoto?Object(Nn.a)(Object(Nn.a)({},n),{},{numOfPhoto:0}):Object(Nn.a)(Object(Nn.a)({},n),{},{numOfPhoto:n.numOfPhoto+1});case"CHANGE_PHOTO_PREV":return 0===n.numOfPhoto?Object(Nn.a)(Object(Nn.a)({},n),{},{numOfPhoto:t.num-1}):Object(Nn.a)(Object(Nn.a)({},n),{},{numOfPhoto:n.numOfPhoto-1});default:return n}},Vn={wayToMove:!0},Fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WAY_TO_MOVE":return Object(Nn.a)(Object(Nn.a)({},n),{},{wayToMove:t.way});default:return{state:n}}},Gn={move:!1},Yn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_TO_DSC":return Object(Nn.a)(Object(Nn.a)({},n),{},{move:!0});case"MOVE_TO_MAIN":return Object(Nn.a)(Object(Nn.a)({},n),{},{move:!1});default:return n}},Rn={move:!1},Kn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_UP":return Object(Nn.a)(Object(Nn.a)({},n),{},{move:!1});case"MOVE_DOWN":return Object(Nn.a)(Object(Nn.a)({},n),{},{move:!0});default:return n}},Un={value:0},Xn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Un,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIGHT_ADD":return Object(Nn.a)(Object(Nn.a)({},n),{},{value:n.value+.5});case"LIGHT_SUB":return n.value>.5?Object(Nn.a)(Object(Nn.a)({},n),{},{value:n.value-.5}):n;case"LIGHT_SET":return Object(Nn.a)(Object(Nn.a)({},n),{},{value:t.value});default:return n}},Wn={value:0},Jn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SCALE_ADD":return t.starship?Object(Nn.a)(Object(Nn.a)({},n),{},{value:n.value+.01}):Object(Nn.a)(Object(Nn.a)({},n),{},{value:n.value+.5});case"SCALE_SUB":return t.starship&&n.value>.01?Object(Nn.a)(Object(Nn.a)({},n),{},{value:n.value-.01}):n.value>1?Object(Nn.a)(Object(Nn.a)({},n),{},{value:n.value-.5}):n;case"SCALE_SET":return Object(Nn.a)(Object(Nn.a)({},n),{},{value:t.value});default:return n}},$n={loading:!1},qn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$n,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ON":return Object(Nn.a)(Object(Nn.a)({},n),{},{loading:!0});case"LOAD_OFF":return Object(Nn.a)(Object(Nn.a)({},n),{},{loading:!1});default:return n}},Qn={loadingPhoto:!1},Zn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PHOTO_ON":return Object(Nn.a)(Object(Nn.a)({},n),{},{loadingPhoto:!0});case"LOAD_PHOTO_OFF":return Object(Nn.a)(Object(Nn.a)({},n),{},{loadingPhoto:!1});default:return n}},nt={block:!1},tt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BLOCK_BTN":return Object(Nn.a)(Object(Nn.a)({},n),{},{block:!0});case"UNBLOCK_BTN":return Object(Nn.a)(Object(Nn.a)({},n),{},{block:!1});default:return n}},et=Object(Pn.b)({slide:Hn,photos:In,ways:Fn,move:Yn,move3d:Kn,light:Xn,scale:Jn,load:qn,loadingPhoto:Zn,block:tt}),rt=Object(Pn.c)(et),at=e(26),ot=e(12),it=e(59),ct=e.n(it);function lt(){var n=Object(r.a)(["\n    position: absolute;\n    top: 70%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 50%;\n    text-align: center;\n    font-size: 1.5rem;\n    color: #fff;\n"]);return lt=function(){return n},n}function ut(){var n=Object(r.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  width: 30%;\n  height: 35%;\n"]);return ut=function(){return n},n}function st(){var n=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  overflow: hidden;\n  z-index: ",";\n"]);return st=function(){return n},n}var ft=l.b.div(st(),(function(n){return n.loading&&-1})),dt=l.b.img(ut()),mt=l.b.h1(lt()),ht=function(n){var t=n.loading;return o.a.createElement(ft,{loading:t},o.a.createElement(dt,{src:ct.a,alt:"Loading"}),o.a.createElement(mt,null,"It may take a few seconds."))};function bt(){var n=Object(r.a)(["\n  cursor: pointer;\n  border: 1px solid #fff;\n  width: 100px;\n  height: 50px;\n  background-color: transparent;\n  font-size: 2rem;\n  color: #fff;\n  margin: 0 7px;\n  &:hover{\n    transform: scale(1.1);\n  }\n"]);return bt=function(){return n},n}function vt(){var n=Object(r.a)(["\n  text-align: right;\n  width: 40%;\n  font-size: 2rem;\n  color: #fff;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-right: 5px;\n"]);return vt=function(){return n},n}function pt(){var n=Object(r.a)(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  align-items: center;\n"]);return pt=function(){return n},n}function gt(){var n=Object(r.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n  width: 20vw;\n"]);return gt=function(){return n},n}var Ot=l.b.div(gt()),Et=l.b.div(pt()),jt=l.b.h1(vt()),wt=l.b.button(bt()),yt=function(n){var t=n.name,e=Object(s.b)();return o.a.createElement(Ot,null,o.a.createElement(Et,null,o.a.createElement(jt,null,"Size"),o.a.createElement(wt,{onClick:function(){e("starship"===t?m(0,!0):m())}},"+"),o.a.createElement(wt,{onClick:function(){e("starship"===t?h(0,!0):h())}},"-")),o.a.createElement(Et,null,o.a.createElement(jt,null,"Light"),o.a.createElement(wt,{onClick:function(){e({type:"LIGHT_ADD"})}},"+"),o.a.createElement(wt,{onClick:function(){e({type:"LIGHT_SUB"})}},"-")))};function xt(){var n=Object(r.a)(["\n position: absolute;\n left: 102%;\n top: 0;\n max-height: 80%;\n width: 40vw;\n color: #fff;\n font-size: 1rem;\n opacity: 0;\n transition: opacity 0.1s ease;\n ",":hover &{\n  opacity: 1;\n }\n"]);return xt=function(){return n},n}function _t(){var n=Object(r.a)(["\n width: 10vw;\n font-size: 1.2rem;\n color: #fff;\n text-align: center;\n padding-bottom: 2px;\n"]);return _t=function(){return n},n}function Lt(){var n=Object(r.a)(["\n  width: 5vw;\n  height: 5vh;\n  color: #fff;\n"]);return Lt=function(){return n},n}function Dt(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Dt=function(){return n},n}function At(){var n=Object(r.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 5px;\n  cursor: pointer;\n  transition: transform 0.8s ease-out;\n  transform: ",";\n"]);return At=function(){return n},n}var kt=l.b.div(At(),(function(n){return n.hide&&"translateY(100%)"})),Ct=l.b.div(Dt()),Tt=l.b.svg(Lt()),Bt=l.b.h1(_t()),St=l.b.p(xt(),kt),Pt=function(){var n=Object(a.useState)(!1),t=Object(w.a)(n,2),e=t[0],r=t[1];return o.a.createElement(kt,{onClick:function(){r(!0)},hide:e},o.a.createElement(Bt,null,"CONTROL"),o.a.createElement(Ct,null,o.a.createElement(Tt,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrows-alt",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{fill:"currentColor",d:"M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"})),o.a.createElement(Tt,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"mouse",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},o.a.createElement("path",{fill:"currentColor",d:"M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"}))),o.a.createElement(St,null,"You can use arrows, mouse and scroll (also as a button) to control the rocket."))};function Nt(){var n=Object(r.a)(["\n  margin-right: 7px;\n  color: #D9D9D9;\n  width: 10px;\n  transform: rotate(90deg);\n"]);return Nt=function(){return n},n}function zt(){var n=Object(r.a)(["\n  position: absolute;\n  top: 2vh;\n  right: 2vw;  \n  font-size: 2rem;\n  padding: 7px 17px;\n  color: #ACAAA9;\n  background: transparent;\n  border: 2px solid #ACAAA9;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n   transition: all 0.2s ease;\n  &:hover{\n      color: #fff;\n      border-color:#fff;\n  }\n"]);return zt=function(){return n},n}var Ht=l.b.button(zt()),Mt=l.b.svg(Nt()),It=function(){var n=Object(s.b)(),t=Object(s.c)((function(n){return n.block.block}));return o.a.createElement(Ht,{onClick:function(){!1===t&&(n({type:"MOVE_UP"}),n({type:"BLOCK_BTN"}),setTimeout((function(){n({type:"UNBLOCK_BTN"})}),2e3))}},o.a.createElement(Mt,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},o.a.createElement("path",{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"})),"BACK")},Vt=e(24),Ft=e(52),Gt=e(53);function Yt(){var n=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: #0D0D0D;\n"]);return Yt=function(){return n},n}Object(Vt.b)({OrbitControls:Gt.a});var Rt=Object(l.b)(Vt.a)(Yt()),Kt=function(){var n=Object(Vt.d)(),t=n.camera,e=n.gl,r=Object(a.useRef)();return Object(Vt.c)((function(){r.current.update()})),o.a.createElement("orbitControls",{args:[t,e.domElement],autoRotate:!0,ref:r})},Ut=function(n){var t=n.url,e=n.pointlight,r=n.ambientlight,i=n.intensity,c=n.scale,l=n.positionY,u=Object(s.b)(),f=Object(a.useState)(),d=Object(w.a)(f,2),m=d[0],h=d[1],b=Object(a.useRef)();Object(a.useEffect)((function(){u(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{type:"LIGHT_SET",value:n}}(i)),u(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{type:"SCALE_SET",value:n}}(c)),(new Ft.a).load(t,h)}),[t]);var v=Object(s.c)((function(n){return n.light.value})),p=Object(s.c)((function(n){return n.scale.value}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(Rt,{camera:{fov:75,position:[0,0,100]}},r&&o.a.createElement("ambientLight",{intensity:v}),e&&o.a.createElement("pointLight",{intensity:v,position:[10,20,10]}),e&&o.a.createElement("pointLight",{intensity:v,position:[-10,-20,-10]}),e&&o.a.createElement("pointLight",{intensity:v,position:[10,-20,10]}),e&&o.a.createElement("pointLight",{intensity:v,position:[10,20,10]}),e&&o.a.createElement("pointLight",{intensity:v,position:[0,20,10]}),e&&o.a.createElement("pointLight",{intensity:v,position:[0,20,-10]}),e&&o.a.createElement("pointLight",{intensity:v,position:[0,0,15]}),e&&o.a.createElement("pointLight",{intensity:v,position:[0,0,-15]}),o.a.createElement(Kt,null),m?o.a.createElement("primitive",{ref:b,object:m.scene,scale:[p,p,p],position:[0,l,0]}):null),o.a.createElement(ht,{loading:m}))};function Xt(){var n=Object(r.a)(["\n  width: 100vw;\n  height: 100vh;\n  transition: transform 1.9s ease;\n  transform: ",";\n  background-color: #0D0D0D;\n"]);return Xt=function(){return n},n}var Wt=[{name:"falcon1",pointLight:!1,ambientLight:!0,intensity:1.5,scale:3,positionY:-40},{name:"falcon9",pointLight:!1,ambientLight:!0,intensity:1,scale:1.5,positionY:-50},{name:"falconHeavy",pointLight:!0,ambientLight:!1,intensity:.5,scale:6,positionY:-15},{name:"starship",pointLight:!0,ambientLight:!1,intensity:20,scale:.01,positionY:20}],Jt=l.b.div(Xt(),(function(n){return n.move3d?"translateY(-200vh)":"translateY(-100vh)"})),$t=function(){var n=Object(a.useState)("./rockets/".concat(Wt[0].name,"/scene.gltf")),t=Object(w.a)(n,2),e=t[0],r=t[1],i=Object(s.c)((function(n){return n.move3d.move})),c=Object(s.c)((function(n){return n.slide.numOfSlide})),l=Object(s.c)((function(n){return n.load.loading}));return Object(a.useEffect)((function(){r("./rockets/".concat(Wt[c].name,"/scene.gltf"))}),[c]),o.a.createElement(Jt,{move3d:i},l&&o.a.createElement(Ut,{url:e,pointlight:Wt[c].pointLight,ambientlight:Wt[c].ambientLight,intensity:Wt[c].intensity,scale:Wt[c].scale,positionY:Wt[c].positionY}),o.a.createElement(yt,{name:Wt[c].name}),o.a.createElement(Pt,null),o.a.createElement(It,null))};function qt(){var n=Object(r.a)(["\n   width: 100vw;\n   height: 100vh;\n   overflow: hidden;\n"]);return qt=function(){return n},n}var Qt=Object(a.lazy)((function(){return e.e(3).then(e.bind(null,94))})),Zt=Object(a.lazy)((function(){return e.e(4).then(e.bind(null,95))})),ne=l.b.div(qt()),te=function(){return o.a.createElement(at.a,null,o.a.createElement(s.a,{store:rt},o.a.createElement(ne,null,o.a.createElement(ot.c,null,o.a.createElement(ot.a,{exact:!0,path:"/"},o.a.createElement(cn,null),o.a.createElement(Sn,null),o.a.createElement($t,null)),o.a.createElement(ot.a,{path:"/mars"},o.a.createElement(a.Suspense,{fallback:o.a.createElement(ht,null)},o.a.createElement(Qt,null))),o.a.createElement(ot.a,{path:"/view"},o.a.createElement(a.Suspense,{fallback:o.a.createElement(ht,null)},o.a.createElement(Zt,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(){var n=Object(r.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lato', sans-serif;\n  }\n"]);return ee=function(){return n},n}var re=Object(l.a)(ee());c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(te,null),o.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.96cc82c1.chunk.js.map