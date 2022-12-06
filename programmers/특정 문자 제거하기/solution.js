// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
    return my_string.replaceAll(letter,"")
}
// array.splice(index, 없앨개수, 붙여넣을 글자)