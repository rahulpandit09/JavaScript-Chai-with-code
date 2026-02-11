const marval_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marval_heros.push(dc_heros);

// console.log(marval_heros);
// console.log(marval_heros[3][2])


// const allheros = marval_heros.concat(dc_heros);
// console.log(allheros);


const all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros)