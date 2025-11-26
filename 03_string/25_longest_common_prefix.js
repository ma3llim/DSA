// Brute Force Approach (Character By Character)
const longestCommonPrefixBruteForce = (str) => {
    let prefix = "";
    for (let i = 0; i < str[0].length; i++) {
        let ch = str[0][i];

        for (let j = 1; j < str.length; j++) {
            if (i >= str[j].length || str[j][i] !== ch) return prefix;
        }
        prefix += ch;
    }
    return "";
};

// Better (Sort + Compare First and Last)
const longestCommonPrefixBetter = (str) => {
    str.sort();

    let result = "",
        first = str[0],
        last = str[str.length - 1];

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) result += first[i];
        else break;
    }
    return result;
};

const longestCommonPrefix = (str) => {
    let prefix = str[0];

    for (let i = 1; i < str.length; i++) {
        while (!str[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
