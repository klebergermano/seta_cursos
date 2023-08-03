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
              A SETA CURSOS tem como principal objetivo oferecer aos nossos alunos
              cursos de alta qualidade, totalmente personalizados para atender às suas
              necessidades individuais, tudo isso por um preço justo. Acreditamos
              firmemente que a chave para uma sociedade melhor começa com uma educação de excelência,
              por isso estamos empenhados em aprimorar constantemente tanto nossas habilidades
              profissionais quanto pessoais.
            </p>
            <p>

              Reconhecemos que a perspectiva sobre o estudo tem evoluído, e
              agora mais do que nunca há uma demanda crescente por aprendizado contínuo em todas as
              fases da vida. Por essa razão, estamos sempre à frente das últimas tendências e informações,
              garantindo que nossos cursos estejam atualizados e relevantes.</p>
            <p>
              Convidamos você a se juntar a nós nessa jornada educacional, onde o conhecimento é valorizado e a educação é tratada com carinho. Venha fazer parte dessa ideia e explore um mundo de oportunidades para o seu crescimento pessoal e profissional!
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
