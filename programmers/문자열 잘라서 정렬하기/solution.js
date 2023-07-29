// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181866

function solution(myString) {
    return myString.split('x').filter(index => index!== "").sort()
}

// 1. split으로 x를 자름
// 2. filter를 사용하여 index를 걸러내고 index가 아닐 경우 "" 로 변환
// 3. sort 메서드를 사용하여 정렬 후 반환.