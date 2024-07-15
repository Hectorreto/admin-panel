import { Pool } from 'pg';

export const pool = new Pool({
  user: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT) || 5432,
});

export const sql = async (query: TemplateStringsArray, ...args: unknown[]) => {
  const queryParameterized = [query[0]];
  for (let i = 1; i < query.length; i++) {
    queryParameterized.push(`$${i}`, query[i]);
  }
  const client = await pool.connect();
  const result = await client.query(queryParameterized.join(' '), args);
  client.release();
  return result.rows;
};
