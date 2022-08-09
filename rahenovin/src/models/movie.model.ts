export class PublicModel {
  id?: number;
  name?: string;
}
export class MovieModel {
  adult?: boolean;
  budget?: string;
  genres: PublicModel[] = [];
  runtime?: number;
  backdrop_path?: string;
  genre_ids: number[] = [];
  id?: number;
  imdb_id?: string;
  revenue?: string;
  homepage?: string;
  tagline?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
