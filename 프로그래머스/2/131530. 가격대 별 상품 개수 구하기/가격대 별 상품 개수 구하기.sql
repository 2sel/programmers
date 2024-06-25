-- 코드를 입력하세요
-- 만원단위 가격대별로 상품 개수 출력 
SELECT FLOOR(PRICE/10000)*10000 AS PRICE_GROUP, COUNT(*) AS PRODUCTS
FROM PRODUCT 
-- WHERE
GROUP BY PRICE_GROUP
-- HAVING 
ORDER BY PRICE_GROUP
-- 순으로 쿼리문이 와야함