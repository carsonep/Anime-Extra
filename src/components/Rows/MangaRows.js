import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Rows.css";
import { NavLink } from "react-router-dom";

function MangaGenreRows({ title, fetchUrl }) {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setManga(request.data.manga);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {manga.map((a, i) => {
          return (
            <div className="img__container">
              <NavLink to={`/manga/${a.mal_id}`}>
                <img
                  key={i}
                  className="row__poster"
                  src={a.image_url}
                  alt={`Manga ${a}`}
                />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MangaGenreRows;
