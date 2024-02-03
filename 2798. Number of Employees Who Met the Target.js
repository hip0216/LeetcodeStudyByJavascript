/*
    確認hours中符合target的項目即可
*/
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let ans=0;
    for(let i=0;i<hours.length;i++){
        if(hours[i]>=target){
            ans++;//符合則將人數+1
        }
    }
    return ans;
};