// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
     return [...myString].map(a => a.charCodeAt() < 108 ? 'l' : a).join("")
}

// charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환. 알파벳은 총 108개로 이루어져 있기 때문에 사용.
// myString.replace(/[a-k]/g,'l') << 정규 표현식 사용시 짧고 간편하게 기입가능