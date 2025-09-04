export interface Recipe {
  id: number;
  image: string,
  title: string,
  author: string,   
  description: string,
  longDescription: string,
  cookingTime: string,
  category: string[],
  ingredients: string[],
  steps: string[],
  isFavourite: boolean,
  rating: number,
  comments: Comment[]
  createdAt: string
}

export interface Comment {
    userId: number,
    username: string,
    comment: string,
    ratingComment: number
}

export interface User {
    id: number,
    username: string,
    password: string,
    favourites: number[]
}
