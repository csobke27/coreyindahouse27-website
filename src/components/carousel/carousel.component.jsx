// import React, { useState } from "react";
// import "./carousel.styles.scss";

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(1);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel-slides">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-slide ${
//               index === currentIndex ? "active" : ""
//             }`}
//           >
//             <img src={image} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//       <button className="carousel-button prev" onClick={prevSlide}>
//         &#10094;
//       </button>
//       <button className="carousel-button next" onClick={nextSlide}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import React from 'react'
import { useState, useEffect } from 'react'
import './carousel.styles.scss' //will be added later

const Carousel = (props) => {
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        } else{
            setCurrentIndex(0)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        } else {
            setCurrentIndex(length - 1)
        }
    }

    useEffect(() => {
        setLength(children.length)
    }, [children])

    // Automatically trigger `next` every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 8000); // 8000ms = 8 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex, length]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>
            </div>
            <div className="progress-bar-container">
                {children.map((_, index) => (
                <button
                    onClick={() => setCurrentIndex(index)}
                    key={index}
                    className={`progress-bar ${
                    index === currentIndex ? "active" : ""
                    }`}
                ></button>
                ))}
            </div>
        </div>
    )
}

export default Carousel