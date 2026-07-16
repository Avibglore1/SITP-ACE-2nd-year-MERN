import { useContext } from "react"
import { context } from "../../createContext"

function Display(){
    const count = useContext(context)
    return (
        <>
            <h1>Display: {count} </h1>
        </>
    )
}

export default Display