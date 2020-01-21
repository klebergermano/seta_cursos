import React, { Component } from "react";

class Course_Computing extends Component {
  state = {};

  render() {
    return (
      <div className="col-12  courses_modules" id="computing_course">
        <div id="bg_info_computing">
          <h2>CURSO DE INFORMÁTICA</h2>
          <div id="computing_screen">
            <div id="modules_computing" className="modules">
              <div className="bg_video"></div>
              {/*Introdução a Informática*/}
              <div id="intro_info">
                <p>
                  Origem da Informática O que são computadore Tipos de
                  ComputadoresNomeclaturas e Terminologias O uso da Tecnologia
                  no dia-a-dia
                </p>
              </div>
              {/* ------ */}
            </div>
          </div>
          <div id="computing_masonry">
            {/*-----------Module---------*/}
            <div className="title_modules">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZo6fSvwm3gEsa36f3089R6_GfpQoI6bmMuJC6kZ9gsyb0wfW2g&s" />
              <h3>Instrodução a Informática</h3>
            </div>
            {/* ----- Windows Módulo 1*/}
            {/*-----------Module---------*/}
            <div className="title_modules">
              <img src="https://s.profissionaisti.com.br/wp-content/uploads/2016/04/impressora-cultura-impressao-reduzir.png" />
              <h3>Inpressão de Arquivos </h3>
            </div>
            {/* ----- Windows Módulo 1*/}

            {/*-----------Module---------*/}
            <div className="title_modules">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxq2Mu3KfVP7By4AS0bvJjVNSbEMG1zHH2BTF9jWATN45TBnq&s" />
              <h3>Interfaces</h3>
            </div>
            <div className="title_modules">
              <img src="https://image.businessinsider.com/5dd429793afd3775e80bf2c6?width=1100&format=jpeg&auto=webp" />
              <h3>Windows 10</h3>
            </div>

            <div className="title_modules">
              <img src="https://miro.medium.com/max/12000/1*sDHp0R3cYVgCNToYNE79Vg.jpeg" />
              <h3>Celulares / Smartphones</h3>
            </div>
            <div className="title_modules">
              <img src="https://www.hardware.com.br/filters:format:(jpeg)/@/static/wp/2019/09/22/50.jpg" />
              <h3>Hadware</h3>
            </div>
            <div className="title_modules">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAHBx1zcoNmkTv8aAWOHJsfNvj5-Y51HGI95Blm7moxvp6NoU&s" />
              <h3>Software</h3>
            </div>
            <div className="title_modules">
              <img src="https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191021091137_1200_675_-_internet_das_coisas.jpg" />
              <h3>Internet</h3>
            </div>
            <div className="title_modules ">
              <img src="https://image.businessinsider.com/5dd429793afd3775e80bf2c6?width=1100&format=jpeg&auto=webp" />
              <h3>Pacote Office</h3>
            </div>
            <div className="title_modules ">
              <img src="https://e-tinet.com/wp-content/uploads/2017/06/Conheca-os-melhores-sistemas-operacionais-do-mercado.gif" />
              <h3>Sistemas Operacionais</h3>
            </div>

            <div className="title_modules ">
              <img src="https://image.businessinsider.com/5dd429793afd3775e80bf2c6?width=1100&format=jpeg&auto=webp" />
              <h3>Rede</h3>
            </div>
            <div className="title_modules ">
              <img src="https://image.businessinsider.com/5dd429793afd3775e80bf2c6?width=1100&format=jpeg&auto=webp" />

              <h3>Conceitos de Programação</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course_Computing;
