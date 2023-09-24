import { Outlet } from "react-router-dom";
import {getCoins} from "../services/CoinService";
import {useEffect, useState} from "react";

function CoinPage() {
    const [coins, setCoins] = useState([{}]);
    useEffect(() => {
        fetchData();
        setInterval(() => {
            fetchData();
        },20000);
    },[]);

    const fetchData = async () => setCoins(await getCoins().then(response => response.data.data));

    return (
        <>
        <h1>Info de Cryptos</h1>
        <Outlet context={coins} />
        </>
    );
};

export default CoinPage;