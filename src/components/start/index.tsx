import React from 'react';
import { Container } from './styles';
import node from '../../assets/node-js.png';
import typescript from '../../assets/typescript.png';
import express from '../../assets/express.png';
import postgres from '../../assets/postgres.png';
import mongodb from '../../assets/mongodb.png';
import docker from '../../assets/docker.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';
import { profile } from '../../data/profile';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const techs: Array<{
  name: string;
  icons?: string[];
  badge?: string;
}> = [
  { name: 'Node.js', icons: [node] },
  { name: 'TypeScript', icons: [typescript] },
  { name: 'Express', icons: [express] },
  { name: 'PostgreSQL', icons: [postgres] },
  { name: 'MongoDB', icons: [mongodb] },
  { name: 'Docker', icons: [docker] },
  { name: 'Git', icons: [git] },
  { name: 'GitHub', icons: [github] },
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

          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: 0,
              background: 'transparent',
              fontSize: '15px',
              fontFamily: 'Consolas, Monaco, monospace',
            }}
            showLineNumbers={false}
          >
            {`const server = express();

server.get('/api/hello', (req, res) => {
  return res.status(200).json({
    message: 'Olá! Bem-vindo ao meu portfólio 🚀'
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('API rodando com sucesso!');
});`}
          </SyntaxHighlighter>
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
        {techs.map(({ name, icons, badge }) => (
          <div key={name}>
            {icons ? (
              <span
                className={
                  icons.length > 1
                    ? 'tech-icons tech-icons--stacked'
                    : 'tech-icons'
                }
                aria-hidden="true"
              >
                {icons.map((icon) => (
                  <img key={icon} src={icon} alt="" />
                ))}
              </span>
            ) : (
              <span className="tech-badge" aria-hidden="true">
                {badge}
              </span>
            )}
            <span>{name}</span>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Start;
