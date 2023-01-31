import styled from "styled-components";

export const Container = styled.div`
  .descriptionText {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .title {
    margin: 40px 72px 32px;
  }

  .initialText {
    width: 550px;
    height: 251px;
    margin-bottom: 40px;
  }

  .icons {
    height: 259px;
    max-width: 1080px;
  }

  .subtitle {
    width: 744px;
    height: 96px;
    margin: 90px 0 50px 0px;
  }

  .secondText {
    width: 744px;
    height: 151px;
    margin-top: 40px;
  }

  h2 {
    font-weight: bold;
    font-size: 39px;
    color: ${(props) => props.theme['blue-300']};
    line-height: 40px;
  }

  p {
    font-weight: normal;
    font-size: 20px;
    color: ${(props) => props.theme['gray-600']};
    line-height: 22px;
  }

  @media (max-width: 768px) {
    h2 {
      font-weight: bold;
      font-size: 31px;
      color: ${(props) => props.theme['blue-300']};
      line-height: 36px;
      letter-spacing: 0.62px;
    }

    p {
      font-weight: normal;
      font-size: 1rem;
      /* line-height: 18px; */
      color: ${(props) => props.theme['gray-600']};
      opacity: 1;
      letter-spacing: 0.32px;
    }

    .icons {
      height: 90px;
      width: 392px;
      margin-bottom: 40px;
    }

    .initialText {
      width: 340px;
    }

    .subtitle {
      margin: 18px;
      width: 392px;
    }

    .secondText {
      width: 340px;
    }
  }
`;
