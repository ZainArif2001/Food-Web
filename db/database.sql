-- ============================================================
-- B&C Döner Kebab & Pizzeria — database
-- Import this file in MySQL Workbench (or: mysql -u root -p < db/database.sql)
-- Then set your DB credentials in api/config.php
-- ============================================================

CREATE DATABASE IF NOT EXISTS bc_food CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE bc_food;

CREATE TABLE sections (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  skey       VARCHAR(40) NOT NULL UNIQUE,
  label_en   VARCHAR(80) NOT NULL,
  label_es   VARCHAR(80) NOT NULL,
  note_en    VARCHAR(255) DEFAULT NULL,
  note_es    VARCHAR(255) DEFAULT NULL,
  sizes      JSON DEFAULT NULL,           -- [{en,es,sen,ses}] or NULL
  sort       INT NOT NULL DEFAULT 0
) ENGINE=InnoDB;

CREATE TABLE items (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  section_id INT NOT NULL,
  num        INT NOT NULL,
  name_en    VARCHAR(120) NOT NULL,
  name_es    VARCHAR(120) NOT NULL,
  desc_en    VARCHAR(255) DEFAULT '',
  desc_es    VARCHAR(255) DEFAULT '',
  prices     JSON NOT NULL,               -- ["7.00","8.50","12.50"]
  sort       INT NOT NULL DEFAULT 0,
  FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE,
  UNIQUE KEY uq_num (num)
) ENGINE=InnoDB;

