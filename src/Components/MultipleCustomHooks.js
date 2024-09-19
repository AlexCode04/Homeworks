import React from "react";
import { useCounter } from "../Hooks/useCounter";
import { useFetch } from "../Hooks/useFetch";

export const MultipleCustomHooks = () => {

    const { counter, handleAdd } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading
                    ? <div>Loading...</div>
                    : hasError
                        ? <div>Error: {hasError}</div>
                        : (
                            <blockquote>
                                <p>{data[0].quote}</p>
                                <footer>{data[0].author}</footer>
                            </blockquote>
                        )
            }
            <button
                className="btn btn-primary"
                onClick={handleAdd}
            >
                Siguiente quote
            </button>
        </div>
    );
}