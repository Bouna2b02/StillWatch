import { _ as __nuxt_component_0$2 } from './nuxt-link-691e5b50.mjs';
import { q as getYouTubeVideo, P as PlaceholderIcon, N as NuxtPicture } from './tmdbAPI-af98a87a.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { c as carousel, C as CirclePlayIcon } from './ListingCarousel-9c380740.mjs';
import { d as debounce } from './Functions-2f230c98.mjs';
import { C as ChevronLeftIcon } from './chevron-left-0aa0ae99.mjs';
import { C as ChevronRightIcon, _ as __nuxt_component_1 } from './Modal-6841df79.mjs';

const _sfc_main$3 = {
  components: {
    PlaceholderIcon
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    poster() {
      return this.person.profile_path;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_nuxt_picture = NuxtPicture;
  const _component_PlaceholderIcon = resolveComponent("PlaceholderIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "credits-item" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "credits-item__link",
    to: { name: "person-id", params: { id: $props.person.id } }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="credits-item__img"${_scopeId}>`);
        if ($options.poster) {
          _push2(ssrRenderComponent(_component_nuxt_picture, {
            loading: "lazy",
            width: "370",
            height: "556",
            sizes: "xsmall:29vw small:29vw medium:17vw large:14vw xlarge:13vw xlarge1:11vw xlarge2:12vw xlarge3:342",
            alt: $props.person.name,
            src: $options.poster
          }, null, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_PlaceholderIcon, null, null, _parent2, _scopeId));
        }
        _push2(`</div><h2 class="credits-item__name"${_scopeId}>${ssrInterpolate($props.person.name)}</h2><div class="credits-item__character"${_scopeId}>${ssrInterpolate($props.person.character)}</div>`);
      } else {
        return [
          createVNode("div", { class: "credits-item__img" }, [
            $options.poster ? (openBlock(), createBlock(_component_nuxt_picture, {
              key: 0,
              loading: "lazy",
              width: "370",
              height: "556",
              sizes: "xsmall:29vw small:29vw medium:17vw large:14vw xlarge:13vw xlarge1:11vw xlarge2:12vw xlarge3:342",
              alt: $props.person.name,
              src: $options.poster
            }, null, 8, ["alt", "src"])) : (openBlock(), createBlock(_component_PlaceholderIcon, { key: 1 }))
          ]),
          createVNode("h2", { class: "credits-item__name" }, toDisplayString($props.person.name), 1),
          createVNode("div", { class: "credits-item__character" }, toDisplayString($props.person.character), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreditsItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    CreditsItem: __nuxt_component_0$1,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  mixins: [carousel],
  props: {
    people: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.calculateState(this.people.length);
  },
  methods: {
    resizeEvent: debounce(function() {
      this.calculateState(this.people.length);
    }, 100)
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ChevronLeftIcon = resolveComponent("ChevronLeftIcon");
  const _component_CreditsItem = __nuxt_component_0$1;
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  if ($props.people && $props.people.length) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "listing listing--carousel" }, _attrs))}><div class="listing__head"><h2 class="listing__title"> Cast </h2></div><div class="carousel"><button class="carousel__nav carousel__nav--left" aria-label="Previous" type="button"${ssrIncludeBooleanAttr(_ctx.disableLeftButton) ? " disabled" : ""}>`);
    _push(ssrRenderComponent(_component_ChevronLeftIcon, null, null, _parent));
    _push(`</button><div class="carousel__items"><!--[-->`);
    ssrRenderList($props.people, (person) => {
      _push(ssrRenderComponent(_component_CreditsItem, {
        key: `credit-${person.id}`,
        person
      }, null, _parent));
    });
    _push(`<!--]--></div><button class="carousel__nav carousel__nav--right" aria-label="Next" type="button"${ssrIncludeBooleanAttr(_ctx.disableRightButton) ? " disabled" : ""}>`);
    _push(ssrRenderComponent(_component_ChevronRightIcon, null, null, _parent));
    _push(`</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Credits.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const breakpointXsmall$1 = "640px";
const breakpointSmall$1 = "768px";
const breakpointMedium$1 = "1024px";
const breakpointLarge$1 = "1200px";
const breakpointXlarge$1 = "1400px";
const breakpointXlarger1$1 = "1500px";
const breakpointXlarger2$1 = "1800px";
const breakpointXlarger3$1 = "2500px";
const layoutNavWidth$1 = "10rem";
const item = "_item_1el7r_13";
const link = "_link_1el7r_45";
const image = "_image_1el7r_51";
const play = "_play_1el7r_64";
const duration = "_duration_1el7r_71";
const name = "_name_1el7r_80";
const type = "_type_1el7r_93";
const style0$1 = {
  breakpointXsmall: breakpointXsmall$1,
  breakpointSmall: breakpointSmall$1,
  breakpointMedium: breakpointMedium$1,
  breakpointLarge: breakpointLarge$1,
  breakpointXlarge: breakpointXlarge$1,
  breakpointXlarger1: breakpointXlarger1$1,
  breakpointXlarger2: breakpointXlarger2$1,
  breakpointXlarger3: breakpointXlarger3$1,
  layoutNavWidth: layoutNavWidth$1,
  item,
  link,
  image,
  play,
  duration,
  name,
  type
};
const _sfc_main$1 = {
  components: {
    CirclePlayIcon
  },
  props: {
    video: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleVideo(index) {
      this.$emit("openModal", index);
    },
    getSeconds(duration2) {
      let a = duration2.match(/\d+/g);
      if (duration2.includes("M") && !duration2.includes("H") && !duration2.includes("S")) {
        a = [0, a[0], 0];
      }
      if (duration2.includes("H") && !duration2.includes("M")) {
        a = [a[0], 0, a[1]];
      }
      if (duration2.includes("H") && !duration2.includes("M") && !duration2.includes("S")) {
        a = [a[0], 0, 0];
      }
      duration2 = 0;
      if (a.length === 3) {
        duration2 = duration2 + parseInt(a[0]) * 3600;
        duration2 = duration2 + parseInt(a[1]) * 60;
        duration2 = duration2 + parseInt(a[2]);
      }
      if (a.length === 2) {
        duration2 = duration2 + parseInt(a[0]) * 60;
        duration2 = duration2 + parseInt(a[1]);
      }
      if (a.length === 1) {
        duration2 = duration2 + parseInt(a[0]);
      }
      return duration2;
    },
    formatDuration(duration2) {
      const seconds = this.getSeconds(duration2);
      let secondsLeft = seconds;
      secondsLeft = secondsLeft % 3600;
      const mins = Math.floor(secondsLeft / 60);
      secondsLeft = secondsLeft % 60;
      if (secondsLeft < 10) {
        secondsLeft = `0${secondsLeft}`;
      }
      return `${mins}:${secondsLeft}`;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_picture = NuxtPicture;
  const _component_CirclePlayIcon = resolveComponent("CirclePlayIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.item
  }, _attrs))}><a class="${ssrRenderClass(_ctx.$style.link)}"${ssrRenderAttr("href", $props.video.url)}><div class="${ssrRenderClass(_ctx.$style.image)}">`);
  if ($props.video.thumb) {
    _push(ssrRenderComponent(_component_nuxt_picture, {
      loading: "lazy",
      width: $props.video.width,
      height: $props.video.height,
      sizes: $props.video.sizes,
      alt: $props.video.name,
      src: $props.video.thumb
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.video.duration) {
    _push(`<div class="${ssrRenderClass(_ctx.$style.duration)}">${ssrInterpolate($options.formatDuration($props.video.duration))}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_CirclePlayIcon, {
    class: _ctx.$style.play
  }, null, _parent));
  _push(`</div><h2 class="${ssrRenderClass(_ctx.$style.name)}">${ssrInterpolate($props.video.name)}</h2><div class="${ssrRenderClass(_ctx.$style.type)}">${ssrInterpolate($props.video.type)}</div></a></div>`);
}
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideosItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__cssModules", cssModules$1]]);
const YOUTUBE_THUMBNAIL_QUALITY_NAME = "maxresdefault.jpg";
const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const head = "_head_426vg_13";
const count = "_count_426vg_27";
const items = "_items_426vg_38";
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
  head,
  count,
  items
};
const _sfc_main = {
  components: {
    VideosItem: __nuxt_component_0,
    Modal: __nuxt_component_1
  },
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeType: "all",
      activeVideos: this.videos,
      modalVisible: false,
      modalStartAt: 0
    };
  },
  computed: {
    videoCount() {
      return `${this.activeVideos.length} ${this.activeVideos.length > 1 ? "Videos" : "Video"}`;
    },
    videoTypes() {
      return this.videos.map((video) => video.type).filter((video, index, self) => self.indexOf(video) === index);
    }
  },
  created() {
    this.handleData();
  },
  methods: {
    handleData() {
      const ids = this.videos.map((video) => video.key).join(",");
      this.videos.forEach((video) => {
        this.$set(video, "thumb", `${video.key}/${YOUTUBE_THUMBNAIL_QUALITY_NAME}`);
        this.$set(video, "src", `https://www.youtube.com/embed/${video.key}?rel=0&showinfo=0&autoplay=1`);
        this.$set(video, "url", `https://youtube.com/watch?v=${video.key}`);
        this.$set(video, "width", 320);
        this.$set(video, "height", 180);
        this.$set(video, "sizes", "xsmall:93vw small:46vw medium:44vw large:30vw xlarge:27vw xlarge1:20vw xlarge3:780");
      });
      getYouTubeVideo(ids).then((response) => {
        for (let index = 0; index < this.videos.length; index++) {
          if (response.items[index]) {
            this.$set(this.videos[index], "duration", response.items[index].contentDetails.duration);
          }
        }
      });
    },
    filterVideos() {
      this.activeVideos = this.videos.filter((video) => this.activeType === "all" ? true : video.type === this.activeType);
    },
    openModal(index) {
      this.modalStartAt = index;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
      this.modalStartAt = 0;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VideosItem = __nuxt_component_0;
  const _component_Modal = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spacing" }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.head)}">`);
  if ($options.videoTypes.length > 1) {
    _push(`<select><option value="all"${ssrIncludeBooleanAttr(Array.isArray($data.activeType) ? ssrLooseContain($data.activeType, "all") : ssrLooseEqual($data.activeType, "all")) ? " selected" : ""}> All </option><!--[-->`);
    ssrRenderList($options.videoTypes, (type2) => {
      _push(`<option${ssrRenderAttr("value", type2)}>${ssrInterpolate(type2)}</option>`);
    });
    _push(`<!--]--></select>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<strong class="${ssrRenderClass(_ctx.$style.count)}">${ssrInterpolate($options.videoCount)}</strong></div><div class="${ssrRenderClass(_ctx.$style.items)}"><!--[-->`);
  ssrRenderList($data.activeVideos, (video, index) => {
    _push(ssrRenderComponent(_component_VideosItem, {
      key: `video-${video.id}`,
      video,
      index,
      onOpenModal: $options.openModal
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  if ($data.modalVisible) {
    _push(ssrRenderComponent(_component_Modal, {
      data: $props.videos,
      type: "iframe",
      nav: "",
      "start-at": $data.modalStartAt,
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Videos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);

export { __nuxt_component_5 as _, __nuxt_component_4 as a };
//# sourceMappingURL=Videos-6f826d74.mjs.map
