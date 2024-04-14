// MAP AUTOMATICALLY RETURN VALUE
const myNums = [1,2,3,4,5]
//const newMy = myNums.map( (num) => num + 10)

const newMy = myNums.map( (num) => num *10).map( ( num) => num +5)


 console.log(newMy)


 const my = [1,2,3,4,5]
 const myone = my.map((my) => my*5).map((my)=> my-2)
 console.log(myone)


 const map = [1,2,3,4,5]
 const newMap = map.map((map) => map*10).map((map) => map/5)
 console.log(newMap)