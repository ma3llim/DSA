const isSubsequenceBruteForce = (s, t) => {
    let i = 0,
        j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) i++;
        j++;
    }
    return i === s.length;
};

const isSubsequence = (s, t) => {
    let i = 0;
    for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) i++;

        if (i === s.length) return true;
    }
    return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
