import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({ noOfStars = 6 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(id) {
        setRating(id);
    }

    function handleEnter(id) {
        setHover(id);
    }

    function handleLeave() {
        setHover(rating);
    }

    return (
        <div className='star-rating'>
            {[...Array(noOfStars)].map((_, index) => {
                const starId = index + 1;
                return (
                    <FaStar 
                        key={index}
                        onClick={() => handleClick(starId)}
                        onMouseEnter={() => handleEnter(starId)}
                        onMouseLeave={handleLeave}
                        color={starId <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                        size={30}
                        style={{ marginRight: 10, cursor: 'pointer' }}
                    />
                );
            })}
        </div>
    );
}

export default StarRating;
