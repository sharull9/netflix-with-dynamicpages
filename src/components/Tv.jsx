import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Tv({ type }) {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${param.id}?api_key=3a5d7704d7584e5c917404810e7aa0d6`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setLoading(true);
        setGenres(data.genres);
      });
  }, [param.id]);
  console.log(movie);
  return (
    <>
      {loading && (
        <>
          <div className="text-white">
            <img
              className="w-full h-[450px] md:h-[600px] object-cover"
              src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie?.title || movie?.name || movie?.original_name}
            />
          </div>
          <div className="w-full h-full text-white px-2 py-4">
            {movie.adult ? "18+" : null}
            <h1 className="text-xl">
              Title:{" "}
              <span className="text-base text-red-600">
                {movie?.title || movie?.name || movie?.original_name}
              </span>
            </h1>
            <p className="w-full text-sm">
              Description:{" "}
              <span className="text-base text-red-600">{movie.overview}</span>
            </p>
            <p className="w-full text-sm">
              Status:{" "}
              <span className="text-base text-red-600">{movie.status}</span>
            </p>
            <p className="w-full text-sm">
              Tagline:{" "}
              <span className="text-base text-red-600">{movie.tagline}</span>
            </p>
            <div>
              <p className="w-full text-base">Genres: </p>
              <ul>
                {genres.map((genre) => {
                  return (
                    <li key={genre.id} className="text-sm">
                      {genre.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Tv;
