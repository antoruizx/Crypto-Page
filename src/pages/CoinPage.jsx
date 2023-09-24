import { Outlet } from "react-router-dom";

function CoinPage() {
    return (
        <>
        <h1>Info de Cryptos</h1>
        <Outlet />
        </>
    );
};

export default CoinPage;