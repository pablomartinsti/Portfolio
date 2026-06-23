import React, { type ReactNode, useEffect, useState } from 'react';
import { Container, Section } from './styles';
import Modal from '../Modal';

import MartirPonto from '../../assets/martir-ponto.png';
import MartirPontoVideo from '../../assets/martir-ponto.mp4';
import IgrejaGestTec from '../../assets/igrejagesttec-preview.png';
import ApiNotaFiscal from '../../assets/api-nota-fiscal-case.svg';

type Project = {
  image: string;
  video?: string;
  type: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  description: ReactNode;
  links: [string, string][];
};

const projects: Project[] = [
  {
    image: IgrejaGestTec,
    type: 'Sistema de gestão',
    title: 'IgrejaGestTec',
    summary:
      'Sistema financeiro e espiritual para igrejas com dashboard, cultos, transações, categorias e relatórios.',
    highlights: [
      'API com Node.js, TypeScript, Express, Prisma e PostgreSQL',
      'Autenticação JWT, perfis de acesso e isolamento por igreja',
      'Deploy preparado para Render, Neon, migrations e seed',
    ],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    description: (
      <div className="case-study">
        <p>
          Sistema para gestão financeira e espiritual de igrejas. O backend
          organiza autenticação, perfis de acesso, dados por igreja, categorias,
          cultos, transações, relatórios e dashboards.
        </p>
        <h3>Responsabilidades</h3>
        <ul>
          <li>Criei API com TypeScript, Express, Prisma e PostgreSQL.</li>
          <li>Implementei autenticação JWT e permissões por perfil.</li>
          <li>
            Modelei relatórios financeiros, cultos e registros espirituais.
          </li>
          <li>Preparei scripts de seed, validação de rotas e deploy.</li>
        </ul>
      </div>
    ),
    links: [
      ['GitHub API', 'https://github.com/pablomartinsti/igrejagesttec-api'],
      [
        'GitHub Frontend',
        'https://github.com/pablomartinsti/igrejagesttec-front',
      ],
    ],
  },
  {
    image: ApiNotaFiscal,
    type: 'API backend',
    title: 'API de NFS-e',
    summary:
      'API SaaS multiempresa para gestão e emissão simulada/fiscal de notas de serviço.',
    highlights: [
      'Onboarding de empresa, usuários, clientes, serviços e notas',
      'Fluxo fiscal com XML, certificado A1, auditoria e reconciliação',
      'Testes unitários e de integração HTTP com Vitest/Supertest',
    ],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    description: (
      <div className="case-study">
        <p>
          API backend para um SaaS multiempresa de notas fiscais de serviço. O
          projeto tem isolamento por empresa, autenticação, gestão de usuários,
          clientes, serviços, notas e fluxo fiscal.
        </p>
        <h3>Responsabilidades</h3>
        <ul>
          <li>
            Organizei a arquitetura em controllers, services e repositories.
          </li>
          <li>
            Implementei regras fiscais, status de nota e rotas protegidas.
          </li>
          <li>Criei validações, logs seguros e testes de integração HTTP.</li>
          <li>Usei HTTPie para validar rotas, payloads e respostas.</li>
        </ul>
      </div>
    ),
    links: [
      ['GitHub API', 'https://github.com/pablomartinsti/api-nota-fiscal'],
    ],
  },
  {
    image: MartirPonto,
    video: MartirPontoVideo,
    type: 'Produto completo',
    title: 'Martir Ponto Digital',
    summary:
      'Sistema de controle de ponto com dashboard web, app mobile, geolocalização, autenticação e relatórios.',
    highlights: [
      'API com autenticação JWT, funcionarios, escalas e marcações',
      'Registro de ponto por geolocalização e fluxo administrativo',
      'Relatorios em PDF e deploy com backend no Render',
    ],
    stack: ['Node.js', 'Express', 'MongoDB Atlas', 'React', 'Render'],
    description: (
      <div className="case-study">
        <p>
          Projeto real de controle de ponto, desenvolvido de ponta a ponta. O
          backend centraliza autenticação, funcionarios, escalas, marcações,
          validações e relatórios; o painel web permite a gestão administrativa.
        </p>
        <h3>Responsabilidades</h3>
        <ul>
          <li>Modelei os fluxos principais da API e as regras de negócio.</li>
          <li>Implementei autenticação, usuários e rotas protegidas.</li>
          <li>Criei integração entre backend, dashboard web e app mobile.</li>
          <li>Publiquei o backend no Render e o frontend na Vercel.</li>
        </ul>
      </div>
    ),
    links: [
      ['Acessar deploy', 'https://pontodigital.martircontabil.com.br/'],
      [
        'GitHub Backend',
        'https://github.com/pablomartinsti/martir-ponto-digital-backend',
      ],
      [
        'GitHub Frontend',
        'https://github.com/pablomartinsti/martir-ponto-digital-admin',
      ],
      [
        'GitHub Mobile',
        'https://github.com/pablomartinsti/martir-ponto-digital-mobile',
      ],
    ],
  },
];

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container id="portfolio">
      <div className="section-heading">
        <div>
          <span>&lt;/&gt;</span>
          <h2>Projetos em destaque</h2>
        </div>
        <p>
          Apenas os projetos mais fortes para vaga backend: API, banco, regras
          de negócio, autenticação, deploy e validação de rotas.
        </p>
      </div>

      <Section>
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            className="project-card"
            onClick={() => handleOpenModal(project)}
            aria-label={`Ver detalhes do projeto ${project.title}`}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="tags">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <strong>Ver estudo de caso</strong>
            </div>
          </button>
        ))}
      </Section>

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedProject.image}
          video={selectedProject.video}
          title={selectedProject.title}
          description={selectedProject.description}
          link={
            <div className="links">
              {selectedProject.links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          }
        />
      )}
    </Container>
  );
}

export default Portfolio;
