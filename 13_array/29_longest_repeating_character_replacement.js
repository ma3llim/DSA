const characterReplacementBruteForce = (s, k) => {
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let freq = new Array(26).fill(0);

            for (let m = i; m <= j; m++) {
                freq[s[m].charCodeAt(0) - 65]++;
            }

            let windowLen = j - i + 1;
            let maxFreq = Math.max(...freq);

            if (windowLen - maxFreq <= k) {
                maxLen = Math.max(maxLen, windowLen);
            }
        }
    }

    return maxLen;
};

const characterReplacementBetter = (s, k) => {
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let freq = new Array(26).fill(0),
            maxFreq = 0;

        for (let j = i; j < s.length; j++) {
            let idx = s[j].charCodeAt(0) - 65;
            freq[idx]++;
            maxFreq = Math.max(maxFreq, freq[idx]);

            let windowLen = j - i + 1;
            if (windowLen - maxFreq <= k) {
                maxLen = Math.max(maxLen, windowLen);
            }
        }
    }

    return maxLen;
};

const characterReplacement = (s, k) => {
    let freq = new Array(26).fill(0),
        left = 0,
        maxLen = 0,
        maxFreq = 0;

    for (let right = 0; right < s.length; right++) {
        let idx = s[right].charCodeAt(0) - 65;
        freq[idx]++;
        maxFreq = Math.max(maxFreq, freq[idx]);

        let windowSize = right - left + 1;

        if (windowSize - maxFreq > k) {
            freq[s[left].charCodeAt(0) - 65]--;
            left++;
        } else {
            maxLen = Math.max(maxLen, windowSize);
        }
    }
    return maxLen;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
