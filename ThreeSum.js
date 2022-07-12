/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

/**
 *
 * @param {number[]} num
 */
const threeSum = (num) => {
    if (num.length < 3) return []

    const map = new Map()
    num.map((x, i) => {
        map.set(x, i)
    })

    let result = []

    for (let i = 0; i < num.length - 1; i++) {
        let temp = num[i]

        for (let j = i + 1; j < num.length; j++) {
            let find = temp < 0 ? find - temp : temp - find
            if (map.has(find)) {
                console.log(`temp ${temp} num[j] ${num[j]} find ${find}`)
                const add = [temp, num[j], map.get(find)]
                result.push(add)
            }
        }
    }

    return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
