var agregar = document.getElementById("agregar");
function Ficha(nombre, apellido, dni, direccion) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  this.direccion=direccion;

  this.print = function() {
    return "<strong>" + "<ul><li>Nombre: " + "</strong>" + this.nombre + "</li>" +
            "<strong>" + "<li>Apellido: " + "</strong>" + this.apellido + "</li>" +
            "<strong>" + "<li>DNI: " + "</strong>" + this.dni + "</li>" +
            "<strong>" + "<li>Dirección: " + "</strong>" + this.direccion + "</li></ul>" + "</strong>"
  }
}

var fichas = [];

agregar.addEventListener("click",function() {
var nombre = document.getElementById ("nombre").value;
var apellido = document.getElementById ("apellido").value;
var dni = document.getElementById ("dni").value;
var direccion = document.getElementById ("direccion").value;

  var ficha = new Ficha(nombre, apellido, dni, direccion);

  fichas.push(ficha);
  datos.innerHTML = ficha.print();
});
