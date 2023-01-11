import { API_KEY } from "@env";
export const baseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/original";

export const route = {
  search: `${baseUrl}/search/movie?api_key=${API_KEY}&language=en-US`,

  now_playing_movies: `${baseUrl}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  popular_movies: `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US`,
  top_rated_movies: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  upcoming_movies: `${baseUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  trending_movies: `${baseUrl}/trending/movie/week?api_key=${API_KEY}&language=en-US`
};
