const hbs = require('hbs');

//Helpers -> Una funcion que se dispara cuando el template lo requiere
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear()
});
hbs.registerHelper('capitalizar', (texto) => {
  let palabras = texto.split(' ')
  palabras.forEach( (palabra,idx) => {
    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
  })  
  return palabras.join(" ")
});