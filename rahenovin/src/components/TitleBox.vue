<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleBox",
  props: {
    title: String,
    tagline: String,
  },
  data() {
    return {};
  },
});
</script>
<template>
  <div class="mt-16 mb-28">
    <div class="rounded-md flex items-center px-9 gap-x-16 h-20 bg-[#E2E2E2]">
      <button
        class="h-8 bg-[#549DF2] px-3 rounded-full text-white flex items-center gap-x-2"
        @click="$router.push('/')"
      >
        <img src="@/assets/icon-arrow-left.svg" alt="arrow-left" />
        Back
      </button>
      <div class="text-start text-lg font-sans">
        <div class="font-bold">{{ title }}</div>
        <div>{{ tagline }}</div>
      </div>
    </div>
  </div>
</template>
