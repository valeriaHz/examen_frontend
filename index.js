/* crear objeto datos 3 alumnos crear funcion para desestructurar objeto */

const objeto = [
    {
        nombre: "Fernando",
        matricula: "L235648",
        semestre: "octavo",
    },
    {
        nombre: "Camila",
        matricula: "L235635",
        semestre: "segundo",
    },
    {
        nombre: 'Dilan',
        matricula: 'L235628',
        semestre: 'quinto',
    }
];


const obtener_datos = (dato) => {
    let {nombre, matricula, semestre} = dato;
    console.log(`Los datos son: ${nombre}, ${matricula}, ${semestre} `);
}

let datos = [alumno1, alumno2, alumno3] = objeto;
obtener_datos(alumno1);
obtener_datos(alumno2);
obtener_datos(alumno3);




