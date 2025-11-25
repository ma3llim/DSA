const strStrBruteForce = (haystack, needle) => {
    let n = haystack.length,
        m = needle.length;

    for (let i = 0; i < n - m; i++) {
        let j = 0;
        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === m) return i;
    }

    return -1;
};

const strStrBetter = (haystack, needle) => {
    let n = haystack.length,
        m = needle.length,
        i = 0,
        j = 0;
    while (i < n) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j === m) return i - j;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    return -1;
};

const strStr = (haystack, needle) => {
    if (needle === "") return 0;

    const lps = new Array(needle.length).fill(0);
    let prev = 0,
        i = 1;

    while (i < needle.length) {
        if (needle[i] === needle[prev]) {
            lps[i] = prev + 1;
            prev++;
            i++;
        } else {
            if (prev === 0) i++;
            else prev = lps[prev - 1];
        }
    }

    let h = 0,
        n = 0;

    while (h < haystack.length) {
        if (haystack[h] === needle[n]) {
            h++;
            n++;

            if (n === needle.length) return h - n;
        } else {
            if (n === 0) h++;
            else n = lps[n - 1];
        }
    }
    return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
