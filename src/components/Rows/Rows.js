import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Rows.css";
import { NavLink } from "react-router-dom";
import Spinner from "../spinner/Spinner";

function GenreRows({ title, fetchUrl }) {
  const [anime, setAnime] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setAnime(request.data.anime);
      return request;
    }
    setLoading(true);
    fetchData();
  }, [fetchUrl]);

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="row">
          <h2 className="row__title">{title}</h2>

          <div className="row__posters">
            {anime.map((a, i) => {
              return (
                <div className="img__container">
                  <NavLink to={`/anime/${a.mal_id}`}>
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
      ) : (
        Spinner
      )}
    </React.Fragment>
  );
}

export default GenreRows;
