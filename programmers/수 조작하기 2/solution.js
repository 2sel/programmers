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