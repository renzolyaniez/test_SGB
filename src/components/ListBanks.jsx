
import React from 'react'
import {Banks} from '../models/Banks'
import CardCrypto from './CardCrypto';



const ListBanks = () => {

    const banks=Banks;
        
    return (
       <div>
          <h1>Cotizacion de Cryptos por Banco </h1>
          <hr></hr>
          <div className='list-cards'>
              {
              banks.map((ban,index)=> (
                    <div key={index}>
                        <CardCrypto title={ban.name} image={ban.image} bank={ban.uri} />
                    </div>
                ))
              }
  
          </div>
  
       </div>
    );
  
}

export default ListBanks