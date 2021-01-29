import React from "react";
// import TopRows from "../components/Rows/TopRows";
import MangaHeader from "../components/Header/MangaHeader";

import MangaGenreRows from "../components/Rows/MangaRows";
import requests from "../Requests";

function mangaContainer() {
  return (
    <div className="page">
      <MangaHeader key="header" fetchUrl={requests.fetchBersek} />
      {/* <TopRows key="row1" title="Top Anime" fetchUrl={requests.fetchTopManga} /> */}
      <MangaGenreRows title="Action" fetchUrl={requests.fetchActionManga} />
      <MangaGenreRows title="Comedy" fetchUrl={requests.fetchComedyManga} />
      <MangaGenreRows title="Romance" fetchUrl={requests.fetchRomanceManga} />
      <MangaGenreRows title="Horror" fetchUrl={requests.fetchHorrorManga} />
      <MangaGenreRows
        title="Adventure"
        fetchUrl={requests.fetchAdventureManga}
      />
      <MangaGenreRows title="Sports" fetchUrl={requests.fetchSportsManga} />
      <MangaGenreRows title="Mecha" fetchUrl={requests.fetchMechaManga} />
      <MangaGenreRows title="Mystery" fetchUrl={requests.fetchMysterysManga} />
    </div>
  );
}

export default mangaContainer;
