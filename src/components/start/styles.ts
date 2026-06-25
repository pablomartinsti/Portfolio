import styled from 'styled-components';

export const Container = styled.section`
  min-height: auto;
  padding: 126px 0 44px;

  .hero-grid {
    align-items: center;
    display: grid;
    gap: 56px;
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.9fr);
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
    font-size: clamp(42px, 4vw, 55px);
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
    background: linear-gradient(
      180deg,
      rgba(15, 23, 42, 0.98) 0%,
      rgba(2, 6, 23, 0.98) 100%
    );
    border: 1px solid rgba(56, 189, 248, 0.15);
    border-radius: 14px;
    min-width: 0;
    padding: 24px;
    box-shadow:
      0 24px 80px rgba(0, 0, 0, 0.45),
      0 0 32px rgba(56, 189, 248, 0.08);
    .language-javascript {
      font-size: 17px !important;
    }
  }

  .window-dots {
    display: flex;
    gap: 8px;
    margin-bottom: 18px;
  }

  .window-dots span {
    border-radius: 999px;
    height: 12px;
    width: 12px;
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 44px;
    padding: 22px 0;
  }

  .quick-facts div {
    display: grid;
    gap: 5px;
    justify-items: center;
    text-align: center;
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
    justify-content: center;
    margin-top: 22px;
  }

  .tech-strip div {
    align-items: center;
    background: rgba(15, 23, 32, 0.86);
    border: 1px solid rgba(148, 163, 184, 0.12);
    border-radius: 8px;
    display: inline-flex;
    gap: 9px;
    justify-content: center;
    min-height: 58px;
    min-width: 132px;
    padding: 10px 14px;
  }

  .tech-strip img,
  .tech-badge {
    height: 28px;
    width: 28px;
  }

  .tech-icons {
    align-items: center;
    display: inline-flex;
    gap: 4px;
  }

  .tech-icons--stacked {
    flex-direction: column;
    gap: 1px;
  }

  .tech-icons--stacked img {
    height: 20px;
    width: 20px;
  }

  .tech-strip img {
    object-fit: contain;
  }

  .tech-badge {
    align-items: center;
    border: 1px solid rgba(57, 209, 106, 0.5);
    border-radius: 8px;
    color: #39d16a;
    display: inline-flex;
    font-size: 10px;
    font-weight: 900;
    justify-content: center;
  }

  .tech-strip span {
    color: #d8dee8;
    font-size: 13px;
    font-weight: 700;
  }

  @media (max-width: 1180px) {
    .hero-grid {
      gap: 38px;
      grid-template-columns: minmax(0, 1fr) minmax(320px, 0.78fr);
    }

    .tech-strip {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      justify-content: stretch;
    }

    .tech-strip div {
      min-width: 0;
      width: 100%;
    }
  }

  @media (max-width: 1080px) {
    padding: 112px 0 36px;

    .hero-grid {
      gap: 28px;
      grid-template-columns: 1fr;
    }

    .hero-copy {
      margin-inline: auto;
      max-width: 100%;
      width: 100%;
    }

    .code-panel {
      margin-inline: auto;
      max-width: 100%;
      padding: 20px;
      width: 100%;

      .language-javascript {
        font-size: 25px !important;
      }
    }

    .window-dots {
      margin-bottom: 14px;
    }

    h1 {
      font-size: clamp(48px, 7.2vw, 68px);
      margin-inline: auto;
      max-width: 100%;
    }

    p {
      font-size: 25px;
      line-height: 1.75;
      margin-inline: auto;
      max-width: 100%;
    }

    .hero-actions {
      justify-content: space-between;
      margin-inline: auto;
      max-width: 100%;
    }

    .hero-actions a {
      flex: 1 1 150px;
      font-size: 22px;
      min-height: 52px;
      text-align: center;
    }

    .quick-facts {
      margin-top: 36px;
    }

    .quick-facts strong {
      font-size: 25px;
    }

    .quick-facts span,
    .tech-strip span {
      font-size: 22px;
    }
  }

  @media (max-width: 920px) {
    padding: 96px 0 28px;

    .hero-grid {
      gap: 28px;
    }

    .hero-actions {
      margin-top: 24px;
    }

    .quick-facts {
      padding: 18px 0;
    }

    .tech-strip div {
      min-height: 58px;
    }
  }

  @media (max-width: 560px) {
    .quick-facts {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    .hero-grid {
      gap: 24px;
    }

    .hero-copy,
    h1,
    p,
    .hero-actions {
      max-width: 100%;
      width: 100%;
    }

    .quick-facts div {
      background: rgba(15, 23, 32, 0.62);
      border: 1px solid rgba(148, 163, 184, 0.12);
      border-radius: 8px;
      min-height: 74px;
      padding: 14px;
    }

    .tech-strip {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .tech-strip div {
      min-height: 66px;
      padding: 12px 10px;
    }
  }

  @media (max-width: 560px) {
    padding-top: 82px;

    .hero-grid {
      gap: 20px;
    }

    .eyebrow {
      font-size: 15px;
      margin-bottom: 10px;
    }

    h1 {
      font-size: clamp(32px, 9.2vw, 40px);
      line-height: 1.08;
    }

    h1 strong {
      font-size: clamp(38px, 10.8vw, 46px);
      line-height: 1.04;
      margin-top: 4px;
    }

    p {
      line-height: 1.72;
      margin-top: 16px;
    }

    .hero-actions {
      gap: 10px;
      margin-top: 22px;
    }

    .hero-actions a {
      flex: 1 1 100%;
      min-height: 48px;
      width: 100%;
    }

    .code-panel {
      border-radius: 10px;
      max-height: 260px;
      overflow: hidden;
      padding: 12px;
    }

    .window-dots {
      gap: 6px;
      margin-bottom: 10px;
    }

    .window-dots span {
      height: 9px;
      width: 9px;
    }

    pre {
      max-height: 232px;
      overflow: hidden;
    }

    code {
      font-size: 12px;
      line-height: 1.58;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: clamp(30px, 8.2vw, 33px);
    }

    h1 strong {
      font-size: clamp(35px, 9.8vw, 40px);
    }

    .hero-actions a {
      min-height: 46px;
    }

    .code-panel {
      max-height: 232px;
    }
  }

  @media (max-width: 380px) {
    .tech-strip {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1080px) {
    .eyebrow {
      font-size: 18px;
    }

    h1 {
      font-size: 52px;
      line-height: 1.06;
    }

    h1 strong {
      font-size: 56px;
      line-height: 1.04;
    }

    p {
      font-size: 20px;
      line-height: 1.75;
    }

    .hero-actions a {
      font-size: 17px;
      min-height: 54px;
    }

    .code-panel .language-javascript {
      font-size: 17px !important;
    }

    code {
      font-size: 15px;
      line-height: 1.75;
    }

    .quick-facts strong {
      font-size: 17px;
    }

    .quick-facts span,
    .tech-strip span {
      font-size: 15px;
      line-height: 1.5;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 42px;
    }

    h1 strong {
      font-size: 46px;
    }

    p {
      font-size: 18px;
    }

    .code-panel .language-javascript {
      font-size: 14px !important;
    }

    code {
      font-size: 13px;
      line-height: 1.62;
    }

    .quick-facts strong {
      font-size: 16px;
    }

    .quick-facts span,
    .tech-strip span {
      font-size: 14px;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 36px;
    }

    h1 strong {
      font-size: 40px;
    }

    p {
      font-size: 17px;
    }

    .hero-actions a {
      font-size: 16px;
    }
  }
  /* bigger responsive typography */
  @media (max-width: 1080px) {
    .eyebrow {
      font-size: 21px;
    }

    h1 {
      font-size: 58px;
      line-height: 1.05;
    }

    h1 strong {
      font-size: 62px;
      line-height: 1.04;
    }

    p {
      font-size: 23px;
      line-height: 1.7;
    }

    .hero-actions a {
      font-size: 20px;
      min-height: 58px;
    }

    code,
    .code-panel .language-javascript {
      font-size: 18px !important;
      line-height: 1.7;
    }

    .quick-facts strong {
      font-size: 20px;
    }

    .quick-facts span,
    .tech-strip span {
      font-size: 18px;
      line-height: 1.5;
    }
  }

  @media (max-width: 700px) {
    .eyebrow {
      font-size: 18px;
    }

    h1 {
      font-size: 42px;
    }

    h1 strong {
      font-size: 46px;
    }

    p {
      font-size: 20px;
      line-height: 1.65;
    }

    .hero-actions a {
      font-size: 18px;
    }

    code,
    .code-panel .language-javascript {
      font-size: 15px !important;
      line-height: 1.55;
    }

    .quick-facts strong {
      font-size: 18px;
    }

    .quick-facts span,
    .tech-strip span {
      font-size: 16px;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 38px;
    }

    h1 strong {
      font-size: 42px;
    }

    p {
      font-size: 19px;
    }
  }`;
