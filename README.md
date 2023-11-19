# Manual de Usuario
Pasos para ejecutar correctamente la aplicación del backend:

1. Crear un archivo .env en la raiz del proyecto con la siguiente información:

* HOST=Nombre del Host
* DATABASE=Nombre de la base de datos
* USER=Nombre del Usuario
* PASSWORD=Contraseña del usuario de MySQL

2. Ejecutar en una terminal dentro del proyecto el comando "npm i" para instalar todas las dependencias del proyecto.

3. Iniciar el servidor Apache y MySQL (Una posible opción seria usando el XAMPP).

4. Crear la base de datos utilizando un editor de MySQL de su preferencia (una opcíon es el conocido phpmyadmin) y ejecutar o importar el archivo "campeonato.sql" contenido en la carpeta SQL.

5. Para ejecutar el servidor se utiliza el comando npm run start.

6. Para ejecutar algunos Endpoints, usar algun RestClient (POSTMAN, ThunderClient, etc.)

#### Sentencia de ejemplos para ejecutar el CRUD, en éste caso, usando la extensión ThunderClient de VSC.

```
http://localhost:3000/users
``` 

```
http://localhost:3000/modalidades
``` 
