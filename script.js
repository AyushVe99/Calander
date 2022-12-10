var dt=new Date();
function RenderDate(){
dt.setDate(1);
var day=dt.getDay();
// Check what is the last date of the month
var endDate=new Date(
dt.getFullYear(),
dt.getMonth()+1,
0
).getDate();

var prevDate=new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
    ).getDate();

var today=new Date();
//var weekDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months=["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY","AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
document.getElementById("month").innerHTML=months[dt.getMonth()];
document.getElementById("year").innerHTML=dt.getFullYear();
//document.getElementById("date_str").innerHTML=dt.toDateString();

var cells="";
for(x=day;x>0;x--){
    cells+="<div class='prev_date'>"+ (prevDate - x+1) + "</div>"
}
for(i=1;i<=endDate;i++)
{
    if(i==today.getDate() && dt.getMonth()==today.getMonth() ){
        cells+="<div class='today'>" + i +"</div>"
    }
    else{
        cells+="<div>" + i +"</div>"
    }
    
}
document.getElementsByClassName("days")[0].innerHTML=cells;


}
function moveDate(para){
if(para=='prev'){
    dt.setMonth(dt.getMonth()-1);
    
}
else if(para='next'){
    dt.setMonth(dt.getMonth()+1);
}
RenderDate();
}