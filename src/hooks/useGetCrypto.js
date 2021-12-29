import  {useEffect, useState } from 'react'
import axios from 'axios'
import { Crypto } from '../models/Crypto'



export const useGetCrypto = (bank) => {

    const [crypto, setCrypto] = useState( { data: Crypto, loading: false })
  
    const uri =  bank
    
    useEffect(() => {
        getCrypto()
    }, [])

    const getCrypto = async () => {
        try {

            const data= await axios.get(uri) ;
            setCrypto({data: data.data,  loading: true})
            console.log("Joya pude levantar la cotizacion del banco " + bank)
        }
        catch (e) {
            
            console.log(e)
        }
    }

    return  crypto;
}
