import React from "react";
import GifItem from "./GifItem"; 
import './styles.css';
import useFetchGifs from "../Hooks/useFetchGifs";


export default function GifGrid({ category }) {

  const { gifs, isLoading} = useFetchGifs(category);

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
