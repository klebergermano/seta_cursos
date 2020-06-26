import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="pages" id="about">
        <div id="content">
          <div>
            <h1>Sobre</h1>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit,
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
