import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 76px;
  background: rgba(7, 11, 15, 0.88);
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
  backdrop-filter: blur(18px);
  position: fixed;
  top: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: minmax(210px, 1fr) auto auto;
  align-items: center;
  gap: 22px;
  padding: 0 max(24px, calc((100vw - 1180px) / 2));

  .brand {
    color: #f8fafc;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
  }

  .brand-mark {
    color: #39d16a;
    font-size: 32px;
    font-weight: 800;
  }

  .brand strong,
  .brand small {
    display: block;
  }

  .brand strong {
    font-size: 18px;
  }

  .brand small {
    color: #a8b3c2;
    font-size: 13px;
    margin-top: 2px;
  }

  .cv-link {
    border: 1px solid rgba(57, 209, 106, 0.75);
    border-radius: 8px;
    color: #39d16a;
    font-weight: 700;
    padding: 10px 15px;
    text-decoration: none;
    white-space: nowrap;
  }

  .cv-link:hover,
  .cv-link:focus-visible {
    background: rgba(57, 209, 106, 0.12);
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr auto auto;
    padding: 0 18px;

    .cv-link {
      display: none;
    }
  }

  @media (max-width: 560px) {
    gap: 12px;
    min-height: 66px;
    padding: 0 14px;

    .brand {
      gap: 9px;
      min-width: 0;
    }

    .brand-mark {
      font-size: 28px;
    }

    .brand strong {
      font-size: 15px;
      line-height: 1.1;
      white-space: nowrap;
    }

    .brand small {
      font-size: 12px;
      margin-top: 1px;
    }
  }

  @media (max-width: 360px) {
    .brand small {
      display: none;
    }
  }
`;

type NavProps = {
  $isOpen: boolean;
};

export const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  gap: 6px;

  a {
    border-radius: 8px;
    color: #b8c2d0;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 12px;
    text-decoration: none;
  }

  a.active,
  a:hover,
  a:focus-visible {
    background: rgba(57, 209, 106, 0.1);
    color: #39d16a;
  }

  @media (max-width: 1080px) {
    position: absolute;
    left: 14px;
    right: 14px;
    top: 86px;
    background: #0d141c;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 8px;
    display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
    padding: 12px;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);

    a {
      padding: 12px;
    }
  }

  @media (max-width: 560px) {
    top: 74px;

    a {
      font-size: 16px;
      padding: 13px;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 20px;
    height: 2px;
    background: #f8fafc;
    border-radius: 2px;
  }

  @media (max-width: 1080px) {
    display: inline-flex;
  }

  @media (max-width: 560px) {
    height: 40px;
    width: 40px;
  }
`;
