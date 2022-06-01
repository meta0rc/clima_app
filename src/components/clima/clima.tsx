import { useContext, useEffect, useState } from "react"
import { climaContext } from "../../context/climaContext"
import { api } from "../../hooks/api"
import { Search } from "../bar/search"
import './clima.css'

export type Clima = {
    tmp: string
    hum: string
    wind: string
    rain: string
}
export const Clima = () => {

    const contextClima = useContext(climaContext)
    const clima = contextClima.clima
    const loading = contextClima.loading

        const configs = () => {
            if(clima){
                if(parseInt(clima.tmp) < 20){
                   
                    return {
                        photo: '../../assets/images/frio.png',
                        text: 'Um dia friozinho para ficar com a morena',
                        className: 'frio'
                    }
                } 
                else {
                    return {
                        photo: '../../assets/images/sun.png',
                        text: 'Um dia quente para ir para Práia',
                        className: 'sol'
                    }
                }
            }
        }

        const configsClima = configs()

    useEffect(() => {

        const request = async () => {
            const res = await contextClima.getClimaDefault()
            if(res){
                console.log(res)
            }
        }
        request()
    }, [api])

    return (
        
        <ul className="clima-main">
            {loading == 'loading' ? 
            <li className="flex" id="loading">
                <img src="../../assets/images/loading.gif" alt="" width={200} />
                <h2>Loading</h2>
            </li> : 
            <>
            <Search />
       
            <li className="flex"> 
            
                <img src={configsClima && configsClima.photo} alt="" width={50} />
                <h2 className={configsClima && configsClima.className}>
                    {clima && clima.tmp + 'º'}
                </h2> 
            </li>
            <li className="flex " title="Velocidade do Vento"> 
            
                <img className="wind" src="../../assets/images/wind.png" alt="" width={50} />
                <h2>
                    {clima && clima.wind}
                </h2> 
            </li>
            <li className="flex" title="Umidade do ar"> 
            
                <img src="../../assets/images/hum.png" alt="" width={50} />
                <h2>
                    {clima && clima.hum}
                </h2> 
            </li>
            <li className="flex" title="Porcentagem de Chuva"> 
            
                <img src="../../src/assets/images/rain.jpg" alt="" width={50} />
                <h2>
                    {clima && clima.rain}
                </h2> 
            </li>
            </>}
        </ul>
        
    )
}