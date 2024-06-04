-- 코드를 작성해주세요
SELECT ID, LENGTH 
FROM FISH_INFO
-- 조건 가장 큰 물고기 10마리의 ID, LENGTH. 길이는 내림차순. 같다면 ID에서 오름차순
ORDER BY  IFNULL(LENGTH, 10) DESC, ID
LIMIT 10