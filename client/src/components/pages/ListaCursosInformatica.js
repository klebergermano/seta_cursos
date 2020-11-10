import React, { Component } from "react";

function ListaCursosInformatica() {
  return (
    <div className="bg_page_lista_cursos">
      <div className="page_lista_cursos">
        <h2 id="txt_area_aluno">Area do Aluno:</h2>

        <h1>Aula em Vídeo - Curso de Informática</h1>

        <div className="curso_info">
          <h3>
            Olá aluno seja bem vindo as aulas em vídeo do seu curso de
            Informática!
          </h3>
          <p>
            Abaixo seguem as aulas adicionais do seu curso presencial, qualquer
            duvida entre em contato com o seu professor. e bons estudos!
          </p>
        </div>

        <div className="wrapper_videos">
          <div className="videos">
            <p>
              Aula 01: <span> Informática </span>
            </p>
            <iframe
              src="https://www.youtube.com/embed/Rv38GIWTjWg?rel=0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>

          <div className="videos_lista">
            <h3>Lista de Vídeo Aulas</h3>
            <p>Informática Básico Módulo 1</p>
            <li className="publicado">01 - Alfabeto em Informática &#9989;</li>
            <li>02 - Números em Informática</li>
            <li>03 - Classe de Palavras Nouns </li>
            <li>04 - Verbo to be (ser/estar) no presente</li>
            <li>05 - Adjetivos possessivos</li>
            <li>06 - Pronome pessoal do caso reto</li>
            <li>07 - Artigo definido e indefinido</li>
            <li>08 - Pronomes demonstrativos</li>
            <li>09 - Plurais dos substantivos</li>
            <li>10 - Presente dimples (verbos regulares e irregulares)</li>
            <li>11 - Caso possessivo</li>
            <li>12 - Adjetivos</li>
            <li>13 - Indicação de horas</li>
            <li>14 - Adverbios de frequência</li>
            <li>15 - Preposições de tempo</li>
            <li>16 - Verbo can (saber/poder) no presente</li>
            <li>17 - Verbo like + ing</li>
            <li>18 - Pronome pessoal do caso oblíquo</li>
            <li>19 - Pronomes possessivos</li>
            <li>20 - Formulação de perguntas no presente</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaCursosInformatica;
