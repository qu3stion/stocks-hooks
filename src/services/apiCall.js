import axios from "axios";

export async function apiCall(){
    const siteAPI = `https://cloud.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=sk_f96d9113e41d4ee080545e499a1adc17`;

    const apiCall = await axios.get(siteAPI)
    .then(({ data }) => {
        return data;
    });
    return apiCall;

}
