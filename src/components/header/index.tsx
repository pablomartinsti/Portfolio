import React, { useEffect, useState } from 'react';
import { Container, Nav, MenuButton } from './styles';
import { profile } from '../../data/profile';

const navItems = [
  ['home', 'Inicio'],
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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 20;

      if (isAtBottom) {
        setActiveSection('contatos');
        return;
      }

      if (scrollPosition < 80) {
        setActiveSection('home');
        return;
      }

      const currentSection = navItems.reduce((current, [id]) => {
        const section = document.getElementById(id);

        if (!section) {
          return current;
        }

        const sectionTop = section.offsetTop - 130;

        if (scrollPosition >= sectionTop) {
          return id;
        }

        return current;
      }, 'home');

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
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

      <Nav id="main-navigation" $isOpen={isOpen}>
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => {
              setActiveSection(id);
              closeMenu();
            }}
            className={activeSection === id ? 'active' : ''}
            aria-current={activeSection === id ? 'page' : undefined}
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
        aria-controls="main-navigation"
      >
        <span />
        <span />
        <span />
      </MenuButton>
    </Container>
  );
}

export default Header;
