onmessage = function (e){
    let result = 0;
    let a = parseInt(e.data.a);
    let b = parseInt(e.data.b);
    result = a * b;
    postMessage(result);
}