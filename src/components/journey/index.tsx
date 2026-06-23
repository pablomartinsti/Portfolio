import React from 'react';
import { Container } from './styles';
import { profile } from '../../data/profile';

const timeline = [
  [
    '2022',
    'Início dos estudos em desenvolvimento web e lógica de programação.',
  ],
  [
    '2023',
    'Aprofundamento em Node.js, bancos de dados e construção de APIs REST.',
  ],
  [
    '2024 - Atual',
    'Desenvolvimento de projetos completos, estudos de boas práticas, arquitetura e deploy.',
  ],
];

function Journey() {
  return (
    <Container id="jornada">
      <div className="journey">
        <div>
          <div className="section-title">
            <span>&lt;/&gt;</span>
            <h2>Minha jornada</h2>
          </div>

          <ol>
            {timeline.map(([year, text]) => (
              <li key={year}>
                <strong>{year}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>

        <article>
          <span className="card-label">Formação</span>
          <h3>{profile.course}</h3>
          <p>Em andamento</p>
          <div className="formation-meta">
            <span>{profile.period}</span>
            {profile.institution && <span>{profile.institution}</span>}
            <span>Previsão de conclusão: {profile.graduationForecast}</span>
          </div>
        </article>
      </div>
    </Container>
  );
}

export default Journey;
