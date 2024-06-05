import { useState } from 'react'

import BannerMobile from '@/assets/banner-mobile.png'
import BannerPC from '@/assets/banner-pc.png'
import { DishCard } from '@/components/dish-card'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Section } from '@/components/section'
import { Slider } from '@/components/slider'
import { categories, dishes } from '@/data/pratos'

import { Container, Content, HeroMobile, HeroPC } from './styles'

export function Home() {
  const [search, setSearch] = useState('')

  const filteredCategoriesAndDishes = categories
    .map((category) => {
      if (!search) {
        const allDishesForCategory = dishes.filter(
          (dish) => dish.category_id === category.id,
        )
        return {
          ...category,
          dishes: allDishesForCategory,
        }
      }

      const filteredDishes = dishes
        .filter(
          (dish) =>
            dish.name.toLowerCase().includes(search.toLowerCase()) ||
            dish.category.toLowerCase().includes(search.toLowerCase()) ||
            dish.description.toLowerCase().includes(search.toLowerCase()),
        )
        .filter((dish) => dish.category_id === category.id)

      return {
        ...category,
        dishes: filteredDishes,
      }
    })
    .filter((category) => category.dishes.length > 0)

  return (
    <Container>
      <Header onSearchChange={(event) => setSearch(event.target.value)} />
      <Content>
        <HeroPC>
          <img src={BannerPC} alt="Banner PC" />
        </HeroPC>
        <HeroMobile>
          <img src={BannerMobile} alt="Banner Mobile" />
        </HeroMobile>
        {filteredCategoriesAndDishes.map((category) => (
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
