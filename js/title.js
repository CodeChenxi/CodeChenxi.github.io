/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 林志强
 * @Date: 2023-04-02 16:07:12
 * @LastEditors: 林志强
 * @LastEditTime: 2023-04-02 16:07:20
 */
//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀跑哪里去了~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '🐖抓到你啦～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});