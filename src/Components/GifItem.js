import React from "react";
import './styles.css';

export default function GifItem({ title, url, category }) {
  return (
    <div className="gif-item">
      <h4 style={{textAlign:"center"}}>{category}</h4>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

  