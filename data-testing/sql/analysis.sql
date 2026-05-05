-- ============================================
-- CUSTOMER ANALYSIS
-- ============================================

-- Base CTE: orders per customer
WITH customer_orders AS (
    SELECT 
        c.id,
        c.name,
        c.city,
        COUNT(o.id) AS total_orders
    FROM customers c
    LEFT JOIN orders o
        ON c.id = o.customer_id
    GROUP BY c.id, c.name, c.city
)

-- 1. Full customer activity view
SELECT *
FROM customer_orders;


-- 2. Customer segmentation
SELECT 
    name,
    city,
    total_orders,
    CASE
        WHEN total_orders > 10 THEN 'High'
        WHEN total_orders >= 5 THEN 'Medium'
        ELSE 'Low'
    END AS segment
FROM customer_orders
ORDER BY total_orders DESC;


-- 3. Top customer per city
SELECT *
FROM (
    SELECT 
        name,
        city,
        total_orders,
        ROW_NUMBER() OVER (
            PARTITION BY city 
            ORDER BY total_orders DESC
        ) AS rank
    FROM customer_orders
) ranked
WHERE rank = 1;


-- 4. Customers above average activity
SELECT *
FROM customer_orders
WHERE total_orders > (
    SELECT AVG(total_orders)
    FROM customer_orders
);


-- 5. Average number of orders per customer
SELECT 
    AVG(total_orders) AS avg_orders_per_customer
FROM customer_orders;


-- 6. Distribution of customers by activity level
SELECT 
    CASE
        WHEN total_orders > 10 THEN 'High'
        WHEN total_orders >= 5 THEN 'Medium'
        ELSE 'Low'
    END AS segment,
    COUNT(*) AS total_customers
FROM customer_orders
GROUP BY segment
ORDER BY total_customers DESC;