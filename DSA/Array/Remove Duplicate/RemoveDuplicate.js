function removeEle(nums) {
   if (nums.length === 0) return 0;

   let k = 1; // pointer for unique elements
   for (let i = 1; i < nums.length; i++) {
     if (nums[i] !== nums[i - 1]) {
       nums[k] = nums[i]; // overwrite duplicate
       k++;
     }
   }
       return k;
}

removeEle([1,1,2]);