import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Trebuchet MS' , sans-serif;
    font-weight: 400;
    font-size: 1rem;
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
  }

`;
