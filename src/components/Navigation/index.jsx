import { Container } from "./styles";
import { IoIosArrowDown } from "react-icons/io";

export function Navigation() {
  return (
    <>
      <Container>
        <ul>
          <li>
            about us
            <IoIosArrowDown />
          </li>
          <li>
            our products
            <IoIosArrowDown />
          </li>
          <li>
            intimate health
            <IoIosArrowDown />
          </li>
          <li>contact us</li>
        </ul>
      </Container>
    </>
  )
}
