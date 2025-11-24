// With For loops and unique variable
const fristUniqueCharBruteForce = (s) => {
    for (let i = 0; i < s.length; i++) {
        let unique = true;
        for (let j = 0; j < s.length; j++) {
            if (i !== j && s[i] === s[j]) {
                unique = false;
                break;
            }
        }

        if (unique) return i;
    }

    return -1;
};

// With Hashmap
const fristUniqueCharBetter = (s) => {
    let freq = new Map();

    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    }

    for (let j = 0; j < s.length; j++) {
        if (freq.get(s[j]) === 1) return j;
    }

    return -1;
};

// With Hashmap and Queue
const fristUniqueChar = (s) => {
    let freq = new Map(),
        queue = [];

    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
        queue.push(i);

        while (queue.length && freq.get(s[queue[0]]) > 1) {
            queue.shift();
        }
    }
    return queue.length ? queue[0] : -1;
};

console.log(fristUniqueChar("leetcode"));
console.log(fristUniqueChar("loveleetcode"));
console.log(fristUniqueChar("aabb"));
