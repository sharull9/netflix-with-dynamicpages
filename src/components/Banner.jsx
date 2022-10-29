import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../requests";
import ImgComponent from "./ImgComponent";

function Banner() {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3${request.fetchNetflixOriginals}`)
      .then((response) => response.json())
      .then((data) => {
        setBanner(
          data.results[Math.floor(Math.random() * data.results.length)]
        );
        setLoading(true);
      });
  }, []);

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  console.log(banner);
  return (
    <div className="text-white relative w-full h-[70vh] md:h-[80vh]">
      {loading ? (
        <>
          <ImgComponent
            url={banner.backdrop_path}
            alt={banner?.title || banner?.name || banner?.original_name}
          />
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black"></div>
          <div className="absolute z-1 top-[100%] px-4 translate-y-[-120%] w-full">
            <h1 className="text-xl">
              {banner?.title || banner?.name || banner?.original_name}
            </h1>
            <p className="w-full text-sm">
              {truncateString(`${banner?.overview}`, 180)}
            </p>
            <Link to={`/tv/${banner.id}`}>
              <button className="text-sm bg-red-600 text-white hover:scale-105 transition-transform duration-100 ease-in-out px-3 py-1 rounded">
                Go to movie
              </button>
            </Link>
          </div>
        </>
      ) : (
        "....loading"
      )}
    </div>
  );
}

export default Banner;
