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
    /* margin-bottom: 40px; */
  }

  .icons {
    height: 259px;
  }

  .subtitle {
    width: 744px;
    height: 96px;
    margin: 90px 0 50px 0;
  }

  .secondText {
    width: 744px;
    height: 151px;
    margin-bottom: 150px;
  }

  @media (max-width: 768px) {
    .icons {
      height: 90px;
      width: 392px;
    }

    .initialText {
      width: 340px;
    }

    .subtitle {
      margin: 40px 18px 40px;
      width: 392px;
    }

    .secondText {
      width: 340px;
    }
  }
`;
