-- 코드를 입력하세요 
-- 일단 동물의 아이디와 이름 조회
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
-- 조건문 - "아픈"동물
WHERE INTAKE_CONDITION = "Sick"
ORDER BY ANIMAL_ID