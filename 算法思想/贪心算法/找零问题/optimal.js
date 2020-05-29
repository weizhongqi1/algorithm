
/**
 * 找零问题最优解
 * @param {*} total 总额  41 
 * @param {*} denos 面额 [25, 20, 5, 1] 从大到小排列
 */

function optimal(total, denos) {
    var temp = []; //返回的结果
    function _optimal(total, denos){
        //如果denos长度为零， 无解
        if(!total){
            return 0;
        }
        var maxNum = denos[0];
        if (denos.length === 0) return false;
        //第一张是否等于total， 如果相等，最优解
        if (maxNum === total) {
            total -= maxNum;
            return temp.push(maxNum);
        }
        //第一个比total大， 看剩下的（分治）
        if (maxNum > total) {
            _optimal(total, denos.splice(1));
        }
        //第一个比total小，两种情况
        if(maxNum < total) {
        //1.找出这个面额的最优解
        var temp1 = temp;
        var total1 = total - maxNum;
        temp.push(maxNum)
        var s1 = _optimal(total1, denos);
        console.log(s1);
        //2.不找出这个面额的最优解
        // var s2 = _optimal(total, denos);
        // console.log(s2);
        // 选出最优解
        }
        
    }
    _optimal(total, denos);
    return temp;
}

 var rel = optimal(41, [25, 20, 5, 1]);
 console.log(rel);