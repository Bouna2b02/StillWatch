import { _ as __nuxt_component_0 } from './TheTopNav-aeb8f3b0.mjs';
import { _ as __nuxt_component_1 } from './Listing-c98e4827.mjs';
import { g as getMediaByGenre, a as getGenreList } from './tmdbAPI-af98a87a.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import './Functions-2f230c98.mjs';
import './loading-spinner-5deacaa0.mjs';
import 'ohmyfetch/node';
import 'vue-router';

const _sfc_main = {
  components: {
    TheTopNav: __nuxt_component_0,
    Listing: __nuxt_component_1
  },
  async asyncData({
    params,
    error
  }) {
    try {
      const items = await getMediaByGenre("tv", params.id);
      const genres = await getGenreList("tv");
      const genre = genres.find((genre2) => genre2.id === parseInt(params.id));
      if (genre) {
        return {
          items,
          genre
        };
      } else {
        error({ message: "Page not found" });
      }
    } catch {
      error({
        statusCode: 504,
        message: "Data not available"
      });
    }
  },
  data() {
    return {
      loading: false
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
      return this.title;
    },
    title() {
      if (this.genre) {
        return `TV Genre: ${this.genre.name}`;
      } else {
        return "TV Genre";
      }
    },
    listingShown() {
      var _a;
      return (_a = this.items) == null ? void 0 : _a.results.length;
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      getMediaByGenre("tv", this.$route.params.id, this.items.page + 1).then((response) => {
        this.items.results = this.items.results.concat(response.results);
        this.items.page = response.page;
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheTopNav = __nuxt_component_0;
  const _component_Listing = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheTopNav, { title: $options.metaTitle }, null, _parent));
  if ($options.listingShown) {
    _push(ssrRenderComponent(_component_Listing, {
      title: $options.title,
      items: _ctx.items,
      loading: $data.loading,
      onLoadMore: $options.loadMore
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/genre/_id/tv.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tv = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { tv as default };
//# sourceMappingURL=tv-0d024292.mjs.map
