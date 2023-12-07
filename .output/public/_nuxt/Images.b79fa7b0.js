import{_ as g,o as a,c as n,F as v,v as f,u as l,t as h,s as p,a as o,b as _,q as d,A as I,n as y}from"./entry.b94904b0.js";import{T as X}from"./twitter.ae5f1f4d.js";import{N as M}from"./tmdbAPI.f1c79019.js";import{_ as $}from"./Modal.80d2d93e.js";const L="640px",S="768px",N="1024px",A="1200px",C="1400px",q="1500px",W="1800px",V="2500px",z="10rem",F="_nav_nv8i4_13",T="_button_nv8i4_26",B="_buttonActive_nv8i4_56",D={breakpointXsmall:L,breakpointSmall:S,breakpointMedium:N,breakpointLarge:A,breakpointXlarge:C,breakpointXlarger1:q,breakpointXlarger2:W,breakpointXlarger3:V,layoutNavWidth:z,nav:F,button:T,buttonActive:B},O={props:{menu:{type:Array,required:!0}},data(){return{active:0}},methods:{clicked(e,c){this.active=e,this.$emit("clicked",c.replace(/\s+/g,"-").toLowerCase())}}},R=["onClick"];function U(e,c,t,k,m,r){return a(),n("div",{class:l(e.$style.nav)},[(a(!0),n(v,null,f(t.menu,(s,i)=>(a(),n("button",{key:`tab-${i}`,class:l([e.$style.button,{[e.$style.buttonActive]:m.active===i}]),type:"button",onClick:u=>r.clicked(i,s)},h(s),11,R))),128))],2)}const H={$style:D},Pe=g(O,[["render",U],["__cssModules",H]]),j=""+new URL("facebook.c7b1d44a.svg?inline",import.meta.url).href,G=""+new URL("instagram.34acc0b1.svg?inline",import.meta.url).href,E=""+new URL("imdb.157f1004.svg?inline",import.meta.url).href,P=""+new URL("link.342a4c25.svg?inline",import.meta.url).href,J={components:{TwitterIcon:X,FacebookIcon:j,InstagramIcon:G,ImdbIcon:E,LinkIcon:P},props:{media:{type:String,required:!1,default:""},links:{type:Object,required:!0}},computed:{imdb(){return this.media==="person"?"name":"title"}}},K={class:"nolist"},Q={key:0},Y=["href"],Z={key:1},ee=["href"],te={key:2},ae=["href"],ne={key:3},oe=["href"],re={key:4},se=["href"];function ie(e,c,t,k,m,r){const s=p("TwitterIcon"),i=p("FacebookIcon"),u=p("InstagramIcon"),b=p("ImdbIcon"),w=p("LinkIcon");return a(),n("ul",K,[t.links.twitter_id?(a(),n("li",Q,[o("a",{href:`https://twitter.com/${t.links.twitter_id}`,target:"_blank","aria-label":"Link to Twitter account",rel:"noopener"},[_(s)],8,Y)])):d("",!0),t.links.facebook_id?(a(),n("li",Z,[o("a",{href:`https://www.facebook.com/${t.links.facebook_id}`,target:"_blank","aria-label":"Link to Facebook account",rel:"noopener"},[_(i)],8,ee)])):d("",!0),t.links.instagram_id?(a(),n("li",te,[o("a",{href:`https://instagram.com/${t.links.instagram_id}`,target:"_blank","aria-label":"Link to Instagram account",rel:"noopener"},[_(u)],8,ae)])):d("",!0),t.links.imdb_id?(a(),n("li",ne,[o("a",{href:`https://www.imdb.com/${r.imdb}/${t.links.imdb_id}`,target:"_blank","aria-label":"Link to IMDb account",rel:"noopener"},[_(b)],8,oe)])):d("",!0),t.links.homepage?(a(),n("li",re,[o("a",{href:t.links.homepage,target:"_blank","aria-label":"Link to Homepage",rel:"noopener"},[_(w)],8,se)])):d("",!0)])}const Je=g(J,[["render",ie]]),le="640px",ce="768px",me="1024px",_e="1200px",de="1400px",pe="1500px",ue="1800px",be="2500px",ge="10rem",ke="_item_s6gkv_13",he="_image_s6gkv_17",ye="_backdrop_s6gkv_21",ve="_poster_s6gkv_50",fe={breakpointXsmall:le,breakpointSmall:ce,breakpointMedium:me,breakpointLarge:_e,breakpointXlarge:de,breakpointXlarger1:pe,breakpointXlarger2:ue,breakpointXlarger3:be,layoutNavWidth:ge,item:ke,image:he,backdrop:ye,poster:ve},$e={props:{image:{type:Object,required:!0},index:{type:Number,required:!0},type:{type:String,required:!0}},methods:{handleGallery(e){this.$emit("openModal",e)}}},xe=["href"];function we(e,c,t,k,m,r){const s=M;return a(),n("div",{class:l([e.$style.item,e.$style[t.type]])},[o("a",{href:t.image.thumbSrc,onClick:c[0]||(c[0]=I(i=>r.handleGallery(t.index),["prevent"]))},[o("div",{class:l(e.$style.image)},[_(s,{loading:"lazy",width:t.image.thumbWidth,height:t.image.thumbHeight,sizes:t.image.sizes,src:t.image.thumbSrc},null,8,["width","height","sizes","src"])],2)],8,xe)],2)}const Ie={$style:fe},x=g($e,[["render",we],["__cssModules",Ie]]),Xe="640px",Me="768px",Le="1024px",Se="1200px",Ne="1400px",Ae="1500px",Ce="1800px",qe="2500px",We="10rem",Ve="_head_1bpc0_13",ze="_title_1bpc0_24",Fe="_count_1bpc0_34",Te="_items_1bpc0_46",Be={breakpointXsmall:Xe,breakpointSmall:Me,breakpointMedium:Le,breakpointLarge:Se,breakpointXlarge:Ne,breakpointXlarger1:Ae,breakpointXlarger2:Ce,breakpointXlarger3:qe,layoutNavWidth:We,head:Ve,title:ze,count:Fe,items:Te},De={components:{ImagesItem:x,Modal:$},props:{title:{type:String,required:!0},type:{type:String,required:!0},images:{type:Array,required:!0}},data(){return{modalVisible:!1,modalStartAt:0}},computed:{imagesCount(){return`${this.images.length} ${this.images.length>1?"Images":"Image"}`}},created(){this.handleData()},methods:{handleData(){for(const e of this.images)e.thumbSrc=e.file_path,e.thumbWidth=this.type==="poster"?370:533,e.thumbHeight=this.type==="poster"?556:300,e.sizes=this.type==="poster"?"xsmall:30vw small:21vw medium:22vw large:18vw xlarge:16vw xlarge1:17vw xlarge3:342":"xsmall:46vw small:28vw medium:30vw large:22vw xlarge:21vw xlarge1:21vw xlarge3:780",e.src=e.file_path},openModal(e){this.modalStartAt=e,this.modalVisible=!0},closeModal(){this.modalVisible=!1,this.modalStartAt=0}}},Oe={class:"spacing"};function Re(e,c,t,k,m,r){const s=x,i=$;return a(),n("div",Oe,[o("div",{class:l(e.$style.head)},[o("h2",{class:l(e.$style.title)},h(t.title),3),o("strong",{class:l(e.$style.count)},h(r.imagesCount),3)],2),o("div",{class:l(e.$style.items)},[(a(!0),n(v,null,f(t.images,(u,b)=>(a(),y(s,{key:`image-${b}`,image:u,index:b,type:t.type,onOpenModal:r.openModal},null,8,["image","index","type","onOpenModal"]))),128))],2),m.modalVisible?(a(),y(i,{key:0,data:t.images,modifier:"modal--images","aria-label":"Images",nav:"","start-at":m.modalStartAt,onClose:r.closeModal},null,8,["data","start-at","onClose"])):d("",!0)])}const Ue={$style:Be},Ke=g(De,[["render",Re],["__cssModules",Ue]]);export{Je as _,Pe as a,Ke as b};
