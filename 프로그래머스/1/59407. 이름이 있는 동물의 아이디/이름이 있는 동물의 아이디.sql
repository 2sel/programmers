-- 코드를 입력하세요  
SELECT ANIMAL_ID
FROM ANIMAL_INS
-- 조건 = 이름이 있는 동물의 아이디 조회
WHERE NAME IS NOT NULL
ORDER BY ANIMAL_ID