/*
  给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
  这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

  示例1:
    输入: pattern = "abba", s = "dog cat cat dog"
    输出: true

  示例 2:
    输入:pattern = "abba", s = "dog cat cat fish"
    输出: false

  示例 3:
    输入: pattern = "aaaa", s = "dog cat cat dog"
    输出: false
*/
type mapInfo = {
    [key: string]: string;
}

function wordPattern(pattern: string, s: string): boolean {
    const patternArr = pattern.split('');
    const sArr = s.split(' ');
    if(patternArr.length !== sArr.length) return false;

    const patternMap: mapInfo = {};
    const sMap: mapInfo = {};
    for(let i = 0; i < patternArr.length; i++) {
        if(!patternMap.hasOwnProperty(patternArr[i]) && !sMap.hasOwnProperty(sArr[i])) patternMap[patternArr[i]] = sArr[i];
        if(!sMap.hasOwnProperty(sArr[i])) sMap[sArr[i]] = patternArr[i];
        if(patternMap[patternArr[i]] !== sArr[i]) return false;
    }
    return true;
};

// const result = wordPattern( "abba", "cat cat cat cat");
// console.log(result);