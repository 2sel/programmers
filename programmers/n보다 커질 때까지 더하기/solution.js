// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
    return numbers.reduce((acc,plus) => acc > n?acc : acc+plus, 0)
}

// reduce()말고 for문으로 풀이
// function solution(numbers, n) {
//    for(let i = 0; i<numbers.length; i++) {
//      sum += numbers[i]
//      if(sum > n) break;
//    }
//    return sum;
// }