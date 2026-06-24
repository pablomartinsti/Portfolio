import React, { useEffect, useState } from 'react';
import { Container, Nav, MenuButton } from './styles';
import { profile } from '../../data/profile';

const navItems = [
  ['home', 'Início'],
  ['sobre', 'Sobre mim'],
  ['habilidades', 'Tecnologias'],
  ['portfolio', 'Projetos'],
  ['jornada', 'Jornada'],
  ['contatos', 'Contato'],
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: '-120px 0px -45% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">&lt;/&gt;</span>
        <span>
          <strong>{profile.shortName}</strong>
          <small>{profile.role}</small>
        </span>
      </a>

      <Nav $isOpen={isOpen}>
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => {
              setActiveSection(id);
              closeMenu();
            }}
            className={activeSection === id ? 'active' : ''}
          >
            {label}
          </a>
        ))}
      </Nav>

      <a className="cv-link" href={profile.curriculumPath} download>
        Baixar CV
      </a>

      <MenuButton
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </MenuButton>
    </Container>
  );
}

export default Header;
