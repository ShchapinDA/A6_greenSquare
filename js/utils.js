/*getTimestamp() возвращает число милисекунд с 1 января 1970 до момента вызова*/
function getTimestamp() {
  let d = new Date();
  return d.getTime();
}
/*randomDivId() возвращает селектор случайного дива в сетке*/
function randomDivId() {
  let d = Math.floor(Math.random() * 6) + 1;
  let n = Math.floor(Math.random() * 6) + 1;
  return `#slot-${d}${n}`;
}
