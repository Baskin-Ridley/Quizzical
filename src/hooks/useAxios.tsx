//@ts-nocheck
//Currently has an error on url which is why @ts-nocheck is used

import React from 'react'
import axios from 'axios'

// default url may need to be updated to https://opentdb.com/api.php test first then change later if not working

axios.defaults.baseURL = 'https://opentdb.com'

const useAxios = ({ url }) => {
    const [response, setResponse] = React.useState(null)
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(true)

    

    React.useEffect(() => {
        const fetchData = () => {
            axios.get(url)
                .then(response => {
                    setResponse(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    setError(error)
                    setLoading(false)
                }
                )
        }
        fetchData();
    }, [url])
    
    return { response, error, loading }

  
}

export {useAxios}
