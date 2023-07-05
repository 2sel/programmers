// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181844

function solution(arr, delete_list) {
    return arr.filter(a => !delete_list.includes(a))
}

// 처음에는 reduce를 떠올렸지만, filter로 거르고 includes로 특정 요소만 빼냄. set으로도 푼 사례 있음.