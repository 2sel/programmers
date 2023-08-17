// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i = 0; i<b; i++){ // i 선언, b만큼 반복
        let str = ""; // 변수 선언
        for(let j =0; j<a; j++){ // j 선언, 별을 줄당 몇 개 찍을지 반복
            str = str + "*" // 변수에 별 담기
        }
        console.log(str)
    }
});