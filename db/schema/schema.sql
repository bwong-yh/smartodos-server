DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS lists CASCADE;
DROP TABLE IF EXISTS todos CASCADE;

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   avatar_url VARCHAR(255)
-- );

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE lists (
  id SERIAL PRIMARY KEY NOT NULL,
  -- user_id INT REFERENCES users ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  created DATE NOT NULL
  -- icon_url VARCHAR(255)
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY NOT NULL,
  list_id INT REFERENCES lists ON DELETE CASCADE,
  category_id INT REFERENCES categories ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  created DATE NOT NULL,
  priority BOOLEAN DEFAULT FALSE
);