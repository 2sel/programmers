// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
    if (500000<=price){
        return Math.floor(price*0.8)
    } else if(300000<=price){
        return Math.floor(price*0.9)
    } else if(100000<=price){
        return Math.floor(price*0.95)
    }else return price
}