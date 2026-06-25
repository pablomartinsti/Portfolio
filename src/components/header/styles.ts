import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: rgba(7, 11, 15, 0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
  display: grid;
  gap: 22px;
  grid-template-columns: minmax(210px, 1fr) auto auto;
  min-height: 76px;
  padding: 0 max(24px, calc((100vw - 1180px) / 2));
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .brand {
    align-items: center;
    color: #f8fafc;
    display: inline-flex;
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

  @media (max-width: 768px) {
    .brand strong {
      font-size: 17px;
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
      font-size: 16px;
      line-height: 1.1;
      white-space: nowrap;
    }

    .brand small {
      font-size: 13px;
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
  align-items: center;
  display: flex;
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
    background: #0d141c;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 8px;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
    display: ${({ $isOpen }) => ($isOpen ? 'grid' : 'none')};
    left: 14px;
    padding: 12px;
    position: absolute;
    right: 14px;
    top: 86px;

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
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 8px;
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 5px;
  height: 42px;
  justify-content: center;
  width: 42px;

  span {
    background: #f8fafc;
    border-radius: 2px;
    height: 2px;
    width: 20px;
  }

  @media (max-width: 1080px) {
    display: inline-flex;
  }

  @media (max-width: 560px) {
    height: 40px;
    width: 40px;
  }
`;