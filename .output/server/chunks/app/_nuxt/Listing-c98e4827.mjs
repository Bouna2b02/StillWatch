import { _ as __nuxt_component_0$1 } from './nuxt-link-691e5b50.mjs';
import { _ as __nuxt_component_0 } from './tmdbAPI-af98a87a.mjs';
import { d as debounce } from './Functions-2f230c98.mjs';
import { L as LoadingSpinnerIcon } from './loading-spinner-5deacaa0.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  components: {
    Card: __nuxt_component_0,
    LoadingSpinnerIcon
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    viewAllUrl: {
      type: Object,
      required: false,
      default() {
        return null;
      }
    },
    items: {
      type: Object,
      required: true
    },
    show: {
      type: Number,
      required: false,
      default: null
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  created() {
    if (this.show) {
      this.items.results = this.items.results.splice(0, this.show);
      this.items.total_pages = 1;
      this.items.total_results = this.show;
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_Card = __nuxt_component_0;
  const _component_LoadingSpinnerIcon = resolveComponent("LoadingSpinnerIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "listing" }, _attrs))}>`);
  if ($props.title || $props.viewAllUrl) {
    _push(`<div class="listing__head">`);
    if ($props.title) {
      _push(`<h2 class="listing__title">${ssrInterpolate($props.title)}</h2>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.viewAllUrl) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: $props.viewAllUrl,
        class: "listing__explore"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<strong${_scopeId}>Explore All</strong>`);
          } else {
            return [
              createVNode("strong", null, "Explore All")
            ];
          }
        }),
        _: 1
      }, _parent));
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Listing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Listing-c98e4827.mjs.map
