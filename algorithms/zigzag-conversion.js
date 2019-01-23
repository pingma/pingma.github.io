/*
    https://leetcode.com/problems/zigzag-conversion/

    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
        P   A   H   N
        A P L S I I G
        Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:
        string convert(string s, int numRows);
    
    Example 1:
        Input: s = "PAYPALISHIRING", numRows = 3
        Output: "PAHNAPLSIIGYIR"
    
    Example 2:
        Input: s = "PAYPALISHIRING", numRows = 4
        Output: "PINALSIGYAHRPI"
    
    Explanation:
        P     I    N
        A   L S  I G
        Y A   H R
        P     I
*/

function convert(s, numRows) {
    if (!s || s === '' || numRows <= 1)
        return s;

    const size = 2 * numRows - 2;
    let str = '';
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < s.length; j += size) {
            str += s[j];
            let temp = j + size - 2 * i;
            if (i !== 0 && i !== numRows - 1 && tmp < s.length)
                str += s[tmp];
        }
    }

    return str;
}

console.log(convert('PAYPALISHIRING', 3));
