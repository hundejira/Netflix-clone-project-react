import "./App.css";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentary} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
    </div>
  );
}

export default App;
