import BannerMobile from '@/assets/banner-mobile.png'
import BannerPC from '@/assets/banner-pc.png'
import { DishCard } from '@/components/dish-card'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Section } from '@/components/section'
import { Slider } from '@/components/slider'
import { categories, pratosMock } from '@/data/pratos'

import { Container, Content, HeroMobile, HeroPC } from './styles'

export function Home() {
  const categoriesWithDishes = categories
    .map((category) => {
      const categoryDishes = pratosMock.filter(
        (dish) => dish.category_id === category.id,
      )

      return {
        ...category,
        dishes: categoryDishes,
      }
    })
    .filter((category) => category.dishes.length > 0)
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
        {categoriesWithDishes.map((category) => (
          <Section title={category.name} key={category.id}>
            <Slider
              slides={category.dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            />
          </Section>
        ))}
      </Content>
      <Footer />
    </Container>
  )
}
