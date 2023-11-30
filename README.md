# Manual de Usuario
Pasos para ejecutar correctamente la aplicación del backend:

1. Crear un archivo .env en la raiz del proyecto con la siguiente información:

* HOST=Nombre del Host
* DATABASE=Nombre de la base de datos
* USER=Nombre del Usuario
* PASSWORD=Contraseña del usuario de MySQL

    SECRET=sufrasesecretra
    TIEMPOEXPIRA = 1d

2. Ejecutar en una terminal dentro del proyecto el comando "npm i" para instalar todas las dependencias del proyecto.

3. Iniciar el servidor Apache y MySQL (Una posible opción seria usando el XAMPP).

4. Crear la base de datos utilizando un editor de MySQL de su preferencia (una opcíon es el conocido phpmyadmin) y ejecutar o importar el archivo "campeonato.sql" contenido en la carpeta SQL.

5. Para ejecutar el servidor se utiliza el comando npm run start.

6. Para ejecutar todos los Endpoints, se crearon vistas utilizando el motor de plantillas ejs, con lo cual desde el navegador podemos accesar a todas las opciones

7. Tenemos que Registrarnos como un nuevo usuario, teniendo en cuenta que cada usuario nuevo tiene el privilegio de solo Editor y solo el Administrador podrá modificar el perfil de algun usuario que sea solo Editor para convertirlo en Administrador.

#### Sentencia para visualizar toda la API desde el navegador.

```
http://localhost:3000
``` 

