// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
     let count = 0 
    for (num of num_list){
        let number = num; 
        while (true){ 
            if (number === 1){ 
                break
            }
            if (number % 2 === 0){ 
                number = number / 2
                count += 1 
            }else{ // 홀수일 때
                number = (number - 1) / 2
                count += 1 
            }
        }
    }
    return count
}