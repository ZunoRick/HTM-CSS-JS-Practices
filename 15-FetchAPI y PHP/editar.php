<?php
include 'inc/funciones/funciones.php';
include 'inc/layout/header.php';

$id = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);

$resultado = obtenerContacto($id);
$contacto = $resultado->fetch_assoc();

if (!$id) {
    die('ID no válido');
}

if($contacto == NULL)
    header('Location: index.php');

?>

<div class="contenedor-barra">
    <div class="contenedor barra">
        <a href="index.php" class="btn volver">Volver</a>
        <h1>Editar Contacto</h1>
    </div>
</div>

<div class="bg-amarillo contenedor sombra">
    <form action="#" id="contacto">
        <legend>Edite el contacto</legend>
        <?php include 'inc/layout/formulario.php'; ?>
    </form>
</div>

<?php include 'inc/layout/footer.php'; ?>