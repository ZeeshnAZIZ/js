// for of 

const array = ['1','2','3','4']
for (const key of array) {
   // console.log(key)
}


const greeting = "hello world!"
for (const greet of greeting) {
   // console.log(`each word is ${greet}`);
}

// MAP

const map = new Map()
map.set(`Pak` , "Pakistan")
map.set(`USA` , "United States of America")
map.set(`Aus` , "Austraila")
//console.log(map)

for (const [key , value] of map) {
    console.log(key, `:`, value)
}
// [key , value] de structuring 

// for of not use of object becsasue object is not iterable