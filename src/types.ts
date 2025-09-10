export enum IngredientUnit {
  GRAM = "GRAM",
  KILOGRAM = "KILOGRAM",
  LITER = "LITER",
  MILLILITER = "MILLILITER",
  PIECE = "PIECE",
  CUP = "CUP",
  TEASPOON = "TEASPOON",
  TABLESPOON = "TABLESPOON",
  PINCH = "PINCH",
  LEAF = "LEAF",
  HEAD = "HEAD",
  CLOVE = "CLOVE"
}

export enum CategoryType {
  BEVERAGES = "Beverages",
  APPETIZERS = "Appetizers",
  BREAKFAST_FOODS = "Breakfast Foods",
  MAIN_COURSE = "Main Course",
  SIDE_DISHES = "Síde Dishes",
  DESSERTS = "Desserts",
  SNACKS = "Snacks",
}

// filter recipe theo tag
export enum Tags {
  BEVERAGES = "Beverages",
  APPETIZERS = "Appetizers",
  BREAKFAST_FOODS = "Breakfast Foods",
  MAIN_COURSE = "Main Course",
  SIDE_DISHES = "Síde Dishes",
  DESSERTS = "Desserts",
  SNACKS = "Snacks",
}

export interface Category {
  id: number;
  name: string;
  type: CategoryType;
  icon: string;
}

export interface Recipe {
  id: number;
  categoryId: number;
  categoryType: CategoryType;
  image: string;
  title: string;
  author: string;
  authorId: number;
  description: string;
  longDescription: string;
  cookingTime: string;
  servings: number;
  category: string;
  ingredients: Ingredient[];
  steps: string[];
  nutrition: Nutrition;
  tags: string[];
  rating: number;
  totalRatings: number;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: IngredientUnit | string;
}

// dinh dưỡng của từng recipe
export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

// export interface Comment {
//     userId: number,
//     username: string,
//     comment: string,
//     ratingComment: number
// }

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  fullName: string;
  avatar: string;
  favourites: number[]; // danh sach recipe ma user favorite
  followers: number[]; // danh sach user favorite recipe cua user
  recipesCreated: number[];
}

export interface Rating {
  id: number;
  recipeId: number;
  userId: number;
  user: string; 
  comment: string;
  rating: number;
  createdAt: string;
}
