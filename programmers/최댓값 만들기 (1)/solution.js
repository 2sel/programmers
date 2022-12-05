// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
   let array = numbers. sort((a,b)=>b-a)
   return array[0]*array[1]
}