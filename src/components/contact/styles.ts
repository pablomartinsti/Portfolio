import styled from 'styled-components';

export const Container = styled.section`
  padding: 58px 0 34px;

  .contact-card {
    align-items: center;
    background: linear-gradient(
      135deg,
      rgba(15, 23, 32, 0.92),
      rgba(17, 31, 27, 0.92)
    );
    border: 1px solid rgba(57, 209, 106, 0.22);
    border-radius: 8px;
    display: grid;
    gap: 24px;
    grid-template-columns: minmax(0, 1fr) auto;
    padding: 28px;
  }

  .section-kicker {
    color: #39d16a;
    display: block;
    font-size: 14px;
    font-weight: 900;
    margin-bottom: 12px;
  }

  h2 {
    color: #f8fafc;
    font-size: 26px;
    line-height: 1.25;
  }

  p {
    color: #b8c2d0;
    font-size: 15px;
    line-height: 1.65;
    margin-top: 10px;
    max-width: 720px;
  }

  .contact-action {
    background: linear-gradient(135deg, #39d16a, #7be495);
    border-radius: 8px;
    color: #07100b;
    font-weight: 900;
    padding: 14px 22px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
  }

  .contact-list {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 20px;
  }

  .contact-list a {
    align-items: center;
    background: rgba(15, 23, 32, 0.82);
    border: 1px solid rgba(148, 163, 184, 0.14);
    border-radius: 8px;
    color: #f8fafc;
    display: flex;
    gap: 14px;
    min-width: 0;
    padding: 18px;
    text-decoration: none;
  }

  .contact-list a:hover,
  .contact-list a:focus-visible {
    border-color: rgba(57, 209, 106, 0.5);
  }

  .contact-list img {
    height: 34px;
    width: 34px;
    object-fit: contain;
  }

  .contact-list strong,
  .contact-list small {
    display: block;
    min-width: 0;
  }

  .contact-list strong {
    color: #39d16a;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .contact-list small {
    color: #c6d0de;
    font-size: 13px;
    overflow-wrap: anywhere;
  }

  footer {
    align-items: center;
    border-top: 1px solid rgba(148, 163, 184, 0.12);
    color: #96a3b5;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    margin-top: 42px;
    padding-top: 24px;
  }

  footer strong {
    color: #f8fafc;
    display: block;
  }

  footer span,
  footer p {
    color: #96a3b5;
    font-size: 13px;
    margin: 0;
  }

  @media (max-width: 780px) {
    .contact-card,
    .contact-list {
      grid-template-columns: 1fr;
    }

    .contact-action {
      width: 100%;
    }

    footer {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;
