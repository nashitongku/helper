/**
 * 
 * 金钱格式化 整数不带小数点
 * @param  {[type]} value [数值]
 * @return {[type]}       [返回 如：-￥999, $99 ]
 */
money(value) {  
    value = parseFloat((value + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";  
    let l = value.split(".")[0].split("").reverse(), 
        r = value.split(".")[1];  
    let t = "";
    for (let i = 0; i < l.length; i++) {  
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
    }  
    t = parseFloat(r) ? (t.split("").reverse().join("") + "." + r) : t.split("").reverse().join("")
    let splitArr = t.split('-');
    if(splitArr.length === 1)
      return `￥${t}`;  
    else
      return `- ￥${splitArr[1]}`
}



export {
    money
}