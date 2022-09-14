import { useState } from 'react'

import '../style/Form.css'

function Form(props) {
    
   
    const [mail, setMail] = useState("")
    const [date, setDate] = useState("2022-01-01")
    const [url, setUrl] = useState(" ")
    const [message , setMessage] = useState("")
    
    function handleSubmit() {
        let data = {
            "cle": "CLE-TEST-IOT",
                "donnees": {
                    "id": mail,
                    "date": date,
                    "urlRelais": url,
                    "message": message
                }
        }
        console.log(data)
        
        const sendData = async () => {
            return await fetch('https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec', {
                method: 'post',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify(data)
            })
        }
        sendData().then(res => console.log("OK",res)).catch(rej => console.log("FAIL",rej))

    }
    return (
        <div>
            <form >
                <label for='mail'>Mail <input id='mail' type="mail" onChange={(e)=> setMail(e.target.value)}/></label>

                <label for='date'>Date <input id='date' type="date" onChange={(e) => setDate(e.target.value) } /></label>

                <label for='url' >URL <input id='url' type="text" onChange={(e)=> setUrl(e.target.value)} /></label>

                <label for='message'>Message </label>
                        <textarea id='message' onChange={(e) => setMessage(e.target.value)} />
                <input type="button" value="Envoyer" onClick={handleSubmit} />
            </form>
        </div>) 
        
    
}

export default Form