// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}

//여집합을 이용한 문제풀이로 문자열로 바꾸고 split을 쓴 다음 if문을 돌리는 방법을 택했는데, 이 방법이 가장 짧고 명료하여 좋았던 것같다!