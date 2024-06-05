import { CaretLeft, Receipt } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import EmptyImg from '@/assets/empty.svg'
import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Stepper } from '@/components/stepper'
import { Tag } from '@/components/tag'
import { dishes } from '@/data/pratos'

import {
  Actions,
  Container,
  Content,
  DishContainer,
  DishInfo,
  DishInfoWrapper,
  ImageWrapper,
  Ingredients,
  ReturnButton,
} from './styles'

export function DishView() {
  const { id } = useParams()
  const foundDish = dishes.find((dish) => dish.id === id)
  const [amount, setAmount] = useState(1)
  const price = foundDish ? (foundDish.price ?? 0) * amount : 0
  const formattedPrice = price.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })
  const navigate = useNavigate()
  function handleBack() {
    return navigate(-1)
  }
  return (
    <Container>
      <Header />
      <Content>
        <ReturnButton onClick={handleBack}>
          <CaretLeft /> voltar
        </ReturnButton>
        <DishContainer>
          <ImageWrapper>
            <img
              src={foundDish?.image_url || EmptyImg}
              alt={foundDish?.name || 'Unknown Dish'}
            />
          </ImageWrapper>

          <DishInfoWrapper>
            <DishInfo>
              <h1>{foundDish?.name ?? 'Unknown Dish'}</h1>
              <p>{foundDish?.description ?? 'No description available.'}</p>

              <Ingredients>
                {foundDish?.ingredients.map((ingredient) => (
                  <Tag key={ingredient.id} text={ingredient.name} />
                ))}
              </Ingredients>
            </DishInfo>

            <Actions>
              <Stepper
                onCountChange={(value) => {
                  setAmount(value)
                }}
              />
              <Button.Root>
                <Button.Icon icon={Receipt} />
                <Button.Text text={`incluir ∙ ${formattedPrice}`} />
              </Button.Root>
            </Actions>
          </DishInfoWrapper>
        </DishContainer>
      </Content>

      <Footer />
    </Container>
  )
}
