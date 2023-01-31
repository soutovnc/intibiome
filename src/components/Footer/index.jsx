import { Container } from "./styles";

import ulabs from "../../assets/images/ulabs.png"
import { FiInstagram } from "react-icons/fi";

export function Footer() {
  return (
    <>
      <Container>
        <div>
          <ul>
            <li>contact us</li>
            <li>faq</li>
            <li>site map</li>
            <li>privacy policy</li>
            <li>cookies policy</li>
            <li>legal notice</li>
          </ul>
        </div>
        <section className="icons">
          <img
            className="ulabsIcon"
            src={ulabs}
            alt="Ulabs logo"
          />
          <FiInstagram />
        </section>
      </Container>
    </>
  )
}
