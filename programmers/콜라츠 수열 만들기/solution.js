// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
    let answer = [];
    while(n !== 1){
    // answer.push(n) 이 첫 실행문인 이유는 결과 값에 '시작점인 n'도 포함이 되어야 하기 때문이라고 함!(서치)
        answer.push(n)
        if(n%2===0){
            n = n / 2
        } else {
            n = 3 * n +1
        }
    }
    answer.push(1)
    return answer
}
// 콜라츠 추측 수열 참고(링크) = https://www.folivoralab.com/254