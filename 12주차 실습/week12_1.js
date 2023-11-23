const express = require("express");
const fs = require("fs"); //filestream module을 import

const app = express();

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

try{
    data = fs.readFileSync('./write.txt','utf-8');
    console.log(data);
} catch(error){
    console.log(error);
}

function print(){
    const div = document.createElement("div");
    div.innerHTML = data;
    document.body.appendChild(div);
}

app.get('/', (req, res) => {
    fs.readFile('./write.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('파일을 읽는 중 에러가 발생했습니다.');
      } else {
        res.send(data);
      }
    });
  });

  app.listen(5500, () => {
    console.log('서버가 8080번 포트에서 실행 중입니다.');
  });