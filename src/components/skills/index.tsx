import React from 'react';
import { Container } from './styles';

const groups = [
  {
    title: 'Backend',
    icon: 'API',
    items: [
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Express',
      'REST API',
      'JWT',
    ],
  },
  {
    title: 'Banco de dados',
    icon: 'DB',
    items: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'MongoDB Compass', 'Neon'],
  },
  {
    title: 'DevOps e ferramentas',
    icon: 'OPS',
    items: ['Docker', 'Git', 'GitHub', 'Render', 'HTTPie'],
  },
  {
    title: 'Front que entendo',
    icon: 'UI',
    items: ['React', 'HTML', 'CSS', 'Styled Components', 'Consumo de APIs'],
  },
  {
    title: 'Estudos atuais',
    icon: 'LAB',
    items: ['Testes automatizados', 'Arquitetura de software', 'Microservices'],
  },
];

function Skills() {
  return (
    <Container id="habilidades">
      <div className="section-title">
        <span>&lt;/&gt;</span>
        <h2>Tecnologias</h2>
      </div>

      <div className="skills-grid">
        {groups.map((group) => (
          <article key={group.title}>
            <div className="skill-icon">{group.icon}</div>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
