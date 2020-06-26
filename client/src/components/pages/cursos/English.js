import React, { Component } from "react";
class English extends Component {
  state = {};
  render() {
    return (
      <div className="col-12" id="bg_english">
        <div id="bg_resumo_english">
          <h1>Curso de Inglês</h1>

          <div id="resumo_english">
            <p>
              Aprenda inglês naturalmente, com{" "}
              <span>aulas focadas na conversação</span>, Com nosso metodo de
              ensino e material de apoio nossos alunos desenvolvem suas
              habilidades se torando capazes de ouvir, falar, ler e escrever com
              fluência.
            </p>
          </div>
        </div>
        <div id="english_content">
          <div id="bloco_1">
            <div id="bg_modulos">
              <div id="lisening" className="modulos">
                <h3>
                  <span>
                    <img
                      src={require("../../../assets/img/english/ico-read.png")}
                    />
                  </span>
                  Ler
                </h3>
                <p>
                  A leitura em Inglês, por exemplo, melhora muito o vocabulário,
                  facilita a formação de frases, além de estimular o
                  aprendizado.
                </p>
              </div>
              <div id="writing" className="modulos">
                <h3>
                  <span>
                    <img
                      src={require("../../../assets/img/english/ico-fone.png")}
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
              <div id="reading" className="modulos">
                <h3>
                  <span>
                    <img
                      src={require("../../../assets/img/english/ico-talk.png")}
                    />
                  </span>
                  Falar
                </h3>
                <p>
                  O conhecimento da pronúncia correta das palavras, além do
                  ritmo e sonoridade das frases é essencial para aqueles que
                  desejam conversar em inglês com menos dificuldade. o que faz
                  da pronúncia um dos módulos fundamentais do nosso curso.
                </p>
              </div>
              <div id="talking" className="modulos">
                <h3>
                  <span>
                    <img
                      src={require("../../../assets/img/english/ico-book.png")}
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
            <div id="banner">
              <li>
                <span>*</span> Material Didático <span>Grátis!</span>
              </li>
              <li>
                <span>*</span> Turmas reduzidas
              </li>
              <li>
                <span>*</span> Metodologia Moderna
              </li>
              <li>
                <span>*</span> Curso focado no dominio do idioma
              </li>
            </div>
          </div>
          <figure id="people_english" className="modulos">
            <img
              src={require("../../../assets/img/english/people_english.png")}
            />
          </figure>
        </div>
      </div>
    );
  }
}

export default English;
