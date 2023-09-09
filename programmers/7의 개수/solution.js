// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
    return array.join("").split("").filter(a => a ==='7').length
}

// return array.join('').split('7').length-1;로도 풀이가 가능하다
// 그래도 좋은 코드로써는 내 코드가 낫지 않을까...?? 전전전문제에서 filter로 시달려서 이번문제는 비교적 빨리 풀었다!!