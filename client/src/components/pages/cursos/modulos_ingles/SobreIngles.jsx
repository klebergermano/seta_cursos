import React, { Component } from "react";
import { Animated } from "react-animated-css";

class SobreIngles extends Component {
  state = {};
  render() {
    return (
      <div className="sub_pages_ingles" id="sub_page_sobre_ingles">
        <div>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDuration={800}
          >
            <h3>Sobre Nosso Curso</h3>
            <p>
              Nosso curso de inglês é focado na conversação, que é o que a
              maioria das pessoas buscam ao aprender inglês, todo curso foi
              planejado para que o aluno consiga buscar seu proprio conhecimento
              de ingles, de forma personalizada de acordo com suas necessidades.{" "}
            </p>
            <p>
              o nosso curso foi feito para você aprender ingles da mesma forma
              que poliglotas (pessoas que falam varios idiomas), aprendem, o
              curso dura dois anos e é dividido e 3 etapas: como funcionam as
              aulas: as trabalham com as 4 habilidades , ler e escrever, ouvir e
              falar.
            </p>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDuration={1000}
          >
            <p>
              <b>ler e escrever:</b> alem do que o professor ensinar, sera usado
              textos de revistas e jornais, livros e sites, o aluno sera
              estimulado a escrever em ingles, desde de uma simples anotação ate
              redaçoes, assim o aluno ja aprende a usar o idioma no dia a dia,
              desde a primeira aula.
              <br />
              <b>ouvir e falar:</b> Este é o foco do nosso curso e, é a
              principal parte do aprendizado de um idioma, e por isso nossos
              alunos sao incentivados a aprender ouvir e depois falar sobre o
              que ouviu, com muitas aulas de conversação, onde o professor fara
              uso de varios recursos desde videos, filmes, musicas, entrevistas
              em ingles. Tambem vamos prepar nossos alunos para saber se
              sobressair, sobre situaçoes onde podera usar uma coversa em
              ingles, como fazer atendimento a um clinte, pedir informaçoes e
              dar informaçoes, ou fazer uma entrevista de emprego em ingles.
            </p>
          </Animated>
        </div>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={2000}
        >
          <div id="ler" className="fundamentos_ingles">
            <div className="content_destaque">
              <h3>
                <span>
                  <img
                    src={require("../../../../assets/img/english/ico-read.png")}
                  />
                </span>
                Ler
              </h3>
              <p>
                A leitura em Inglês, por exemplo, melhora muito o vocabulário,
                facilita a formação de frases, além de estimular o aprendizado.
              </p>
            </div>
          </div>
          <div id="ouvir" className="fundamentos_ingles">
            <div className="content_destaque">
              <h3>
                <span>
                  <img
                    src={require("../../../../assets/img/english/ico-fone.png")}
                  />
                </span>
                Ouvir{" "}
              </h3>
              <p>
                Listening (Ouvir) é de suma importância e nosso curso traz ao
                aluno exemplos práticos e imersivos auditivos desde a primeira
                aula.
              </p>
            </div>
          </div>
          <div id="falar" className="fundamentos_ingles">
            <div className="content_destaque">
              <h3>
                <span>
                  <img
                    src={require("../../../../assets/img/english/ico-talk.png")}
                  />
                </span>
                Falar
              </h3>
              <p>
                O conhecimento da pronúncia correta das palavras, além do ritmo
                e sonoridade das frases é essencial para aqueles que desejam
                conversar em inglês com menos dificuldade. o que faz da
                pronúncia um dos módulos fundamentais do nosso curso.
              </p>
            </div>
          </div>
          <div id="escrever" className="fundamentos_ingles">
            <div className="content_destaque">
              <h3>
                <span>
                  <img
                    src={require("../../../../assets/img/english/ico-book.png")}
                  />
                </span>
                Escrever
              </h3>
              <p>
                A habilidade de escrever bem em Inglês é de suma importância,
                poes não basta ter um bom vocabulario, mas sim aprender a se
                expressar de maneira correta através da escrita.
              </p>
            </div>
          </div>
        </Animated>
      </div>
    );
  }
}

export default SobreIngles;
