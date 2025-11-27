const convert = (s, numRows) => {
    if (numRows === 1) return s;
    let result = "";
    const cycle = 2 * numRows - 2;

    for (let row = 0; row < numRows; row++) {
        for (let i = row; i < s.length; i += cycle) {
            result += s[i];
            const dig = i + cycle - 2 * row;

            if (row > 0 && row < numRows - 1 && dig < s.length)
                result += s[dig];
        }
    }
    return result;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));