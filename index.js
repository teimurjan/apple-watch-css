const start = () => {
  const date = new Date();

  const secondHand = document.querySelector(".watch-hands .second");
  const getSecondsRotation = d => (d.getSeconds() / 60) * 360;
  secondHand.style.transform = `rotateZ(${getSecondsRotation(date)}deg)`;

  const minuteHand = document.querySelector(".watch-hands .minute");
  const getMinutesRotation = d => (d.getMinutes() / 60) * 360;
  minuteHand.style.transform = `rotateZ(${getMinutesRotation(date)}deg)`;

  const hourHand = document.querySelector(".watch-hands > .hour");
  const getHoursRotation = d =>
    (((d.getHours() + 24 + d.getMinutes() / 60) % 12 || 12) / 12) * 360;
  hourHand.style.transform = `rotateZ(${getHoursRotation(date)}deg)`;
};

start();
