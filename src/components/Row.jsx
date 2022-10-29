import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Row({ type, title, filter }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3${type}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(true);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="text-white px-4 w-full">
        <div>
          <h2 className="text-xl py-3">{title}</h2>
        </div>
        <div className="row flex flex-nowrap gap-2 overflow-y-hidden overflow-x-scroll py-2">
          {loading &&
            movies.map((movie) => {
              return (
                <Link
                  to={`/${filter}/${movie.id}`}
                  key={movie.id}
                  className="hover:scale-105 transition-transform duration-100 ease-linear min-w-[100px] md:min-w-[170px]"
                >
                  <img
                    key={movie.id}
                    className="w-full h-full object-cover"
                    src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=""
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Row;
