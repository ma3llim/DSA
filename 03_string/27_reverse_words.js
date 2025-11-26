const reverseWordsBruteForce = (s) => {
    const words = s.split(" ").filter((s) => s.length > 0);
    return words.reverse().join(" ");
};
const reverseWordsBetter = (s) => {
    const words = s.trim(" ").split(/\s+/);
    return words.reverse().join(" ");
};

const reverseWords = (s) => {
    let i = s.length - 1,
        result = [];

    while (i >= 0) {
        while (i >= 0 && s[i] === " ") i--;
        if (i < 0) break;

        let j = i;
        while (j >= 0 && s[j] !== " ") j--;

        result.push(s.slice(j + 1, i + 1));
        i = j - 1;
    }
    return result.join(" ")
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
