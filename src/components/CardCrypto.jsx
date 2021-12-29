import React from 'react'
import PropTypes from 'prop-types'
import { useGetCrypto } from '../hooks/useGetCrypto'
import Graficos from './Graficos'
 

const CardCrypto = ({ title, bank, image }) => {

    CardCrypto.prototype = {

        title: PropTypes.string.isRequired,
        bank: PropTypes.string.isRequired,
        image: PropTypes.string
    }

    const uriImg = process.env.REACT_APP_URI_IMAGES;
    
    const cryptoBank = useGetCrypto(bank, {data : Crypto, isloading:false });


    return (
        <div className='card'>
            <h2> Banco {title} </h2>
            {image != null ?
                (
                    <img src={uriImg + image} alt={bank} ></img>
                )
                :
                (
                    <img src={uriImg + "bancosinimagen.jpg"} alt={bank} ></img>
                )
            }
            <hr></hr>
            <p>
                <i title="Precio de compra reportado por el exchange, sin sumar comisiones" className="fas fa-money-bill-alt"></i><b>{cryptoBank.data.ask}</b>
            </p>

            <p>
                <i title="Precio de venta reportado por el exchange, sin restar comisiones" className="fas fa-dollar-sign"></i><b>{cryptoBank.data.bid}</b>
            </p>

            <p>
                <i title="Precio de compra final incluyendo las comisiones de transferencia y trade" className="fas fa-money-check-alt"></i> <b>{cryptoBank.data.totalAsk}</b>
            </p>

            <p>
                <i title="Precio de venta final incluyendo las comisiones de transferencia y trade" className="fas fa-hand-holding-usd"></i><b>{cryptoBank.data.totalBid}</b>
            </p>
            <div>
               
               <Graficos title={"Cryptos"} arrayData={[cryptoBank.data.ask, cryptoBank.data.totalAsk, cryptoBank.data.bid, cryptoBank.data.totalBid]}></Graficos>
            </div>

        </div>

    )
}

export default CardCrypto;