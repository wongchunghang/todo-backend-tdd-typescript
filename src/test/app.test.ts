import request from 'supertest';
import app from '../main/index'; // Adjust the import path as necessary
import { Server } from 'http';

jest.mock('../main/queries', () => ({
  getTodos: jest.fn(),
  addTodo: jest.fn(),
  updateTodo: jest.fn(),
  deleteTodo: jest.fn(),
}));

const { getTodos, addTodo, updateTodo, deleteTodo } = require('../main/queries');

let server: Server;

beforeAll(() => {
  server = app.listen(4000, () => {
    console.log('Test server running on port 4000');
  });
});

afterAll((done) => {
  server.close(done);
});

describe('Todos API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all todos', async () => {
    const mockTodos = [{ id: 1, name: 'Test Todo' }];
    getTodos.mockResolvedValue(mockTodos);

    const response = await request(app).get('/api/todos');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockTodos);
    expect(getTodos).toHaveBeenCalledTimes(1);
  });

  it('should add a new todo', async () => {
    const newTodo = { id: 1, name: 'New Todo' };
    addTodo.mockResolvedValue(newTodo);

    const response = await request(app)
      .post('/api/todos')
      .send({ name: 'New Todo' });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(newTodo);
    expect(addTodo).toHaveBeenCalledWith('New Todo');
    expect(addTodo).toHaveBeenCalledTimes(1);
  });

  it('should update a todo', async () => {
    const updatedTodo = { id: 1, name: 'Updated Todo' };
    updateTodo.mockResolvedValue(updatedTodo);

    const response = await request(app)
      .put('/api/todos/1')
      .send({ name: 'Updated Todo' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedTodo);
    expect(updateTodo).toHaveBeenCalledWith(1, 'Updated Todo');
    expect(updateTodo).toHaveBeenCalledTimes(1);
  });

  it('should delete a todo', async () => {
    const deletedTodo = { id: 1, name: 'Deleted Todo' };
    deleteTodo.mockResolvedValue(deletedTodo);

    const response = await request(app).delete('/api/todos/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(deletedTodo);
    expect(deleteTodo).toHaveBeenCalledWith(1);
    expect(deleteTodo).toHaveBeenCalledTimes(1);
  });
});
