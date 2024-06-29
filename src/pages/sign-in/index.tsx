import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import LogoImg from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { useAuth } from '@/hooks/auth'

import { Container, Form, LogoWrapper } from './styles'

export function SignIn() {
  const [email, setEmail] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()

  const { signIn } = useAuth()

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!signIn) {
      return alert('Falha ao criar a conta')
    }

    if (!email || !password) {
      return alert('Preencha o E-mail e a Senha')
    }

    await signIn({
      email,
      password,
    })
  }

  return (
    <Container>
      <LogoWrapper>
        <img src={LogoImg} alt="Food Explorer" />
      </LogoWrapper>

      <Form onSubmit={handleSignIn}>
        <h1>Faça login</h1>

        <Input.Root label="Email">
          <Input.Element
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Input.Root>

        <Input.Root label="Senha">
          <Input.Element
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Input.Root>

        <Button.Root type="submit">
          <Button.Text text="Entrar" />
        </Button.Root>
        <p>
          Login admin<br></br>
          Email: johndoe@email.com<br></br>Senha: 123456
        </p>
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
