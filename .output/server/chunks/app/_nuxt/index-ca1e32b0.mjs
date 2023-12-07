import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './ListingCarousel-9c380740.mjs';
import { r as getTvShows, d as getTvShow, e as getListItem } from './tmdbAPI-af98a87a.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import './chevron-left-0aa0ae99.mjs';
import 'smoothscroll-polyfill';
import 'ohmyfetch/node';
import 'vue-router';

const _sfc_main = {
  components: {
    Hero: __nuxt_component_0,
    ListingCarousel: __nuxt_component_1
  },
  async asyncData({ error }) {
    try {
      const popular = await getTvShows("popular");
      const topRated = await getTvShows("top_rated");
      const onAir = await getTvShows("on_the_air");
      const airingToday = await getTvShows("airing_today");
      const featured = await getTvShow(popular.results[0].id);
      return {
        popular,
        topRated,
        onAir,
        airingToday,
        featured
      };
    } catch {
      error({
        statusCode: 504,
        message: "Data not available"
      });
    }
  },
  head() {
    return {
      title: "TV Shows",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "TV Shows"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.FRONTEND_URL}${this.$route.path}`
        }
      ]
    };
  },
  computed: {
    popularShown() {
      var _a;
      return (_a = this.popular) == null ? void 0 : _a.results.length;
    },
    popularTitle() {
      return getListItem("tv", "popular").title;
    },
    popularUrl() {
      return {
        name: "tv-category-name",
        params: {
          name: "popular"
        }
      };
    },
    topRatedShown() {
      var _a;
      return (_a = this.topRated) == null ? void 0 : _a.results.length;
    },
    topRatedTitle() {
      return getListItem("tv", "top_rated").title;
    },
    topRatedUrl() {
      return {
        name: "tv-category-name",
        params: {
          name: "top_rated"
        }
      };
    },
    onAirShown() {
      var _a;
      return (_a = this.onAir) == null ? void 0 : _a.results.length;
    },
    onAirTitle() {
      return getListItem("tv", "on_the_air").title;
    },
    onAirUrl() {
      return {
        name: "tv-category-name",
        params: {
          name: "on_the_air"
        }
      };
    },
    airingTodayShown() {
      var _a;
      return (_a = this.airingToday) == null ? void 0 : _a.results.length;
    },
    airingTodayTitle() {
      return getListItem("tv", "airing_today").title;
    },
    airingTodayUrl() {
      return {
        name: "tv-category-name",
        params: {
          name: "airing_today"
        }
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Hero = __nuxt_component_0;
  const _component_ListingCarousel = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Hero, { item: _ctx.featured }, null, _parent));
  if ($options.popularShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: $options.popularTitle,
      "view-all-url": $options.popularUrl,
      items: _ctx.popular
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.topRatedShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: $options.topRatedTitle,
      "view-all-url": $options.topRatedUrl,
      items: _ctx.topRated
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.onAirShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: $options.onAirTitle,
      "view-all-url": $options.onAirUrl,
      items: _ctx.onAir
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.airingTodayShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: $options.airingTodayTitle,
      "view-all-url": $options.airingTodayUrl,
      items: _ctx.airingToday
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tv/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-ca1e32b0.mjs.map
