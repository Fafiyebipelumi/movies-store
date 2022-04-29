import axios from 'axios';

export const baseUrl = 'https://imdb8.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
            'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7'
        }
    })
    return data;
}



