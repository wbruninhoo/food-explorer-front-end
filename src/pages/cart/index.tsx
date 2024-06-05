import EmptyCartImage from '@/assets/empty_cart.svg'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

import { Container, Content, EmptyCart, Items, Orders, Summary } from './styles'

export function Cart() {
  const formattedTotal = (197.59).toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })
  return (
    <Container>
      <Header />
      <Content>
        <EmptyCart>
          <img src={EmptyCartImage} alt="Empty cart" />
          <h2>Carrinho vazio</h2>
        </EmptyCart>
        <Orders>
          <h1>Meu pedido</h1>
          <Items />
          <Summary>
            <strong>Total: {formattedTotal}</strong>
          </Summary>
        </Orders>
      </Content>

      <Footer />
    </Container>
  )
}
