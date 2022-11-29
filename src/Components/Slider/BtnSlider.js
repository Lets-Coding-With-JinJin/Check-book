import React from "react";
import "./Slider.css";
import { VscChevronRight, VscChevronLeft} from "react-icons/vsc";


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? VscChevronRight : VscChevronLeft}
    </button>
  );
}