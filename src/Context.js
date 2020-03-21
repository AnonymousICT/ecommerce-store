import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvdier({children}) {
    const[allPhotos, setAllPhotos] = useState([])
    const url ="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json" 

    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    },[])

    return (
        <ContextProvdier value={{allPhotos}}>
            {children}
        </ContextProvdier>
    )
}

export {Context, ContextProvdier}