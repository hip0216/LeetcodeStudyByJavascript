/*
    算式如註解
*/
var totalMoney = function(n) {
    let week=Math.floor(n/7);//有幾周
    let remainingDay=n%7;//剩餘的天數
    let day=[1,3,6,10,15,21];//到天數的時候應該要加的數
    ans=week*28+7*((week>0)?(((week-1)*week)/2):0);//周*一周總和+每周累加的數
    ans+=(remainingDay>0)?day[remainingDay-1]+remainingDay*week:0;//剩餘天數+剩餘天數那周累加的數
    return ans;
};