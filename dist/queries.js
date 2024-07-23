"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = getTodos;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
const db_1 = __importDefault(require("./db"));
// Get all todos
function getTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT id, name FROM todos';
        const { rows } = yield db_1.default.query(query);
        return rows;
    });
}
// Add a new todo
function addTodo(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'INSERT INTO todos (name) VALUES ($1) RETURNING id, name';
        const { rows } = yield db_1.default.query(query, [name]);
        return rows[0];
    });
}
// Update an existing todo
function updateTodo(id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'UPDATE todos SET name = $1 WHERE id = $2 RETURNING id, name';
        const { rows } = yield db_1.default.query(query, [name, id]);
        return rows[0];
    });
}
// Delete a todo
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'DELETE FROM todos WHERE id = $1 RETURNING id';
        const { rows } = yield db_1.default.query(query, [id]);
        return rows[0];
    });
}
