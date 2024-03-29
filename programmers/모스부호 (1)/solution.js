// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120838

function solution(letter) {
     const morse = { 
        '.-':'a',
        '-...':'b',
        '-.-.':'c',
        '-..':'d',
        '.':'e',
        '..-.':'f',
        '--.':'g',
        '....':'h',
        '..':'i',
        '.---':'j',
        '-.-':'k',
        '.-..':'l',
        '--':'m',
        '-.':'n',
        '---':'o',
        '.--.':'p',
        '--.-':'q',
        '.-.':'r',
        '...':'s',
        '-':'t',
        '..-':'u',
        '...-':'v',
        '.--':'w',
        '-..-':'x',
        '-.--':'y',
        '--..':'z'
    }
    
    return letter.split(' ').map(a => morse[a]).join('')
}
// 제한사항에서 언급 된 공백을 제거 후 result에 맞게 따옴표 추가.
// reduce((prev, curr) => prev + morse[curr], '') 로 map 대신 reduce 로 풀이 가능