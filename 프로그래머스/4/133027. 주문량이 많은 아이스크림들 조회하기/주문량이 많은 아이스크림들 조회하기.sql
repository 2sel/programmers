-- 코드를 입력하세요
-- 7월 총 주문량 + 상반기 총 주문량 = 큰순서대로 상위 3개 맛 조회
SELECT J.FLAVOR 
FROM FIRST_HALF AS F JOIN JULY AS J
ON F.FLAVOR= J.FLAVOR
GROUP BY FLAVOR
ORDER BY (SUM(J.TOTAL_ORDER) + SUM(F.TOTAL_ORDER)) DESC
LIMIT 3