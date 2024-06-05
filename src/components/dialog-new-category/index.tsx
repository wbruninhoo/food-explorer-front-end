import { Check } from '@phosphor-icons/react'
import { useState } from 'react'

import { Category } from '@/@types/entities/category'

import { Button } from '../button'
import { Input } from '../input'
import { Actions, Container, Content, Form, Header, Overlay } from './styles'

interface DialogNewCategoryProps {
  dialogIdOpen?: boolean
  onCloseDialog: () => void
  onCategoryCreated?: (category: Category) => void
}

export function DialogNewCategory({
  dialogIdOpen,
  onCloseDialog,
}: DialogNewCategoryProps) {
  const [name, setName] = useState<string | undefined>('')

  function handleCloseDialog() {
    setName('')
    onCloseDialog()
  }

  function handleKeyDown(event: KeyboardEvent) {
    const actions: Record<string, () => void> = {
      Escape: handleCloseDialog,
    }

    const keyPressed = event.key
    const actionFunction = actions[keyPressed]

    if (typeof actionFunction === 'function') {
      return actionFunction()
    }
  }

  if (dialogIdOpen) {
    document.addEventListener('keydown', handleKeyDown)
  }

  return (
    <Container data-dialog-is-open={dialogIdOpen}>
      <Overlay onClick={handleCloseDialog} />

      <Content>
        <Header>
          <h1>Nova categoria</h1>
        </Header>

        <Form>
          <Input.Root label="Nome">
            <Input.Element
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Input.Root>

          <Actions>
            <Button.Root variant="secondary" onClick={handleCloseDialog}>
              <Button.Text text="Cancelar" />
            </Button.Root>

            <Button.Root type="submit">
              <Button.Icon icon={Check} />
              <Button.Text text="Salvar" />
            </Button.Root>
          </Actions>
        </Form>
      </Content>
    </Container>
  )
}
