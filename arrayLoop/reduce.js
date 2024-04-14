const val1 = [1,2,3]
const val2 = val1.reduce( function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc +currval
}, 0)
console.log(val2)

const shoppingCard = [
    {
    itemName: "jscourse",
    price: 999
    },
    {
        itemName: "mobilecourse",
        price: 1999
    },
] 
const toPay =shoppingCard.reduce( ( acc,currval) => {
    console.log(`acc is ${acc} and currval is ${currval.price}`)
   return acc+currval.price 
   
} ,0 )

 console.log(toPay)


const shopping = [
    {
        course : 'js ',
        prices : 10000
    },
    {
        course : 'c++',
        prices : 8999
    }, 
    {
        course : 'python',
        prices : 5000
    },
]

const acc = shopping.reduce((acc,currval) => acc+currval.prices  , 0 )
console.log(acc)


const myarray = [12,45,69]
const results  = myarray.reduce((acc,curr)=>{
    console.log(`acc is ${acc} and currval is ${curr}`)
    return acc+curr
})
console.log(results)