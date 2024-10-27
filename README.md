# Structa

Organiza tu estudio, mejora tu aprendizaje y vence la curva del olvido. Retén un 90% de todo lo que estudias sin complicaciones.

## Links de interés
- [Documentación de desarrollo de extensiones de Chrome](https://developer.chrome.com/docs/extensions/get-started)
- [Arquitectura General](https://app.diagrams.net/?src=about#G1Ca5iYeM-XsCn1eI6U-lPLMFht8iE01ho#%7B%22pageId%22%3A%2295Kgtv_w7AZc3KkMki9Z%22%7D)
- [Organización en Github](https://github.com/Structa-team19)
- [Slides del pitch](https://docs.google.com/presentation/d/1iD3qRN6Gd30HZbEa2YurYFf2p3QaWHrEnDUDIjtpeiQ/edit#slide=id.p)
- [Notas varias de la idea](https://miro.com/app/board/uXjVLPbo8zI=/)
- [Mockups bases](https://excalidraw.com/#room=08187dd969e708e9934a,j65saKOhsiyUZj7Wwljz5g)

## Configurando proyecto para desarrollo

- Clona el repositorio
- Ejecuta `npm install`
- Run `npm run dev`

¡Eso es todo! 🚀

## Configura el proyecto para instalar la extension
- Si aún no lo haces, si las instrucciones anteriores.
- Ejecuta `npm run build`
- Ve a `chrome://extensions/`
- Activa el modo desarrollador
- Haz click en `Load unpacked`
- Selecciona la carpeta `dist` en `apps/structa-extension`
- Ahora la extensión debería estar instalada en tu navegador.

## Estructura basica del proyecto
Este es un monorepo creado con Turborepo. La estructura básica del proyecto es la siguiente:

```
.
├── apps
|   ├── structa-api // once implemented
│   └── structa-extension
├── packages
    ├── eslint-config
    └── typescript-config
```

## READMEs de las aplicaciones
- [Extensión de Structa](./apps/extension-app/README.md)

## Consideraciones

A pesar de que todos hablamos español, el código debe estar en inglés, respecto a todo nombre de archivo, variable, función, comentarios, etc.

Documentación explicativa como esta, puede estar en español. Y obviamente los textos de cara al usuario de la app deberían estar en español. Pero sin limitarse a ello en un futuro.
