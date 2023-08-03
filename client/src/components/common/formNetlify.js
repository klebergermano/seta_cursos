import React, { useState } from 'react';
import Info from "../common/info_contatos";
import Icon from "../../assets/icons";
import { useHistory } from 'react-router-dom';
const Formulario = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [msgSend, setMsgSend] = useState('');
  const [phone, setPhone] = useState('');

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    let myForm = document.getElementById('form');
    let formData = new FormData(myForm);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => history.push('/form-submitted'))
      .catch((error) => alert(error));
  };

  return (
    
   <div id='bg_form'>    
    <form id="form" name='form' onSubmit={submitHandler}  method="POST" >
    {/*Campo oculto com o nome do formulário netlify*/}
    <input type="hidden" name="form-name" value="form" />
    {/* ----------------------*/}

      <div>
   
        <label>Nome: </label>
        <input
          name="name"
          placeholder="Nome:"
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          name="email"
          placeholder="Email:"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <label>Telefone: </label>
        <input
          name='phone'
          placeholder="Telefone: "
          required
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>
      <div>
        <label>Assunto: </label>
        <input
          name='subject'
          placeholder="Assunto:"
          type="text"
          onChange={(e)=>setSubject(e.target.value)}
          value={subject}
        />
      </div>
      <div>
        <label>Menssagem</label>
        <textarea
          name="message"
          placeholder="Menssagem:"
          required
          onChange={(e)=>setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>

  );
};

export default Formulario;
