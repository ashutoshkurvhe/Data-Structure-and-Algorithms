function mergeSort(nums1, m, nums2, n) {
  //nums1 k 3 ele imp mtlb nums1 k liye loop m time chalega
  //nums2 k sare ele imp nums2 k liye loop n time chalega
  //nums1 me jitne ele h wo to rhenge but nums2 me only unique eles rhenge
  //end me nums1 k andr hi nums2 ki unique values ko merge krenge
  let i = m - 1; // nums1 ke last valid element pe pointer
  let j = n - 1; // nums2 ke last element pe pointer
  let k = m + n - 1; // nums1 ke last index pe pointer

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
