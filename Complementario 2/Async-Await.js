/*Aplicar async/await para solucionar un problema aplicado a su proyecto autónomo que tenga por lo menos 3 arreglos. 
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

async function consultar_dominio(id) {
    const dominio = dominio.find((dominio) => dominio.id === id);
    if (!dominio) {
        const error = new Error();
        error.message = "Error Dominio no encontrado";
        throw error;
    }
    return dominio;
}

async function cosultar_enlace(id) {
    const enlace = enlace.find((enlace) => enlace.id === id);
    if (!enlace) {
        const error = new Error();
        error.message = "Error de enlace ";
        throw error;
    }
    return enlace;
}

async function main() {
    try {
        const dominio = await consultarcurso(1);
        const horario = await cosultarhorarioporid(dominio.idenlace);
        console.log(`El dominio es ${dominio.Nombre_dominio}, y el enlace designado es: ${enlace.enlace} `);
    } catch (error) {
        console.log(error.message);
    }
}

main();