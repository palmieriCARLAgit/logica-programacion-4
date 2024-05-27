const num= parseFloat(prompt("ingresa numero"))
function fibonacci(n) {
    if (num!=Number){
        console.log("ingrese un numero valido")
    }
    let sequence = [];
  
    let a = 0, b = 1;
    sequence.push(a);
  
    for (let i = 1; i < n; i++) {
        sequence.push(b);
        let next = a + b;
        a = b;
        b = next;
    }
  
    return sequence.join(', ');
}

let n = 3;
console.log(fibonacci( num));