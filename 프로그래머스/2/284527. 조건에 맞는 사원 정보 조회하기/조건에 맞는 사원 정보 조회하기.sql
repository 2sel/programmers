-- 코드를 작성해주세요
-- 2022 평가 점수가 가장 높은 사원 HR_EMPLOYEES  *
/*
SELECT HR_EMPLOYEES(*)
-- 점수, 사번, 성명, 직책, 이메일
FROM HR_DEPARTMENT AS D
JOIN HR_EMPLOYEES AS E
    ON D.DEPT_ID = E.DEPT_ID
JOIN HR_GRADE AS G
    ON D.EMP_NO = g.EMP_NO
WHERE SCORE --> MAX
ORDER BY DEPT_ID
*/

SELECT AA.SCORE, AA.EMP_NO , BB.EMP_NAME, BB.POSITION, BB.EMAIL

FROM ( SELECT EMP_NO, SUM(SCORE) AS SCORE
        FROM HR_GRADE 
        WHERE YEAR ='2022'
        GROUP BY EMP_NO
     ) AA
JOIN HR_EMPLOYEES BB
 ON AA.EMP_NO = BB.EMP_NO
 ORDER BY SCORE DESC
 LIMIT 1
