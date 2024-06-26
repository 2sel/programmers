-- 코드를 입력하세요
-- 상반기 아이스크림 성분 타입, 총주문량(TOTAL_ORDER)
SELECT INGREDIENT_TYPE, SUM(TOTAL_ORDER) AS TOTAL_ORDER
FROM FIRST_HALF AS F JOIN ICECREAM_INFO AS I
ON I.FLAVOR=F.FLAVOR
GROUP BY INGREDIENT_TYPE
ORDER BY TOTAL_ORDER