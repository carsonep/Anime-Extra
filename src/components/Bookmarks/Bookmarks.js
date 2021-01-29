import React from "react";

function Bookmarks(props) {
  return (
    <div>
      <button
        onClick={() => props.handleFavoritesClick()}
        className="item__detail-favorites"
      >
        Add to Bookmarks
      </button>
    </div>
  );
}

export default Bookmarks;
