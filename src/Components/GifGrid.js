import React from "react";
import GifItem from "./GifItem"; 
import './styles.css';
import useFetchGifs from "../Hooks/useFetchGifs";

export default function GifGrid({ category }) {
  const { gifs, isLoading } = useFetchGifs(category);

  if (!category) {
    return <p>Por favor ingresa una categoría.</p>;
  }
  
  if (isLoading) {
    return <p>Cargando GIFs...</p>;
  }

  if (gifs.length === 0) {
    return <p>No se encontraron GIFs para "{category}"</p>;
  }

  return (
    <div className="gif-grid">
      <div className="gif-grid-list">
        {gifs.map((gif) => (
          <GifItem key={gif.id} category={category} {...gif} />
        ))}
      </div>
    </div>
  );
}
