/*
    將字串中的字每次以currrentRow的索引存入rows陣列中,再藉由控制turnUp決定甚麼時候要用+或-,最後再將陣列中儲存好的字串依序組合
*/
var convert = function(s, numRows) {
    let rows=[];//儲存分好的字串
    let turnUp=false;//決定當前是+或-
    let currrentRow=0;//初始的索引
    let ans="";//輸出的字串
    for(let i=0;i<s.length;i++){
        rows[currrentRow]=(rows[currrentRow])?rows[currrentRow]+s[i]:s[i];//將每次分離出的字串存入相對的索引中
        if(currrentRow==0 || numRows-1==currrentRow){//在到索引0跟索引到numRows時進行轉向
            turnUp=!turnUp;
        }
        currrentRow+=(turnUp)?1:-1;//增減每次的索引
    }
    for(let i=0;i<rows.length;i++){
        ans+=rows[i];
    }
    return ans;
};