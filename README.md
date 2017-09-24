# Practica Node

La practica consiste en la generacion de una API, para proporcionar anuncios que luego se mostraran en un pequeño Front

# Instalación

Instalar las dependencias del proyecto

$ npm install

Instalar las dependencias a nivel de estructura Express

$ cd nodepop
$ npm install

Arrancar el servidor de MongoDb, usar la sentencia necesaria en función del OS. Por ejemplo para Windows 10 :

mongod.exe --dbpath v:\data\db --directoryperdb

Para la inicialización de la BBDD lanzar el comando

$ npm run installDB

Una vez inicializada la BBDD salir de la ejecución  **Ctrl-C** 

Por último ejecutar nodemon (**node ./bin/www**) para lanzar el API y la app de anuncios

$ nodemon

# API
API para la gestión de anuncios.

Como URL Base
Anuncios
  http://localhost:3000/apiv1/anuncios

Tags
  http://localhost:3000/apiv1/tags

Modelo de datos

GET (anuncios)
  URLbase

  Filtrar un anuncio por su identificador

    URLbase/:id

  Filtrar por alguno de los parametros
    
    Ejemplo:
      Articulo
        URLbase/?nombre=Iphone 9
      Precio
        URLbase/?precio=10-500
  Paginación
    
    Ejemplo
      URLbase/?skip=2&limit=3

POST (anuncios)
  
    URLbase

GET (Tags)
  
    URLbase

# NOTAS
Como se puede ver cuando accede a localhost:3000 se ha creado un Frontal sencillo (sin practicamente maquetación) para mostrar los anuncios existentes, buscando el menor consumo de tiempo en este apartado ya que se entiende que principal objetivo de la practica es el trabajo en BackEnd y la creacion de la API.
