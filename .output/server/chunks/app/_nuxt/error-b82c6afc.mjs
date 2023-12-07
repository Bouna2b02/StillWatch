import { _ as __nuxt_component_0 } from './nuxt-link-691e5b50.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
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
const block = "_block_mvm6n_13";
const error$1 = "_error_mvm6n_27";
const title = "_title_mvm6n_31";
const message = "_message_mvm6n_42";
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
  block,
  error: error$1,
  title,
  message
};
const _sfc_main = {
  layout: "no-footer",
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: this.message
    };
  },
  computed: {
    message() {
      return this.error.message || "An error occurred";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.block
  }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.error)}"><div class="${ssrRenderClass(_ctx.$style.title)}">${ssrInterpolate($options.message)}</div><div class="${ssrRenderClass(_ctx.$style.message)}">`);
  if ($props.error.statusCode === 504) {
    _push(`<p> Looks like we are unable to fetch the data right now, please come back and try again soon. </p>`);
  } else {
    _push(`<p> Looks like you&#39;ve followed a broken link or entered a URL that doesn&#39;t exist on this site. </p>`);
  }
  _push(`<p> Back to our\xA0 `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` home page `);
      } else {
        return [
          createTextVNode(" home page ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` . </p></div></div></div>`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);

export { error as default };
//# sourceMappingURL=error-b82c6afc.mjs.map
