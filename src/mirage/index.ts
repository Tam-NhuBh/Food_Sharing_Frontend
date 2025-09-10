import { createServer, Model } from "miragejs";
import data from "./temp.json";

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    models: {
      recipe: Model.extend({}),
      category: Model.extend({}),
      user: Model.extend({}),
      rating: Model.extend({}),
      tag: Model.extend({})  
    },

    seeds(server) {
      const db = server.db;
      // Seed recipes
      data.recipes.forEach((recipe) => {
        const existing = db.recipes.find(recipe.id);
        if (existing) {
          db.recipes.update(recipe.id, recipe);
        } else {
          db.recipes.insert(recipe);
        }
      });

      // Seed categories
      data.categories.forEach((category) => {
        db.categories.insert(category);
      });

      // Seed users
      data.users.forEach((user) => {
        db.users.insert(user);
      });

      // Seed ratings
      data.ratings.forEach((rating) => {
        db.ratings.insert(rating);
      });

      // Seed tags
      data.tags.forEach((tag) => {
        db.tags.insert(tag);
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/recipes", (schema) => {
        return schema.db.recipes;
      });

      this.get("/recipes/:id", (schema, request) => {
        return schema.db.recipes.find(request.params.id);
      });

      this.get("/categories", (schema) => {
        return schema.db.categories;
      });
      
      this.get("/categories/:id", (schema, request) => {
        return schema.db.categories.find(request.params.id);
      });

      this.get("/users", (schema) => {
        return schema.db.users;
      });

      this.get("/users/:id", (schema, request) => {
        return schema.db.users.find(request.params.id);
      });

      this.get("/ratings", (schema) => {
        return schema.db.ratings;
      });
      
      this.get("/ratings/:id", (schema, request) => {
        return schema.db.ratings.find(request.params.id);
      });

      this.get("/tags", (schema) => {
        return schema.db.tags;
      });
      
      this.get("/tags/:id", (schema, request) => {
        return schema.db.tags.find(request.params.id);
      });
    },
  });

  return server;
}