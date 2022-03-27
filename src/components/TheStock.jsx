import { useState, useEffect } from 'react'

export default function TheStock({icon, company, Price, percentage}){

    return(
        <div className="stockCard">
            <div className="cardDiv">
                <h1 id="icon">{icon}</h1>
                <h1 id="company">{company}</h1>
            </div>
            <div className="cardDiv">
                <h1 id="Price">{Price}</h1>
                <h1 id="percentage">{percentage}%</h1>
            </div>
        </div>
    )
}
