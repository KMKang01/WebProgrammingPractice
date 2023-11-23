const express = require("express");
const fs = require("fs"); //filestream module을 import

const app = express();

//CommonJS에서는 require("fs")형태로 임포트
//ES 모듈에서는 import fs form "fs" 형태로 임포트

fs.writeFileSync('./write.txt',
    `<!DOCTYPE html>
    <html lang='ko'>
    <head>
     <title>JSON 외부 파일 읽기</title>
     <style>
        div{
            color: blue;
            font-size: 15px;
        }
     </style
    </head>
    <body>
    `
);

let json = '<div>' + JSON.stringify(true) + '</div>' + '\n\t';
console.log(json);

try {
    fs.appendFileSync('./write.txt',json);
} catch (error) {
    console.log(error);
}

json = '<div>' + JSON.stringify(["apple", "banana"]) + '</div>' + '\n\t';
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

json = '<div>' + JSON.stringify(rabbit) + '</div>' + '\n\t';
console.log(rabbit);

try {
    fs.appendFileSync('./write.txt', json);
} catch (error) {
    console.log(error);
}

json = '<div>' + JSON.stringify(rabbit, ["name", "color"]) + '</div>' + '\n\t';
console.log(json);

try {
    fs.appendFileSync('./write.txt', json);
} catch (error) {
    console.log(error);
}

fs.appendFileSync('./write.txt',
`</body>
</html>`
);

try{
    data = fs.readFileSync('./write.txt','utf-8');
    console.log(data);
} catch(error){
    console.log(error);
}
console.log(data);

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

  app.listen(5050, () => {
    console.log('서버가 5050번 포트에서 실행 중입니다.');
  });