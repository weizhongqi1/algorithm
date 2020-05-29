/**
 * 找零问题
 * @param {*} total  找零的数值
 * @param {*} deno 有的零钱数
 * @param {*} arr 找零的零钱数组
 */
function giveChange(total, deno, arr){
    if(!total) return ;
    var temp = [];  //deno中小于total的值
    for(var i = 0; i < deno.length; i++){
        var demo = deno[i];
        //deno中小于total的值， 找出最大值
        if(demo <= total  ){
            temp.push(demo);
        }
    }
    //temp中存储了所有小于total的值，找出最大值

    var maxNum = getMaxNum(temp);
    // console.log(maxNum);
    total = total - maxNum;
    arr.push(maxNum);
    giveChange(total, deno, arr);
    return arr;
}
/**
 * 数组中找到最大值
 * @param {*} arr 
 */
function getMaxNum(arr){
    if(!arr.length) return ;
    var max = 0;
    for(var i = 0; i < arr.length; i ++){
        num = arr[i];
        if(num > max) max = num;
    }
    return max;
}

var arr = giveChange(46, [25, 10, 5, 1], []);
console.log(arr);