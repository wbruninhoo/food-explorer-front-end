import { List, MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react'
import { useState } from 'react'

import { Button } from '../button'
import { Input } from '../input'
import { Logo } from '../logo'
import { Sidebar } from '../sidebar'
import {
  Cart,
  Container,
  Content,
  DesktopButtonWrapper,
  InputWrapper,
  Menu,
  SignOutButton,
} from './styles'
export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <Container>
      <Content>
        <Sidebar
          menuIsOpen={menuIsOpen}
          handleCloseMenu={() => setMenuIsOpen(false)}
        />
        <Menu onClick={() => setMenuIsOpen(true)}>
          <List />
        </Menu>
        <Logo />
        <InputWrapper>
          <Input.Root>
            <Input.Icon icon={MagnifyingGlass} />
            <Input.Element placeholder="Busque por pratos ou ingredientes" />
          </Input.Root>
        </InputWrapper>
        <DesktopButtonWrapper>
          <Button.Root>
            <Button.Icon icon={Receipt} />
            <Button.Text text={`Pedidos (0)`} />
          </Button.Root>
        </DesktopButtonWrapper>
        <Cart>
          <Receipt size={32} />
        </Cart>
        <SignOutButton>
          <SignOut />
        </SignOutButton>
      </Content>
    </Container>
  )
}
