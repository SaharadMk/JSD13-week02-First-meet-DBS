-- SELECT * from staff

-- SELECT * from menuitems
-- where category = 'Burger'

-- SELECT * from menuitems
-- order by price desc

-- SELECT  name, price From menuitems ORDER BY price ASC LIMIT 3;

-- SELECT ingredients.NAME
-- FROM ingredients
-- JOIN suppliers ON ingredients.supplier_id= suppliers.supplier_id
-- WHERE suppliers.name = 'Patty''s Premium Meats';

-- SELECT * FROM Orders WHERE staff_id = 1;

-- SELECT
--     s.first_name,
--     s.last_name,
--     COUNT(o.order_id) AS order_count
-- FROM staff s 
-- JOIN orders o ON s.staff_id = o.staff_id
-- GROUP BY s.staff_id
-- ORDER BY order_count DESC; 

-- SELECT
--     Date(order_date) AS sales_day,
--     SUM(total_price) AS daily_revenue
-- FROM orders
-- GROUP BY sales_day
-- ORDER BY sales_day;

-- SELECT
--     mi.NAME,
--     SUM(oi.quantity) AS total_sold
-- FROM orderitems oi
-- JOIN menuitems mi ON oi.item_id = mi.item_id
-- GROUP BY mi.name
-- ORDER BY total_sold DESC
-- LIMIT 1;

SELECT
    i.name,
    ri.quantity_needed,
    i.unit
FROM recipeitems ri 
JOIN menuitems mi ON ri.item_id = mi.item_id
JOIN ingredients i ON ri.ingredient_id = i.ingredient_id
WHERE mi.name = 'Bacon Cheesburger';