-- 코드를 작성해주세요
-- 3세대의 대장균 ID
-- 분화 2번 (+2+2)
SELECT ID 
FROM ECOLI_DATA 
WHERE PARENT_ID IN (
    SELECT ID
    FROM ECOLI_DATA
        WHERE PARENT_ID IN (
             SELECT ID
             FROM ECOLI_DATA
             WHERE PARENT_ID IS NULL
        )
)
ORDER BY ID
