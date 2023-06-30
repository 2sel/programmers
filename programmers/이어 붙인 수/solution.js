// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
     evenNum = '';
    oddNum = '';

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenNum += num_list[i];
        } else {
            oddNum += num_list[i];
        }
    }

    return parseInt(evenNum) + parseInt(oddNum);
}