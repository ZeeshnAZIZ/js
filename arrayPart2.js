const marverl_heores = ["thor","superman"]
const dc_heores = ["spiderman","flash"]
//marverl_heores.push(dc_heores)
//console.log(marverl_heores)
//console.log(marverl_heores[2][1])

marverl_heores.concat(dc_heores)
//console.log(marverl_heores)
// concat return new array
const allheores = marverl_heores.concat(dc_heores)
console.log(allheores)
const all_new_heores = [...marverl_heores, ...dc_heores]
console.log(all_new_heores);
const new_array = [1,2,2,[4,5,6],7,8,9,[1,2,5,[9,8,5]]]
const real_array = new_array.flat(Infinity)
console.log(real_array)
console.log(Array.isArray("zeeshan"))
console.log(Array.from('zeeshan'))
//console.log(Array.from({name:"zeeshan"}))//answer is[] interesting
