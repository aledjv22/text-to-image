# Texto a Imagen
Este proyecto convierte texto en una imagen utilizando modelos de [Hugging Face](https://huggingface.co/). El usuario puede seleccionar entre varios modelos disponibles para generar la imagen a partir del texto introducido.

## Configuración
1. Clonar el repositorio.
2. Instalar las dependencias ejecutando:
    ```bash
    npm install
    ```
3. Crear un archivo `.env` en la raíz del proyecto y añadir la variable de entorno para el token de acceso de Hugging Face:
    ```bash
    HF_ACCESS_TOKEN=tu_token_aquí
    ```

## Ejecución
Para ejecutar el programa, utiliza el siguiente comando:
```bash
npm start
```

Sigue las instrucciones en la terminal:
1. Se te mostrará una lista de modelos disponibles. Selecciona el modelo que deseas utilizar para generar la imagen.
2. Ingresa un texto. Este texto será utilizado por el modelo seleccionado para generar la imagen.
3. Ingresa un nombre de archivo (sin extensión) para guardar la imagen. La imagen se guardará con este nombre y la extensión `.jpeg` en la carpeta del proyecto.

## Modelos Disponibles
Los modelos disponibles para generar imágenes son:
- Diffusion V1.5 (`runwayml/stable-diffusion-v1-5`)
- SDXL Turbo (`stabilityai/sdxl-turbo`)
- Diffusion V1.4 (`CompVis/stable-diffusion-v1-4`)
- Diffusion Inpainting (`runwayml/stable-diffusion-inpainting`)
- Diffusion 2.1 Base (`stabilityai/stable-diffusion-2-1-base`)
- Diffusion 2.1 (`stabilityai/stable-diffusion-2-1`)
- Realistic Vision V4.0 (`SG161222/Realistic_Vision_V4.0_noVAE`)
- IP Adapter FaceID (`h94/IP-Adapter-FaceID`)
- SDXL Lightning (`ByteDance/SDXL-Lightning`)

## Scripts Disponibles
- `npm start`: Ejecuta el programa.
- `npm run build`: Compila el proyecto.
- `npm run dev`: Compila y ejecuta el proyecto.
- `npm run clean`: Elimina la carpeta `dist` y todos los archivos `.jpeg`.
- `npm run clean:dist`: Elimina solo la carpeta `dist`.
- `npm run clean:jpeg`: Elimina todos los archivos `.jpeg`.

## Notas Adicionales
- Las imágenes generadas se guardarán en la carpeta del proyecto con la extensión `.jpeg`.
- Asegúrate de no subir imágenes generadas ni el archivo **.env** al repositorio. El archivo **.gitignore** ya está configurado para excluir estos archivos.

## Ideas de Mejora
- Implementar un traductor de texto para que el usuario pueda introducir un prompt en español, se traduzca al inglés y se genere la imagen. Esto permitiría obtener mejores resultados que si se introduce el texto en español directamente.