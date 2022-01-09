const archivos = [];

function readURL(file){
    if (file.value) {
        console.log(file.files[0].type);
        verificarArchivos(file.files[0].name);

        const archivo = { 
            nombre: file.files[0].name, 
            url: file.value
        };
        archivos.push(archivo);
        file.value = '';
    }
    console.log(archivos);
}

function verificarArchivos(nombre){
    const resultado = archivos.some( archivo => archivo.nombre === nombre);
    console.log(resultado);
}