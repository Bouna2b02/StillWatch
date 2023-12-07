import { _ as __nuxt_component_0 } from './TheTopNav-aeb8f3b0.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1 } from './ListingCarousel-9c380740.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_6, b as __nuxt_component_1$1 } from './Images-c3714aee.mjs';
import { n as name, y as yearStart, c as getMovie, f as getMovieRecommended, P as PlaceholderIcon, h as directors, N as NuxtPicture } from './tmdbAPI-af98a87a.mjs';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_5, a as __nuxt_component_4 } from './Videos-6f826d74.mjs';
import './chevron-left-0aa0ae99.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-691e5b50.mjs';
import './Modal-6841df79.mjs';
import './Functions-2f230c98.mjs';
import './cross-c4bc44d6.mjs';
import 'smoothscroll-polyfill';
import './twitter-1c70975f.mjs';
import 'ohmyfetch/node';
import 'vue-router';

const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const info = "_info_11ty2_14";
const left = "_left_11ty2_19";
const right = "_right_11ty2_37";
const poster = "_poster_11ty2_42";
const overview = "_overview_11ty2_51";
const title = "_title_11ty2_63";
const stats = "_stats_11ty2_75";
const label = "_label_11ty2_110";
const value = "_value_11ty2_122";
const external = "_external_11ty2_126";
const style0 = {
  breakpointXsmall,
  breakpointSmall,
  breakpointMedium,
  breakpointLarge,
  breakpointXlarge,
  breakpointXlarger1,
  breakpointXlarger2,
  breakpointXlarger3,
  layoutNavWidth,
  info,
  left,
  right,
  poster,
  overview,
  title,
  stats,
  label,
  value,
  external
};
const _sfc_main$1 = {
  components: {
    ExternalLinks: __nuxt_component_1$1,
    PlaceholderIcon
  },
  mixins: [
    name,
    directors
  ],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    poster() {
      return this.item.poster_path;
    }
  },
  created() {
    if (this.item.homepage) {
      this.item.external_ids.homepage = this.item.homepage;
    }
  },
  methods: {
    formatGenres(genres) {
      return genres.map((genre) => `<a href="/genre/${genre.id}/movie">${genre.name}</a>`).join(", ");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_picture = NuxtPicture;
  const _component_PlaceholderIcon = resolveComponent("PlaceholderIcon");
  const _component_ExternalLinks = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["spacing", _ctx.$style.info]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.left)}"><div class="${ssrRenderClass(_ctx.$style.poster)}">`);
  if ($options.poster) {
    _push(ssrRenderComponent(_component_nuxt_picture, {
      width: "370",
      height: "556",
      sizes: "large:20vw xlarge:20vw xlarge1:18vw xlarge3:780",
      alt: _ctx.name,
      src: $options.poster
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_PlaceholderIcon, null, null, _parent));
  }
  _push(`</div></div><div class="${ssrRenderClass(_ctx.$style.right)}">`);
  if ($props.item.overview) {
    _push(`<div class="${ssrRenderClass(_ctx.$style.overview)}"><h2 class="${ssrRenderClass(_ctx.$style.title)}"> Storyline </h2><div>${$props.item.overview}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.$style.stats)}"><ul class="nolist">`);
  if ($props.item.release_date) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Released </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.release_date | _ctx.fullDate)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.runtime) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Runtime </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.runtime | _ctx.runtime)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.directors) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Director </div><div class="${ssrRenderClass(_ctx.$style.value)}">${_ctx.directors}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.budget) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Budget </div><div class="${ssrRenderClass(_ctx.$style.value)}"> $${ssrInterpolate($props.item.budget | _ctx.numberWithCommas)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.revenue) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Revenue </div><div class="${ssrRenderClass(_ctx.$style.value)}"> $${ssrInterpolate($props.item.revenue | _ctx.numberWithCommas)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.genres && $props.item.genres.length) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Genre </div><div class="${ssrRenderClass(_ctx.$style.value)}">${$options.formatGenres($props.item.genres)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.status) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Status </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.status)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.original_language) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Language </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.original_language | _ctx.fullLang)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.production_companies && $props.item.production_companies.length) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Production </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.production_companies | _ctx.arrayToList)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div><div class="${ssrRenderClass(_ctx.$style.external)}">`);
  _push(ssrRenderComponent(_component_ExternalLinks, {
    links: $props.item.external_ids
  }, null, _parent));
  _push(`</div></div></div>`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/movie/MovieInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__cssModules", cssModules]]);
const _sfc_main = {
  components: {
    TheTopNav: __nuxt_component_0,
    Hero: __nuxt_component_0$1,
    MediaNav: __nuxt_component_2,
    MovieInfo: __nuxt_component_3,
    Videos: __nuxt_component_5,
    Images: __nuxt_component_6,
    Credits: __nuxt_component_4,
    ListingCarousel: __nuxt_component_1
  },
  mixins: [
    name,
    yearStart
  ],
  async asyncData({
    params,
    error
  }) {
    try {
      const item = await getMovie(params.id);
      if (item.adult) {
        error({ message: "This movie is not available" });
      } else {
        return { item };
      }
    } catch {
      error({ message: "Page not found" });
    }
  },
  data() {
    return {
      menu: [],
      activeMenu: "overview",
      recommendedItems: null
    };
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.metaTitle
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.metaDescription
        },
        {
          hid: "description",
          name: "description",
          content: this.metaDescription
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.metaImage
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.FRONTEND_URL}${this.$route.path}`
        }
      ],
      bodyAttrs: {
        class: "topnav-active"
      }
    };
  },
  computed: {
    metaTitle() {
      if (this.yearStart) {
        return `${this.name} (${this.yearStart})`;
      } else {
        return `${this.name}`;
      }
    },
    metaDescription() {
      if (this.item.overview) {
        return this.truncate(this.item.overview, 200);
      } else {
        return "";
      }
    },
    metaImage() {
      if (!this.item.poster_path) {
        return "";
      }
      return this.$img(this.item.poster_path, { width: 500 });
    },
    creditsShown() {
      var _a;
      const credits = this.item.credits;
      return (_a = credits == null ? void 0 : credits.cast) == null ? void 0 : _a.length;
    },
    videosShown() {
      var _a;
      const videos = this.item.videos;
      return (_a = videos == null ? void 0 : videos.results) == null ? void 0 : _a.length;
    },
    imagesShown() {
      var _a, _b;
      const images = this.item.images;
      return ((_a = images == null ? void 0 : images.backdrops) == null ? void 0 : _a.length) || ((_b = images == null ? void 0 : images.posters) == null ? void 0 : _b.length);
    },
    recommendedItemsShown() {
      var _a;
      return (_a = this.recommendedItems) == null ? void 0 : _a.results.length;
    }
  },
  created() {
    this.createMenu();
    this.initRecommended();
  },
  methods: {
    truncate(string, length) {
      return this.$options.filters.truncate(string, length);
    },
    createMenu() {
      const menu = [];
      menu.push("Overview");
      if (this.videosShown) {
        menu.push("Videos");
      }
      if (this.imagesShown) {
        menu.push("Photos");
      }
      this.menu = menu;
    },
    navClicked(label2) {
      this.activeMenu = label2;
    },
    initRecommended() {
      if (this.recommendedItems !== null) {
        return;
      }
      getMovieRecommended(this.$route.params.id).then((response) => {
        this.recommendedItems = response;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheTopNav = __nuxt_component_0;
  const _component_Hero = __nuxt_component_0$1;
  const _component_MediaNav = __nuxt_component_2;
  const _component_MovieInfo = __nuxt_component_3;
  const _component_Credits = __nuxt_component_4;
  const _component_Videos = __nuxt_component_5;
  const _component_Images = __nuxt_component_6;
  const _component_ListingCarousel = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheTopNav, { title: $options.metaTitle }, null, _parent));
  _push(ssrRenderComponent(_component_Hero, { item: _ctx.item }, null, _parent));
  _push(ssrRenderComponent(_component_MediaNav, {
    menu: $data.menu,
    onClicked: $options.navClicked
  }, null, _parent));
  if ($data.activeMenu === "overview") {
    _push(`<!--[-->`);
    _push(ssrRenderComponent(_component_MovieInfo, { item: _ctx.item }, null, _parent));
    if ($options.creditsShown) {
      _push(ssrRenderComponent(_component_Credits, {
        people: _ctx.item.credits.cast
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeMenu === "videos" && $options.videosShown) {
    _push(ssrRenderComponent(_component_Videos, {
      videos: _ctx.item.videos.results
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.activeMenu === "photos" && $options.imagesShown) {
    _push(`<!--[-->`);
    if (_ctx.item.images.backdrops.length) {
      _push(ssrRenderComponent(_component_Images, {
        title: "Backdrops",
        type: "backdrop",
        images: _ctx.item.images.backdrops
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (_ctx.item.images.posters.length) {
      _push(ssrRenderComponent(_component_Images, {
        title: "Posters",
        type: "poster",
        images: _ctx.item.images.posters
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($options.recommendedItemsShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: "More Like This",
      items: $data.recommendedItems
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movie/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-0ff68def.mjs.map
