// From https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/

export default function (element, varName, value) {
  return element.style.setProperty(`--${varName}`, value);
}