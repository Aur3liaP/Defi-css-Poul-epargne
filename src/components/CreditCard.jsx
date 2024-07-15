import { useState } from "react";
import "./CreditCard.css"
import logo from "../assets/poul'epargne.png"
import logoHolo from "../assets/pouletHolo.png"
import logoVolant from "../assets/Pouletvolant.png"
import barreCode from "../assets/barreCode.png"
import CB from "../assets/CB.png"
import insert from "../assets/insert.png"
import puce from "../assets/puce.png"
import sanscontact from "../assets/sanscontact.png"
import visa from "../assets/visa.png"

export default function CreditCard () {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    }

    const maskCardNumber = (cardNumber) => {
        const maskedNumbers = cardNumber.slice(0, 14).replace(/\d/g, '*');
        const visibleNumbers = cardNumber.slice(14);
        return maskedNumbers + visibleNumbers;
    };
    const cardNumber = "1843 9236 0046 8346";
    const maskedCardNumber = maskCardNumber(cardNumber);


    return (
        <div id="cardContainer" onClick={handleCardClick}>
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                <div className="rectoFace cardFace">
                    <div className="banque">
                        <img src={logo} alt="logo poule"/>
                        <h3>POUL&apos;<br/> EPARGNE</h3>
                    </div>
                    <img className="logoVolant" src={logoVolant} alt="logo volant"/>
                    <div className="puce">
                        <img src={sanscontact} alt="sans contact"/>
                        <img src={puce} alt="puce de cb" className="logopuce"/>
                    </div>
                    <img src={insert} alt="logo insert" className="logoinsert"/>
                    <div className="coordonnees">
                        <div className="cardnumbers">
                            <h2>{maskedCardNumber}</h2>
                            <p>CARTE DE CREDIT DEBIT</p>
                            <div className="expiration">
                                <p>EXPIRE <br/>A FIN</p>
                                <span>07/28</span>
                            </div>
                        </div>
                        <p className="cardName"> MME GALINA C. NUGGETS </p>
                    </div>
                    <img src={visa} alt="logo Visa" className="logoVisa"/>
                </div>
                <div className="versoFace cardFace">
                    <p className="date">Pondu le 12/07/2024 à 21h04</p>
                    <div className="bande"> </div>
                    <div className="back">  
                        <h4 className="signature">SIGNATURE DU TITULAIRE OBLIGATOIRE</h4>
                        <div className="imagescb">
                            <img src={barreCode} alt="cryptogramme" className="imgCrypto"/>
                            <p>719</p>
                            <img src={CB} alt="logo CB" className="imgCB"/>
                        </div>
                        
                        <div className="coordonneesBq">
                            <h4>PE LIBRE REPONSE 50299 - 93755 PLUMEBOURG CEDEX.</h4>
                            <p>Important : carte strictement personnelle, propriété de la Poul’ Épargne émettrice qui peut la retirer à tout moment. Tout poulet trouvant cette carte est prié de bien vouloir l’adresser sous pli non affranchi à l’adresse ci dessus.</p>
                        </div>
                    </div>
                    <img src={logoHolo} alt="poulet hologramme" className="imgHolo"/>
                    <img src={visa} alt="logo Visa" className="logoVisa"/>
                </div>
            </div>
        </div>
    )
}




//Texte Recto

// POUL’ EPARGNE
// 1843 9236 0046 8346
// CARTE DE CREDIT DEBIT
// EXPIRE A FIN
// 07/28
// MME GALINA C. NUGGETS


//Texte Verso

// Pondu le 12/07/2024 à 21h04
// SIGNATURE DU TITULAIRE OBLIGATOIRE
// PE LIBRE REPONSE 50299 - 93755 PLUMEBOURG CEDEX.
// Important : carte strictement personnelle, propriété de la Poul’ Épargne émettrice qui peut la retirer à tout moment. Tout poulet trouvant cette carte est prié de bien vouloir l’adresser sous pli non affranchi à l’adresse ci dessus.