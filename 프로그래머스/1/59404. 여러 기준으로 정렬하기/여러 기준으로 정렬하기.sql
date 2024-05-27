-- 코드를 입력하세요    
-- 아이디, 이름, 보호 시작일   
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
-- 보호를 나중에 시작한 = 내림차순     
ORDER BY NAME ASC, DATETIME DESC