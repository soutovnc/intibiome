import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 242px;
  background-color: ${(props) => props.theme['blue-300']};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 25px;
    cursor: pointer;
    color: ${(props) => props.theme['white']};
  }

  li {
    border-right: 1px solid #FFF;
    padding-right: 15px;
    list-style: none;
  }

  .icons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 500px;
  }

  .ulabsIcon {
    width: 116px;
    height: 29px;
    cursor: pointer;
  }

  svg {
    width: 43px;
    height: 43px;
    cursor: pointer;
    color: ${(props) => props.theme['white']}
  }

  @media (max-width: 768px) {
    height: auto;
    padding-right: 50px;

    ul {
      margin-top: 50px;
      flex-direction: column;
    }

    li {
      padding: 0 0 50px 0;
      border: none;
      border-bottom: 1px solid #FFF;
      padding-bottom: 15px;
    }

    .icons {
      gap: 90px;
      justify-content: center;
      flex-direction: column-reverse;
      margin-top: 50px;
      margin-bottom: 40px;
    }

  }
`;
