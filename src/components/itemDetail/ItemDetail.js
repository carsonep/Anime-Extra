import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./itemDetail.css";
import { IoIosStar } from "react-icons/io";
import Bookmarks from "../Bookmarks/Bookmarks";

function ItemDetail({ match }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      if (isMounted) {
        const request = await axios.get(`https://api.jikan.moe/v3${match.url}`);
        setItem(request.data);
        // return request;
      }
      return () => {
        isMounted = false;
      };
    }
    fetchData();
  }, [match.url]);

  return (
    <div className="item__detail-container">
      <div className="item__detail-container-desc">
        <div className="anime__img-title">
          <div className="anime__img-container">
            <img className="anime__img" src={item.image_url} alt="anime img" />
          </div>
          <div className="anime__title-container">
            <div className="anime__title-holder">
              <h1 className="anime__title">
                {item.title_english} / {item.title_japanese}
              </h1>
              <h2 className="anime_rating">
                <IoIosStar className="anime_rating-star" />
                {item.score}/10
              </h2>
            </div>
            <p className="anime__description">{item.synopsis}</p>
          </div>
        </div>
        <div className="anime__info">
          <Bookmarks handleFavoritesClick={"test"} />
          <div className="anime__info-more">
            <h2 className="anime__info-episodes">Episodes: {item.episodes}</h2>
            <h2>{item.rating}</h2>
          </div>
        </div>
      </div>

      <div className="anime__trailer">
        <iframe
          frameBorder="0"
          border="0"
          cellSpacing="0"
          className="responsive-iframe"
          width="800"
          height="700"
          title="trailer"
          style={{
            paddingLeft: "3.4rem",
            paddingTop: "5rem",
            paddingRight: "4.1rem",
            width: "94%",
          }}
          src={item.trailer_url}
        ></iframe>
      </div>
    </div>
  );
}

export default ItemDetail;
