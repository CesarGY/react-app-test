import React from 'react';
import {useFetchGift} from "../hooks/useFetchGif";
import GigGridItem from "./GifGridItem";

const GifGridCustom = ({category}) => {

    const {data: images, loading} = useFetchGift(category);

    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Loading' : 'Done 🙈'}
            <div className="card-grid">
                {
                    images.map(image => (
                        <GigGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default GifGridCustom;
