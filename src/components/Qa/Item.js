import React from "react";
import "./styles.css";

const Item = ({ title, description, isActive, handleClick, index, prevActiveItemIndex }) => {
  return (
    <div
      onClick={() => handleClick(index)}
      className={`qa-container ${isActive && "qa-container--active"} ${prevActiveItemIndex && "qa-container--prev-active"}`}
    >
      <div className="qa-title">{title}</div>
      <div className={`qa-description ${isActive && "qa-description--active"}`}>
        <p className="qa-description-text">{description}</p>
      </div>
    </div>
  );
};
export default React.memo(Item);
