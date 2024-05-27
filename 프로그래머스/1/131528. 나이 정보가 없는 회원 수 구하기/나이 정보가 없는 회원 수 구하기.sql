-- 코드를 입력하세요   
-- 나이 정보가 없는 회원을 출력하기 위해 COUNNT(*)를 사용
SELECT COUNT(*) AS USERS
FROM USER_INFO
WHERE AGE IS NULL