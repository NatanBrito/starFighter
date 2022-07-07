import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

// ssl: { rejectUnauthorized: false },
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default db;
