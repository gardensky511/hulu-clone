import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard/VideoCard";
import axios from "../Api/axios";
import requests from "../Api/requests";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  // useState는 state 변수, 해당 변수를 갱신할 수 있는 함수를 쌍으로 반환
  // useState()의 인자로 넘기는 값은 state의 초기 값
  const [movies, setMovies] = useState([]);

  // useEffect를 이용해서 리액트에게 컴포넌트가 렌더링 이후 뭘 해야될지 지정
  // 리액트는 받은 함수(effect)를 기억했다가 DOM업데이트 이후 불러낼 것임
  // useEffect는 기본적으로 렌더링 이후 매번 수행

  // useEffect 두번째 인자
  // 없음 : 컴포넌트가 최초 렌더링(Mount) 됐을 때도 실행하고 업데이트 될 때마다도 실행
  // [] :  Mount 됐을 때만 실행되고 이후 업데이트 될 경우에는 실행 안함
  // [특정값] : 특정값이 변경됐을 때만 다시 실행(만약 배열 안에 여러 아이템이 있을 경우는 하나라도 달라도 리렌더링)
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]); //selectedOption이 바뀔 때마다 리렌더링

  // 얘도 지워도 되긴해여!
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map(movie => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
