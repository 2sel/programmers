// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
    let list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    list.forEach((str, idx)=>{
        numbers = numbers.replaceAll(str, idx)
    })
    
    return Number(numbers)
}