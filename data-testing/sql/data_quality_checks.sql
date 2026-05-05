-- ============================================
-- DATA QUALITY CHECKS
-- ============================================

-- 1. Duplicate customers by name (logical duplicates)
-- Purpose: Identify potential duplicated users
SELECT 
    name,
    COUNT(*) AS duplicate_count
FROM customers
GROUP BY name
HAVING COUNT(*) > 1;


-- 2. Orders without a valid customer (broken relationship)
-- Purpose: Detect referential integrity issues
SELECT 
    o.id AS order_id,
    o.customer_id,
    o.amount,
    o.created_at
FROM orders o
LEFT JOIN customers c
    ON o.customer_id = c.id
WHERE c.id IS NULL;


-- 3. Invalid order amounts
-- Purpose: Identify incorrect financial data
SELECT 
    *
FROM orders
WHERE amount <= 0;


-- 4. Temporal inconsistencies
-- Purpose: Orders created before the customer existed
SELECT 
    o.id AS order_id,
    o.customer_id,
    o.created_at AS order_date,
    c.created_at AS customer_created_at
FROM orders o
JOIN customers c
    ON o.customer_id = c.id
WHERE o.created_at < c.created_at;


-- 5. Customers without orders
-- Purpose: Identify inactive users
SELECT 
    c.id,
    c.name
FROM customers c
LEFT JOIN orders o
    ON c.id = o.customer_id
WHERE o.id IS NULL;


-- 6. Inconsistent city values
-- Purpose: Detect data standardization issues
SELECT 
    city,
    COUNT(*) AS total
FROM customers
GROUP BY city
ORDER BY total DESC;