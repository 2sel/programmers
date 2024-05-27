-- 코드를 입력하세요    
SELECT WAREHOUSE_ID,WAREHOUSE_NAME,ADDRESS,
-- 조건 = FREEZER_YN이 NULL이면 n으로 출력
-- NULL 값인 경우 비교연선자가 사용 불가능함
if(FREEZER_YN IS null, 'N', FREEZER_YN) AS FREEZER_YN
FROM FOOD_WAREHOUSE 
-- 경기도에 위치한 창고
WHERE ADDRESS LIKE '경기도%'