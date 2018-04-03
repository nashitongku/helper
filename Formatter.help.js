/**
 * 
 * 金钱格式化 整数不带小数点
 * @param  {[type]} value [数值]
 * @return {[type]}       [返回 如：-￥999, $99 ]
 */
money(s) {  
  let prefix = Number(s) >= 0 ? '￥' : '-￥';
  s = Math.abs(s);
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";  
  let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
  let t = "";  
  for (let i = 0; i < l.length; i++) {  
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
  }  
  t = parseFloat(r) ? (t.split("").reverse().join("") + "." + r) : t.split("").reverse().join("")
  return prefix + t;
  
},



export {
    money
}