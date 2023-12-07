import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-691e5b50.mjs';
import { _ as _export_sfc, c as createError } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { $fetch } from 'ohmyfetch/node';

function renderStubMessage(name2) {
  throw createError({
    fatal: true,
    statusCode: 500,
    statusMessage: `${name2} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`
  });
}
const NuxtPicture = {
  setup: () => renderStubMessage("<NuxtPicture>")
};
const name = {
  computed: {
    name() {
      return this.item.title ? this.item.title : this.item.name;
    }
  }
};
const stars = {
  computed: {
    stars() {
      if (this.item.vote_average) {
        return this.item.vote_average * 10;
      }
    }
  }
};
const yearStart = {
  computed: {
    yearStart() {
      const date = this.item.release_date ? this.item.release_date : this.item.first_air_date;
      if (date) {
        return date.split("-")[0];
      }
    }
  }
};
const yearEnd = {
  computed: {
    yearEnd() {
      const date = this.item.last_air_date;
      if (date) {
        return date.split("-")[0];
      }
    }
  }
};
const backdrop = {
  computed: {
    backdrop() {
      return this.item.backdrop_path;
    }
  }
};
const cert = {
  computed: {
    cert() {
      if (this.item.release_dates) {
        const releases = this.item.release_dates.results.find(
          (release) => release.iso_3166_1 === process.env.API_COUNTRY || release.iso_3166_1 === "US"
        );
        if (!releases) {
          return null;
        }
        const item = releases.release_dates.find((date) => date.certification !== "");
        if (item) {
          return item.certification;
        }
      } else if (this.item.content_ratings) {
        const releases = this.item.content_ratings.results.find(
          (release) => release.iso_3166_1 === process.env.API_COUNTRY || release.iso_3166_1 === "US"
        );
        if (!releases) {
          return null;
        }
        return releases.rating;
      }
    }
  }
};
const trailer = {
  computed: {
    trailer() {
      let videos = this.item.videos.results;
      if (!videos.length) {
        return null;
      }
      videos = videos.find((video) => video.type === "Trailer");
      if (!videos) {
        return null;
      }
      return [{
        name: videos.name,
        src: `https://www.youtube.com/embed/${videos.key}?rel=0&showinfo=0&autoplay=1`
      }];
    }
  }
};
const directors = {
  computed: {
    directors() {
      const people = this.item.credits.crew;
      if (people) {
        return people.filter(
          (person) => person.job === "Director"
        ).map(
          (person) => `<a href="/person/${person.id}">${person.name}</a>`
        ).join(", ");
      }
    }
  }
};
const creators = {
  computed: {
    creators() {
      const people = this.item.created_by;
      if (people) {
        return people.map((person) => `<a href="/person/${person.id}">${person.name}</a>`).join(", ");
      }
    }
  }
};
const PlaceholderIcon = "" + buildAssetsURL("placeholder.b2016c80.svg?inline");
const _sfc_main = {
  components: {
    PlaceholderIcon
  },
  mixins: [
    name,
    stars
  ],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    poster() {
      return this.item.poster_path || this.item.profile_path;
    },
    // TODO: `tv` and `movie` are hardcoded
    media() {
      if (this.item.media_type) {
        return this.item.media_type;
      } else if (this.item.name) {
        return "tv";
      } else {
        return "movie";
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_nuxt_picture = NuxtPicture;
  const _component_PlaceholderIcon = resolveComponent("PlaceholderIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "card__link",
    to: { name: `${$options.media}-id`, params: { id: $props.item.id } }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="card__img"${_scopeId}>`);
        if ($options.poster) {
          _push2(ssrRenderComponent(_component_nuxt_picture, {
            loading: "lazy",
            width: "370",
            height: "556",
            sizes: "xsmall:20vw small:20vw xlarger1:14vw xlarger2:12vw xlarger3:500",
            alt: _ctx.name,
            src: $options.poster
          }, null, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_PlaceholderIcon, null, null, _parent2, _scopeId));
        }
        _push2(`</div><h2 class="card__name"${_scopeId}>${ssrInterpolate(_ctx.name)}</h2>`);
        if ($options.media !== "person" && (_ctx.stars || $props.item.vote_average)) {
          _push2(`<div class="card__rating"${_scopeId}>`);
          if (_ctx.stars) {
            _push2(`<div class="card__stars"${_scopeId}><div style="${ssrRenderStyle({ width: `${_ctx.stars}%` })}"${_scopeId}></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          if ($props.item.vote_average) {
            _push2(`<div class="card__vote"${_scopeId}>${ssrInterpolate($props.item.vote_average | _ctx.rating)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "card__img" }, [
            $options.poster ? (openBlock(), createBlock(_component_nuxt_picture, {
              key: 0,
              loading: "lazy",
              width: "370",
              height: "556",
              sizes: "xsmall:20vw small:20vw xlarger1:14vw xlarger2:12vw xlarger3:500",
              alt: _ctx.name,
              src: $options.poster
            }, null, 8, ["alt", "src"])) : (openBlock(), createBlock(_component_PlaceholderIcon, { key: 1 }))
          ]),
          createVNode("h2", { class: "card__name" }, toDisplayString(_ctx.name), 1),
          $options.media !== "person" && (_ctx.stars || $props.item.vote_average) ? (openBlock(), createBlock("div", {
            key: 0,
            class: "card__rating"
          }, [
            _ctx.stars ? (openBlock(), createBlock("div", {
              key: 0,
              class: "card__stars"
            }, [
              createVNode("div", {
                style: { width: `${_ctx.stars}%` }
              }, null, 4)
            ])) : createCommentVNode("", true),
            $props.item.vote_average ? (openBlock(), createBlock("div", {
              key: 1,
              class: "card__vote"
            }, toDisplayString($props.item.vote_average | _ctx.rating), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const TMDB_API_URL = "https://api.themoviedb.org/3";
const TMDB_API_PARAMS = {
  api_key: "eefca98d6d5f9a34c38cad9e53ad252d",
  language: process.env.API_LANG
};
const LISTS = {
  MOVIE: [
    { TITLE: "Trending Movies", QUERY: "trending" },
    { TITLE: "Popular Movies", QUERY: "popular" },
    { TITLE: "Top Rated Movies", QUERY: "top_rated" },
    { TITLE: "Upcoming Movies", QUERY: "upcoming" },
    { TITLE: "Now Playing Movies", QUERY: "now_playing" }
  ],
  TV: [
    { TITLE: "Trending TV Shows", QUERY: "trending" },
    { TITLE: "Popular TV Shows", QUERY: "popular" },
    { TITLE: "Top Rated TV Shows", QUERY: "top_rated" },
    { TITLE: "Currently Airing TV Shows", QUERY: "on_the_air" },
    { TITLE: "TV Shows Airing Today", QUERY: "airing_today" }
  ]
};
const LISTS$1 = LISTS;
function fetchTMD(url, params) {
  return $fetch(url, {
    baseURL: TMDB_API_URL,
    params: { ...TMDB_API_PARAMS, ...params }
  });
}
function getListItem(type, query) {
  if (type === "movie") {
    return LISTS$1.MOVIE.find((list) => list.QUERY === query);
  } else if (type === "tv") {
    return LISTS$1.TV.find((list) => list.QUERY === query);
  }
}
function getMovies(query, page = 1) {
  return fetchTMD(`movie/${query}`, { page });
}
function getMovie(id) {
  return fetchTMD(`movie/${id}`, {
    append_to_response: "videos,credits,images,external_ids,release_dates",
    include_image_language: "en"
  });
}
function getMovieRecommended(id, page = 1) {
  return fetchTMD(`movie/${id}/recommendations`, { page });
}
function getTvShows(query, page = 1) {
  return fetchTMD(`tv/${query}`, { page });
}
function getTvShow(id) {
  return fetchTMD(`tv/${id}`, {
    append_to_response: "videos,credits,images,external_ids,content_ratings",
    include_image_language: "en"
  });
}
function getTvShowRecommended(id, page = 1) {
  return fetchTMD(`tv/${id}/recommendations`, { page });
}
function getTvShowEpisodes(id, season) {
  return fetchTMD(`tv/${id}/season/${season}`);
}
function getTrending(media, page = 1) {
  return fetchTMD(`trending/${media}/week`, { page });
}
function getMediaByGenre(media, genre, page = 1) {
  return fetchTMD(`discover/${media}`, {
    with_genres: genre,
    page
  });
}
function getCredits(id, type) {
  return fetchTMD(`person/${id}/${type}`, {
    params: {
      api_key: process.env.API_KEY,
      language: process.env.API_LANG
    }
  });
}
function getGenreList(media) {
  return fetchTMD(`genre/${media}/list`, { language: void 0 }).then((res) => res.genres);
}
function getPerson(id) {
  return fetchTMD(`person/${id}`, {
    append_to_response: "images,combined_credits,external_ids",
    include_image_language: "en"
  });
}
function search(query, page = 1) {
  return fetchTMD("search/multi", { query, page });
}
function getYouTubeVideo(id) {
  return $fetch("https://www.googleapis.com/youtube/v3/videos", {
    params: {
      key: process.env.API_YOUTUBE_KEY,
      id,
      part: "contentDetails"
    }
  });
}

export { NuxtPicture as N, PlaceholderIcon as P, __nuxt_component_0 as _, getGenreList as a, getTrending as b, getMovie as c, getTvShow as d, getListItem as e, getMovieRecommended as f, getMediaByGenre as g, directors as h, getMovies as i, getPerson as j, getCredits as k, yearEnd as l, getTvShowRecommended as m, name as n, creators as o, getTvShowEpisodes as p, getYouTubeVideo as q, getTvShows as r, search as s, stars as t, cert as u, backdrop as v, trailer as w, yearStart as y };
//# sourceMappingURL=tmdbAPI-af98a87a.mjs.map
