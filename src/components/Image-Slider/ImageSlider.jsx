import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function ImageSlider({ url}) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(url,) {
        try {
            setLoading(true);
            const response = await fetch(`${url}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url);
        }
    }, [url]);

    function handleNextSlide() {
        setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }

    function handlePrevSlide() {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    }

    if (loading) {
        return <div>Loading data... Please wait.</div>;
    }

    if (error !== null) {
        return <div>Error occurred: {error}</div>;
    }

    return (
        <div style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
            <BsArrowLeftCircleFill style={{ fontSize: '35px', cursor: 'pointer' }} onClick={handlePrevSlide} />
            {images && images.length ? (
                <img style={{height:'400px'}}
                    key={images[currentSlide].id}
                    alt={images[currentSlide].download_url}
                    src={images[currentSlide].download_url}
                />
            ) : null}
            <BsArrowRightCircleFill style={{ fontSize: '35px', cursor: 'pointer' }} onClick={handleNextSlide} />
        </div>
    );
}

export default ImageSlider;
