const myObject = {
    js : "javaScript",
    cpp : "c++",
    rb : "ruby",
    ja : "java"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
    
    
}