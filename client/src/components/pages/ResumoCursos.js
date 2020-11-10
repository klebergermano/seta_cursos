import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-scroll"; //Link Scroll page

class ResumoCursos extends Component {
  componentDidMount() {
    let x = "a";
    console.log(x.length);
  }
  render() {
    return (
      <div id="bg_resumo_cursos">
        <h1>Conheça nossos Cursos</h1>
        <div className="bloco_resumo" id="resumo_informatica">
          <div className="content-resumo">
            <h2>Informática</h2>
            <p>
              Saber dominar os principais programas de computadores, pode
              garantir melhores oportunidades no mercado de trabalho, melhores
              salários, e mais independencia para realizar suas tarefas.
              Pensando nisso criamos nosso curso de Informática, Nosso curso é
              para todas as idades do básico ao avançado.
            </p>
            <Link
              activeClass="active"
              to="bg_informatica"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
            >
              Saiba Mais
            </Link>
          </div>
        </div>
        <div className="bloco_resumo" id="resumo_english">
          <div className="content-resumo">
            <h2>Inglês</h2>
            <p>
              Aprenda ingles naturalmente, com aulas focadas na conversação,
              onde o aluno sera capaz de se comunicar em inglês. Com nosso
              metodo de ensino, e material de apoio nossos alunos desenvolvem
              suas habilidades se torando capazes de ouvir, falar, ler e
              escrever em inglês com fluência.
            </p>
            <Link
              activeClass="active"
              to="bg_english"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
            >
              Saiba Mais
            </Link>
          </div>
        </div>
        <div className="bloco_resumo" id="resumo_excel">
          <div className="content-resumo">
            <h2>Excel</h2>
            <p>
              Excel Avançado no seu currículo é um grande diferencial, alem de
              ser um dos mais exigidos no mercado de trabalho. Desenvolvemos
              este curso Especializado para cada aluno, focado nas suas
              necessidades e no que tem de novo mercado, focamos nas principais
              e mais avançadas funções.
            </p>
            <Link
              activeClass="active"
              to="bg_excel"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumoCursos;
