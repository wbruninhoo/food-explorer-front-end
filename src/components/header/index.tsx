import { List, MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/auth'
import { useCart } from '@/hooks/cart'
import { UserRoles } from '@/utils/user-roles.enum'

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

interface HeaderProps {
  onSearchChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Header({ onSearchChange }: HeaderProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { cartItems } = useCart()
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  const cartItemsAmount = cartItems.length
  const userRole = user?.role ?? UserRoles.CUSTOMER
  const canAccessCart = [UserRoles.CUSTOMER].includes(userRole)
  const canCreateDish = [UserRoles.ADMIN].includes(userRole)

  async function handleSignOut() {
    if (!signOut) {
      return
    }

    await signOut()
    return navigate('/')
  }

  function navigateToCart() {
    navigate('/cart')
  }

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
            <Input.Element
              placeholder="Busque por pratos ou ingredientes"
              onChange={onSearchChange}
            />
          </Input.Root>
        </InputWrapper>
        <DesktopButtonWrapper>
          {canCreateDish ? (
            <Button.Root onClick={() => navigate('/dishes/create')}>
              <Button.Text text="Novo prato" />
            </Button.Root>
          ) : (
            <Button.Root onClick={navigateToCart}>
              <Button.Icon icon={Receipt} />
              <Button.Text text={`Pedidos (${cartItemsAmount})`} />
            </Button.Root>
          )}
        </DesktopButtonWrapper>

        {canAccessCart && (
          <Cart onClick={navigateToCart}>
            <Receipt size={32} />
            <span>{cartItemsAmount}</span>
          </Cart>
        )}

        <SignOutButton onClick={handleSignOut}>
          <SignOut />
        </SignOutButton>
      </Content>
    </Container>
  )
}
