export const getGifs = async (category) => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=YjFpKa3ISjWbeQ0KmuBJpMbGnHkVLvbd&q=${category}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
      const resp = await fetch(url);
      
      if (!resp.ok) {
        throw new Error('No se pudo obtener la información');
      }
      
      const { data } = await resp.json();
  
      // Asegúrate de que 'data' no esté vacío
      if (!data || data.length === 0) {
        return [];
      }
  
      const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_width.url,
      }));
  
      return gifs;
    } catch (error) {
      console.error('Error al obtener los GIFs: ', error);
      return []; // Retorna un array vacío en caso de error
    }
  };
  