import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Rows.css";
import { NavLink } from "react-router-dom";

function GenreRows({ title, fetchUrl }) {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      if (isMounted) {
        const request = await axios.get(fetchUrl);
        setAnime(request.data.anime);
        // return request;
      }
      return () => {
        isMounted = false;
      };
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {anime.map((a, i) => {
          return (
            <div key={i + 10} className="img__container">
              <NavLink key={i + 1} to={`/anime/${a.mal_id}`}>
                <img
                  key={a.mal_id}
                  className="row__poster"
                  src={a.image_url}
                  alt={`Anime ${a}`}
                />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GenreRows;
