import React from "react";

const Favorites: React.FC = () => (
  <div className="favorites-section">
    <div className="section-title">⭐ Sevimli shaharlar</div>
    <div className="favorites-list">
      <div className="favorite-item">
        <div className="item-name">Toshkent</div>
        <span className="item-temp">43°C</span>
      </div>
      <div className="favorite-item">
        <div className="item-name">Buxoro</div>
        <span className="item-temp">22°C</span>
      </div>
    </div>
  </div>
);

export default Favorites;
