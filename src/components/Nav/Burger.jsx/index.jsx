import { useState } from "react"
import { LeftNav } from "../LeftNav";
import { Container } from "./styles";


export function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Container>
      <LeftNav open={open} />
    </>
  )
}
