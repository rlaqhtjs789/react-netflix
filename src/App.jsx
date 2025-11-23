import Nav from "./components/Nav";
import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/requests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Navigaion */}
      <Nav></Nav>
      {/* Banner */}
      <Banner></Banner>
      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}></Row>
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      ></Row>
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      ></Row>
      <Row
        title="Horror Movies"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
      ></Row>
      <Row
        title="Romance Movies"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
      ></Row>
      <Row
        title="Documentaries"
        id="DM"
        fetchUrl={requests.fetchDocumentaries}
      ></Row>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
