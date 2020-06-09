const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
/*
qureyselectors
{
.deadline h4
.giveaway(
          giveaway ends on Sunday, 24 April 2020, 8:00am
        )
}
new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const today = new Date().getTime();
*/
/********** the count down ******************/
const count_down_ele = document.querySelectorAll(".deadline h4");
const count_down_countainer = document.querySelector(".deadline");
const c = 10;
set_counter = (count_down_days) => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  const dead_t = new Date(year, month, day + count_down_days, hour, minute, 0);
  return dead_t;
};
counter_down = (days) => {
  const curent_t = new Date().getTime();
  const dead_t = set_counter(days).getTime();
  let t = dead_t - curent_t;
  if (t < 0) {
    clearInterval(countdown);
    count_down_countainer.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    return;
  }
  let time = todays(t);
  return time;
};
todays = (t) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  const time = [days, hours, minutes, seconds];
  return time;
};
display_count_down = () => {
  const count_down = counter_down(c);
  count_down_ele.forEach((item, index) => {
    if (count_down[index] < 10 && item !== undefined) {
      item.innerHTML = `0${count_down[index]}`;
    } else {
      item.innerHTML = count_down[index];
    }
  });
};

let countdown = setInterval(display_count_down, 1000);
display_count_down();
/********** the giveaway text****************/
const giveaway = document.querySelector(".giveaway");

setgiveAway = () => {
  const futureDate = set_counter(c);
  const weekday = weekdays[futureDate.getDay()];
  const monthDay = futureDate.getDate();
  const month = months[futureDate.getMonth()];
  const year = futureDate.getFullYear();
  const fullhour = futureDate.getHours();
  let hour = "";
  if (fullhour > 12) {
    hour = `${fullhour - 12}:00 pm`;
  } else {
    hour = `${fullhour}:00 am`;
  }
  giveaway.innerHTML = `Giveaway Ends On ${weekday}, ${monthDay} ${month} ${year} ${hour}`;
};
setgiveAway();
