import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-691e5b50.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const HomeIcon = "" + buildAssetsURL("home.2eb5fa2e.svg?inline");
const MovieIcon = "" + buildAssetsURL("movie.3010b8f2.svg?inline");
const TvIcon = "" + buildAssetsURL("tv.406fe681.svg?inline");
const MagnifierIcon = "" + buildAssetsURL("magnifier.57853713.svg?inline");
const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const nav = "_nav_xij7d_13";
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
  nav
};
const SEARCH_PATHNAME = "search";
const _sfc_main = {
  components: {
    HomeIcon,
    MovieIcon,
    TvIcon,
    MagnifierIcon
  },
  computed: {
    searchFormOpen() {
      return this.$search.checkSearchFormOpen();
    }
  },
  methods: {
    toggleSearchForm() {
      if (this.$route.name !== SEARCH_PATHNAME) {
        this.$search.toggleSearchForm();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_HomeIcon = resolveComponent("HomeIcon");
  const _component_MovieIcon = resolveComponent("MovieIcon");
  const _component_TvIcon = resolveComponent("TvIcon");
  const _component_MagnifierIcon = resolveComponent("MagnifierIcon");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.nav
  }, _attrs))} data-v-cf56713a><ul class="nolist" data-v-cf56713a><li data-v-cf56713a>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    exact: "",
    to: { name: "index" },
    "aria-label": "Home"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HomeIcon, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HomeIcon)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-cf56713a>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "movie" },
    "aria-label": "Movies"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_MovieIcon, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_MovieIcon)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-cf56713a>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: "tv" },
    "aria-label": "TV Shows"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TvIcon, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TvIcon)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-cf56713a><button class="search-toggle" type="button" aria-label="Search" aria-haspopup="true"${ssrRenderAttr("aria-expanded", `${$options.searchFormOpen}`)} data-v-cf56713a>`);
  _push(ssrRenderComponent(_component_MagnifierIcon, null, null, _parent));
  _push(`</button></li></ul></nav>`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules], ["__scopeId", "data-v-cf56713a"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=TheNav-b4c87776.mjs.map
