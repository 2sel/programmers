-- 코드를 작성해주세요
SELECT 
    CASE
        WHEN DATE_FORMAT(DIFFERENTIATION_DATE, '%m') In ('01','02','03') THEN '1Q'
        WHEN DATE_FORMAT(DIFFERENTIATION_DATE, '%m') In ('04','05','06') THEN '2Q'
        WHEN DATE_FORMAT(DIFFERENTIATION_DATE, '%m') In ('07','08','09') THEN '3Q'
        WHEN DATE_FORMAT(DIFFERENTIATION_DATE, '%m') In ('10','11','12') THEN '4Q'
    END AS QUARTER,
COUNT(*) AS ECOLI_COUNT
FROM ECOLI_DATA 
GROUP BY QUARTER 
ORDER BY QUARTER 