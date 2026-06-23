import React from 'react';
import { Container } from './styles';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import whatsapp from '../../assets/whatsapp.png';
import { profile } from '../../data/profile';

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: email,
  },
  {
    label: 'GitHub',
    value: profile.githubUser,
    href: profile.githubUrl,
    icon: github,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinUser,
    href: profile.linkedinUrl,
    icon: linkedin,
  },
  {
    label: 'WhatsApp',
    value: profile.phone,
    href: profile.whatsappUrl,
    icon: whatsapp,
  },
].filter((item) => item.value && item.href);

function Contact() {
  return (
    <Container id="contatos">
      <div className="contact-card">
        <div>
          <span className="section-kicker">&lt;/&gt; Contato</span>
          <h2>Vamos conversar sobre uma oportunidade?</h2>
          <p>
            Estou disponível para vagas júnior backend, remoto ou em Uberlândia.
            Meu foco é construir APIs bem organizadas e evoluir em um time real.
          </p>
        </div>

        <a className="contact-action" href={`mailto:${profile.email}`}>
          Entrar em contato
        </a>
      </div>

      <div className="contact-list">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.icon} alt="" />
            <span>
              <strong>{item.label}</strong>
              <small>{item.value}</small>
            </span>
          </a>
        ))}
      </div>

      <footer>
        <p>
          © {new Date().getFullYear()} {profile.shortName}. Todos os direitos
          reservados.
        </p>
      </footer>
    </Container>
  );
}

export default Contact;
