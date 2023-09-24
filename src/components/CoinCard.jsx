import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { getCoin } from "../services/CoinService";
import numeral from "numeral";

function CoinCard() {
    const [coin, setCoin] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    /*useEffect(() => {
        const fetchData = async () => setCoin(await getCoin(id).then(response => response.data.data));
        fetchData();
    }, [])*/
    const coins = useOutletContext();
    useEffect(() => {
        setCoin(coins.find( coin => coin.id == id));
    },[])

    return (
        <>
            <button onClick={
                () => navigate(-1)
            }>Volver a tabla</button>
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center coin-img py-3"></div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">
                            {
                            coin.name
                        }
                            <img src={
                                `https://static.coincap.io/assets/icons/${
                                    coin.symbol ? coin.symbol.toLowerCase() : ''
                                }@2x.png`
                            }/>
                        </h3>
                        <div className=" div-rank mb-3">
                            <h4 className="m-0 ">
                                {
                                coin.rank
                            }</h4>
                            <p className="card-text ms-2">
                                Rank</p>
                        </div>
                        <div className=" d-flex align-items-center mb-2">
                            <h5 className="m-0 ">Price Usd:</h5>
                            <p className="card-text ms-2">
                                {
                                numeral(coin.priceUsd).format("$0,0.00")
                            } </p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <h5 className="m-0 ">Supply:</h5>
                            <p className="card-text ms-2">
                                {
                                numeral(coin.supply).format("($ 0.00 a)")
                            } </p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <h5 className="m-0 ">Volumen Usd:</h5>
                            <p className="card-text ms-2">
                                {
                                numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")
                            } </p>
                        </div>

                        <h5 className={
                            coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
                        }>
                            {
                            parseFloat(coin.changePercent24Hr).toFixed(2)
                        }%
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoinCard;
