function solution(my_string, overwrite_string, s) {
    
    let S = my_string.slice(0, s);
    let E = my_string.slice(s + overwrite_string.length);
    
    return S + overwrite_string + E
}