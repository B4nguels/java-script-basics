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

    return frase.length  //lenght retorna o numero de caratres da string(NAO LEO NAO É O CHAT GPT SOU EU B4NGUELS)

}

console.log(countCharacters())



function findMax(array) {

    let max = array[0]
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(findMax([4,6,9,69])) //pergunta pro leo dps pq nao entendi PORRA NENHUMA (FOI O CHAT QUE FEZ)


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // mesma coisa aqui

