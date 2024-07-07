-- 코드를 입력하세요
-- 첨부파일 경로 조회
-- 결과 :  /home/grep/src/BOARD_ID/FILE_ID FILE_NAME FILE_EXT
SELECT CONCAT('/home/grep/src/',F.BOARD_ID,'/',FILE_ID,FILE_NAME,FILE_EXT) AS FILE_PATH
FROM USED_GOODS_BOARD AS B JOIN USED_GOODS_FILE AS F
ON B.BOARD_ID = F.BOARD_ID
-- 조회수가 가장 높은 게시물은 하나만 
WHERE VIEWS = (
    SELECT MAX(VIEWS)
    FROM USED_GOODS_BOARD 
)
ORDER BY FILE_ID DESC