import { sql, pool } from '@/utils/db';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const main = async () => {
  const admin = {
    id: faker.string.uuid(),
    created_at: faker.date.past(),
    first_name: 'Admin',
    last_name: 'Admin Admin',
    email: 'admin@aleate.com',
    password: 'Masterpw123',
    role: 'admin',
    active: true,
  };

  const hashedPassword = await bcrypt.hash(admin.password, 10);

  await sql`
    INSERT INTO users (id, created_at, first_name, last_name, email, password, role, active, created_by, updated_by)
    VALUES (
      ${admin.id},
      ${admin.created_at},
      ${admin.first_name},
      ${admin.last_name},
      ${admin.email},
      ${hashedPassword},
      ${admin.role},
      ${admin.active},
      ${admin.id},
      ${admin.id}
    )
  `;

  console.log('Seeded admin user');
};

main()
  .catch((error) => {
    console.error('Error seeding admin user:', error);
  })
  .finally(() => pool.end());
