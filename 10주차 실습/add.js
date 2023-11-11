onmessage = function (e){
    var result = 0;
    var a = parseInt(e.data.a);
    var b = parseInt(e.data.b);
    result = a + b;
    postMessage(result);
}