// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString, pat) {
    let count = 0;
    for(let i = 0; i<= myString.length - pat.length; i++){
        if(myString.slice(i, i+pat.length) === pat){
            count++
        }
    }
    return count
}
// 처음에는 filter나 indexOf로 사용하는 문제일거라고 생각했으나 중첩문을 돌린 다음 그 조건을 i번째부터 pat.length만큼 자르되 pat의 길이로 끝지점을 설정해준다면 pat에 해당되는 값이 어느정도 나오는지 알 수 있었다.
// 참고 - https://hihiha2.tistory.com/130