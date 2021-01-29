import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Hero from "../../img/berserk-hero.png";

import "./MangaHeader.css";

function MangaHeader({ title, fetchUrl }) {
  const [mangaHeader, setMangaHeader] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      if (isMounted) {
        const request = await axios.get(fetchUrl);
        setMangaHeader(request.data);
        // return request;
      }
      return () => {
        isMounted = false;
      };
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <React.Fragment>
      <header>
        <div className="header__hero">
          <h1 className="header__title">{mangaHeader.title_english}</h1>
          <img className="header__img" src={Hero} alt="Demon slayer img" />
          <p className="header__description">{mangaHeader.title_japanese}</p>

          <div className="header__fade-bottom"></div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default React.memo(MangaHeader);
