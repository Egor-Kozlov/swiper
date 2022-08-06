import React, { useState, useRef } from "react";
import "./styles.css";
import { content } from "./content";
import Item from "./Item";

const Accordion = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [prevActiveItemIndex, setPrevActiveItemIndex] = useState(0);
  const swiperRef = useRef("");

  const handleClick = (index) => {
    if (activeItemIndex !== index) {
      setPrevActiveItemIndex(activeItemIndex);
      setActiveItemIndex(index);
    }
  };

  const calcLinePositionForTransition = () => {
    return (swiperRef.current.offsetHeight / content.length) * (activeItemIndex * 0.93);
  };

  const transitionStyle = {
    transform: `translateY(${calcLinePositionForTransition() + 10}px)`,
    transition: "0.2s, transform 0.5s",
  };

  return (
    <div className="main-container" ref={swiperRef}>
      {content.map((item, index) => {
        return (
          <Item
            key={index}
            title={item.title}
            description={item.description}
            isActive={activeItemIndex === index}
            handleClick={handleClick}
            prevActiveItemIndex={prevActiveItemIndex === index}
            index={index}
          />
        );
      })}
      <div className="qa-line" style={transitionStyle}></div>
    </div>
  );
};

export default Accordion;
