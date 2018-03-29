export function getCurrentTime = () => {
  const date = new Date();
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return y + '' + m + '' + d + '' + h + '' + f + '' + s; //20160614134947
}