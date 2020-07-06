import React from 'react';

const GigGridItem = ({title,url}) => {
    return (
        <div className="card animate__animated animate__bounce animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title.toUpperCase()}</p>
        </div>
    );
};

export default GigGridItem;
