// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
    var answer = [];
    
    for(let i=0; i<my_str.length; i+=n){
        answer.push(my_str.substr(i,n))
    }
    
    return answer
}

//for문의 조건이 i++줄 알고 작성했는데, 안풀려서 서치해봤더니 조건을 i+=n 설정하니 해결...!