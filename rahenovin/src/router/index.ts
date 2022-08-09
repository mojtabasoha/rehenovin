import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: "/",
      name: "movies",
      component: () => import("@/views/movies/MovieListView.vue"),
    },
    {
      path: "/detail/:id",
      name: "movieDetail",
      component: () => import("@/views/movies/MovieDetailView.vue"),
    },
  ],
});

export default router;
