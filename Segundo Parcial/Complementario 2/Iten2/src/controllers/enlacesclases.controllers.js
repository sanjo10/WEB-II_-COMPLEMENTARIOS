const { NombreLinkClase } = require("../models/index");

function ListEnlacesClases() {
  return new Promise((resolve, reject) => {
    NombreLinkClase.find({}, function (error, clases) {
      if (error) return handleError(error);
      let listclases = "";
      clases.forEach((element) => {
        listclases += `🌐📚 *ENLACE* ➡ ${element.nombre_link_clase} \n`;
      });
      resolve(listclases);
    });
  });
}


module.exports={
    ListEnlacesClases
}