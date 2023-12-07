import { C as ChevronLeftIcon } from './chevron-left-0aa0ae99.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const nav = "_nav_ct23z_13";
const text = "_text_ct23z_32";
const button = "_button_ct23z_40";
const style1 = {
  breakpointXsmall,
  breakpointSmall,
  breakpointMedium,
  breakpointLarge,
  breakpointXlarge,
  breakpointXlarger1,
  breakpointXlarger2,
  breakpointXlarger3,
  layoutNavWidth,
  nav,
  text,
  button
};
const _sfc_main = {
  components: {
    ChevronLeftIcon
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ChevronLeftIcon = resolveComponent("ChevronLeftIcon");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.nav
  }, _attrs))}><button type="button" aria-label="Go Back" class="${ssrRenderClass(_ctx.$style.button)}">`);
  _push(ssrRenderComponent(_component_ChevronLeftIcon, null, null, _parent));
  _push(`</button><p class="${ssrRenderClass(_ctx.$style.text)}">${ssrInterpolate($props.title)}</p></nav>`);
}
const cssModules = {
  "$style": style1
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheTopNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=TheTopNav-aeb8f3b0.mjs.map
