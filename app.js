setInterval(() => {
  const clock = document.querySelector(".clock");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();
  let currentDay;
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
  }
  if (hours >= 12) {
    am_pm = "PM";
  }
  if (hours < 12) {
    am_pm = "AM";
  }
  switch (date.getDay()) {
    case 0:
      currentDay = "Sunday";
      break;
    case 1:
      currentDay = "Monday";
      break;
    case 2:
      currentDay = "Tuesday";
      break;
    case 3:
      currentDay = "Wednesday";
      break;
    case 4:
      currentDay = "Thursday";
      break;
    case 5:
      currentDay = "Friday";
      break;
    case 6:
      currentDay = "Saturday";
      break;

    default:
      break;
  }

  clock.innerHTML = `${hours}:${minutes}:${seconds} ${am_pm}`;
  document.querySelector(".day").innerHTML = currentDay;
}, 1000);
