const alumnosFsdbSeis = [
  { nombre: "Bruna", nota: 10 },
  { nombre: "Ronaldinho", nota: 11 },
  { nombre: "Nico", nota: 10.5 },
  { nombre: "Mateo", nota: 10 },
];

const alumnosFsdbUno = [
  { nombre: "Anurb", nota: 1 },
  { nombre: "César", nota: 5 },
  { nombre: "Hermez", nota: 5 },
  { nombre: "Pedro", nota: 7 },
];

const alumnosFsdbRandom = [
  { nombre: "A", nota: 5 },
  { nombre: "C", nota: 1 },
  { nombre: "H", nota: 1 },
  { nombre: "P", nota: 1 },
];

console.log(alumnosFsdbRandom);

const objeto = { nombre: "A", nota: 5 };
console.log(objeto);
objeto.ronaldinho = "Un crack";
console.log(objeto);

// alumnosFsdbRandom.push({ nombre: "Alguien", nota: 10 });
console.log(alumnosFsdbRandom);

const promedioNotas = (alumnos) => {
  let sumaNotas = 0;
  for (let i = 0; i < alumnos.length; i++) {
    sumaNotas += alumnos[i].nota;
  }

  return sumaNotas / alumnos.length;
};

console.log(promedioNotas(alumnosFsdbSeis));

/**
 * map
 * foreach
 * filter
 * find
 * reduce
 */
