-- 코드를 입력하세요
-- 주문 정보에서 맛(FLAVOR) 조회
SELECT FIRST_HALF.FLAVOR
-- 테이블 두개에서 조회
FROM FIRST_HALF , ICECREAM_INFO
-- 조건 : 총주문량 = 3000 / 주 성분 fruit_based
WHERE FIRST_HALF.FLAVOR = ICECREAM_INFO.FLAVOR AND TOTAL_ORDER > 3000 AND INGREDIENT_TYPE = 'fruit_based' 
-- 총 주문량이 큰 순서대로 조회. 즉 내림차순으로 진행
ORDER BY TOTAL_ORDER DESC