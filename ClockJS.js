  var dateAndTimeText=document.getElementById('text')
  var secondsText=document.getElementById('secondsHolder')
  var dateText=document.getElementById("dateHolder");
  var monthText=document.getElementById("monthHolder");


window.onload=dateAndTime();

function dateAndTime()
{
    var currentTime=new Date();

    dateAndTimeText.innerHTML=currentTime.getHours()+":"+currentTime.getMinutes();

    secondsText.innerHTML=currentTime.getSeconds();

    dateText.innerHTML=currentTime.getFullYear();
    
    var month=currentTime.getMonth();
    var monthString="";

    switch(month)
    {
        case 1:
            monthString="January";
        break;
        case 2:
            monthString="February";
        break;
        case 3:
            monthString="March";
        break;
        case 4:
            monthString="Aprill";
        break;
        case 5:
            monthString="May";
        break;
        case 6:
            monthString="June";
        break;
        case 7:
            monthString="July";
        break;
        case 8:
            monthString="August";
        break;
        case 9:
            monthString="September";
        break;
        case 10:
            monthString="October";
        break;
        case 11:
            monthString="November";
        break;
        case 12:
            monthString="December";
        break;
    }

    monthString=" - "+monthString;

    monthText.innerHTML=month+monthString;

}
function change()
{

}
setInterval (dateAndTime,1000);