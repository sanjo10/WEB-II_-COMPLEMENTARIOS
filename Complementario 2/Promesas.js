/*Aplicar Promesas para solucionar un problema aplicado a su proyecto autónomo que tenga por lo menos 3 arreglos. 
Estos 3 arreglos deben tener relación con el proceso principal de su proyecto. Por ejemplo, si fuese consultar 
los sitios web con sus link: Nombre del sitio y sus link.*/

const Dominio = [{
    id: 1,
    Nombre_Dominio: "Uleam",
    id_Enlace: 1
},
{
    id: 2,
    Nombre_Dominio: "Moodle",
    id_Enlace: 2
},
{
    id: 3,
    Nombre_Dominio: "Office 365",
    id_Enlace: 3
}
]
const Enlaces = [{
    id: 1,
    id_Enlace: "https://aulavirtual.uleam.edu.ec/"
},
{
    id: 2,
    id_Enlace: 'https://aulavirtualmoodle.uleam.edu.ec/'
},
{
    id: 3,
    Enlace: 'https://www.office.com/'
}
]


function consultar_dominio(id) {
    return new Promise((resolve, reject) => {
        const dominio = dominio.find((dominio) => dominio.id === id);
        if (!dominio) {
            const error = new Error();
            error.message = "Error Dominio no encontrado";
            reject(error);
        }
        resolve(dominio);
    })
}


function cosultar_enlace(id) {
    return new Promise((resolve, reject) => {
        const enlace = enlace.find((enlace) => enlace.id === id);
        if (!enlace) {
            const error = new Error();
            error.message = "Error de enlace ";
            reject(error);
        }
        resolve(enlace);
    })
}

let dominioAux = [];

consultar_dominio(1).then((dominio) => {
        dominioAux = enlace;
        return cosultar_enlace(dominio.idenlace);
    })
    .then((enlace) => {
        dominioAux.enlace = enlace;
        delete dominioAux.iddominio;
        console.log(dominioAux)
    })

.catch((err) => {
    console.log(err.message);
})