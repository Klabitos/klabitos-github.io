(function(){"use strict";var t={7197:function(t,e,i){var a=i(6369),n=function(){var t=this,e=t._self._c;return e("main-layout")},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-layout"},[e("div",{staticClass:"top-menu"},[e("top-menu")],1),e("div",{staticClass:"main-content-page"},[e("div",{staticClass:"main-content-page__centered"},[e("router-view")],1)]),e("div",{staticClass:"footer-info"},[e("div",[e("footer-info")],1)])])},o=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-menu-layout"},[t._m(0),e("div",{staticClass:"top-menu-search-bar"},[e("SearchBar")],1),e("div",{staticClass:"top-menu-dark-mode",on:{click:t.changeToDarkMode}},[e("h2",[t.isLightOff?e("i",{staticClass:"fa-solid fa-sun"}):e("i",{staticClass:"fa-solid fa-moon"})])]),e("div",{staticClass:"top-menu-language",on:{click:t.changeLanguage}},[e("h2",[t._v(t._s(this.$i18n.locale.toUpperCase()))])]),t._m(1)])},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-menu-layout--img"},[e("img",{attrs:{src:i(6949),alt:"logo-vue",width:"150",height:"50"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-menu-profile"},[e("h2",[t._v("Pablo Cruz")])])}],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-bar-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"search-bar",attrs:{type:"text",placeholder:t.$t("components.search-bar.placeholder")},domProps:{value:t.inputText},on:{keyup:t.filterTextChanged,input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),e("div",{staticClass:"search-bar-options"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isTitleActive,expression:"isTitleActive"}],attrs:{disabled:"",type:"checkbox"},domProps:{checked:Array.isArray(t.isTitleActive)?t._i(t.isTitleActive,null)>-1:t.isTitleActive},on:{change:function(e){var i=t.isTitleActive,a=e.target,n=!!a.checked;if(Array.isArray(i)){var r=null,s=t._i(i,r);a.checked?s<0&&(t.isTitleActive=i.concat([r])):s>-1&&(t.isTitleActive=i.slice(0,s).concat(i.slice(s+1)))}else t.isTitleActive=n}}}),t._v(" "+t._s(t.$t("components.search-bar.title"))+" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.isDescriptionActive,expression:"isDescriptionActive"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isDescriptionActive)?t._i(t.isDescriptionActive,null)>-1:t.isDescriptionActive},on:{change:[function(e){var i=t.isDescriptionActive,a=e.target,n=!!a.checked;if(Array.isArray(i)){var r=null,s=t._i(i,r);a.checked?s<0&&(t.isDescriptionActive=i.concat([r])):s>-1&&(t.isDescriptionActive=i.slice(0,s).concat(i.slice(s+1)))}else t.isDescriptionActive=n},()=>this.$globals.isDescriptionActive=t.isDescriptionActive]}}),t._v(" "+t._s(t.$t("components.search-bar.description"))+" ")])])},d=[],p={name:"SearchBar",data(){return{inputText:"",isTitleActive:!0,isDescriptionActive:!1}},created(){a.ZP.prototype.$globals=a.ZP.observable({filter:"",isDescriptionActive:!1})},methods:{filterTextChanged(){this.$globals.filter=this.inputText}}},f=p,v=i(1001),m=(0,v.Z)(f,u,d,!1,null,"60e9dd69",null),h=m.exports,g={components:{SearchBar:h},data(){return{isLightOff:!1}},methods:{changeLanguage(){"en"==this.$i18n.locale?this.$i18n.locale="es":this.$i18n.locale="en"},changeToDarkMode(){document.body.classList.toggle("dark-mode"),this.isLightOff=!this.isLightOff}},computed:{}},b=g,_=(0,v.Z)(b,c,l,!1,null,"75cc0c7b",null),C=_.exports,y=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-layout"},[e("div",{staticClass:"footer-layout--item"},[t._v(" cruzrodripablo@gmail.com "),e("span",{staticClass:"beutiful-icon"},[t._v("||")])]),e("div",{staticClass:"footer-layout--item"},[t._v(" Pablo Cruz Rodríguez "),e("span",{staticClass:"beutiful-icon"},[t._v("||")])]),e("div",{staticClass:"footer-layout--item"},[e("i",{staticClass:"fa-brands fa-github"}),t._v(" Klabitos ")])])}],k={},x=k,T=(0,v.Z)(x,y,A,!1,null,"bf38d1e0",null),D=T.exports,Z={name:"main-layout",components:{TopMenu:C,FooterInfo:D}},w=Z,$=(0,v.Z)(w,s,o,!1,null,"231e4237",null),O=$.exports,P={name:"App",components:{mainLayout:O}},S=P,I=(0,v.Z)(S,n,r,!1,null,null,null),L=I.exports,F=i(2631),j=function(){var t=this,e=t._self._c;return e("div",[e("StardardCardGallery",{attrs:{items:t.getFilteredItems}})],1)},z=[],B=i(4161),M={BACK_IP:" https://jsonplaceholder.typicode.com/"};function N(){return B.Z.get(M.BACK_IP+"posts").then((t=>t)).catch((t=>console.log(t)))}var q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"standard-gallery"},[e("h1",[t._v(t._s(t.$t("components.home.faq")))]),null==t.items?e("div",[e("h2",[t._v("Error while fetching the data. Try again later.")])]):t.items.length>0?e("div",{staticClass:"standard-gallery-cards"},t._l(t.items,(function(t){return e("StandardCard",{key:t.id,attrs:{title:t.title,description:t.body}})})),1):e("div",[e("h2",[t._v("Data is being loaded...")])])])},G=[],K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",style:{backgroundColor:`${t.backgroundColorCard}`}},[e("div",[e("h1",[t._v(t._s(t.title))])]),e("div",{staticClass:"card-body"},[e("p",[t._v(t._s(t.description))])]),e("div",{staticClass:"card-link",on:{mouseover:()=>t.backgroundColorCard="#FFC857",mouseleave:()=>t.backgroundColorCard=""}},[e("h2",{staticClass:"card-link-text"},[t._v(t._s(t.$t("components.cards.more-information")))])])])},E=[],H={name:"StandardCard",props:{title:{type:String,default:"Lorem"},description:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}},data(){return{backgroundColorCard:""}}},J=H,Q=(0,v.Z)(J,K,E,!1,null,"42b5063e",null),R=Q.exports,U={name:"StardardCardGallery",components:{StandardCard:R},props:{items:{type:Array,default(){return[]}}}},V=U,W=(0,v.Z)(V,q,G,!1,null,"3d351c10",null),X=W.exports,Y={name:"Home-View",components:{StardardCardGallery:X},data(){return{allItemsData:[],itemsFiltered:[]}},created(){N().then((t=>{this.allItemsData=t.data})).catch((()=>{this.allItemsData=null}))},computed:{getFilteredItems(){if(null==this.allItemsData)return this.allItemsData;const t=this.allItemsData.map((t=>(t.body=t.body.replace("\n"," "),t)));return this.$globals.isDescriptionActive?t.filter((t=>t.body.includes(this.$globals.filter)||t.title.includes(this.$globals.filter))):t.filter((t=>t.title.includes(this.$globals.filter)))}}},tt=Y,et=(0,v.Z)(tt,j,z,!1,null,"52e2a877",null),it=et.exports;const at=[{path:"/",name:"Home",component:it,children:[{path:"/detail/:id",name:"Detail",component:it}]}],nt=new F.Z({mode:"history",routes:at});var rt=nt,st=i(6018),ot=JSON.parse('{"components":{"search-bar":{"title":"Title","description":"Description","placeholder":"Search by title or description..."},"cards":{"more-information":"More Information"},"home":{"faq":"Frequently Asked Questions"}}}'),ct=JSON.parse('{"components":{"search-bar":{"title":"Título","description":"Descripción","placeholder":"Buscar por título o descripción..."},"cards":{"more-information":"Más información"},"home":{"faq":"Preguntas Frecuentes"}}}');a.ZP.use(st.Z);const lt=new st.Z({locale:"en",fallbackLocale:"en",messages:{en:ot,es:ct}});var ut=lt;a.ZP.config.productionTip=!1,a.ZP.use(F.Z),new a.ZP({router:rt,i18n:ut,render:t=>t(L)}).$mount("#app")},6949:function(t,e,i){t.exports=i.p+"img/logo.8db5d722.png"}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,r){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],r=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(i.O).every((function(t){return i.O[t](a[c])}))?a.splice(c--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,n,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,s=a[0],o=a[1],c=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(c)var u=c(i)}for(e&&e(a);l<s.length;l++)r=s[l],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(u)},a=self["webpackChunkzacata"]=self["webpackChunkzacata"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(7197)}));a=i.O(a)})();
//# sourceMappingURL=app.7c561dd7.js.map