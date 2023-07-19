// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
    
    return [...str1].map((a, i) => a+str2[i]).join("")
}

// 문자열을 map돌려서 객체를 재구성