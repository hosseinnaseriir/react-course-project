/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const store = createContext({
    products: [],
    setProducts: () => { },
});

export default function ContextProvider({ children }) {
    const [products, setProducts] = useState([]);

    return (
        <store.Provider
            value={{
                products,
                setProducts,
            }}>
            {children}
        </store.Provider>
    );
}
