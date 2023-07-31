// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
    const order = [...emergency].sort((a,b) => b-a)
    return emergency.map(x =>order.indexOf(x)+1)
}

// slice를 사용하는 이유는 sort 메서드는 원본을 변형하기 때문에(깊은 복사) 얕은 복사를 해주는 slice()를 넣는 것인데 [...emergency]로 입력시 원본이 유지 가능하다. 따라서 두가지 방법이 있다.
// 그 후 map을 돌려서 indexOf 메서드를 사용하여 해당 항목을 찾는다.