import styled from 'styled-components';

export const Container = styled.section`
  padding: 72px 0 36px;

  .section-title {
    align-items: center;
    display: flex;
    gap: 12px;
    margin-bottom: 28px;
  }

  .section-title span {
    color: #39d16a;
    font-size: 25px;
    font-weight: 900;
  }

  h2 {
    color: #f8fafc;
    font-size: 28px;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr) 370px;
    gap: 28px;
    align-items: start;
  }

  .profile-card,
  .highlights,
  blockquote {
    background: rgba(15, 23, 32, 0.82);
    border: 1px solid rgba(148, 163, 184, 0.14);
    border-radius: 8px;
  }

  .profile-card {
    display: grid;
    justify-items: center;
    gap: 16px;
    padding: 22px;
    text-align: center;
  }

  .profile-card img {
    aspect-ratio: 1;
    border: 2px solid #39d16a;
    border-radius: 50%;
    object-fit: cover;
    width: 150px;
  }

  .profile-card strong,
  .profile-card span {
    display: block;
  }

  .profile-card strong {
    color: #f8fafc;
    font-size: 17px;
  }

  .profile-card span {
    color: #96a3b5;
    font-size: 13px;
    line-height: 1.5;
    margin-top: 6px;
  }

  .about-copy p {
    color: #c6d0de;
    font-size: 16px;
    line-height: 1.75;
    margin-bottom: 16px;
  }

  blockquote {
    border-color: rgba(57, 209, 106, 0.28);
    color: #dbeafe;
    line-height: 1.65;
    margin-top: 20px;
    padding: 18px 20px;
  }

  .highlights {
    display: grid;
  }

  .highlights div {
    align-items: center;
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
    display: grid;
    gap: 8px;
    grid-template-columns: 100px 1fr;
    min-height: 78px;
    padding: 16px 18px;
  }

  .highlights div:last-child {
    border-bottom: 0;
  }

  .highlights strong {
    color: #39d16a;
    font-size: 24px;
  }

  .highlights span {
    color: #c6d0de;
    font-size: 14px;
    line-height: 1.45;
  }

  @media (max-width: 980px) {
    .about-grid {
      grid-template-columns: 1fr;
    }

    .profile-card {
      align-items: center;
      grid-template-columns: auto 1fr;
      justify-items: start;
      text-align: left;
    }

    .profile-card img {
      width: 108px;
    }
  }

  @media (max-width: 540px) {
    padding: 44px 0 28px;

    .profile-card,
    .highlights div {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`;
