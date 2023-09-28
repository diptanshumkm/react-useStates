import './Form.css'
import { useState } from 'react';

function Form(){

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    function changeHandler(event)
    {        
        setTitle(event.target.value)
        // console.log(title)
    }


    function changeDate(event){
        setDate(event.target.value)
        // console.log(date)
    }

    function submitHandler(){
        const respon = {
            name: title,
            dob: date 
        }

        console.log(respon)

        setDate('')
        setTitle('')
    }

    return(
        <div className="div1">
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={changeHandler}></input>
            </div>

            <div>
                <label>Date</label>
                <input type="date" value={date} onChange={changeDate}></input>
            </div>

            <div>
                <button type='submit' onClick={submitHandler}>Add to cart</button>
            </div>

        </div>
    )
    
}

export default Form;
