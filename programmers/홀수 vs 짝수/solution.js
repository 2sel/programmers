// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
   let even = 0;
   let odd = 0;
   // 1. map을 돌리면서 %으로 홀짝을 나눈다.
   num_list.map((a, b) => {
       // 2. 짝수라면 even에 더한다.
       // 3. 홀수라면 odd에 더한다.
       !(b%2) ? even += a : odd +=a
   }) 
    
   // 4. 둘의 값을 비교하여 큰 값을 리턴하게 한다. 
   return odd > even ? odd : even
}



