/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length != t.length) {
        return false
    }

    const hm = new Map()

    for (let i = 0; i < s.length; i++) {
        hm.set(s[i], hm.has(s[i]) ? hm.get(s[i]) + 1 : 1)
    }

    for (let j = 0; j < t.length; j++) {
        console.log(hm)
        if (!hm.has(t[j]) || hm.get(t[j] <= 0)) return false
        else {
            hm.get(t[j]) == 1 ? hm.delete(t[j]) : hm.set(t[j], hm.get(t[j]) - 1)
        }
    }

    return true
}

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const isAnagramTwo = (s, t) => {
    if (s.length != t.length) return false
    const hm1 = new Map(),
        hm2 = new Map()

    for (let i = 0; i < s.length; i++) {
        hm1.set(s[i], hm1.has(s[i]) ? hm1.get(s[i]) + 1 : 1)
        hm2.set(t[i], hm2.has(t[i]) ? hm2.get(s[i]) + 1 : 1)
    }
    console.log(hm1.entries())
    console.log(hm2.keys)
    return hm1.entries() == hm2.entries()
}
console.log(isAnagramTwo('aac', 'aac'))
