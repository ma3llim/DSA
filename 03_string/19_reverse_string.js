const reverseStringBruteForce = (s) => {
    let result = [];

    for (let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);
    }

    return result;
};

const reverseStringBetter = (s) => {
    let left = 0,
        right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        right--;
        left++;
    }

    return s;
};

// Two Pointer
const reverseString = (s) => {
    let left = 0,
        right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;
    }

    return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
