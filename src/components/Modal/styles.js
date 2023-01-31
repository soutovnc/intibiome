import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 40px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 40px;
    width: 356px;
    height: 64px;
    background-color: ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme['white']};
    font-size: 20px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
  }

  h2 {
    margin-top: 140px;
  }

  li {
    list-style: none;
    width: 356px;
    height: 355px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: ${(props) => props.theme['white']};
    border-radius: 16px;
    box-shadow: #00000014 0px 3px 16px;
    margin-top: 40px;
/*
    img {
      width: 357px;
      height: 232px;
    } */

    p {
      text-align: center;
      margin-bottom: 30px;
    }

  }

  @media (max-width: 768px) {
    h2 {
      text-align: center;
      width: 300px;
    }

    ul {
      width: 428px;;
      overflow-y: auto;
      justify-content: flex-start;
    }

    p {
      width: 292px;
    }
  }
`;
