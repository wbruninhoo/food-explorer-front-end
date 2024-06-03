import BannerMobile from '@/assets/banner-mobile.png'
import BannerPC from '@/assets/banner-pc.png'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

import { Container, Content, HeroMobile, HeroPC } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <HeroPC>
          <img src={BannerPC} alt="Banner PC" />
        </HeroPC>
        <HeroMobile>
          <img src={BannerMobile} alt="Banner Mobile" />
        </HeroMobile>
      </Content>
      <Footer />
    </Container>
  )
}
