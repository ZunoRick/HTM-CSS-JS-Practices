const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();
app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.post('/upload', (req, res) => {
    let archivo = req.files.file;
    // archivo.mv(`./uploads/${archivo.name}`);
    console.log(archivo);
    res.send(`Archivo ${archivo.name} subido correctamente al servidor`);
});

app.listen(3000, () =>{
    console.log('Servidor corriendo en el puerto 3000');
})