// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {
    var answer = 0;

    if(my_string.length < is_prefix.length){
        return 0;
    }

    for(let i = 0; i<is_prefix.length; i++){
        if(my_string[i] !== is_prefix[i]){
            return 0;
        }
    }

    return 1;;
}
