/*
 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

  字符          数值
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

  通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

  I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
  C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
  给定一个罗马数字，将其转换成整数。

  
  示例 1:
    输入: s = "III"
    输出: 3

  示例 2:
    输入: s = "IV"
    输出: 4

  示例 3:
    输入: s = "IX"
    输出: 9

  示例 4:
    输入: s = "LVIII"
    输出: 58
    解释: L = 50, V= 5, III = 3.

  示例 5:
    输入: s = "MCMXCIV"
    输出: 1994
    解释: M = 1000, CM = 900, XC = 90, IV = 4.
*/

type romanObjInfo = {
    [key: string]: number;
}

const romanObj: romanObjInfo = {
    "Z": 0,
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

// // 罗马数字转整数
// function romanToInt(s: string): number {
//     const romanArr = s.split('');
//     let result: number = 0;
//     romanArr.reduce((preValue: string, value: string): string => {
//         if(romanObj[preValue] >= romanObj[value] || preValue === 'Z'){
//             result += romanObj[value];
//         } else {
//             result = result + romanObj[value] - (romanObj[preValue] * 2);
//         }
//         return value;
//     }, 'Z');

//     return result;
// };

// // 输出结果
// const result = romanToInt('MCMXCIV');
// console.log(result);



type intObjInfo = {
    [key: string]: string;
}

const intObj: intObjInfo = {
    "1": "I",
    "4": "IV",
    "5": "V",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M",
}

const intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

// 整数转罗马数字
const intToRoman = (num: number): string => {
    let romanStr: string = '';
    let oddEven = 0;    // 当前奇偶
    function disassembleNum(num: number){
        let remainder = -Infinity;  // 余数
        if(intObj[String(num)]) {
            if(num !== 0) romanStr += intObj[String(num)]
            return;
        }
        while (true) {
            remainder = Math.floor(num / intArr[oddEven]);
            if(remainder >= 1) break;
            oddEven++;
        }
        romanStr += intObj[String(intArr[oddEven])]
        disassembleNum(num - intArr[oddEven]);
    }
    disassembleNum(num);
    return romanStr;
};

// 输出结果
// const result = intToRoman(1449);
// console.log(result);