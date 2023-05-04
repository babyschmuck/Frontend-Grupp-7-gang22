import React, { useState } from "react";


const CarouselPartial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <img src={require("../assets/images/atrain.jpg")} alt="First slide" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <img src={require("../assets/images/deep.jpg")} alt="Second slide" />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <img src={require("../assets/images/homelander.png")} alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" onClick={handlePrevClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={handleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
      <ol className="carousel-indicators">
        <li className={activeIndex === 0 ? "active" : ""} onClick={() => setActiveIndex(0)}></li>
        <li className={activeIndex === 1 ? "active" : ""} onClick={() => setActiveIndex(1)}></li>
        <li className={activeIndex === 2 ? "active" : ""} onClick={() => setActiveIndex(2)}></li>
      </ol>
    </div>
  );
};

export default CarouselPartial;
