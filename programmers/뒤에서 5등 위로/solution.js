// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181852

function solution(num_list) {
    return num_list.sort((a,b)=>a-b).slice(5)
}

//sort를 사용하여 오름차순, slice로 5개 수를 자르기