import React from 'react'
import { useState, useEffect } from 'react'
import './carousel.styles.scss'

const Carousel = (props) => {
    const { children, autoPlay = false, autoPlayTime = 8000, navigation = true } = props

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
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

    // Automatically trigger `next` every `autoPlayTime` milliseconds
    useEffect(() => {
        console.log(isAutoPlay);
        if (isAutoPlay === false) {
            return
        }
        const interval = setInterval(() => {
            next();
        }, autoPlayTime);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex, length, isAutoPlay]);

    const togglePlayPause = () => {
        setIsAutoPlay((prevState) => !prevState);
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {navigation && (
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                )}
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                {navigation && (
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                )}
                <div className="play-pause-container">
                    <button onClick={togglePlayPause} className="play-pause-button">
                        {isAutoPlay ? 'Pause' : 'Play'}
                    </button>
                </div>
            </div>
            <div className="progress-bar-container">
                {children.map((_, index) => (
                    <button
                        onClick={() => setCurrentIndex(index)}
                        key={`${index}-${isAutoPlay}`} // Re-render the component when isAutoPlay changes to restart the animation
                        className={`progress-bar ${index === currentIndex ? "active" : ""
                            }`}
                        style={{
                            '--progress-duration': `${isAutoPlay ? autoPlayTime : 0}ms`, // Set CSS variable dynamically
                        }}
                    ></button>
                ))}
            </div>

        </div>
    )
}

export default Carousel