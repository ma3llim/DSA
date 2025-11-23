const minSubArrayLenBruteForce = (target, nums) => {
    let minLen = Infinity,
        n = nums.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            if (sum >= target) {
                minLen = Math.min(Infinity, j - i + 1);
                break;
            }
        }
    }

    return minLen === Infinity ? 0 : minLen;
};

const minSubArrayLenBetter = (target, nums) => {
    let n = nums.length,
        prefix = new Array(n + 1).fill(0);

    // Build prefixs
    for (let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] + nums[i - 1];
    }

    let minLen = Infinity;

    for (let i = 0; i <= n; i++) {
        let toFind = prefix[i] + target,
            left = i + 1,
            right = n;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (prefix[mid] >= toFind) right = mid - 1;
            else left = mid + 1;
        }

        if (left <= n) minLen = Math.min(minLen, left - i);
    }
    return minLen === Infinity ? 0 : minLen;
};

const minSubArrayLen = (target, nums) => {
    let start = 0,
        sum = 0,
        minLen = Infinity;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (sum >= target) {
            minLen = Math.min(minLen, end + start - 1);
            sum -= nums[end];
            start++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
