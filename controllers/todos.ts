import { Context, helpers } from "https://deno.land/x/oak/mod.ts";
import { todos } from "../services/crappydb.ts";
import { Todo } from "../types.ts";

/**
 * Get all todos
 * ```
 * GET /v1/todos
 * ```
 */
const getTodos = (ctx: Context) => {
  ctx.response.body = Array.from(todos.values());
};

/**
 * Get todo
 * ```
 * GET /v1/todos/:id
 * ```
 */
const getTodo = (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  if (!todos.has(+id)) {
    return;
  }
  const todo = todos.get(+id);
  ctx.response.body = JSON.stringify(todo);
};

/**
 * Add todo
 * ```
 * POST /v1/todos
 * ```
 */
const addTodo = async (ctx: Context) => {
  const todo: Todo = await (await ctx.request.body()).value;

  let higherKey = 1;
  for (const key of todos.keys()) {
    if (key > higherKey) {
      higherKey = key;
    }
  }
  ++higherKey;
  todo.id = higherKey;
  todos.set(higherKey, todo);

  ctx.response.body = JSON.stringify(todo);
};

/**
 * Update todo
 * ```
 * PUT /v1/todos/:id
 * ```
 */
const updateTodo = async (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  if (!todos.has(+id)) {
    return;
  }

  const newTodo: Todo = await (await ctx.request.body()).value;
  newTodo.id = +id;
  todos.set(+id, newTodo);

  ctx.response.body = JSON.stringify(newTodo);
};

/**
 * Delete todo
 * ```
 * DELETE /v1/todos/:id
 * ```
 */
const deleteTodo = (ctx: Context) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  if (!todos.has(+id)) {
    return;
  }

  const result = todos.delete(+id);

  ctx.response.body = JSON.stringify({ result });
};

export { addTodo, deleteTodo, getTodo, getTodos, updateTodo };
