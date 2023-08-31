// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;

}