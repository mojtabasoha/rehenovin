<script lang="ts">
import { defineComponent } from "vue";
import TitleBox from "@/components/TitleBox.vue";
import MovieService from "@/services/movie.service";
import { MovieModel } from "@/models/movie.model";
import { IMAGE_BASEURL } from "@/models/const-variables";

export default defineComponent({
  name: "MovieDetailView",
  data() {
    return {
      movieModel: new MovieModel(),
      imageBaseUrl: IMAGE_BASEURL,
      creditModel: [],
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      this.movieModel = await MovieService.getById(
        this.$route.params.id as string
      );
      this.creditModel = await MovieService.getCredit(
        this.$route.params.id as string
      );
      this.creditModel.sort(this.sortCredits);
    },
    formatNumber(number: string | undefined) {
      if (number) {
        const res = number
          ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          : "";
        return res;
      }
    },
    sortCredits(a: any, b: any) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    },
  },
  components: { TitleBox },
});
</script>
<template>
  <title-box :title="movieModel.title" :tagline="movieModel.tagline" />
  <div class="mt-20 flex gap-x-20">
    <img
      :src="imageBaseUrl + movieModel?.poster_path"
      alt="movie image"
      width="330"
      height="495"
      class="rounded-lg"
    />
    <div class="grow">
      <div class="flex py-3 justify-between text-base font-sans">
        <div class="font-bold">Budget</div>
        <div>${{ formatNumber(movieModel.budget) }}</div>
      </div>
      <div class="flex py-3 justify-between text-base font-sans">
        <div class="font-bold">Revenue</div>
        <div>${{ formatNumber(movieModel.revenue) }}</div>
      </div>
      <div class="flex py-3 justify-between text-base font-sans">
        <div class="font-bold">Release Date</div>
        <div>{{ movieModel.release_date }}</div>
      </div>
      <div class="flex py-3 justify-between text-base font-sans">
        <div class="font-bold">Runtime</div>
        <div>
          {{ movieModel.runtime ? Math.floor(movieModel.runtime / 60) : "" }}
          <span v-if="movieModel.runtime">h</span>
          {{ movieModel.runtime ? movieModel.runtime % 60 : "" }}
          <span v-if="movieModel.runtime">m</span>
        </div>
      </div>
      <div class="flex py-3 justify-between text-base font-sans">
        <div class="font-bold">Score</div>
        <div>
          {{ movieModel.vote_average }}({{ movieModel.vote_count }} votes)
        </div>
      </div>
      <div class="flex py-3 justify-between text-base font-sans">
        <div class="font-bold">Geners</div>
        <div>
          <span v-for="(gener, index) in movieModel.genres" :key="index">
            {{ gener.name }}
            <span v-if="!(movieModel.genres.length === index + 1)">,</span>
          </span>
        </div>
      </div>
      <div class="flex py-3 justify-between text-base font-sans">
        <div class="font-bold">IMDB Link</div>
        <a
          :href="`https://www.imdb.com/title/${movieModel.imdb_id}`"
          class="text-[#318FE7] underline"
        >
          Link
        </a>
      </div>
      <div
        v-if="movieModel.homepage"
        class="flex py-3 justify-between text-base font-sans"
      >
        <div class="font-bold">Homepage Link</div>
        <a :href="movieModel.homepage" class="text-[#318FE7] underline">Link</a>
      </div>
    </div>
  </div>
  <div class="text-left font-sans mt-14">
    {{ movieModel.overview }}
  </div>
  <div class="text-left mt-20 mb-10">
    <p class="font-bold text-lg font-sans">Credit:</p>
    <div class="text-base">
      <span
        v-for="(castMember, index) in creditModel.slice(0, 10)"
        :key="index"
      >
        {{ castMember["name"] }} <span v-if="index < 9">,</span>
      </span>
    </div>
  </div>
</template>
