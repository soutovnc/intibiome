import heroBanner from '../assets/images/banner-hero.png'
import heroBannerMobile from '../assets/images/banner-hero-mobile.png'
import bannerIntibiome from '../assets/images/banner-intibiome.png'
import bannerIntibiomeMobile from '../assets/images/banner-intibiome-mobile.png'


import { Header } from "../components/Header"
import { Container, BannerMiddlePage } from './styles';
import { Value } from '../components/Value';
import { Navigation } from '../components/Navigation';
import { Products } from '../components/Products';
import { Modal } from '../components/Modal'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Nav/NavBar'


export function Home() {
  const windowSize = window.innerWidth;

  return (
    <>
      <Header />
      <Navbar />
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
      <Products />
      <BannerMiddlePage>
        <section>
          <img
            src={windowSize >= 768 ? bannerIntibiome : bannerIntibiomeMobile}
            alt="Banner intibiome middle page"
            className="bannerIntibiome"
          />
        </section>
      </BannerMiddlePage>
      <Modal />
      <Footer />
    </>
  )
}
