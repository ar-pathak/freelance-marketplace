import ReactDOM from "react-dom/client";
import React from 'react'
import Navbar from "./components/layout/Navbar";
import Jumbotron from "./components/common/Jumbotron";
import Services from "./components/common/Services/Services";
import PopularServices from "./components/common/PopularServices/PopularServices";
import FiverrProTem from "./components/common/FiverrPro/FiverrProTem";
import SuccessOnFiverr from "./components/common/SuccessOnFiverr";
import TrustedServices from "./components/common/TrustedServices";
import JoinFiverrPromo from "./components/common/JoinFiverrPromo/JoinFiverrPromo";
import MadeOnFiverr from "./components/common/MadeOnFiverr";
import BackToTop from "./components/layout/BackToTop";
import GuidesToHelpYouGrow from "./components/common/GuidesToHelpYouGrow/GuidesToHelpYouGrow";
import JoinFiverrPromo_2 from "./components/common/JoinFiverrPromo/JoinFiverrPromo_2";
import Footer from "./components/layout/Footer";
const App = () => {
    return (
        <div className="min-h-screen bg-white font-inter text-gray-900 flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Jumbotron />
                <div className="border-b border-gray-100"></div>
                <Services />
                <div className="border-b border-gray-100"></div>
                <PopularServices />
                <div className="border-b border-gray-100"></div>
                <FiverrProTem />
                <div className="border-b border-gray-100"></div>
                <SuccessOnFiverr />
                <div className="border-b border-gray-100"></div>
                <TrustedServices />
                <div className="border-b border-gray-100"></div>
                <JoinFiverrPromo />
                <div className="border-b border-gray-100"></div>
                <MadeOnFiverr />
                <div className="border-b border-gray-100"></div>
                <GuidesToHelpYouGrow />
                <JoinFiverrPromo_2 />
            </main>
            <BackToTop />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App  