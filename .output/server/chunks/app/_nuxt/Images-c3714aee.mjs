import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { T as TwitterIcon } from './twitter-1c70975f.mjs';
import { N as NuxtPicture } from './tmdbAPI-af98a87a.mjs';
import { _ as __nuxt_component_1$1 } from './Modal-6841df79.mjs';

const breakpointXsmall$2 = "640px";
const breakpointSmall$2 = "768px";
const breakpointMedium$2 = "1024px";
const breakpointLarge$2 = "1200px";
const breakpointXlarge$2 = "1400px";
const breakpointXlarger1$2 = "1500px";
const breakpointXlarger2$2 = "1800px";
const breakpointXlarger3$2 = "2500px";
const layoutNavWidth$2 = "10rem";
const nav = "_nav_nv8i4_13";
const button = "_button_nv8i4_26";
const buttonActive = "_buttonActive_nv8i4_56";
const style0$2 = {
  breakpointXsmall: breakpointXsmall$2,
  breakpointSmall: breakpointSmall$2,
  breakpointMedium: breakpointMedium$2,
  breakpointLarge: breakpointLarge$2,
  breakpointXlarge: breakpointXlarge$2,
  breakpointXlarger1: breakpointXlarger1$2,
  breakpointXlarger2: breakpointXlarger2$2,
  breakpointXlarger3: breakpointXlarger3$2,
  layoutNavWidth: layoutNavWidth$2,
  nav,
  button,
  buttonActive
};
const _sfc_main$3 = {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    clicked(index, item2) {
      this.active = index;
      this.$emit("clicked", item2.replace(/\s+/g, "-").toLowerCase());
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.nav
  }, _attrs))}><!--[-->`);
  ssrRenderList($props.menu, (item2, index) => {
    _push(`<button class="${ssrRenderClass([_ctx.$style.button, { [_ctx.$style.buttonActive]: $data.active === index }])}" type="button">${ssrInterpolate(item2)}</button>`);
  });
  _push(`<!--]--></div>`);
}
const cssModules$2 = {
  "$style": style0$2
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MediaNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__cssModules", cssModules$2]]);
const FacebookIcon = "" + buildAssetsURL("facebook.c7b1d44a.svg?inline");
const InstagramIcon = "" + buildAssetsURL("instagram.34acc0b1.svg?inline");
const ImdbIcon = "" + buildAssetsURL("imdb.157f1004.svg?inline");
const LinkIcon = "" + buildAssetsURL("link.342a4c25.svg?inline");
const _sfc_main$2 = {
  components: {
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    ImdbIcon,
    LinkIcon
  },
  props: {
    media: {
      type: String,
      required: false,
      default: ""
    },
    links: {
      type: Object,
      required: true
    }
  },
  computed: {
    // TODO: `person`, `name`, and `title` are hardcoded
    imdb() {
      if (this.media === "person") {
        return "name";
      } else {
        return "title";
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TwitterIcon = resolveComponent("TwitterIcon");
  const _component_FacebookIcon = resolveComponent("FacebookIcon");
  const _component_InstagramIcon = resolveComponent("InstagramIcon");
  const _component_ImdbIcon = resolveComponent("ImdbIcon");
  const _component_LinkIcon = resolveComponent("LinkIcon");
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "nolist" }, _attrs))}>`);
  if ($props.links.twitter_id) {
    _push(`<li><a${ssrRenderAttr("href", `https://twitter.com/${$props.links.twitter_id}`)} target="_blank" aria-label="Link to Twitter account" rel="noopener">`);
    _push(ssrRenderComponent(_component_TwitterIcon, null, null, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.links.facebook_id) {
    _push(`<li><a${ssrRenderAttr("href", `https://www.facebook.com/${$props.links.facebook_id}`)} target="_blank" aria-label="Link to Facebook account" rel="noopener">`);
    _push(ssrRenderComponent(_component_FacebookIcon, null, null, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.links.instagram_id) {
    _push(`<li><a${ssrRenderAttr("href", `https://instagram.com/${$props.links.instagram_id}`)} target="_blank" aria-label="Link to Instagram account" rel="noopener">`);
    _push(ssrRenderComponent(_component_InstagramIcon, null, null, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.links.imdb_id) {
    _push(`<li><a${ssrRenderAttr("href", `https://www.imdb.com/${$options.imdb}/${$props.links.imdb_id}`)} target="_blank" aria-label="Link to IMDb account" rel="noopener">`);
    _push(ssrRenderComponent(_component_ImdbIcon, null, null, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.links.homepage) {
    _push(`<li><a${ssrRenderAttr("href", $props.links.homepage)} target="_blank" aria-label="Link to Homepage" rel="noopener">`);
    _push(ssrRenderComponent(_component_LinkIcon, null, null, _parent));
    _push(`</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExternalLinks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const breakpointXsmall$1 = "640px";
const breakpointSmall$1 = "768px";
const breakpointMedium$1 = "1024px";
const breakpointLarge$1 = "1200px";
const breakpointXlarge$1 = "1400px";
const breakpointXlarger1$1 = "1500px";
const breakpointXlarger2$1 = "1800px";
const breakpointXlarger3$1 = "2500px";
const layoutNavWidth$1 = "10rem";
const item = "_item_s6gkv_13";
const image = "_image_s6gkv_17";
const backdrop = "_backdrop_s6gkv_21";
const poster = "_poster_s6gkv_50";
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
  image,
  backdrop,
  poster
};
const _sfc_main$1 = {
  props: {
    image: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    handleGallery(index) {
      this.$emit("openModal", index);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_picture = NuxtPicture;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [_ctx.$style.item, _ctx.$style[$props.type]]
  }, _attrs))}><a${ssrRenderAttr("href", $props.image.thumbSrc)}><div class="${ssrRenderClass(_ctx.$style.image)}">`);
  _push(ssrRenderComponent(_component_nuxt_picture, {
    loading: "lazy",
    width: $props.image.thumbWidth,
    height: $props.image.thumbHeight,
    sizes: $props.image.sizes,
    src: $props.image.thumbSrc
  }, null, _parent));
  _push(`</div></a></div>`);
}
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImagesItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__cssModules", cssModules$1]]);
const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const head = "_head_1bpc0_13";
const title = "_title_1bpc0_24";
const count = "_count_1bpc0_34";
const items = "_items_1bpc0_46";
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
  title,
  count,
  items
};
const _sfc_main = {
  components: {
    ImagesItem: __nuxt_component_0,
    Modal: __nuxt_component_1$1
  },
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      modalVisible: false,
      modalStartAt: 0
    };
  },
  computed: {
    imagesCount() {
      return `${this.images.length} ${this.images.length > 1 ? "Images" : "Image"}`;
    }
  },
  created() {
    this.handleData();
  },
  methods: {
    handleData() {
      for (const image2 of this.images) {
        image2.thumbSrc = image2.file_path;
        image2.thumbWidth = this.type === "poster" ? 370 : 533;
        image2.thumbHeight = this.type === "poster" ? 556 : 300;
        image2.sizes = this.type === "poster" ? "xsmall:30vw small:21vw medium:22vw large:18vw xlarge:16vw xlarge1:17vw xlarge3:342" : "xsmall:46vw small:28vw medium:30vw large:22vw xlarge:21vw xlarge1:21vw xlarge3:780";
        image2.src = image2.file_path;
      }
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
  const _component_ImagesItem = __nuxt_component_0;
  const _component_Modal = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spacing" }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.head)}"><h2 class="${ssrRenderClass(_ctx.$style.title)}">${ssrInterpolate($props.title)}</h2><strong class="${ssrRenderClass(_ctx.$style.count)}">${ssrInterpolate($options.imagesCount)}</strong></div><div class="${ssrRenderClass(_ctx.$style.items)}"><!--[-->`);
  ssrRenderList($props.images, (image2, index) => {
    _push(ssrRenderComponent(_component_ImagesItem, {
      key: `image-${index}`,
      image: image2,
      index,
      type: $props.type,
      onOpenModal: $options.openModal
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  if ($data.modalVisible) {
    _push(ssrRenderComponent(_component_Modal, {
      data: $props.images,
      modifier: "modal--images",
      "aria-label": "Images",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Images.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__cssModules", cssModules]]);

export { __nuxt_component_2 as _, __nuxt_component_6 as a, __nuxt_component_1 as b };
//# sourceMappingURL=Images-c3714aee.mjs.map
