export class New {
  id!: string;
  title!: string;
  body!: string;
  author!: string;
}

export const NEWS: New[] = [
  {
    id: '1',
    title: 'Novedad 1',
    body: 'Lorem Ipsum dolor sit amet.',
    author: 'Chico Xavier'
  },
  {
    id: '2',
    title: 'Novedad 2',
    body: 'Lorem Ipsum dolor sit amet... 2',
    author: 'Paulo Coelho'
  },
  {
    id: '3',
    title: 'Novedad 3',
    body: 'Lorem Ipsum dolor sit amet. 3',
    author: 'R.R. Soares'
  }
]
