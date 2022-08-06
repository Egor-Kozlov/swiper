import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

const Item = ({ title, description, isActive, handleClick, index, prevActiveItemIndex }) => {
  const descriptionRef = useRef("");
  const [blockHeight, setBlockHeight] = useState(null);
  const getBlockHeight = () => {
    setBlockHeight(descriptionRef.current.offsetHeight);
  };

  useEffect(() => {
    getBlockHeight();
  }, []);

  return (
    <div
      onClick={() => handleClick(index)}
      style={isActive ? { height: blockHeight + 75 } : null}
      className={`qa-container ${isActive ? "qa-container--active" : ""} ${
        prevActiveItemIndex ? "qa-container--prev-active" : ""
      }`}
    >
      <div className="qa-title">{title}</div>
      <div className={`qa-description ${isActive && "qa-description--active"}`} ref={descriptionRef}>
        <p className="qa-description-text">{description}</p>
      </div>
    </div>
  );
};
export default React.memo(Item);
