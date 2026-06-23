import React from 'react';
import { Container } from './styles';
import node from '../../assets/node-js.png';
import typescript from '../../assets/typescript.png';
import postgres from '../../assets/postgres.png';
import mongodb from '../../assets/mongodb.png';
import docker from '../../assets/docker.png';
import git from '../../assets/git.png';
import { profile } from '../../data/profile';

const techs = [
  ['Node.js', node],
  ['TypeScript', typescript],
  ['PostgreSQL', postgres],
  ['MongoDB', mongodb],
  ['Docker', docker],
  ['Git', git],
];

function Start() {
  return (
    <Container id="home">
      <section className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Olá, eu sou</span>
          <h1>
            {profile.shortName}
            <strong>{profile.role}</strong>
          </h1>
          <p>
            Construo APIs REST com Node.js, TypeScript, banco de dados,
            autenticação, regras de negócio e deploy. Também entendo de React o
            suficiente para entregar dashboards que consomem minhas APIs.
          </p>

          <div className="hero-actions">
            <a className="primary" href="#portfolio">
              Ver projetos
            </a>
            <a className="secondary" href="#contatos">
              Entrar em contato
            </a>
            <a className="secondary" href={profile.curriculumPath} download>
              Download CV
            </a>
          </div>
        </div>

        <div className="code-panel" aria-label="Exemplo visual de API">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <pre>
            <code>{`const server = express();

server.get('/api/hello', (req, res) => {
  return res.status(200).json({
    message: 'API rodando com sucesso!'
  });
});

server.listen(process.env.PORT || 3000);`}</code>
          </pre>
        </div>
      </section>

      <section className="quick-facts" aria-label="Resumo profissional">
        <div>
          <strong>{profile.location}</strong>
          <span>{profile.country}</span>
        </div>
        <div>
          <strong>{profile.period}</strong>
          <span>{profile.course}</span>
        </div>
        <div>
          <strong>Foco em Backend</strong>
          <span>APIs, banco de dados e deploy</span>
        </div>
        <div>
          <strong>Primeira vaga</strong>
          <span>Aberto para remoto ou Uberlândia</span>
        </div>
      </section>

      <section className="tech-strip" aria-label="Tecnologias principais">
        {techs.map(([name, icon]) => (
          <div key={name}>
            <img src={icon} alt="" />
            <span>{name}</span>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Start;
