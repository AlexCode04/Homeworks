import React, { useState } from 'react'; 
import './styles.css';

export default function AddCategory({ onAddCategory }) {
    const [category, setCategory] = useState(null);

    const onSetCategory = (evt) => {
        setCategory(evt.target.value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddCategory(category);
        setCategory('');
    };

    return (
        <form onSubmit={onSubmit} className='contenedor-addCategory'>
            <input 
                type="text" 
                value={category} 
                onChange={onSetCategory} 
            />
            <button type="submit">Agregar</button>
        </form>
    );
}
