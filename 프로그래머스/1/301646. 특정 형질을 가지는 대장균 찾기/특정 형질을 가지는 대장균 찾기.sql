-- 코드를 작성해주세요
SELECT count(ID) AS COUNT
FROM ECOLI_DATA 
-- 2진수로 표현. 1/3번 형질을 보유
WHERE GENOTYPE & 2= 0 AND (GENOTYPE & 1 > 0 or GENOTYPE & 4 > 0 )
