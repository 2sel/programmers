// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {    
    if(0<angle && angle < 90){
        return 1;
    } else if (angle === 90){
        return  2;        
    } else if (90< angle && angle <180){
        return 3;
    } else if (angle === 180){
        return 4;
    }
}

// for문으로도 풀이 가능