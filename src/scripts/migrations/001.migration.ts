import { sql, pool } from '@/utils/db';

const createUsersTable = async () => {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`CREATE TYPE client_role AS ENUM ('admin')`;
    await sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          created_by UUID NOT NULL,
          updated_by UUID NOT NULL,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL,
          role client_role NOT NULL,
          active BOOLEAN NOT NULL DEFAULT true
        );
      `;

    console.log(`Created "users" table`);
  } catch (error) {
    console.error('Error creating "users" table:', error);
  }
};

const createPasswordRecoveryTable = async () => {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
      CREATE TABLE IF NOT EXISTS password_recovery (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        expire_at TIMESTAMP NOT NULL,
        user_id UUID NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;

    console.log(`Created "password_recovery" table`);
  } catch (error) {
    console.error('Error creating password recovery table:', error);
    throw error;
  }
};

const main = async () => {
  await createUsersTable();
  await createPasswordRecoveryTable();
};

main()
  .catch((error) => {
    console.error('Error creating tables:', error);
  })
  .finally(() => pool.end());
