import { useState, useEffect } from 'react';
import { getGifs }  from '../Helpers/getGifs';

export default function useFetchGifs(category) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchGifs = async () => {
      if (category === '') {
        setGifs([]); 
        setIsLoading(false);
        return;
      } else {
        setIsLoading(true); 
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false); 
      }
    };

    fetchGifs();
  }, [category]);

  return {
    gifs: gifs,
    isLoading: isLoading
  };
}
