/*
    每次在呼叫時紀錄這次呼叫的函示,並將其存入lastCall當中,如果再呼叫下輪函式的期間又有進行呼叫,則清除上次的呼叫,再將每次的呼叫存入args當中
*/
var debounce = function(fn, t) {
    let lastCall;//上一次呼叫的函式
    return function(...args){//注意這裡,...args代表會把曾經帶入過的數值存入args中
        clearTimeout(lastCall);//如果上次呼叫的函示還未執行的話將其清除
	    lastCall=setTimeout(fn, t,...args);//將這次呼叫的函式存入lastCall中,並且帶上args儲存每次的數值
    }
};
