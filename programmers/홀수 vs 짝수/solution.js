// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
   let even = 0;
   let odd = 0;
   
   num_list.map((a, b) => {
       !(b%2) ? even += a : odd +=a
   }) 
    
   return odd > even ? odd : even
}

