INSERT INTO categories(name) VALUES
  ('education'),
  ('career'),
  ('social'),
  ('leisure'),
  ('shopping'),
  ('health'),
  ('chores');

INSERT INTO lists (name, created) VALUES
  ('Todos in Canada', '2022-8-12'),
  ('Winter Plan', '2022-4-1'),
  ('My Todos List', '2022-3-31');

INSERT INTO todos (name, list_id, category_id, created, priority) VALUES
  ('eat dinner with friends', 1, 3, '2022-05-19', FALSE),
  ('watch Top Gun', 1, 4, '2022-05-02', TRUE),
  ('buy souvenir', 1, 5, '2021-12-31', TRUE),
  ('go skiing in Mt. Akagi with Paul', 2, 3, '2022-03-25', TRUE),
  ('read Atomic Habits', 2, 1, '2022-01-18', FALSE),
  ('look for a new job', 2, 2, '2022-06-22', TRUE),
  ('finish coding assignment', 3, 1, '2022-09-03', FALSE),
  ('clean the house', 3, 7, '2022-09-03', TRUE),
  ('hit the gym', 3, 6, '2022-09-05', FALSE);