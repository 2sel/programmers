// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string) {
    let answer = [];
    let str_re = my_string.length;
    for(let i=0; i<str_re; i++){
        answer.push(my_string.slice(i, str_re));
    }
    return answer.sort();
}