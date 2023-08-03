import React, { Component } from "react";
import Info from "./info_contatos";
import Icon from "../../assets/icons";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div id="footer_center">
          <p className="infoContato" id="endereco">
            {Info.endereco}
          </p>
          <p className="infoContato" id="email">
            <Icon name="email" className="icon" />

            {Info.email}
          </p>
          <p className="infoContato" id="tel">
            {Info.telefone} <Icon name="whatsapp" className="icon whatsapp" />
          </p>
          <p className="infoContato" id="face">
            <Icon name="facebook" className="icon facebook" />
            <a target="_blank" href={Info.facebook}>
              Seta Cursos
            </a> 
           
         
          </p>

          <p className="infoContato" id='insta'>

<Icon name="instagram" className="icon instagram" /> 
<a target="_blank" href={Info.instagram}>
@Seta Cursos
</a>
</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
