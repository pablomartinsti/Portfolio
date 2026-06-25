import styled from 'styled-components';

export const Container = styled.section`
  padding: 62px 0 34px;

  .section-heading {
    align-items: end;
    display: grid;
    gap: 18px;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 520px);
    margin-bottom: 28px;
  }

  .section-heading > div {
    align-items: center;
    display: flex;
    gap: 12px;
  }

  .section-heading span {
    color: #39d16a;
    font-size: 25px;
    font-weight: 900;
  }

  h2 {
    color: #f8fafc;
    font-size: 28px;
  }

  .section-heading p {
    color: #a8b3c2;
    font-size: 15px;
    line-height: 1.65;
  }

  @media (max-width: 1180px) {
    .section-heading {
      align-items: start;
      gap: 14px;
      grid-template-columns: 1fr;
    }

    .section-heading p {
      max-width: 760px;
    }
  }

  @media (max-width: 1080px) {
    .section-heading p {
      font-size: 22px;
      line-height: 1.62;
    }
  }

  @media (max-width: 768px) {
    .section-heading span {
      font-size: 27px;
    }

    h2 {
      font-size: 29px;
    }
  }

  @media (max-width: 700px) {
    .section-heading p {
      font-size: 19px;
    }
  }

  @media (max-width: 560px) {
    padding: 52px 0 32px;

    .section-heading {
      gap: 14px;
      margin-bottom: 22px;
    }

    h2 {
      font-size: 26px;
      line-height: 1.2;
    }
  }
`;

export const Section = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  .project-card {
    background: rgba(15, 23, 32, 0.86);
    border: 1px solid rgba(148, 163, 184, 0.14);
    border-radius: 8px;
    color: #f8fafc;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    min-width: 0;
    opacity: 0;
    overflow: hidden;
    text-align: left;
    transform: translateY(18px);
    transition:
      border-color 0.25s ease,
      box-shadow 0.25s ease,
      opacity 0.65s ease,
      transform 0.65s ease;
  }

  .project-card.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .project-card:hover,
  .project-card:focus-visible {
    border-color: rgba(57, 209, 106, 0.56);
    box-shadow: 0 22px 52px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  .project-media {
    aspect-ratio: 16 / 9;
    background: #0b1117;
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
    overflow: hidden;
  }

  .project-media img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .project-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 14px;
    padding: 20px;
  }

  .project-type {
    align-self: flex-start;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.24);
    border-radius: 8px;
    color: #67d7ff;
    font-size: 12px;
    font-weight: 800;
    padding: 7px 9px;
  }

  h3 {
    color: #f8fafc;
    font-size: 22px;
    line-height: 1.2;
  }

  p {
    color: #c6d0de;
    font-size: 14px;
    line-height: 1.65;
  }

  ul {
    display: grid;
    gap: 9px;
    list-style: none;
  }

  li {
    border-left: 3px solid #39d16a;
    color: #dce4ee;
    font-size: 13px;
    line-height: 1.45;
    padding-left: 10px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tags span {
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.22);
    border-radius: 8px;
    color: #f8c866;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 8px;
  }

  strong {
    color: #39d16a;
    font-size: 14px;
    margin-top: auto;
  }

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;

    .project-card {
      display: grid;
      grid-template-columns: minmax(260px, 0.82fr) minmax(0, 1.18fr);
    }

    .project-media {
      aspect-ratio: auto;
      border-bottom: 0;
      border-right: 1px solid rgba(148, 163, 184, 0.12);
      height: 100%;
      min-height: 250px;
    }

    .project-content {
      gap: 16px;
      padding: 24px;
    }
  }

  @media (max-width: 1080px) {
    h3 {
      font-size: 31px;
    }

    p {
      font-size: 22px;
      line-height: 1.62;
    }

    li {
      font-size: 21px;
      line-height: 1.52;
    }

    .project-type,
    .tags span {
      font-size: 17px;
    }

    strong {
      font-size: 20px;
    }
  }

  @media (max-width: 980px) {
    .project-card {
      display: flex;
    }

    .project-media {
      aspect-ratio: 16 / 9;
      border-bottom: 1px solid rgba(148, 163, 184, 0.12);
      border-right: 0;
      height: auto;
      min-height: 0;
    }
  }

  @media (max-width: 700px) {
    .project-content {
      gap: 18px;
      padding: 24px;
    }

    .project-type {
      font-size: 16px;
      padding: 8px 10px;
    }

    h3 {
      font-size: 30px;
      line-height: 1.18;
    }

    p {
      font-size: 21px;
      line-height: 1.58;
    }

    li {
      font-size: 20px;
      line-height: 1.5;
      padding-left: 12px;
    }

    .tags span {
      font-size: 15px;
      padding: 7px 9px;
    }

    strong {
      font-size: 19px;
    }
  }

  @media (max-width: 420px) {
    .project-content {
      padding: 22px;
    }

    h3 {
      font-size: 28px;
    }

    p {
      font-size: 20px;
    }

    li {
      font-size: 19px;
    }
  }
`;