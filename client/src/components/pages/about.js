import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="pages" id="about">
        <div id="content">
          <div>
            <h1>Quem somos</h1>
            <p>
              A SETA CURSOS, tem como missão levar aos nossos alunos cursos de
              qualidade e personalizados de acordo com a necessidade dos alunos,
              e tudo isso a um preço justo. Acreditamos que para termos uma
              sociedade melhor um dos primeiros passos é ama educação de
              qualidade, assim buscasmos sempre primorarmos profissionalmente e
              pessoalmente. Concordamos que hoje a visão de mundo em relação ao
              estudos mudou, existindo uma constante necessidade de aprendizagem
              independente da idade, o que nos move a estar sempre a frente e
              atualizados. Venha você também fazer parte dessa idéia!
            </p>
          </div>
          <figure>
            <img src={require("../../assets/img/logo2.png")} />
          </figure>
        </div>
      </div>
    );
  }
}

export default About;
