import React, { Component } from "react";
import ReactDOM  from "react-dom";

class CertificadoValidacao extends Component {
  constructor() {
    super();
    this.state = {
      chave: "",

    };
  }

  handleValidacao = (event)=>{
    var value = event.target.value;
    var valueUp = value.toUpperCase();
  
    this.setState({chave: valueUp});
  }

  listaCertificados = ()=>{
const certicados = {
  teste: {
    nome: "Fulano de Tal"
  },
  IB2915: {
    nome: "Fulano de Tal"
  }
}

  }
  verificaChave = (e)=>{

    e.preventDefault();


    const certificados = {
      IC1001: {
        nome: "Fulano de Tal",
        rg: "00.000.000-X",
        curso: "Informática Completo", 
        modulos: "Windows 10, Excel, Word, Powerpoint",
        horas: "186", 
        inicio: "07/01/2018", 
        termino: "07/06/2019", 
        emissao: "09/06/2019",
        imgCert: "web-certificado-setacursos-exemplo.jpg"
      },
      IB2915: {
        nome: "Felipe de Oliveira Almeida",
        rg: "52.449.497-6",
        curso: "INFORMÁTICA - NÍVEL INTERMEDIÁRIO", 
        modulos: "Introdução à Informática, Internet, Windows 10, Pacote Office(Word, Excel, PowerPoint, Publisher), Conceitos de Hardware.",
        horas: "96", 
        
        inicio: "20/05/2019", 
        termino: "20/01/2020", 
        emissao: "21/10/2020", 
        imgCert: "Felipe-de-Oliveira-Almeida-Certificado.jpg"
      }}
var cerValido = false; 

    for(var cer in certificados){

      if(cer == this.state.chave){
        cerValido = certificados[cer]; 

      
}

    }
    if(cerValido !== false){
   this.renderCertificado(cerValido);
    }else{
      
   this.renderNaoValido();
      
    }
    
  }

  renderNaoValido (){
    var target = document.getElementById("respCertificado"); 
    
        ReactDOM.render( 
          (
            <div id='display_certificado'>
          <div id='certificado_info'>
          <h3 id="h3_nao_valido">Certificado não encontrado</h3>
          <p> Não encontramos o certificao pesquisado, confira se digitou todos os números corretamente, 
          caso tenha alguma dúvida por favor entre em contato conosco. </p>

          </div>
      
        </div>), target); 
    
      }



  renderCertificado (cerValido){
var target = document.getElementById("respCertificado"); 

    ReactDOM.render( 
      (
        <div id='display_certificado'>
      <div id='certificado_info'>
      <h3 id='h3_valido'>Certificado Válido  &nbsp;&#10004;</h3>
      <p> <span>Nome:</span> {cerValido.nome} </p>
      <p> <span>RG: </span>{cerValido.rg} </p>
      <p> <span>Módulos: </span>{cerValido.modulos} </p>
      <p> <span>Carga Horária: </span>{cerValido.horas} horas </p>
      <p> <span>Início:</span> {cerValido.inicio} </p>
      <p> <span>Términio:</span> {cerValido.termino} </p>
      <p> <span>Local: </span>Rua Gustavo Bacarisas, nº8 - Sala 3 - Jd. Zilda -São Paulo-SP </p>
      <p> <span>Data de Emissão:</span> {cerValido.emissao} </p>
      </div>
      <div >
      <figure>
      <img src={require("../../../src/assets/img/certificados/"+cerValido.imgCert)} />
</figure>
    </div>
    </div>), target); 

  }
  render(){
    return (
      <div className="bg_page_certificado">
        <div className="certificado_validacao">
          <h1>Validação de Certificado</h1>
          <div className="sobre_certificado">
            <p>
              Todos nossos certificados possuem chave de autenticidade. uma
              garantia de validade para alunos e empresas interessadas.
            </p>
            <p>
              Para verificar a validade de um certificado, basta digitar a Chave
              de Autenticidade impressa no certificado.
            </p>
  
            <p>Caso tenha alguma dúvida entre em contato conosco.</p>
          </div>

          <form onSubmit={this.verificaChave}>
            <div className="div_linha">
              <label for="codigo">Chave do Certificado: </label>
              <input  placeholder="" onChange={this.handleValidacao} value={this.state.chave} name="codigo"  type="text"  />
              
              <button type="submit" >Verificar</button>
            </div>

          </form>
          <div id='respCertificado'></div>

        </div>
      </div>
      )
  }

 
}

export default CertificadoValidacao;
