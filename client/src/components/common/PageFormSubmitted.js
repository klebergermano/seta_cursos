import React from "react";

import Info from "./info_contatos";
import Icon from "../../assets/icons";


const PageFormSubmitted = () => {

    return (
        <div id='pageFormSubmitted' class='pages'>

            <img src={require("../../assets/img/formulario-sucesso.png")} />
            <p>
                Obrigado por entrar em contato conosco! 😊
            </p>
            <p>
                Responderemos o mais breve possível. 
               </p>
              
                <p className="infoContato" id="tel">
                Se preferir nos chame no
            WhatsApp: {Info.telefone} <Icon name="whatsapp" className="icon whatsapp" />
          </p>
                
                <p>
            ou mande mensagem em uma de nossas páginas: 
            </p>

        
          <p className="infoContato" id="face">
            <Icon name="facebook" className="icon facebook" /> 
            &nbsp;
            <a target="_blank" href={Info.facebook}> 
             Seta Cursos
            </a>
            &nbsp; &nbsp;
            <Icon name="instagram" className="icon instagram" /> 
            &nbsp;
            <a target="_blank" href={Info.instagram}>
              @Seta Cursos
            </a>
          </p>

<br/>

            <p>
            🌞 Tenha um ótimo dia! 🌞
            </p>
        </div>
    );

}
export default PageFormSubmitted;