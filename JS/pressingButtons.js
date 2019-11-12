/*
Given a string of digits, return all of the possible non-empty letter combinations that the number could represent. The mapping of digits to letters is the same as you would find on a telephone's buttons, as in the example below:


The resulting array should be sorted lexicographically.

Example

For buttons = "42", the output should be
pressingButtons(buttons) = ["ga", "gb", "gc", "ha", "hb", "hc", "ia", "ib", "ic"].

Input/Output

[execution time limit] 4 seconds (js)

[input] string buttons

A string composed of digits ranging from '2' to '9'.

Guaranteed constraints:
0 ≤ buttons.length ≤ 7.

[output] array.string
*/

function pressingButtons(buttons) {
    if (buttons === "") return [];
    const btns = [
        [""],
        [""],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"]
    ];

    var result = btns[parseInt(buttons.charAt(0))];
    for (let i = 1; i < buttons.length; i += 1) {
        var tempArr = []
        for (let k = 0; k < result.length; k += 1) {
            for (let j = 0; j < btns[parseInt(buttons.charAt(i))].length; j += 1) {
                tempArr.push(result[k] + btns[parseInt(buttons.charAt(i))][j]);
            }
        }
        result = tempArr.slice();
    }

    return result;

}

console.log(pressingButtons("42"));
console.log(pressingButtons("2"));
console.log(pressingButtons(""));
console.log(pressingButtons("234"));
console.log(pressingButtons("8888"));
