const padZero = (num, size) => {
  let s = String(num);
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
};

// convert to format: mm:ss
const timeConvert = (num) => {
  const minutes = padZero(Math.floor(num / 1000 / 60), 2);
  const seconds = padZero(num % 60, 2);
  return `${minutes}:${seconds}`;
};

const secondToTime = (num) => {
  const minutes = padZero(Math.floor(num / 60), 2);
  const seconds = padZero(num % 60, 2);
  return `${minutes}:${seconds}`;
};

const copyToClipboard = (url) => {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = url;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
};

// format date: MM-DD-YYYY -> 02-18-2020
const getCurrentDate = () => {
  const today = new Date();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`;
  const date = `${month}-${day}-${today.getFullYear()}`;
  return date;
}

export {
  timeConvert,
  secondToTime,
  copyToClipboard,
  getCurrentDate
}