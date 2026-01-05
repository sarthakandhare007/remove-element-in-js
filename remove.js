var removeElement = function(nums, val) {
    let k = 0;  // pointer for valid elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
