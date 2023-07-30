// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString, pat) {
    return myString.substring(0, myString.lastIndexOf(pat) + pat.length);
    // let answer = '';
    // const long = myString.lastIndexOf(pat)
    // answer = myString.substr(0, long + pat.length)
    // return answer
    
    // lastIndexOf() - 역순으로 탐색하여 먼저 만나는 인덱스 반환
    // substr() -  특정 위치에서 시작하여 정해진 문자 수 만큼 문자들 반환. 다만 해당 메서드는 사용을 자제하는 것을 권고함.
}