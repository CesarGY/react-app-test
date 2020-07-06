export const fetchGif = async (category) => {
    // const api_key = 'uicjNuo99RKOQVFA9UtzhGEWpMY2HrzJ';
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=uicjNuo99RKOQVFA9UtzhGEWpMY2HrzJ`;
    const response = await fetch(endpoint);
    const {data} = await response.json();

    //setImages(gifs);

    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

}
