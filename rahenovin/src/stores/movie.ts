import { defineStore } from "pinia";

export const useMovieStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    genres: {} as { [key: string]: string },
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
