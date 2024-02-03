/*
  先將原先的陣列進行排序,再找出相鄰兩數最大值即是答案
*/
var maxWidthOfVerticalArea = function(points) {
    points.sort((function(num1,num2){
        return (num1[0]>num2[0])?1:-1;//只單純用.sort()會用字串的方式進行排序,這會讓排序錯誤才這樣做
    }))
    let ans=0
    for(let i=1;i<points.length;i++){
        ans=Math.max(ans,(points[i][0]-points[i-1][0]))//找出相鄰兩數最大值
    }
    return ans;
};