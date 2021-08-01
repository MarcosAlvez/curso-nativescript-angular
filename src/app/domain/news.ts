export class Comment {
  constructor (public user: string, public text: string, public rating: number) { }
}

export class Noticia {
  constructor(public title: string){}
}

export class New {
  comments: Comment[];

  constructor (public id: string, public title: string, public body: string, public author: string) {}
}

export const NEWS: New[] = [
  {
    id: '1',
    title: 'Novedad 1',
    body: 'Lorem Ipsum dolor sit amet.',
    author: 'Chico Xavier',
    comments: [
      {
        user: 'J. Lopez',
        text: 'Not impressed',
        rating: 1.5
      },
      {
        user: 'Bill Gates',
        text: 'Not bad',
        rating: 4
      },
      {
        user: 'El bananero',
        text: 'Sappeee',
        rating: 4.8
      }
    ]
  },
  {
    id: '2',
    title: 'Novedad 2',
    body: 'Lorem Ipsum dolor sit amet... 2',
    author: 'Paulo Coelho',
    comments: [
      {
        user: 'El bananero',
        text: 'Como loquita',
        rating: 2.2
      },
      {
        user: 'Morgan Freeman',
        text: "El banaero sapen't",
        rating: 1.2
      },
      {
        user: 'El mono',
        text: 'Corte trabuco',
        rating: 1
      }
    ]
  },
  {
    id: '3',
    title: 'Novedad 3',
    body: 'Lorem Ipsum dolor sit amet. 3',
    author: 'R.R. Soares',
    comments: [
      {
        user: 'Morgan Freeman',
        text: "I'm God",
        rating: 1.2
      },
      {
        user: 'El banaero',
        text: 'Papiiita',
        rating: 4.8
      },
      {
        user: 'Brazilian',
        text: 'Come to Brazil',
        rating: 4.8
      }
    ]
  }
]
