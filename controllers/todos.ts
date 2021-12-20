import { Response } from "https://deno.land/x/oak/mod.ts";

/**
 * Get all todos
 * ```
 * GET /v1/todos
 * ```
 */
const getTodos = ({ response }: { response: Response }) => {
  response.body = "todos...";
};

/**
 * Get todo
 * ```
 * GET /v1/todos/:id
 * ```
 */
const getTodo = (
  { params, response }: { params: { id: string }; response: Response },
) => {
  response.body = `todo: ${params.id}`;
};

/**
 * Add todo
 * ```
 * POST /v1/todos
 * ```
 */
const addTodo = ({ response }: { response: Response }) => {
  response.body = `added todo`;
};

/**
 * Update todo
 * ```
 * PUT /v1/todos/:id
 * ```
 */
const updateTodo = (
  { params, response }: { params: { id: string }; response: Response },
) => {
  response.body = `todo ${params.id} updated`;
};

/**
 * Delete todo
 * ```
 * DELETE /v1/todos/:id
 * ```
 */
const deleteTodo = (
  { params, response }: { params: { id: string }; response: Response },
) => {
  response.body = `todo ${params.id} deleted`;
};

export { addTodo, deleteTodo, getTodo, getTodos, updateTodo };
