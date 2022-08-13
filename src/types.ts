export interface Movie {
  map(arg0: (movie: any) => JSX.Element): import("react").ReactNode;
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