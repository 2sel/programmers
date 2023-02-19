// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
    let answer = '';
   for (let i = 0; i<rsp.length; i++){
       //  charAt = 문자열을 찾아서 반환하는 함수
        let arr = rsp.charAt(i);
       if(arr === "2"){
           answer += "0"
       }
       else if (arr === "0"){
           answer += "5"
       }
       else if(arr === "5"){
           answer += "2"
       }
    }
    return answer;
}