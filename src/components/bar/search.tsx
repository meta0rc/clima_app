import { useContext, useState } from "react"
import { BsSearch } from '../../../node_modules/react-icons/bs'
import { climaContext } from "../../context/climaContext"
import './search.css'
export const Search = () => {
    
    const [data, setData] = useState('')
    const context = useContext(climaContext)
    const city = context.city

    const submitedForm = async (e:any) => {
        e.preventDefault()
 
        if(data != ''){
            const res = await context.getClimaPerCity(data)
            if(res){
                console.log(res)
            }
            
        }
    }
    return (
        <>
        <div className="search">
            <form onSubmit={(e) => submitedForm(e)}>
                <input onChange={(e) => setData(e.target.value)} type="text" name="search" placeholder="Digite alguma Região" maxLength={30}/>
                <label htmlFor="submitQuery">
                <BsSearch className="lup" />

                </label>
                <input type="submit" hidden id="submitQuery" />
            </form>
        </div>
        {city ? <h1 className="title-previsao">
             Temperatura em {city}
         </h1> : <h1 className="title-previsao">
             Temperatura em São Paulo
         </h1>}

        </>
    )
}