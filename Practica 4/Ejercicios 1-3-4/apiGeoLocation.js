//Ejercicio 1.1

function getLocation1() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(responseEj1)
  } else {
    alert('Su navegador no permite la geolocalización')
  }
}
function responseEj1(position) {
  var location = document.getElementById('responseEj1')
  var data = ''
  data += '<b>Latitud:</b> ' + position.coords.latitude + '<br>'
  data += '<b>Longitud: </b>' + position.coords.longitude + '<br>'
  data += '<b>Precisión: </b>' + position.coords.accuracy + 'mts.<br>'

  var date = new Date(position.timestamp)

  data +=
    '<b>Fecha: </b>' +
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getFullYear() +
    '<br>'

  data +=
    '<b>Hora: </b>' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds() +
    '<br>'
  location.innerHTML = data
}

//Ejercicio 1.3

function getlocation3() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(responseEj3, errorEj3)
  } else {
    alert('Su navegador no permite la geolocalización')
  }
}

function responseEj3(position) {
  var location = document.getElementById('responseEj3')
  var data = ''
  data += '<b>Latitud:</b> ' + position.coords.latitude + '<br>'
  data += '<b>Longitud: </b>' + position.coords.longitude + '<br>'
  data += '<b>Precisión: </b>' + position.coords.accuracy + 'mts.<br>'

  var date = new Date(position.timestamp)

  data +=
    '<b>Fecha: </b>' +
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getFullYear() +
    '<br>'
  data +=
    '<b>Hora: </b>' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds() +
    '<br>'
  location.innerHTML = data
}

function errorEj3(error) {
  alert('Código de error: ' + error.code + ' mensaje:' + error.message)
}

//Ejercicio 1.4

function getlocation4() {
  if (navigator.geolocation) {
    var geoconfig = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 30000,
    }
    navigator.geolocation.getCurrentPosition(responseEj4, errorEj4, geoconfig)
  } else {
    alert('Su navegador no permite la geolocalización')
  }
}

function responseEj4(position) {
  var location = document.getElementById('responseEj4')
  var data = ''
  data += '<b>Latitud:</b> ' + position.coords.latitude + '<br>'
  data += '<b>Longitud: </b>' + position.coords.longitude + '<br>'
  data += '<b>Precisión: </b>' + position.coords.accuracy + 'mts.<br>'

  var date = new Date(position.timestamp)

  data +=
    '<b>Fecha: </b>' +
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getFullYear() +
    '<br>'
  data +=
    '<b>Hora: </b>' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds() +
    '<br>'
  location.innerHTML = data
}

function errorEj4(error) {
  alert('Código de error: ' + error.code + ' mensaje:' + error.message)
}
