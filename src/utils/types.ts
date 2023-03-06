interface Media {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Movie extends Media {
  adult: boolean;
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface TVSeries extends Media {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}

export interface IMedia extends Movie {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
  media_type: string;
}

export type UserContext = {
  id: number;
  name: string;
  password: string;
  bookmarks: Map<number, IMedia>;
};
