// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
if (dot[0]>0 && dot[1] > 0){
    return 1;
}else if(dot[0]<0 && dot[1] > 0){
    return 2;
}else if(dot[0]<0 && dot[1] < 0){
    return 3;
}else if(dot[0]>0 && dot[1] < 0){
    return 4;
}
}

// 삼항연산자 사용
//function solution(dot) {
//    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
// }