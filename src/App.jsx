import ReactDOM from "react-dom/client";
import React from 'react'
import reactDom from "react-dom";

const App = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Fiverr | Freelance Services Marketplace for Businesses</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


export default App  