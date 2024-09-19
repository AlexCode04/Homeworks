import React from 'react';
import { useCounter } from './Hooks/useCounter';
import { MultipleCustomHooks } from './Components/MultipleCustomHooks';

const FirstApp = ({ value }) => {
    // Uso del hook useCounter
    const { counter, handleAdd, handleSubstract, handleReset } = useCounter(value);

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
