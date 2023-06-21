import React from "react";
import NavBar from "../../Navbar/Navbar";
import Banner4 from "../../Section-Banner/Banner4";
import "../../Styles/EventoByID.css";

const EventoById = () => {
  return (
    <div>
      <NavBar />
      <Banner4 />
      <div className="tx-cont container Section_Prosen">
        <h1>Mostra de Projeto & Pesquisa Científica 2023.1</h1>
      </div>
      <div className="container informs">
        <div className="paragrafs">
          <p>
            No semestre 2023.1, o SENAI Feira de Santana promoveu a "Mostra de
            Projeto & Pesquisa Científica" com foco nas áreas de Gestão e
            Tecnologia da Informação (TI). O evento reuniu estudantes,
            professores e profissionais dessas áreas, proporcionando um espaço
            para o intercâmbio de conhecimento e a apresentação de projetos
            inovadores. 
            <br/>
            Durante a mostra, os participantes tiveram a
            oportunidade de compartilhar suas descobertas e soluções para
            desafios enfrentados na área de Gestão e TI. Os projetos e pesquisas
            abordaram temas como inteligência artificial, análise de dados,
            gestão de processos e segurança da informação. A exposição de
            projetos e a sessão de pôsteres foram momentos-chave do evento,
            permitindo aos estudantes demonstrar sua criatividade e habilidade
            prática na aplicação de conceitos teóricos.
            <br/>
             Além disso, a mostra contou com a presença de representantes de empresas locais,
            interessados em identificar talentos e estabelecer parcerias. Esse
            contato direto entre os estudantes e o setor empresarial contribuiu
            para a formação de networking e possíveis oportunidades
            profissionais. A "Mostra de Projeto & Pesquisa Científica: Gestão e
            TI" foi um evento de sucesso, consolidando-se como um espaço para o
            compartilhamento de conhecimento, incentivo à pesquisa e promoção
            dos avanços nessas áreas de estudo.
          </p>
        </div>
        <div className="details">
          <p>25/05/2023</p>
          <p>8h às 21h</p>
          <p>SENAI - Feira de Santana</p>
          <p>Evento Presencial</p>
        </div>
      </div>
      <div className="tx-cont container Section_Prosen">
        <h1>Fotos do Evento</h1>
      </div>
    </div>
  );
};

export default EventoById;
