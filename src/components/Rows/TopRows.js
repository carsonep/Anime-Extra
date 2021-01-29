import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./TopRows.css";
import { NavLink } from "react-router-dom";

function TopRows({ title, fetchUrl }) {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setManga(request.data.top);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="topRow__title">{title}</h2>

      <div className="topRow__posters">
        {manga.map((a, i) => {
          return (
            <div key={i + 10} className="img__container">
              <NavLink to={`/anime/${a.mal_id}`}>
                <img
                  key={i}
                  className="topRow__poster"
                  src={a.image_url}
                  alt={`manga ${a}`}
                />
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopRows;
