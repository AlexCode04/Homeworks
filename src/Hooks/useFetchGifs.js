import { useState, useEffect } from 'react';
import { getGifs }  from '../Helpers/getGifs';

export default function useFetchGifs(category) {
const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      if (category === '') {
        setGifs([]);
        return;
      } else {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        console.log(newGifs);
      }
    };

    fetchGifs();
  }, [category]);

  if (!category) {
    return null;
  }else{

    return {
      gifs: gifs,
      isLoading: false
  }}}