// From https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Examples
export default function(min, max) {
  return Math.random() * (max - min) + min;
}