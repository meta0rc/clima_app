import { createContext } from "react"
import { Clima } from "../components/clima/clima"

export type ClimaContextType = { 

    clima: Clima | null
    city: string | null
    loading: string | null
    getClimaDefault: () => Promise<Boolean>
    getClimaPerCity: (param: string) => Promise<Boolean>

}

export const climaContext = createContext<ClimaContextType>(null!)