// for In 
const myObject = {
    js: "javascript",
    py: "python"
}
for (const key in myObject) {
   console.log(`${myObject[key]} shortcut is ${key}`)
}

const card = ["js","py", "c++"]
for (const key in card) {
    console.log(card[key])
}

const myobj = {
    course: 'js',
    price : 12000
}

for (const key in myobj) {
   console.log(`course name is ${myobj.course} and price is ${myobj.price}`)
   break
}

const shortcut = {
    js :'javascript',
    html: 'hyper text markup language'
}

for (const key in shortcut) {
    console.log(`${key} fullname  is ${shortcut[key]}`)
    break
}