import{_ as C}from"./TheTopNav.ab2d8892.js";import{P as L,N as H,j as N,k as z}from"./tmdbAPI.f1c79019.js";import{_ as X,a as A,b as M}from"./Images.b79fa7b0.js";import{_ as f,s as v,o as a,c as d,a as o,u as l,n as h,t as u,q as p,d as b,b as y,w as F,F as g,v as k,x as $,y as w}from"./entry.b94904b0.js";import{_ as T}from"./Listing.0f76bac1.js";import{_ as V}from"./nuxt-link.4b690bdb.js";import"./chevron-left.d64a7219.js";import"./twitter.ae5f1f4d.js";import"./Modal.80d2d93e.js";import"./cross.1fce9c4e.js";import"./loading-spinner.4dbc908b.js";const E="640px",G="768px",P="1024px",W="1200px",R="1400px",j="1500px",q="1800px",B="2500px",O="10rem",K="_info_12epz_14",U="_left_12epz_19",Z="_right_12epz_37",Y="_poster_12epz_42",J="_overview_12epz_51",Q="_title_12epz_75",ee="_stats_12epz_87",te="_label_12epz_122",se="_value_12epz_134",re="_external_12epz_138",ie={breakpointXsmall:E,breakpointSmall:G,breakpointMedium:P,breakpointLarge:W,breakpointXlarge:R,breakpointXlarger1:j,breakpointXlarger2:q,breakpointXlarger3:B,layoutNavWidth:O,info:K,left:U,right:Z,poster:Y,overview:J,title:Q,stats:ee,label:te,value:se,external:re},ne={components:{ExternalLinks:X,PlaceholderIcon:L},props:{person:{type:Object,required:!0}},computed:{avatar(){return this.person.profile_path},age(){const e=this.person.birthday,t=this.person.deathday;return e&&!t?this.getAge(e):e&&t?this.getAge(e,t):!1}},created(){this.person.homepage&&(this.person.external_ids.homepage=this.person.homepage),this.AVATAR_SIZES="large:20vw xlarge:20vw xlarge1:18vw xlarge3:780",this.AVATAR_WIDTH=370,this.AVATAR_HEIGHT=556},methods:{formatContent(e){return e.split(`
`).filter(t=>t!=="").map(t=>`<p>${t}</p>`).join("")},getAge(e,t){const s=new Date(e);let r,i;t?r=new Date(t):r=new Date;const n=r.getMonth()-s.getMonth();return i=r.getFullYear()-s.getFullYear(),(n<0||n===0&&r.getDate()<s.getDate())&&i--,i}}},oe={key:0},ae=["innerHTML"],le={class:"nolist"},ce={key:0},de={key:1},pe={key:0},ue={key:2},_e={key:3},he={key:0};function me(e,t,s,r,i,n){const _=H,c=v("PlaceholderIcon"),m=X;return a(),d("div",{class:l(["spacing",e.$style.info])},[o("div",{class:l(e.$style.left)},[o("div",{class:l(e.$style.poster)},[n.avatar?(a(),h(_,{key:0,width:e.AVATAR_WIDTH,height:e.AVATAR_HEIGHT,sizes:e.AVATAR_SIZES,alt:s.person.name,src:n.avatar},null,8,["width","height","sizes","alt","src"])):(a(),h(c,{key:1}))],2)],2),o("div",{class:l(e.$style.right)},[o("div",{class:l(e.$style.overview)},[o("h2",{class:l(e.$style.title)},u(s.person.name),3),s.person.biography?(a(),d("div",oe,[n.avatar?(a(),h(_,{key:0,width:e.AVATAR_WIDTH,height:e.AVATAR_HEIGHT,sizes:e.AVATAR_SIZES,alt:s.person.name,src:n.avatar},null,8,["width","height","sizes","alt","src"])):p("",!0),o("div",{innerHTML:n.formatContent(s.person.biography)},null,8,ae)])):p("",!0)],2),o("div",{class:l(e.$style.stats)},[o("ul",le,[s.person.known_for_department?(a(),d("li",ce,[o("div",{class:l(e.$style.label)}," Known For ",2),o("div",{class:l(e.$style.value)},u(s.person.known_for_department),3)])):p("",!0),s.person.birthday?(a(),d("li",de,[o("div",{class:l(e.$style.label)}," Born ",2),o("div",{class:l(e.$style.value)},[b(u(s.person.birthday|e.fullDate)+" ",1),s.person.deathday?p("",!0):(a(),d("span",pe,"(age "+u(n.age)+")",1))],2)])):p("",!0),s.person.place_of_birth?(a(),d("li",ue,[o("div",{class:l(e.$style.label)}," Place of Birth ",2),o("div",{class:l(e.$style.value)},u(s.person.place_of_birth),3)])):p("",!0),s.person.deathday?(a(),d("li",_e,[o("div",{class:l(e.$style.label)}," Died ",2),o("div",{class:l(e.$style.value)},[b(u(s.person.deathday|e.fullDate)+" ",1),s.person.birthday?(a(),d("span",he,"(aged "+u(n.age)+")",1)):p("",!0)],2)])):p("",!0)])],2),o("div",{class:l(e.$style.external)},[y(m,{media:"person",links:s.person.external_ids},null,8,["links"])],2)],2)],2)}const ge={$style:ie},x=f(ne,[["render",me],["__cssModules",ge]]),ye="640px",fe="768px",ke="1024px",ve="1200px",be="1400px",$e="1500px",we="1800px",Ce="2500px",Xe="10rem",Ae="_item_1kly9_13",Me="_year_1kly9_26",Te="_episodes_1kly9_30",xe="_role_1kly9_34",De={breakpointXsmall:ye,breakpointSmall:fe,breakpointMedium:ke,breakpointLarge:ve,breakpointXlarge:be,breakpointXlarger1:$e,breakpointXlarger2:we,breakpointXlarger3:Ce,layoutNavWidth:Xe,item:Ae,year:Me,episodes:Te,role:xe},Ie={props:{year:{type:String,required:!0},credit:{type:Object,required:!0}},computed:{media(){return this.credit.media_type?this.credit.media_type:this.credit.name?"tv":"movie"},name(){return this.credit.title||this.credit.name},role(){const e=this.credit.character,t=this.credit.job;return e?`as ${e}`:t?`as ${t}`:!1},episodes(){const e=this.credit.episode_count;return e?e>1?`(${e} episodes)`:`(${e} episode)`:!1}}};function Se(e,t,s,r,i,n){const _=V;return a(),d("tr",{class:l(e.$style.item)},[o("td",{class:l(e.$style.year)},u(s.year||"—"),3),o("td",null,[y(_,{to:{name:`${n.media}-id`,params:{id:s.credit.id}}},{default:F(()=>[o("strong",null,u(n.name),1),n.episodes?(a(),d("span",{key:0,class:l(e.$style.episodes)},u(n.episodes),3)):p("",!0),n.role?(a(),d("span",{key:1,class:l(e.$style.role)},u(n.role),3)):p("",!0)]),_:1},8,["to"])])],2)}const Le={$style:De},He=f(Ie,[["render",Se],["__cssModules",Le]]),Ne="640px",ze="768px",Fe="1024px",Ve="1200px",Ee="1400px",Ge="1500px",Pe="1800px",We="2500px",Re="10rem",je="_group_tiipm_13",qe="_row_tiipm_17",Be={breakpointXsmall:Ne,breakpointSmall:ze,breakpointMedium:Fe,breakpointLarge:Ve,breakpointXlarge:Ee,breakpointXlarger1:Ge,breakpointXlarger2:Pe,breakpointXlarger3:We,layoutNavWidth:Re,group:je,row:qe},Oe={components:{CreditsHistoryGroupItem:He},props:{group:{type:Object,required:!0}}};function Ke(e,t,s,r,i,n){const _=v("CreditsHistoryGroupItem");return a(),d("tr",{class:l(e.$style.group)},[o("td",{class:l(e.$style.row)},[o("table",null,[o("tbody",null,[(a(!0),d(g,null,k(s.group.credits,c=>(a(),h(_,{key:`credit-${c.credit_id}`,year:s.group.year,credit:c},null,8,["year","credit"]))),128))])])],2)],2)}const Ue={$style:Be},Ze=f(Oe,[["render",Ke],["__cssModules",Ue]]),Ye="640px",Je="768px",Qe="1024px",et="1200px",tt="1400px",st="1500px",rt="1800px",it="2500px",nt="10rem",ot="_head_1kz1l_13",at="_filter_1kz1l_19",lt="_category_1kz1l_33",ct="_title_1kz1l_37",dt={breakpointXsmall:Ye,breakpointSmall:Je,breakpointMedium:Qe,breakpointLarge:et,breakpointXlarge:tt,breakpointXlarger1:st,breakpointXlarger2:rt,breakpointXlarger3:it,layoutNavWidth:nt,head:ot,filter:at,category:lt,title:ct},pt={components:{CreditsHistoryGroup:Ze},props:{credits:{type:Object,required:!0}},data(){return{active_media:"combined_credits",active_category:"all",categories:[],active_credits:null,combined_credits:[],movie_credits:[],tv_credits:[]}},created(){const e=this.handleCast(this.credits.cast),t=this.handleCrew(this.credits.crew);e&&this.$data[this.active_media].push({name:"Acting",groups:e}),t&&(this.$data[this.active_media]=[...this.$data[this.active_media],...t]),this.active_credits=this.$data[this.active_media],this.categories=this.getCategories()},methods:{handleCast(e){if(!(e!=null&&e.length))return;let t=this.groupItems(e);const s=t.find(r=>r.year==="");return s&&(t=t.filter(r=>r.year!=="")),this.sortGroups(t),s&&t.unshift(s),t.forEach(r=>this.sortCredits(r.credits)),t},handleCrew(e){if(!(e!=null&&e.length))return;const t=this.createCategories(e);return t.forEach(s=>{let r=this.groupItems(s.groups);const i=r.find(n=>n.year==="");i&&(r=r.filter(n=>n.year!=="")),this.sortGroups(r),i&&r.unshift(i),r.forEach(n=>this.sortCredits(n.credits)),s.groups=r}),t},getCategories(){return this.active_credits.map(e=>e.name)},getCredits(){var t;const e=this.active_media;(t=this.$data[e])!=null&&t.length?(this.active_credits=this.$data[e],this.active_category="all",this.categories=this.getCategories()):N(this.$route.params.id,e).then(s=>{const r=this.handleCast(s.cast),i=this.handleCrew(s.crew);r&&this.$data[e].push({name:"Acting",groups:r}),i&&(this.$data[e]=[...this.$data[e],...i]),this.active_credits=this.$data[e],this.active_category="all",this.categories=this.getCategories()})},filterCredits(){this.active_category==="all"?this.active_credits=this.$data[this.active_media]:this.active_credits=this.$data[this.active_media].filter(e=>e.name.toLowerCase()===this.active_category)},createCategories(e){const t=[];return e.forEach(s=>{const r=t.find(i=>i.name===s.department);r?r.groups.push(s):t.push({name:s.department,groups:[s]})}),t},groupItems(e){return e.reduce(function(t,s){const r=s.release_date||s.first_air_date,i=(r==null?void 0:r.split("-")[0])??"",n=t.find(_=>_.year===i);return n?n.credits.push(s):t.push({year:i,credits:[s]}),t},[])},sortGroups(e){return e.sort((t,s)=>t.year>s.year?-1:1)},sortCredits(e){return e.sort((t,s)=>{const r=t.release_date?t.release_date:t.first_air_date,i=s.release_date?s.release_date:s.first_air_date;return r>i?-1:r<i?1:0})}}},ut={class:"spacing"},_t=o("label",{for:"credits_category"}," Department ",-1),ht=["disabled"],mt=o("option",{value:"all"}," All ",-1),gt=["value"],yt=o("label",{for:"credits_media"}," Media ",-1),ft=o("option",{value:"combined_credits"}," All ",-1),kt=o("option",{value:"movie_credits"}," Movies ",-1),vt=o("option",{value:"tv_credits"}," TV Shows ",-1),bt=[ft,kt,vt];function $t(e,t,s,r,i,n){const _=v("CreditsHistoryGroup");return a(),d("div",ut,[o("div",{class:l(e.$style.head)},[o("div",{class:l(e.$style.filter)},[_t,$(o("select",{id:"credits_category","onUpdate:modelValue":t[0]||(t[0]=c=>i.active_category=c),disabled:!i.categories.length||i.categories.length===1,onChange:t[1]||(t[1]=(...c)=>n.filterCredits&&n.filterCredits(...c))},[mt,(a(!0),d(g,null,k(i.categories,c=>(a(),d("option",{key:`credit-filter-${c.toLowerCase()}`,value:c.toLowerCase()},u(c),9,gt))),128))],40,ht),[[w,i.active_category]])],2),o("div",{class:l(e.$style.filter)},[yt,$(o("select",{id:"credits_media","onUpdate:modelValue":t[2]||(t[2]=c=>i.active_media=c),onChange:t[3]||(t[3]=(...c)=>n.getCredits&&n.getCredits(...c))},bt,544),[[w,i.active_media]])],2)],2),(a(!0),d(g,null,k(i.active_credits,c=>(a(),d("div",{key:`credits-${c.name.toLowerCase()}`,class:l(e.$style.category)},[o("h2",{class:l(e.$style.title)},u(c.name),3),o("table",null,[o("tbody",null,[(a(!0),d(g,null,k(c.groups,m=>(a(),h(_,{key:`credit-${c.name.toLowerCase()}-${m.year}`,group:m},null,8,["group"]))),128))])])],2))),128))])}const wt={$style:dt},Ct=f(pt,[["render",$t],["__cssModules",wt]]),Xt={components:{TheTopNav:C,PersonInfo:x,MediaNav:A,CreditsHistory:Ct,Images:M,Listing:T},async asyncData({params:e,error:t}){try{const s=await z(e.id);if(s.adult)t({message:"This person is not available"});else return{person:s}}catch{t({message:"Page not found"})}},data(){return{menu:[],activeMenu:"known-for",knownFor:null}},head(){return{title:this.metaTitle,meta:[{hid:"og:title",property:"og:title",content:this.metaTitle},{hid:"og:description",property:"og:description",content:this.metaDescription},{hid:"description",name:"description",content:this.metaDescription},{hid:"og:image",property:"og:image",content:this.metaImage},{hid:"og:url",property:"og:url",content:`${{}.FRONTEND_URL}${this.$route.path}`}],bodyAttrs:{class:"topnav-active"}}},computed:{metaTitle(){return this.person.name},metaDescription(){return this.person.biography?this.truncate(this.person.biography,200):""},metaImage(){return this.person.profile_path?this.$img(this.person.profile_path,{width:500}):""},imagesShown(){var t;const e=this.person.images;return(t=e==null?void 0:e.profiles)==null?void 0:t.length},knownForShown(){var e;return(e=this.knownFor)==null?void 0:e.results.length}},created(){this.createMenu(),this.initKnownFor()},methods:{truncate(e,t){return this.$options.filters.truncate(e,t)},createMenu(){const e=[];e.push("Known For"),e.push("Credits"),this.imagesShown&&e.push("Photos"),this.menu=e},navClicked(e){this.activeMenu=e},initKnownFor(){if(this.knownFor!==null)return;const e=this.person.known_for_department;let t;e==="Acting"?t=this.person.combined_credits.cast:e==="Directing"?t=this.person.combined_credits.crew.filter(s=>s.department==="Directing"):e==="Production"?t=this.person.combined_credits.crew.filter(s=>s.department==="Production"):(e==="Writing"||e==="Creator")&&(t=this.person.combined_credits.crew.filter(s=>s.department==="Writing")),t&&(t=this.removeDuplicates(t),t=t.filter(s=>!s.adult),t.sort((s,r)=>s.vote_count>r.vote_count?-1:1),this.knownFor={page:1,total_pages:1,total_results:t.length,results:t})},removeDuplicates(e){return e.filter((t,s,r)=>{const i=t.title?"title":"name";return r.map(n=>n[i]).indexOf(t[i])===s})}}},At={class:"main"};function Mt(e,t,s,r,i,n){const _=C,c=x,m=A,D=T,I=v("CreditsHistory"),S=M;return a(),d("main",At,[y(_,{title:n.metaTitle},null,8,["title"]),y(c,{person:e.person},null,8,["person"]),y(m,{menu:i.menu,onClicked:n.navClicked},null,8,["menu","onClicked"]),i.activeMenu==="known-for"?(a(),d(g,{key:0},[n.knownForShown?(a(),h(D,{key:0,items:i.knownFor},null,8,["items"])):p("",!0)],64)):p("",!0),i.activeMenu==="credits"?(a(),h(I,{key:1,credits:e.person.combined_credits},null,8,["credits"])):p("",!0),i.activeMenu==="photos"&&n.imagesShown?(a(),d(g,{key:2},[e.person.images.profiles.length?(a(),h(S,{key:0,title:"Photos",type:"poster",images:e.person.images.profiles},null,8,["images"])):p("",!0)],64)):p("",!0)])}const Et=f(Xt,[["render",Mt]]);export{Et as default};
