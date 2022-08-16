import { memo } from "react";
import requests from "../../api/api";
import { Movies } from "../../components/common/Movies/Movies";

export const MoviesPage: React.FC = memo(() => {
  return (
    <main className="mt-16">
      <div className="wrapper">
        <h2 className="text-5xl font-bold">Movies</h2>
        <p className="text-xl max-w-[700px] font-medium pt-6 pb-10">
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
      </div>

      <div>
        <Movies
          title="Popular on MOVIELAND"
          url={requests.fetchNetflixOriginals}
        />
        <Movies title="In Trend" url={requests.fetchTrending} />
        <Movies title="Top Rated on MOVIELAND" url={requests.fetchTopRated} />
        <Movies title="Comedies" url={requests.fetchComedyMovies} />
        <Movies title="Documentaries" url={requests.fetchDocumantaries} />
        <Movies title="Actions movies" url={requests.fetchActionMovies} />
        <Movies title="Horror" url={requests.fetchHorrorMovies} />
        <Movies title="Romantic Movies" url={requests.fetchRomanceMovies} />
      </div>
    </main>
  );
});
