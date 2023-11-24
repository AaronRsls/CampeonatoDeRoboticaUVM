# Manual de Usuario
Pasos para ejecutar correctamente la aplicación del backend:

1. Crear un archivo .env en la raiz del proyecto con la siguiente información:

* HOST=Nombre del Host
* DATABASE=Nombre de la base de datos
* USER=Nombre del Usuario
* PASSWORD=Contraseña del usuario de MySQL

    SECRET=sufrasesecretra

    //tiempo en el que expira el token
    JWT_TIEMPO_EXPIRA = 7d

    //tiempo en el que expira la cookie
    JWT_COOKIE_EXPIRES = 90

2. Ejecutar en una terminal dentro del proyecto el comando "npm i" para instalar todas las dependencias del proyecto.

3. Iniciar el servidor Apache y MySQL (Una posible opción seria usando el XAMPP).

4. Crear la base de datos utilizando un editor de MySQL de su preferencia (una opcíon es el conocido phpmyadmin) y ejecutar o importar el archivo "campeonato.sql" contenido en la carpeta SQL.

5. Para ejecutar el servidor se utiliza el comando npm run start.

6. Para ejecutar algunos Endpoints, tenemos dos opciones, una usando un Cliente como por ejemplo: 

Para usar con el ThunderClient, la ruta quedaria de ésta manera:

/* GET equipos */
router.get('/', verificarPermisos(['Admin','Editor']),async function(req, res, next) {
  //Para probar con Cliente Rest
  //  res.send(arrayequipos = await equiposController.todos());
});

Para usar desde el navegador con las vistas, quedaria de ésta manera:

/* GET equipos */
router.get('/', verificarPermisos(['Admin','Editor']),async function(req, res, next) {
  //Para probar desde Vistas (views)
  res.render('equipos',arrayequipos = await equiposController.todos());
});

7. Usando cualquier método para probar el API tenemos que Registrarnos como un nuevo usuario, teniendo en cuenta que cada usuario nuevo tiene el privilegio de solo Editor y solo el Administrador podrá modificar el perfil de algun usuario que sea solo Editor para convertirlo en Administrador.

#### Sentencia de ejemplos para ejecutar el CRUD, en éste caso, usando la extensión ThunderClient de VSC.

```
http://localhost:3000/users
``` 

```
http://localhost:3000/modalidades
``` 

```
http://localhost:3000/autorizacion/registro
``` 

```
http://localhost:3000/autorizacion/login
``` 