
    
setInterval(() => { 
      const clock = document.querySelector(".clock");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
//   let day = date.getDay();
    let am_pm;
    
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
        
    }
        
    if (hours > 12) {
        hours = hours - 12;

    if(hours >= 12) {
        am_pm = "PM";
        }
    if(hours < 12) {
        am_pm = "AM";
        }
        
        clock.innerHTML = `${hours}:${minutes}:${seconds} ${am_pm}`;
}; 1000);
