
import pinkPack from '../../assets/images/pink-pack.png'
import greenPack from '../../assets/images/green-pack.png'
import bluePack from '../../assets/images/blue-pack.png'


import { Container, ContentContainer } from "./styles";




export function Products() {

  return (
    <>
      <Container>
        <ContentContainer>
          <h2>our products</h2>
          <ul>
            <li>
              <img src={bluePack} alt="wellness card" />
              <p>intibiome wellness daily intimate wash</p>
              <span className='wellness'>wellness</span>
            </li>

            <li>
              <img src={greenPack} alt="active card" />
              <p>intibiome active extra protection intimate wash</p>
              <span className='active'>active</span>
            </li>

            <li>
              <img src={pinkPack} alt="agecare card" />
              <p>intibiome agecare dryness relief intimate wash</p>
              <span className='agecare'>agecare</span>
            </li>
          </ul>
        </ContentContainer>
      </Container>
    </>
  )
}
