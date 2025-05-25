function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x > y && x !== y) console.log(x);
  else console.log(y);
}

obtenerMayor(2,4);
obtenerMayor(6,4);
obtenerMayor(4,4);

module.exports = obtenerMayor;
