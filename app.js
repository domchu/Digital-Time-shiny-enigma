setInterval(() => {
  const clock = document.querySelector(".clock");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();
  let currentDay;
  let am_pm = "AM";
  let month = date.getMonth();
  let year = date.getFullYear();

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
  if (hours > 12) {
    am_pm = "PM";
  }
  // am_pm = hours > 12 ? "PM" : "AM"
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
  // the months
  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }

  clock.innerHTML = `${hours}:${minutes}:${seconds} ${am_pm}`;
  document.querySelector(".day").innerHTML = currentDay;
  document.querySelector(".month").innerHTML = `${month}`;
  document.querySelector(".year").innerHTML = `${year}`;
}, 1000);
