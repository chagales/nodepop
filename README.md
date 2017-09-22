# Practica Node

La practica consiste en la generacion de una API, para proporcionar anuncios que luego se mostraran en un pequeño Front

# Instalación

Instalar las dependencias del proyecto

$ npm install

Arrancar el servidor de MongoDb, usar la sentencia necesaria en función del OS. Por ejemplo para Windows 10 :

mongod.exe --dbpath v:\data\db --directoryperdb

Para la inicialización de la BBDD lanzar el comando

$ npm run installDB

Una vez inicializada la BBDD salir de la ejecución  **Ctrl-C** 

Por último ejecutar nodemon (**node ./bin/www**) para lanzar el API y la app de anuncios

$ nodemon
