function sum(a, b) {
    return a + b;
}

console.log(sum(5, 3));

let a = true
let b = false

function isEven() {
    if (a) {
        console.log(a)
    } else {
        console.log("deu impar patrao!")
    }

    if (b) {
        console.log(b)
    } else {
        console.log("funfo mais b = false!")
    }

}

console.log(isEven())

let frase = "mochakk"

function countCharacters() {

    return frase.length  //lenght = comprimento em ingles ( tamanho maximo de alguma coisa)

}

console.log(countCharacters())


//(parametro palavra que  vai ser substituida depois) 
function findMax(array) {

    let max = array[0]
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(findMax([4,6,9,69]))


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

i++ 
i = i +  1

result *= i     
result = result * i 


console.log(factorial(5)); 
