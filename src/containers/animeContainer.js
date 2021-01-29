import React from "react";
import TopRows from "../components/Rows/TopRows";
import AnimeHeader from "../components/Header/AnimeHeader";

import GenreRows from "../components/Rows/Rows";
import requests from "../Requests";

function animeContainer() {
  return (
    <div className="page">
      <AnimeHeader key="header" fetchUrl={requests.fetchDemonSlayer} />
      <TopRows key="row1" title="Top Anime" fetchUrl={requests.fetchTopAnime} />
      <GenreRows title="Action" fetchUrl={requests.fetchActionAnime} />
      <GenreRows title="Comedy" fetchUrl={requests.fetchComedyAnime} />
      <GenreRows title="Romance" fetchUrl={requests.fetchRomanceAnime} />
      <GenreRows title="Horror" fetchUrl={requests.fetchHorrorAnime} />
      <GenreRows title="Adventure" fetchUrl={requests.fetchAdventureAnime} />
      <GenreRows title="Sports" fetchUrl={requests.fetchSportsAnime} />
      <GenreRows title="Mecha" fetchUrl={requests.fetchMechaAnime} />
      <GenreRows title="Mystery" fetchUrl={requests.fetchMysterysAnime} />
    </div>
  );
}

export default animeContainer;
