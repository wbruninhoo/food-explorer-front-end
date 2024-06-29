import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Category } from '@/@types/entities/category'
import { DishDetails } from '@/@types/entities/dish-details'
import BannerMobile from '@/assets/banner-mobile.png'
import BannerPC from '@/assets/banner-pc.png'
import { DishCard } from '@/components/dish-card'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { LoadingSpinnerBounce } from '@/components/loading-spinner'
import { Section } from '@/components/section'
import { Slider } from '@/components/slider'
import { useAuth } from '@/hooks/auth'
import { api } from '@/services/api'
import { UserRoles } from '@/utils/user-roles.enum'

import { Container, Content, EmptyDishes, HeroMobile, HeroPC } from './styles'

export function Home() {
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [dishes, setDishes] = useState<DishDetails[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    setIsLoading(true)

    api
      .get<{ categories: Category[] }>('/categories')
      .then((response) => response.data)
      .then((data) => setCategories(data.categories))
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Erro ao listar as categorias')
        }
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)

    api
      .get<{ dishes: DishDetails[] }>('/dishes', {
        params: {
          query: search,
        },
      })
      .then((response) => response.data)
      .then((data) => setDishes(data.dishes))
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Erro ao listar os pratos')
        }
      })
      .finally(() => setIsLoading(false))
  }, [search])

  const isEmptyDishes = dishes.length === 0

  const userRole = user?.role ?? UserRoles.CUSTOMER
  const canCreateNewDish = [UserRoles.ADMIN].includes(userRole)

  const categoriesWithDishes = categories
    .map((category) => {
      const categoryDishes = dishes.filter(
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
      <Header onSearchChange={(event) => setSearch(event.target.value)} />
      <Content>
        <HeroPC>
          <img src={BannerPC} alt="Banner PC" />
        </HeroPC>
        <HeroMobile>
          <img src={BannerMobile} alt="Banner Mobile" />
        </HeroMobile>
        {isEmptyDishes ? (
          <EmptyDishes>
            {isLoading ? (
              <LoadingSpinnerBounce />
            ) : (
              <>
                <p>Nenhum prato cadastrado</p>

                {canCreateNewDish && (
                  <div>
                    <span>
                      Crie um <Link to="/dishes/create">novo prato</Link>
                    </span>
                  </div>
                )}
              </>
            )}
          </EmptyDishes>
        ) : (
          categoriesWithDishes.map((category) => (
            <Section title={category.name} key={category.id}>
              <Slider
                slides={category.dishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              />
            </Section>
          ))
        )}
      </Content>
      <Footer />
    </Container>
  )
}
