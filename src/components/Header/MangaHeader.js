import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Hero from "../../img/berserk-hero.png";
import Buttons from "../../UI/buttons/Buttons";
import "./MangaHeader.css";

function MangaHeader({ title, fetchUrl }) {
  const [mangaHeader, setMangaHeader] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      console.log(request.data);
      setMangaHeader(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function handleClick(event) {
    event.preventDefault();
  }

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
