
<template>
  <main class="main">
    <TheTopNav :title="metaTitle" />

    <Listing
      v-if="listingShown"
      :title="title"
      :items="items"
      :loading="loading"
      @loadMore="loadMore" />
  </main>
</template>

<script>
import { getMediaByGenre, getGenreList } from '~/services/tmdbAPI';
import TheTopNav from '~/components/TheTopNav';
import Listing from '~/components/Listing';

export default {
  components: {
    TheTopNav,
    Listing
  },

  async asyncData({
    params,
    error
  }) {
    try {
      const items = await getMediaByGenre('tv', params.id);
      const genres = await getGenreList('tv');
      const genre = genres.find(genre => genre.id === parseInt(params.id));

      if (genre) {
        return {
          items,
          genre
        };
      } else {
        error({ message: 'Page not found' });
      }
    } catch {
      error({
        statusCode: 504,
        message: 'Data not available'
      });
    }
  },

  data() {
    return {
      loading: false
    };
  },

  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.metaTitle
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.FRONTEND_URL}${this.$route.path}`
        }
      ],
      bodyAttrs: {
        class: 'topnav-active'
      }
    };
  },

  computed: {
    metaTitle() {
      return this.title;
    },

    title() {
      if (this.genre) {
        return `TV Genre: ${this.genre.name}`;
      } else {
        return 'TV Genre';
      }
    },

    listingShown() {
      return this.items?.results.length;
    }
  },

  methods: {
    loadMore() {
      this.loading = true;

      getMediaByGenre('tv', this.$route.params.id, this.items.page + 1).then(response => {
        this.items.results = this.items.results.concat(response.results);
        this.items.page = response.page;
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      });
    }
  }
};
</script>
