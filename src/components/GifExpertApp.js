import React, {useState} from 'react';
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
import GifGridCustom from "./GiftGridCustom";

const GifExpertApp = () => {
    // 'Sofia', 'Cesar', 'Mariana'
    const [categories, setCategory] = useState(['Marvel']);

    return (
        <>
            <h2>Cesar are you?</h2>
            <AddCategory setCategory={setCategory}/>
            <hr/>
            <ol>
                {
                    /*categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))*/

                    categories.map(category => (
                        <GifGridCustom
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

// NOTES
/*const handleAdd = () => {
    // el primer elemento es el valor de estado anterior
    // con la siguente funcion se demuestra
    setCategory(cats => [...cats, 'Yess'])
    // Other way
    // setCategory(['Yessenia', ...categories]);
    <button onClick={() => handleAdd()}>Add Category</button>
    {
    return <li key={category}>{category}</li>
    }
}*/

export default GifExpertApp;
