(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(t,e,r){"use strict";r.r(e);var o={name:"AppHeader"},n=(r(260),r(39)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("h1",{staticClass:"title"},[t._v("Dad Jokes")]),t._v(" "),r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/jokes"}},[t._v("Jokes")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1)])])}),[],!1,null,null,null);e.default=component.exports},186:function(t,e,r){var content=r(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("7388ab72",content,!0,{sourceMap:!1})},188:function(t,e,r){var content=r(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("9f342564",content,!0,{sourceMap:!1})},189:function(t,e,r){var content=r(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("56b15182",content,!0,{sourceMap:!1})},216:function(t,e,r){"use strict";var o={components:{AppHeader:r(141).default}},n=(r(262),r(39)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("AppHeader"),t._v(" "),r("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppHeader:r(141).default})},219:function(t,e,r){r(220),t.exports=r(221)},252:function(t,e,r){"use strict";r(186)},253:function(t,e,r){var o=r(64)(!1);o.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=o},260:function(t,e,r){"use strict";r(188)},261:function(t,e,r){var o=r(64)(!1);o.push([t.i,".header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px dotted grey}.header .title{font-size:3rem;color:#526488}.header ul{display:flex}.header a{display:inline-block;background:#333;color:#fff;padding:.3rem 1rem;margin-right:.5rem}",""]),t.exports=o},262:function(t,e,r){"use strict";r(189)},263:function(t,e,r){var o=r(64)(!1);o.push([t.i,"*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,Helvtica,sans-serif;font-size:1rem;line-height:1.6;background:#f4f4f4}a{color:#666;text-decoration:none}ul{list-style:none}.container{max-width:800px;margin:2rem auto;overflow:hidden}",""]),t.exports=o},59:function(t,e,r){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(252),r(39)),l=r(212),c=r.n(l),d=r(292),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[219,5,1,6]]]);