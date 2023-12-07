import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './ListingCarousel-9c380740.mjs';
import { i as getMovies, c as getMovie, e as getListItem } from './tmdbAPI-af98a87a.mjs';
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
      const popular = await getMovies("popular");
      const topRated = await getMovies("top_rated");
      const upcoming = await getMovies("upcoming");
      const nowPlaying = await getMovies("now_playing");
      const featured = await getMovie(upcoming.results[0].id);
      return {
        popular,
        topRated,
        upcoming,
        nowPlaying,
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
      title: "Movies",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Movies"
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
      return getListItem("movie", "popular").title;
    },
    popularUrl() {
      return {
        name: "movie-category-name",
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
      return getListItem("movie", "top_rated").title;
    },
    topRatedUrl() {
      return {
        name: "movie-category-name",
        params: {
          name: "top_rated"
        }
      };
    },
    upcomingShown() {
      var _a;
      return (_a = this.upcoming) == null ? void 0 : _a.results.length;
    },
    upcomingTitle() {
      return getListItem("movie", "upcoming").title;
    },
    upcomingUrl() {
      return {
        name: "movie-category-name",
        params: {
          name: "upcoming"
        }
      };
    },
    nowPlayingShown() {
      var _a;
      return (_a = this.nowPlaying) == null ? void 0 : _a.results.length;
    },
    nowPlayingTitle() {
      return getListItem("movie", "now_playing").title;
    },
    nowPlayingUrl() {
      return {
        name: "movie-category-name",
        params: {
          name: "now_playing"
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
  if ($options.upcomingShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: $options.upcomingTitle,
      "view-all-url": $options.upcomingUrl,
      items: _ctx.upcoming
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.nowPlayingShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: $options.nowPlayingTitle,
      "view-all-url": $options.nowPlayingUrl,
      items: _ctx.nowPlaying
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movie/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-d943e4be.mjs.map
