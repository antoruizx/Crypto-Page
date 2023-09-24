import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoinPage from "../pages/CoinPage";
import ErrorPage from "../pages/ErrorPage";
import CoinTable from "../components/CoinTable";
import CoinCard from "../components/CoinCard";
import RequireAuth from "./RequireAuth";
import AdminPanelPage from "../pages/AdminPanelPage";
import SignInPage from "../pages/SignInPage";



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
                <Route path="signin" element={<SignInPage />} />
                <Route path="adminpanel" element={<RequireAuth isLogged={false} children={<AdminPanelPage />} />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;