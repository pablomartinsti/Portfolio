import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  padding: 126px 0 44px;

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.9fr);
    align-items: center;
    gap: 56px;
  }

  .hero-copy {
    min-width: 0;
  }

  .eyebrow {
    color: #39d16a;
    display: inline-block;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 14px;
  }

  h1 {
    color: #f8fafc;
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.04;
    max-width: 720px;
  }

  h1 strong {
    color: #39d16a;
    display: block;
    font-weight: 900;
    margin-top: 6px;
  }

  p {
    color: #b8c2d0;
    font-size: 18px;
    line-height: 1.7;
    margin-top: 24px;
    max-width: 650px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 32px;
  }

  .hero-actions a {
    border-radius: 8px;
    font-size: 15px;
    font-weight: 800;
    min-height: 46px;
    padding: 13px 18px;
    text-decoration: none;
  }

  .primary {
    background: linear-gradient(135deg, #39d16a, #7be495);
    color: #07100b;
  }

  .secondary {
    border: 1px solid rgba(148, 163, 184, 0.28);
    color: #f8fafc;
  }

  .secondary:hover,
  .secondary:focus-visible {
    border-color: rgba(57, 209, 106, 0.65);
    color: #39d16a;
  }

  .code-panel {
    background: rgba(13, 20, 28, 0.92);
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 8px;
    min-width: 0;
    padding: 22px;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
  }

  .window-dots {
    display: flex;
    gap: 8px;
    margin-bottom: 18px;
  }

  .window-dots span {
    width: 12px;
    height: 12px;
    border-radius: 999px;
  }

  .window-dots span:nth-child(1) {
    background: #ef4444;
  }

  .window-dots span:nth-child(2) {
    background: #f59e0b;
  }

  .window-dots span:nth-child(3) {
    background: #39d16a;
  }

  pre {
    overflow-x: auto;
  }

  code {
    color: #dbeafe;
    display: block;
    font-family: Consolas, Monaco, monospace;
    font-size: 15px;
    line-height: 1.8;
    white-space: pre;
  }

  .quick-facts {
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
    border-top: 1px solid rgba(148, 163, 184, 0.12);
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 44px;
    padding: 22px 0;
  }

  .quick-facts div {
    display: grid;
    gap: 5px;
  }

  .quick-facts strong {
    color: #f8fafc;
    font-size: 15px;
  }

  .quick-facts span {
    color: #96a3b5;
    font-size: 13px;
    line-height: 1.45;
  }

  .tech-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-end;
    margin-top: 22px;
  }

  .tech-strip div {
    align-items: center;
    background: rgba(15, 23, 32, 0.86);
    border: 1px solid rgba(148, 163, 184, 0.12);
    border-radius: 8px;
    display: inline-flex;
    gap: 9px;
    min-height: 58px;
    padding: 10px 14px;
  }

  .tech-strip img {
    height: 28px;
    width: 28px;
    object-fit: contain;
  }

  .tech-strip span {
    color: #d8dee8;
    font-size: 13px;
    font-weight: 700;
  }

  @media (max-width: 920px) {
    padding-top: 112px;

    .hero-grid,
    .quick-facts {
      grid-template-columns: 1fr;
    }

    .code-panel {
      order: -1;
    }

    .tech-strip {
      justify-content: flex-start;
    }
  }

  @media (max-width: 560px) {
    .hero-actions a {
      width: 100%;
      text-align: center;
    }

    code {
      font-size: 13px;
    }
  }
`;
