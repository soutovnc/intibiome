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

  h2 {
    margin-top: 140px;
  }

  li {
    list-style: none;
    width: 356px;
    height: 531px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: var(--white);
    border-radius: 16px;
    box-shadow: #00000014 0px 3px 16px;
    margin-top: 40px;

    img {
      width: 11rem;
      height: 351px;
    }

    p {
      text-align: center;
      padding: 13px;
    }

    span {
      width: 356px;
      height: 73px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['white']};
      font-size: 25px;
      border-radius: 0px 0px 16px 16px;
    }

    .wellness {
      background-color: ${(props) => props.theme['blue-300']}
    }

    .active {
      background-color: ${(props) => props.theme['green']}
    }

    .agecare {
      background-color: ${(props) => props.theme['red']}
    }
  }

  @media (max-width: 768px) {
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
