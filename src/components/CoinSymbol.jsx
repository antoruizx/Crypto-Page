

function CoinSymbol({symbol}){
    return(
        <img src={`https://static.coincap.io/assets/icons/${symbol}@2x.png}`} />
    );
};

export default CoinSymbol;