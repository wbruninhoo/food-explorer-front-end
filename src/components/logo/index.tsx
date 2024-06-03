import LogoImg from '@/assets/logo.svg'

import { Container } from './styles'

export function Logo() {
  return (
    <Container to="/">
      <img src={LogoImg} alt="Food Explorer" />
    </Container>
  )
}
