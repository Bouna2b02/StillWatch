import{_ as d,a as c}from"./ListingCarousel.77db81ad.js";import{r as o,d as h,e as n}from"./tmdbAPI.f1c79019.js";import{_ as g,c as w,b as y,n as i,q as l,o as r}from"./entry.b94904b0.js";import"./nuxt-link.4b690bdb.js";import"./Modal.80d2d93e.js";import"./cross.1fce9c4e.js";import"./chevron-left.d64a7219.js";const T={components:{Hero:d,ListingCarousel:c},async asyncData({error:t}){try{const u=await o("popular"),s=await o("top_rated"),p=await o("on_the_air"),m=await o("airing_today"),e=await h(u.results[0].id);return{popular:u,topRated:s,onAir:p,airingToday:m,featured:e}}catch{t({statusCode:504,message:"Data not available"})}},head(){return{title:"TV Shows",meta:[{hid:"og:title",property:"og:title",content:"TV Shows"},{hid:"og:url",property:"og:url",content:`${{}.FRONTEND_URL}${this.$route.path}`}]}},computed:{popularShown(){var t;return(t=this.popular)==null?void 0:t.results.length},popularTitle(){return n("tv","popular").title},popularUrl(){return{name:"tv-category-name",params:{name:"popular"}}},topRatedShown(){var t;return(t=this.topRated)==null?void 0:t.results.length},topRatedTitle(){return n("tv","top_rated").title},topRatedUrl(){return{name:"tv-category-name",params:{name:"top_rated"}}},onAirShown(){var t;return(t=this.onAir)==null?void 0:t.results.length},onAirTitle(){return n("tv","on_the_air").title},onAirUrl(){return{name:"tv-category-name",params:{name:"on_the_air"}}},airingTodayShown(){var t;return(t=this.airingToday)==null?void 0:t.results.length},airingTodayTitle(){return n("tv","airing_today").title},airingTodayUrl(){return{name:"tv-category-name",params:{name:"airing_today"}}}}},v={class:"main"};function S(t,u,s,p,m,e){const _=d,a=c;return r(),w("main",v,[y(_,{item:t.featured},null,8,["item"]),e.popularShown?(r(),i(a,{key:0,title:e.popularTitle,"view-all-url":e.popularUrl,items:t.popular},null,8,["title","view-all-url","items"])):l("",!0),e.topRatedShown?(r(),i(a,{key:1,title:e.topRatedTitle,"view-all-url":e.topRatedUrl,items:t.topRated},null,8,["title","view-all-url","items"])):l("",!0),e.onAirShown?(r(),i(a,{key:2,title:e.onAirTitle,"view-all-url":e.onAirUrl,items:t.onAir},null,8,["title","view-all-url","items"])):l("",!0),e.airingTodayShown?(r(),i(a,{key:3,title:e.airingTodayTitle,"view-all-url":e.airingTodayUrl,items:t.airingToday},null,8,["title","view-all-url","items"])):l("",!0)])}const N=g(T,[["render",S]]);export{N as default};
