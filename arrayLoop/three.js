// for Each
const coding = ["js","py", "c++"]
coding.forEach(  function(item) {
    //console.log(item);
})
coding.forEach((item) => {
    //console.log(item)
})

function chess(item){
   // console.log(item)
}
//coding.forEach(chess)

const code = [
    {
        file: "javascript",
        fileType: "js"
    },
    {
        file: "Ms word",
        fileType: "winword"
    },
    {
        file: "excel",
        fileType: "xls"
    }
]
code.forEach(function (item){
    console.log(item.file)
})
