const fs = require("fs"); //filestream module을 import

//CommonJS에서는 require("fs")형태로 임포트
//ES 모듈에서는 import fs form "fs" 형태로 임포트

let json = JSON.stringify(true);
console.log(json);

try {
    fs.writeFileSync('./write.txt',json);
} catch (error) {
    console.log(error);
}

json = JSON.stringify(["apple", "banana"]);
console.log(json);

try {
    fs.appendFileSync('./write.txt', json);
} catch (error) {
    console.log(error);
}

const rabbit = {
    name: "tori",
    color: "white",
    size: null,
};

json = JSON.stringify(rabbit);
console.log(rabbit);

try {
    fs.appendFileSync('./write.txt', json);
} catch (error) {
    console.log(error);
}

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
    console.log( `key: ${key}, value: ${value}`);
    return key === "name" ? "hansung" : value;
});

try {
    fs.appendFileSync('./write.txt', json);
} catch (error) {
    console.log(error);
}