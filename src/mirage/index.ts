import { createServer, Model } from "miragejs";
// import recipesData from "./recipes.json";
import data from './temp.json';
import type { Recipe } from "../types";

// const recipes: Recipe[] = recipesData as Recipe[];
const recipes: Recipe[] = data.recipes as Recipe[];
export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    models: {
      recipe: Model.extend({}),
    },

    seeds(server) {
      server.db.loadData({recipes});
    },

    routes() {
      this.namespace = "api";

      this.get("/recipes", (schema) => {
        return schema.db.recipes;
      });

      this.get("/recipes/:id", (schema, request) => {
        return schema.db.recipes.find(request.params.id);
      })
    },
  });

  return server;
}
