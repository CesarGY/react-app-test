import React, {useEffect, useState} from 'react';
import GigGridItem from "./GifGridItem";
import {fetchGif} from "../helpers/retrieveGift";

const GifGrid = ({category}) => {

    useEffect(() => {
        fetchGif(category).then(setImages);
    }, [category]);

    const [images, setImages] = useState([]);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(image => (
                        <GigGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
                {/*<ol>{images.map(({id, title, url}) => (<li key={id}>{title.toUpperCase()}</li>))}</ol>*/}
            </div>
        </>
    );
};

export default GifGrid;
