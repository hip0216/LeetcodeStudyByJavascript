/*
    照題意從1找到n分成可以與不行整除的數,在相減即是答案
*/
var differenceOfSums = function(n, m) {
    let notDivisible=0;
    let divisible=0;
    for(let i=1;i<=n;i++){
        (i%m==0)?(divisible+=i):(notDivisible+=i);//判斷是否正除,可以的話存入divisible不可以存入notDivisible
    }
    return notDivisible-divisible;//相減即是答案
};