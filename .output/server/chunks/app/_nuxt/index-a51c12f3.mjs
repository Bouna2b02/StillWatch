import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './ListingCarousel-9c380740.mjs';
import { b as getTrending, c as getMovie, d as getTvShow, e as getListItem } from './tmdbAPI-af98a87a.mjs';
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
      const trendingMovies = await getTrending("movie");
      const trendingTv = await getTrending("tv");
      let featured;
      const items = [
        ...trendingMovies.results,
        ...trendingTv.results
      ];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      const media = randomItem.title ? "movie" : "tv";
      if (media === "movie") {
        featured = await getMovie(randomItem.id);
      } else {
        featured = await getTvShow(randomItem.id);
      }
      return {
        trendingMovies,
        trendingTv,
        featured
      };
    } catch {
      error({
        statusCode: 504,
        message: "Data not available"
      });
    }
  },
  computed: {
    trendingMoviesShown() {
      var _a;
      return (_a = this.trendingMovies) == null ? void 0 : _a.results.length;
    },
    trendingMoviesTitle() {
      return getListItem("movie", "trending").title;
    },
    trendingMoviesUrl() {
      return {
        name: "movie-category-name",
        params: {
          name: "trending"
        }
      };
    },
    trendingTvShown() {
      var _a;
      return (_a = this.trendingTv) == null ? void 0 : _a.results.length;
    },
    trendingTvTitle() {
      return getListItem("tv", "trending").title;
    },
    trendingTvUrl() {
      return {
        name: "tv-category-name",
        params: {
          name: "trending"
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
  if ($options.trendingMoviesShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: $options.trendingMoviesTitle,
      "view-all-url": $options.trendingMoviesUrl,
      items: _ctx.trendingMovies
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.trendingTvShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: $options.trendingTvTitle,
      "view-all-url": $options.trendingTvUrl,
      items: _ctx.trendingTv
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-a51c12f3.mjs.map
