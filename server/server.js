const express = require('express');
const path = require('path');
const app = express();

//아래 3줄 > React와 nodejs 서버 간 ajax 요청 원활하도록 함
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.listen(8080, function(){
    console.log('listening on 8080 - 리액트와 서버 연결됨')
});

app.use(express.static(path.join(__dirname, 'react-project/build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});

console.log('Hello world')

// 고객이 URL에 아무거나 입력하면 리액트 프로젝트 보내줌(리액트 라우팅)
// 가장 하단에 놓아야 함
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});