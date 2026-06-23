import React from 'react';
import { Container } from './styles';
import { profile } from '../../data/profile';

const timeline = [
  [
    '2024',
    'Início da jornada na programação através do DevClub FullStack PRO.',
  ],
  ['2025', 'Ingresso no curso de Engenharia de Software na Anhanguera.'],
  [
    '2026',
    'Cursando o 4º período de Engenharia de Software, participando de bootcamps e cursos complementares na DIO, além do desenvolvimento de projetos com foco em Backend.',
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
