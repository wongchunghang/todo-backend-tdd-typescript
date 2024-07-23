"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// db.ts
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432, // default PostgreSQL port
});
exports.default = pool;
