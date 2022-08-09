<script lang="ts">
import { MovieModel } from "@/models/movie.model";
import { defineComponent } from "vue";
import { IMAGE_BASEURL } from "@/models/const-variables";
import { useMovieStore } from "@/stores/movie";

export default defineComponent({
  name: "AppPaging",
  props: {
    movie: MovieModel,
  },
  data() {
    return {
      store: useMovieStore(),
      imageBaseUrl: IMAGE_BASEURL,
    };
  },
});
</script>
<template>
  <div
    class="movie-card h-48 border border-[#C4C4C4] rounded-md bg-[#F1F1F1] flex cursor-pointer"
    @click="$emit('cardClicked', movie?.id)"
  >
    <img
      class="pl-1 py-[3px] rounded-l-lg"
      :src="imageBaseUrl + movie?.poster_path"
      :alt="movie?.title"
      width="125"
      height="189"
    />
    <div class="px-[11px] py-4 flex flex-col items-start justify-between">
      <div class="text-base font-bold font-sans">{{ movie?.title }}</div>
      <div class="font-sans font-xs">
        <div class="flex">
          <img src="@/assets/calendar.svg" alt="date" />
          {{ movie?.release_date }}
        </div>
        <div class="flex flex-wrap max-h-12 overflow-hidden">
          <div
            v-for="(genreId, index) in movie?.genre_ids"
            :key="index"
            class="flex items-center"
          >
            <div>
              {{ store.genres[genreId] }}
            </div>
            <div
              v-if="index + 1 < movie!.genre_ids.length"
              class="w-1 h-1 rounded-full bg-[#505050] mx-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
