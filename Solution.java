
public class Solution {

    public void merge(int[] nums1, int m, int[] nums2, int n) {

        int[] temp = nums1.clone();
        int pointerOne = 0;
        int pointerTwo = 0;
        int indexMergedArrays = 0;

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
    }
}
