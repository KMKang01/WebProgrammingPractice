onmessage = function (e){
    let value1 = parseInt(e.data.value1);
    let value2 = parseInt(e.data.value2);
    let result = value1*value2;
    postMessage(result);
}