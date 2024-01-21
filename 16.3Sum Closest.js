/*
    先將陣列進行升序排序,接著再用雙指標(two point)方法,找出能最貼近目標值的總和
*/
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){//這裡因為nums中的是字串,才用這個方式
        return a-b;
    })
    let closestNum=nums[0]+nums[1]+nums[2];//設定初始值
    for(let i=0;i<nums.length-2;i++){
        let left=i+1;//雙指標的左指標
        let right=nums.length-1;//雙指標的右指標
        while(left<right){//當兩指標位置相同,代表已經搜索完當前可搜尋的區域
            diff=nums[i]+nums[left]+nums[right];//加總每次的數值
            if(Math.abs(target-diff)<Math.abs(closestNum-target)){//比較當前加總的數值與以往的數值相比,更接近目標值就替換
                closestNum=diff;//替換數值
            }
            (diff<target)?left++:right--;//因為陣列經過排序,因此越右邊的值越大,如果當前加總出的數值比目標值低,將左指標往右移來增大數值,反之移動右指標減小數值
        }
    }
    return closestNum;
};
