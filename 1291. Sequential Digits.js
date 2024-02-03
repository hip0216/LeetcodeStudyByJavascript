/*
    先將所有可能出現的組合列出來123456789,接下來依序移動left與right擷取字串,並判斷是否符合,最後sort答案讓結果符合題意
*/
var sequentialDigits = function(low, high) {
    let allNumStr='123456789';//列出所有可能
    let ans=[];
    for(let left=0;left<9;left++){
        for(let right=left+1;right<9;right++){
            num=allNumStr.slice(left,right+1);//擷取出left與right的字
            if(num>high) break;//比high大代表也許現在取得位數過多,也許替換首字還存在有可能的答案,因此break才加在這層而不是上一層
            if(num>=low) ans.push(num);//有前一步過濾,因此答案必定是小於high,所以只要>=low就可以
        }   
    }
    return ans.sort((a,b)=>(a-b));//最後要進行排序確保順序正確
};