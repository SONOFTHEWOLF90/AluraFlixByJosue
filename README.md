# AluraFlix

AluraFlix es una plataforma de videos creada con **React**. Este proyecto permite registrar, actualizar, eliminar y listar videos, utilizando un servidor local simulado mediante **JSON Server**.

## Índice

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Configuración de JSON Server](#configuración-de-json-server)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Descripción

AluraFlix es una aplicación que permite a los usuarios agregar, ver, actualizar y eliminar videos. Utiliza React para la interfaz de usuario y **JSON Server** para emular una API RESTful donde se almacenan los videos. Los usuarios pueden ingresar detalles como título, categoría, URL de la imagen, URL del video y una descripción, los cuales son gestionados a través de una interfaz fácil de usar.

## Tecnologías

Este proyecto fue creado con las siguientes tecnologías:

- **React**: Librería para la creación de interfaces de usuario.
- **React Router**: Para el manejo de rutas entre las diferentes páginas de la aplicación.
- **JSON Server**: Para simular un servidor backend y manejar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
- **Axios**: Para realizar solicitudes HTTP a la API de JSON Server.
- **CSS**: Para el estilo de la aplicación.

## Estructura del Proyecto

- **src/components**: Contiene los componentes reutilizables de la aplicación, como `Header`, `Footer`, `Modal`, `VideoCard`, etc.
- **src/pages**: Contiene las páginas principales de la aplicación, como `Home` y `NuevoVideo`.
- **db.json**: Archivo que simula la base de datos de los videos, gestionada por JSON Server.

## Instalación

Para ejecutar el proyecto localmente, sigue los siguientes pasos:

1. **Clona el repositorio**:
   git clone https://github.com/SONOFTHEWOLF90/AluraFlixbyJosue.git

2. **Accede a la carpeta del proyecto**:
    cd AluraFlixbyJosue
3.  **Instala las dependencias**:
    npm install

4.  **Instala y ejecuta JSON Server (en otro terminal)**:
    npm install -g json-server
    json-server --watch db.json --port 5000

5.  **Ejecuta la aplicación React**:
    npm start

Ahora, la aplicación debería estar disponible en http://localhost:3000 y JSON Server estará corriendo en http://localhost:5000.

 ## Configuración de JSON Server
 
JSON Server está configurado para leer el archivo db.json y emular un servidor API RESTful. El archivo db.json contiene los siguientes datos:


  "videos": 
    
      "id": 1,
      "titulo": "React para Principiantes",
      "categoria": "Frontend",
      "imagen": "https://path/to/imagen.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=XXXXX",
      "descripcion": "Este video cubre los fundamentos de React."



JSON Server manejará las siguientes rutas:

GET /videos: Devuelve la lista de videos.
POST /videos: Agrega un nuevo video.
PUT /videos/:id: Actualiza un video existente.
DELETE /videos/:id: Elimina un video.

## Uso

-  **Funcionalidades**:
Home: Visualiza una lista de los videos agregados.
Nuevo Video: Agrega un nuevo video al sistema.
Modal: Edita un video seleccionado.

- **Rutas**:

"/": Página principal donde se muestran los videos.
"/nuevo-video": Página para agregar un nuevo video.
"/editar-video/:id": Modal para editar un video existente.


## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del proyecto.
Crea una rama (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz commit (git commit -am 'Agrega nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Este archivo `README.md` proporciona una descripción clara de cómo funciona el proyecto, cómo instalarlo y cómo contribuir. Asegúrate de que los enlaces de la documentación y las rutas sean correctos para tu proyecto. Puedes también incluir más detalles o instrucciones adicionales según sea necesario.

Si necesitas más detalles o ajustes, ¡avísame!

Josue

