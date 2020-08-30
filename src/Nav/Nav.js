import React from "react";
import "./Nav.css";
import requests from "../Api/requests";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchTrending);
        }}
        className="nav__category"
      >
        Trending
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchTopRated);
        }}
        className="nav__category"
      >
        Top Rated
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchActionMovies);
        }}
        className="nav__category"
      >
        Action
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchComedyMovies);
        }}
        className="nav__category"
      >
        Comedy
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchHorrorMovies);
        }}
        className="nav__category"
      >
        Horror
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchRomanceMovies);
        }}
        className="nav__category"
      >
        Romance
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchMystery);
        }}
        className="nav__category"
      >
        Mystery
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchSciFi);
        }}
        className="nav__category"
      >
        Sci-fi
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchWestern);
        }}
        className="nav__category"
      >
        Western
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchAnimation);
        }}
        className="nav__category"
      >
        Animation
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchTV);
        }}
        className="nav__category"
      >
        TV Movie
      </h2>
    </div>
  );
}

export default Nav;
