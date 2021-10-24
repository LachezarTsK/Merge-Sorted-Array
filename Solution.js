
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    const temp = [...nums1];

    let pointerOne = 0;
    let pointerTwo = 0;
    let indexMergedArrays = 0;

    while (pointerOne < m && pointerTwo < n) {
        if (temp[pointerOne] < nums2[pointerTwo]) {
            nums1[indexMergedArrays++] = temp[pointerOne++];
        } else {
            nums1[indexMergedArrays++] = nums2[pointerTwo++];
        }
    }

    while (pointerOne < m) {
        nums1[indexMergedArrays++] = temp[pointerOne++];
    }

    while (pointerTwo < n) {
        nums1[indexMergedArrays++] = nums2[pointerTwo++];
    }
};
