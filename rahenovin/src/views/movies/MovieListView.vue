<script lang="ts">
import { defineComponent } from "vue";
import SearchBox from "../../components/SearchBox.vue";
import MovieCard from "../../components/MovieCard.vue";
import AppPaging from "../../components/AppPaging.vue";
import MovieService from "@/services/movie.service";
import { PagingModel } from "@/models/paging.model";
import type { MovieModel, PublicModel } from "@/models/movie.model";
import { useMovieStore } from "@/stores/movie";
const store = useMovieStore();

export default defineComponent({
  name: "MovieListView",
  data() {
    return {
      count: 1,
      pagingModel: new PagingModel(),
      movieList: new Array<MovieModel>(),
      dateQuery: "",
      genresList: [] as PublicModel[],
    };
  },
  mounted() {
    this.getMovies();
    this.getGnres();
  },
  methods: {
    async getMovies() {
      const temp = await MovieService.getAll(
        this.pagingModel.page,
        this.dateQuery
      );
      this.pagingModel.page = temp["page"];
      this.pagingModel.total_pages = temp["total_pages"];
      this.movieList = temp["results"];
    },
    onNextPage() {
      this.pagingModel.page++;
      this.getMovies();
    },
    onPreviousPage() {
      if (this.pagingModel.page > 1) {
        this.pagingModel.page--;
        this.getMovies();
      }
    },
    onSearch(event: any) {
      if (!event[0]) {
        return;
      }
      this.dateQuery = `&release_date.gte=${event[0].toISOString()}`;
      this.dateQuery += event[1]
        ? `&release_date.lte=${event[1].toISOString()}`
        : "";
      this.getMovies();
    },
    goToDetail(movieId: number) {
      this.$router.push(`/detail/${movieId}`);
    },
    async getGnres() {
      this.genresList = await MovieService.getGenres();
      const temp: { [key: string]: string } = {};
      this.genresList.forEach((genre) => {
        if (genre.id && genre.name) {
          temp[genre.id] = genre.name;
        }
      });
      store.genres = temp;
    },
  },
  components: { SearchBox, MovieCard, AppPaging },
});
</script>
<template>
  <SearchBox @search="onSearch($event)" />
  <div class="grid grid-cols-3 gap-x-16 gap-y-9">
    <MovieCard
      v-for="movie in movieList"
      :key="movie.id"
      :movie="movie"
      @cardClicked="goToDetail($event)"
    />
  </div>
  <AppPaging
    :pagingModel="pagingModel"
    @next="onNextPage()"
    @previous="onPreviousPage()"
  />
</template>
