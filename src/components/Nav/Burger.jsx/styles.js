import styled from "styled-components";

export const Container = styled.div`
  width: 24px;
  height: 24px;
  position: fixed;
  top: 23px;
  left: 30px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 24px;
    height: 2.5px;
    background-color: ${({ open }) => open ? '#7B7070' : '#7B7070' };
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'traslateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
