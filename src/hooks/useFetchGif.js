import {useEffect, useState} from "react";
import {fetchGif} from "../helpers/retrieveGift";

export const useFetchGift = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        fetchGif(category).then((images) => {
            setState({
                data: images,
                loading: false
            })
        });
    }, [category])

    return state
}

/*setTimeout(() => {
    setState({
        data: ['Sofia'],
        loading: false
    })
}, 3000);*/
