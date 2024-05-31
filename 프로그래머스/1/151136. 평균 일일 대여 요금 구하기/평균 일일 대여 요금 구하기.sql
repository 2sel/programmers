-- 코드를 입력하세요
-- AVERAGE_FEE 지정
SELECT ROUND(AVG(DAILY_FEE)) AS AVERAGE_FEE
FROM CAR_RENTAL_COMPANY_CAR
-- 조건 : 일일 대여 요금은 소수 첫번째 자리 반올림 /  자동차 종류가 SUV 
WHERE CAR_TYPE = 'SUV'
