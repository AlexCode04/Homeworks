import React from "react";
import { useCounter } from "../Hooks/useCounter";
import { useFetch } from "../Hooks/useFetch";

export const MultipleCustomHooks = () => {

    const { counter, handleAdd } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon-form/${counter}`);

    return (
        <div>
            <h1>pokemon</h1>
            <hr />
            {
                isLoading
                    ? <div>Loading...</div>
                    : hasError
                        ? <div>Error: {hasError}</div>
                        : (
                            <blockquote>
                                <p>{data.name}</p>
                                <img src={data.sprites.front_default} alt={data.name} />
                            </blockquote>
                        )
            }
            <button
                className="btn btn-primary"
                onClick={handleAdd}
            >
                Siguiente pokemon
            </button>
        </div>
    );
}