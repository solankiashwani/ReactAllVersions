import React, { useState } from 'react';

const initialState = {
    alertList: [],
    alertCount: 0
}

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
    const [alertCount, setAlertCount] = useState(0);
    return (
        <AppContext.Provider value={{ alertCount, setAlertCount }}>{children}</AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within a AppProvider");
    }
    return context;
}

export { AppContext, AppProvider };