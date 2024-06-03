import { CaretLeft, Receipt } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import EmptyImg from '@/assets/empty.svg'
import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Stepper } from '@/components/stepper'
import { Tag } from '@/components/tag'
import { pratosMock } from '@/data/pratos'

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
  const params = useParams()
  const prato = pratosMock.find((dish) => dish.id === params.id)
  const [amount, setAmount] = useState(1)
  const price = prato ? (prato.price ?? 0) * amount : 0
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
              src={prato?.image_url || EmptyImg}
              alt={prato?.name || 'Unknown Dish'}
            />
          </ImageWrapper>

          <DishInfoWrapper>
            <DishInfo>
              <h1>{prato?.name ?? 'Unknown Dish'}</h1>
              <p>{prato?.description ?? 'No description available.'}</p>

              <Ingredients>
                {prato?.ingredients.map((ingredient) => (
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
