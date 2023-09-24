import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoinPage from "../pages/CoinPage";
import ErrorPage from "../pages/ErrorPage";
import CoinTable from "../components/CoinTable";
import CoinCard from "../components/CoinCard";



function AppRouter () {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="" element={<HomePage />}  />
                <Route path="aboutUs" element={<AboutUsPage />} />
                <Route path="coins" element={<CoinPage />} >
                    <Route index element={<CoinTable />} />
                    <Route path=":id" element={<CoinCard />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;