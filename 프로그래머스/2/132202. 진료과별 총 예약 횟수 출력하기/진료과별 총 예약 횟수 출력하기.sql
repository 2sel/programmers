-- 코드를 입력하세요
-- 조건 : 예약한 환자 수/진료과 코드 조회. 컬럼명 지정+오름차순
SELECT MCDP_CD AS '진료과코드', COUNT(APNT_YMD) AS '5월예약건수'
FROM APPOINTMENT 
WHERE APNT_YMD LIKE '2022-05-%'
GROUP BY MCDP_CD
ORDER BY COUNT(APNT_YMD), MCDP_CD