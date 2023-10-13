// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    
    let answer = "";
    for(let i=0; i<s.length; i++){
        let text = s[i];
        
        if(text == " "){
            answer += " ";
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) +n;
        
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}


// 와 정말 어렵다... 풀이 자체는 쉽지만 continue;를 넣을 생각을 전혀하지 못했다;;
