// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181897

function solution(n, slicer, num_list) {
   let [a, b, c] = [...slicer];

    switch(n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
    }
}

// switch문은 생각하지 못했는데, if문보다 편한 것같아서 다시 작성했다!