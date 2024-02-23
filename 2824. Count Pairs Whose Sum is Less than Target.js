var countPairs = function(nums, target) {
    nums.sort(function(a,b){return a-b;})
    let left=0;
    let right=nums.length-1;
    let ans=0;
    while(left<right){
        if(nums[left]+nums[right]<target){
            ans+=right-left;
            left++;
        }else{
            right--;
        }
    }
    return ans;
};