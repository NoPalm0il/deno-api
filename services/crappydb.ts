import { Todo } from "../types.ts";

const loadTodos = async (): Promise<Map<number, Todo>> => {
  const tds: { todos: Todo[] } = JSON.parse(
    await Deno.readTextFile("./data.json"),
  );
  const todos = new Map<number, Todo>();

  tds.todos.map((t: Todo) => todos.set(t.id || NaN, t));

  return todos;
};

const todos: Map<number, Todo> = await loadTodos();

export { todos };
