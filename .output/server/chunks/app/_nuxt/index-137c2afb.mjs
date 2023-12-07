import { s as search, _ as __nuxt_component_0$1 } from './tmdbAPI-af98a87a.mjs';
import { d as debounce } from './Functions-2f230c98.mjs';
import { L as LoadingSpinnerIcon } from './loading-spinner-5deacaa0.mjs';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import 'ohmyfetch/node';
import 'vue-router';

const _sfc_main$1 = {
  components: {
    Card: __nuxt_component_0$1,
    LoadingSpinnerIcon
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    items: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollPosition);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getScrollPosition);
  },
  methods: {
    getScrollPosition: debounce(function() {
      if (this.items.page < this.items.total_pages) {
        const bottomOfWindow = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 600;
        if (bottomOfWindow && !this.loading) {
          this.loadMore();
        }
      } else {
        window.removeEventListener("scroll", this.getScrollPosition);
      }
    }, 50),
    loadMore() {
      this.$emit("loadMore");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = __nuxt_component_0$1;
  const _component_LoadingSpinnerIcon = resolveComponent("LoadingSpinnerIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "listing" }, _attrs))}>`);
  if ($props.title) {
    _push(`<div class="listing__head">`);
    if ($props.title) {
      _push(`<h2 class="listing__title">${ssrInterpolate($props.title)}</h2>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="listing__items"><!--[-->`);
  ssrRenderList($props.items.results, (item) => {
    _push(ssrRenderComponent(_component_Card, {
      key: `card-${item.id}`,
      item
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  if ($props.items.page < $props.items.total_pages) {
    _push(`<div class="listing__nav">`);
    if ($props.loading) {
      _push(ssrRenderComponent(_component_LoadingSpinnerIcon, null, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/SearchResults.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
let fromPagePath = "/";
const _sfc_main = {
  components: {
    SearchResults: __nuxt_component_0
  },
  beforeRouteEnter(to, from, next) {
    fromPagePath = from.path;
    next();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getResults();
  },
  beforeRouteLeave(to, from, next) {
    const search2 = document.getElementById("search");
    next();
    if (search2 == null ? void 0 : search2.value.length) {
      this.$search.closeSearchForm();
    }
  },
  async asyncData({
    query,
    error,
    redirect
  }) {
    try {
      if (query.q) {
        const items = await search(query.q, 1);
        return { items };
      } else {
        redirect("/");
      }
    } catch {
      error({ message: "Page not found" });
    }
  },
  data() {
    return {
      // TODO: <
      // TODO: should use enums for loading state
      // TODO: >
      loading: false
    };
  },
  head() {
    return {
      title: "Search",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Search"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.FRONTEND_URL}${this.$route.path}`
        }
      ],
      bodyAttrs: {
        class: "page page-search"
      }
    };
  },
  computed: {
    query() {
      return this.$route.query.q || "";
    },
    title() {
      return this.query ? `Results For: ${this.query}` : "";
    },
    searchResultsShown() {
      var _a;
      return (_a = this.items) == null ? void 0 : _a.results.length;
    }
  },
  mounted() {
    this.$search.openSearchForm();
    this.$search.setFromPage(fromPagePath);
  },
  methods: {
    async getResults() {
      if (!this.query.length) {
        this.items = null;
        return;
      }
      const data = await search(this.query);
      if (!data.total_results) {
        this.items = null;
        return;
      }
      this.items = data;
    },
    loadMore() {
      this.loading = true;
      search(this.query, this.items.page + 1).then((response) => {
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
  const _component_SearchResults = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  if ($options.searchResultsShown) {
    _push(ssrRenderComponent(_component_SearchResults, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-137c2afb.mjs.map
