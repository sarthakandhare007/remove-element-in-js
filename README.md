# remove-element-in-js

This is **LeetCode – Remove Element**.
You need an **in-place** solution and return **k = count of elements ≠ val**.

I’ll explain **clearly**, then give **JavaScript code**, and finally **dry run**.

---

## ✅ Key Idea (Two Pointer / Overwrite Method)

* Use one pointer `k`
* Traverse the array
* If `nums[i] !== val`, copy it to `nums[k]` and increment `k`
* At the end, `k` is the answer

⚠️ Order **may change**, but this method keeps relative order (which is fine).

---

## ✅ JavaScript Solution (Accepted)

```javascript
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
```

---

## 🧪 Example 1 Dry Run

**Input**

```
nums = [3,2,2,3]
val = 3
```

| i | nums[i] | nums[i] !== 3 | Action    | nums      | k |
| - | ------- | ------------- | --------- | --------- | - |
| 0 | 3       | ❌             | skip      | [3,2,2,3] | 0 |
| 1 | 2       | ✅             | nums[0]=2 | [2,2,2,3] | 1 |
| 2 | 2       | ✅             | nums[1]=2 | [2,2,2,3] | 2 |
| 3 | 3       | ❌             | skip      | [2,2,2,3] | 2 |

✅ **Return k = 2**

---

## 🧪 Example 2 Dry Run

**Input**

```
nums = [0,1,2,2,3,0,4,2]
val = 2
```

Final array (first `k` elements matter):

```
[0,1,3,0,4,_,_,_]
```

✅ **Return k = 5**

---

## ⏱ Time & Space Complexity

| Metric | Value               |
| ------ | ------------------- |
| Time   | **O(n)**            |
| Space  | **O(1)** (in-place) |

---

## 🧠 Interview Tip (What to say)

> “I use a two-pointer approach. One pointer iterates through the array, and another tracks the position of valid elements. When the current element is not equal to `val`, I overwrite it at index `k` and increment `k`. Finally, `k` represents the number of valid elements.”

---
