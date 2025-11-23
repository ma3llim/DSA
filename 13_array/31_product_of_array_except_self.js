const productExceptSelfBruteForce = (nums) => {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) product *= nums[j];
        }

        result.push(product || 0);
    }
    return result;
};

const productExceptSelfBetter = (nums) => {
    const n = nums.length,
        prefix = new Array(n),
        suffix = new Array(n),
        result = new Array(n);
    prefix[0] = 1;
    suffix[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * suffix[i];
    }
    return result;
};

const productExceptSelf = (nums) => {
    let n = nums.length,
        result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 1; i < n; i++) {
        prefix *= nums[i - 1];
        result[i] *= prefix;
    }
    let suffix = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix *= nums[i + 1];
        result[i] *= suffix;
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
