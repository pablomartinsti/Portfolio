import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(rgba(20, 209, 106, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.035) 1px, transparent 1px),
    linear-gradient(180deg, #070b0f 0%, #0b1117 48%, #080c11 100%);
  background-size:
    72px 72px,
    72px 72px,
    auto;
  color: #f8fafc;
  min-height: 100vh;
  overflow-x: hidden;

  main {
    width: min(100% - 40px, 1180px);
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    main {
      width: min(100% - 28px, 1180px);
    }
  }
`;
