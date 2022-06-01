import { useState } from "react"
import { Clima } from "../components/clima/clima"
import { api } from "../hooks/api"
import { climaContext } from "./climaContext"

export const ClimaContextProvider = ({children}: {children: JSX.Element}) => {

    const [clima, setClima] = useState<Clima | null>(null)
    const [loading, setLoading] = useState<string | null>(null)
    const [city, setCity] = useState<string | null>(null)

    const Context = climaContext
    const req = api()

    const getClimaDefault = async () => {
        setLoading('loading')
            const result = await req.getDefault()
            if(result){
                setClima(result.data)
                setLoading(null)
                return true
            }
        
        return false
    }

    const getClimaPerCity = async (param: string) => {

        if(param){
            setCity(param)
            setLoading('loading')
            const result = await req.getPerParam(param)
            if(result){
                setClima(result.data)
                setLoading(null)
                return true
            }
        }
        return false
        
        
    }
    return (
        
        <Context.Provider value={{clima, city, loading, getClimaDefault, getClimaPerCity}}>
            { children }
        </Context.Provider>

    )
}