import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  inset: 0;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  position: fixed;
  z-index: 2000;
`;

export const Container = styled.div`
  background: #0d141c;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 8px;
  max-height: calc(100vh - 32px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  position: relative;
  scrollbar-width: none;
  width: min(1120px, calc(100vw - 32px));

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CloseButton = styled.button`
  background: #39d16a;
  border: 0;
  border-radius: 8px;
  color: #07100b;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  height: 38px;
  line-height: 1;
  position: absolute;
  right: 0;
  top: 0;
  width: 38px;
  z-index: 2;
`;

export const Image = styled.img`
  background: #0b1117;
  border: 1px solid rgba(57, 209, 106, 0.24);
  border-radius: 8px;
  display: block;
  max-height: 58vh;
  object-fit: contain;
  width: 100%;

  @media (max-width: 820px) {
    max-height: 38vh;
  }
`;

export const Video = styled.video`
  background: #0b1117;
  border: 1px solid rgba(57, 209, 106, 0.24);
  border-radius: 8px;
  max-height: 58vh;
  object-fit: contain;
  width: 100%;

  @media (max-width: 820px) {
    max-height: 38vh;
  }
`;

export const Section = styled.div`
  align-items: start;
  color: #f8fafc;
  display: grid;
  gap: 28px;
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr);
  width: 100%;

  > ${Image} {
    min-width: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ThumbnailWrapper = styled.button`
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const PlayOverlay = styled.div`
  align-items: center;
  background: rgba(7, 11, 15, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  color: #f8fafc;
  display: flex;
  font-size: 14px;
  font-weight: 900;
  height: 54px;
  justify-content: center;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 92px;
`;

export const Description = styled.div`
  min-width: 0;
  overflow-wrap: anywhere;
  padding-right: 52px;
  position: relative;
  width: 100%;

  h2 {
    color: #f8fafc;
    line-height: 1.2;
    margin: 0 0 12px;
  }

  p {
    color: #c6d0de;
    line-height: 1.65;
    margin-bottom: 20px;
  }

  .case-study h3 {
    color: #67d7ff;
    margin: 18px 0 10px;
  }

  .case-study ul {
    color: #dce4ee;
    display: grid;
    gap: 10px;
    margin-left: 18px;
  }

  .case-study li {
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    padding-right: 0;

    h2 {
      padding-right: 52px;
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 20px;

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  a {
    background: #39d16a;
    border-radius: 8px;
    color: #07100b;
    flex: 1 1 180px;
    font-size: 15px;
    font-weight: 900;
    padding: 11px;
    text-align: center;
    text-decoration: none;
  }
`;
