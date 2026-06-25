import styled from 'styled-components';

export const Container = styled.section`
  padding: 58px 0 34px;

  .journey {
    display: grid;
    gap: 28px;
    grid-template-columns: minmax(0, 1fr) 420px;
  }

  .section-title {
    align-items: center;
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
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

  ol {
    display: grid;
    gap: 20px;
    list-style: none;
    position: relative;
  }

  li {
    border-left: 2px solid rgba(57, 209, 106, 0.4);
    display: grid;
    gap: 6px;
    padding-left: 22px;
    position: relative;
  }

  li::before {
    background: #39d16a;
    border-radius: 999px;
    content: '';
    height: 12px;
    left: -7px;
    position: absolute;
    top: 4px;
    width: 12px;
  }

  li strong {
    color: #39d16a;
    font-size: 15px;
  }

  li p {
    color: #c6d0de;
    font-size: 15px;
    line-height: 1.65;
  }

  article {
    align-self: start;
    background: rgba(15, 23, 32, 0.86);
    border: 1px solid rgba(148, 163, 184, 0.14);
    border-radius: 8px;
    padding: 24px;
  }

  .card-label {
    color: #39d16a;
    display: block;
    font-size: 13px;
    font-weight: 900;
    margin-bottom: 14px;
    text-transform: uppercase;
  }

  article h3 {
    color: #f8fafc;
    font-size: 22px;
    line-height: 1.3;
  }

  article p {
    color: #39d16a;
    font-size: 15px;
    margin: 10px 0 18px;
  }

  .formation-meta {
    display: grid;
    gap: 10px;
  }

  .formation-meta span {
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(148, 163, 184, 0.12);
    border-radius: 8px;
    color: #c6d0de;
    display: block;
    font-size: 14px;
    padding: 12px;
  }

  @media (max-width: 1080px) {
    li strong,
    article p {
      font-size: 23px;
    }

    li p,
    .formation-meta span {
      font-size: 22px;
      line-height: 1.58;
    }
  }

  @media (max-width: 880px) {
    .journey {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .section-title span {
      font-size: 27px;
    }

    h2 {
      font-size: 29px;
    }

    article h3 {
      font-size: 23px;
    }
  }

  @media (max-width: 700px) {
    .journey {
      grid-template-columns: 1fr;
    }

    article {
      width: 100%;
    }

    li strong,
    article p {
      font-size: 20px;
    }

    li p,
    .formation-meta span {
      font-size: 19px;
    }
  }
`;
