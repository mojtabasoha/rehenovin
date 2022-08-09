<script lang="ts">
import { MovieModel } from "@/models/movie.model";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SearchBox",
  props: {
    movie: MovieModel,
  },
  data() {
    return {
      date: ref(),
    };
  },
});
</script>
<template>
  <div class="mt-16 mb-28">
    <div class="rounded-md flex items-center justify-around h-20 bg-[#E2E2E2]">
      <div class="flex items-center">
        <div class="mr-7">Search by release date:</div>
        <DatePicker v-model="date" range class="h-8 w-56"></DatePicker>
      </div>
      <button
        class="h-8 bg-[#549DF2] px-3 rounded-full text-white"
        @click="$emit('search', date)"
      >
        Search
      </button>
    </div>
  </div>
</template>
