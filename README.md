# 🐾 Desafío - Veterinaria JS

 Proyecto correspondiente al módulo de fundamentos de Node.js en **Desafío Latam** para la gestión y registro de citas en una veterinaria.

---

## 🛠️ Tecnologías utilizadas

- **JavaScript (ES6+)**
- **Node.js**
- **Módulo nativo File System (`fs`)**

---

## 📋 Requisitos e Instalación

Para ejecutar este proyecto necesitas tener instalado [Node.js](https://nodejs.org/) en tu equipo.

1. Clona este repositorio:
   
  git clone [https://github.com/TU-USUARIO/desafio-veterinaria-js.git](https://github.com/TU-USUARIO/desafio-veterinaria-js.git)

2. Navega al directorio del proyecto:

  cd desafio-veterinaria-js

### La interacción se realiza desde la terminal utilizando el script index.js.

## Registrar una nueva cita

Para agregar un registro, debes pasar la operación registrar junto con los 5 datos requeridos (nombre, edad, tipo de animal, color y síntoma/enfermedad):

```bash

node index.js registrar Benito "2 años" perro blanco vomitos

```

Nota: Si la edad o algún campo contiene espacios, asegúrate de envolverlo entre comillas dobles (" ")...

## Leer las citas registradas

Para mostrar en consola la lista completa de las citas agendadas:

```bash

node index.js leer

```
## 📂 Estructura del proyecto

- index.js: Archivo principal que recibe los argumentos por línea de comandos y ejecuta las funciones.
- operaciones.js: Módulo con la lógica para leer y escribir sobre el almacenamiento local.
- citas.json: Archivo de persistencia de datos con formato JSON.
