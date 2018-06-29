import axios from 'axios';

const giphyAPI = word => {
  const search = word;
  const key = "P8jSOBEO7BzFdCudvpCKNzqqwIJXNsrY";
  const limit = 50;

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  return axios.get(url);
};

export default giphyAPI;