// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog) {
    const controll = {
         "1":"w",
        "-1":"s",
        "10":"d",
        "-10":"a"
    }
    
    return numLog.slice(1).map((index,i) => {
        return controll[index - numLog[i]]
    }).join('')
}

// 1. slice(1)로 앞 값을 제거 
// 2. map()메소드로 변환. numLog[i]는 index에서 해단 인덱스 i번째 원소를 뺀 값. (이 부분이 어려워 서치 - https://hihiha2.tistory.com/145)
// 3. 다 돌리면 join('') 추가