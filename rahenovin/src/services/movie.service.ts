import HttpClient from "./http-client";
// const apiKey = "f62f750b70a8ef11dad44670cfb6aa57";
export default class MovieService {
  static async getAll(page: number, date?: string): Promise<any> {
    let query = `?page=${page}`;
    // debugger;
    query += date ? date : "";
    query += query.length ? "&" : "?";
    const res = await HttpClient.get(`discover/movie${query}`);
    return res.data;
  }

  static async getById(id: string) {
    const res = await HttpClient.get(`movie/${id}?`);
    return res.data;
  }

  static async getCredit(id: string) {
    const res = await HttpClient.get(`movie/${id}/credits?`);
    return res.data.cast;
  }

  static async getGenres() {
    const res = await HttpClient.get(`genre/movie/list?`);
    return res.data.genres;
  }
}
