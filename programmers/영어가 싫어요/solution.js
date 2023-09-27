// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
    let list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    list.forEach((str, idx)=>{
        numbers = numbers.replaceAll(str, idx)
    })
    
    return Number(numbers)
}
// 쉽게 푸는 해당 방법 외에 알아보기