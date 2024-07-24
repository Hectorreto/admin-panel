export type User = {
  id: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: 'admin';
  active: boolean;
};
