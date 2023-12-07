import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { N as NuxtPicture } from './tmdbAPI-af98a87a.mjs';
import { d as debounce } from './Functions-2f230c98.mjs';
import { C as CrossIcon } from './cross-c4bc44d6.mjs';
import { C as ChevronLeftIcon } from './chevron-left-0aa0ae99.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const ChevronRightIcon = "" + buildAssetsURL("chevron-right.2ae0b701.svg?inline");
let focusedElBeforeOpen;
let focusableEls;
let firstFocusableEl;
let lastFocusableEl;
const _sfc_main = {
  components: {
    CrossIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  props: {
    data: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    type: {
      type: String,
      required: false,
      default: "image"
    },
    modifier: {
      type: String,
      required: false,
      default: ""
    },
    nav: {
      type: Boolean,
      required: false,
      default: false
    },
    startAt: {
      type: Number,
      required: false,
      default: 0
    },
    ariaLabel: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      selected: null,
      activeItem: null
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "modal-open"
      }
    };
  },
  computed: {
    modalClass() {
      return {
        "modal--nav": this.showNav,
        [`modal--${this.type}`]: true,
        [this.modifier]: true
      };
    },
    showNav() {
      return this.nav && this.data.length > 1;
    },
    label() {
      var _a;
      if (this.ariaLabel) {
        return this.ariaLabel;
      } else if ((_a = this.activeItem) == null ? void 0 : _a.name) {
        return this.activeItem.name;
      } else {
        return null;
      }
    },
    activeItemIframeShown() {
      return this.type === "iframe" && this.activeItem;
    },
    activeItemImageShown() {
      var _a;
      return this.type === "image" && ((_a = this.activeItem) == null ? void 0 : _a.src);
    }
  },
  watch: {
    selected() {
      this.activeItem = this.data[this.selected];
    }
  },
  created() {
    this.selected = this.startAt;
  },
  beforeMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    focusedElBeforeOpen = document.activeElement;
  },
  mounted() {
    focusableEls = this.$refs.modal.querySelectorAll(`
        a[href],
        area[href],
        input:not([disabled]),
        select:not([disabled]),
        textarea:not([disabled]),
        button:not([disabled]),
        [tabindex="0"]
      `);
    focusableEls = Array.prototype.slice.call(focusableEls);
    firstFocusableEl = focusableEls[0];
    lastFocusableEl = focusableEls[focusableEls.length - 1];
    firstFocusableEl.focus();
    if (this.type === "iframe") {
      this.handleIframeSize();
      window.addEventListener("resize", this.resizeIframeSize);
    }
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
    if (this.type === "iframe") {
      window.removeEventListener("resize", this.resizeIframeSize);
    }
    if (focusedElBeforeOpen) {
      focusedElBeforeOpen.focus();
    }
  },
  methods: {
    previous() {
      this.selected = (this.selected - 1 + this.data.length) % this.data.length;
    },
    next() {
      this.selected = (this.selected + 1) % this.data.length;
    },
    close() {
      this.$emit("close");
    },
    handleKeyDown(e) {
      if (e.keyCode === 27) {
        this.close();
      } else if (this.nav && e.keyCode === 39) {
        this.next();
      } else if (this.nav && e.keyCode === 37) {
        this.previous();
      } else if (e.keyCode === 9) {
        if (focusableEls.length === 1) {
          e.preventDefault();
          return;
        }
        if (e.shiftKey) {
          this.handleBackwardTab(e);
        } else {
          this.handleForwardTab(e);
        }
      }
    },
    handleForwardTab(e) {
      if (document.activeElement === lastFocusableEl) {
        e.preventDefault();
        firstFocusableEl.focus();
      }
    },
    handleBackwardTab(e) {
      if (document.activeElement === firstFocusableEl) {
        e.preventDefault();
        lastFocusableEl.focus();
      }
    },
    handleIframeSize() {
      const aspectRatio = 16 / 9;
      const styles = getComputedStyle(this.$refs.modal);
      let maxWidth = this.$refs.modal.offsetWidth;
      let maxHeight = this.$refs.modal.offsetHeight;
      let width;
      let height;
      maxWidth -= parseFloat(styles.paddingRight) + parseFloat(styles.paddingLeft);
      maxHeight -= parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
      width = maxWidth;
      height = maxHeight;
      if (maxHeight > maxWidth / aspectRatio) {
        height = maxWidth / aspectRatio;
      } else if (maxWidth > maxHeight * aspectRatio) {
        width = maxHeight * aspectRatio;
      }
      this.$refs.modal.querySelector(".modal__iframe").style.width = `${width}px`;
      this.$refs.modal.querySelector(".modal__iframe").style.height = `${height}px`;
    },
    resizeIframeSize: debounce(function() {
      this.handleIframeSize();
    }, 600)
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrossIcon = resolveComponent("CrossIcon");
  const _component_nuxt_picture = NuxtPicture;
  const _component_ChevronLeftIcon = resolveComponent("ChevronLeftIcon");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  _push(`<template><div${ssrRenderAttrs(mergeProps({
    ref: "modal",
    class: ["modal", $options.modalClass],
    tabindex: "-1",
    "aria-hidden": "false",
    "aria-label": $options.label,
    role: "dialog"
  }, _attrs))}><div class="modal__wrap"><div class="modal__body"><button class="modal__close" aria-label="Close" type="button">`);
  _push(ssrRenderComponent(_component_CrossIcon, null, null, _parent));
  _push(`</button><div class="${ssrRenderClass(`modal__${$props.type}`)}">`);
  if ($options.activeItemIframeShown) {
    _push(`<iframe${ssrRenderAttr("src", $data.activeItem.src)} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.activeItemImageShown) {
    _push(ssrRenderComponent(_component_nuxt_picture, {
      src: $data.activeItem.src
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($options.showNav) {
    _push(`<div class="modal__nav"><button class="modal__arrow modal__arrow--prev" aria-label="Previous" type="button">`);
    _push(ssrRenderComponent(_component_ChevronLeftIcon, null, null, _parent));
    _push(`</button><div class="modal__count">${ssrInterpolate($data.selected + 1)} / ${ssrInterpolate($props.data.length)}</div><button class="modal__arrow modal__arrow--next" aria-label="Next" type="button" title="Next">`);
    _push(ssrRenderComponent(_component_ChevronRightIcon, null, null, _parent));
    _push(`</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></template>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ChevronRightIcon as C, __nuxt_component_1 as _ };
//# sourceMappingURL=Modal-6841df79.mjs.map
