const express = require('express');

const app = express();

app.post('/users', (request, response)=>{
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Givaldo Santos'
    });
});

app.listen(3333);