import { CaretLeft, Plus, UploadSimple, X } from '@phosphor-icons/react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { DishDetails } from '@/@types/entities/dish-details'
import { Button } from '@/components/button'
import { DialogNewCategory } from '@/components/dialog-new-category'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Ingredients } from '@/components/ingredients'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { categories, pratosMock } from '@/data/pratos'

import {
  Actions,
  Container,
  Content,
  FileSelectText,
  Form,
  InputsGroup,
  ReturnButton,
} from './styles'

export function DishEditor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const newIngredientInput = useRef<HTMLInputElement>(null)
  const categoriesSelectOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))

  const [imageFile, setImageFile] = useState<File | undefined>()
  const [categoryId, setCategoryId] = useState<string | undefined>()
  const [name, setName] = useState<string | undefined>()
  const [description, setDescription] = useState<string | undefined>()
  const [price, setPrice] = useState<number | undefined>()
  const [ingredients, setIngredients] = useState<string[]>([])
  const [newIngredient, setNewIngredient] = useState<string | undefined>()
  const [dishData, setDishData] = useState<DishDetails | null>(null)
  const [dialogCategoryOpen, setDialogCategoryOpen] = useState(false)

  useEffect(() => {
    if (id) {
      const foundDish = pratosMock.find((dish) => dish.id === id)
      if (foundDish) {
        setDishData(foundDish)
      }
    }
  }, [id])

  useEffect(() => {
    if (dishData) {
      setName(dishData.name)
      setDescription(dishData.description)
      setPrice(dishData.price)
      setIngredients(dishData.ingredients.map((ingredient) => ingredient.name))
      setCategoryId(dishData.category_id)
      setImageFile(undefined)
    }
  }, [dishData])

  function handleBack() {
    navigate(-1)
  }

  async function handleSubmit() {
    const updatedDish = {
      id,
      name,
      description,
      price,
      ingredients,
      categoryId,
      imageFile,
    }

    console.log('Dados atualizados:', updatedDish)

    navigate('/')
  }

  function handleCategoryCreated(category: { id: string; name: string }) {
    setCategoryId(category.id)
  }

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files || files.length <= 0) {
      return
    }

    const file = files[0]

    setImageFile(file)
  }

  function handleChangePrice(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    const valueWithTwoDecimalPlaces = Number(value).toFixed(2)
    const convertedValue = Number(valueWithTwoDecimalPlaces)

    setPrice(convertedValue)
  }

  function handleAddIngredient() {
    if (!newIngredient) {
      return
    }

    setIngredients((prev) => [...prev, newIngredient])
    setNewIngredient('')

    newIngredientInput.current?.focus()
  }

  function handleRemoveIngredient(deletedIngredient: string) {
    setIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== deletedIngredient),
    )

    newIngredientInput.current?.focus()
  }

  return (
    <Container>
      <Header />

      <DialogNewCategory
        dialogIdOpen={dialogCategoryOpen}
        onCategoryCreated={handleCategoryCreated}
        onCloseDialog={() => setDialogCategoryOpen(false)}
      />

      <Content>
        <ReturnButton onClick={handleBack}>
          <CaretLeft />
          voltar
        </ReturnButton>

        <Form>
          <h1>Novo prato</h1>

          <InputsGroup onSubmit={handleSubmit}>
            <Input.Root label="Imagem do prato" className="image">
              <Input.Icon icon={UploadSimple} />
              <FileSelectText>
                {imageFile
                  ? 'Selecione imagem para alterá-la'
                  : 'Selecione imagem'}
              </FileSelectText>
              <Input.Element
                type="file"
                accept="image/*"
                hidden
                onChange={handleSelectImage}
              />
            </Input.Root>

            <Input.Root label="Nome" className="name" aria-disabled>
              <Input.Element
                placeholder="Ex.: Salada Ceasar"
                onChange={(event) => setName(event.target.value)}
                value={name ?? ''}
              />
            </Input.Root>

            <Select.Root className="categories">
              <Select.Label htmlFor="categorias">
                Categoria
                <Select.Button
                  icon={Plus}
                  text="Adicionar categoria"
                  onClick={() => setDialogCategoryOpen(true)}
                />
              </Select.Label>
              <Select.Element
                id="categorias"
                emptyText="Adicione uma nova categoria..."
                options={categoriesSelectOptions}
                onChange={(event) => setCategoryId(event.target.value)}
                value={categoryId}
              />
            </Select.Root>
          </InputsGroup>

          <InputsGroup>
            <Ingredients.Root className="ingredients">
              <Ingredients.Label htmlFor="new-ingredient" text="Ingredientes" />

              <Ingredients.Items>
                {ingredients.map((ingredient, index) => (
                  <Ingredients.Item key={index}>
                    <Ingredients.ItemInput readOnly value={ingredient} />
                    <Ingredients.ItemAction
                      icon={X}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  </Ingredients.Item>
                ))}

                <Ingredients.Item isNew>
                  <Ingredients.ItemInput
                    id="new-ingredient"
                    ref={newIngredientInput}
                    value={newIngredient ?? ''}
                    onChange={(event) => setNewIngredient(event.target.value)}
                    placeholder="Adicionar"
                  />

                  <Ingredients.ItemAction
                    icon={Plus}
                    onClick={handleAddIngredient}
                  />
                </Ingredients.Item>
              </Ingredients.Items>
            </Ingredients.Root>

            <Input.Root label="Preço" className="price">
              <span>R$</span>
              <Input.Element
                type="number"
                min="0"
                placeholder="00,00"
                onChange={handleChangePrice}
                value={price ?? ''}
                step="0.01"
              />
            </Input.Root>
          </InputsGroup>

          <Input.Root label="Descrição">
            <Input.Element
              component="textarea"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(event) => setDescription(event.target.value)}
              value={description ?? ''}
            />
          </Input.Root>

          <Actions>
            <Button.Root type="submit">
              <Button.Text text="Salvar alterações" />
            </Button.Root>
          </Actions>
        </Form>
      </Content>

      <Footer />
    </Container>
  )
}
