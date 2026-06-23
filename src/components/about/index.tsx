import React from 'react';
import { Container } from './styles';
import { profile } from '../../data/profile';

const highlights = [
  ['2+', 'anos estudando desenvolvimento'],
  ['3', 'projetos completos no portfolio'],
  ['Backend', 'Node.js, TypeScript, APIs e banco'],
  [profile.period, profile.course],
];

function About() {
  return (
    <Container id="sobre">
      <div className="section-title">
        <span>&lt;/&gt;</span>
        <h2>Sobre mim</h2>
      </div>

      <div className="about-grid">
        <div className="profile-card">
          <img src={profile.photo} alt={profile.fullName} />
          <div>
            <strong>{profile.fullName}</strong>
            <span>{profile.headline}</span>
          </div>
        </div>

        <div className="about-copy">
          <p>
            Sou desenvolvedor backend em formação, focado em construir APIs
            organizadas, seguras e conectadas a bancos de dados reais. Tenho
            prática com Node.js, TypeScript, Express, PostgreSQL, MongoDB,
            Prisma, Docker, Render, Neon, MongoDB Compass e HTTPie.
          </p>
          <p>
            Também estudo front-end com React para conseguir entregar telas
            administrativas e dashboards que consomem minhas próprias APIs. Hoje
            busco minha primeira oportunidade como desenvolvedor backend júnior.
          </p>
          <blockquote>
            Disciplina, prática e projetos reais são meu caminho para entrar no
            mercado com consistência.
          </blockquote>
        </div>

        <div className="highlights">
          {highlights.map(([value, label]) => (
            <div key={`${value}-${label}`}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default About;
