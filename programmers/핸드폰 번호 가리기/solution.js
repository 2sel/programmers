// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    // slice() 처음부터 끝까지 새로운 객체로 반환. 원본 배열은 바뀌지 않음!
    // 다만 음수를 사용할 경우 뒤에서 불러온다...!!
    const l = phone_number.length - 4;
    return "*".repeat(l) + phone_number.slice(-4);
}