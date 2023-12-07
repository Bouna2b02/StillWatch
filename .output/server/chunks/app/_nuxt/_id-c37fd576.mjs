import { _ as __nuxt_component_0 } from './TheTopNav-aeb8f3b0.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1 } from './ListingCarousel-9c380740.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_6, b as __nuxt_component_1$1 } from './Images-c3714aee.mjs';
import { n as name$1, y as yearStart, l as yearEnd, d as getTvShow, m as getTvShowRecommended, P as PlaceholderIcon, o as creators, p as getTvShowEpisodes, N as NuxtPicture } from './tmdbAPI-af98a87a.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_5, a as __nuxt_component_4 } from './Videos-6f826d74.mjs';
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
import './nuxt-link-691e5b50.mjs';
import './Modal-6841df79.mjs';
import './Functions-2f230c98.mjs';
import './cross-c4bc44d6.mjs';
import 'smoothscroll-polyfill';
import './twitter-1c70975f.mjs';
import 'ohmyfetch/node';
import 'vue-router';

const breakpointXsmall$2 = "640px";
const breakpointSmall$2 = "768px";
const breakpointMedium$2 = "1024px";
const breakpointLarge$2 = "1200px";
const breakpointXlarge$2 = "1400px";
const breakpointXlarger1$2 = "1500px";
const breakpointXlarger2$2 = "1800px";
const breakpointXlarger3$2 = "2500px";
const layoutNavWidth$2 = "10rem";
const info = "_info_11ty2_14";
const left = "_left_11ty2_19";
const right = "_right_11ty2_37";
const poster = "_poster_11ty2_42";
const overview$1 = "_overview_11ty2_51";
const title = "_title_11ty2_63";
const stats = "_stats_11ty2_75";
const label = "_label_11ty2_110";
const value = "_value_11ty2_122";
const external = "_external_11ty2_126";
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
  info,
  left,
  right,
  poster,
  overview: overview$1,
  title,
  stats,
  label,
  value,
  external
};
const _sfc_main$3 = {
  components: {
    ExternalLinks: __nuxt_component_1$1,
    PlaceholderIcon
  },
  mixins: [
    name$1,
    creators
  ],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    poster() {
      return this.item.poster_path;
    }
  },
  created() {
    if (this.item.homepage) {
      this.item.external_ids.homepage = this.item.homepage;
    }
  },
  methods: {
    formatGenres(genres) {
      return genres.map((genre) => `<a href="/genre/${genre.id}/tv">${genre.name}</a>`).join(", ");
    },
    formatRunTime(times) {
      return times.map((time) => `${time}m`).join(", ");
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_picture = NuxtPicture;
  const _component_PlaceholderIcon = resolveComponent("PlaceholderIcon");
  const _component_ExternalLinks = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["spacing", _ctx.$style.info]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.left)}"><div class="${ssrRenderClass(_ctx.$style.poster)}">`);
  if ($options.poster) {
    _push(ssrRenderComponent(_component_nuxt_picture, {
      width: "370",
      height: "556",
      sizes: "large:20vw xlarge:20vw xlarge1:18vw xlarge3:780",
      alt: _ctx.name,
      src: $options.poster
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_PlaceholderIcon, null, null, _parent));
  }
  _push(`</div></div><div class="${ssrRenderClass(_ctx.$style.right)}">`);
  if ($props.item.overview) {
    _push(`<div class="${ssrRenderClass(_ctx.$style.overview)}"><h2 class="${ssrRenderClass(_ctx.$style.title)}"> Storyline </h2><div>${$props.item.overview}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.$style.stats)}"><ul class="nolist">`);
  if ($props.item.first_air_date) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> First Aired </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.first_air_date | _ctx.fullDate)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.last_air_date) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Last Aired </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.last_air_date | _ctx.fullDate)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.episode_run_time && $props.item.episode_run_time.length) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Runtime </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($options.formatRunTime($props.item.episode_run_time))}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.creators) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Creator </div><div class="${ssrRenderClass(_ctx.$style.value)}">${_ctx.creators}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.genres && $props.item.genres.length) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Genre </div><div class="${ssrRenderClass(_ctx.$style.value)}">${$options.formatGenres($props.item.genres)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.number_of_seasons) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Seasons </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.number_of_seasons)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.number_of_episodes) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Episodes </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.number_of_episodes)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.status) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Status </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.status)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.original_language) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Language </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.original_language | _ctx.fullLang)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.item.networks && $props.item.networks.length) {
    _push(`<li><div class="${ssrRenderClass(_ctx.$style.label)}"> Network </div><div class="${ssrRenderClass(_ctx.$style.value)}">${ssrInterpolate($props.item.networks | _ctx.arrayToList)}</div></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div><div class="${ssrRenderClass(_ctx.$style.external)}">`);
  _push(ssrRenderComponent(_component_ExternalLinks, {
    links: $props.item.external_ids
  }, null, _parent));
  _push(`</div></div></div>`);
}
const cssModules$2 = {
  "$style": style0$2
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tv/TvInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__cssModules", cssModules$2]]);
const breakpointXsmall$1 = "640px";
const breakpointSmall$1 = "768px";
const breakpointMedium$1 = "1024px";
const breakpointLarge$1 = "1200px";
const breakpointXlarge$1 = "1400px";
const breakpointXlarger1$1 = "1500px";
const breakpointXlarger2$1 = "1800px";
const breakpointXlarger3$1 = "2500px";
const layoutNavWidth$1 = "10rem";
const item = "_item_19mp5_13";
const image = "_image_19mp5_46";
const name = "_name_19mp5_55";
const overview = "_overview_19mp5_64";
const aired = "_aired_19mp5_71";
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
  name,
  overview,
  aired
};
const _sfc_main$2 = {
  components: {
    PlaceholderIcon
  },
  props: {
    episode: {
      type: Object,
      required: true
    }
  },
  computed: {
    poster() {
      return this.episode.still_path;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_picture = NuxtPicture;
  const _component_PlaceholderIcon = resolveComponent("PlaceholderIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$style.item
  }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.image)}">`);
  if ($options.poster) {
    _push(ssrRenderComponent(_component_nuxt_picture, {
      loading: "lazy",
      width: "400",
      height: "225",
      sizes: "xsmall:93vw small:46vw medium:45vw large:30vw xlarge:28vw xlarge1:21vw xlarge3:780",
      alt: $props.episode.name,
      src: $options.poster
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_PlaceholderIcon, null, null, _parent));
  }
  _push(`</div><h2 class="${ssrRenderClass(_ctx.$style.name)}"><strong>E${ssrInterpolate($props.episode.episode_number | _ctx.numberWithDoubleDigits)}</strong> ${ssrInterpolate($props.episode.name)}</h2><div class="${ssrRenderClass(_ctx.$style.overview)}">${ssrInterpolate($props.episode.overview | _ctx.truncate(300))}</div>`);
  if ($props.episode.air_date) {
    _push(`<div class="${ssrRenderClass(_ctx.$style.aired)}">${ssrInterpolate($props.episode.air_date | _ctx.fullDate)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const cssModules$1 = {
  "$style": style0$1
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tv/EpisodesItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const EpisodesItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__cssModules", cssModules$1]]);
const breakpointXsmall = "640px";
const breakpointSmall = "768px";
const breakpointMedium = "1024px";
const breakpointLarge = "1200px";
const breakpointXlarge = "1400px";
const breakpointXlarger1 = "1500px";
const breakpointXlarger2 = "1800px";
const breakpointXlarger3 = "2500px";
const layoutNavWidth = "10rem";
const head = "_head_1w9zh_13";
const count = "_count_1w9zh_27";
const items = "_items_1w9zh_38";
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
const _sfc_main$1 = {
  components: {
    EpisodesItem
  },
  props: {
    numberOfSeasons: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      activeSeason: this.numberOfSeasons,
      activeEpisodes: null
    };
  },
  computed: {
    episodeCount() {
      return `${this.activeEpisodes.length} ${this.activeEpisodes.length > 1 ? "Episodes" : "Episode"}`;
    },
    seasons() {
      const seasons = [];
      for (let index = 0; index < this.numberOfSeasons; index++) {
        seasons.push({
          season: index + 1,
          episodes: null
        });
      }
      seasons.sort((a, b) => a.season > b.season ? -1 : 1);
      return seasons;
    }
  },
  // TODO: should use fetch hook to avoid layout shifting
  mounted() {
    this.getEpisodes();
  },
  methods: {
    getEpisodes() {
      const season = this.seasons.find((season2) => season2.season === this.activeSeason);
      if (season.episodes) {
        this.activeEpisodes = season.episodes;
      } else {
        getTvShowEpisodes(this.$route.params.id, this.activeSeason).then((response) => {
          season.episodes = response.episodes;
          this.activeEpisodes = season.episodes;
        });
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_EpisodesItem = resolveComponent("EpisodesItem");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "spacing" }, _attrs))}><div class="${ssrRenderClass(_ctx.$style.head)}">`);
  if ($options.seasons.length > 1) {
    _push(`<select><!--[-->`);
    ssrRenderList($options.seasons, (season) => {
      _push(`<option${ssrRenderAttr("value", season.season)}> Season ${ssrInterpolate(season.season)}</option>`);
    });
    _push(`<!--]--></select>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeEpisodes) {
    _push(`<strong class="${ssrRenderClass(_ctx.$style.count)}">${ssrInterpolate($options.episodeCount)}</strong>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.activeEpisodes) {
    _push(`<div class="${ssrRenderClass(_ctx.$style.items)}"><!--[-->`);
    ssrRenderList($data.activeEpisodes, (episode) => {
      _push(ssrRenderComponent(_component_EpisodesItem, {
        key: `episode-${episode.id}`,
        episode
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tv/Episodes.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Episodes = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__cssModules", cssModules]]);
const _sfc_main = {
  components: {
    TheTopNav: __nuxt_component_0,
    Hero: __nuxt_component_0$1,
    MediaNav: __nuxt_component_2,
    TvInfo: __nuxt_component_3,
    Videos: __nuxt_component_5,
    Images: __nuxt_component_6,
    Credits: __nuxt_component_4,
    Episodes,
    ListingCarousel: __nuxt_component_1
  },
  mixins: [
    name$1,
    yearStart,
    yearEnd
  ],
  async asyncData({
    params,
    error
  }) {
    try {
      const item2 = await getTvShow(params.id);
      if (item2.adult) {
        error({ message: "This tv show is not available" });
      } else {
        return { item: item2 };
      }
    } catch {
      error({ message: "Page not found" });
    }
  },
  data() {
    return {
      menu: [],
      activeMenu: "overview",
      recommendedItems: null
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
      if (this.item.status === "Ended" && this.yearStart && this.yearEnd) {
        return `${this.name} (TV Series ${this.yearStart}-${this.yearEnd})`;
      } else if (this.yearStart) {
        return `${this.name} (TV Series ${this.yearStart}-)`;
      } else {
        return `${this.name} (TV Series)`;
      }
    },
    metaDescription() {
      if (this.item.overview) {
        return this.truncate(this.item.overview, 200);
      } else {
        return "";
      }
    },
    metaImage() {
      if (!this.item.poster_path) {
        return "";
      }
      return this.$img(this.item.poster_path, { width: 500 });
    },
    creditsShown() {
      var _a;
      const credits = this.item.credits;
      return (_a = credits == null ? void 0 : credits.cast) == null ? void 0 : _a.length;
    },
    episodesShown() {
      return this.item.number_of_seasons;
    },
    videosShown() {
      var _a;
      const videos = this.item.videos;
      return (_a = videos == null ? void 0 : videos.results) == null ? void 0 : _a.length;
    },
    imagesShown() {
      var _a, _b;
      const images = this.item.images;
      return ((_a = images == null ? void 0 : images.backdrops) == null ? void 0 : _a.length) || ((_b = images == null ? void 0 : images.posters) == null ? void 0 : _b.length);
    },
    recommendedItemsShown() {
      var _a;
      return (_a = this.recommendedItems) == null ? void 0 : _a.results.length;
    }
  },
  created() {
    this.createMenu();
    this.initRecommended();
  },
  methods: {
    truncate(string, length) {
      return this.$options.filters.truncate(string, length);
    },
    createMenu() {
      const menu = [];
      menu.push("Overview");
      if (this.episodesShown) {
        menu.push("Episodes");
      }
      if (this.videosShown) {
        menu.push("Videos");
      }
      if (this.imagesShown) {
        menu.push("Photos");
      }
      this.menu = menu;
    },
    navClicked(label2) {
      this.activeMenu = label2;
    },
    initRecommended() {
      if (this.recommendedItems !== null) {
        return;
      }
      getTvShowRecommended(this.$route.params.id).then((response) => {
        this.recommendedItems = response;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheTopNav = __nuxt_component_0;
  const _component_Hero = __nuxt_component_0$1;
  const _component_MediaNav = __nuxt_component_2;
  const _component_TvInfo = __nuxt_component_3;
  const _component_Credits = __nuxt_component_4;
  const _component_Episodes = resolveComponent("Episodes");
  const _component_Videos = __nuxt_component_5;
  const _component_Images = __nuxt_component_6;
  const _component_ListingCarousel = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheTopNav, { title: $options.metaTitle }, null, _parent));
  _push(ssrRenderComponent(_component_Hero, { item: _ctx.item }, null, _parent));
  _push(ssrRenderComponent(_component_MediaNav, {
    menu: $data.menu,
    onClicked: $options.navClicked
  }, null, _parent));
  if ($data.activeMenu === "overview") {
    _push(`<!--[-->`);
    _push(ssrRenderComponent(_component_TvInfo, { item: _ctx.item }, null, _parent));
    if ($options.creditsShown) {
      _push(ssrRenderComponent(_component_Credits, {
        people: _ctx.item.credits.cast
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeMenu === "episodes" && $options.episodesShown) {
    _push(ssrRenderComponent(_component_Episodes, {
      "number-of-seasons": _ctx.item.number_of_seasons
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.activeMenu === "videos" && $options.videosShown) {
    _push(ssrRenderComponent(_component_Videos, {
      videos: _ctx.item.videos.results
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.activeMenu === "photos" && $options.imagesShown) {
    _push(`<!--[-->`);
    if (_ctx.item.images.backdrops.length) {
      _push(ssrRenderComponent(_component_Images, {
        title: "Backdrops",
        type: "backdrop",
        images: _ctx.item.images.backdrops
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if (_ctx.item.images.posters.length) {
      _push(ssrRenderComponent(_component_Images, {
        title: "Posters",
        type: "poster",
        images: _ctx.item.images.posters
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($options.recommendedItemsShown) {
    _push(ssrRenderComponent(_component_ListingCarousel, {
      title: "More Like This",
      items: $data.recommendedItems
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tv/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-c37fd576.mjs.map
