-- 코드를 작성해주세요
-- 수원의 미세먼지 평균.초미세먼지평균 = 평균을 내고 반올림하기
-- ROUND = 소수 자리 반올림
SELECT YEAR(YM) AS YEAR, ROUND(AVG(PM_VAL1),2) AS 'PM10', ROUND(AVG(PM_VAL2),2) AS 'PM2.5'
FROM AIR_POLLUTION 
WHERE LOCATION2 = '수원'
GROUP BY YEAR
ORDER BY YEAR