CREATE TABLE deals (
  id       INT AUTO_INCREMENT PRIMARY KEY,
  num      INT NOT NULL UNIQUE,
  price    DECIMAL(5,2) NOT NULL,
  tag      VARCHAR(40) DEFAULT NULL,
  items_en JSON NOT NULL,
  items_es JSON NOT NULL,
  img      VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB;

CREATE TABLE extras (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  html_en VARCHAR(255) NOT NULL,
  html_es VARCHAR(255) NOT NULL,
  sort    INT NOT NULL DEFAULT 0
) ENGINE=InnoDB;

CREATE TABLE orders (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(120) DEFAULT '',
  phone         VARCHAR(40) DEFAULT '',
  type          ENUM('delivery','pickup') NOT NULL,
  address       VARCHAR(255) DEFAULT '',
  note          VARCHAR(255) DEFAULT '',
  total         DECIMAL(7,2) NOT NULL,
  status        ENUM('new','preparing','done','cancelled') NOT NULL DEFAULT 'new',
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE order_items (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  order_id   INT NOT NULL,
  item_num   INT NOT NULL,
  item_name  VARCHAR(120) NOT NULL,
  size_label VARCHAR(60) DEFAULT '',
  qty        INT NOT NULL,
  unit_price DECIMAL(5,2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE admins (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  username  VARCHAR(60) NOT NULL UNIQUE,
  pass_hash VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- default login: admin / admin123   (change it after first login!)
INSERT INTO admins (username, pass_hash) VALUES
('admin', '$2y$10$9Hktdxvtxp9TC.S5mM94ce4I1n6rFcRHuytmWs1/VHd76.zH1rEN6');

-- ============================================================
-- SECTIONS
-- ============================================================
INSERT INTO sections (skey, label_en, label_es, note_en, note_es, sizes, sort) VALUES
('pizzas', 'Pizzas', 'Pizzas',
 'Extra toppings: <b>Medium +€0.50</b> · <b>Large +€1.00</b> · <b>Family +€1.50</b>',
 'Ingredientes extra: <b>Mediana +0,50€</b> · <b>Grande +1,00€</b> · <b>Familiar +1,50€</b>',
 '[{"en":"Medium 25cm","es":"Mediana 25cm","sen":"Med.","ses":"Med."},{"en":"Large 30cm","es":"Grande 30cm","sen":"Lge.","ses":"Gran."},{"en":"Family 40cm","es":"Familiar 40cm","sen":"Fam.","ses":"Fam."}]', 1),
('kebab-normal', 'Döner · Regular Bread', 'Döner · Pan Normal',
 'All döner include bread, lettuce, tomato, onion, corn and sauces · Chicken <b>+€0.50</b>',
 'Todos los döner llevan pan, lechuga, tomate, cebolla, maíz y salsas · Pollo <b>+0,50€</b>',
 '[{"en":"Regular","es":"Normal","sen":"Reg.","ses":"Norm."},{"en":"Large","es":"Grande","sen":"Lge.","ses":"Gran."}]', 2),
('kebab-rollo', 'Döner · Wrap Bread', 'Döner · Pan Rollo',
 'All döner include bread, lettuce, tomato, onion, corn and sauces',
 'Todos los döner llevan pan, lechuga, tomate, cebolla, maíz y salsas',
 '[{"en":"Regular","es":"Normal","sen":"Reg.","ses":"Norm."},{"en":"Large","es":"Grande","sen":"Lge.","ses":"Gran."}]', 3),
('tapas', 'Sides', 'Tapas', 'Fancy something to snack on', '¿Te apetece algo para picar?', NULL, 4),
('ensaladas', 'Salads', 'Ensaladas', NULL, NULL, NULL, 5),
('bebidas', 'Drinks', 'Bebidas', NULL, NULL, NULL, 6);

-- ============================================================
-- ITEMS  (section_id matches sections order above: 1..6)
-- ============================================================
-- Pizzas (section 1)
INSERT INTO items (section_id, num, name_en, name_es, desc_en, desc_es, prices, sort) VALUES
(1,  1, 'Margarita', 'Margarita', 'Tomato, mozzarella and oregano', 'Tomate, mozzarella y orégano', '["7.00","8.00","11.00"]', 1),
(1,  2, 'Cuatro Quesos', 'Cuatro Quesos', 'Tomato, mozzarella, gouda, cheddar, gorgonzola and oregano', 'Tomate, mozzarella, queso gouda, cheddar, gorgonzola y orégano', '["8.00","9.00","13.50"]', 2),
(1,  3, 'Barbacoa', 'Barbacoa', 'BBQ sauce, mozzarella, ham, beef, onion and oregano', 'Salsa barbacoa, mozzarella, jamón york, ternera, cebolla y orégano', '["7.00","8.50","12.50"]', 3),
(1,  4, 'Infierno', 'Infierno', 'Tomato, mozzarella, beef, green pepper and oregano', 'Tomate, mozzarella, ternera, pimiento verde y orégano', '["7.00","8.50","12.50"]', 4),
(1,  5, 'Mediterránea', 'Mediterránea', 'Tomato, mozzarella, red pepper, green pepper, tuna and oregano', 'Tomate, mozzarella, pimiento rojo, pimiento verde, atún y orégano', '["7.00","8.50","12.50"]', 5),
(1,  6, 'Napolitana', 'Napolitana', 'Tomato, mozzarella, anchovies, black olives and oregano', 'Tomate, mozzarella, anchoas, olivas negras y orégano', '["7.00","8.50","12.50"]', 6),
(1,  7, 'Serrana', 'Serrana', 'Tomato, mozzarella, serrano ham, diced tomato, olive oil and oregano', 'Tomate, mozzarella, jamón serrano, tomate en dados, aceite de oliva y orégano', '["7.00","8.50","12.50"]', 7),
(1,  8, 'Veneciana', 'Veneciana', 'Tomato, mozzarella, tuna, green olives, onion and oregano', 'Tomate, mozzarella, atún, olivas verdes, cebolla y orégano', '["7.00","8.50","12.50"]', 8),
(1,  9, '4 Estaciones', '4 Estaciones', 'Tomato, mozzarella, ham, mushrooms, olives, salami and oregano', 'Tomate, mozzarella, jamón york, champiñones, olivas, salami y orégano', '["7.00","8.50","12.50"]', 9),
(1, 10, 'Calzone', 'Calzone', 'Tomato, mozzarella, salami, mushrooms and oregano', 'Tomate, mozzarella, salami, champiñones y orégano', '["7.00","8.50","12.50"]', 10),
(1, 11, 'Vegetal', 'Vegetal', 'Tomato, mozzarella, eggplant, zucchini, onion, pepper and oregano', 'Tomate, mozzarella, berenjena, calabacín, cebolla, pimiento y orégano', '["7.00","8.50","12.50"]', 11),
(1, 12, 'Desi', 'Desi', 'Tomato, mozzarella, chicken, pepper, onion, olives, chilli and oregano', 'Tomate, mozzarella, pollo, pimiento, cebolla, aceitunas, picante y orégano', '["8.00","10.00","14.50"]', 12),
(1, 13, 'Kebab', 'Kebab', 'Tomato, mozzarella, kebab meat, white sauce and oregano', 'Tomate, mozzarella, carne de kebab, salsa blanca y orégano', '["7.00","8.50","12.50"]', 13),
(1, 14, 'Mixto', 'Mixto', 'Tomato, mozzarella, chicken, beef and oregano', 'Tomate, mozzarella, carne de pollo, ternera y orégano', '["7.00","8.50","12.50"]', 14),
(1, 15, 'Punjabi', 'Punjabi', 'Tomato, cheese, spicy beef, onion and oregano', 'Tomate, queso, ternera picante, cebolla y orégano', '["7.00","8.50","12.50"]', 15),
(1, 16, 'Halal', 'Halal', 'Tomato, cheese, chicken, onion, pepper and oregano', 'Tomate, queso, pollo, cebolla, pimiento y orégano', '["7.00","8.50","12.50"]', 16),
(1, 17, 'Hawaiana', 'Hawaiana', 'Tomato, mozzarella, ham, pineapple, mushrooms and oregano', 'Tomate, mozzarella, jamón york, piña, champiñones y orégano', '["7.00","8.50","12.50"]', 17),
(1, 18, 'Salami', 'Salami', 'Tomato, mozzarella, salami and oregano', 'Tomate, mozzarella, salami y orégano', '["7.00","8.50","12.50"]', 18),
(1, 19, 'Pepperoni', 'Pepperoni', 'Tomato, mozzarella, pepperoni and oregano', 'Tomate, mozzarella, pepperoni y orégano', '["7.00","8.50","12.50"]', 19),
(1, 20, 'Carbonara', 'Carbonara', 'Tomato, mozzarella, ham, onion, cream and oregano', 'Tomate, mozzarella, jamón york, cebolla, nata y orégano', '["7.50","9.00","13.50"]', 20),
(1, 21, 'Italiana', 'Italiana', 'Tomato, cheese, pepper, tuna, salami and oregano', 'Tomate, queso, pimiento, atún, salami y orégano', '["7.00","8.50","12.50"]', 21),
(1, 22, 'Marinera', 'Marinera', 'Tomato, cheese, prawns, tuna, onion and oregano', 'Tomate, queso, gamba, atún, cebolla y orégano', '["7.00","8.50","12.50"]', 22),
(1, 23, 'B&C', 'B&C', 'Tomato, cheese, egg, olives, salami and oregano', 'Tomate, queso, huevo, olivas, salami y orégano', '["7.00","8.50","12.50"]', 23),
(1, 24, 'España', 'España', 'Tomato, mozzarella, mushroom, bacon, ham and oregano', 'Tomate, mozzarella, champiñón, bacon, jamón york y orégano', '["7.00","8.50","12.50"]', 24),
(1, 25, 'Caprichosa', 'Caprichosa', 'Tomato, mozzarella, chicken, beef, onion, egg and oregano', 'Tomate, mozzarella, pollo, ternera, cebolla, huevo y orégano', '["7.00","8.50","12.50"]', 25);

-- Döner · pan normal (section 2)
INSERT INTO items (section_id, num, name_en, name_es, desc_en, desc_es, prices, sort) VALUES
(2, 46, 'Döner Regular', 'Döner Normal', 'Chicken or beef', 'De pollo o ternera', '["4.00","5.00"]', 1),
(2, 47, 'Döner Mixed', 'Döner Mixto', 'Chicken and beef', 'De pollo y ternera', '["4.50","5.50"]', 2),
(2, 48, 'Döner Meat Only', 'Döner Solo Carne', 'Chicken or beef · bread and sauces', 'De pollo o ternera · pan y salsas', '["5.00","6.50"]', 3),
(2, 49, 'Döner Mixed Meat Only', 'Döner Mixto Solo Carne', 'Chicken and beef · bread and sauces', 'De pollo y ternera · pan y salsas', '["5.50","7.50"]', 4),
(2, 50, 'Döner with Cheese', 'Döner con Queso', 'Chicken or beef', 'De pollo o ternera', '["4.50","5.50"]', 5),
(2, 51, 'Döner Veggie', 'Döner Vegetal', 'Lettuce, tomato, onion, corn, cheese and sauces', 'Lechuga, tomate, cebolla, maíz, queso y salsas', '["4.00","4.50"]', 6),
(2, 52, 'Döner with Falafel', 'Döner con Falafel', 'Falafel, cheese, lettuce, tomato, onion, corn, sauces', 'Falafel, queso, lechuga, tomate, cebolla, maíz y salsas', '["4.00","4.50"]', 7),
(2, 53, 'Döner BBQ', 'Döner Barbacoa', 'Chicken or beef · BBQ sauce', 'De pollo o ternera · salsa barbacoa', '["4.50","5.50"]', 8),
(2, 54, 'Döner with Fries', 'Döner con Patatas', 'Chicken or beef · fries inside', 'De pollo o ternera · patatas fritas dentro', '["5.00","6.00"]', 9),
(2, 55, 'Döner Mixed with Fries', 'Döner Mixto con Patatas', 'Chicken and beef · fries inside', 'De pollo y ternera · patatas fritas dentro', '["5.50","6.50"]', 10),
(2, 56, 'Döner on a Plate', 'Döner en Plato', 'Chicken or beef · fries and sauces', 'De pollo o ternera · patatas fritas y salsas', '["6.50","7.50"]', 11);

-- Döner · pan rollo (section 3)
INSERT INTO items (section_id, num, name_en, name_es, desc_en, desc_es, prices, sort) VALUES
(3, 57, 'Döner Regular', 'Döner Normal', 'Chicken or beef', 'De pollo o ternera', '["4.50","5.50"]', 1),
(3, 58, 'Döner Mixed', 'Döner Mixto', 'Chicken and beef', 'De pollo y ternera', '["5.00","6.00"]', 2),
(3, 59, 'Döner Meat Only', 'Döner Solo Carne', 'Chicken or beef · bread and sauces', 'De pollo o ternera · pan y salsas', '["6.00","7.50"]', 3),
(3, 60, 'Döner Mixed Meat Only', 'Döner Mixto Solo Carne', 'Chicken and beef · bread and sauces', 'De pollo y ternera · pan y salsas', '["6.50","8.00"]', 4),
(3, 61, 'Döner with Cheese', 'Döner con Queso', 'Chicken or beef', 'De pollo o ternera', '["5.50","6.50"]', 5),
(3, 62, 'Döner Veggie', 'Döner Vegetal', 'Lettuce, tomato, onion, corn, cheese and sauces', 'Lechuga, tomate, cebolla, maíz, queso y salsas', '["4.00","5.00"]', 6),
(3, 63, 'Döner with Falafel', 'Döner con Falafel', 'Falafel, cheese, lettuce, tomato, onion, corn, sauces', 'Falafel, queso, lechuga, tomate, cebolla, maíz y salsas', '["4.50","5.50"]', 7),
(3, 64, 'Döner BBQ', 'Döner Barbacoa', 'Chicken or beef · BBQ sauce', 'De pollo o ternera · salsa barbacoa', '["5.00","6.00"]', 8),
(3, 65, 'Döner with Fries', 'Döner con Patatas', 'Chicken or beef · fries inside', 'De pollo o ternera · patatas fritas dentro', '["5.50","6.50"]', 9),
(3, 66, 'Döner Mixed with Fries', 'Döner Mixto con Patatas', 'Chicken and beef · fries inside', 'De pollo y ternera · patatas fritas dentro', '["6.00","7.00"]', 10),
(3, 67, 'Döner on a Plate', 'Döner en Plato', 'Chicken or beef · fries and sauces', 'De pollo o ternera · patatas fritas y salsas', '["6.50","7.50"]', 11);

-- Sides (section 4)
INSERT INTO items (section_id, num, name_en, name_es, desc_en, desc_es, prices, sort) VALUES
(4, 26, '6 Nuggets with Fries', '6 Nuggets con Patatas Fritas', '', '', '["6.00"]', 1),
(4, 27, '6 Croquettes with Fries', '6 Croquetas con Patatas Fritas', '', '', '["5.00"]', 2),
(4, 28, '6 Chicken Wings with Fries', '6 Alitas con Patatas Fritas', '', '', '["6.00"]', 3),
(4, 29, '2 Veggie Samosas', '2 Samosas de Verduras', '', '', '["3.50"]', 4),
(4, 30, '2 Meat Samosas', '2 Samosas de Carne', '', '', '["4.50"]', 5),
(4, 31, 'Fries', 'Patatas Fritas', '', '', '["3.00"]', 6),
(4, 32, 'Patatas Bravas or Deluxe', 'Patatas Bravas o Deluxe', '', '', '["3.50"]', 7),
(4, 33, '8 Onion Rings', '8 Aros de Cebolla', '', '', '["4.00"]', 8),
(4, 34, 'Chicken Burger', 'Hamburguesa de Pollo', '', '', '["4.50"]', 9);

-- Salads (section 5)
INSERT INTO items (section_id, num, name_en, name_es, desc_en, desc_es, prices, sort) VALUES
(5, 35, 'Basic Salad', 'Ensalada Basic', 'Lettuce, tomato, corn, cucumber and dressing', 'Lechuga, tomate, maíz, pepino y salsa', '["3.50"]', 1),
(5, 36, 'B&C Salad', 'Ensalada B&C', 'Lettuce, tomato, corn, mozzarella and chicken breast', 'Lechuga, tomate, maíz, mozzarella y pechuga de pollo', '["5.00"]', 2),
(5, 37, 'Valencian Salad', 'Ensalada Valenciana', 'Lettuce, tomato, corn, cucumber, onion, olives, egg and tuna', 'Lechuga, tomate, maíz, pepino, cebolla, olivas, huevo y atún', '["5.00"]', 3),
(5, 38, 'España Salad', 'Ensalada España', 'Lettuce, tomato, ham, cheese, olives and pineapple', 'Lechuga, tomate, jamón york, queso, aceitunas y piña', '["5.50"]', 4);

-- Drinks (section 6)
INSERT INTO items (section_id, num, name_en, name_es, desc_en, desc_es, prices, sort) VALUES
(6, 39, 'Soft Drinks 33cl', 'Refrescos 33cl', 'Coca-Cola, Coke Light & Zero, Fanta, Aquarius, Sprite, Nestea', 'Coca-Cola, Cola Light y Zero, Fanta, Aquarius, Sprite, Nestea', '["1.40"]', 1),
(6, 40, 'Soft Drinks 2L', 'Refrescos 2L', 'Coca-Cola, Coke Light & Zero, Fanta, Sprite', 'Coca-Cola, Cola Light y Zero, Fanta, Sprite', '["2.90"]', 2),
(6, 41, 'Small Water', 'Agua Pequeña', '', '', '["1.00"]', 3),
(6, 42, 'Large Water 1.5L', 'Agua Grande 1,5L', '', '', '["1.40"]', 4),
(6, 43, 'Monster / Red Bull', 'Monster / Red Bull', '', '', '["2.50"]', 5),
(6, 44, 'Energy Drinks', 'Bebidas Energéticas', 'Assorted', 'Variedad', '["2.50"]', 6),
(6, 45, 'Latin Drinks', 'Bebidas Latinas', 'Assorted', 'Variedad', '["2.50"]', 7);

-- ============================================================
-- DEALS
-- ============================================================
INSERT INTO deals (num, price, tag, items_en, items_es, img) VALUES
(1, 6.95, 'deal.tag', '["1 Döner kebab regular (normal bread)","Fries","Drink 33cl"]', '["1 Döner kebab normal (pan normal)","Patatas fritas","Bebida 33cl"]', 'kebab?lock=1'),
(2, 8.95, NULL, '["2 Döner kebab regular (normal bread)","Fries","Drink 2L"]', '["2 Döner kebab normal (pan normal)","Patatas fritas","Bebida 2L"]', 'kebab?lock=2'),
(3, 15.95, NULL, '["3 Döner kebab regular (normal bread)","Fries","Drink 2L"]', '["3 Döner kebab normal (pan normal)","Patatas fritas","Bebida 2L"]', 'kebab?lock=3'),
(4, 6.95, NULL, '["Chicken wings (6 pcs), nuggets (6 pcs) or falafel (6 pcs)","Fries","Drink 33cl"]', '["Alitas de pollo (6 ud), nuggets (6 ud) o falafel (6 ud)","Patatas fritas","Bebida 33cl"]', 'friedchicken?lock=4'),
(5, 6.95, NULL, '["Chicken burger","Fries","Drink 33cl"]', '["Hamburguesa de pollo","Patatas fritas","Bebida 33cl"]', 'burger?lock=5'),
(6, 18.95, NULL, '["1 Medium pizza","2 Döner kebab regular (normal bread)","Fries","Drink 2L"]', '["1 Pizza mediana","2 Döner kebab normal (pan normal)","Patatas fritas","Bebida 2L"]', 'pizza?lock=6'),
(7, 16.95, NULL, '["1 Family pizza","Drink 2L"]', '["1 Pizza familiar","Bebida 2L"]', 'pizza?lock=7'),
(8, 22.95, NULL, '["2 Large pizzas","Basic salad","Drink 2L"]', '["2 Pizzas grandes","Ensalada basic","Bebida 2L"]', 'pizza?lock=8');

-- ============================================================
-- EXTRAS BAR
-- ============================================================
INSERT INTO extras (html_en, html_es, sort) VALUES
('Chicken <b>+€0.50</b>', 'Pollo <b>+0,50€</b>', 1),
('Mixed <b>+€0.50</b>', 'Mixto <b>+0,50€</b>', 2),
('Cheese <b>+€1.00</b>', 'Queso <b>+1,00€</b>', 3),
('Meat only <b>+€1.00</b>', 'Solo carne <b>+1,00€</b>', 4),
('Fries <b>+€1.00</b>', 'Patatas <b>+1,00€</b>', 5),
('Wrap bread <b>+€0.50</b>', 'Pan rollo <b>+0,50€</b>', 6),
('Regular box <b>€4.50</b> · Large box <b>€5.50</b>', 'Box normal <b>4,50€</b> · Box grande <b>5,50€</b>', 7);
