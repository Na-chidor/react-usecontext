import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

const MyContext = createContext();

function Child() {

    const value = useContext(MyContext);
    return <div>The value from context is: {value}</div>;
}

function App() {
    const contextValue = "Hello from Context!";

    return (
        <MyContext.Provider value={contextValue}>
            <div>
                <h1>Parent Component</h1>
                <Child />
            </div>
        </MyContext.Provider>
    );
}

export default App;
