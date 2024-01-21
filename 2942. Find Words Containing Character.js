/*
    每次確認是否words的item中有x這個字,存在則存入陣列中
*/
var findWordsContaining = function(words, x) {
    let ans=[];
    for(let i=0;i<words.length;i++){
        if(words[i].indexOf(x)!=-1){//不等於-1代表有搜到,要存入陣列中
            ans.push(i);//存入陣列中
        }
    }
    return ans;
};