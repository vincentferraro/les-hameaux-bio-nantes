import { Component } from 'react'
import '../style/Form.css'

class Form extends Component{


    render() {
        return  <div>
            <form method='post'>
        <label for='mail'>Mail <input type="mail" /></label>
        
        <label for='date'>Date <input type="date"/></label>
        
        <label >URL <input type="text"/></label>
        
        <label>Message </label>
        <textarea />
        
        <input type="submit" value="Envoyer" />
        </form>
        </div>
        
    }
}

export default Form