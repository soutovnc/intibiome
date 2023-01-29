import heroBanner from '../assets/images/banner-hero.png'
import heroBannerMobile from '../assets/images/banner-hero-mobile.png'
import { Header } from "../components/Header"
import { Container } from './styles';
import { Value } from '../components/Value';


export function Home() {
  const windowSize = window.innerWidth;

  return (
    <>
      <Header />
      <Container>
        <main className="content">
          <img
            src={windowSize >= 768 ? heroBanner : heroBannerMobile}
            alt="Main Banner, products and happy people"
            className="heroImage"
          />
        </main>
      </Container>
      <Value />

    </>
  )
}
