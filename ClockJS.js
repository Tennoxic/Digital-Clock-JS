  const dateAndTimeText = document.getElementById('text')
  const secondsText = document.getElementById('secondsHolder')
  const dateText = document.getElementById("dateHolder");
  const monthText = document.getElementById("monthHolder");


window.onload = dateAndTime();

function dateAndTime(){
    const currentTime = new Date();
    dateAndTimeText.innerHTML = `${currentTime.getHours()} : ${currentTime.getMinutes()}`
    secondsText.innerHTML = currentTime.getSeconds();
    dateText.innerHTML = currentTime.getFullYear();
    
    const month = currentTime.getMonth();
    const monthString = currentTime.toLocaleString('default', { month: 'long' });


    monthText.innerHTML= `${month} - ${monthString}`;
}

setInterval (dateAndTime,1000);
