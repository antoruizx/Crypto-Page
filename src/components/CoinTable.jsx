import {useEffect, useState} from "react";
import {getCoins} from "../services/CoinService";
import numeral from "numeral";
import {Link, useOutletContext} from "react-router-dom"
import CoinSymbol from "./CoinSymbol";

function CoinTable() {
    const [coins, setCoins] = useState([{}]);
    useEffect(() => {
        const fetchData = async () => setCoins(await getCoins().then(response => response.data.data));
        fetchData();
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market cap</th>
                    <th>VWAP (24hs)</th>
                    <th>Supply</th>
                    <th>Volumen (24hs)</th>
                    <th>Change (24hs)</th>
                </tr>
            </thead>
            <tbody> {
                coins.map(coin => (
                    <tr>
                        <td>{
                            coin.rank
                        }</td>
                        <td className="d-flex">
                            <Link to={coin.id} className="text-decoration-none text-dark">
                                <div className="miDiv">
                                    <img src={
                                        `https://static.coincap.io/assets/icons/${
                                            coin.symbol ? coin.symbol.toLowerCase() : ''
                                        }@2x.png`
                                    }/>
                                </div>
                                {
                                coin.name
                            } </Link>
                        </td>
                        <td>{
                            numeral(coin.priceUsd).format("$ 0,0.00")
                        }</td>
                        <td>{
                            numeral(coin.marketCapUsd).format("($ 0.00 a")
                        }</td>
                        <td>{
                            numeral(coin.vwap24Hr).format("$ 0,0.00")
                        }</td>
                        <td>{
                            numeral(coin.supply).format("($ 0.00 a)")
                        }</td>
                        <td>{
                            numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")
                        }</td>
                        <td className={
                            coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
                        }>
                            {
                            parseFloat(coin.changePercent24Hr).toFixed(2)
                        }
                            %
                        </td>
                    </tr>
                ))
            };
            </tbody>
        </table>
    );
};

export default CoinTable;
