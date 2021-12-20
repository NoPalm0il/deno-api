import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  addTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "./controllers/todos.ts";

const router = new Router()
  .get("/", (ctx) => {
    ctx.response.body = `welcome to todos app`;
  })
  .get("/v1/todos", getTodos)
  .get("/v1/todos/:id", getTodo)
  .post("/v1/todos", addTodo)
  .put("/v1/todos/:id", updateTodo)
  .delete("/v1/todos/:id", deleteTodo);

export default router;
