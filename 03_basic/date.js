// date calucauted milisecond
// date started 1 january 1970
let myDate = new Date()
console.log(myDate.toString()) // day , date , time 
console.log(myDate.toDateString())
console.log(myDate.toLocaleString()) // 2/28/2024, 12:42:22 AM time show this format
console.log(typeof myDate)
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate)
console.log(myCreatedDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleTimeString()) // 12:45:34 AM this show time output
let myTimeStamp = Date.now()
console.log(myTimeStamp)
let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())
// locale string ma date or time
// date string ma day or date
// locle date string ma only date
// to iso string (2024-02-27T 19:45:34.995Z)


const myNewDate = new Date(2024 , 2 ,28 )
console.log(myNewDate)
console.log(myNewDate.toDateString())
