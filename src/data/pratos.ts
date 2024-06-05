interface Ingredient {
  id: string
  name: string
}
interface Category {
  id: string
  name: string
}

interface Dishe {
  id: string
  category_id: string
  category: string
  name: string
  description: string
  price: number
  image_id: string
  image_url: string
  ingredients: Ingredient[]
  created_at: Date
  updated_at: Date
}

export const categories: Category[] = [
  {
    id: 'cat1',
    name: 'Refeições',
  },
  {
    id: 'cat2',
    name: 'Sobremesas',
  },
]

export const dishes: Dishe[] = [
  {
    id: '1',
    category_id: 'cat1',
    category: 'Refeições',
    name: 'Cozido à Portuguesa',
    description: 'Delicioso cozido com carne e feijão.',
    price: 10.99,
    image_id: 'img1',
    image_url: '/1.png',
    ingredients: [
      { id: 'ing1', name: 'Carne' },
      { id: 'ing2', name: 'Feijão' },
    ],
    created_at: new Date('2024-01-01T00:00:00Z'),
    updated_at: new Date('2024-02-01T00:00:00Z'),
  },
  {
    id: '2',
    category_id: 'cat1',
    category: 'Refeições',
    name: 'Frango ao Molho de Azeite',
    description: 'Frango grelhado com molho de azeite e temperos frescos.',
    price: 15.99,
    image_id: 'img2',
    image_url: '/2.png',
    ingredients: [
      { id: 'ing3', name: 'Frango' },
      { id: 'ing4', name: 'Azeite' },
      { id: 'ing5', name: 'Temperos Frescos' },
    ],
    created_at: new Date('2024-01-15T00:00:00Z'),
    updated_at: new Date('2024-03-15T00:00:00Z'),
  },
  {
    id: '3',
    category_id: 'cat1',
    category: 'Refeições',
    name: 'Romeo e Julietta',
    description: 'Uma deliciosa mistura de carne e queijo.',
    price: 12.5,
    image_id: 'img3',
    image_url: '/3.png',
    ingredients: [
      { id: 'ing6', name: 'Carne' },
      { id: 'ing7', name: 'Queijo' },
    ],
    created_at: new Date('2024-04-01T00:00:00Z'),
    updated_at: new Date('2024-05-01T00:00:00Z'),
  },
  {
    id: '4',
    category_id: 'cat1',
    category: 'Refeições',
    name: 'Hambúrguer Deluxe',
    description: 'Hambúrguer com queijo, bacon, tomate e pepino.',
    price: 14.99,
    image_id: 'img4',
    image_url: '/4.png',
    ingredients: [
      { id: 'ing8', name: 'Pão' },
      { id: 'ing9', name: 'Hambúrguer' },
      { id: 'ing10', name: 'Queijo' },
      { id: 'ing11', name: 'Bacon' },
      { id: 'ing12', name: 'Tomate' },
      { id: 'ing13', name: 'Pepino' },
    ],
    created_at: new Date('2024-06-01T00:00:00Z'),
    updated_at: new Date('2024-07-01T00:00:00Z'),
  },
  {
    id: '5',
    category_id: 'cat2',
    category: 'Sobremesas',
    name: 'Flan de Leite',
    description: 'Delicioso flan de leite com cobertura de chocolate.',
    price: 8.99,
    image_id: 'img5',
    image_url: '/5.png',
    ingredients: [
      { id: 'ing14', name: 'Leite' },
      { id: 'ing15', name: 'Ovos' },
      { id: 'ing16', name: 'Chocolate' },
    ],
    created_at: new Date('2024-08-01T00:00:00Z'),
    updated_at: new Date('2024-09-01T00:00:00Z'),
  },
  {
    id: '6',
    category_id: 'cat2',
    category: 'Sobremesas',
    name: 'Vinho Tinto Reserva',
    description: 'Vinho tinto reservado com notas frutais e um final suave.',
    price: 25.99,
    image_id: 'img6',
    image_url: '/6.png',
    ingredients: [
      { id: 'ing17', name: 'Uvas' },
      { id: 'ing18', name: 'Levedura' },
    ],
    created_at: new Date('2024-10-01T00:00:00Z'),
    updated_at: new Date('2024-11-01T00:00:00Z'),
  },
]
