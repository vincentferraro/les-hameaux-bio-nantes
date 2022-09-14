
import enveloppe from '../img/enveloppe.png'
import '../style/ThankYou.css'

function ThankYou() {
    
    

    return (
        <div id="thank-you">
            <span> Merci pour votre candidature!</span>
            <img id="thank-you-img" src={enveloppe} alt="enveloppe" />
        </div>
    )
}

export default ThankYou