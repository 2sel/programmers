// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
    let answer = 0;
    if(num_list.length >= 11){
       return num_list.reduce((a, b) => a + b, 0);
        
    } else {
          return num_list.reduce((a,b) => a*b)
    }
    return answer;
}