// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
    //    return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c); 로 한줄 풀이 가능
    let answer = 0;

    for(let i = 0 ; i < num_list.length ; i++) {
        let num = num_list[i];
        while(num != 1) {
            num = num % 2 == 0 ? num /2 : (num - 1) / 2
            answer++;
        }
    }
    return answer;
}
// reduce로 한줄로 푼 것들이 있음
// 동적계산법으로 푼다는건 알았으나, 잘 안풀렸는데 for문 안에 while이 있어야했다...
