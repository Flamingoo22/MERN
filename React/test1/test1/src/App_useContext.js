import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

const useContentTutorial = (props) => {
    const [username, setUsername] = useState('')

    return (
        <AppContext.Provider value={{ username, setUsername }}>
            
        </AppContext.Provider>
    )


}