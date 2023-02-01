import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  list-style: none;
  height: 0;
  flex-flow: row nowrap;


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme['blue-300']};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    top: 70px;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 1s ease-in-out;

    li {
      color: #FFF;
      margin-left: 40px;

    & + li {
      margin-top: 40px;
    }
    }


}
`;
