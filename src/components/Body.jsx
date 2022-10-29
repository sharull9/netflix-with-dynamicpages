import Banner from "./Banner";
import request from "../requests";
import Row from "./Row";

function Body() {
  return (
    <div className="w-full h-full">
      <Banner />
      <div className="pb-4">
        <Row
          type={request.fetchNetflixOriginals}
          title="Netflix Originals"
          filter="tv"
        />
        <Row
          type={request.fetchTopRated}
          title="Top Rated"
          filter="top_rated"
        />
        <Row
          type={request.fetchActionMovies}
          title="Action Movies"
          filter="movie"
        />
        <Row
          type={request.fetchComedyMovies}
          title="Comedy Movies"
          filter="movie"
        />
        <Row
          type={request.fetchHorrorMovies}
          title="Horror Movies"
          filter="movie"
        />
        <Row
          type={request.fetchRomanticMovies}
          title="Romantic Movies"
          filter="movie"
        />
        <Row
          type={request.fetchDocumentaries}
          title="Documentaries"
          filter="tv"
        />
      </div>
    </div>
  );
}

export default Body;
