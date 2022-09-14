import { useState } from 'react'
import '../style/Form.css'

function Form() {
    

    const [name, setMail] = useState("")
   /* const [date, setDate] = useState("2022-01-01")
    const [url, setUrl] = useState(" ")*/
    const [message , setMessage] = useState("")
    
    const handleSubmit=(evt)=>{
        evt.preventDefault()
        console.log(`${name}, ${message}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for='mail'>Mail <input id='mail' type="mail" onChange={(e) =>  setMail(e.target.value)}/></label>

                        <label for='date'>Date <input id='date' type="date" /></label>

                <label for='url' >URL <input id='url' type="text"/></label>

                <label for='message'>Message </label>
                        <textarea id='message' onChange={(e) => setMessage(e.target.value)} />

                <input type="submit" value="Envoyer"/>
            </form>
        </div>) 
        
    
}

export default Form