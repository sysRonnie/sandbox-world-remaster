import React, { useEffect, useState } from 'react';
import './BackgroundAnimation.css';

function BackgroundAnimation() {
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newCircle = {
                id: Math.random(), // unique id
                left: Math.floor(Math.random() * 100),
                delay: Math.random() * 5, // random delay between 0 and 5 seconds
                size: Math.random() * 3, // random size between 0 and 3 pixels
            };
            setCircles(circles => [...circles, newCircle]);
        }, 100); // new circle every second

        return () => clearInterval(intervalId); // cleanup on unmount
    }, []);

    return (
        <div className="background-animation">
            {circles.map(circle => (
                <div key={circle.id} className="falling-circle" style={{ left: `${circle.left}%`, animationDelay: `${circle.delay}s`, width: `${circle.size}px`, height: `${circle.size}px` }}></div>
            ))}
        </div>
    );
}

export default BackgroundAnimation;