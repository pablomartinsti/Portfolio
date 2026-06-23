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
    grid-template-columns: repeat(5, minmax(0, 1fr));
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

  @media (max-width: 1120px) {
    .skills-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
`;
