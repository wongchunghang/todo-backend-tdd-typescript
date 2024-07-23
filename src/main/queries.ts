import pool from './db';

// Get all todos
export async function getTodos() {
  const query = 'SELECT id, name FROM todos';
  const { rows } = await pool.query(query);
  return rows;
}

// Add a new todo
export async function addTodo(name: string) {
  const query = 'INSERT INTO todos (name) VALUES ($1) RETURNING id, name';
  const { rows } = await pool.query(query, [name]);
  return rows[0];
}

// Update an existing todo
export async function updateTodo(id: number, name: string) {
  const query = 'UPDATE todos SET name = $1 WHERE id = $2 RETURNING id, name';
  const { rows } = await pool.query(query, [name, id]);
  return rows[0];
}

// Delete a todo
export async function deleteTodo(id: number) {
  const query = 'DELETE FROM todos WHERE id = $1 RETURNING id';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
}
