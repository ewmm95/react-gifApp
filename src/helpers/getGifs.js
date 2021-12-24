export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=14&api_key=yXDfqrspI6jKtzTHQkzR9YgNwpcJwPu3`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.map(( { id, title, images } ) => ({ id, title, url: images?.downsized_medium.url}) );
}