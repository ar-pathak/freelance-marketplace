import ReactDOM from "react-dom/client";
import React from 'react'
import Navbar from "./layout/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


export default App  