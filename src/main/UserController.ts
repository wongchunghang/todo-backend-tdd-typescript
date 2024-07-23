import express from 'express';
import cors from 'cors';
import { getTodos, addTodo, updateTodo, deleteTodo } from './queries';

const app = express();
const router = express.Router();

// Use CORS middleware
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable preflight requests for all routes

// Other middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend URL
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

// Get all todos
/** 
* @swagger
* /api/todos:
*   get:
*     summary: Retrieve a list of todos
*     responses:
*       200:
*         description: A list of todos
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                   text:
*                     type: string
*/
router.get('/todos', async (req, res) => {
  try {
    const todos = await getTodos();
    console.log(todos);
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new todo
/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created todo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 text:
 *                   type: string
 */
router.post('/todos', async (req, res) => {
  try {
    console.log('post todos start');
    const { name } = req.body;
    const newTodo = await addTodo(name);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update an existing todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The todo ID
 *       - in: body
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The new name of the todo
 *     responses:
 *       200:
 *         description: The updated todo
 *       500:
 *         description: Internal server error
 */
router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedTodo = await updateTodo(Number(id), name);
    res.json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The todo ID
 *     responses:
 *       200:
 *         description: The deleted todo
 *       500:
 *         description: Internal server error
 */
router.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await deleteTodo(Number(id));
    res.json(deletedTodo);
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use('/', router);

export default app;
