import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Toprated from "./components/Toprated";
import Tv from "./components/Tv";

function App() {
  return (
    <>
      <Router>
        <div className="h-full w-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Body />} />
            <Route path="/movie/:id" exact element={<Movie />} />
            <Route path="/tv/:id" exact element={<Tv />} />
            <Route path="/top_rated/:id" exact element={<Toprated />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
