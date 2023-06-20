import React from "react";
import "./Home.css";
import prosen from "../Images/prosen.png";

export const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="Section_Prosen">
          <h1>A plataforma</h1>
          <div className="ContainerBox">
            <img className="img-fluid" src={prosen} alt="ProSen Senai" />
            <div>
              <p className="paragraph">
                O ProSen é plataforma de busca de trabalhos e divulgação de
                eventos desenvolvidos no SENAI-FEIRA DE SANTANA. Essa iniciativa
                visa promover a visibilidade dos projetos e estudos realizados
                por alunos e profissionais ligados a instituição, destacando seu
                potencial inovador e contribuição para o avanço da indústria
                brasileira.
              </p>
              <p className="paragraph">
                A plataforma oferece uma interface intuitiva e ferramentas de
                pesquisa avançadas, permitindo aos usuários encontrar trabalhos
                relacionados a áreas específicas e que estarão disponíveis ao
                público.
              </p>
              <p className="paragraph">
                Com essa plataforma, espera-se que o conhecimento gerado no
                âmbito do SENAI-FEIRA DE SANTANA possa ser compartilhado de
                forma ampla, facilitando a colaboração e impulsionando ainda
                mais o desenvolvimento tecnológico e industrial em nossa região.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="BoxRepositories no-margin">
        <p>Conheça o Repositório de Projetos SENAI Feira de Santana</p>
        <button>CLIQUE AQUI</button>
      </div>
    </div>
  );
};
