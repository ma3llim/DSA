const lengthOfLastWordBruteForce = (s) => {
    const parts = s.split(" ");
    for (let i = parts.length - 1; i >= 0; i--) {
        if (parts[i].length > 0) return parts[i].length;
    }
};

const lengthOfLastWordBetter = (s) => {
    s = s.trim();
    const parts = s.split(" ");
    return parts[parts.length - 1].length;
};

const lengthOfLastWord = (s) => {
    let i = s.length - 1,
        count = 0;

    while (i >= 0 && s[i] === " ") i--;

    while (i >= 0 && s[i] !== " ") {
        count++;
        i--;
    }
    return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
