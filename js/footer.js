/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 林志强
 * @Date: 2023-04-02 13:28:42
 * @LastEditors: 林志强
 * @LastEditTime: 2023-04-05 12:11:41
 */
// 动态心跳
$(document).ready(function(e){
    $('.copyright').html('<font style=color:black>©2023-2024</font> <i class="fa-fw fas fa-heartbeat fa-beat" style="color: #f92672;"></i> <font style=color:black>By CodeChenxi</font>');
})

$(document).ready(function(e){
    show_date_time();
})

//本站运行时间
function show_date_time(){
$('.framework-info').html('<font style=color:black>本站居然运行了</font><span id="span_dt_dt" style="color: #fff;"></span>');
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("3/30/2023 0:0:0");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML='<font style=color:#409EFF>'+daysold+'</font> <font style=color:black>天</font> <font style=color:#f391a9>'+hrsold+'</font> <font style=color:black>时</font> <font style=color:#fdb933>'+minsold+'</font> <font style=color:black>分</font> <font style=color:#a3cf62>'+seconds+'</font> <font style=color:black>秒</font>';
}

