import { useState, useEffect } from "react";
import { apiCall } from "../services/apiCall";
import TheStock from "./TheStock";

function Stocks(){
    const [stocks, setStocks] = useState([]);

    useEffect(() =>{
        const fetchData = async() => {
            try{
                const response = await apiCall();
                setStocks(response);
            } catch(error){
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return(
        <div>
            {(stocks || []).map((stock, index) => {
                const {symbol, companyName, latestPrice, changePercent} = stock
                return <TheStock icon={symbol} company={companyName} Price={latestPrice} percentage={changePercent} key={index}/>;
            })}
        </div>
    )
}
export default Stocks;
