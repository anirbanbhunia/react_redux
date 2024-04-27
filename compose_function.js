import {compose} from 'redux'
//first i create a function that remove spaces

function removeSpaces(str){
    return str.split(" ").join("")
}

//another function that repeat there input

function repeatString(str){
    return str.repeat(2) //can also use str+str
}

//another function that convert there input to uppercase

function converttoUpercase(str){
    return str.toUpperCase()
}

//if i want all method apply one by one 

// console.log(converttoUpercase(repeatString(removeSpaces("abc def ghi"))))

//but we use redux to do that

const composedFun = compose(removeSpaces,repeatString,converttoUpercase)
//it gives a functiuon
console.log(composedFun("abc def ghi"))
