import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import "./Banner.css";
import styled from "styled-components";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기
    const request = await axios.get(requests.fetchNowPlaying);

    // 여러 영화 중 영화 하나의 ID를 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보(비디오 정보 등) 가져오기
    const { data: movieDetail } = await axios.get(`/movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    setMovie(movieDetail);
  };
  
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }


  if(!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button play" onClick={() => setIsClicked(true)}>Play</button>
            <button className="banner__button info">More Information</button>
          </div>
          <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else {
    return (
      <Container>
        <HomContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            width="640"
            height="360"
            frameBorder="0"
            allow="accelerometer; autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
        </HomContainer>
      </Container>
    )
  }
}


// style 컴포넌트
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomContainer = styled.div`
  width: 100%;
  height: 100%;
 `