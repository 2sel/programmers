// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
    let result =''
  
    for(let i = 0; i<my_string.length; i += m){
    result += my_string[i+ c -1]
    }
    
    return result
}
// i의 범위 지정을 못해서 틀렸는데, 서치로 보안했다.