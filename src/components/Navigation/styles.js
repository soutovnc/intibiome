import styled from "styled-components";

export const Container = styled.div`
  height: 49px;
  width: 100%;
  background-color: ${(props) => props.theme['blue-300']};
  color: ${(props) => props.theme['white']};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
  }

  li:hover {
    cursor: pointer;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
