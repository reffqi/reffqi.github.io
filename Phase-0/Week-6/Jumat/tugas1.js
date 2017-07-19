var transformArrToLowerCase = arr => {
  // Ubah setiap element array menjadi lowercase!
  return arr.map(isiArray => {
    return isiArray.toLowerCase();
  });
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']
