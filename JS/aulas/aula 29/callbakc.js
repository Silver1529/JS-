function f1() {
    setTimeout(function() {
        console.log('f1 executou após 1 segundo');
    }, 1000);
    console.log('f1 iniciou');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

f1(); 
f2(); 
f3();
console.log('ola mundo');