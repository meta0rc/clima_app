import axios from 'axios'

const app = axios.create({
    baseURL: 'https://api-clima-state.herokuapp.com'
})

export const api = () => ({

    getDefault: async () => {
        const response = await app.get('/')

        const res = { 
            status: response.status,
            data: response.data
        }
        return res
    },

    getPerParam: async (param?:string) => {

        const response = await app.post('/search', {param}) 
        if(response){
            const res = { 
                status: response.status,
                data: response.data
            }
            return res
        }
        else {
            return false
        }
        
    }


})
