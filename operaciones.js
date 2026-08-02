const fs = require("fs");

const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync("citas.json", JSON.stringify(citas));
};

const leer = () => {
    console.log(citas);
};

module.exports = {
    registrar,
    leer
};