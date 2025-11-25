const isPalindrome = (s, start, end) => {
    while (start < end) {
        if (s[start] === s[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
};

const validPalindrome = (s) => {
    let i = 0,
        n = s.length;
    while (i < n) {
        if (s[i] === s[n - 1]) {
            i++;
            n--;
        } else {
            return isPalindrome(s, i + 1, n - 1) || isPalindrome(s, i, n - 2);
        }
    }
    return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
