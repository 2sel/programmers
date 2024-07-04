-- 코드를 입력하세요
SELECT CAR_ID, MAX(
CASE WHEN '2022-10-16' BETWEEN START_DATE AND END_DATE
    -- 1. 대여일 2022.10.16 = '대여중' / 아닐 경우 '대여 가능'
    -- 2. 반납일 2022.10.16 = '대여중'
    THEN '대여중'
    ELSE '대여 가능'
    END
) AS AVAILABILITY
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
GROUP BY CAR_ID 
ORDER BY CAR_ID DESC