import React from 'react'
import './CarousalItem.css';

function CarousalItem({name,url}) {
    return (
        <div className='carousal_item' style={{background:`url("${url}") no-repeat `,backgroundSize: "cover"}}>
            <div className="carousal_item__content">
            <h3>{name}</h3>
            <h6>Ethereum is a decentralized, open-source blockchain with smart contract functionality</h6>
            <p>Ether is the native cryptocurrency of the platform. Amongst cryptocurrencies,Ether is second only to Bitcoin in market capitalization.Ethereum was conceived in 2013 by programmer Vitalik Buterin</p>
            </div>

        </div>
    )
}

export default CarousalItem
