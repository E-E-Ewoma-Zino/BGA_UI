import { useState } from "react"
export const SearchHandle = () =>{
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])

 const filterHandle = (e, client) =>{
    setSearchTerm(e)
    if(searchTerm !== ''){
        const newClient = client.filter((clientitem) => {
            return (Object.values(clientitem).join('').toLowerCase().includes(e.toLowerCase()))
        })
        setSearchResult(newClient)
    }else(
        setSearchResult(client)
    )
}

    return{searchResult, filterHandle, searchTerm, setSearchTerm}
}