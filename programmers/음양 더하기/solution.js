// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i =0; i<signs.length; i++){
        if(signs[i] == true){
            answer += absolutes[i]
        } else {
            //음수로 만든 후 더해주기
            answer += absolutes[i]*-1
        }
    }
    return answer;
}
// else에 해당되는 음수로 만든 후 더해주는 부분이 막혀서 서치로 해결.
// https://choijying21.tistory.com/25