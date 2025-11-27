const myAtoi = (s) => {
    let i = 0,
        n = s.length,
        sign = 1,
        result = 0;

    while (i < n && s[i] === " ") i++;

    if (s[i] === "+" || s[i] === "-") {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    while (i < n && s[i] >= "0" && s[i] <= "9") {
        result = result * 10 + (s[i] - "0");
        const INT_MIN = -(2 ** 32);
        const INT_MAX = 2 ** 32 - 1;

        if (sign * result <= INT_MIN) return INT_MIN;
        if (sign * result >= INT_MAX) return INT_MAX;
        i++;
    }

    return sign * result;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
