// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
    return Math.min(...sides) * 2 - 1;
}
// 수식으로 본다면 2x-1은 삼각형의 완성조건의 수식이다.
// 주어진 두 변의 길이가 x, y일 때
// 
// 1) y가 가장 긴 변일 때, x<b<y

// b-x < y < x+b

// (x+b) - (b-x) - 1
// = 2x-1

// 2) 모르는 변이 가장 긴 변일 때, x<y<c

// y-x < c < x+y

// (x+y) - (y-x) -1
// = 2x-1
// 이기에 결론적으로 보았을 때 해당 문제는 2x-1을 대입하면 풀리는 문제이다.