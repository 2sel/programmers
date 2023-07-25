// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
    let result =''
  
    for(i=c-1; i<my_string.length; i += m){
    result += my_string[i]
    }
    
    return result
}