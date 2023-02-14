import { createContext, useState } from "react";

export const ProductSearchContext = createContext(null)

export default function ProductSearchContextProvider({children}){

    const [searchedString, setSearchedString] = useState("");

    const handleSearchStringChange = (searchString) => {
        setSearchedString(searchString);
    };


    return(
    <ProductSearchContext.Provider value={{
        searchedString, 
        handleSearchStringChange}}>
    
    {children}
    
    </ProductSearchContext.Provider>
);

};
