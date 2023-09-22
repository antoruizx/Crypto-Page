import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoinPage from "../pages/CoinPage";

export default function AppRouter () {
    return(
         <Router>
            <Navbar />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="aboutUs" element={<AboutUsPage />} />
                <Route path="coins" element={<CoinPage />} />
            </Routes>
            <Footer />
         </Router>
    );
};