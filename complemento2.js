//2. Crear un objeto Mascota que tenga como parámetros Nombre, Edad y Color.//

function Mascota(Nombre, Edad, Color) {

    this.nombre = Nombre;
    this.edad = Edad;
    this.color = Color;
    
}
var mascota1 = new Mascota("Rexes", " 8 años", "blanco");

console.log(mascota1);