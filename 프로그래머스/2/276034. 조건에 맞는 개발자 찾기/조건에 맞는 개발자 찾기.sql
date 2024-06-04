-- 코드를 작성해주세요
SELECT ID,EMAIL,FIRST_NAME,LAST_NAME 
FROM DEVELOPERS 
-- 조건 : PYTHON, C# 스킬을 가지고 있는 - 
WHERE SKILL_CODE & (SELECT CODE FROM SKILLCODES WHERE NAME = 'Python') OR SKILL_CODE & (SELECT CODE FROM SKILLCODES WHERE NAME = 'C#')
ORDER BY ID