/*
Given a string str and array of pairs that indicates which indices in the string can be swapped, return the lexicographically largest string that results from doing the allowed swaps. You can swap indices any number of times.

Example

For str = "abdc" and pairs = [[1, 4], [3, 4]], the output should be
swapLexOrder(str, pairs) = "dbca".

By swapping the given indices, you get the strings: "cbda", "cbad", "dbac", "dbca". The lexicographically largest string in this list is "dbca".

Input/Output

[execution time limit] 4 seconds (js)

[input] string str

A string consisting only of lowercase English letters.

Guaranteed constraints:
1 ≤ str.length ≤ 104.

[input] array.array.integer pairs

An array containing pairs of indices that can be swapped in str (1-based). This means that for each pairs[i], you can swap elements in str that have the indices pairs[i][0] and pairs[i][1].

Guaranteed constraints:
0 ≤ pairs.length ≤ 5000,
pairs[i].length = 2.

[output] string
*/

function swapLexOrder(str, pairs) {
    if (pairs.length == 0) return str;
    var n = pairs.slice();

    n.sort(function(a, b) {

        return (a[0] - b[0]);

    });

    var strArr = str.split('');

    var indexArr = [];

    indexArr[n[0][0]] = n[0][0];

    indexArr[n[0][1]] = n[0][0];

    for (let i = 1; i < n.length; i += 1) {

        if (indexArr[n[i][0]] && !indexArr[n[i][1]]) {

            indexArr[n[i][1]] = indexArr[n[i][0]];

        }

        if (indexArr[n[i][1]] && !indexArr[n[i][0]]) {

            indexArr[n[i][0]] = indexArr[n[i][1]];

        }

        if (indexArr[n[i][0]] && indexArr[n[i][1]]) {

            if (indexArr[n[i][0]] != indexArr[n[i][1]]) {

                var groupValue = indexArr[n[i][0]];

                var checkValue = indexArr[n[i][1]];

                for (let j = 0; j < indexArr.length; j += 1) {

                    if (indexArr[j] && indexArr[j] == checkValue) {

                        indexArr[j] = groupValue;

                    }

                }

            }

        }

        if (!indexArr[n[i][1]] && !indexArr[n[i][0]]) {

            indexArr[n[i][0]] = n[i][0];

            indexArr[n[i][1]] = n[i][0];

        }

    }

    for (let i = 0; i < strArr.length; i += 1) {

        if (indexArr[i + 1]) {

            for (let j = i + 1; j < strArr.length; j += 1) {

                if (indexArr[j + 1] && indexArr[i + 1] == indexArr[j + 1]) {

                    if (strArr[i] < strArr[j]) {

                        var temp = strArr[i];

                        strArr[i] = strArr[j];

                        strArr[j] = temp;

                    }

                }

            }

        }

    }

    return strArr.join('');
}

console.log(swapLexOrder("abdc", [
    [1, 4],
    [3, 4]
]));

console.log(swapLexOrder("abcdefgh", [
    [1, 4],
    [7, 8]
]));

console.log(swapLexOrder("acxrabdz", [
    [1, 3],
    [6, 8],
    [3, 8],
    [2, 7]
]));

console.log(swapLexOrder("z", []));

console.log(swapLexOrder("lvvyfrbhgiyexoirhunnuejzhesylojwbyatfkrv", [
    [13, 23],
    [13, 28],
    [15, 20],
    [24, 29],
    [6, 7],
    [3, 4],
    [21, 30],
    [2, 13],
    [12, 15],
    [19, 23],
    [10, 19],
    [13, 14],
    [6, 16],
    [17, 25],
    [6, 21],
    [17, 26],
    [5, 6],
    [12, 24]
]));