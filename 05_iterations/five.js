const coding = ["java","ruby","c++","js","python"];

coding.forEach( function (val) {
    //console.log(val)
})


// coding.forEach( (item) => {
//     console.log(item)
// } )

function printMe(item){
    console.log(item)
}

// coding.forEach(printMe)


coding.forEach( (item, index,arr) => {
    // console.log(item, index, arr)
})


const myCoading = [
    {
        languageName : "javaScript",
        languageFile : "java"
    },
    {
        languageName : "dart",
        languageFile : "mongo"
    },
    {
        languageName : "python",
        languageFile : "node"
    },
    {
        languageName : "php",
        languageFile : "ruby"
    },
]

myCoading.forEach( (item) => {
    console.log(item.languageName)
} )