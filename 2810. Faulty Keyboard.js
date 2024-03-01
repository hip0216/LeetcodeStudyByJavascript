/*
    用ans存取路過的字串,當碰到i時將當前的字串反轉,接著再把後續的字接上去
*/
var finalString = function(s) {
    let ans="";
    for(let i=0;i<s.length;i++){
        if(s[i]=="i"){
            ans=ans.split("").reverse().join("");//先將字串轉成陣列反轉後再組回字串
        }else{
            ans+=s[i];
        }
    }
    return ans;
};