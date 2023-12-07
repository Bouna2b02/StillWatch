import { _ as __nuxt_component_0 } from './TheTopNav-aeb8f3b0.mjs';
import { j as getPerson, P as PlaceholderIcon, k as getCredits, N as NuxtPicture } from './tmdbAPI-af98a87a.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_6, b as __nuxt_component_1$2 } from './Images-c3714aee.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1$1 } from './Listing-c98e4827.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-691e5b50.mjs';
import './chevron-left-0aa0ae99.mjs';
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
import 'ohmyfetch/node';
import './twitter-1c70975f.mjs';
import './Modal-6841df79.mjs';
import './Functions-2f230c98.mjs';
import './cross-c4bc44d6.mjs';
import 'vue-router';
import './loading-spinner-5deacaa0.mjs';

const breakpointXsmall$3 = "640px";
const breakpointSmall$3 = "768px";
const breakpointMedium$3 = "1024px";
const breakpointLarge$3 = "1200px";
const breakpointXlarge$3 = "1400px";
const breakpointXlarger1$3 = "1500px";
const breakpointXlarger2$3 = "1800px";
const breakpointXlarger3$3 = "2500px";
const layoutNavWidth$3 = "10rem";
const info = "_info_12epz_14";
const left = "_left_12epz_19";
const right = "_right_12epz_37";
const poster = "_poster_12epz_42";
const overview = "_overview_12epz_51";
const title$1 = "_title_12epz_75";
const stats = "_stats_12epz_87";
const label = "_label_12epz_122";
const value = "_value_12epz_134";
const external = "_external_12epz_138";
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
  info,
  left,
  right,
  poster,
  overview,
  title: title$1,
  stats,
  label,
  value,
  external
};
const _sfc_main$4 = {
  components: {
    ExternalLinks: __nuxt_component_1$2,
    PlaceholderIcon
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    avatar() {
      return this.person.profile_path;
    },
    age() {
      const born = this.person.birthday;
      const died = this.person.deathday;
      if (born && !died) {
        return this.getAge(born);
      } else if (born && died) {
        return this.getAge(born, died);
      } else {
        return false;
      }
    }
  },
  created() {
    if (this.person.homepage) {
      this.person.external_ids.homepage = this.person.homepage;
    }
    this.AVATAR_SIZES = "large:20vw xlarge:20vw xlarge1:18vw xlarge3:780";
    this.AVATAR_WIDTH = 370;
    this.AVATAR_HEIGHT = 556;
  },
  methods: {
    formatContent(string) {
      return string.split("\n").filter((section) => section !== "").map((section) => `<p>${section}</p>`).join("");
    },
    getAge(born, died) {
      const startDate = new Date(born);
      let endDate;
      let age;
      if (died) {
        endDate = new Date(died);
      } else {
        endDate = /* @__PURE__ */ new Date();
      }
      const month = endDate.getMonth() - startDate.getMonth();
      age = endDate.getFullYear() - startDate.getFullYear();
      if (month < 0 || month === 0 && endDate.getDate() < startDate.getDate()) {
        age--;
      }
      return age;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_picture = NuxtPicture;
  const _component_PlaceholderIcon = resolveComponent("PlaceholderIcon");
  const _component_ExternalLinks = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["spacing", _ctx.$style.info]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.left)}"><div class="${ssrRenderClass(_ctx.$style.poster)}">`);
  if ($options.avatar) {
    _push(ssrRenderComponent(_component_nuxt_picture, {
      width: _ctx.AVATAR_WIDTH,
      height: _ctx.AVATAR_HEIGHT,
      sizes: _ctx.AVATAR_SIZES,
      alt: $props.person.name,
      src: $options.avatar
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_PlaceholderIcon, null, null, _parent));
  }
  _push(`</div></div><div class="${ssrRenderClass(_ctx.$style.right)}"><div class="${ssrRenderClass(_ctx.$style.overview)}"><h2 class="${ssrRenderClass(_ctx.$style.title)}">${ssrInterpolate($props.person.name)}</h2>`);
  if ($props.person.biography) {
    _push(`<div>`);
    if ($options.avatar) {
      _push(ssrRenderComponent(_component_nuxt_picture, {
        width: _ctx.AVATAR_WIDTH,
        height: _ctx.AVATAR_HEIGHT,
        sizes: _ctx.AVATAR_SIZES,
        alt: $props.person.name,
        src: $options.avatar
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<div>${$options.formatContent($props.person.biography)}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass(_ctx.$style.stats)}"><ul class="nolist">`);
  if ($props.person.known_for_department) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Known For </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.person.known_for_department)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.person.birthday) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Born </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.person.birthday | _ctx.fullDate)} `);
    if (!$props.person.deathday) {
      _push(`<span>(age ${ssrInterpolate($options.age)})</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.person.place_of_birth) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Place of Birth </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.person.place_of_birth)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.person.deathday) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Died </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.person.deathday | _ctx.fullDate)} `);
    if ($props.person.birthday) {
      _push(`<span>(aged ${ssrInterpolate($options.age)})</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div><div class="${ssrRenderClass(_ctx.$style.external)}">`);
  _push(ssrRenderComponent(_component_ExternalLinks, {
    media: "person",
    links: $props.person.external_ids
  }, null, _parent));
  _push(`</div></div></div>`);
}
const cssModules$3 = {
  "$style": style0$3
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/person/PersonInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__cssModules", cssModules$3]]);
const breakpointXsmall$2 = "640px";
const breakpointSmall$2 = "768px";
const breakpointMedium$2 = "1024px";
const breakpointLarge$2 = "1200px";
const breakpointXlarge$2 = "1400px";
const breakpointXlarger1$2 = "1500px";
const breakpointXlarger2$2 = "1800px";
const breakpointXlarger3$2 = "2500px";
const layoutNavWidth$2 = "10rem";
const item = "_item_1kly9_13";
const year = "_year_1kly9_26";
const episodes = "_episodes_1kly9_30";
const role = "_role_1kly9_34";
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
  item,
  year,
  episodes,
  role
};
const _sfc_main$3 = {
  props: {
    year: {
      type: String,
      required: true
    },
    credit: {
      type: Object,
      required: true
    }
  },
  computed: {
    media() {
      if (this.credit.media_type) {
        return this.credit.media_type;
      } else if (this.credit.name) {
        return "tv";
      } else {
        return "movie";
      }
    },
    name() {
      return this.credit.title || this.credit.name;
    },
    role() {
      const character = this.credit.character;
      const job = this.credit.job;
      if (character) {
        return `as ${character}`;
      } else if (job) {
        return `as ${job}`;
      } else {
        return false;
      }
    },
    episodes() {
      const episodes2 = this.credit.episode_count;
      if (episodes2) {
        if (episodes2 > 1) {
          return `(${episodes2} episodes)`;
        } else {
          return `(${episodes2} episode)`;
        }
      } else {
        return false;
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<tr${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.item
  }, _attrs))}><td class="${ssrRenderClass(_ctx.$style.year)}">${ssrInterpolate($props.year || "\u2014")}</td><td>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: { name: `${$options.media}-id`, params: { id: $props.credit.id } }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<strong${_scopeId}>${ssrInterpolate($options.name)}</strong>`);
        if ($options.episodes) {
          _push2(`<span class="${ssrRenderClass(_ctx.$style.episodes)}"${_scopeId}>${ssrInterpolate($options.episodes)}</span>`);
        } else {
          _push2(`<!---->`);
        }
        if ($options.role) {
          _push2(`<span class="${ssrRenderClass(_ctx.$style.role)}"${_scopeId}>${ssrInterpolate($options.role)}</span>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("strong", null, toDisplayString($options.name), 1),
          $options.episodes ? (openBlock(), createBlock("span", {
            key: 0,
            class: _ctx.$style.episodes
          }, toDisplayString($options.episodes), 3)) : createCommentVNode("", true),
          $options.role ? (openBlock(), createBlock("span", {
            key: 1,
            class: _ctx.$style.role
          }, toDisplayString($options.role), 3)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr>`);
}
const cssModules$2 = {
  "$style": style0$2
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/person/CreditsHistoryGroupItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CreditsHistoryGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__cssModules", cssModules$2]]);
const breakpointXsmall$1 = "640px";
const breakpointSmall$1 = "768px";
const breakpointMedium$1 = "1024px";
const breakpointLarge$1 = "1200px";
const breakpointXlarge$1 = "1400px";
const breakpointXlarger1$1 = "1500px";
const breakpointXlarger2$1 = "1800px";
const breakpointXlarger3$1 = "2500px";
const layoutNavWidth$1 = "10rem";
const group = "_group_tiipm_13";
const row = "_row_tiipm_17";
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
  group,
  row
};
const _sfc_main$2 = {
  components: {
    CreditsHistoryGroupItem
  },
  props: {
    group: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CreditsHistoryGroupItem = resolveComponent("CreditsHistoryGroupItem");
  _push(`<tr${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.group
  }, _attrs))}><td class="${ssrRenderClass(_ctx.$style.row)}"><table><tbody><!--[-->`);
  ssrRenderList($props.group.credits, (credit) => {
    _push(ssrRenderComponent(_component_CreditsHistoryGroupItem, {
      key: `credit-${credit.credit_id}`,
      year: $props.group.year,
      credit
    }, null, _parent));
  });
  _push(`<!--]--></tbody></table></td></tr>`);
}
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/person/CreditsHistoryGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CreditsHistoryGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__cssModules", cssModules$1]]);
const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const head = "_head_1kz1l_13";
const filter = "_filter_1kz1l_19";
const category = "_category_1kz1l_33";
const title = "_title_1kz1l_37";
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
  filter,
  category,
  title
};
const _sfc_main$1 = {
  components: {
    CreditsHistoryGroup
  },
  props: {
    credits: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      active_media: "combined_credits",
      active_category: "all",
      categories: [],
      active_credits: null,
      combined_credits: [],
      movie_credits: [],
      tv_credits: []
    };
  },
  created() {
    const cast = this.handleCast(this.credits.cast);
    const crew = this.handleCrew(this.credits.crew);
    if (cast) {
      this.$data[this.active_media].push({ name: "Acting", groups: cast });
    }
    if (crew) {
      this.$data[this.active_media] = [...this.$data[this.active_media], ...crew];
    }
    this.active_credits = this.$data[this.active_media];
    this.categories = this.getCategories();
  },
  methods: {
    handleCast(items) {
      if (!(items == null ? void 0 : items.length)) {
        return;
      }
      let groups = this.groupItems(items);
      const blankGroup = groups.find((group2) => group2.year === "");
      if (blankGroup) {
        groups = groups.filter((group2) => group2.year !== "");
      }
      this.sortGroups(groups);
      if (blankGroup) {
        groups.unshift(blankGroup);
      }
      groups.forEach((group2) => this.sortCredits(group2.credits));
      return groups;
    },
    handleCrew(items) {
      if (!(items == null ? void 0 : items.length)) {
        return;
      }
      const categories = this.createCategories(items);
      categories.forEach((category2) => {
        let groups = this.groupItems(category2.groups);
        const blankGroup = groups.find((group2) => group2.year === "");
        if (blankGroup) {
          groups = groups.filter((group2) => group2.year !== "");
        }
        this.sortGroups(groups);
        if (blankGroup) {
          groups.unshift(blankGroup);
        }
        groups.forEach((group2) => this.sortCredits(group2.credits));
        category2.groups = groups;
      });
      return categories;
    },
    getCategories() {
      return this.active_credits.map((category2) => category2.name);
    },
    getCredits() {
      var _a;
      const media = this.active_media;
      if ((_a = this.$data[media]) == null ? void 0 : _a.length) {
        this.active_credits = this.$data[media];
        this.active_category = "all";
        this.categories = this.getCategories();
      } else {
        getCredits(this.$route.params.id, media).then((response) => {
          const cast = this.handleCast(response.cast);
          const crew = this.handleCrew(response.crew);
          if (cast) {
            this.$data[media].push({ name: "Acting", groups: cast });
          }
          if (crew) {
            this.$data[media] = [...this.$data[media], ...crew];
          }
          this.active_credits = this.$data[media];
          this.active_category = "all";
          this.categories = this.getCategories();
        });
      }
    },
    filterCredits() {
      if (this.active_category === "all") {
        this.active_credits = this.$data[this.active_media];
      } else {
        this.active_credits = this.$data[this.active_media].filter((category2) => category2.name.toLowerCase() === this.active_category);
      }
    },
    createCategories(items) {
      const categories = [];
      items.forEach((item2) => {
        const exists = categories.find((category2) => category2.name === item2.department);
        if (exists) {
          exists.groups.push(item2);
        } else {
          categories.push({
            name: item2.department,
            groups: [item2]
          });
        }
      });
      return categories;
    },
    groupItems(items) {
      return items.reduce(function(arr, current) {
        var _a;
        const date = current.release_date || current.first_air_date;
        const year2 = (_a = date == null ? void 0 : date.split("-")[0]) != null ? _a : "";
        const exists = arr.find((item2) => item2.year === year2);
        if (exists) {
          exists.credits.push(current);
        } else {
          arr.push({
            year: year2,
            credits: [current]
          });
        }
        return arr;
      }, []);
    },
    sortGroups(items) {
      return items.sort((a, b) => a.year > b.year ? -1 : 1);
    },
    sortCredits(items) {
      return items.sort((a, b) => {
        const aDate = a.release_date ? a.release_date : a.first_air_date;
        const bDate = b.release_date ? b.release_date : b.first_air_date;
        if (aDate > bDate) {
          return -1;
        } else if (aDate < bDate) {
          return 1;
        }
        return 0;
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CreditsHistoryGroup = resolveComponent("CreditsHistoryGroup");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spacing" }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.head)}"><div class="${ssrRenderClass(_ctx.$style.filter)}"><label for="credits_category"> Department </label><select id="credits_category"${ssrIncludeBooleanAttr(!$data.categories.length || $data.categories.length === 1) ? " disabled" : ""}><option value="all"${ssrIncludeBooleanAttr(Array.isArray($data.active_category) ? ssrLooseContain($data.active_category, "all") : ssrLooseEqual($data.active_category, "all")) ? " selected" : ""}> All </option><!--[-->`);
  ssrRenderList($data.categories, (category2) => {
    _push(`<option${ssrRenderAttr("value", category2.toLowerCase())}>${ssrInterpolate(category2)}</option>`);
  });
  _push(`<!--]--></select></div><div class="${ssrRenderClass(_ctx.$style.filter)}"><label for="credits_media"> Media </label><select id="credits_media"><option value="combined_credits"${ssrIncludeBooleanAttr(Array.isArray($data.active_media) ? ssrLooseContain($data.active_media, "combined_credits") : ssrLooseEqual($data.active_media, "combined_credits")) ? " selected" : ""}> All </option><option value="movie_credits"${ssrIncludeBooleanAttr(Array.isArray($data.active_media) ? ssrLooseContain($data.active_media, "movie_credits") : ssrLooseEqual($data.active_media, "movie_credits")) ? " selected" : ""}> Movies </option><option value="tv_credits"${ssrIncludeBooleanAttr(Array.isArray($data.active_media) ? ssrLooseContain($data.active_media, "tv_credits") : ssrLooseEqual($data.active_media, "tv_credits")) ? " selected" : ""}> TV Shows </option></select></div></div><!--[-->`);
  ssrRenderList($data.active_credits, (category2) => {
    _push(`<div class="${ssrRenderClass(_ctx.$style.category)}"><h2 class="${ssrRenderClass(_ctx.$style.title)}">${ssrInterpolate(category2.name)}</h2><table><tbody><!--[-->`);
    ssrRenderList(category2.groups, (group2) => {
      _push(ssrRenderComponent(_component_CreditsHistoryGroup, {
        key: `credit-${category2.name.toLowerCase()}-${group2.year}`,
        group: group2
      }, null, _parent));
    });
    _push(`<!--]--></tbody></table></div>`);
  });
  _push(`<!--]--></div>`);
}
const cssModules = {
  "$style": style0
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/person/CreditsHistory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CreditsHistory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__cssModules", cssModules]]);
const _sfc_main = {
  components: {
    TheTopNav: __nuxt_component_0,
    PersonInfo: __nuxt_component_1,
    MediaNav: __nuxt_component_2,
    CreditsHistory,
    Images: __nuxt_component_6,
    Listing: __nuxt_component_1$1
  },
  async asyncData({
    params,
    error
  }) {
    try {
      const person = await getPerson(params.id);
      if (person.adult) {
        error({ message: "This person is not available" });
      } else {
        return { person };
      }
    } catch {
      error({ message: "Page not found" });
    }
  },
  data() {
    return {
      menu: [],
      activeMenu: "known-for",
      knownFor: null
    };
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.metaTitle
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.metaDescription
        },
        {
          hid: "description",
          name: "description",
          content: this.metaDescription
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.metaImage
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${process.env.FRONTEND_URL}${this.$route.path}`
        }
      ],
      bodyAttrs: {
        class: "topnav-active"
      }
    };
  },
  computed: {
    metaTitle() {
      return this.person.name;
    },
    metaDescription() {
      if (this.person.biography) {
        return this.truncate(this.person.biography, 200);
      } else {
        return "";
      }
    },
    metaImage() {
      if (!this.person.profile_path) {
        return "";
      }
      return this.$img(this.person.profile_path, { width: 500 });
    },
    imagesShown() {
      var _a;
      const images = this.person.images;
      return (_a = images == null ? void 0 : images.profiles) == null ? void 0 : _a.length;
    },
    knownForShown() {
      var _a;
      return (_a = this.knownFor) == null ? void 0 : _a.results.length;
    }
  },
  created() {
    this.createMenu();
    this.initKnownFor();
  },
  methods: {
    truncate(string, length) {
      return this.$options.filters.truncate(string, length);
    },
    createMenu() {
      const menu = [];
      menu.push("Known For");
      menu.push("Credits");
      if (this.imagesShown) {
        menu.push("Photos");
      }
      this.menu = menu;
    },
    navClicked(label2) {
      this.activeMenu = label2;
    },
    initKnownFor() {
      if (this.knownFor !== null) {
        return;
      }
      const department = this.person.known_for_department;
      let results;
      if (department === "Acting") {
        results = this.person.combined_credits.cast;
      } else if (department === "Directing") {
        results = this.person.combined_credits.crew.filter((item2) => item2.department === "Directing");
      } else if (department === "Production") {
        results = this.person.combined_credits.crew.filter((item2) => item2.department === "Production");
      } else if (department === "Writing" || department === "Creator") {
        results = this.person.combined_credits.crew.filter((item2) => item2.department === "Writing");
      }
      if (!results) {
        return;
      }
      results = this.removeDuplicates(results);
      results = results.filter((item2) => {
        if (item2.adult) {
          return false;
        }
        return true;
      });
      results.sort((a, b) => a.vote_count > b.vote_count ? -1 : 1);
      this.knownFor = {
        page: 1,
        total_pages: 1,
        total_results: results.length,
        results
      };
    },
    removeDuplicates(myArr) {
      return myArr.filter((obj, pos, arr) => {
        const prop = obj.title ? "title" : "name";
        return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheTopNav = __nuxt_component_0;
  const _component_PersonInfo = __nuxt_component_1;
  const _component_MediaNav = __nuxt_component_2;
  const _component_Listing = __nuxt_component_1$1;
  const _component_CreditsHistory = resolveComponent("CreditsHistory");
  const _component_Images = __nuxt_component_6;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheTopNav, { title: $options.metaTitle }, null, _parent));
  _push(ssrRenderComponent(_component_PersonInfo, { person: _ctx.person }, null, _parent));
  _push(ssrRenderComponent(_component_MediaNav, {
    menu: $data.menu,
    onClicked: $options.navClicked
  }, null, _parent));
  if ($data.activeMenu === "known-for") {
    _push(`<!--[-->`);
    if ($options.knownForShown) {
      _push(ssrRenderComponent(_component_Listing, { items: $data.knownFor }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeMenu === "credits") {
    _push(ssrRenderComponent(_component_CreditsHistory, {
      credits: _ctx.person.combined_credits
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.activeMenu === "photos" && $options.imagesShown) {
    _push(`<!--[-->`);
    if (_ctx.person.images.profiles.length) {
      _push(ssrRenderComponent(_component_Images, {
        title: "Photos",
        type: "poster",
        images: _ctx.person.images.profiles
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/person/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-7d98eecd.mjs.map
