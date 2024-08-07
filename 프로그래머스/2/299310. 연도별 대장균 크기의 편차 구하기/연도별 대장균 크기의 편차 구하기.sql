-- 코드를 작성해주세요
-- 대장균 크기의 편차 = 연도별 가장 큰 대장균의 크기 - 각 대장균의 크기
SELECT YEAR(A.DIFFERENTIATION_DATE) AS YEAR, B.YEAR_MAX - A.SIZE_OF_COLONY AS YEAR_DEV, ID
FROM ECOLI_DATA A
JOIN (
SELECT YEAR(DIFFERENTIATION_DATE) AS YEAR, MAX(SIZE_OF_COLONY) AS YEAR_MAX
    FROM ECOLI_DATA
    GROUP BY YEAR
) B
ON YEAR(A.DIFFERENTIATION_DATE) = B.YEAR
ORDER BY YEAR, YEAR_DEV