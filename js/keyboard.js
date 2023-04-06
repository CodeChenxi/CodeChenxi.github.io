/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 林志强
 * @Date: 2023-04-06 14:48:04
 * @LastEditors: 林志强
 * @LastEditTime: 2023-04-06 14:48:46
 */
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}