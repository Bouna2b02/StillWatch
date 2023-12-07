import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { get, set } from 'tiny-cookie';
import { s as supportsLocalStorage } from './Functions-2f230c98.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { C as CrossIcon } from './cross-c4bc44d6.mjs';
import { _ as __nuxt_component_0$1 } from './TheNav-b4c87776.mjs';
import { T as TwitterIcon } from './twitter-1c70975f.mjs';
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
import 'vue-router';
import './nuxt-link-691e5b50.mjs';

const breakpointXsmall$3 = "640px";
const breakpointSmall$3 = "768px";
const breakpointMedium$3 = "1024px";
const breakpointLarge$3 = "1200px";
const breakpointXlarge$3 = "1400px";
const breakpointXlarger1$3 = "1500px";
const breakpointXlarger2$3 = "1800px";
const breakpointXlarger3$3 = "2500px";
const layoutNavWidth$3 = "10rem";
const style0$3 = {
  breakpointXsmall: breakpointXsmall$3,
  breakpointSmall: breakpointSmall$3,
  breakpointMedium: breakpointMedium$3,
  breakpointLarge: breakpointLarge$3,
  breakpointXlarge: breakpointXlarge$3,
  breakpointXlarger1: breakpointXlarger1$3,
  breakpointXlarger2: breakpointXlarger2$3,
  breakpointXlarger3: breakpointXlarger3$3,
  layoutNavWidth: layoutNavWidth$3,
  "the-cookie-consent": "_the-cookie-consent_tkdc9_13"
};
const _sfc_main$4 = {
  data() {
    return {
      isOpen: false,
      storageName: "cookieconsent"
    };
  },
  mounted() {
    if (!this.getVisited()) {
      this.isOpen = true;
    }
  },
  methods: {
    getVisited() {
      if (supportsLocalStorage()) {
        return localStorage.getItem(this.storageName);
      } else {
        return get(this.storageName);
      }
    },
    setAccepted() {
      if (supportsLocalStorage()) {
        localStorage.setItem(this.storageName, "accepted");
      } else {
        set(this.storageName, "accepted");
      }
    },
    setDeclined() {
      if (supportsLocalStorage()) {
        localStorage.setItem(this.storageName, "declined");
      } else {
        set(this.storageName, "declined");
      }
    },
    accept() {
      this.setAccepted();
      this.isOpen = false;
    },
    decline() {
      this.setDeclined();
      this.isOpen = false;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.isOpen) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: [_ctx.$style["the-cookie-consent"], "alert alert--alt"]
    }, _attrs))}><p>${ssrInterpolate(`
        We use cookies and other tracking technologies to improve your browsing experience on our website.
         By using our website, you consent to our use of cookies and other tracking technologies.
      `)} \xA0 <a target="_blank" href="https://jason.codes/cookie-policy" rel="noopener"> Find out more </a> . </p><div><button class="alert__btn alert__btn--secondary button" type="button" aria-label="Close"> Decline </button><button class="alert__btn alert__btn--primary button" type="button" aria-label="Close"> Accept </button></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const cssModules$3 = {
  "$style": style0$3
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheCookieConsent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__cssModules", cssModules$3]]);
const breakpointXsmall$2 = "640px";
const breakpointSmall$2 = "768px";
const breakpointMedium$2 = "1024px";
const breakpointLarge$2 = "1200px";
const breakpointXlarge$2 = "1400px";
const breakpointXlarger1$2 = "1500px";
const breakpointXlarger2$2 = "1800px";
const breakpointXlarger3$2 = "2500px";
const layoutNavWidth$2 = "10rem";
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
  "the-install-prompt": "_the-install-prompt_1jnw5_13"
};
let installEvent;
const _sfc_main$3 = {
  components: {
    CrossIcon
  },
  data() {
    return {
      isOpen: false,
      storageName: "installprompt"
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      if (!this.getVisited()) {
        installEvent = event;
        this.isOpen = true;
      }
    });
  },
  methods: {
    setVisited() {
      if (supportsLocalStorage()) {
        localStorage.setItem(this.storageName, true);
      } else {
        set(this.storageName, true);
      }
    },
    getVisited() {
      if (supportsLocalStorage()) {
        return localStorage.getItem(this.storageName);
      } else {
        return get(this.storageName);
      }
    },
    close() {
      this.setVisited();
      this.isOpen = false;
      installEvent = null;
    },
    install() {
      this.isOpen = false;
      installEvent.prompt();
      installEvent.userChoice.then((choice) => {
        if (choice.outcome !== "accepted") {
          this.setVisited();
        }
        installEvent = null;
      });
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrossIcon = resolveComponent("CrossIcon");
  if ($data.isOpen) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: [_ctx.$style["the-install-prompt"], "alert alert--default"]
    }, _attrs))}><p>Do you want to <a href="#">add this app to your home screen?</a></p><button class="alert__close" type="button" aria-label="Close">`);
    _push(ssrRenderComponent(_component_CrossIcon, null, null, _parent));
    _push(`</button></div>`);
  } else {
    _push(`<!---->`);
  }
}
const cssModules$2 = {
  "$style": style0$2
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheInstallPrompt.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__cssModules", cssModules$2]]);
const breakpointXsmall$1 = "640px";
const breakpointSmall$1 = "768px";
const breakpointMedium$1 = "1024px";
const breakpointLarge$1 = "1200px";
const breakpointXlarge$1 = "1400px";
const breakpointXlarger1$1 = "1500px";
const breakpointXlarger2$1 = "1800px";
const breakpointXlarger3$1 = "2500px";
const layoutNavWidth$1 = "10rem";
const form = "_form_gmof1_13";
const field = "_field_gmof1_53";
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
  form,
  field
};
const SEARCH_PATHNAME = "search";
const _sfc_main$2 = {
  components: {
    CrossIcon
  },
  data() {
    var _a;
    return {
      query: (_a = this.$route.query.q) != null ? _a : ""
    };
  },
  computed: {
    showButton() {
      return this.$route.name === SEARCH_PATHNAME;
    }
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    goToRoute() {
      if (this.query) {
        this.$router.push({
          name: SEARCH_PATHNAME,
          query: { q: this.query }
        });
      } else {
        this.$router.push({
          path: this.$search.getSearchFromPagePath()
        });
      }
    },
    goBack() {
      this.query = "";
      this.$router.push({
        path: this.$search.getSearchFromPagePath()
      });
    },
    unFocus(event) {
      if (this.$route.name !== SEARCH_PATHNAME) {
        const target = event.relatedTarget;
        if (!(target == null ? void 0 : target.classList.contains("search-toggle"))) {
          this.query = "";
          this.$search.closeSearchForm();
        }
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CrossIcon = resolveComponent("CrossIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.form
  }, _attrs))}><form autocomplete="off"><label class="visuallyhidden" for="search"> Search </label><div class="${ssrRenderClass(_ctx.$style.field)}"><input id="search"${ssrRenderAttr("value", $data.query)} name="search" type="text" placeholder="Search for a movie, tv show or person...">`);
  if ($options.showButton) {
    _push(`<button type="button" aria-label="Close">`);
    _push(ssrRenderComponent(_component_CrossIcon, null, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form></div>`);
}
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSearchForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__cssModules", cssModules$1]]);
const GitHubIcon = "" + buildAssetsURL("git-hub.f98a535a.svg?inline");
const LinkedInIcon = "" + buildAssetsURL("linked-in.b3478899.svg?inline");
const EmailIcon = "" + buildAssetsURL("email.4d9aed6e.svg?inline");
const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const footer = "_footer_71rki_13";
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
  footer
};
const _sfc_main$1 = {
  components: {
    TwitterIcon,
    GitHubIcon,
    LinkedInIcon,
    EmailIcon
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TwitterIcon = resolveComponent("TwitterIcon");
  const _component_GitHubIcon = resolveComponent("GitHubIcon");
  const _component_LinkedInIcon = resolveComponent("LinkedInIcon");
  const _component_EmailIcon = resolveComponent("EmailIcon");
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.footer
  }, _attrs))}><p> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} The Nuxt Movies authors. All rights reserved.\xA0 . </p><p> Designed and built by Bouna Diallo, data provided by\xA0 <a target="_blank" href="https://www.themoviedb.org/" rel="noopener"> TMDb </a> . </p><ul class="nolist"><li><a href="https://twitter.com/iambounadiallo" target="_blank" aria-label="Link to Twitter account" rel="noopener">`);
  _push(ssrRenderComponent(_component_TwitterIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://github.com/Bouna2b02" target="_blank" aria-label="Link to GitHub account" rel="noopener">`);
  _push(ssrRenderComponent(_component_GitHubIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://www.linkedin.com/in/bouna-diallo/" target="_blank" aria-label="Link to LinkedIn account" rel="noopener">`);
  _push(ssrRenderComponent(_component_LinkedInIcon, null, null, _parent));
  _push(`</a></li><li><a href="mailto:bouna.diallo@epitech.eu" aria-label="Link to Email" rel="noopener">`);
  _push(ssrRenderComponent(_component_EmailIcon, null, null, _parent));
  _push(`</a></li></ul></footer>`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__cssModules", cssModules]]);
const _sfc_main = {
  components: {
    TheCookieConsent: __nuxt_component_0,
    TheInstallPrompt: __nuxt_component_1,
    TheSearchForm: __nuxt_component_2,
    TheNav: __nuxt_component_0$1,
    TheFooter: __nuxt_component_4
  },
  computed: {
    searchFormOpen() {
      return this.$search.checkSearchFormOpen();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheCookieConsent = __nuxt_component_0;
  const _component_TheInstallPrompt = __nuxt_component_1;
  const _component_TheSearchForm = __nuxt_component_2;
  const _component_TheNav = __nuxt_component_0$1;
  const _component_nuxt = resolveComponent("nuxt");
  const _component_TheFooter = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TheCookieConsent, null, null, _parent));
  _push(ssrRenderComponent(_component_TheInstallPrompt, null, null, _parent));
  if ($options.searchFormOpen) {
    _push(ssrRenderComponent(_component_TheSearchForm, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_TheNav, null, null, _parent));
  _push(ssrRenderComponent(_component_nuxt, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-f1f0b4d4.mjs.map
