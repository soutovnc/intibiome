import { Container, ContentContainer } from "./styles";

import modalImage from "../../assets/images/modal-image.png";
import modalImage2 from "../../assets/images/modal-image2.png";
import modalImage3 from "../../assets/images/modal-image3.png";


export function Modal() {
  return (
    <>
      <Container>
        <ContentContainer>
          <h2>keep up to date with our discoveries</h2>
          <ul>
            <li>
              <img src={modalImage} alt="Modal text" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <img src={modalImage2} alt="Modal text" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <img src={modalImage3} alt="Modal text" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
          <button>see more</button>
        </ContentContainer>
      </Container>
    </>
  )
}
