export interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  release_date: string;
  vote_average: number;
  name?: string;
  first_air_date?: string;
}

export interface User {
  id: string | null;
  email: string | null;
  token?: string | null;
  likes?: boolean | null;
}

export interface FavouriteMovie {
  id: number;
  title: string;
  image: string;
  name?: string;
}
