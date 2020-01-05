const days = document.querySelector('.clock-days')
const hours = document.querySelector('.clock-hours')
const minutes = document.querySelector('.clock-minutes')
const sec = document.querySelector('.clock-seconds')

const input = document.querySelector('.inputDate');
input.addEventListener('input', startTimer);

function showTime(){
    
   let fut = new Date(input.valueAsDate);
   let now = Date.now();
   let daysData = ((fut - now)/24/3600/1000);
   let hoursData = (daysData- Math.floor(daysData))*24;
   let minutesData = (hoursData - Math.floor(hoursData))*60;
   let secData = (minutesData - Math.floor(minutesData))*60;

   days.innerHTML = Math.floor(daysData);
   hours.innerHTML = Math.floor(hoursData);
   minutes.innerHTML = Math.floor(minutesData);
   sec.innerHTML = Math.floor(secData);

}

function startTimer(){
    setInterval(showTime, 1000)
}
