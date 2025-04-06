import ReactDOM from "react-dom/client";
import React from 'react'
import Navbar from "./components/layout/Navbar";
import Jumbotron from "./components/common/Jumbotron";
import Services from "./components/common/Services/Services";
import PopularServices from "./components/common/PopularServices/PopularServices";
import FiverrProTem from "./components/common/FiverrPro/FiverrProTem";
const App = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Services />
            <PopularServices />
            <FiverrProTem />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


export default App  