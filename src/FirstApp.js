import { useState } from "react"
import GifGrid from "./Components/GifGrid"
import AddCategory from "./Components/AddCategory"
import './Components/styles.css'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([null])

    const onAddCategory = ( category ) => {
        if( category === '' || category === null ){
            return
        }else{
            setCategories( list => [...list, category])
        }
        
    }

    return (
        <div className="contenedor-gifExpertApp">
            <h1>GifExpert</h1>
            <AddCategory onAddCategory={onAddCategory} />
            <ol>
                {
                    categories.map(
                        (category, key) => {
                            return <GifGrid key={key} category={category} />
                        }
                    )
                }
            </ol>
        </div>
    )
}
