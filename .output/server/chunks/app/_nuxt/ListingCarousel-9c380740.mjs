import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { n as name$1, t as stars$1, y as yearStart, u as cert, v as backdrop$1, w as trailer$1, _ as __nuxt_component_0$1, N as NuxtPicture } from './tmdbAPI-af98a87a.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-691e5b50.mjs';
import { _ as __nuxt_component_1$1, C as ChevronRightIcon } from './Modal-6841df79.mjs';
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext, mergeProps, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import smoothscroll from 'smoothscroll-polyfill';
import { C as ChevronLeftIcon } from './chevron-left-0aa0ae99.mjs';

const CirclePlayIcon = "" + buildAssetsURL("circle-play.426f676b.svg?inline");
const PlayIcon = "" + buildAssetsURL("play.3489c169.svg?inline");
const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const hero = "_hero_c8p16_13";
const backdrop = "_backdrop_c8p16_35";
const play = "_play_c8p16_75";
const image = "_image_c8p16_91";
const pane = "_pane_c8p16_103";
const name = "_name_c8p16_137";
const meta = "_meta_c8p16_155";
const rating = "_rating_c8p16_169";
const stars = "_stars_c8p16_180";
const info = "_info_c8p16_201";
const desc = "_desc_c8p16_209";
const trailer = "_trailer_c8p16_226";
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
  hero,
  backdrop,
  play,
  image,
  pane,
  name,
  meta,
  rating,
  stars,
  info,
  desc,
  trailer
};
const _sfc_main$1 = {
  components: {
    Modal: __nuxt_component_1$1,
    CirclePlayIcon,
    PlayIcon
  },
  mixins: [
    name$1,
    stars$1,
    yearStart,
    cert,
    backdrop$1,
    trailer$1
  ],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isSingle: this.item.id === this.$route.params.id,
      modalVisible: false
    };
  },
  computed: {
    type() {
      return this.item.title ? "movie" : "tv";
    }
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CirclePlayIcon = resolveComponent("CirclePlayIcon");
  const _component_nuxt_picture = NuxtPicture;
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_PlayIcon = resolveComponent("PlayIcon");
  const _component_Modal = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass(_ctx.$style.hero)}"><div class="${ssrRenderClass(_ctx.$style.backdrop)}"><div>`);
  if (_ctx.trailer) {
    _push(`<button class="${ssrRenderClass(_ctx.$style.play)}" type="button" aria-label="Play Trailer">`);
    _push(ssrRenderComponent(_component_CirclePlayIcon, null, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_nuxt_picture, {
    class: _ctx.$style.image,
    sizes: "xsmall:100vw medium:71.1vw",
    alt: _ctx.name,
    src: _ctx.backdrop
  }, null, _parent));
  _push(`</div></div><div class="${ssrRenderClass(_ctx.$style.pane)}"><template><div><h1 class="${ssrRenderClass(_ctx.$style.name)}">`);
  if ($data.isSingle) {
    _push(`<!--[-->${ssrInterpolate(_ctx.name)}<!--]-->`);
  } else {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: { name: `${$options.type}-id`, params: { id: $props.item.id } }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.name), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`</h1><div class="${ssrRenderClass(_ctx.$style.meta)}">`);
  if (_ctx.stars || $props.item.vote_count) {
    _push(`<div class="${ssrRenderClass(_ctx.$style.rating)}">`);
    if (_ctx.stars) {
      _push(`<div class="${ssrRenderClass(_ctx.$style.stars)}"><div style="${ssrRenderStyle({ width: `${_ctx.stars}%` })}"></div></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($props.item.vote_count > 0) {
      _push(`<div>${ssrInterpolate($props.item.vote_count | _ctx.numberWithCommas)} Reviews </div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.$style.info)}">`);
  if ($props.item.number_of_seasons) {
    _push(`<span>Season ${ssrInterpolate($props.item.number_of_seasons)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.yearStart) {
    _push(`<span>${ssrInterpolate(_ctx.yearStart)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.runtime) {
    _push(`<span>${ssrInterpolate($props.item.runtime | _ctx.runtime)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.cert) {
    _push(`<span>Cert. ${ssrInterpolate(_ctx.cert)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="${ssrRenderClass(_ctx.$style.desc)}">${ssrInterpolate($props.item.overview | _ctx.truncate(200))}</div>`);
  if (_ctx.trailer) {
    _push(`<button class="${ssrRenderClass([_ctx.$style.trailer, "button button--icon"])}" type="button">`);
    _push(ssrRenderComponent(_component_PlayIcon, { class: "icon" }, null, _parent));
    _push(`<span class="txt">Watch Trailer</span></button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></template></div></div>`);
  if ($data.modalVisible) {
    _push(ssrRenderComponent(_component_Modal, {
      data: _ctx.trailer,
      type: "iframe",
      onClose: $options.closeModal
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__cssModules", cssModules]]);
const carousel = {
  data() {
    return {
      elementWidth: 0,
      carouselWidth: 0,
      visibleWidth: 0,
      maximumPosition: 0,
      unusableVisibleWidth: 0,
      disableLeftButton: true,
      disableRightButton: false
    };
  },
  mounted() {
    smoothscroll.polyfill();
    window.addEventListener("resize", this.resizeEvent);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeEvent);
  },
  methods: {
    calculateState(numberOfItems) {
      let unusableVisibleWidth = 72;
      const elementWidth = this.$refs.carouselElement.firstChild.getBoundingClientRect().width;
      const carouselWidth = numberOfItems * elementWidth;
      const maximumPosition = this.$refs.carouselElement.scrollWidth;
      if (window.innerWidth >= 1200) {
        unusableVisibleWidth = 92;
      }
      const visibleWidth = this.$refs.carouselElement.offsetWidth - unusableVisibleWidth;
      this.unusableVisibleWidth = unusableVisibleWidth;
      this.elementWidth = elementWidth;
      this.carouselWidth = carouselWidth;
      this.visibleWidth = visibleWidth;
      this.maximumPosition = maximumPosition;
      this.disableLeftButton = !this.$refs.carouselElement.scrollLeft;
      this.disableRightButton = visibleWidth >= carouselWidth;
    },
    moveTo(width) {
      this.$refs.carouselElement.scrollTo({
        left: width,
        behavior: "smooth"
      });
    },
    moveToClickEvent(direction) {
      const invisible = this.$refs.carouselElement.scrollLeft + (direction === "left" ? -this.visibleWidth + 1 : this.visibleWidth);
      const remainder = invisible - invisible % this.elementWidth;
      this.moveTo(remainder);
    },
    scrollEvent() {
      const scrollLeft = this.$refs.carouselElement.scrollLeft;
      const end = this.maximumPosition - this.visibleWidth - this.elementWidth;
      this.disableLeftButton = 3 > scrollLeft;
      this.disableRightButton = scrollLeft > end;
    }
  }
};
const _sfc_main = {
  components: {
    Card: __nuxt_component_0$1,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  mixins: [carousel],
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
    }
  },
  mounted() {
    const count = this.viewAllUrl ? this.items.results.length + 1 : this.items.results.length;
    this.calculateState(count);
  },
  methods: {
    resizeEvent() {
      const count = this.viewAllUrl ? this.items.results.length + 1 : this.items.results.length;
      this.calculateState(count);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_ChevronLeftIcon = resolveComponent("ChevronLeftIcon");
  const _component_Card = __nuxt_component_0$1;
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "listing listing--carousel" }, _attrs))}>`);
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
  _push(`<div class="carousel"><button class="carousel__nav carousel__nav--left" aria-label="Previous" type="button"${ssrIncludeBooleanAttr(_ctx.disableLeftButton) ? " disabled" : ""}>`);
  _push(ssrRenderComponent(_component_ChevronLeftIcon, null, null, _parent));
  _push(`</button><div class="carousel__items"><!--[-->`);
  ssrRenderList($props.items.results, (item) => {
    _push(ssrRenderComponent(_component_Card, {
      key: `card-${item.id}`,
      item
    }, null, _parent));
  });
  _push(`<!--]-->`);
  if ($props.viewAllUrl) {
    _push(`<div class="card">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: $props.viewAllUrl,
      class: "card__link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="card__img"${_scopeId}><span${_scopeId}>Explore All</span></div>`);
        } else {
          return [
            createVNode("div", { class: "card__img" }, [
              createVNode("span", null, "Explore All")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><button class="carousel__nav carousel__nav--right" aria-label="Next" type="button"${ssrIncludeBooleanAttr(_ctx.disableRightButton) ? " disabled" : ""}>`);
  _push(ssrRenderComponent(_component_ChevronRightIcon, null, null, _parent));
  _push(`</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListingCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CirclePlayIcon as C, __nuxt_component_0 as _, __nuxt_component_1 as a, carousel as c };
//# sourceMappingURL=ListingCarousel-9c380740.mjs.map
