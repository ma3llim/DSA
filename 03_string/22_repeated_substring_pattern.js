const repeatedSubstringPatternBruteForce = (s) => {
    const n = s.length;
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i !== 0) continue;

        const sub = s.slice(0, i);
        let build = "";
        for (let j = 0; j < n / i; j++) {
            build += sub;
        }

        if (build === s) return true;
    }
    return false;
};

const repeatedSubstringPatternBetter = (s) => {
    const n = s.length;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i !== 0) continue;

        let repeated = true;
        for (let j = 0; j < n; j++) {
            if (s[j] !== s[j % i]) {
                repeated = false;
                break;
            }
        }
        if (repeated) return true;
    }
    return false;
};

const repeatedSubstringPattern = (s) => {
    const n = s.length,
        lps = new Array(n).fill(0);
    let i = 1,
        len = 0;

    while (i < n) {
        if (s[i] === s[len]) lps[i++] = ++len;
        else if (len > 0) len = lps[len - 1];
        else i++;
    }
    const longest = lps[n - 1];
    return longest > 0 && n % (n - longest) === 0;
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
