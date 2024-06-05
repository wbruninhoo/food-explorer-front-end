import { MagnifyingGlass, X } from '@phosphor-icons/react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'

import { Footer } from '../footer'
import { Input } from '../input'
import { CloseButton, Container, Content, Header, Nav } from './styles'

interface SidebarProps {
  menuIsOpen?: boolean
  handleCloseMenu: () => void
}

export function Sidebar({ menuIsOpen, handleCloseMenu }: SidebarProps) {
  const navigate = useNavigate()

  return createPortal(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <CloseButton onClick={handleCloseMenu}>
          <X />
        </CloseButton>

        <h2>Menu</h2>
      </Header>

      <Content>
        <Input.Root>
          <Input.Icon icon={MagnifyingGlass} />
          <Input.Element placeholder="Busque por pratos ou ingredientes" />
        </Input.Root>

        <Nav>
          <Link to="/dishes/create">Novo prato</Link>
          <a
            onClick={() => {
              handleCloseMenu()
              navigate('/')
            }}
          >
            Sair
          </a>
        </Nav>
      </Content>
      <Footer />
    </Container>,
    document.body,
  )
}
