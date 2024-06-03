import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DishDetails } from '@/@types/entities/dish-details'

import { Button } from '../button'
import { Stepper } from '../stepper'
import {
  Actions,
  Container,
  Description,
  ImageWrapper,
  Price,
  Title,
} from './styles'

interface DishCardProps {
  dish: DishDetails
}

export function DishCard({ dish }: DishCardProps) {
  const [amount, setAmount] = useState(1)

  const price = (dish.price ?? 0) * amount

  const navigate = useNavigate()

  const formattedPrice = price.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })

  function handleViewDish() {
    return navigate(`/dishes/${dish.id}`)
  }

  return (
    <Container onClick={handleViewDish}>
      <ImageWrapper>
        <img src={dish.image_url} alt={`Imagem de ${dish.name}`} />
      </ImageWrapper>
      <Title>{dish.name}</Title>
      <Description>{dish.description}</Description>
      <Price>{formattedPrice}</Price>
      <Actions>
        <Stepper onCountChange={(value) => setAmount(value)} />
        <Button.Root>
          <Button.Text text="incluir" />
        </Button.Root>
      </Actions>
    </Container>
  )
}
