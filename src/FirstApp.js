import React from 'react';
import { useCounter } from './Hooks/useCounter';
import { useFetch } from './Hooks/useFetch';
import { MultipleCustomHooks } from './Components/MultipleCustomHooks';

const FirstApp = ({ value }) => {
    // Uso del hook useCounter
    const { counter, handleAdd, handleSubstract, handleReset } = useCounter(value);

    // Uso del hook useFetch con la API de Breaking Bad Quotes
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');

    return (
        <>
            <h1>Contador</h1>
            <span>{ counter }</span>
            <br />
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Resetear</button>
            <br />
            <MultipleCustomHooks />
        </>
    );
};

export default FirstApp;
