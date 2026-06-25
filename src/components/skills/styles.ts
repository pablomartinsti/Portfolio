import styled from 'styled-components';

export const Container = styled.section`
  padding: 62px 0 32px;

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

  .skills-grid {
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }

  article {
    background: rgba(15, 23, 32, 0.82);
    border: 1px solid rgba(148, 163, 184, 0.14);
    border-radius: 8px;
    min-height: 230px;
    padding: 22px;
  }

  .skill-icon {
    align-items: center;
    background: rgba(57, 209, 106, 0.12);
    border: 1px solid rgba(57, 209, 106, 0.22);
    border-radius: 8px;
    color: #39d16a;
    display: inline-flex;
    font-size: 13px;
    font-weight: 900;
    height: 42px;
    justify-content: center;
    margin-bottom: 18px;
    width: 52px;
  }

  h3 {
    color: #f8fafc;
    font-size: 18px;
    margin-bottom: 16px;
  }

  ul {
    display: grid;
    gap: 10px;
    list-style: none;
  }

  li {
    color: #c6d0de;
    font-size: 14px;
    line-height: 1.35;
    padding-left: 14px;
    position: relative;
  }

  li::before {
    background: #39d16a;
    border-radius: 999px;
    content: '';
    height: 5px;
    left: 0;
    position: absolute;
    top: 8px;
    width: 5px;
  }

  @media (max-width: 1180px) {
    .skills-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    article {
      min-height: auto;
    }

    h3 {
      font-size: 19px;
    }

    li {
      font-size: 15px;
      line-height: 1.5;
    }
  }

  @media (max-width: 620px) {
    padding: 50px 0 30px;

    .section-title {
      margin-bottom: 22px;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }

    article {
      padding: 24px;
    }

    h3 {
      font-size: 20px;
    }

    li {
      font-size: 16px;
      line-height: 1.58;
    }
  }

  @media (max-width: 768px) {
    .section-title span {
      font-size: 27px;
    }

    h2 {
      font-size: 29px;
    }

    article {
      padding: 24px;
    }

    .skill-icon {
      font-size: 14px;
    }

    h3 {
      font-size: 22px;
    }

    li {
      font-size: 17px;
      line-height: 1.62;
    }
  }

  @media (max-width: 420px) {
    li {
      font-size: 16.5px;
    }
  }
  /* bigger skills typography */
  @media (max-width: 1080px) {
    h3 {
      font-size: 25px;
    }

    li {
      font-size: 20px;
      line-height: 1.6;
    }
  }

  @media (max-width: 700px) {
    h3 {
      font-size: 23px;
    }

    li {
      font-size: 18px;
    }
  }`;
