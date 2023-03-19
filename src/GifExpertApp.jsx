import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([])

    const onAddCategory = ( NewCategory ) => {
        if( categories.includes(NewCategory) ) return
        //setCategories(categories => categories.concat('Valorant'))
        setCategories([ NewCategory, ...categories])
        //setCategories([...categories, 'Valorant'])
    }

    return(
        <>
        {/*Titulo*/}
            <h1>GifExpertApp</h1>
        {/*Input*/}
            <AddCategory 
            // setCategories={ setCategories }
               onNewCategory= { onAddCategory }

            />

        {/*Listado de Gif*/}
        {/* <button onClick={onAddCategory}>Agregar</button> */}

        {
        categories.map((category)=>(
                    <GifGrid 
                        key={category} 
                        category={category} />
                ))
        }

            {/*Gif Item*/}
        </>
    )
}
//uNq3PHMhJwgYV3Fm69FpFDEQSIpnMp4o