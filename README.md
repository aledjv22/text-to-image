# Texto a Imagen
Este proyecto convierte texto en una imagen utilizando el modelo [runwayml/stable-diffusion-v1-5](https://huggingface.co/runwayml/stable-diffusion-v1-5) de [Hugging Face](https://huggingface.co/). El usuario introduce un prompt, posteriormente el nombre de la imagen y finalmente el modelo genera una imagen a partir del texto introducido abriendo una ventana emergente con la imagen generada. 

## Configuración
1. Clonar el repositorio
2. Instalar las dependencias
```bash
npm install
```
3. Crear un archivo `.env` en la raíz del proyecto y añadir las siguientes variables de entorno:
```bash
HF_ACCESS_TOKEN=tu_token_aquí
```

## Ejecución
Para ejecutar el programa, utiliza el siguiente comando:
```bash
npm start
```

Sigue las intrucciones en la terminal:
1. Se te pedirá que ingreses un texto. Este texto será utilizado para generar la imagen.
2. Luego, se te pedirá que ingreses un nombre de archivo (sin extensión) para guardar la imagen. La imagen se guardará con este nombre y la extensión `.jpeg` en la carpeta del proyecto.

## Notas adicionales
- Las imágenes generadas se guardarán en la carpeta del proyecto con la extensión `.jpeg`.
- Asegúrate de no subir imágenes generadas ni el archivo **.env** al repositorio. El archivo **.gitignore** ya está configurado para excluir estos archivos.