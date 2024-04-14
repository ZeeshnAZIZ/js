for (let index = 0; index <= 10; index++) {
   const element = index;
   if (element == 5) {
       console.log("5 is best number")
   }
   console.log(element)
   
}

for (let i = 0; i < 10; i++) {
   console.log(`outer loop value:${i}`);
  for (let j = 0; j < 20; j++) {
   console.log(`inner loop value: ${j} and iner loop ${i}`);
   console.log(i + '*' + j + '=' + i*j);
  } 
   
}


// continue and break

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("detected is 5")
        break
    }
    console.log(`value of i is: ${index}`)
    
}
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("detected is 5")
        continue
    }
    console.log(`value of i is: ${index}`)
    
}

for (let index = 0; index <= 5; index++) {
    if (index == 4) {
        console.log('value detected')
        continue
    }
    console.log(`value of index is ${index}`)
}


 for (let index = 0; index <= 5; index++) {
    console.log(`outer val is ${index}`)
    for (let f = 0; f < 10; f++) {
        console.log(`Inner val is ${f} and outer value is ${index}`)
        console.log(index + '*' + f + '=' + index*f)
        
    }
    
 }