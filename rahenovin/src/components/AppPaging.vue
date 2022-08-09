<script lang="ts">
import { PagingModel } from "@/models/paging.model";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppPaging",
  props: {
    pagingModel: PagingModel,
  },
  data() {
    return {
      disabled: ["text-black/[0.48] cursor-auto"],
    };
  },
});
</script>
<template>
  <div class="mt-40 mb-24">
    <div class="flex justify-center items-center">
      <div
        class="font-bold text-base font-sans cursor-pointer"
        :class="pagingModel?.page === 1 ? disabled : 'text-[#318FE7]'"
        @click="$emit('previous')"
      >
        Previous Page
      </div>
      <div class="w-px h-10 bg-[#6A6A6A] mx-7"></div>
      <div
        @click="$emit('next')"
        class="text-[#318FE7] font-bold text-base font-sans cursor-pointer"
        :class="
          pagingModel?.page === pagingModel?.total_pages
            ? disabled
            : 'text-[#318FE7]'
        "
      >
        Next Page
      </div>
    </div>
    <div class="text-[#989898] text-base font-sans text-center mt-2">
      Showing result {{ pagingModel!.page * 20 - 19 }}-
      {{ pagingModel!.page * 20 }}
    </div>
  </div>
</template>
