# RequestData

La clase `RequestData` facilita el envío de solicitudes HTTP con configuraciones flexibles en JavaScript.

## Uso

Importa la clase `RequestData` en tu aplicación y crea una instancia con la configuración deseada:

````markdown
El método `sendRequest()` envía la solicitud HTTP y devuelve una promesa:

```javascript
// Ejemplo de uso de la clase RequestData
import { RequestData } from "request-data";

const requestData = new RequestData({
  url: "https://api.example.com/data",
  method: "POST",
  debug: true,
  body: { key: "value" },
  typeSend: "JSON",
  typeReceive: "JSON",
  addBody: true
});

try {
  const response = await requestData.sendRequest();
  console.log("Response:", response);
} catch (error) {
  console.error("Request failed:", error);
}
```
````

# Documentación

## Constructor

```javascript
/**
 * Constructor de la clase RequestData.
 * @param {object} data - Configuración inicial para la solicitud.
 * @param {string} [data.url=window.location.href] - URL de la solicitud (por defecto, la URL actual).
 * @param {string} [data.method="POST"] - Método HTTP (por defecto, "POST").
 * @param {boolean} [data.debug=false] - Habilitar modo de depuración (por defecto, desactivado).
 * @param {object} [data.body] - Cuerpo de la solicitud (opcional).
 * @param {string} [data.typeSend="JSON"] - Formato de datos enviados ("JSON" por defecto).
 * @param {string} [data.typeReceive="JSON"] - Formato esperado de los datos de respuesta ("JSON" por defecto).
 * @param {boolean} [data.addBody=true] - Adjuntar cuerpo de la solicitud a los datos de respuesta (por defecto, activado).
 */
constructor(data) {
  // Implementación del constructor
}
```

## Métodos Principales

- **setUrl(url)**: Establece la URL de la solicitud.
- **getUrl()**: Obtiene la URL actual de la solicitud.
- **setDebug(debug)**: Establece el modo de depuración.
- **getDebug()**: Obtiene el estado actual del modo de depuración.
- **sendRequest()**: Envía la solicitud HTTP con la configuración actual y devuelve una promesa con la respuesta.

## Compatibilidad

Este proyecto utiliza características modernas de JavaScript que pueden no ser compatibles con todos los navegadores o entornos de ejecución. A continuación se detallan los requisitos mínimos de compatibilidad:

- Sintaxis de Campos Privados de Clase (#url):
  - Compatibilidad con navegadores: Google Chrome (versión XX+), Mozilla Firefox (versión XX+), Safari (versión XX+), Microsoft Edge (versión XX+).
  - Compatibilidad con Node.js: Node.js (versión XX+).
- Convención de "Name Mangling" (**url**): \* Esta convención no afecta la compatibilidad con los navegadores o entornos de ejecución, ya que es una convención de desarrollo más que una característica del lenguaje.
  Es recomendable verificar la compatibilidad con las características de JavaScript utilizadas en este proyecto según los requisitos de tu aplicación y el entorno de ejecución específico. Consulta la documentación oficial de ECMAScript y los recursos de compatibilidad de navegadores y entornos de Node.js para obtener más información.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estas pautas:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
3. Realiza tus cambios y haz commit de ellos (git commit -am 'Agrega nueva característica').
4. Sube tus cambios a la rama (git push origin feature/nueva-caracteristica).
5. Abre un pull request.

## Autor

- **David Muñoz Cruz**
  - **Correo electrónico:** [davidmctf@gmail.com]()
