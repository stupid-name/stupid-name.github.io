export default function getData(url) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);

  xhr.send();

  if (xhr.status != 200) {
    console.log('Data no found')
  } else {
    return JSON.parse(xhr.responseText);
  }
}