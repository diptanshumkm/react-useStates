import { useState } from "react";


function Products(props){


    const [name, setName] = useState(props.name)

    function clickHandler(){
        console.log("hello")
        setName("Deadlift")
    }

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={clickHandler} >Add to cart</button>
        </div>
    )
}

export default Products;