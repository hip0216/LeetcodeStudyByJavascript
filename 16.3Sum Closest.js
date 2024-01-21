var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){
        return a-b;
    })
    let left=0;
    let right=nums.length-1;
    let closestNum=nums[0]+nums[1]+nums[2];
    let diff=closestNum;
    for(let i=0;i<nums.length-2;i++){
        left=i+1;
        right=nums.length-1;
        while(left<right){
            diff=nums[i]+nums[left]+nums[right];
            if(Math.abs(target-diff)<Math.abs(closestNum-target)){
                closestNum=diff;
            }
            (diff<target)?left++:right--;
        }
    }
    return closestNum;
};
